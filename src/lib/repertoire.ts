import { Chess } from 'chess.js'
import type { LineSource, OpeningSource, Side } from '../data/types'

export interface LineMove {
  san: string
  from: string
  to: string
  promotion?: string
  fenBefore: string
  fenAfter: string
  comment?: string
  /** True when this is a move the trainee has to find. */
  isTrainee: boolean
}

export interface Line {
  id: string
  openingId: string
  name: string
  moves: LineMove[]
}

export interface Opening extends Omit<OpeningSource, 'lines'> {
  lines: Line[]
}

export const START_FEN = new Chess().fen()

/** Position identity without the move counters, so transpositions match. */
export function fenKey(fen: string): string {
  return fen.split(' ').slice(0, 4).join(' ')
}

interface Token {
  san: string
  comment?: string
}

export function parseMovetext(pgn: string): Token[] {
  const tokens: Token[] = []
  const re = /\{([^}]*)\}|(\d+\.(?:\.\.)?)|(\S+)/g
  for (const m of pgn.matchAll(re)) {
    if (m[1] !== undefined) {
      const last = tokens[tokens.length - 1]
      if (!last) throw new Error(`Comment before any move: ${m[1]}`)
      last.comment = m[1].trim().replace(/\s+/g, ' ')
    } else if (m[3] !== undefined) {
      tokens.push({ san: m[3] })
    }
  }
  return tokens
}

function buildLine(src: LineSource, opening: OpeningSource, index: number, comments: Map<string, string>): Line {
  const chess = new Chess()
  const traineeColor = opening.side === 'white' ? 'w' : 'b'
  const moves: LineMove[] = []
  for (const token of parseMovetext(src.pgn)) {
    const fenBefore = chess.fen()
    const isTrainee = chess.turn() === traineeColor
    let move
    try {
      move = chess.move(token.san)
    } catch {
      throw new Error(`${opening.name} / ${src.name}: illegal move ${token.san} after ${moves.map((m) => m.san).join(' ')}`)
    }
    const key = `${fenKey(fenBefore)}|${move.san}`
    if (token.comment && !comments.has(key)) comments.set(key, token.comment)
    moves.push({
      san: move.san,
      from: move.from,
      to: move.to,
      promotion: move.promotion,
      fenBefore,
      fenAfter: chess.fen(),
      isTrainee,
    })
  }
  return { id: `${opening.id}:${index}`, openingId: opening.id, name: src.name, moves }
}

export function buildOpening(src: OpeningSource): Opening {
  const comments = new Map<string, string>()
  const lines = src.lines.map((l, i) => buildLine(l, src, i, comments))
  // A comment written in any line applies to the same move in every line.
  for (const line of lines) {
    for (const mv of line.moves) mv.comment = comments.get(`${fenKey(mv.fenBefore)}|${mv.san}`)
  }
  return { ...src, lines }
}

export interface BookMove {
  san: string
  from: string
  to: string
  promotion?: string
  comment?: string
  lineIds: string[]
}

/** Every position in a set of lines, with the moves the lines play from it. */
export type Book = Map<string, Map<string, BookMove>>

export function buildBook(lines: Line[]): Book {
  const book: Book = new Map()
  for (const line of lines) {
    for (const mv of line.moves) {
      const key = fenKey(mv.fenBefore)
      let entry = book.get(key)
      if (!entry) book.set(key, (entry = new Map()))
      const existing = entry.get(mv.san)
      if (existing) {
        if (!existing.lineIds.includes(line.id)) existing.lineIds.push(line.id)
        existing.comment ??= mv.comment
      } else {
        entry.set(mv.san, {
          san: mv.san,
          from: mv.from,
          to: mv.to,
          promotion: mv.promotion,
          comment: mv.comment,
          lineIds: [line.id],
        })
      }
    }
  }
  return book
}

export function bookMoves(book: Book, fen: string): BookMove[] {
  return [...(book.get(fenKey(fen))?.values() ?? [])]
}

export function sideToMove(fen: string): Side {
  return fen.split(' ')[1] === 'w' ? 'white' : 'black'
}
