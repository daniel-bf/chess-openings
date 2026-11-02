// Checks the middlegame prototype content: line ids, arrow squares, goals and model games.
import { Chess, type Square } from 'chess.js'
import { lineById, openingById } from '../src/data/openings'
import { modelGames, planQuestions, playoutPlans, structures } from '../src/data/middlegame'
import { parseMovetext } from '../src/lib/repertoire'

const errors: string[] = []
const fail = (msg: string) => errors.push(msg)

function endOf(lineId: string): { fen: string; color: 'w' | 'b' } | null {
  const line = lineById.get(lineId)
  if (!line) {
    fail(`Unknown line ${lineId}`)
    return null
  }
  const side = openingById.get(line.openingId)!.side
  return { fen: line.moves[line.moves.length - 1].fenAfter, color: side === 'white' ? 'w' : 'b' }
}

function checkArrows(where: string, fen: string, color: 'w' | 'b', arrows: { from: string; to: string }[]) {
  const chess = new Chess(fen)
  for (const a of arrows) {
    const p = chess.get(a.from as Square)
    if (!p || p.color !== color) fail(`${where}: no piece of yours on ${a.from}`)
  }
}

for (const s of structures) {
  const end = endOf(s.exampleLineId)
  if (end) checkArrows(`structure ${s.id}`, end.fen, end.color, s.arrows)
  s.lineIds.forEach(endOf)
}

for (const q of planQuestions) {
  const end = endOf(q.lineId)
  if (!end) continue
  if (q.options.filter((o) => o.correct).length !== 1) fail(`quiz ${q.lineId}: needs exactly one correct option`)
  q.options.forEach((o, i) => checkArrows(`quiz ${q.lineId} option ${i + 1}`, end.fen, end.color, o.arrows))
}

for (const p of playoutPlans) {
  const end = endOf(p.lineId)
  if (!end) continue
  const chess = new Chess(end.fen)
  for (const g of p.goals) {
    const done = g.squares.some((sq) => {
      const piece = chess.get(sq as Square)
      return piece && piece.color === end.color && g.pieces.includes(piece.type)
    })
    if (done) fail(`playout ${p.lineId}: goal "${g.label}" is already met at the start`)
  }
}

for (const g of modelGames) {
  if (!openingById.has(g.openingId)) fail(`game ${g.id}: unknown opening ${g.openingId}`)
  const chess = new Chess()
  const sans = parseMovetext(g.moves).map((t) => t.san)
  for (const san of sans) {
    try {
      chess.move(san)
    } catch {
      fail(`game ${g.id}: illegal move ${san} at ply ${chess.history().length}`)
      break
    }
  }
  const userParity = g.side === 'white' ? 0 : 1
  if (g.startPly % 2 !== userParity) fail(`game ${g.id}: startPly is not a ${g.side} move`)
  for (const ply of Object.keys(g.notes).map(Number)) {
    if (ply % 2 !== userParity || ply < g.startPly || ply >= sans.length) fail(`game ${g.id}: note at ply ${ply} is not one of your guessed moves`)
  }
  console.log(`${g.id}: ${sans.length} plies, notes on ${Object.keys(g.notes).map((p) => `${Math.floor(Number(p) / 2) + 1}...${sans[Number(p)]}`).join(', ')}`)
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`OK: ${structures.length} structures, ${planQuestions.length} questions, ${playoutPlans.length} play-outs, ${modelGames.length} model games`)
