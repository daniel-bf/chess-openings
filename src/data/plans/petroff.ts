import type { Plans } from './types'

export const petroffPlans: Plans = {
  "petroff:0": {
    "plan": "The Classical Attack. You kick the e5 knight with ...d6 before taking e4, then support your e4 knight with ...d5 and develop with ...Nc6, ...Be7 and castling. White attacks the knight with c4 and Nc3; you answer by hitting the d3 bishop with ...Nb4, defending with ...Bf5, and when a3 comes you swap on c3 and bring the knight back to c6. White has a little more space; you have a solid, equal game.",
    "remember": [
      "3...d6 kicks the e5 knight first; 3...Nxe4 at once runs into 4.Qe2 and White gets the better game.",
      "8...Nb4 answers c4 by attacking the d3 bishop, chasing it off the diagonal aimed at your king.",
      "After 11.a3, ...Nxc3 and 12...Nc6 save both knights: one is traded, the other returns to safety."
    ]
  },
  "petroff:1": {
    "plan": "In the Nimzowitsch Attack (5.Nc3) White swaps knights and plans Be3, Qd2 and long castling, often followed by a kingside pawn storm. You develop with ...Be7, castle short and reroute the knight to f6. With kings on opposite sides, counterattack on the queenside with ...Be6, ...Qa5 or pawn moves like ...c5 and ...b5 rather than only defending.",
    "remember": [
      "5...Nxc3 swaps knights; after 6.dxc3 White develops quickly, so 6...Be7 and 7...O-O get your king safe fast.",
      "8...Nd7 and 9...Nf6 bring the knight to its best square, where it guards h7 and your king.",
      "After White's O-O-O the kings are on opposite wings: attack White's king on the queenside."
    ]
  },
  "petroff:2": {
    "plan": "In the Lasker Variation (5.Qe2) White pins your knight on the e-file. You block with ...Qe7, retreat the knight when d3 attacks it, and trade queens when Bg5 pins it again. The endgame is equal and very safe; White is usually happy with a draw here, and you have nothing to fear. Develop with ...Be7, ...Bd7 or ...Be6, ...Nc6 and castle either side.",
    "remember": [
      "5...Qe7 blocks the e-file, because moving the e4 knight while pinned is illegal.",
      "6...Nf6 retreats when d3 attacks the knight; your queen on e7 covers the e-file.",
      "7...Qxe2+ answers Bg5 by trading queens, and 8...Be7 then unpins the knight for good."
    ]
  },
  "petroff:3": {
    "plan": "In the Kaufmann Attack (5.c4) White controls d5 so you cannot support your knight with ...d5. You develop with ...Nc6, swap knights when Nc3 attacks, castle, and then offer another knight trade with ...Ne5. After Nxe5 dxe5 the position is symmetrical and equal: develop with ...Bf5 or ...Be6 and put rooks on the d- and e-files.",
    "remember": [
      "6...Nxc3 swaps your e4 knight as soon as Nc3 challenges it.",
      "7...Be7 and 8...O-O get your king safe before anything else.",
      "9...Ne5 offers a trade with tempo on the d3 bishop; after 10.Nxe5 dxe5 you have no weaknesses."
    ]
  },
  "petroff:4": {
    "plan": "In the Steinitz Variation (3.d4) White opens the centre at once. You take on e4, support the knight with ...d5, and challenge White's strong e5 knight with ...Nd7. After the trade you develop with ...Bd6, castle, and meet c4 with ...c6 to keep d5 solid. Your e4 knight is a strong piece; White will try to dislodge it with c4, Nc3 or Re1.",
    "remember": [
      "4...d5 supports the e4 knight, which the d3 bishop attacks.",
      "5...Nd7 challenges White's best piece, the e5 knight; after 6.Nxd7 Bxd7 your bishop is developed.",
      "8...c6 answers c4 by supporting d5, so your centre stays solid."
    ]
  },
  "petroff:5": {
    "plan": "In the Cochrane Gambit White gives a knight for two pawns and a chase of your king. You take the knight, then hit the centre with ...c5 and ...d5 before White's pawns roll forward. After e5 your knight jumps to e4 and then takes on c5, so you win a pawn back and are a piece for two pawns up. Develop quickly with ...Nc6, ...Be7 and ...Be6, tuck your king away on g8 (or castle by hand with ...Rf8 and ...Kg8), and the extra piece should tell.",
    "remember": [
      "4...Kxf7 accepts the sacrifice; 5...Nxe4? 6.Qh5+ is the trap to avoid.",
      "5...c5 and 6...d5 strike the centre at once and open lines for your pieces.",
      "After 7.e5, 7...Ne4 centralises the knight, and 8...Nxc5 wins back a pawn with tempo on the d3 bishop."
    ]
  },
  "petroff:6": {
    "plan": "In the Three Knights Game White takes on e5 after your ...Bb4. You castle and use the e-file with ...Re8 to put pressure on e4, then trade on c3 to remove e4's defender and win the pawn back with ...Nxe4. Material is level and your pieces are active; continue with ...d6, ...Nc6 and ...Bf5.",
    "remember": [
      "4...O-O after Nxe5 prepares ...Re8 to put pressure on e4 along the e-file.",
      "6...Bxc3 removes the knight that defends e4, so 7...Nxe4 regains the pawn.",
      "8...d6 opens the c8 bishop and takes e5 away from White's d3 knight."
    ]
  },
  "petroff:7": {
    "plan": "With 3.Bc4 and 4.Nc3 White offers the e4 pawn for quick development. You take it, swap knights on c3 and hold your e5 pawn with ...f6. Your kingside is loosened, so cover the light squares around your king with ...g6 and ...Qe7, then ...d6, ...c6 and ...Be6 to trade off the c4 bishop. You are a pawn up with a playable position.",
    "remember": [
      "5...f6 holds the e5 pawn, which the f3 knight attacked.",
      "6...g6 answers Nh4 by stopping Qh5+, a real check now that your f-pawn has moved, and by taking f5 from the knight.",
      "7...Qe7 defends e5 against f4 and covers f7 and the light squares around your king."
    ]
  },
  "petroff:8": {
    "plan": "White doubles the attack on your e4 knight with Re1 and later Nbd2. You keep the knight in place: ...Bg4 pins the f3 knight and ...f5 gives the e4 knight pawn support, so it becomes a monster on e4. After castling, play ...Bd6 or ...Qd7 and ...Rae8, and be ready for White's Qb3 (hitting b7 and d5), which you meet with ...Na5 or ...Kh8. The f5 pawn loosens your king a little, so do not open the position carelessly.",
    "remember": [
      "8...Bg4 pins the f3 knight and adds pressure on d4.",
      "9...f5 supports the e4 knight with a pawn, the key idea of this line.",
      "10...O-O tucks your king away; meet Qb3 with ...Na5 or ...Kh8."
    ]
  },
  "petroff:9": {
    "plan": "White kicks your e4 knight with d3 and gets a quiet, symmetrical position. You retreat to f6, take your share of the centre with ...d5 and copy White's development with ...Bd6 and castling. Then ...Bg4 to pin the f3 knight, ...Re8 to take the open e-file and ...c6 to support d5. The position is equal, and the open e-file means rook trades are likely.",
    "remember": [
      "5...Nf6 is the safest retreat: the knight guards h7 and your king.",
      "6...d5 stakes a claim in the centre and frees the c8 bishop.",
      "7...Bd6 and 8...O-O mirror White; then ...Bg4 and ...Re8."
    ]
  },
  "petroff:10": {
    "plan": "White develops with Bd3, castles and plans c3, Bc2, d4 and Re1 for a slow build-up. You retreat the knight to f6, develop with ...Be7 and castle, then take the open e-file with ...Re8. Follow up with ...Bf8, ...c6, ...Nbd7 and ...d5 for a sound, equal position. White's bishop on d3 or c2 aims at your king, so keep the f6 knight there as a defender.",
    "remember": [
      "5...Nf6 retreats to the knight's best defensive square.",
      "6...Be7 and 7...O-O get your king safe quickly.",
      "8...Re8 takes the open e-file before White can play Re1."
    ]
  },
}
