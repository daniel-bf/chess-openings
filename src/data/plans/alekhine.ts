import type { Plans } from './types'

export const alekhinePlans: Plans = {
  'alekhine:0': {
    plan: "After ...Nxe3 fxe3 White has the space (pawns on c5, d4 and e5) but doubled e-pawns and no dark-squared bishop. You play ...b6 to break up the c5 pawn, bring the other knight to c6 or d7, and later use the f-file or ...f6 to attack e5. White wants to gain more space with b4 and a4, or attack on the kingside with the queen and the f-file.",
    remember: [
      '4...Bg4 pins the f3 knight, the main defender of e5 and d4.',
      '8...Bh5 keeps the pin rather than giving White the two bishops for free.',
      "11...Bxf3 removes the e2 bishop from c4's defence, so 12...Nc4 can land on c4 and take the e3 bishop.",
    ],
  },
  'alekhine:1': {
    plan: 'White has the two bishops and a pawn on e5 that cramps your kingside, but it is also a target. You play ...Nc6 or ...Nd7, ...Qh4 or ...Qc7 and attack e5, then castle (often queenside). White wants to develop quickly with Bc4, O-O and Re1 and use the bishops in an open position.',
    remember: [
      '5...Bxf3 gives up the bishop to remove the knight that defends e5.',
      '6...dxe5 takes the pawn as soon as its defender has gone.',
      '7...e6 supports the d5 knight; next you bring more pieces against e5.',
    ],
  },
  'alekhine:2': {
    plan: 'White has a big but loose centre. After ...f6 and exf6 Bxf6 you have pieces aimed at d4 (Nc6, Bf6, a rook on d8) and a half-open f-file. Your plan is ...Rad8, ...Kh8 and the ...e5 break to open the centre. White tries to keep d4 safe with Qd2 and Rad1 and to use the extra space for a kingside attack.',
    remember: [
      '5...dxe5 6.fxe5 Nc6 makes White defend d4 straight away.',
      '7...Bf5 develops the bishop outside the pawn chain before ...e6.',
      '11...f6 is the key break against the e5 pawn; recapture 12...Bxf6 to hit d4.',
    ],
  },
  'alekhine:3': {
    plan: 'White gave a pawn with e6 to wreck your pawn structure and gain time with c5. You keep the extra pawn and a great knight on d5, play ...g6 and ...Bg7 or ...e5, and use the open f-file. White aims for quick development (Bb5, O-O, Ng5) and pressure on the weak e6 pawn.',
    remember: [
      '7...Bg4 pins the knight that defends d4.',
      '8...fxe6 takes the pawn and opens the f-file.',
      '9...Nd5 puts the knight in the centre where no pawn can kick it.',
    ],
  },
  'alekhine:4': {
    plan: 'With queens off, the game is about the d-file and the c5 and e5 squares. You use the d8 rook, bring the knights to c6 and f6 or d4, and the g7 bishop works along the long diagonal. White tries to use the extra queenside space (c5, b4) and the bishop pair if the knights get traded.',
    remember: [
      '5...cxd6 recaptures towards the centre and opens the c-file.',
      '6...g6 and 7...Bg7 aim the bishop at d4.',
      '9...e5 strikes at once; 12...N6d7 is the safe retreat after c5.',
    ],
  },
  'alekhine:5': {
    plan: "White's pawns on c5 and e5 are far advanced and need support. You undermine them with ...d6 and later ...b6, develop with ...Nc6 and ...Be7 and castle. White wants to use the space and the strong c4 bishop, maybe with Qf3 or Nf3 and d4.",
    remember: [
      '4...Nd5 goes back to the centre after 4.c5: no pawn can kick it now.',
      '5...e6 supports the knight against Bc4.',
      '6...d6 attacks the overextended pawn chain at once.',
    ],
  },
  'alekhine:6': {
    plan: "White aims at f7 with Bb3 and Qh5. Once ...e6 blocks the diagonal, White's e5 pawn is cramping but isolated from support. You play ...a5-a4 to drive back the bishop, then ...Nc6, ...Nd7 or ...Bd7 and attack e5. White tries to develop with Nf3 and Nc3 and keep the bishop on the a2-g8 diagonal.",
    remember: [
      '4...Nb6 hits the bishop, but never 4...dxe5 5.dxe5 Nb6?? 6.Bxf7+.',
      '6...e6 answers the mate threat Qxf7 by blocking the bishop.',
      '7...a5 threatens ...a4 to chase the b3 bishop.',
    ],
  },
  'alekhine:7': {
    plan: 'With a knight swap the game is calm. White has quick development and an open d-file; you aim at the e5 pawn with ...d6, ...Nc6 and ...Bg4, then develop the f8 bishop and castle. White wants Bb5 or Bc4, castling and quick piece play.',
    remember: [
      '3...Nxc3 swaps knights so yours is not chased again.',
      '4...d6 hits e5 right away.',
      '5...Nc6 adds an attacker on e5; ...Bg4 or ...dxe5 follows.',
    ],
  },
  'alekhine:8': {
    plan: 'The position is like a Scandinavian Defence where White has developed early. You complete development with ...e5 or ...Bf5, ...e6, ...Be7 and castling. White uses quick piece play (Nf3, d4, O-O) and the b3 bishop aimed at f7.',
    remember: [
      '2...d5 takes your share of the centre against 2.Nc3.',
      '4...Nb6 hits the c4 bishop and keeps the knight out of trades.',
      '5...Nc6 develops; ...e5 next gives you a share of the centre.',
    ],
  },
  'alekhine:9': {
    plan: "After the forced sequence material is level, White's kingside pawns are intact and yours are a little loose, but your bishop on g7 is strong and you develop quickly. You castle short or play ...c5 and ...Nc6. White aims for Nf3, Qe2 and long castling or a kingside attack with Qh5.",
    remember: [
      '3...d4 counterattacks the c3 knight instead of retreating.',
      '5...cxd2+ regains the material with check.',
      '6...Bxg7 puts the bishop on the long diagonal; against 4.Nce2 play 4...Ng4.',
    ],
  },
}
