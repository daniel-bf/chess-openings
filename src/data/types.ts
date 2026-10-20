export type Side = 'white' | 'black'

/**
 * One line of an opening, written as PGN movetext.
 * A comment in {braces} explains the move right before it.
 * Moves shared with an earlier line only need their comment once.
 */
export interface LineSource {
  name: string
  pgn: string
}

export interface OpeningSource {
  id: string
  name: string
  eco: string
  side: Side
  summary: string
  ideas: string[]
  lines: LineSource[]
}
