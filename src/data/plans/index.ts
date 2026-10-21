import type { LinePlan, Plans } from './types'
import { caroKannPlans } from './caro-kann'
import { catalanPlans } from './catalan'
import { dutchPlans } from './dutch'
import { englishPlans } from './english'
import { frenchPlans } from './french'
import { grunfeldPlans } from './grunfeld'
import { italianPlans } from './italian'
import { kingsGambitPlans } from './kings-gambit'
import { kingsIndianPlans } from './kings-indian'
import { londonPlans } from './london'
import { nimzoIndianPlans } from './nimzo-indian'
import { petroffPlans } from './petroff'
import { pircPlans } from './pirc'
import { queensGambitPlans } from './queens-gambit'
import { ruyLopezPlans } from './ruy-lopez'
import { scandinavianPlans } from './scandinavian'
import { scotchPlans } from './scotch'
import { sicilianPlans } from './sicilian'
import { slavPlans } from './slav'
import { viennaPlans } from './vienna'

export const plans: Plans = {
  ...caroKannPlans,
  ...catalanPlans,
  ...dutchPlans,
  ...englishPlans,
  ...frenchPlans,
  ...grunfeldPlans,
  ...italianPlans,
  ...kingsGambitPlans,
  ...kingsIndianPlans,
  ...londonPlans,
  ...nimzoIndianPlans,
  ...petroffPlans,
  ...pircPlans,
  ...queensGambitPlans,
  ...ruyLopezPlans,
  ...scandinavianPlans,
  ...scotchPlans,
  ...sicilianPlans,
  ...slavPlans,
  ...viennaPlans,
}

export function planFor(lineId: string): LinePlan | undefined {
  return plans[lineId]
}
