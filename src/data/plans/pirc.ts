import type { Plans } from './types'

export const pircPlans: Plans = {
  "pirc:0": {
    "plan": "In the Austrian Attack White has a big centre with e4, d4 and f4 and dreams of e5. You castle first, then strike with ...c5. After d5 the centre is closed: White looks for e5 or f5 on the kingside, while you prepare ...a6, ...Rb8 and ...b5 to open the queenside. Never forget the e5 push against your f6 knight.",
    "remember": [
      "7...c5 hits the centre once your king is castled; after 8.d5 your play moves to the queenside.",
      "6...Na6 and 8...Nc7 bring the knight to c7, where it supports ...b5 and eyes d5.",
      "9...b6 answers a4 by keeping the queenside solid, ready for ...a6, ...Rb8 and ...b5."
    ]
  },
  "pirc:1": {
    "plan": "In the 150 Attack White plays Be3, Qd2 and Bh6 to swap off your g7 bishop, then wants h4-h5 against a castled king. You keep your king in the centre for now, grab queenside space with ...c6 and ...b5, and develop with ...Nbd7 and ...Bb7. Later ...e5 or ...c5 hits the centre, and ...b4 can chase the c3 knight away from e4.",
    "remember": [
      "5...c6 and 6...b5 gain queenside space and threaten ...b4 against the c3 knight, which defends e4.",
      "Delaying ...O-O means White's Bh6 and kingside pawn storm have no castled king to aim at.",
      "8...Bxh6 9.Qxh6 Bb7 completes development with the bishop aimed at e4."
    ]
  },
  "pirc:2": {
    "plan": "The Classical System is calm: White develops naturally and keeps a strong centre. You castle, play ...c6 and ...a5, and bring the knight to a6 and then b4, where no pawn can kick it. Later you look for the right moment to break in the centre with ...e5.",
    "remember": [
      "6...c6 controls d5 and b5 and prepares queenside play.",
      "7...a5 answers a4 by fixing White's queenside and making b4 safe for your knight.",
      "8...Na6 heads for b4, from where it hits c2 and d3."
    ]
  },
  "pirc:3": {
    "plan": "In the Byrne Variation White develops the bishop to g5 and plans Qd2 and Bh6 to swap your g7 bishop. You chase the bishop with ...h6 and ...g5, then swap it off with ...Nh5 to win the bishop pair. The price is a loosened kingside, so keep your king flexible (often it stays in the centre or goes queenside) and play ...c6 and ...Qa5 or ...e5 next.",
    "remember": [
      "5...h6 asks the bishop to decide; Bxh6 does not win a pawn because your bishop and the h8 rook guard h6.",
      "6...g5 drives the bishop again and gains kingside space.",
      "7...Nh5 attacks the g3 bishop, so you can take it and win the bishop pair."
    ]
  },
  "pirc:4": {
    "plan": "Against White's fianchetto you castle and strike in the centre with ...e5, then back it up with ...c6 and ...Nbd7. The structure is solid and similar to a King's Indian. If White keeps the tension you can play ...b5 or ...exd4 at a good moment; if White plays d5, you get kingside play with ...Nh5 and ...f5.",
    "remember": [
      "6...e5 challenges d4 at once; it is the standard central break in the Pirc.",
      "7...c6 controls d5 and b5, keeping White's knights out and preparing ...b5.",
      "8...Nbd7 supports e5, so you can keep the tension in the centre."
    ]
  },
  "pirc:5": {
    "plan": "In the Kholmov System White plays Bc4 and Qe2 to push e5 quickly. You prepare with ...c6, so after e5 dxe5 dxe5 your knight has a protected square on d5, and then castle. The centre opens, and your d5 knight plus the g7 bishop aiming at e5 give you good play; ...Bf5, ...Nd7 and ...Qc7 attack the e5 pawn.",
    "remember": [
      "5...c6 means a knight on d5 will be protected, so e5 does not push your knight back to a passive square.",
      "6...dxe5 and 7...Nd5 answer e5: the knight lands in the centre and blocks the c4 bishop.",
      "8...O-O completes your king safety, and your g7 bishop then aims at the e5 pawn."
    ]
  },
  "pirc:6": {
    "plan": "With 3.Bd3 White aims for a quiet set-up with c3 and a solid centre. You fianchetto, castle and prepare ...e5 with ...Nc6. The position is calm; if White plays d5 the knight goes to e5 or b8 and you continue with ...e5 or ...c6, and if White keeps the tension, ...e5 gives you a fair share of the centre.",
    "remember": [
      "3...g6 and 4...Bg7 put the bishop on the long diagonal aiming at d4.",
      "5...O-O gets your king safe before you start central play.",
      "6...Nc6 develops and adds pressure on d4, preparing ...e5."
    ]
  },
  "pirc:7": {
    "plan": "With f3 and c4 White turns the game into a Sämisch King's Indian. You castle, strike with ...e5, and after d5 closes the centre you play ...Nh5 to prepare ...f5 against e4. White usually castles queenside and plays on that wing, while you attack on the kingside. Check for ...Qh4+ tricks, since f3 has weakened White's dark squares.",
    "remember": [
      "5...O-O comes before ...e5, so your king is safe when the centre opens.",
      "6...e5 challenges d4 and claims central space; after 7.d5 the centre is closed.",
      "7...Nh5 clears the way for ...f5 and eyes the f4 square."
    ]
  },
}
