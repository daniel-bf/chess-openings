import { lineById, openingById, openings } from '../../data/openings'
import type { Side } from '../../data/types'
import type { TreeNode } from '../../lib/tree'

/** What every explorer view gets: one colour's merged tree and the position in focus. */
export interface ViewProps {
  root: TreeNode
  side: Side
  selected: TreeNode
  onSelect: (id: string) => void
}

/** The openings that the lines through a node belong to, in catalogue order. */
export function openingsAt(node: TreeNode): string[] {
  const ids = new Set(node.lineIds.map((id) => lineById.get(id)!.openingId))
  return openings.filter((o) => ids.has(o.id)).map((o) => o.id)
}

const HUES = [4, 30, 50, 95, 150, 178, 205, 232, 265, 295, 330]

/** One colour per opening, so an opening keeps its colour across every view. */
export function openingColor(openingId: string, lightness = 52): string {
  const o = openingById.get(openingId)!
  const same = openings.filter((x) => x.side === o.side)
  const hue = HUES[same.indexOf(o) % HUES.length]
  return `hsl(${hue} 62% ${lightness}%)`
}

/** The colour of a node: its opening's colour once only one opening is left, otherwise grey. */
export function nodeColor(node: TreeNode, lightness = 52): string {
  const ids = openingsAt(node)
  return ids.length === 1 ? openingColor(ids[0], lightness) : `hsl(150 6% ${Math.min(lightness + 8, 80)}%)`
}

export const isMine = (node: TreeNode, side: Side) => (node.ply % 2 === 0) === (side === 'white')
