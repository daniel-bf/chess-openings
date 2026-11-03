import { Chess } from 'chess.js'
import type { Side } from '../data/types'
import { lineById, openingById } from '../data/openings'
import { fenKey, parseMovetext } from './repertoire'
import type { Deviation } from './deviations'
import type { Trap } from '../data/traps'

/** A position where the opponent makes a mistake and the trainee has to punish it. */
export interface Puzzle {
  id: string
  title: string
  subtitle: string
  side: Side
  openingId: string
  /** Moves from the start position up to the mistake, in SAN. */
  setup: string[]
  mistake: string
  /** After the mistake: trainee move, opponent reply, trainee move, ... */
  solution: string[]
  /** Other first moves that punish just as well. */
  acceptFirst: string[]
  /** What the book plays instead of the mistake, when there is a book. */
  bookSan?: string
  note: string
}

export interface PuzzleMove {
  san: string
  from: string
  to: string
  promotion?: string
  fenBefore: string
  fenAfter: string
}

/** Plays a list of SAN moves from the start position. */
export function playSans(sans: string[], from?: string): PuzzleMove[] {
  const chess = new Chess(from)
  return sans.map((san) => {
    const fenBefore = chess.fen()
    const m = chess.move(san)
    return { san: m.san, from: m.from, to: m.to, promotion: m.promotion, fenBefore, fenAfter: chess.fen() }
  })
}

export function moveLabel(fenBefore: string, san: string): string {
  const [, turn, , , , full] = fenBefore.split(' ')
  return turn === 'w' ? `${full}. ${san}` : `${full}… ${san}`
}

export function deviationPuzzle(d: Deviation, lineId = d.lineIds[0]): Puzzle | null {
  const line = lineById.get(lineId)
  const opening = openingById.get(d.openingId)
  if (!line || !opening) return null
  const at = line.moves.findIndex((m) => !m.isTrainee && fenKey(m.fenBefore) === d.fenKey)
  if (at < 0) return null
  const fenBefore = line.moves[at].fenBefore
  return {
    id: d.id,
    title: `${moveLabel(fenBefore, d.mistake)}?`,
    subtitle: line.name,
    side: opening.side,
    openingId: opening.id,
    setup: line.moves.slice(0, at).map((m) => m.san),
    mistake: d.mistake,
    solution: d.refutation,
    acceptFirst: d.accept,
    bookSan: d.bookSan,
    note: d.gain,
  }
}

export function trapPuzzle(t: Trap): Puzzle {
  const opening = openingById.get(t.openingId)!
  const sans = parseMovetext(t.moves).map((m) => m.san)
  const solution = parseMovetext(t.punish).map((m) => m.san)
  return {
    id: t.id,
    title: t.name,
    subtitle: opening.name,
    side: opening.side,
    openingId: opening.id,
    setup: sans.slice(0, -1),
    mistake: sans[sans.length - 1],
    solution,
    acceptFirst: t.alsoGood ?? [],
    note: t.idea,
  }
}
