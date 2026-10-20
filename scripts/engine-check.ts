// Flags prepared moves that Stockfish thinks lose a lot compared with its best move.
import { createRequire } from 'node:module'
import { openingSources } from '../src/data/index'
import { buildOpening, fenKey } from '../src/lib/repertoire'

const require = createRequire(import.meta.url)
const DEPTH = Number(process.env.DEPTH ?? 12)
const LIMIT = Number(process.env.LIMIT ?? 120)

type Pending = { resolve: (cp: number) => void; last: number }
let pending: Pending | null = null
const engine = require('stockfish')('lite-single', (line: string) => {
  if (!pending) return
  const m = line.match(/score (cp|mate) (-?\d+)/)
  if (m) pending.last = m[1] === 'cp' ? Number(m[2]) : Math.sign(Number(m[2])) * 10000
  if (line.startsWith('bestmove')) {
    const p = pending
    pending = null
    p.resolve(p.last)
  }
})

function evaluate(fen: string): Promise<number> {
  return new Promise((resolve) => {
    pending = { resolve, last: 0 }
    engine.processCommand(`position fen ${fen}`)
    engine.processCommand(`go depth ${DEPTH}`)
  })
}

const cache = new Map<string, number>()
async function score(fen: string) {
  const key = fenKey(fen)
  if (!cache.has(key)) cache.set(key, await evaluate(fen))
  return cache.get(key)!
}

engine.processCommand('uci')
const seen = new Set<string>()
for (const src of openingSources) {
  const opening = buildOpening(src)
  for (const line of opening.lines) {
    for (const mv of line.moves) {
      if (!mv.isTrainee) continue
      const id = `${fenKey(mv.fenBefore)}|${mv.san}`
      if (seen.has(id)) continue
      seen.add(id)
      const best = await score(mv.fenBefore) // side to move's view
      const after = -(await score(mv.fenAfter)) // back to the mover's view
      const loss = best - after
      if (loss >= LIMIT) console.log(`${opening.name} / ${line.name}: ${mv.san} loses ${loss}cp (best ${best}, after ${after})`)
    }
  }
}
console.log(`checked ${seen.size} prepared moves`)
engine.terminate?.()
process.exit(0)
