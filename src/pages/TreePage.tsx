import { useEffect, useMemo, useRef, useState } from 'react'
import { lineById, openingById } from '../data/openings'
import type { Side } from '../data/types'
import { START_FEN } from '../lib/repertoire'
import { explain } from '../lib/describe'
import { buildTree, moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { Board, ARROW_BEST, ARROW_NEXT } from '../components/Board'
import { go } from '../router'
import { NotFound } from './OpeningPage'

const plural = (n: number, word: string) => `${n} ${n === 1 ? word : word.replace(/y$/, 'ie') + 's'}`

function isMine(node: TreeNode, side: Side): boolean {
  return (node.ply % 2 === 0) === (side === 'white')
}

export function TreePage({ openingId }: { openingId: string }) {
  const opening = openingById.get(openingId)
  const tree = useMemo(() => (opening ? buildTree(opening.lines) : null), [opening])
  const [selectedId, setSelectedId] = useState('root')
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())

  const selected = tree?.byId.get(selectedId) ?? tree?.root

  useEffect(() => {
    if (!selected) return
    function onKey(e: KeyboardEvent) {
      if (!selected) return
      const siblings = selected.parent?.children ?? []
      const i = siblings.indexOf(selected)
      let next: TreeNode | undefined
      if (e.key === 'ArrowLeft') next = selected.parent ?? undefined
      else if (e.key === 'ArrowRight') next = selected.children[0]
      else if (e.key === 'ArrowUp') next = siblings[i - 1]
      else if (e.key === 'ArrowDown') next = siblings[i + 1]
      if (!next) return
      e.preventDefault()
      setSelectedId(next.id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  // Keep the selected move visible in the tree, scrolling only the tree box (not the page).
  const treeRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const box = treeRef.current
    const el = box?.querySelector('.tree-move.selected')
    if (!box || !el) return
    const b = box.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    if (r.top < b.top) box.scrollTop -= b.top - r.top + 8
    else if (r.bottom > b.bottom) box.scrollTop += r.bottom - b.bottom + 8
  }, [selectedId])

  if (!opening || !tree || !selected) return <NotFound />
  const side = opening.side

  const path = pathTo(selected)
  const moves = path.map((n) => n.move!)
  const fen = selected.move?.fenAfter ?? START_FEN
  const note = selected.move ? explain(moves, moves.length - 1) : null
  const nextMine = selected.children.length > 0 && isMine(selected.children[0], side)

  function select(node: TreeNode) {
    setSelectedId(node.id)
    // Opening a collapsed branch when one of its moves is chosen from the board panel.
    setCollapsed((c) => {
      const open = new Set(c)
      for (let n: TreeNode | null = node; n; n = n.parent) open.delete(n.id)
      return open
    })
  }

  function toggle(id: string) {
    setCollapsed((c) => {
      const next = new Set(c)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  /** A run of moves up to the next branching point, then its branches. */
  function Branch({ start }: { start: TreeNode }) {
    const run: TreeNode[] = [start]
    let end = start
    while (end.children.length === 1) {
      end = end.children[0]
      run.push(end)
    }
    return (
      <>
        <span className="tree-run">
          {run.map((node, i) => (
            <MoveButton key={node.id} node={node} showNumber={i === 0 || node.ply % 2 === 0} />
          ))}
        </span>
        {end.children.length > 1 && <Fork node={end} />}
      </>
    )
  }

  function Fork({ node }: { node: TreeNode }) {
    const mine = isMine(node.children[0], side)
    return (
      <div className="tree-fork">
        <p className="tree-fork-label small">{mine ? 'Your options here' : `${plural(node.children.length, 'reply')} to prepare for`}</p>
        <ul>
          {node.children.map((child) => {
            const closed = collapsed.has(child.id)
            return (
              <li key={child.id} className={isMine(child, side) ? 'mine' : 'theirs'}>
                <button
                  type="button"
                  className="tree-toggle"
                  aria-expanded={!closed}
                  aria-label={closed ? 'Expand branch' : 'Collapse branch'}
                  onClick={() => toggle(child.id)}
                >
                  {closed ? '▸' : '▾'}
                </button>
                {closed ? (
                  <>
                    <MoveButton node={child} showNumber />
                    <span className="muted small"> {plural(child.lineIds.length, 'line')}</span>
                  </>
                ) : (
                  <Branch start={child} />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  function MoveButton({ node, showNumber }: { node: TreeNode; showNumber: boolean }) {
    const mine = isMine(node, side)
    return (
      <button
        type="button"
        className={`tree-move ${mine ? 'mine' : 'theirs'}${node.id === selectedId ? ' selected' : ''}`}
        title={plural(node.lineIds.length, 'line')}
        onClick={() => setSelectedId(node.id)}
      >
        {showNumber && <span className="num">{moveNumber(node)}</span>}
        {node.move!.san}
      </button>
    )
  }

  const lines = selected.lineIds.map((id) => lineById.get(id)!)

  return (
    <div className="page">
      <div className="session">
        <div className="board-col">
          <Board
            fen={fen}
            orientation={side}
            movable={null}
            lastMove={selected.move ? { from: selected.move.from, to: selected.move.to } : null}
            arrows={selected.children.map((c) => ({ from: c.move!.from, to: c.move!.to, color: isMine(c, side) ? ARROW_BEST : ARROW_NEXT }))}
          />
          <div className="nav">
            <button type="button" onClick={() => setSelectedId('root')} disabled={!selected.move} aria-label="Start position">
              ⏮
            </button>
            <button type="button" onClick={() => selected.parent && setSelectedId(selected.parent.id)} disabled={!selected.parent} aria-label="Previous move">
              ◀
            </button>
            <button type="button" onClick={() => selected.children[0] && setSelectedId(selected.children[0].id)} disabled={!selected.children.length} aria-label="Next move">
              ▶
            </button>
          </div>
          <p className="muted small tree-legend">
            <span className="dot mine" /> your move · <span className="dot theirs" /> opponent's move
          </p>
        </div>
        <aside className="panel">
          <div className="session-head">
            <button type="button" className="link" onClick={() => go(`/opening/${opening.id}`)}>
              ← {opening.name}
            </button>
            <h1>Opening tree</h1>
            <p className="muted small">
              All {opening.lines.length} lines in one tree. It branches where your opponent can choose a different move. Click a move to see the position.
            </p>
          </div>

          <div className="feedback info">
            {note && selected.move ? (
              <p className={note.auto ? 'auto' : ''}>
                <strong>
                  {moveNumber(selected)} {selected.move.san}
                </strong>{' '}
                {note.text}
              </p>
            ) : (
              <p>Starting position. You play {side}.</p>
            )}
            {selected.children.length > 0 ? (
              <div className="tree-next">
                <span className="small muted">{nextMine ? 'Your move:' : 'Opponent can play:'}</span>
                {selected.children.map((c) => (
                  <button key={c.id} type="button" className={`tree-move ${isMine(c, side) ? 'mine' : 'theirs'}`} onClick={() => select(c)}>
                    {c.move!.san}
                    <span className="muted small"> {plural(c.lineIds.length, 'line')}</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="small muted">End of the line.</p>
            )}
          </div>

          <div className="tree" ref={treeRef}>
            {tree.root.children.length > 0 && (tree.root.children.length === 1 ? <Branch start={tree.root.children[0]} /> : <Fork node={tree.root} />)}
          </div>

          {selected.move && (
            <div className="tree-lines">
              <h3 className="small">Lines through this move</h3>
              <ul className="plain">
                {lines.map((l) => (
                  <li key={l.id}>
                    <span>{l.name}</span>
                    <button type="button" className="link small" onClick={() => go(`/learn/${l.id}`)}>
                      Learn
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
