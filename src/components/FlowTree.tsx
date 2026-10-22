import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { Side } from '../data/types'
import { START_FEN } from '../lib/repertoire'
import { moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { MiniBoard } from './MiniBoard'

/** A box in the chart: the position reached after a run of moves with no alternatives. */
interface Box {
  id: string
  /** The moves that lead here from the parent box (empty for the start). */
  run: TreeNode[]
  /** The tree node this box ends on (the start node for the root box). */
  end: TreeNode
  children: Box[]
  /** True when the box has children that are folded away. */
  folded: boolean
  x: number
  y: number
}

const W = 128
const H = 150
const GAP_X = 18
const GAP_Y = 46

const isMine = (node: TreeNode, side: Side) => (node.ply % 2 === 0) === (side === 'white')

function runLabel(run: TreeNode[]): string {
  return run.map((n, i) => (i === 0 || n.ply % 2 === 0 ? `${moveNumber(n)}${n.move!.san}` : n.move!.san)).join(' ')
}

/** Builds the boxes, unfolding only the branches in `open` (or everything), then lays them out top-down. */
function build(root: TreeNode, open: Set<string>, all: boolean, focus: TreeNode | null): { box: Box; width: number; height: number; list: Box[] } {
  const list: Box[] = []
  let leafX = 0
  function make(run: TreeNode[], end: TreeNode, depth: number, id: string): Box {
    const box: Box = { id, run, end, children: [], folded: false, x: 0, y: depth * (H + GAP_Y) }
    list.push(box)
    if (end.children.length && (all || open.has(id))) {
      box.children = end.children.map((c) => {
        const r = [c]
        let e = c
        while (e.children.length === 1) {
          e = e.children[0]
          r.push(e)
        }
        return make(r, e, depth + 1, c.id)
      })
      box.x = (box.children[0].x + box.children[box.children.length - 1].x) / 2
    } else {
      box.folded = end.children.length > 0
      box.x = leafX
      leafX += W + GAP_X
    }
    return box
  }
  // The start box covers any forced moves at the very beginning; a focused branch starts at its own first move.
  const r: TreeNode[] = focus ? [focus] : []
  let e = focus ?? root
  while (e.children.length === 1) {
    e = e.children[0]
    r.push(e)
  }
  const box = make(r, e, 0, focus ? focus.id : 'root')
  const depth = Math.max(...list.map((b) => b.y)) + H
  return { box, width: Math.max(leafX - GAP_X, W), height: depth, list }
}

/** The first move of the box holding `node`, or null when it is in the start box. */
function boxStart(node: TreeNode): TreeNode | null {
  let n = node
  while (n.parent?.move && n.parent.children.length === 1) n = n.parent
  return n.parent && n.parent.children.length > 1 ? n : null
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
  // A branch the user tapped: only it and what grows below it are shown.
  const [focus, setFocus] = useState<TreeNode | null>(null)

  // Going back above the branch (with the board's arrows or the trail) shows the whole tree again.
  useEffect(() => {
    if (focus && !pathTo(selected).includes(focus)) setFocus(null)
  }, [focus, selected])
  const shown = focus && pathTo(selected).includes(focus) ? focus : null

  // Unfold every box on the way to the selected move, including its own, so its next choices show.
  const open = useMemo(() => {
    const ids = new Set<string>(['root'])
    for (const n of pathTo(selected)) if (n.parent && n.parent.children.length > 1) ids.add(n.id)
    return ids
  }, [selected])

  const { width, height, list } = useMemo(() => build(root, open, showAll, shown), [root, open, showAll, shown])

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

  const activeBox = list.find((b) => b.run.includes(selected)) ?? list.find((b) => b.end === selected) ?? list[0]

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
        {shown && (
          <span className="flow-focus">
            <button type="button" onClick={() => setFocus(shown.parent ? boxStart(shown.parent) : null)}>
              ▲ Up one level
            </button>
            <button type="button" onClick={() => setFocus(null)}>
              Whole tree
            </button>
          </span>
        )}
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
                  return <path key={c.id} d={d} className={isMine(c.run[0], side) ? 'mine' : 'theirs'} />
                }),
              )}
            </svg>
            {list.map((b) => {
              const first = b.run[0]
              const who = first ? (isMine(first, side) ? 'mine' : 'theirs') : 'start'
              const lines = b.end.lineIds.length
              const target = b.end.move ? b.end : b.run[b.run.length - 1] ?? null
              const tag = first && tagFor ? tagFor(first) : null
              return (
                <button
                  key={b.id}
                  type="button"
                  className={`flow-box ${who}${b === activeBox ? ' active' : ''}`}
                  style={{ left: b.x + 12, top: b.y + 12, width: W, height: H }}
                  title={b.run.length ? runLabel(b.run) : 'Start'}
                  onClick={() => {
                    // Tapping a branch narrows the tree to it; tapping the start box shows everything again.
                    setFocus(b.id === 'root' ? null : b.run[0])
                    onSelect(target ? target.id : 'root')
                  }}
                >
                  {tag && <span className="flow-tag">{tag}</span>}
                  <MiniBoard
                    fen={b.end.move?.fenAfter ?? START_FEN}
                    orientation={side}
                    highlight={b.end.move ? [b.end.move.from, b.end.move.to] : []}
                  />
                  <span className="flow-label">{b.run.length ? runLabel(b.run) : 'Start'}</span>
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
