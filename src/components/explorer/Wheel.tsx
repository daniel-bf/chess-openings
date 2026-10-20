import { useState } from 'react'
import { openingById } from '../../data/openings'
import type { TreeNode } from '../../lib/tree'
import { nodeColor, openingColor, openingsAt, Peek, type ViewProps } from './common'

const SIZE = 640
const C = SIZE / 2
const HOLE = 78
const RINGS = 6
const RING = (C - HOLE - 6) / RINGS

interface Seg {
  node: TreeNode
  depth: number
  a0: number
  a1: number
}

/** Lays out the rings around `focus`: each move gets a slice in proportion to the lines that go through it. */
function segments(focus: TreeNode): Seg[] {
  const out: Seg[] = []
  function walk(node: TreeNode, depth: number, a0: number, a1: number) {
    if (depth > RINGS) return
    const total = node.children.reduce((n, c) => n + c.lineIds.length, 0)
    let a = a0
    for (const c of node.children) {
      const span = ((a1 - a0) * c.lineIds.length) / total
      out.push({ node: c, depth, a0: a, a1: a + span })
      walk(c, depth + 1, a, a + span)
      a += span
    }
  }
  walk(focus, 1, 0, Math.PI * 2)
  return out
}

const point = (r: number, a: number) => [C + r * Math.sin(a), C - r * Math.cos(a)]

function arc(r0: number, r1: number, a0: number, a1: number): string {
  // A full circle cannot be one arc, so it is drawn as two halves.
  if (a1 - a0 > Math.PI * 2 - 1e-6) return arc(r0, r1, a0, a0 + Math.PI) + arc(r0, r1, a0 + Math.PI, a1)
  const large = a1 - a0 > Math.PI ? 1 : 0
  const [x0, y0] = point(r1, a0)
  const [x1, y1] = point(r1, a1)
  const [x2, y2] = point(r0, a1)
  const [x3, y3] = point(r0, a0)
  return `M${x0},${y0} A${r1},${r1} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${r0},${r0} 0 ${large} 0 ${x3},${y3} Z`
}

/** The opening wheel: the position in focus in the middle, every continuation as rings around it. */
export function Wheel({ root, side, selected, onSelect }: ViewProps) {
  const focus = selected.children.length ? selected : (selected.parent ?? root)
  const [hover, setHover] = useState<TreeNode | null>(null)
  const segs = segments(focus)
  const shown = hover ?? selected
  const openingsHere = openingsAt(focus)

  return (
    <div className="wheel-view">
      <div className="wheel-wrap">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="wheel" role="img" aria-label="Opening wheel">
          {segs.map((s) => {
            const r0 = HOLE + (s.depth - 1) * RING
            const r1 = r0 + RING
            const mid = (s.a0 + s.a1) / 2
            const [tx, ty] = point(r0 + RING / 2, mid)
            const room = (s.a1 - s.a0) * (r0 + RING / 2)
            const on = hover === s.node || selected === s.node
            return (
              <g
                key={s.node.id}
                className={`wheel-seg${on ? ' on' : ''}`}
                onClick={() => onSelect(s.node.id)}
                onMouseEnter={() => setHover(s.node)}
                onMouseLeave={() => setHover(null)}
              >
                <path d={arc(r0, r1, s.a0, s.a1)} fill={nodeColor(s.node, 46 + s.depth * 5)} />
                {room > 30 && (
                  <text x={tx} y={ty} textAnchor="middle" dominantBaseline="central" className="wheel-text">
                    {s.node.move!.san}
                  </text>
                )}
              </g>
            )
          })}
          <g className="wheel-center" onClick={() => focus.parent && onSelect(focus.parent.id)}>
            <circle cx={C} cy={C} r={HOLE - 4} />
            <text x={C} y={C - 10} textAnchor="middle" className="wheel-center-move">
              {focus.move ? focus.move.san : 'Start'}
            </text>
            <text x={C} y={C + 16} textAnchor="middle" className="wheel-center-hint">
              {focus.move ? '◀ back' : `${focus.lineIds.length} lines`}
            </text>
          </g>
        </svg>
      </div>
      <aside className="wheel-side">
        <Peek node={shown} side={side} />
        <div className="wheel-legend">
          {openingsHere.map((id) => (
            <span key={id}>
              <span className="swatch" style={{ background: openingColor(id) }} /> {openingById.get(id)!.name}
            </span>
          ))}
        </div>
        <p className="muted small">The inner ring is the next move. Each slice is as wide as the number of lines behind it. Tap a slice to zoom in, and the middle to go back.</p>
      </aside>
    </div>
  )
}
