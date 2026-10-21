import type { Plans } from './types'

export const caroKannPlans: Plans = {
  "caro-kann:0": {
    "plan": "In the Classical, your bishop comes out to f5 before ...e6 locks it in. White chases it with h4-h5, so you retreat it to h7 and trade it on d3, then set up a solid ...e6, ...Ngf6, ...Be7 position. White usually castles long with some kingside space, while you have no weaknesses and can castle on either side.",
    "remember": [
      "...h6 answers h4 so the bishop can retreat to h7 when h5 comes; without it, h5 would trap the bishop on g6.",
      "...Nd7 covers e5, so the f3 knight cannot jump there to hit your bishop.",
      "...Bxd3 trades your bishop before it gets stuck on h7, and after Qxd3 you play ...e6 and ...Ngf6."
    ]
  },
  "caro-kann:1": {
    "plan": "In the Short system, White develops quietly with Nf3, Be2 and Be3. You develop the bishop to f5 before ...e6, then strike at d4 with ...c5. After the trade on d4 you bring knights to e7 and c6 to challenge White's centralised knight and the e5 pawn.",
    "remember": [
      "...Bf5 gets the bishop outside the pawn chain before ...e6 shuts it in.",
      "...c5 attacks d4, the base of White's chain, even though it costs a second move with the c-pawn.",
      "...Ne7 and ...Nbc6 bring both knights to bear on d4 and e5."
    ]
  },
  "caro-kann:2": {
    "plan": "White offers to swap light-squared bishops at once. You accept, which leaves you a French-type structure without the French problem bishop. Then you attack d4 with ...Qb6 and ...c5 and play on the queenside.",
    "remember": [
      "...Bxd3 trades the bishop that ...e6 would otherwise lock in for White's strong attacking bishop, which is good for you.",
      "...Qb6 eyes d4 and b2 and prepares ...c5 with extra pressure on d4.",
      "...c5 attacks the base of White's chain, and with your queen on b6 the d4 pawn is under real pressure."
    ]
  },
  "caro-kann:3": {
    "plan": "The Exchange Caro-Kann gives a symmetrical structure where you have the half-open c-file. You develop the bishop to g4 before ...e6, defend b7 against Qb3 with ...Qd7, and trade dark-squared bishops with ...Bd6. Later you can use a minority attack with ...b5-b4 against White's c3 pawn.",
    "remember": [
      "...Bg4 develops the bishop outside the pawn chain before ...e6 and hits the queen on d1.",
      "...Qd7 answers Qb3 by defending b7 along the seventh rank.",
      "...Bd6 challenges White's active f4 bishop; after Bxd6 Qxd6 your queen is well placed and the dark squares are covered."
    ]
  },
  "caro-kann:4": {
    "plan": "In the Panov, White accepts an isolated d4 pawn in return for active pieces and kingside attacking chances. You blockade d5 with a knight, trade pieces and target the d4 pawn. The more pieces come off, the weaker the isolated pawn becomes.",
    "remember": [
      "...e6 and ...Be7 give you a solid kingside, so after cxd5 you can recapture ...Nxd5.",
      "...Nxd5 puts a knight on the blockade square directly in front of the isolated pawn.",
      "...Nc6 and ...Bf6 pile up on d4, so White must tie pieces down to defend it."
    ]
  },
  "caro-kann:5": {
    "plan": "In the Two Knights, White delays d4 and keeps options with Nc3 and Nf3. You pin the f3 knight, give up the bishop for it and build a solid ...e6, ...Nf6, ...Nbd7, ...Bd6 setup. White has the bishop pair, but you have a firm centre and easy development.",
    "remember": [
      "...Bg4 pins the f3 knight, and after h3 ...Bxf3 is the simple answer, since retreating would invite g4.",
      "...e6 and ...Nf6 build a solid centre, with your pawns on c6, d5 and e6 limiting White's bishops.",
      "...Bd6 develops toward the kingside so you can castle next, while ...Nbd7 keeps the f6 knight supported."
    ]
  },
  "caro-kann:6": {
    "plan": "This is the Classical Caro-Kann with Nf3 played before h4. The ideas are the same as in the main line: give the bishop the h7 square, stop Ne5 with ...Nd7, trade bishops on d3 and build your solid ...e6 setup.",
    "remember": [
      "...Nd7 comes right after Nf3, because otherwise Ne5 would hit the g6 bishop.",
      "...h6 answers h4 so the bishop can drop back to h7 when h5 attacks it.",
      "...Bxd3 removes White's best attacking bishop, and ...e6 then completes the standard solid structure."
    ]
  },
  "caro-kann:7": {
    "plan": "White attacks b7 with 5.Nc5 instead of the usual Ng3. You defend with ...b6, which also drives the knight to b3, then develop normally with ...e6 and ...Nd7 and trade the light-squared bishops. Your c6 pawn is slightly weaker, but White's knight on b3 is badly placed.",
    "remember": [
      "...b6 meets the attack on b7 and drives the knight to b3, where it does little.",
      "...Nd7 covers e5, so the f3 knight cannot jump there.",
      "...Bxd3 swaps bishops, and after Qxd3 ...Ngf6 completes the solid main-line setup."
    ]
  },
  "caro-kann:8": {
    "plan": "In the Fantasy, White supports e4 with f3. You play ...e6 and ...Bb4 to pressure e4 by pinning the c3 knight, and after e5 you reach a French-like position. Then ...c5 and ...Nc6 attack d4 against White's doubled c-pawns.",
    "remember": [
      "...Bb4 pins the c3 knight, which defends e4, and ...Nf6 adds a second attacker on e4.",
      "After e5, ...Nfd7 retreats the knight and prepares ...c5 against White's chain.",
      "After ...Bxc3+ bxc3, ...c5 and ...Nc6 attack d4 and leave White with weak doubled c-pawns to look after."
    ]
  },
  "caro-kann:9": {
    "plan": "With 2.c4 White heads for a Panov-type position early. You win the pawn back with ...Nf6 and ...Nxd5, then develop with ...Nc6, ...e6, ...Be7 and castle. After d4, White has an isolated d-pawn and you have a solid position from which to blockade and attack it.",
    "remember": [
      "...Nf6 is the right way to regain the d5 pawn: it develops instead of chasing the pawn with the queen.",
      "...e6 supports the d5 knight and opens the f8 bishop, so you can castle quickly despite the pin from Bb5.",
      "...O-O after d4 completes development, and your d5 knight blockades White's isolated d4 pawn."
    ]
  },
}
