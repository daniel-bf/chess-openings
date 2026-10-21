import type { Plans } from './types'

export const pircPlans: Plans = {
  "pirc:0": {
    "plan": "In the Austrian Attack, White builds a big centre with e4, d4 and f4 and wants e5. You castle first, then strike back with ...c5. After d5 the centre is closed and you play on the queenside, while always watching for White's e5 push against your f6 knight.",
    "remember": [
      "...c5 hits the centre once your king is castled; after d5 the centre locks and your play shifts to the queenside.",
      "...Na6-c7 brings the knight to c7, where it covers b5 and eyes d5, preparing ...b5.",
      "...b6 answers a4 by supporting the c5 pawn, so your queenside stays solid."
    ]
  },
  "pirc:1": {
    "plan": "In the 150 Attack, White plays Be3, Qd2 and Bh6 to swap off your g7 bishop, then wants h4-h5 against your king. You keep your king in the centre for now, gain queenside space with ...c6 and ...b5, and develop with ...Nbd7 and ...Bb7.",
    "remember": [
      "...c6 and ...b5 gain queenside space and threaten ...b4 against the c3 knight, which supports e4.",
      "Delaying ...O-O means White's Bh6 and kingside pawn storm have no castled king to aim at.",
      "...Bb7 completes development after Bxh6 Qxh6; with White's queen covering f8, your king stays in the centre for now."
    ]
  },
  "pirc:2": {
    "plan": "The Classical is calm: White develops naturally and keeps a strong centre. You castle, play ...c6 and ...a5, and bring the knight to a6 heading for b4. Later you look for the right moment for a central break with ...e5.",
    "remember": [
      "...c6 controls d5 and b5 and prepares queenside play.",
      "...a5 answers a4 by stopping b4 and supporting a knight on b4.",
      "...Na6 heads for b4, from where it hits c2 and d3."
    ]
  },
  "pirc:3": {
    "plan": "White develops the bishop to g5 and plans Qd2 followed by Bh6 to trade your g7 bishop. You chase the bishop with ...h6 and ...g5, then trade it off with ...Nh5 to win the bishop pair. The price is a loosened kingside, so keep your king flexible.",
    "remember": [
      "...h6 asks the bishop to decide before White can play Bh6; Bxh6 does not win a pawn because your bishop and rook defend h6.",
      "...g5 drives the bishop again and gains kingside space.",
      "...Nh5 attacks the g3 bishop, so you can take it and win the bishop pair."
    ]
  },
  "pirc:4": {
    "plan": "Against White's fianchetto, you castle and strike in the centre with ...e5, then back it up with ...c6 and ...Nbd7. The structure is solid and similar to a King's Indian, with play for you on both wings.",
    "remember": [
      "...e5 challenges d4 straight away; it is the standard central break in the Pirc.",
      "...c6 controls d5 and b5, keeping White's knights out and preparing queenside play.",
      "...Nbd7 supports e5, so you can keep the tension in the centre."
    ]
  },
  "pirc:5": {
    "plan": "With Bc4 and Qe2 White prepares a quick e5. You play ...c6 so that after e5 dxe5 dxe5 your knight has a protected square on d5, then you castle quickly. The centre opens, and your d5 knight plus the g7 bishop aiming at e5 give you good play.",
    "remember": [
      "...c6 means a knight on d5 will be protected, so e5 does not push your knight back passively.",
      "...dxe5 and ...Nd5 answer e5: the knight lands in the centre and blocks the c4 bishop.",
      "...O-O completes development, and your g7 bishop then aims at the e5 pawn."
    ]
  },
  "pirc:6": {
    "plan": "With 3.Bd3, White aims for a quiet setup with c3 and a solid centre. You fianchetto, castle and prepare ...e5 with ...Nc6. The position is calm and you develop simply and solidly.",
    "remember": [
      "...g6 and ...Bg7 put the bishop on the long diagonal aiming at d4.",
      "...O-O gets your king safe before you start central play.",
      "...Nc6 develops and adds pressure on d4, preparing ...e5."
    ]
  },
  "pirc:7": {
    "plan": "With f3 and c4, White transposes to a Saemisch King's Indian structure. You castle, strike with ...e5, and after d5 closes the centre you play ...Nh5 to prepare ...f5. White plays on the queenside while you attack on the kingside.",
    "remember": [
      "...O-O comes before ...e5, so your king is safe when the centre opens.",
      "...e5 challenges White's d4 pawn and claims central space; after d5 the centre is closed.",
      "...Nh5 clears the way for ...f5 and eyes the f4 square."
    ]
  },
}
