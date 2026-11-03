import data from '../data/deviations.json'

/** An opponent move that leaves the book and loses, with the trainee's punishment. Found by scripts/find-deviations.ts. */
export interface Deviation {
  id: string
  openingId: string
  /** Lines that pass through the position. */
  lineIds: string[]
  /** The position before the opponent's move (see fenKey). */
  fenKey: string
  /** What the book plays here. */
  bookSan: string
  /** The opponent's mistake. */
  mistake: string
  /** How much the mistake loses compared with the best move, in centipawns. */
  loss: number
  /** The trainee's advantage after the mistake, in centipawns. */
  edge: number
  /** Punishing first moves that are all close to the engine's best. */
  accept: string[]
  /** The engine's main line after the mistake, starting with the trainee's move. */
  refutation: string[]
  gain: string
}

export const deviations = data as Deviation[]

export function deviationsForLine(lineId: string): Deviation[] {
  return deviations.filter((d) => d.lineIds.includes(lineId))
}

export function deviationsForOpening(openingId: string): Deviation[] {
  return deviations.filter((d) => d.openingId === openingId)
}
