import { lineById, openingById, openings } from '../../data/openings'
import type { Side } from '../../data/types'
import { explain } from '../../lib/describe'
import { START_FEN } from '../../lib/repertoire'
import { moveNumber, pathTo, type TreeNode } from '../../lib/tree'
import { go } from '../../router'
import { MiniBoard } from '../MiniBoard'

/** What every explorer view gets: one colour's merged tree and the position in focus. */
export interface ViewProps {
  root: TreeNode
  side: Side
  selected: TreeNode
  onSelect: (id: string) => void
}

/** The openings that the lines through a node belong to, in catalogue order. */
export function openingsAt(node: TreeNode): string[] {
  const ids = new Set(node.lineIds.map((id) => lineById.get(id)!.openingId))
  return openings.filter((o) => ids.has(o.id)).map((o) => o.id)
}

const HUES = [4, 30, 50, 95, 150, 178, 205, 232, 265, 295, 330]

/** One colour per opening, so an opening keeps its colour across every view. */
export function openingColor(openingId: string, lightness = 52): string {
  const o = openingById.get(openingId)!
  const same = openings.filter((x) => x.side === o.side)
  const hue = HUES[same.indexOf(o) % HUES.length]
  return `hsl(${hue} 62% ${lightness}%)`
}

/** The colour of a node: its opening's colour once only one opening is left, otherwise grey. */
export function nodeColor(node: TreeNode, lightness = 52): string {
  const ids = openingsAt(node)
  return ids.length === 1 ? openingColor(ids[0], lightness) : `hsl(150 6% ${Math.min(lightness + 8, 80)}%)`
}

export const isMine = (node: TreeNode, side: Side) => (node.ply % 2 === 0) === (side === 'white')

/** "1.e4 e5 2.Nf3" for a run of moves. */
export function runLabel(run: TreeNode[]): string {
  return run.map((n, i) => (i === 0 || n.ply % 2 === 0 ? `${moveNumber(n)}${n.move!.san}` : n.move!.san)).join(' ')
}

/** A compact card about one position: a small board, the move, its opening and a short note. */
export function Peek({ node, side, compact = false }: { node: TreeNode; side: Side; compact?: boolean }) {
  const path = pathTo(node)
  const moves = path.map((n) => n.move!)
  const note = node.move ? explain(moves, moves.length - 1).text : null
  const ids = openingsAt(node)
  const lines = node.lineIds.map((id) => lineById.get(id)!)
  return (
    <div className={`peek${compact ? ' compact' : ''}`}>
      <div className="peek-board">
        <MiniBoard fen={node.move?.fenAfter ?? START_FEN} orientation={side} highlight={node.move ? [node.move.from, node.move.to] : []} />
      </div>
      <div className="peek-body">
        <div className="peek-moves">{path.length ? runLabel(path) : 'Start position'}</div>
        <div className="peek-openings">
          {ids.slice(0, 4).map((id) => (
            <button key={id} type="button" style={{ borderColor: openingColor(id) }} onClick={() => go(`/opening/${id}`)}>
              <span className="swatch" style={{ background: openingColor(id) }} />
              {openingById.get(id)!.name}
            </button>
          ))}
          {ids.length > 4 && <span className="muted small">+{ids.length - 4} more</span>}
        </div>
        {note && <p className="peek-note">{note}</p>}
        {node.children.length === 0 && lines.length === 1 && (
          <button type="button" className="primary small-btn" onClick={() => go(`/learn/${lines[0].id}`)}>
            Learn "{lines[0].name}"
          </button>
        )}
      </div>
    </div>
  )
}
