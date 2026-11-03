// Finds natural-looking opponent moves that leave the book and lose, and the
// trainee's punishment for each, then writes src/data/deviations.json.
//
// "Natural-looking" = among Stockfish's top moves at a very shallow depth,
// i.e. a move a weaker player could easily choose. "Losing" = a deeper search
// says it gives the trainee a clear advantage. Run with: npx tsx scripts/find-deviations.ts
import { createRequire } from 'node:module'
import { writeFileSync } from 'node:fs'
import { Chess } from 'chess.js'
import { openingSources } from '../src/data/index'
import { buildOpening, buildBook, bookMoves, fenKey } from '../src/lib/repertoire'
import type { Deviation } from '../src/lib/deviations'

const require = createRequire(import.meta.url)
const SHALLOW = Number(process.env.SHALLOW ?? 3)
const DEPTH = Number(process.env.DEPTH ?? 13)
const CANDIDATES = Number(process.env.CANDIDATES ?? 6)
/** How much worse than the best move the deviation must be (centipawns). */
const MIN_LOSS = Number(process.env.MIN_LOSS ?? 130)
/** The trainee's advantage after the deviation must be at least this. */
const MIN_EDGE = Number(process.env.MIN_EDGE ?? 120)
/** A punishing move counts if it is this close to the engine's best. */
const ACCEPT_WINDOW = Number(process.env.ACCEPT_WINDOW ?? 60)
/** At the shallow depth the mistake must look about as good as the best move. */
const LOOKS_OK = Number(process.env.LOOKS_OK ?? 90)
/** Keep at most this many deviations per position, the most costly first. */
const PER_POSITION = Number(process.env.PER_POSITION ?? 2)

interface Info {
  rank: number
  score: number
  pv: string[]
}

type Pending = { resolve: (infos: Info[]) => void; infos: Map<number, Info> }
let pending: Pending | null = null
const engine = require('stockfish')('lite-single', (line: string) => {
  if (!pending) return
  if (line.startsWith('info') && line.includes(' pv ')) {
    const rank = Number(/ multipv (\d+)/.exec(line)?.[1] ?? 1)
    const m = /score (cp|mate) (-?\d+)/.exec(line)
    if (!m) return
    const score = m[1] === 'cp' ? Number(m[2]) : Math.sign(Number(m[2])) * (10000 - Math.abs(Number(m[2])))
    pending.infos.set(rank, { rank, score, pv: line.split(' pv ')[1].trim().split(' ') })
  }
  if (line.startsWith('bestmove')) {
    const p = pending
    pending = null
    p.resolve([...p.infos.values()].sort((a, b) => a.rank - b.rank))
  }
})

/** Scores are from the side to move's point of view. */
function search(fen: string, depth: number, multipv: number): Promise<Info[]> {
  return new Promise((resolve) => {
    pending = { resolve, infos: new Map() }
    engine.processCommand(`setoption name MultiPV value ${multipv}`)
    engine.processCommand(`position fen ${fen}`)
    engine.processCommand(`go depth ${depth}`)
  })
}

const VALUE: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 }
function material(chess: Chess, color: 'w' | 'b'): number {
  let n = 0
  for (const row of chess.board()) for (const sq of row) if (sq) n += (sq.color === color ? 1 : -1) * VALUE[sq.type]
  return n
}

/** A short plain-English summary of what the punishment achieves. */
function describeGain(fen: string, pv: string[], score: number): string {
  if (score > 9000) return 'It leads to checkmate.'
  const chess = new Chess(fen)
  const me = chess.turn()
  const start = material(chess, me)
  // Play an even number of plies so the opponent has recaptured.
  for (const uci of pv.slice(0, pv.length >= 8 ? 8 : pv.length - (pv.length % 2))) {
    try {
      chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
    } catch {
      break
    }
  }
  const won = material(chess, me) - start
  const pawns = (score / 100).toFixed(1)
  if (won >= 9) return `You win the queen (engine: +${pawns}).`
  if (won >= 5) return `You win a rook or more (engine: +${pawns}).`
  if (won >= 3) return `You win a piece (engine: +${pawns}).`
  if (won >= 2) return `You win two pawns (engine: +${pawns}).`
  if (won >= 1) return `You win a pawn and keep the pressure (engine: +${pawns}).`
  return `You get a big lead in development and position (engine: +${pawns}).`
}

function san(fen: string, uci: string): string {
  return new Chess(fen).move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] }).san
}

engine.processCommand('uci')
engine.processCommand('setoption name Hash value 64')

const found = new Map<string, Deviation>()
const only = process.env.OPENINGS?.split(',')
let positions = 0
for (const src of openingSources.filter((s) => !only || only.includes(s.id))) {
  const opening = buildOpening(src)
  const book = buildBook(opening.lines)
  const done = new Set<string>()
  for (const line of opening.lines) {
    for (const mv of line.moves) {
      if (mv.isTrainee) continue
      const key = fenKey(mv.fenBefore)
      if (done.has(key)) {
        for (const d of found.values()) if (d.openingId === opening.id && d.fenKey === key && !d.lineIds.includes(line.id)) d.lineIds.push(line.id)
        continue
      }
      done.add(key)
      positions++
      const inBook = new Set(bookMoves(book, mv.fenBefore).map((b) => b.san))
      const shallow = await search(mv.fenBefore, SHALLOW, CANDIDATES)
      const [best] = await search(mv.fenBefore, DEPTH, 1)
      if (!best) continue
      const here: Deviation[] = []
      for (const cand of shallow) {
        if (cand.score < shallow[0].score - LOOKS_OK) continue
        const uci = cand.pv[0]
        const mistake = san(mv.fenBefore, uci)
        if (inBook.has(mistake)) continue
        const after = new Chess(mv.fenBefore)
        after.move(mistake)
        if (after.isGameOver()) continue
        const replies = await search(after.fen(), DEPTH, 4)
        if (!replies.length) continue
        const edge = replies[0].score
        const loss = best.score + edge
        if (loss < MIN_LOSS || edge < MIN_EDGE) continue
        const accept = replies.filter((r) => r.score >= edge - ACCEPT_WINDOW && r.score >= MIN_EDGE).map((r) => san(after.fen(), r.pv[0]))
        // The refutation line, trainee move first, in SAN (up to 5 plies).
        const pvChess = new Chess(after.fen())
        const refutation: string[] = []
        for (const u of replies[0].pv.slice(0, 5)) {
          try {
            refutation.push(pvChess.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }).san)
          } catch {
            break
          }
        }
        // Keep the refutation ending on the trainee's move.
        if (refutation.length % 2 === 0) refutation.pop()
        here.push({
          id: `${opening.id}|${key}|${mistake}`,
          openingId: opening.id,
          lineIds: [line.id],
          fenKey: key,
          bookSan: mv.san,
          mistake,
          loss,
          edge,
          accept,
          refutation,
          gain: describeGain(after.fen(), replies[0].pv, edge),
        })
      }
      for (const d of here.sort((a, b) => b.loss - a.loss).slice(0, PER_POSITION)) {
        found.set(d.id, d)
        console.log(`${opening.name} / ${line.name}: ${d.mistake} instead of ${mv.san} loses ${d.loss}cp, punish with ${d.accept.join('/')}`)
      }
    }
  }
}

const list = [...found.values()].sort((a, b) => a.openingId.localeCompare(b.openingId) || b.loss - a.loss)
writeFileSync(process.env.OUT ?? new URL('../src/data/deviations.json', import.meta.url), JSON.stringify(list, null, 1) + '\n')
console.log(`checked ${positions} positions, found ${list.length} deviations`)
engine.terminate?.()
process.exit(0)
