import type { Plans } from './types'

export const grunfeldPlans: Plans = {
  "grunfeld:0": {
    "plan": "In the modern Exchange, White builds a big centre and plays Rb1 to get off your bishop's diagonal and hit b7. You attack d4 with ...Bg7 and ...c5, then ...cxd4 and ...Qa5+ forces Bd2, so you can grab the a2 pawn. White gets active pieces and hopes for d4-d5 and play on the kingside. You have an extra pawn and a passed a-pawn, which grows stronger as pieces are swapped. ...Bg4 adds pressure on d4 by hitting its defender on f3.",
    "remember": [
      "7...c5 strikes d4 at once, together with your g7 bishop.",
      "9...cxd4 and 10...Qa5+ force 11.Bd2, and then 11...Qxa2 wins a pawn and creates a passed a-pawn.",
      "12...Bg4 hits the f3 knight, which defends d4 and e5."
    ]
  },
  "grunfeld:1": {
    "plan": "In the Classical Exchange, White plays Bc4 and Ne2 so the knight cannot be pinned. You pressure d4 with ...c5, ...Nc6 and ...Bg4. ...Bg4 provokes f3, which weakens White's king. Then ...Na5 kicks the strong c4 bishop, and after ...cxd4 your bishop goes to e6 to control d5. White's main plan is d4-d5, gaining space and attacking your e6 bishop, while you play on the c-file and against the centre.",
    "remember": [
      "10...Bg4 provokes 11.f3, which weakens the squares around White's king.",
      "11...Na5 attacks the c4 bishop. If 12.Bxf7+, that is the sharp Seville Variation.",
      "12...cxd4 and 13...Be6 control d5 and eye a2. Expect White's d4-d5 push."
    ]
  },
  "grunfeld:2": {
    "plan": "In the Russian System, White's queen captures on c4 and White builds a big centre with e4. In the Hungarian Variation, you play ...a6 and ...b5 to gain queenside space with tempo on the queen, then strike d4 with ...c5. Next ...Bb7 hits e4. White's chances lie in the centre and a possible e5 push, which you meet with ...Nfd7 and play against the centre.",
    "remember": [
      "5...dxc4 makes White spend a queen move to recapture, and 6...O-O gets your king safe.",
      "7...a6 prepares 8...b5, which kicks the queen from c4 and gains space.",
      "9...c5 strikes d4. Follow with ...Bb7 to hit e4."
    ]
  },
  "grunfeld:3": {
    "plan": "After 4.Bf4 and 5.e3, you strike at once with ...c5. After dxc5, ...Qa5 pins the c3 knight, ...dxc4 opens lines, and ...Qxc5 wins your pawn back. Your pieces come out quickly: ...Nc6, ...Bf5 or ...Be6, and ...Rd8 to use the open d-file. White has a slightly better pawn structure, but your development and the g7 bishop give you an easy game.",
    "remember": [
      "5...c5 hits d4 before White finishes developing.",
      "6...Qa5 pins the c3 knight to the king and prepares to win back c5.",
      "9...Qxc5 regains the pawn and hits the c4 bishop, and 10...Nc6 develops with ideas of ...Rd8."
    ]
  },
  "grunfeld:4": {
    "plan": "With 4.Bg5, White hopes to win d5 with Bxf6 and cxd5. You jump to e4, hitting the bishop and the c3 knight. Then you swap on c3 to double White's pawns and take on c4. ...Be6 holds the extra pawn for now. White will use the open b-file, often with Rb1 and Qb1 hitting b7, and hopes the centre and active pieces make up for the pawn. Develop quickly with ...c6, ...Nd7 and ...Bg7.",
    "remember": [
      "4...Ne4 attacks the g5 bishop and the c3 knight at the same time.",
      "5...Nxc3 doubles White's c-pawns, and 6...dxc4 grabs a pawn.",
      "7...Be6 protects the c4 pawn. Watch b7 against Rb1 and Qb1."
    ]
  },
  "grunfeld:5": {
    "plan": "Against the quiet Slow System, you castle and strike with ...c5. After ...cxd4 exd4, no white pawn can defend d4 any more, and your pieces attack it: the g7 bishop, the c6 knight and ...Bg4 to pin its f3 defender. If you later take on c4 and White recaptures with the bishop, d4 becomes an isolated pawn (no pawns on the files next to it), and you blockade it with a piece on d5.",
    "remember": [
      "6...c5 hits d4 at once, using your g7 bishop on the long diagonal.",
      "7...cxd4 makes White recapture with the e-pawn, which leaves d4 easier to attack.",
      "8...Nc6 adds pressure on d4, and ...Bg4 can follow to pin the f3 knight that defends it."
    ]
  },
  "grunfeld:6": {
    "plan": "Against the fianchetto with e4, you swap on d5 and retreat the knight to b6 when e4 kicks it. Then you attack d4 with ...c5. If White pushes past with d5, you undermine it straight away with ...e6. After ...exd5 the centre opens for your g7 bishop and rooks, and ...Na6 heads for b4 or c7 to pressure d5.",
    "remember": [
      "6...Nb6 retreats the knight after e4, keeping an eye on d5 and c4.",
      "7...c5 hits d4, which your g7 bishop also attacks.",
      "8...e6 undermines the d5 pawn, and ...exd5 opens the centre after castling."
    ]
  },
  "grunfeld:7": {
    "plan": "With 3.f3, White prepares e4 in Sämisch style. You still strike with ...d5, and after e4 your knight retreats to b6. White sets up Be3, Qd2 and castles long, planning h4-h5 against your king. You answer in the centre: ...Nc6 hits d4, ...e5 opens lines towards White's king, and after d5 the knight jumps to the strong d4 square.",
    "remember": [
      "3...d5 strikes before White can play e4 with full support, and 5...Nb6 is the safe retreat.",
      "8...Nc6 develops and adds pressure on d4 together with your g7 bishop.",
      "9...e5 opens the centre against the king on c1, and after 10.d5 the knight goes to d4."
    ]
  },
}
