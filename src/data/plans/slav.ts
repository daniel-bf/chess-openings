import type { Plans } from './types'

export const slavPlans: Plans = {
  "slav:0": {
    "plan": "The main line Slav: you take on c4, White wins it back with a4, e3 and Bxc4, and you develop your light-squared bishop to f5 before playing ...e6. You get a solid position with easy piece play.",
    "remember": [
      "...Bf5 comes out before ...e6, so the bishop is not shut in behind your pawns.",
      "...Bb4 pins the c3 knight, which slows down White's e4 push.",
      "After e4, ...Bg6 keeps the bishop safe, and after Bd3 ...Bh5 pins the f3 knight to the e2 queen."
    ]
  },
  "slav:1": {
    "plan": "The Geller Gambit: White sacrifices a pawn for a big centre and a kingside attack. You hold the extra pawn with ...b5, put a knight on d5 and meet the attack calmly. If you survive the attack, the extra pawn should tell.",
    "remember": [
      "...b5 protects the c4 pawn so you stay a pawn up.",
      "After e5, ...Nd5 puts the knight on a strong central square, and ...e6 supports it.",
      "Against Ng5 and Qh5, ...g6 blocks the queen's attack on f7, and ...Be7 challenges the g5 knight and prepares to castle."
    ]
  },
  "slav:2": {
    "plan": "The Exchange Slav gives a symmetrical pawn structure. You copy White's development, get your bishop to f5 before ...e6, and answer White's pin with a pin of your own. The position is fully equal.",
    "remember": [
      "...Bf5 comes out before ...e6, so the bishop is active and not locked in.",
      "...Bb4 pins the c3 knight to the king, mirroring White's Bb5 pin on your c6 knight.",
      "...Qa5 attacks the b5 bishop and backs up the b4 bishop, adding pressure on the pinned c3 knight."
    ]
  },
  "slav:3": {
    "plan": "White goes after your f5 bishop with Nh4. You retreat to g6 and, after Nxg6, recapture with the h-pawn, which opens the h-file for your rook. You develop solidly and your structure stays very sound.",
    "remember": [
      "...Bg6 keeps the bishop safe from Nxf5, which would have given you doubled pawns.",
      "...hxg6 recaptures towards the centre and gives your h8 rook a half-open file.",
      "...Bd6 develops with an eye on h2, where it works together with your rook on the h-file."
    ]
  },
  "slav:4": {
    "plan": "White offers to trade light-squared bishops with Bd3. You accept with ...Bxd3, which removes the piece that is usually hardest to develop in the Slav. Then you set up ...e6, ...Nbd7 and ...Bd6 and later aim for ...e5.",
    "remember": [
      "...Bxd3 trades off your light-squared bishop, so you no longer have a problem piece.",
      "...Nbd7 develops and supports a later ...e5 break.",
      "...Bd6 develops towards the kingside and also supports ...e5."
    ]
  },
  "slav:5": {
    "plan": "Qb3 attacks b7, which your f5 bishop no longer guards. You block with ...Qb6 and, after the queen trade, get a solid endgame. White gains queenside space with c5 and b4, so you look to break with ...e5 against d4.",
    "remember": [
      "...Qb6 defends b7 and offers a queen trade.",
      "...Qxb3 after c5 trades queens and gives White doubled b-pawns.",
      "...Nbd7 prepares ...e5, which attacks d4, the base of White's c5 pawn chain."
    ]
  },
  "slav:6": {
    "plan": "With Qc2 White protects c4 and keeps things quiet. You still take on c4, so White's queen has to move again, and then develop your bishop to f5 before ...e6. You set up ...Nbd7 and ...Be7 and later look for ...c5 or ...e5.",
    "remember": [
      "...dxc4 makes White spend another queen move to win back the pawn.",
      "...Bf5 develops the bishop outside the pawn chain before ...e6 closes it in.",
      "...Nbd7 and ...Be7 finish development calmly so you can castle and prepare a central break."
    ]
  },
  "slav:7": {
    "plan": "This is a different move order that reaches the same Nh4 position. Your bishop drops back to g6 and, after Nxg6, the h-pawn recapture opens the h-file for your rook. Recognise the transposition and play the same solid setup.",
    "remember": [
      "...Bf5 is easy to play because e3 has blocked White's c1 bishop.",
      "...Bg6 answers Nh4 and keeps the bishop from being captured on f5.",
      "...hxg6 recaptures towards the centre and opens the h-file for your rook."
    ]
  },
  "slav:8": {
    "plan": "With 6.Ne5 White wins back c4 with a knight. You play ...Nbd7 and ...Qc7 to prepare the freeing ...e5 break. The position becomes sharp, with active pieces for you.",
    "remember": [
      "...Nbd7 challenges the e5 knight, and after Nxc4 ...Qc7 adds control of e5.",
      "...e5 is the freeing break that opens the centre for your pieces.",
      "After Bf4 pins the e5 knight to your queen, ...Nfd7 defends it and ...g5 kicks the bishop away."
    ]
  },
  "slav:9": {
    "plan": "White goes after your f5 bishop with Nh4. You castle and recapture with the e-pawn, which gives you a pawn on f5 that controls e4. Your kingside structure is solid once ...g6 supports it.",
    "remember": [
      "...O-O gets your king safe before the structure changes.",
      "...exf5 recaptures so the f5 pawn controls e4 and stops White's e4 push.",
      "...g6 protects the f5 pawn after Qc2 attacks it."
    ]
  },
  "slav:10": {
    "plan": "With 5.e3 White plays slowly. You defend c4 with ...b5 and gain space with ...b4, which drives White's knight to the edge on a2. White wins the pawn back with Bxc4, but you develop with ...e6, ...Be7 and castle with a comfortable game.",
    "remember": [
      "...b5 protects the c4 pawn for now.",
      "...b4 answers a4 by kicking the c3 knight to a2, where it is badly placed.",
      "...e6 and ...Be7 finish your kingside development so you can castle quickly."
    ]
  },
}
