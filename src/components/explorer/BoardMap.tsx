import { useState } from 'react'
import { lineById, openingById } from '../../data/openings'
import { START_FEN } from '../../lib/repertoire'
import { moveNumber, pathTo } from '../../lib/tree'
import { Board } from '../Board'
import { isMine, nodeColor, openingColor, openingsAt, type ViewProps } from './common'

const withAlpha = (color: string, a: number) => color.replace(')', ` / ${a})`)

/** The board is the map: every move you know from here is an arrow in the colour of the opening it leads to. */
export function BoardMap({ side, selected, onSelect }: ViewProps) {
  const [hover, setHover] = useState<string | null>(null)
  const kids = selected.children
  const total = kids.reduce((n, c) => n + c.lineIds.length, 0)
  const most = Math.max(1, ...kids.map((c) => c.lineIds.length))
  const path = pathTo(selected)
  const arrows = kids
    .filter((c) => !hover || c.id === hover)
    .map((c) => ({ from: c.move!.from, to: c.move!.to, color: withAlpha(nodeColor(c, 45), hover ? 0.95 : 0.4 + (0.55 * c.lineIds.length) / total) }))

  return (
    <div className="bm-view">
      <div className="bm-board">
        <Board
          fen={selected.move?.fenAfter ?? START_FEN}
          orientation={side}
          movable={null}
          lastMove={selected.move ? { from: selected.move.from, to: selected.move.to } : null}
          arrows={arrows}
        />
      </div>
      <div className="bm-side">
        <nav className="trail" aria-label="Moves so far">
          <button type="button" className={`trail-step${!selected.move ? ' current' : ''}`} onClick={() => onSelect('root')}>
            Start
          </button>
          {path.map((n) => (
            <button
              key={n.id}
              type="button"
              className={`trail-step ${isMine(n, side) ? 'mine' : 'theirs'}${n === selected ? ' current' : ''}`}
              onClick={() => onSelect(n.id)}
            >
              {n.ply % 2 === 0 && <span className="num">{n.ply / 2 + 1}.</span>}
              {n.move!.san}
            </button>
          ))}
        </nav>
        <h2 className="bm-title">
          {kids.length === 0 ? 'End of the line' : kids.length && isMine(kids[0], side) ? 'You can play' : 'Your opponent can play'}
        </h2>
        <div className="bm-rows">
          {kids.map((c) => {
            const ids = openingsAt(c)
            return (
              <button
                key={c.id}
                type="button"
                className="bm-row"
                onClick={() => {
                  setHover(null)
                  onSelect(c.id)
                }}
                onMouseEnter={() => setHover(c.id)}
                onMouseLeave={() => setHover(null)}
              >
                <span className="bm-move">
                  {moveNumber(c)}
                  {c.move!.san}
                </span>
                <span className="bm-bar" aria-hidden="true" style={{ width: `${(100 * c.lineIds.length) / most}%` }}>
                  {ids.map((id) => {
                    const n = c.lineIds.filter((l) => lineById.get(l)!.openingId === id).length
                    return <span key={id} style={{ flex: n || 1, background: openingColor(id) }} />
                  })}
                </span>
                <span className="bm-count">{Math.round((100 * c.lineIds.length) / total)}%</span>
                <span className="bm-names">{ids.map((id) => openingById.get(id)!.name).join(' · ')}</span>
              </button>
            )
          })}
        </div>
        {selected.parent && (
          <button type="button" className="link" onClick={() => onSelect(selected.parent!.id)}>
            ← Back one move
          </button>
        )}
        <p className="muted small">Arrows show every move you know from here, in the colour of the opening it leads to. A stronger colour means more lines.</p>
      </div>
    </div>
  )
}
