import type { Side } from '../data/types'

const GLYPH: Record<string, string> = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' }

/** A small static board drawn from a FEN, for previews. */
export function MiniBoard({ fen, orientation, highlight = [] }: { fen: string; orientation: Side; highlight?: string[] }) {
  const rows = fen.split(' ')[0].split('/')
  const squares: { sq: string; piece: string | null; light: boolean }[] = []
  rows.forEach((row, r) => {
    let f = 0
    for (const ch of row) {
      if (/\d/.test(ch)) {
        for (let i = 0; i < Number(ch); i++, f++) squares.push({ sq: 'abcdefgh'[f] + (8 - r), piece: null, light: (r + f) % 2 === 0 })
      } else {
        squares.push({ sq: 'abcdefgh'[f] + (8 - r), piece: ch, light: (r + f) % 2 === 0 })
        f++
      }
    }
  })
  if (orientation === 'black') squares.reverse()
  return (
    <div className="miniboard" aria-hidden="true">
      {squares.map(({ sq, piece, light }) => (
        <span key={sq} className={`${light ? 'l' : 'd'}${highlight.includes(sq) ? ' h' : ''}`}>
          {piece && <i className={piece === piece.toUpperCase() ? 'w' : 'b'}>{GLYPH[piece.toLowerCase()]}</i>}
        </span>
      ))}
    </div>
  )
}
