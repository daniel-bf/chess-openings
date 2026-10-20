import type { LinePlan, Plans } from './types'
import { e4BlackFinal } from './e4black'
import { d4BlackFinal } from './d4black'
import { whiteFinal } from './white'

export const plans: Plans = { ...e4BlackFinal, ...d4BlackFinal, ...whiteFinal }

export function planFor(lineId: string): LinePlan | undefined {
  return plans[lineId]
}
