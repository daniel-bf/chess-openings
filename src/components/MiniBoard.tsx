import { defaultPieces } from 'react-chessboard'
import type { Side } from '../data/types'

/** A small read-only board for previews, drawn with the same piece set as the main board. */
export function MiniBoard({ fen, orientation, highlight = [] }: { fen: string; orientation: Side; highlight?: string[] }) {
  const squares: { sq: string; piece: string | null; light: boolean }[] = []
  fen
    .split(' ')[0]
    .split('/')
    .forEach((row, r) => {
      let f = 0
      for (const ch of row) {
        if (/\d/.test(ch)) {
          for (let i = 0; i < Number(ch); i++, f++) squares.push({ sq: 'abcdefgh'[f] + (8 - r), piece: null, light: (r + f) % 2 === 0 })
        } else {
          squares.push({ sq: 'abcdefgh'[f] + (8 - r), piece: (ch === ch.toUpperCase() ? 'w' : 'b') + ch.toUpperCase(), light: (r + f) % 2 === 0 })
          f++
        }
      }
    })
  if (orientation === 'black') squares.reverse()
  return (
    <div className="miniboard" aria-hidden="true">
      {squares.map(({ sq, piece, light }) => (
        <span key={sq} className={`${light ? 'l' : 'd'}${highlight.includes(sq) ? ' h' : ''}`}>
          {piece && defaultPieces[piece]?.({ svgStyle: { width: '100%', height: '100%', display: 'block' } })}
        </span>
      ))}
    </div>
  )
}
