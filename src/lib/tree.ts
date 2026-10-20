import type { Line, LineMove } from './repertoire'

/** One move in an opening's tree. The root has no move. */
export interface TreeNode {
  id: string
  move: LineMove | null
  /** Half-move number of this move, 0-based (0 = White's first move). */
  ply: number
  parent: TreeNode | null
  children: TreeNode[]
  /** Lines that pass through this move. */
  lineIds: string[]
}

/** Merges an opening's lines into one tree that branches wherever they part ways. */
export function buildTree(lines: Line[]): { root: TreeNode; byId: Map<string, TreeNode> } {
  const root: TreeNode = { id: 'root', move: null, ply: -1, parent: null, children: [], lineIds: lines.map((l) => l.id) }
  const byId = new Map([[root.id, root]])
  for (const line of lines) {
    let node = root
    line.moves.forEach((move, ply) => {
      let child = node.children.find((c) => c.move!.san === move.san)
      if (!child) {
        child = { id: `${node.id === 'root' ? '' : node.id + ' '}${move.san}`, move, ply, parent: node, children: [], lineIds: [] }
        node.children.push(child)
        byId.set(child.id, child)
      } else if (!child.move!.comment && move.comment) {
        child.move = move
      }
      child.lineIds.push(line.id)
      node = child
    })
  }
  return { root, byId }
}

/** "1. e4", "1… e5". */
export function moveNumber(node: TreeNode): string {
  return node.ply % 2 === 0 ? `${node.ply / 2 + 1}.` : `${(node.ply + 1) / 2}…`
}

/** The nodes from the root (excluded) to `node`. */
export function pathTo(node: TreeNode): TreeNode[] {
  const path: TreeNode[] = []
  for (let n: TreeNode | null = node; n && n.move; n = n.parent) path.unshift(n)
  return path
}
