import { lineById } from '../data/openings'
import type { Side } from '../data/types'
import { moveNumber, pathTo, type TreeNode } from '../lib/tree'
import { go } from '../router'

type Item =
  | { kind: 'run'; nodes: TreeNode[] }
  | { kind: 'fork'; at: TreeNode; chosen: TreeNode }

const isMine = (node: TreeNode, side: Side) => (node.ply % 2 === 0) === (side === 'white')
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

/**
 * The line through the selected move, drawn top to bottom like a metro map: runs of moves on
 * the main stem, and at every point where a different move is possible, the alternatives
 * branching off to the side. Past the selected move the stem follows the first branch to the end.
 */
export function PathDiagram({
  root,
  selected,
  side,
  onSelect,
}: {
  root: TreeNode
  selected: TreeNode
  side: Side
  onSelect: (id: string) => void
}) {
  const full = pathTo(selected)
  for (let n = selected; n.children.length > 0; ) {
    n = n.children[0]
    full.push(n)
  }
  const onPath = new Set(full.map((n) => n.id))
  const selectedIndex = full.indexOf(selected)

  const items: Item[] = []
  let run: TreeNode[] = []
  let parent = root
  for (const node of full) {
    if (parent.children.length > 1) {
      if (run.length) items.push({ kind: 'run', nodes: run })
      run = []
      items.push({ kind: 'fork', at: parent, chosen: node })
    }
    run.push(node)
    parent = node
  }
  if (run.length) items.push({ kind: 'run', nodes: run })

  const leaf = full[full.length - 1]
  const leafLines = leaf ? leaf.lineIds.map((id) => lineById.get(id)!) : []

  return (
    <ol className="metro" aria-label="The line and its branches">
      {items.map((item) => {
        if (item.kind === 'fork') {
          const opp = !isMine(item.chosen, side)
          const who = opp ? `${item.chosen.ply % 2 === 0 ? 'White' : 'Black'} can choose` : 'Your choice'
          return (
            <li key={`fork-${item.at.id}`} className={`metro-fork ${opp ? 'theirs' : 'mine'}`}>
              <span className="metro-label">
                {who} after {item.at.move ? `${moveNumber(item.at)} ${item.at.move.san}` : 'the start'}
              </span>
              <span className="metro-branches">
                {item.at.children.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`branch-chip ${isMine(c, side) ? 'mine' : 'theirs'}${onPath.has(c.id) ? ' on' : ''}`}
                    aria-pressed={onPath.has(c.id)}
                    onClick={() => onSelect(c.id)}
                  >
                    <span className="branch-move">
                      {moveNumber(c)} {c.move!.san}
                    </span>
                    <span className="branch-count">{plural(c.lineIds.length, 'line')}</span>
                  </button>
                ))}
              </span>
            </li>
          )
        }
        const first = full.indexOf(item.nodes[0])
        const state = first > selectedIndex ? 'future' : 'past'
        return (
          <li key={`run-${item.nodes[0].id}`} className={`metro-run ${state}`}>
            <span className="metro-dot" aria-hidden="true" />
            <span className="metro-moves">
              {item.nodes.map((n, i) => (
                <button
                  key={n.id}
                  type="button"
                  className={`metro-move ${isMine(n, side) ? 'mine' : 'theirs'}${n === selected ? ' selected' : ''}${full.indexOf(n) > selectedIndex ? ' future' : ''}`}
                  onClick={() => onSelect(n.id)}
                >
                  {(i === 0 || n.ply % 2 === 0) && <span className="num">{moveNumber(n)}</span>}
                  {n.move!.san}
                </button>
              ))}
            </span>
          </li>
        )
      })}
      {leaf && (
        <li className="metro-end">
          <span className="metro-dot end" aria-hidden="true" />
          <span>
            End of <strong>{leafLines.map((l) => l.name).join(', ')}</strong>
          </span>
          {leafLines.length === 1 && (
            <button type="button" className="link small" onClick={() => go(`/learn/${leafLines[0].id}`)}>
              Learn it
            </button>
          )}
        </li>
      )}
    </ol>
  )
}
