// Checks every trap: legal moves, the mistake leaves the trainee to move, and
// Stockfish agrees each of the trainee's moves is (close to) best.
import { createRequire } from 'node:module'
import { Chess } from 'chess.js'
import { traps } from '../src/data/traps'
import { openingSources } from '../src/data/index'
import { parseMovetext } from '../src/lib/repertoire'

const require = createRequire(import.meta.url)
const DEPTH = Number(process.env.DEPTH ?? 16)
type Info = { score: number; uci: string }
let pending: { resolve: (i: Info[]) => void; infos: Map<number, Info> } | null = null
const engine = require('stockfish')('lite-single', (line: string) => {
  if (!pending) return
  const m = /multipv (\d+) .*score (cp|mate) (-?\d+).* pv (\S+)/.exec(line)
  if (m) pending.infos.set(Number(m[1]), { score: m[2] === 'cp' ? Number(m[3]) : Math.sign(Number(m[3])) * (10000 - Math.abs(Number(m[3]))), uci: m[4] })
  if (line.startsWith('bestmove')) {
    const p = pending
    pending = null
    p.resolve([...p.infos.entries()].sort((a, b) => a[0] - b[0]).map(([, i]) => i))
  }
})
function search(fen: string, multipv = 3): Promise<Info[]> {
  return new Promise((resolve) => {
    pending = { resolve, infos: new Map() }
    engine.processCommand(`setoption name MultiPV value ${multipv}`)
    engine.processCommand(`position fen ${fen}`)
    engine.processCommand(`go depth ${DEPTH}`)
  })
}
engine.processCommand('uci')

let problems = 0
for (const t of traps) {
  const side = openingSources.find((o) => o.id === t.openingId)?.side
  if (!side) { console.log(`${t.id}: unknown opening ${t.openingId}`); problems++; continue }
  const chess = new Chess()
  try {
    for (const m of parseMovetext(t.moves)) chess.move(m.san)
  } catch (e) { console.log(`${t.id}: illegal setup ${e}`); problems++; continue }
  if ((chess.turn() === 'w') !== (side === 'white')) { console.log(`${t.id}: trainee is not to move after the mistake`); problems++ }
  const out: string[] = []
  for (const [i, m] of parseMovetext(t.punish).entries()) {
    const fen = chess.fen()
    let san: string
    try { san = chess.move(m.san).san } catch { console.log(`${t.id}: illegal punish move ${m.san}`); problems++; break }
    if (i % 2 === 0) {
      const infos = await search(fen)
      const best = infos[0]
      const bestSan = new Chess(fen).move({ from: best.uci.slice(0, 2), to: best.uci.slice(2, 4), promotion: best.uci[4] }).san
      const after = await search(chess.fen(), 1)
      const mine = chess.isCheckmate() ? 10000 : -(after[0]?.score ?? 0)
      const loss = best.score - mine
      if (loss > 80) { problems++; out.push(`${san}(!! best ${bestSan} ${best.score}, this ${mine})`) } else out.push(`${san}(${mine})`)
    } else out.push(san)
  }
  console.log(`${t.id}: ${out.join(' ')}`)
}
console.log(`${traps.length} traps, ${problems} problems`)
process.exit(problems ? 1 : 0)
