import { useEffect, useMemo, useRef, useState } from 'react'
import { lineById, openingById, openings } from '../data/openings'
import type { Side } from '../data/types'
import { START_FEN } from '../lib/repertoire'
import { explain } from '../lib/describe'
import { buildTree, moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { Board, ARROW_BEST, ARROW_NEXT } from '../components/Board'
import { FlowTree } from '../components/FlowTree'
import { go } from '../router'
import { BoardMap } from '../components/explorer/BoardMap'
import { isMine, plural } from './TreePage'

const SIDE_KEY = 'chess-trainer:map-side:v1'
const STYLE_KEY = 'chess-trainer:explorer-style:v1'

type Style = 'tree' | 'board'
const STYLES: { id: Style; name: string }[] = [
  { id: 'tree', name: 'Tree' },
  { id: 'board', name: 'Board map' },
]

function readStyle(): Style {
  try {
    const v = localStorage.getItem(STYLE_KEY)
    return STYLES.some((s) => s.id === v) ? (v as Style) : 'tree'
  } catch {
    return 'tree'
  }
}

function readSide(): Side {
  try {
    return localStorage.getItem(SIDE_KEY) === 'black' ? 'black' : 'white'
  } catch {
    return 'white'
  }
}

/** The openings that the lines through a node belong to, in catalogue order. */
function openingsAt(node: TreeNode): string[] {
  const ids = new Set(node.lineIds.map((id) => lineById.get(id)!.openingId))
  return openings.filter((o) => ids.has(o.id)).map((o) => o.id)
}

/** Every opening you play with one colour, merged into one tree. */
export function MapPage({ side: initialSide }: { side?: string }) {
  const [side, setSideState] = useState<Side>(initialSide === 'white' || initialSide === 'black' ? initialSide : readSide)
  const trees = useMemo(
    () => ({
      white: buildTree(openings.filter((o) => o.side === 'white').flatMap((o) => o.lines)),
      black: buildTree(openings.filter((o) => o.side === 'black').flatMap((o) => o.lines)),
    }),
    [],
  )
  const tree = trees[side]
  const [style, setStyleState] = useState<Style>(readStyle)
  const setStyle = (v: Style) => {
    setStyleState(v)
    try {
      localStorage.setItem(STYLE_KEY, v)
    } catch {
      // Kept for this visit only.
    }
  }
  const [selectedId, setSelectedId] = useState('root')
  const selected = tree.byId.get(selectedId) ?? tree.root

  function setSide(s: Side) {
    setSideState(s)
    setSelectedId('root')
    try {
      localStorage.setItem(SIDE_KEY, s)
    } catch {
      // Kept for this visit only.
    }
  }

  // A tag on the first box of each opening, where the tree leaves the openings it shared with others.
  const tagFor = (first: TreeNode) => {
    const here = openingsAt(first)
    if (here.length !== 1) return null
    if (first.parent && openingsAt(first.parent).length === 1) return null
    return openingById.get(here[0])!.name
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
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

  const trailRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = trailRef.current
    if (el) el.scrollLeft = el.scrollWidth
  }, [selectedId])

  const path = pathTo(selected)
  const moves = path.map((n) => n.move!)
  const fen = selected.move?.fenAfter ?? START_FEN
  const note = selected.move ? explain(moves, moves.length - 1) : null
  const here = openingsAt(selected)
  const lines = selected.lineIds.map((id) => lineById.get(id)!)
  const arrows = selected.children.map((c) => ({
    from: c.move!.from,
    to: c.move!.to,
    color: isMine(c, side) ? ARROW_BEST : ARROW_NEXT,
  }))

  return (
    <div className={`page explore map style-${style}`}>
      <header className="explore-head">
        <div>
          <h1>Explorer</h1>
          <p className="muted small" style={{ margin: '0.2em 0 0' }}>
            All your openings as {side} in one place.
          </p>
        </div>
        <div className="segmented" role="group" aria-label="Your colour">
          {(['white', 'black'] as const).map((s) => (
            <button key={s} type="button" className={side === s ? 'on' : ''} aria-pressed={side === s} onClick={() => setSide(s)}>
              As {s}
            </button>
          ))}
        </div>
      </header>

      <div className="style-pick" role="group" aria-label="View">
        <span className="muted small">View:</span>
        {STYLES.map((v) => (
          <button key={v.id} type="button" className={style === v.id ? 'on' : ''} aria-pressed={style === v.id} onClick={() => setStyle(v.id)}>
            {v.name}
          </button>
        ))}
      </div>

      {style === 'board' && <BoardMap key={side} root={tree.root} side={side} selected={selected} onSelect={setSelectedId} />}
      {style === 'tree' && (
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
              <button type="button" onClick={() => setSelectedId('root')} disabled={!selected.move} aria-label="Start position">
                ⏮
              </button>
              <button type="button" onClick={() => selected.parent && setSelectedId(selected.parent.id)} disabled={!selected.parent} aria-label="Previous move">
                ◀
              </button>
              <button
                type="button"
                onClick={() => selected.children[0] && setSelectedId(selected.children[0].id)}
                disabled={!selected.children.length}
                aria-label="Next move"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="explore-side">
            <nav className="trail" aria-label="Moves so far" ref={trailRef}>
              <button type="button" className={`trail-step${!selected.move ? ' current' : ''}`} onClick={() => setSelectedId('root')}>
                Start
              </button>
              {path.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className={`trail-step ${isMine(n, side) ? 'mine' : 'theirs'}${n === selected ? ' current' : ''}`}
                  onClick={() => setSelectedId(n.id)}
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
                  You play <strong>{side}</strong> in {plural(here.length, 'opening')} with {selected.lineIds.length} lines. The tree shows where they share
                  moves and where they split, depending on what your opponent plays.
                </p>
              )}
            </div>

            <div className="map-openings">
              {selected.children.length === 0 && lines.length === 1 ? (
                <>
                  <span className="label">End of "{lines[0].name}".</span>
                  <button type="button" onClick={() => go(`/learn/${lines[0].id}`)}>
                    Learn this line
                  </button>
                </>
              ) : (
                <>
                  <span className="label">{here.length === 1 ? 'Opening:' : 'Openings here:'}</span>
                  {here.map((id) => (
                    <button key={id} type="button" onClick={() => go(`/opening/${id}`)}>
                      {openingById.get(id)!.name}
                    </button>
                  ))}
                </>
              )}
            </div>

            <FlowTree key={side} root={tree.root} selected={selected} side={side} onSelect={setSelectedId} tagFor={tagFor} />

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
      )}
    </div>
  )
}
