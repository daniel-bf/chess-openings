/** The idea behind a line and what to remember from it, keyed by line id ("opening:index"). */
export interface LinePlan {
  plan: string
  remember: string[]
}
export type Plans = Record<string, LinePlan>
