// Runs Stockfish on every position of every line and writes src/data/analysis/*.json.
// Every position gets the top 3 moves; the last position of each line gets a
// deeper search with longer continuations.
//   npx tsx scripts/analyse-lines.ts            (runs 4 shards in parallel, then merges)
//   DEPTH=14 END_DEPTH=18 SHARDS=4 npx tsx scripts/analyse-lines.ts
import { createRequire } from 'node:module'
import { spawn } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { Chess } from 'chess.js'
import { openings } from '../src/data/openings'
import { fenKey } from '../src/lib/repertoire'

const DEPTH = Number(process.env.DEPTH ?? 14)
const END_DEPTH = Number(process.env.END_DEPTH ?? 18)
const SHARDS = Number(process.env.SHARDS ?? 4)
const OUT = 'src/data/analysis'
const TMP = 'scripts/analysis'

/** One engine line: SAN moves and a score from White's point of view (centipawns, or "#n" for mate). */
export interface AnalysedLine {
  m: string
  s: number | string
}
export interface AnalysedPosition {
  d: number
  l: AnalysedLine[]
}

// Every position, with whether it ends a line (deeper search).
const jobs = new Map<string, { fen: string; end: boolean }>()
for (const o of openings)
  for (const line of o.lines) {
    for (const mv of line.moves) {
      for (const fen of [mv.fenBefore, mv.fenAfter]) if (!jobs.has(fenKey(fen))) jobs.set(fenKey(fen), { fen, end: false })
    }
    const last = line.moves[line.moves.length - 1].fenAfter
    jobs.set(fenKey(last), { fen: last, end: true })
  }
const all = [...jobs.entries()].sort((a, b) => a[0].localeCompare(b[0]))

const shard = process.env.SHARD
if (shard === undefined) {
  mkdirSync(TMP, { recursive: true })
  console.log(`${all.length} positions, ${all.filter(([, j]) => j.end).length} line ends, ${SHARDS} shards`)
  // MERGE_ONLY=1 rebuilds the output from the shard files already on disk.
  if (!process.env.MERGE_ONLY) await Promise.all(
    Array.from({ length: SHARDS }, (_, i) =>
      new Promise<void>((resolve, reject) => {
        const child = spawn(process.execPath, [...process.execArgv, process.argv[1]], { env: { ...process.env, SHARD: String(i) }, stdio: 'inherit' })
        child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`shard ${i} failed`))))
      }),
    ),
  )
  const merged: Record<string, AnalysedPosition> = {}
  for (let i = 0; i < SHARDS; i++) if (existsSync(`${TMP}/shard-${i}.json`)) Object.assign(merged, JSON.parse(readFileSync(`${TMP}/shard-${i}.json`, 'utf8')))
  // Split by opening so each page loads only what it needs.
  mkdirSync(OUT, { recursive: true })
  for (const o of openings) {
    const mine: Record<string, AnalysedPosition> = {}
    for (const line of o.lines)
      for (const mv of line.moves)
        for (const fen of [mv.fenBefore, mv.fenAfter]) if (merged[fenKey(fen)]) mine[fenKey(fen)] = merged[fenKey(fen)]
    writeFileSync(`${OUT}/${o.id}.json`, JSON.stringify(mine))
  }
  console.log(`wrote ${openings.length} files to ${OUT}`)
  process.exit(0)
}

// ---- One shard ----
const require = createRequire(import.meta.url)
let onLine: (line: string) => void = () => {}
const engine = require('stockfish')('lite-single', (line: string) => onLine(line))

function search(fen: string, depth: number, plies: number): Promise<AnalysedPosition> {
  return new Promise((resolve) => {
    const white = fen.split(' ')[1] === 'w'
    const found = new Map<number, { uci: string[]; s: number | string }>()
    onLine = (line) => {
      if (line.startsWith('info') && line.includes(' pv ') && line.includes(` depth ${depth} `)) {
        const k = Number(/ multipv (\d+)/.exec(line)?.[1] ?? 1)
        const cp = / score cp (-?\d+)/.exec(line)
        const mate = / score mate (-?\d+)/.exec(line)
        const sign = white ? 1 : -1
        const s = cp ? sign * Number(cp[1]) : `#${sign * Number(mate![1])}`
        found.set(k, { uci: line.split(' pv ')[1].trim().split(' ').slice(0, plies), s })
      }
      if (line.startsWith('bestmove')) {
        const l = [...found.entries()]
          .sort((a, b) => a[0] - b[0])
          .map(([, v]) => {
            const c = new Chess(fen)
            const sans: string[] = []
            for (const u of v.uci) {
              try {
                sans.push(c.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }).san)
              } catch {
                break
              }
            }
            return { m: sans.join(' '), s: v.s }
          })
        resolve({ d: depth, l })
      }
    }
    engine.processCommand(`position fen ${fen}`)
    engine.processCommand(`go depth ${depth}`)
  })
}

const i = Number(shard)
const file = `${TMP}/shard-${i}.json`
const done: Record<string, AnalysedPosition> = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {}
engine.processCommand('uci')
engine.processCommand('setoption name MultiPV value 3')
const mine = all.filter((_, n) => n % SHARDS === i)
let count = 0
for (const [key, job] of mine) {
  const need = job.end ? END_DEPTH : DEPTH
  if (!(done[key] && done[key].d >= need)) {
    const legal = new Chess(job.fen).moves().length
    done[key] = legal === 0 ? { d: need, l: [] } : await search(job.fen, need, job.end ? 12 : 6)
  }
  if (++count % 50 === 0) {
    writeFileSync(file, JSON.stringify(done))
    console.log(`shard ${i}: ${count}/${mine.length}`)
  }
}
writeFileSync(file, JSON.stringify(done))
console.log(`shard ${i}: done`)
engine.terminate?.()
process.exit(0)
