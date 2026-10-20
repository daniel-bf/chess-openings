import { useEffect, useMemo, useRef, useState } from 'react'
import { openingById } from '../../data/openings'
import { pathTo, type TreeNode } from '../../lib/tree'
import { isMine, nodeColor, openingsAt, Peek, runLabel, type ViewProps } from './common'

interface Item {
  id: string
  run: TreeNode[]
  end: TreeNode
  /** The opening that starts here, when the branch leaves the others. */
  tag: string | null
  children: Item[]
  x: number
  y: number
  w: number
  hidden: number
}

const ROW = 54
const GAP = 46
const charW = 7.4

/** Collapses chains of single moves into one pill each, with the pill id being its first move. */
function runFrom(first: TreeNode): { run: TreeNode[]; end: TreeNode } {
  const run = [first]
  let end = first
  while (end.children.length === 1) {
    end = end.children[0]
    run.push(end)
  }
  return { run, end }
}

/** A pill shows at most six moves; the rest are in its tooltip and in the card beside the map. */
function pillText(run: TreeNode[]): string {
  if (!run.length) return 'Start'
  return run.length > 6 ? `${runLabel(run.slice(0, 6))} …` : runLabel(run)
}

/** Branches open by default until each one belongs to a single opening. */
function defaultOpen(root: TreeNode): Set<string> {
  const open = new Set<string>(['root'])
  function walk(id: string, end: TreeNode) {
    if (openingsAt(end).length < 2) return
    open.add(id)
    for (const c of end.children) walk(c.id, runFrom(c).end)
  }
  walk('root', root)
  return open
}

function layout(root: TreeNode, open: Set<string>): { items: Item[]; width: number; height: number } {
  const items: Item[] = []
  let row = 0
  function make(id: string, run: TreeNode[], end: TreeNode, x: number, parentOpenings: number): Item {
    const ids = openingsAt(end)
    const tag = ids.length === 1 && parentOpenings > 1 ? openingById.get(ids[0])!.name : null
    const label = pillText(run)
    const folded = end.children.length > 0 && !open.has(id)
    const w = Math.max(56, label.length * charW + 26) + (folded ? 30 : 0)
    const item: Item = { id, run, end, tag, children: [], x, y: 0, w, hidden: 0 }
    items.push(item)
    if (!folded && end.children.length) {
      item.children = end.children.map((c) => {
        const r = runFrom(c)
        return make(c.id, r.run, r.end, x + w + GAP, ids.length)
      })
      item.y = (item.children[0].y + item.children[item.children.length - 1].y) / 2
    } else {
      item.hidden = end.children.length
      item.y = row * ROW
      row++
    }
    return item
  }
  make('root', [], root, 0, 99)
  const width = Math.max(...items.map((i) => i.x + i.w)) + 140
  return { items, width, height: row * ROW }
}

/** A mind map that grows left to right: each pill is a run of moves, and branches split where the moves do. */
export function MindMap({ root, side, selected, onSelect }: ViewProps) {
  const [open, setOpen] = useState(() => defaultOpen(root))
  const { items, width, height } = useMemo(() => layout(root, open), [root, open])
  const scroller = useRef<HTMLDivElement>(null)
  const onPath = new Set(pathTo(selected).map((n) => n.id))
  const active = items.find((i) => i.run.includes(selected)) ?? items[0]

  function toggle(item: Item) {
    const next = new Set(open)
    if (next.has(item.id) && item !== active) next.delete(item.id)
    else next.add(item.id)
    setOpen(next)
    onSelect(item.end.move ? item.end.id : 'root')
  }

  function setAll(all: boolean) {
    if (!all) return setOpen(defaultOpen(root))
    const next = new Set<string>(['root'])
    const walk = (n: TreeNode) => n.children.forEach((c) => (next.add(c.id), walk(c)))
    walk(root)
    setOpen(next)
  }

  useEffect(() => {
    const el = scroller.current?.querySelector<HTMLElement>('.mm-pill.active')
    el?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' })
  }, [active])

  const PAD = 30
  return (
    <div className="mm-view">
      <div className="mm-main">
        <div className="flow-tools">
          <span className="muted small">Tap a pill to open or close it.</span>
          <span className="flow-zoom">
            <button type="button" onClick={() => setAll(false)}>
              Openings
            </button>
            <button type="button" onClick={() => setAll(true)}>
              Everything
            </button>
          </span>
        </div>
        <div className="mm-scroll" ref={scroller}>
          <div className="mm-canvas" style={{ width: width + PAD * 2, height: height + PAD * 2 }}>
            <svg className="mm-lines" width={width + PAD * 2} height={height + PAD * 2} aria-hidden="true">
              {items.flatMap((p) =>
                p.children.map((c) => {
                  const x1 = p.x + p.w + PAD
                  const y1 = p.y + PAD + 15
                  const x2 = c.x + PAD
                  const y2 = c.y + PAD + 15
                  const mx = (x1 + x2) / 2
                  const lit = onPath.has(c.run[0].id)
                  return (
                    <path
                      key={c.id}
                      d={`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`}
                      stroke={nodeColor(c.end)}
                      strokeWidth={lit ? 4 : 2.5}
                      opacity={lit ? 1 : 0.75}
                    />
                  )
                }),
              )}
            </svg>
            {items.map((i) => {
              const who = i.run[0] ? (isMine(i.run[0], side) ? 'mine' : 'theirs') : 'start'
              return (
                <div key={i.id} className="mm-node" style={{ left: i.x + PAD, top: i.y + PAD - (i.tag ? 16 : 0) }}>
                  {i.tag && (
                    <span className="mm-tag" style={{ color: nodeColor(i.end, 38) }}>
                      {i.tag}
                    </span>
                  )}
                  <button
                    type="button"
                    className={`mm-pill ${who}${i === active ? ' active' : ''}`}
                    style={{ width: i.w, borderColor: nodeColor(i.end) }}
                    onClick={() => toggle(i)}
                    title={i.run.length ? runLabel(i.run) : undefined}
                  >
                    {pillText(i.run)}
                    {i.hidden > 0 && <span className="mm-more">+{i.hidden}</span>}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <aside className="mm-side">
        <Peek node={selected} side={side} />
      </aside>
    </div>
  )
}
