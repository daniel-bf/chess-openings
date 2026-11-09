// Rates the moves of a few known games with Stockfish and prints the labels, as a sanity check for
// src/lib/moveQuality.ts. Usage: npx tsx scripts/move-quality-check.ts [DEPTH=14]
import { createRequire } from 'node:module'
import { Chess } from 'chess.js'
import type { EngineLine } from '../src/lib/engine'
import { QUALITY, rateGame, summarise, type GameMove } from '../src/lib/moveQuality'

const require = createRequire(import.meta.url)
const DEPTH = Number(process.env.DEPTH ?? 14)

let onLine: ((line: string) => void) | null = null
const engine = require('stockfish')('lite-single', (line: string) => onLine?.(line))

function analyse(fen: string): Promise<EngineLine[]> {
  return new Promise((resolve) => {
    const sign = fen.split(' ')[1] === 'w' ? 1 : -1
    const found = new Map<number, EngineLine>()
    onLine = (line) => {
      if (line.startsWith('info') && line.includes(' pv ')) {
        const rank = Number(/ multipv (\d+)/.exec(line)?.[1] ?? 1)
        const cp = / score cp (-?\d+)/.exec(line)
        const mate = / score mate (-?\d+)/.exec(line)
        found.set(rank, {
          uci: / pv (\S+)/.exec(line)![1],
          cp: cp ? sign * Number(cp[1]) : undefined,
          mate: mate ? sign * Number(mate[1]) : undefined,
        })
      } else if (line.startsWith('bestmove')) {
        onLine = null
        resolve([...found.entries()].sort((a, b) => a[0] - b[0]).map(([, l]) => l))
      }
    }
    engine.processCommand('setoption name MultiPV value 2')
    engine.processCommand(`position fen ${fen}`)
    engine.processCommand(`go depth ${DEPTH}`)
  })
}

const games: { name: string; pgn: string; book?: number }[] = [
  { name: "Scholar's mate trap", pgn: '1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6 4. Qxf7#' },
  { name: "Legal's mate", pgn: '1. e4 e5 2. Nf3 d6 3. Bc4 Bg4 4. Nc3 g6 5. Nxe5 Bxd1 6. Bxf7+ Ke7 7. Nd5#', book: 4 },
  { name: 'Fried Liver', pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3', book: 6 },
]

engine.processCommand('uci')
for (const g of games) {
  const chess = new Chess()
  chess.loadPgn(g.pgn)
  const replay = new Chess()
  const moves: GameMove[] = chess.history({ verbose: true }).map((m, i) => {
    const fenBefore = replay.fen()
    replay.move(m.san)
    return { fenBefore, uci: m.from + m.to + (m.promotion ?? ''), inBook: i < (g.book ?? 0) }
  })
  const analyses = new Map<string, EngineLine[]>()
  for (const m of moves) analyses.set(m.fenBefore, await analyse(m.fenBefore))
  analyses.set(replay.fen(), replay.isGameOver() ? [] : await analyse(replay.fen()))
  const ratings = rateGame(moves, analyses)
  console.log(`\n${g.name}`)
  chess.history().forEach((san, i) => {
    const r = ratings[i]
    const num = i % 2 === 0 ? `${i / 2 + 1}.` : `${(i + 1) / 2}…`
    console.log(`  ${num.padEnd(4)} ${san.padEnd(7)} ${r ? `${QUALITY[r.quality].label.padEnd(10)} loss ${r.loss.toFixed(1).padStart(5)}  acc ${r.accuracy.toFixed(0)}` : 'unrated'}`)
  })
  const [w, b] = summarise(moves, ratings)
  console.log(`  accuracy: White ${w.accuracy?.toFixed(1) ?? '-'}, Black ${b.accuracy?.toFixed(1) ?? '-'}`)
}
engine.terminate?.()
process.exit(0)
