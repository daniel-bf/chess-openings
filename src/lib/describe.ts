import { Chess, type Color, type PieceSymbol, type Square } from 'chess.js'
import type { LineMove } from './repertoire'

const NAMES: Record<PieceSymbol, string> = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' }
const VALUE: Record<PieceSymbol, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 100 }
const CENTRE = new Set(['d4', 'e4', 'd5', 'e5'])

export interface MoveFacts {
  piece: PieceSymbol
  captured?: PieceSymbol
  check: boolean
  castle?: 'short' | 'long'
  /** Enemy pieces the moved piece now attacks that are worth more than it or are undefended. */
  threats: { square: string; piece: PieceSymbol; undefended: boolean }[]
  develops: boolean
  centre: boolean
}

export function moveFacts(move: { fenBefore: string; from: string; to: string; san: string; promotion?: string }): MoveFacts {
  const before = new Chess(move.fenBefore)
  const mover = before.turn() as Color
  const enemy: Color = mover === 'w' ? 'b' : 'w'
  const piece = before.get(move.from as Square)!.type
  const captured = before.get(move.to as Square)?.type ?? (move.san.includes('x') && piece === 'p' ? 'p' : undefined)
  const after = new Chess(move.fenBefore)
  after.move({ from: move.from, to: move.to, promotion: move.promotion })
  const threats: MoveFacts['threats'] = []
  for (const row of after.board()) {
    for (const sq of row) {
      if (!sq || sq.color !== enemy || sq.type === 'k') continue
      if (!after.attackers(sq.square, mover).includes(move.to as Square)) continue
      const undefended = after.attackers(sq.square, enemy).length === 0
      if (undefended || VALUE[sq.type] > VALUE[piece]) threats.push({ square: sq.square, piece: sq.type, undefended })
    }
  }
  const homeRank = mover === 'w' ? '1' : '8'
  return {
    piece,
    captured,
    check: after.inCheck(),
    castle: move.san.startsWith('O-O-O') ? 'long' : move.san.startsWith('O-O') ? 'short' : undefined,
    threats,
    develops: (piece === 'n' || piece === 'b') && move.from[1] === homeRank,
    centre: piece === 'p' && CENTRE.has(move.to),
  }
}

function threatText(f: MoveFacts, owner: 'your' | 'the'): string | null {
  if (f.threats.length === 0) return null
  const parts = f.threats.map((t) => `${owner} ${NAMES[t.piece]} on ${t.square}${t.undefended ? ' (unprotected)' : ''}`)
  return `It attacks ${parts.join(' and ')}.`
}

/** A short fallback explanation for moves the course does not comment on. */
export function describeMove(move: LineMove, previous?: LineMove): string {
  const f = moveFacts(move)
  const out: string[] = []
  if (f.castle) out.push(f.castle === 'short' ? 'Castles: the king is safe and the rooks are connected.' : 'Castles long: the king goes to the queenside and the rook lands on the d-file at once.')
  else if (f.captured) {
    out.push(previous && previous.to === move.to ? `Recaptures on ${move.to} to restore the material balance.` : `The ${NAMES[f.piece]} takes the ${NAMES[f.captured]} on ${move.to}.`)
  } else if (f.develops) out.push(`Develops the ${NAMES[f.piece]} to ${move.to}, where it controls central squares and prepares castling.`)
  else if (f.centre) out.push(`Claims space in the centre with the pawn on ${move.to}.`)
  else if (f.piece === 'p') out.push(`Pawn to ${move.to}, part of the standard setup in this structure.`)
  else out.push(`The ${NAMES[f.piece]} goes to ${move.to}, a better square for it in this structure.`)
  if (f.check) out.push('It comes with check.')
  const threat = threatText(f, 'the')
  if (threat) out.push(threat)
  return out.join(' ')
}

export function explain(moves: LineMove[], index: number): { text: string; auto: boolean } {
  const move = moves[index]
  if (move.comment) return { text: move.comment, auto: false }
  return { text: describeMove(move, moves[index - 1]), auto: true }
}

/** What an opponent's move means for you: its comment, plus any piece of yours it now attacks. */
export function explainOpponent(
  move: { fenBefore: string; from: string; to: string; san: string; promotion?: string; comment?: string },
  previous?: { to: string },
): { text: string; auto: boolean } {
  const f = moveFacts(move)
  const threat = threatText(f, 'your')
  const watch = f.check ? 'Check! ' : ''
  if (move.comment) return { text: `${watch}${move.comment}${threat ? ` ${threat}` : ''}`, auto: false }
  return { text: `${describeMove({ ...move, isTrainee: false, fenAfter: '' } as LineMove, previous as LineMove | undefined).replace('It attacks the', 'It attacks your').replace(' and the ', ' and your ')}`, auto: true }
}
