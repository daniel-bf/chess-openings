import { useEffect, useMemo, useRef, useState } from 'react'
import { lineById, openingById } from '../data/openings'
import type { Side } from '../data/types'
import { START_FEN } from '../lib/repertoire'
import { explain } from '../lib/describe'
import { buildTree, moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { Board, ARROW_BEST, ARROW_NEXT } from '../components/Board'
import { MiniBoard } from '../components/MiniBoard'
import { FlowTree } from '../components/FlowTree'
import { go } from '../router'
import { NotFound } from './OpeningPage'

export const plural = (n: number, word: string) => `${n} ${n === 1 ? word : word.replace(/y$/, 'ie') + 's'}`

export function isMine(node: TreeNode, side: Side): boolean {
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
  const [hoverId, setHoverId] = useState<string | null>(null)
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

  function select(id: string) {
    setSelectedId(id)
    setHoverId(null)
  }

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
      select(next.id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  // Keep the newest move of the trail in view.
  const trailRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = trailRef.current
    if (el) el.scrollLeft = el.scrollWidth
  }, [selectedId])

  if (!opening || !tree || !selected) return <NotFound />
  const side = opening.side

  const path = pathTo(selected)
  const moves = path.map((n) => n.move!)
  const fen = selected.move?.fenAfter ?? START_FEN
  const note = selected.move ? explain(moves, moves.length - 1) : null
  const lines = selected.lineIds.map((id) => lineById.get(id)!)

  // The next position where someone has a real choice (or the end of the line), and the last one behind us.
  let nextFork: TreeNode = selected
  while (nextFork.children.length === 1) nextFork = nextFork.children[0]
  const skip = pathTo(nextFork).length - path.length
  let lastFork: TreeNode | null = selected.parent
  while (lastFork && lastFork.children.length < 2) lastFork = lastFork.parent

  const hovered = selected.children.find((c) => c.id === hoverId)
  const arrows = (hovered ? [hovered] : selected.children).map((c) => ({
    from: c.move!.from,
    to: c.move!.to,
    color: isMine(c, side) ? ARROW_BEST : ARROW_NEXT,
  }))

  const nextMine = selected.children.length > 0 && isMine(selected.children[0], side)
  const choiceTitle = nextMine
    ? selected.children.length === 1
      ? 'Your move'
      : 'Your options'
    : selected.children.length === 1
      ? 'Your opponent plays'
      : `Your opponent has ${selected.children.length} choices`

  return (
    <div className={`page explore ${view}`}>
      <header className="explore-head">
        <div>
          <button type="button" className="link" onClick={() => go(`/opening/${opening.id}`)}>
            ← {opening.name}
          </button>
          <h1>Explore the opening</h1>
        </div>
        <div className="segmented" role="group" aria-label="View">
          <button type="button" className={view === 'cards' ? 'on' : ''} aria-pressed={view === 'cards'} onClick={() => setView('cards')}>
            Cards
          </button>
          <button type="button" className={view === 'diagram' ? 'on' : ''} aria-pressed={view === 'diagram'} onClick={() => setView('diagram')}>
            Tree
          </button>
        </div>
      </header>

      <div className="explore-body">
        <div className="explore-board">
          <Board
            fen={fen}
            orientation={side}
            movable={null}
            lastMove={selected.move ? { from: selected.move.from, to: selected.move.to } : null}
            arrows={arrows}
          />
          <div className="nav">
            <button type="button" onClick={() => select('root')} disabled={!selected.move} aria-label="Start position">
              ⏮
            </button>
            <button type="button" onClick={() => selected.parent && select(selected.parent.id)} disabled={!selected.parent} aria-label="Previous move">
              ◀
            </button>
            <button type="button" onClick={() => selected.children[0] && select(selected.children[0].id)} disabled={!selected.children.length} aria-label="Next move">
              ▶
            </button>
          </div>
        </div>

        <div className="explore-side">
          <nav className="trail" aria-label="Moves so far" ref={trailRef}>
            <button type="button" className={`trail-step${!selected.move ? ' current' : ''}`} onClick={() => select('root')}>
              Start
            </button>
            {path.map((n) => (
              <button
                key={n.id}
                type="button"
                className={`trail-step ${isMine(n, side) ? 'mine' : 'theirs'}${n === selected ? ' current' : ''}`}
                onClick={() => select(n.id)}
              >
                {n.ply % 2 === 0 && <span className="num">{n.ply / 2 + 1}.</span>}
                {n.move!.san}
              </button>
            ))}
          </nav>

          <div className="explore-note">
            {note && selected.move ? (
              <p className={note.auto ? 'auto' : ''}>
                <strong className={isMine(selected, side) ? 'mine' : 'theirs'}>
                  {moveNumber(selected)} {selected.move.san}
                </strong>{' '}
                {note.text}
              </p>
            ) : (
              <p>
                You play <strong>{side}</strong>. {opening.lines.length} lines start here. Pick a move to walk through them, one choice at a time.
              </p>
            )}
          </div>

          {view === 'diagram' ? (
            <FlowTree root={tree.root} selected={selected} side={side} onSelect={select} />
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
                  <button type="button" onClick={() => select(lastFork.id)}>
                    Back to the last choice
                  </button>
                )}
              </div>
            </div>
          ) : (
            <section className="choices-wrap" aria-label={choiceTitle}>
              <div className="choice-head">
                <h2>{choiceTitle}</h2>
                {selected.children.length === 1 && skip > 1 && (
                  <button type="button" className="link small" onClick={() => select(nextFork.id)}>
                    {nextFork.children.length > 1 ? `Skip to the next choice (${skip} moves)` : `Skip to the end (${skip} moves)`}
                  </button>
                )}
              </div>
              <div className="choices">
                {selected.children.map((c) => {
                  const idea = c.move!.comment ? firstSentence(c.move!.comment) : null
                  return (
                    <button
                      key={c.id}
                      type="button"
                      className={`choice ${isMine(c, side) ? 'mine' : 'theirs'}`}
                      onClick={() => select(c.id)}
                      onMouseEnter={() => setHoverId(c.id)}
                      onMouseLeave={() => setHoverId(null)}
                      onFocus={() => setHoverId(c.id)}
                      onBlur={() => setHoverId(null)}
                    >
                      <MiniBoard fen={c.move!.fenAfter} orientation={side} highlight={[c.move!.from, c.move!.to]} />
                      <span className="choice-body">
                        <span className="choice-move">
                          {moveNumber(c)} {c.move!.san}
                        </span>
                        {idea && <span className="choice-idea">{idea}</span>}
                        <span className="choice-meta">{selected.children.length > 1 ? branchName(c) : plural(c.lineIds.length, 'line')}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>
          )}
          <p className="muted small explore-legend">
            <span>
              <span className="dot mine" /> your moves
            </span>
            <span>
              <span className="dot theirs" /> your opponent's moves
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
