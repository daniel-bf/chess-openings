import type { Plans } from './types'

export const caroKannPlans: Plans = {
  "caro-kann:0": {
    "plan": "In the Classical, your bishop comes out to f5 before ...e6 locks it in. White chases it with h4-h5, so you retreat to h7 and swap it on d3, then build a solid ...e6, ...Ngf6, ...Be7 position. White usually castles long and has a little kingside space; you have no weaknesses, can castle short or long, and often play ...c5 or ...Qc7 and ...O-O-O.",
    "remember": [
      "...h6 answers h4 so the bishop can retreat to h7 when h5 comes; without it, h5 would trap the bishop on g6.",
      "...Nd7 covers e5, so the f3 knight cannot jump there to hit your bishop.",
      "...Bxd3 swaps your bishop before it gets stuck on h7; after Qxd3 you play ...e6 and ...Ngf6."
    ]
  },
  "caro-kann:1": {
    "plan": "In the Short Variation, White develops quietly with Nf3, Be2, Be3 and castles. You develop the bishop to f5 before ...e6, then strike at d4 with ...c5. After the swap on d4 you bring your knights to e7 and c6 to challenge White's central knight and the e5 pawn, and you castle after ...Be7 or ...Ng6.",
    "remember": [
      "...Bf5 gets the bishop outside the pawn chain before ...e6 shuts it in.",
      "...c5 attacks d4, the base of White's chain, even though it costs a second move with the c-pawn.",
      "...Ne7 and ...Nbc6 bring both knights to bear on d4 and e5."
    ]
  },
  "caro-kann:2": {
    "plan": "White offers to swap light-squared bishops at once. You accept, which leaves you a French-type structure without the French problem bishop. Then you attack d4 with ...Qb6 and ...c5, develop with ...Nc6 and ...Ne7, and play on the queenside and against the d4 pawn.",
    "remember": [
      "...Bxd3 swaps your bishop, which ...e6 would otherwise box in, for White's strong attacking bishop.",
      "...Qb6 eyes d4 and b2 and prepares ...c5 with extra pressure on d4.",
      "...c5 attacks the base of White's chain, and with your queen on b6 the d4 pawn is under real pressure."
    ]
  },
  "caro-kann:3": {
    "plan": "The Exchange Caro-Kann gives a symmetrical structure where you have the half-open c-file. You develop the bishop to g4 before ...e6, defend b7 with ...Qd7, and swap dark-squared bishops with ...Bd6. Then you castle and play a minority attack: push ...b5-b4 so that White's c3 pawn becomes a weakness.",
    "remember": [
      "...Bg4 develops the bishop outside the pawn chain before ...e6 and hits the queen on d1.",
      "...Qd7 answers Qb3 by defending b7; if White later grabs b7 with Qxb7, ...Rb8 and ...Rxb2 win it back.",
      "...Bd6 challenges White's active f4 bishop; after Bxd6 Qxd6 your queen is well placed and the dark squares are covered."
    ]
  },
  "caro-kann:4": {
    "plan": "In the Panov, White accepts an isolated d4 pawn in return for active pieces and kingside attacking chances. You blockade d5 with a knight, attack d4 with ...Nc6, ...Bf6 and your rooks, and swap pieces. The more pieces come off, the weaker the isolated pawn becomes, and in an endgame it can simply fall.",
    "remember": [
      "...e6 and ...Be7 give you a solid kingside, so after cxd5 you can take back with the knight.",
      "...Nxd5 puts a knight on the blockade square right in front of the isolated pawn.",
      "...Nc6 and ...Bf6 pile up on d4, so White must tie pieces down to defend it."
    ]
  },
  "caro-kann:5": {
    "plan": "In the Two Knights, White delays d4 and keeps options with Nc3 and Nf3. You pin the f3 knight, give up the bishop for it and build a solid ...e6, ...Nf6, ...Nbd7, ...Bd6 set-up. White has the bishop pair, but your pawns on c6, d5 and e6 keep those bishops quiet, and you can later free your game with ...e5 or ...d4.",
    "remember": [
      "...Bg4 pins the f3 knight, and after h3 ...Bxf3 is the simple answer, since retreating would invite g4.",
      "...e6 and ...Nf6 build a solid centre, with your pawns on c6, d5 and e6 limiting White's bishops.",
      "...Bd6 develops so you can castle next, while ...Nbd7 keeps the f6 knight supported."
    ]
  },
  "caro-kann:6": {
    "plan": "This is the Classical Caro-Kann with Nf3 played before h4. The ideas are the same as in the main line: stop Ne5 with ...Nd7, give the bishop the h7 square, swap bishops on d3 and build your solid ...e6 set-up.",
    "remember": [
      "...Nd7 comes right after Nf3, because otherwise Ne5 would hit the g6 bishop.",
      "...h6 answers h4 so the bishop can drop back to h7 when h5 attacks it.",
      "...Bxd3 removes White's best attacking bishop, and ...e6 then completes the standard solid structure."
    ]
  },
  "caro-kann:7": {
    "plan": "White attacks b7 with 5.Nc5 instead of the usual Ng3. You defend with ...b6, which also drives the knight to b3, then develop normally with ...e6 and ...Nd7 and swap the light-squared bishops. Your c6 pawn is slightly weaker, but White's knight on b3 is badly placed, and you finish with ...Be7 and castling.",
    "remember": [
      "...b6 meets the attack on b7 and drives the knight to b3, where it does little.",
      "...Nd7 covers e5, so the f3 knight cannot jump there.",
      "...Bxd3 swaps bishops, and after Qxd3 ...Ngf6 completes the solid main-line set-up."
    ]
  },
  "caro-kann:8": {
    "plan": "In the Fantasy, White supports e4 with f3. You play ...e6 and ...Bb4 to pressure e4 by pinning the c3 knight, and after e5 you reach a French-like position. Then ...c5, ...Nc6 and ...Qa5 or ...Qb6 attack d4 and White's doubled c-pawns, and ...f6 can hit the front of the chain while the e3 square is weak.",
    "remember": [
      "...Bb4 pins the c3 knight, which defends e4, and ...Nf6 adds a second attacker on e4.",
      "After e5, ...Nfd7 retreats the knight and prepares ...c5 against White's chain.",
      "After ...Bxc3+ bxc3, ...c5 and ...Nc6 attack d4 and leave White with weak doubled c-pawns to look after."
    ]
  },
  "caro-kann:9": {
    "plan": "With 2.c4 White heads for a Panov-type position early. You win the pawn back with ...Nf6 and ...Nxd5, then develop with ...Nc6, ...e6, ...Be7 and castle. After d4, White has an isolated d-pawn; you blockade it with the d5 knight, attack it with ...Bf6 and ...Qb6, and swap pieces.",
    "remember": [
      "...Nf6 is the right way to regain the d5 pawn: it develops instead of chasing the pawn with the queen.",
      "...e6 supports the d5 knight and opens the f8 bishop, so you can castle quickly despite the pin from Bb5.",
      "...O-O after d4 completes development, and your d5 knight blockades White's isolated d4 pawn."
    ]
  },
}
