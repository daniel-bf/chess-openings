import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { Side } from '../data/types'
import { START_FEN } from '../lib/repertoire'
import { moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { MiniBoard } from './MiniBoard'

/** A box in the chart: the position reached after one move (or the start position). */
interface Box {
  id: string
  /** The move that leads here from the parent box (null for the start). */
  node: TreeNode | null
  /** The tree node this box shows (the root for the start box). */
  end: TreeNode
  children: Box[]
  /** True when the box has children that are folded away. */
  folded: boolean
  x: number
  y: number
}

const W = 112
const H = 132
const GAP_X = 14
const GAP_Y = 34

const isMine = (node: TreeNode, side: Side) => (node.ply % 2 === 0) === (side === 'white')

/**
 * Builds one box per move, unfolding only the moves in `open` (or everything), then lays them out top-down.
 * Every move gets its own box, even when there is only one choice, so a line can be followed move by move.
 */
function build(root: TreeNode, open: Set<string>, all: boolean): { width: number; height: number; list: Box[] } {
  const list: Box[] = []
  let leafX = 0
  function make(end: TreeNode, depth: number): Box {
    const box: Box = { id: end.id, node: end.move ? end : null, end, children: [], folded: false, x: 0, y: depth * (H + GAP_Y) }
    list.push(box)
    if (end.children.length && (all || open.has(end.id))) {
      box.children = end.children.map((c) => make(c, depth + 1))
      box.x = (box.children[0].x + box.children[box.children.length - 1].x) / 2
    } else {
      box.folded = end.children.length > 0
      box.x = leafX
      leafX += W + GAP_X
    }
    return box
  }
  make(root, 0)
  const depth = Math.max(...list.map((b) => b.y)) + H
  return { width: Math.max(leafX - GAP_X, W), height: depth, list }
}

export function FlowTree({
  root,
  selected,
  side,
  onSelect,
  tagFor,
}: {
  root: TreeNode
  selected: TreeNode
  side: Side
  onSelect: (id: string) => void
  /** An optional name tag for the box that starts at this move, such as the opening it leads into. */
  tagFor?: (first: TreeNode) => string | null
}) {
  const [showAll, setShowAll] = useState(false)
  const [zoom, setZoom] = useState<number | null>(null)
  const [fit, setFit] = useState(1)
  const scroller = useRef<HTMLDivElement>(null)

  // Unfold every move on the way to the selected one, including itself, so every choice along the line shows.
  const open = useMemo(() => new Set<string>(['root', ...pathTo(selected).map((n) => n.id)]), [selected])

  const { width, height, list } = useMemo(() => build(root, open, showAll), [root, open, showAll])

  // Scale the chart to fit the width available, unless the user picked a zoom.
  useLayoutEffect(() => {
    const el = scroller.current
    if (!el) return
    const update = () => setFit(Math.max(0.65, Math.min(1, (el.clientWidth - 24) / width)))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])
  const scale = zoom ?? fit

  const activeBox = list.find((b) => b.end === selected) ?? list[0]

  // Bring the active box into view inside the chart.
  useEffect(() => {
    const el = scroller.current?.querySelector<HTMLElement>('.flow-box.active')
    const box = scroller.current
    if (!el || !box) return
    const b = box.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    if (r.left < b.left || r.right > b.right) box.scrollLeft += r.left - b.left - (b.width - r.width) / 2
    if (r.top < b.top || r.bottom > b.bottom) box.scrollTop += r.top - b.top - 16
  }, [activeBox, scale])

  return (
    <section className="flow" aria-label="Tree of the opening">
      <div className="flow-tools">
        <label className="check small">
          <input type="checkbox" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} /> Show every branch
        </label>
        <span className="flow-zoom">
          <button type="button" aria-label="Zoom out" onClick={() => setZoom(Math.max(0.35, scale - 0.15))}>
            −
          </button>
          <button type="button" onClick={() => setZoom(null)} className={zoom === null ? 'on' : ''}>
            Fit
          </button>
          <button type="button" aria-label="Zoom in" onClick={() => setZoom(Math.min(1.4, scale + 0.15))}>
            +
          </button>
        </span>
      </div>
      <div className="flow-scroll" ref={scroller}>
        <div className="flow-size" style={{ width: (width + 24) * scale, height: (height + 24) * scale }}>
          <div className="flow-canvas" style={{ width: width + 24, height: height + 24, transform: `scale(${scale})` }}>
            <svg className="flow-lines" width={width + 24} height={height + 24} aria-hidden="true">
              {list.flatMap((b) =>
                b.children.map((c) => {
                  const x1 = b.x + W / 2 + 12
                  const y1 = b.y + H + 12
                  const x2 = c.x + W / 2 + 12
                  const y2 = c.y + 12
                  const mid = y1 + GAP_Y / 2
                  const r = Math.min(8, Math.abs(x2 - x1) / 2)
                  const dir = x2 > x1 ? 1 : -1
                  const d =
                    x1 === x2
                      ? `M${x1},${y1} V${y2}`
                      : `M${x1},${y1} V${mid - r} Q${x1},${mid} ${x1 + dir * r},${mid} H${x2 - dir * r} Q${x2},${mid} ${x2},${mid + r} V${y2}`
                  return <path key={c.id} d={d} className={isMine(c.end, side) ? 'mine' : 'theirs'} />
                }),
              )}
            </svg>
            {list.map((b) => {
              const first = b.node
              const who = first ? (isMine(first, side) ? 'mine' : 'theirs') : 'start'
              const lines = b.end.lineIds.length
              const tag = first && tagFor ? tagFor(first) : null
              const label = first ? `${moveNumber(first)}${first.move!.san}` : 'Start'
              return (
                <button
                  key={b.id}
                  type="button"
                  className={`flow-box ${who}${b === activeBox ? ' active' : ''}`}
                  style={{ left: b.x + 12, top: b.y + 12, width: W, height: H }}
                  title={label}
                  onClick={() => onSelect(b.end.id)}
                >
                  {tag && <span className="flow-tag">{tag}</span>}
                  <MiniBoard
                    fen={b.end.move?.fenAfter ?? START_FEN}
                    orientation={side}
                    highlight={b.end.move ? [b.end.move.from, b.end.move.to] : []}
                  />
                  <span className="flow-label">{label}</span>
                  <span className="flow-meta">
                    {b.end.children.length === 0 ? 'End of line' : `${lines} line${lines === 1 ? '' : 's'}`}
                    {b.folded && ' ▸'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
