// Checks every line is legal and that the trainee always has exactly one
// prepared move in each position of an opening.
import { openingSources } from '../src/data/index'
import { buildOpening, buildBook, sideToMove } from '../src/lib/repertoire'
import { famousGames } from '../src/data/famousGames'
import { parsePgn } from '../src/lib/pgn'

let problems = 0
let total = 0
for (const src of openingSources) {
  const opening = buildOpening(src)
  const book = buildBook(opening.lines)
  for (const line of opening.lines) {
    total++
    const traineeMoves = line.moves.filter((m) => m.isTrainee)
    const missing = traineeMoves.filter((m) => !m.comment).map((m) => m.san)
    if (!line.moves[line.moves.length - 1].isTrainee) {
      console.log(`WARN ${opening.name} / ${line.name}: ends on an opponent move`)
    }
    console.log(`${opening.name} / ${line.name}: ${line.moves.length} plies${missing.length ? `, no comment on ${missing.join(' ')}` : ''}`)
  }
  for (const [key, moves] of book) {
    if (sideToMove(key) === opening.side && moves.size > 1) {
      problems++
      console.log(`CONFLICT in ${opening.name} at ${key}: ${[...moves.keys()].join(', ')}`)
    }
  }
}
// The bundled games on the Analysis page must all be legal.
for (const game of famousGames) {
  try {
    console.log(`Famous game ${game.name}: ${parsePgn(game.pgn).moves.length} plies`)
  } catch (e) {
    problems++
    console.log(`ILLEGAL famous game ${game.name}: ${(e as Error).message}`)
  }
}
console.log(`${total} lines, ${famousGames.length} famous games, ${problems} problems`)
process.exit(problems ? 1 : 0)
