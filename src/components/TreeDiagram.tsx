import { useEffect, useMemo, useRef } from 'react'
import type { Side } from '../data/types'
import { moveNumber, type TreeNode } from '../lib/tree'

/** A box in the diagram: a run of moves with no alternatives between them. */
interface Box {
  moves: TreeNode[]
  children: Box[]
  depth: number
  row: number
  x: number
  width: number
}

const ROW = 64
const BOX_H = 44
const GAP = 44
const CHAR = 8.4

function isMine(node: TreeNode, side: Side): boolean {
  return (node.ply % 2 === 0) === (side === 'white')
}

function label(run: TreeNode[]): string {
  return run.map((n, i) => (i === 0 || n.ply % 2 === 0 ? `${moveNumber(n)}${n.move!.san}` : n.move!.san)).join(' ')
}

/** Splits the tree into boxes at every branching point and lays them out left to right. */
function layout(root: TreeNode): { boxes: Box[]; width: number; height: number } {
  const boxes: Box[] = []
  let nextRow = 0
  function build(start: TreeNode, depth: number): Box {
    const moves = [start]
    let end = start
    while (end.children.length === 1) {
      end = end.children[0]
      moves.push(end)
    }
    const box: Box = { moves, children: [], depth, row: 0, x: 0, width: 0 }
    boxes.push(box)
    box.children = end.children.map((c) => build(c, depth + 1))
    box.row = box.children.length ? (box.children[0].row + box.children[box.children.length - 1].row) / 2 : nextRow++
    return box
  }
  for (const child of root.children) build(child, 0)

  // Each column is as wide as its longest box.
  const columns: number[] = []
  for (const b of boxes) {
    // One line when it fits, otherwise wide enough for two lines.
    const one = label(b.moves).length * CHAR + 24
    b.width = Math.max(64, one <= 380 ? one : Math.min(640, one / 2 + 60))
    columns[b.depth] = Math.max(columns[b.depth] ?? 0, b.width)
  }
  const starts: number[] = []
  columns.forEach((_, i) => starts.push(i === 0 ? 0 : starts[i - 1] + columns[i - 1] + GAP))
  for (const b of boxes) b.x = starts[b.depth]
  const width = starts[starts.length - 1] + columns[columns.length - 1]
  return { boxes, width, height: nextRow * ROW }
}

export function TreeDiagram({
  root,
  side,
  selectedId,
  onSelect,
}: {
  root: TreeNode
  side: Side
  selectedId: string
  onSelect: (id: string) => void
}) {
  const { boxes, width, height } = useMemo(() => layout(root), [root])
  const scroller = useRef<HTMLDivElement>(null)

  // Bring the box holding the selected move into view, scrolling only the diagram.
  useEffect(() => {
    const box = scroller.current
    const el = box?.querySelector('.dg-move.selected')
    const holder = el?.closest('.dg-box')
    if (!box || !el || !holder) return
    const b = box.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    // Show the whole box from its left edge, so the moves before the selected one stay readable.
    const h = holder.getBoundingClientRect()
    if (h.left < b.left || r.right > b.right) box.scrollLeft += h.left - b.left - 16
    if (r.top < b.top || r.bottom > b.bottom) box.scrollTop += r.top - b.top - b.height / 3
  }, [selectedId])

  const y = (b: Box) => b.row * ROW + (ROW - BOX_H) / 2
  return (
    <div className="diagram" ref={scroller}>
      <div className="diagram-canvas" style={{ width: width + 24, height: height + 8 }}>
        <svg className="diagram-lines" width={width + 24} height={height + 8} aria-hidden="true">
          {boxes.flatMap((b) =>
            b.children.map((c) => {
              const x1 = b.x + b.width
              const y1 = y(b) + BOX_H / 2
              const x2 = c.x
              const y2 = y(c) + BOX_H / 2
              const mid = x1 + GAP / 2
              return (
                <path
                  key={c.moves[0].id}
                  d={`M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`}
                  className={isMine(c.moves[0], side) ? 'mine' : 'theirs'}
                />
              )
            }),
          )}
        </svg>
        {boxes.map((b) => {
          const first = b.moves[0]
          const active = b.moves.some((n) => n.id === selectedId)
          return (
            <div
              key={first.id}
              className={`dg-box ${isMine(first, side) ? 'mine' : 'theirs'}${active ? ' active' : ''}`}
              style={{ left: b.x, top: y(b), width: b.width, height: BOX_H }}
              title={`${first.lineIds.length} line${first.lineIds.length === 1 ? '' : 's'}`}
            >
              {b.moves.map((n, i) => (
                <button
                  key={n.id}
                  type="button"
                  className={`dg-move ${isMine(n, side) ? 'mine' : 'theirs'}${n.id === selectedId ? ' selected' : ''}`}
                  onClick={() => onSelect(n.id)}
                >
                  {(i === 0 || n.ply % 2 === 0) && <span className="num">{moveNumber(n)}</span>}
                  {n.move!.san}
                </button>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
