import type { Plans } from './types'

export const londonPlans: Plans = {
  "london:0": {
    "plan": "This is the London System main line: d4, Bf4, e3, Nf3, c3, Nbd2 and Bd3. You keep the bishop with Bg3 when Black offers a trade, then post a knight on e5. Your play is on the kingside, with ideas like Qf3 and attacking Black's king.",
    "remember": [
      "Bf4 comes before e3, so your dark-squared bishop is outside the pawn chain.",
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens the h-file for your rook.",
      "Ne5 puts the knight on a strong square supported by d4, ready for kingside play."
    ]
  },
  "london:1": {
    "plan": "Black attacks your b2 pawn with ...Qb6. You offer a queen trade with Qb3, retreat to c2 after ...c4, and when Black plays ...Bf5 you take the unprotected bishop. The game turns tactical, and you must watch your a1 rook and b1 knight after ...Qxb2.",
    "remember": [
      "Qb3 defends b2 and offers a queen trade.",
      "Qc2 steps away from ...c4 while still protecting b2.",
      "Qxf5 wins the bishop, which ...Bf5 left unprotected; then Qxd5 and Qxc4 collect pawns."
    ]
  },
  "london:2": {
    "plan": "Against a King's Indian setup, you play the London with h3 and c3. You keep your bishop and stay solid. The middlegame is calm, and you wait for Black's ...e5 or ...c5 breaks.",
    "remember": [
      "h3 gives your bishop the h2 retreat square if Black plays ...Nh5 or ...e5.",
      "c3 supports d4 against ...c5 and ...Nc6.",
      "O-O completes your development, so you are ready for Black's breaks."
    ]
  },
  "london:3": {
    "plan": "Against ...Nf6 and ...e6, you reach the same London structure. You build with e3 and c3, put the knights on d2 and f3, keep the bishop with Bg3 and play Bd3. Then you aim for Ne5 and a kingside attack.",
    "remember": [
      "c3 holds d4 against ...c5 and ...Nc6.",
      "Nd2 develops first and controls e4, while the g1 knight still waits.",
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens your h-file."
    ]
  },
  "london:4": {
    "plan": "Black copies your setup with ...Bf5. You offer to trade the light-squared bishops with Bd3, then play the usual c3, Nbd2 and Bg3. The game becomes a calm, solid London.",
    "remember": [
      "Bd3 offers to trade Black's good light-squared bishop, and Qxd3 develops your queen.",
      "c3 supports d4 against ...c5 and ...Nc6, so you can recapture with a pawn if Black takes on d4.",
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens the h-file for your rook."
    ]
  },
  "london:5": {
    "plan": "When Black's bishop leaves c8, b7 is left without a defender. You hit it with c4 and Qb3, gain time with c5, and after the queen trade use the open a-file. The result is a queenless middlegame with your queenside space.",
    "remember": [
      "c4 attacks d5 and opens b3 for your queen.",
      "Qb3 hits b7, which the c8 bishop no longer guards.",
      "c5 gains time on the queen, and after ...Qxb3, axb3 opens the a-file for your rook."
    ]
  },
  "london:6": {
    "plan": "Black plays ...c5 early. You build the London structure with c3, Nd2, Ngf3, Bg3 and Bd3. Then you aim for Ne5 and a kingside attack.",
    "remember": [
      "c3 supports d4 against ...c5 and ...Nc6, keeping your centre solid.",
      "Nd2 and Ngf3 develop your knights and control e4 and e5.",
      "Bg3 answers ...Bd6 by keeping your bishop, and Bd3 aims at h7."
    ]
  },
  "london:7": {
    "plan": "Against the Dutch, you still play the London. You develop with e3 and Nf3, keep the bishop with h3, and aim Bd3 at Black's kingside. The fight is about the e4 square.",
    "remember": [
      "h3 gives your bishop the h2 retreat square and keeps Black's knight off g4.",
      "Nbd2 controls e4, the square Black fights for with ...f5 and ...Bb7.",
      "Bd3 aims at e4 and f5 and Black's weakened kingside."
    ]
  },
  "london:8": {
    "plan": "Black challenges your bishop at once with ...Bd6. You keep it with Bg3, so if Black takes, hxg3 opens your h-file. You then build the usual London setup with Nd2, c3, Bd3 and Ngf3.",
    "remember": [
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens the h-file.",
      "Nd2 and c3 develop solidly and support d4 against ...c5.",
      "Bd3 aims at h7, and Ngf3 completes development."
    ]
  },
  "london:9": {
    "plan": "Black plays ...c6 and ...Bf5. You offer to trade bishops with Bd3, castle and develop. Then you prepare a central break with e4 or c4.",
    "remember": [
      "Bd3 trades off Black's good light-squared bishop.",
      "Qxd3 develops your queen, which also controls e4.",
      "Nbd2 develops and, together with Qd3, supports a later e4 break to open the centre."
    ]
  },
  "london:10": {
    "plan": "Against ...d6 and ...g6, you use the same plan as against the King's Indian setup: h3, Be2 and castle. You keep the bishop and stay solid. Then you wait for Black's breaks.",
    "remember": [
      "Nf3 develops and controls e5, making Black's ...e5 break harder.",
      "h3 gives your bishop the h2 retreat square if Black plays ...Nh5.",
      "Be2 develops modestly, so you can castle next."
    ]
  },
}
