import { Chess } from 'chess.js'
import type { Line } from './repertoire'

/** One step of a piece's journey through a line. */
export interface Segment {
  from: string
  to: string
  color: 'w' | 'b'
}

/** The moves of every piece in a line, up to `upto` half-moves, including the rook's part in castling. */
export function journeys(line: Line, upto = line.moves.length): Segment[] {
  const out: Segment[] = []
  line.moves.slice(0, upto).forEach((m, ply) => {
    const color = ply % 2 === 0 ? 'w' : 'b'
    out.push({ from: m.from, to: m.to, color })
    if (m.san.startsWith('O-O')) {
      const rank = color === 'w' ? '1' : '8'
      const long = m.san.startsWith('O-O-O')
      out.push({ from: (long ? 'a' : 'h') + rank, to: (long ? 'd' : 'f') + rank, color })
    }
  })
  return out
}

/** The position after `upto` half-moves of a line. */
export function fenAt(line: Line, upto: number, start: string): string {
  return upto === 0 ? start : line.moves[upto - 1].fenAfter
}

type Grid = Map<string, string>

function squares(fen: string): Grid {
  const grid: Grid = new Map()
  new Chess(fen).board().forEach((row) =>
    row.forEach((p) => {
      if (p) grid.set(p.square, p.color + p.type.toUpperCase())
    }),
  )
  return grid
}

/** The piece most lines have on each square at the end: the typical shape of the opening. */
export function typicalPosition(lines: Line[]): { fen: string; share: Map<string, number> } {
  const counts = new Map<string, Map<string, number>>()
  for (const line of lines) {
    const grid = squares(line.moves[line.moves.length - 1].fenAfter)
    for (const file of 'abcdefgh')
      for (let rank = 1; rank <= 8; rank++) {
        const sq = file + rank
        const piece = grid.get(sq) ?? ''
        const c = counts.get(sq) ?? new Map<string, number>()
        c.set(piece, (c.get(piece) ?? 0) + 1)
        counts.set(sq, c)
      }
  }
  // Each king goes where it most often ends up, even if no single square has it in most lines.
  const kings = new Map<string, string>()
  for (const color of ['w', 'b']) {
    let best = ''
    let most = 0
    for (const [sq, c] of counts) if ((c.get(color + 'K') ?? 0) > most) [best, most] = [sq, c.get(color + 'K')!]
    kings.set(best, color + 'K')
  }
  const share = new Map<string, number>()
  const rows: string[] = []
  for (let rank = 8; rank >= 1; rank--) {
    let row = ''
    let empty = 0
    for (const file of 'abcdefgh') {
      const sq = file + rank
      const ranked = [...counts.get(sq)!.entries()].filter(([p]) => p[1] !== 'K').sort((x, y) => y[1] - x[1])
      const [piece, n] = kings.has(sq) ? [kings.get(sq)!, counts.get(sq)!.get(kings.get(sq)!)!] : (ranked[0] ?? ['', 0])
      if (piece) {
        share.set(sq, n / lines.length)
        if (empty) row += empty
        empty = 0
        row += piece[0] === 'w' ? piece[1] : piece[1].toLowerCase()
      } else empty++
    }
    rows.push(row + (empty || ''))
  }
  return { fen: rows.join('/') + ' w - - 0 1', share }
}

/** Squares whose piece differs between two positions. */
export function differences(fenA: string, fenB: string): string[] {
  const a = squares(fenA)
  const b = squares(fenB)
  const out: string[] = []
  for (const file of 'abcdefgh') for (let rank = 1; rank <= 8; rank++) if (a.get(file + rank) !== b.get(file + rank)) out.push(file + rank)
  return out
}

/** The pawns of each colour in a position. */
export function pawns(fen: string): { w: string[]; b: string[] } {
  const out = { w: [] as string[], b: [] as string[] }
  for (const [sq, p] of squares(fen)) if (p[1] === 'P') out[p[0] as 'w' | 'b'].push(sq)
  return out
}
