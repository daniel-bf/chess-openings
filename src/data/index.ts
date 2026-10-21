import type { OpeningSource } from './types'
import { sicilian } from './openings/sicilian'
import { ruyLopez } from './openings/ruy-lopez'
import { italian } from './openings/italian'
import { french } from './openings/french'
import { caroKann } from './openings/caro-kann'
import { queensGambit } from './openings/queens-gambit'
import { kingsIndian } from './openings/kings-indian'
import { english } from './openings/english'
import { london } from './openings/london'
import { slav } from './openings/slav'
import { scandinavian } from './openings/scandinavian'
import { pirc } from './openings/pirc'
import { petroff } from './openings/petroff'
import { nimzoIndian } from './openings/nimzo-indian'
import { grunfeld } from './openings/grunfeld'
import { dutch } from './openings/dutch'
import { scotch } from './openings/scotch'
import { vienna } from './openings/vienna'
import { kingsGambit } from './openings/kings-gambit'
import { catalan } from './openings/catalan'
import { queensGambitDeclined } from './openings/queens-gambit-declined'
import { queensIndian } from './openings/queens-indian'
import { benko } from './openings/benko'
import { alekhine } from './openings/alekhine'
import { openGamesBlack } from './openings/open-games-black'
import { alapinWhite } from './openings/alapin-white'
import { frenchAdvanceWhite } from './openings/french-advance-white'
import { caroKannAdvanceWhite } from './openings/caro-kann-advance-white'

export const openingSources: OpeningSource[] = [
  sicilian,
  ruyLopez,
  italian,
  french,
  caroKann,
  queensGambit,
  kingsIndian,
  slav,
  english,
  london,
  scandinavian,
  pirc,
  petroff,
  nimzoIndian,
  grunfeld,
  dutch,
  scotch,
  vienna,
  kingsGambit,
  catalan,
  queensGambitDeclined,
  queensIndian,
  benko,
  alekhine,
  openGamesBlack,
  alapinWhite,
  frenchAdvanceWhite,
  caroKannAdvanceWhite,
]
