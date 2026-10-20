import { useEffect, useMemo, useRef, useState } from 'react'
import { lineById, openingById } from '../data/openings'
import type { Side } from '../data/types'
import { START_FEN } from '../lib/repertoire'
import { explain } from '../lib/describe'
import { buildTree, moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { Board, ARROW_BEST, ARROW_NEXT } from '../components/Board'
import { go } from '../router'
import { NotFound } from './OpeningPage'
import { MiniBoard } from '../components/MiniBoard'
import { TreeDiagram } from '../components/TreeDiagram'

const plural = (n: number, word: string) => `${n} ${n === 1 ? word : word.replace(/y$/, 'ie') + 's'}`

function isMine(node: TreeNode, side: Side): boolean {
  return (node.ply % 2 === 0) === (side === 'white')
}

type View = 'cards' | 'diagram'
const VIEW_KEY = 'chess-trainer:explore-view:v1'

function readView(): View {
  try {
    return localStorage.getItem(VIEW_KEY) === 'diagram' ? 'diagram' : 'cards'
  } catch {
    return 'cards'
  }
}

/** The first sentence of a note, for card previews. */
function firstSentence(text: string): string {
  const m = /^.*?[.!?](\s|$)/.exec(text)
  return (m ? m[0] : text).trim()
}

/** A name for the lines under a node: the line's own name, or the first one plus a count. */
function branchName(node: TreeNode): string {
  const names = node.lineIds.map((id) => lineById.get(id)!.name)
  return names.length === 1 ? names[0] : `${names[0]} +${names.length - 1} more`
}

export function TreePage({ openingId }: { openingId: string }) {
  const opening = openingById.get(openingId)
  const tree = useMemo(() => (opening ? buildTree(opening.lines) : null), [opening])
  const [selectedId, setSelectedId] = useState('root')
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())
  const [view, setViewState] = useState<View>(readView)
  const setView = (v: View) => {
    setViewState(v)
    try {
      localStorage.setItem(VIEW_KEY, v)
    } catch {
      // Kept for this visit only.
    }
  }

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
  // The next position where someone has a real choice (or the end of the line).
  let nextFork: TreeNode = selected
  while (nextFork.children.length === 1) nextFork = nextFork.children[0]
  const skip = pathTo(nextFork).length - path.length
  let lastFork: TreeNode | null = selected.parent
  while (lastFork && lastFork.children.length < 2) lastFork = lastFork.parent

  return (
    <div className="page">
      <div className={`session${view === 'diagram' ? ' diagram-view' : ''}`}>
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
            <h1>Explore the opening</h1>
            <div className="pace" role="group" aria-label="View">
              <span>View:</span>
              <button type="button" className={view === 'cards' ? 'on' : ''} aria-pressed={view === 'cards'} onClick={() => setView('cards')}>
                Cards
              </button>
              <button type="button" className={view === 'diagram' ? 'on' : ''} aria-pressed={view === 'diagram'} onClick={() => setView('diagram')}>
                Diagram
              </button>
            </div>
          </div>

          <nav className="trail" aria-label="Moves so far">
            <button type="button" className={`trail-step${!selected.move ? ' current' : ''}`} onClick={() => setSelectedId('root')}>
              Start
            </button>
            {path.map((n) => (
              <button key={n.id} type="button" className={`trail-step ${isMine(n, side) ? 'mine' : 'theirs'}${n === selected ? ' current' : ''}`} onClick={() => setSelectedId(n.id)}>
                {n.ply % 2 === 0 && <span className="num">{n.ply / 2 + 1}.</span>}
                {n.move!.san}
              </button>
            ))}
          </nav>

          <div className="feedback info">
            {note && selected.move ? (
              <p className={note.auto ? 'auto' : ''}>
                <strong>
                  {moveNumber(selected)} {selected.move.san}
                </strong>{' '}
                {note.text}
              </p>
            ) : (
              <p>
                You play <strong>{side}</strong>. {opening.lines.length} lines start here. Follow the cards to walk through them, one choice at a time.
              </p>
            )}
          </div>

          {view === 'diagram' ? (
            <>
              {selected.children.length > 0 && (
                <p className="small muted">
                  {isMine(selected.children[0], side) ? 'Next, your move: ' : 'Next, your opponent can play: '}
                  {selected.children.map((c) => c.move!.san).join(', ')}
                </p>
              )}
              <TreeDiagram root={tree.root} side={side} selectedId={selectedId} onSelect={setSelectedId} />
            </>
          ) : selected.children.length === 0 ? (
            <div className="choice-end">
              <p>
                <strong>End of the line.</strong> {lines.length === 1 ? `This was "${lines[0].name}".` : ''}
              </p>
              <div className="row">
                {lines.length === 1 && (
                  <button type="button" className="primary" onClick={() => go(`/learn/${lines[0].id}`)}>
                    Learn this line
                  </button>
                )}
                {lastFork && (
                  <button type="button" onClick={() => setSelectedId(lastFork.id)}>
                    Back to the last choice
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <h2 className="choice-title">
                {nextMine
                  ? selected.children.length === 1
                    ? 'Your move'
                    : 'Your options'
                  : selected.children.length === 1
                    ? 'Your opponent plays'
                    : `Your opponent can choose (${selected.children.length})`}
              </h2>
              <div className={`choices${selected.children.length === 1 ? ' single' : ''}`}>
                {selected.children.map((c) => {
                  const idea = c.move!.comment ? firstSentence(c.move!.comment) : null
                  return (
                    <button key={c.id} type="button" className={`choice ${isMine(c, side) ? 'mine' : 'theirs'}`} onClick={() => setSelectedId(c.id)}>
                      <MiniBoard fen={c.move!.fenAfter} orientation={side} highlight={[c.move!.from, c.move!.to]} />
                      <span className="choice-body">
                        <span className="choice-move">
                          {moveNumber(c)} {c.move!.san}
                        </span>
                        {idea && <span className="choice-idea">{idea}</span>}
                        <span className="choice-meta">
                          {selected.children.length > 1 ? branchName(c) : plural(c.lineIds.length, 'line')}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
              {selected.children.length === 1 && skip > 1 && (
                <button type="button" className="ghost skip" onClick={() => setSelectedId(nextFork.id)}>
                  {nextFork.children.length > 1 ? `Skip ${skip} moves to the next choice ⏭` : `Skip ${skip} moves to the end ⏭`}
                </button>
              )}
            </>
          )}

          {view === 'cards' && (
          <details className="tree-map">
            <summary>Map of all {opening.lines.length} lines</summary>
            <div className="tree" ref={treeRef}>
              {tree.root.children.length > 0 && (tree.root.children.length === 1 ? <Branch start={tree.root.children[0]} /> : <Fork node={tree.root} />)}
            </div>
          </details>
          )}
        </aside>
      </div>
    </div>
  )
}
