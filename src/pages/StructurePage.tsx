import { useMemo, useState } from 'react'
import { lineById, openingById } from '../data/openings'
import type { Side } from '../data/types'
import type { Line } from '../lib/repertoire'
import { buildTree, moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { MiniBoard } from '../components/MiniBoard'
import { Plan } from '../components/Plan'
import { go } from '../router'
import { NotFound } from './OpeningPage'
import { isMine } from './TreePage'

/** "3.Bc4" or "3…Bc5" for the move at `ply`. */
function numbered(ply: number, san: string): string {
  return ply % 2 === 0 ? `${ply / 2 + 1}.${san}` : `${(ply + 1) / 2}…${san}`
}

function movesText(line: Line, from: number, to: number): string {
  return line.moves
    .slice(from, to)
    .map((m, i) => (i === 0 || (from + i) % 2 === 0 ? numbered(from + i, m.san) : m.san))
    .join(' ')
}

/** The same position with only the pawns left, to show the pawn structure a line leads to. */
function pawnsOnly(fen: string): string {
  const rows = fen
    .split(' ')[0]
    .split('/')
    .map((row) => {
      let out = ''
      let empty = 0
      for (const ch of row.replace(/\d/g, (d) => '1'.repeat(Number(d)))) {
        if (ch === 'p' || ch === 'P') {
          if (empty) out += empty
          empty = 0
          out += ch
        } else empty++
      }
      return out + (empty ? empty : '')
    })
  return rows.join('/') + ' w - - 0 1'
}

/** How many moves two lines share from the start. */
function shared(a: Line, b: Line): number {
  let i = 0
  while (i < a.moves.length && i < b.moves.length && a.moves[i].san === b.moves[i].san) i++
  return i
}

/** The positions where the lines split, nested the way they branch. */
function Splits({ node, side, depth = 0 }: { node: TreeNode; side: Side; depth?: number }) {
  // Walk down the single-move stretch to the next split.
  let fork = node
  while (fork.children.length === 1) fork = fork.children[0]
  if (fork.children.length === 0) return null
  const path = pathTo(fork)
  const who = isMine(fork.children[0], side) ? 'You choose' : 'Your opponent chooses'
  const lead = path.length
    ? path
        .slice(pathTo(node).length)
        .map((n, i) => (i === 0 || n.ply % 2 === 0 ? `${moveNumber(n)}${n.move!.san}` : n.move!.san))
        .join(' ')
    : ''
  return (
    <div className={`split depth-${Math.min(depth, 3)}`}>
      <p className="split-head">
        {lead && <span className="split-lead">{lead}</span>} <span className="muted">{who}:</span>
      </p>
      <ul className="split-options">
        {fork.children.map((c) => (
          <li key={c.id}>
            <span className={`split-move ${isMine(c, side) ? 'mine' : 'theirs'}`}>
              {moveNumber(c)}
              {c.move!.san}
            </span>
            <span className="muted small">
              {c.lineIds.length === 1 ? lineById.get(c.lineIds[0])!.name : `${c.lineIds.length} lines`}
            </span>
            {c.move!.comment && <span className="split-why">{c.move!.comment.split(/(?<=[.!?])\s/)[0]}</span>}
            <Splits node={c} side={side} depth={depth + 1} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Learn the shape of an opening: where its lines split, and how any two of them differ. */
export function StructurePage({ openingId }: { openingId: string }) {
  const opening = openingById.get(openingId)
  const tree = useMemo(() => (opening ? buildTree(opening.lines) : null), [opening])
  const [aId, setA] = useState(opening?.lines[0]?.id ?? '')
  const [bId, setB] = useState(opening?.lines[1]?.id ?? opening?.lines[0]?.id ?? '')
  if (!opening || !tree) return <NotFound />
  const side = opening.side
  const lines = opening.lines
  const a = lines.find((l) => l.id === aId) ?? lines[0]
  const b = lines.find((l) => l.id === bId) ?? lines[Math.min(1, lines.length - 1)]
  const plies = Math.max(...lines.map((l) => l.moves.length))
  const same = shared(a, b)

  function pick(line: Line) {
    if (line.id === a.id) return
    setB(line.id)
  }

  return (
    <div className="page structure">
      <button type="button" className="link" onClick={() => go(`/opening/${opening.id}`)}>
        ← {opening.name}
      </button>
      <h1>How the {opening.name} is built</h1>
      <p className="lead">{opening.summary}</p>

      <section className="st-section">
        <h2>Where the lines split</h2>
        <p className="muted small">Every place where you or your opponent has a choice, and which way each line goes.</p>
        <Splits node={tree.root} side={side} />
      </section>

      <section className="st-section">
        <h2>All lines, move by move</h2>
        <p className="muted small">
          The <strong>A</strong> line is the reference. In the other lines, faded moves are the same as in A, and the first different move is highlighted. Tap a
          line to compare it with A below.
        </p>
        <div className="st-grid-scroll">
          <table className="st-grid">
            <thead>
              <tr>
                <th className="st-name">Line</th>
                {Array.from({ length: Math.ceil(plies / 2) }, (_, i) => (
                  <th key={i} colSpan={2}>
                    {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lines.map((line) => {
                const s = shared(a, line)
                const isA = line === a
                return (
                  <tr key={line.id} className={`${isA ? 'is-a' : ''}${line === b && !isA ? ' is-b' : ''}`} onClick={() => pick(line)}>
                    <th className="st-name" scope="row">
                      <span className="st-tag">{isA ? 'A' : line === b ? 'B' : ''}</span>
                      {line.name}
                    </th>
                    {Array.from({ length: plies }, (_, i) => {
                      const m = line.moves[i]
                      const cls = !m ? 'empty' : isA ? 'ref' : i < s ? 'same' : i === s ? 'first' : 'diff'
                      return (
                        <td key={i} className={`${cls} ${i % 2 === 0 ? 'w' : 'b'}`}>
                          {m?.san}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="st-section">
        <h2>Compare two lines</h2>
        <div className="st-pickers">
          <label>
            <span className="st-tag">A</span>
            <select value={a.id} onChange={(e) => setA(e.target.value)}>
              {lines.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="st-tag b">B</span>
            <select value={b.id} onChange={(e) => setB(e.target.value)}>
              {lines.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        {a === b ? (
          <p className="muted">Pick two different lines to see how they differ.</p>
        ) : (
          <>
            <div className="st-diff">
              <p>
                <strong>Same start:</strong> <span className="mono">{same ? movesText(a, 0, same) : 'none'}</span>
              </p>
              <p>
                <strong>Then they part:</strong> {same < a.moves.length && <span className="mono st-a">A {numbered(same, a.moves[same].san)}</span>}
                {' vs '}
                {same < b.moves.length && <span className="mono st-b">B {numbered(same, b.moves[same].san)}</span>}
                {' · '}
                <span className="muted">{isMine({ ply: same } as TreeNode, side) ? 'your choice' : "your opponent's choice"}</span>
              </p>
            </div>
            <div className="st-pair">
              {[a, b].map((line, k) => {
                const end = line.moves[line.moves.length - 1]
                return (
                  <article key={line.id} className={`st-card ${k ? 'b' : 'a'}`}>
                    <h3>
                      <span className={`st-tag${k ? ' b' : ''}`}>{k ? 'B' : 'A'}</span> {line.name}
                    </h3>
                    <p className="mono small st-rest">
                      {same > 0 && '… '}
                      {movesText(line, same, line.moves.length)}
                    </p>
                    <div className="st-boards">
                      <figure>
                        <MiniBoard fen={end.fenAfter} orientation={side} highlight={[end.from, end.to]} />
                        <figcaption>Final position</figcaption>
                      </figure>
                      <figure>
                        <MiniBoard fen={pawnsOnly(end.fenAfter)} orientation={side} />
                        <figcaption>Pawn structure</figcaption>
                      </figure>
                    </div>
                    <Plan lineId={line.id} />
                    <button type="button" onClick={() => go(`/learn/${line.id}`)}>
                      Learn this line
                    </button>
                  </article>
                )
              })}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
