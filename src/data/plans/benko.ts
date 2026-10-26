import type { Plans } from './types'

export const benkoPlans: Plans = {
  'benko:0': {
    plan: 'In the fully accepted Benko with g3, you are a pawn down but have lasting pressure. Your bishop on g7, queen on a5 and rooks on a8 and b8 all point at White\'s queenside (a2, b2 and c3). Your knights head for b4, c4 or e5. White wants to untangle with Nd2, Rb1 and b3, and later play e4-e5 or a4 to keep the extra pawn. Many games end in an endgame where your pressure wins the pawn back.',
    remember: [
      '5...Bxa6 and 8...Bg7 give you the two key bishops.',
      '11...Qa5 adds the queen to the queenside pressure.',
      '12...Rfb8 completes the standard set-up with both rooks on the open files.',
    ],
  },
  'benko:1': {
    plan: 'When White plays e4, you swap bishops on f1 so White has to take with the king. White then walks the king to g2 by hand. You set up as always (...g6, ...Bg7, ...O-O, ...Nbd7, ...Qa5, ...Rfb8) and press on the queenside. White aims for e5 in the centre, often after h3 and Re1. Watch for this push and keep pieces ready to block or exploit it.',
    remember: [
      '7...Bxf1 8.Kxf1 means White cannot castle.',
      '11...Nbd7 and 12...Qa5 build the queenside pressure.',
      '13...Rfb8 puts the second rook on the b-file; watch for White\'s e5.',
    ],
  },
  'benko:2': {
    plan: 'With 8.Nd2 the knight heads for c4, where it blocks your pressure and hits d6. You fianchetto first, then swap bishops on f1 once White plays e4, so White\'s king stays in the centre. After castling you use the usual set-up and look for ...Nbd7-b6 to challenge the c4 knight. White aims to consolidate with Kg2 and keep the extra pawn.',
    remember: [
      '8...Bg7 comes first: the long diagonal is your key asset.',
      '9...Bxf1 after e4 stops White castling.',
      '10...O-O, then ...Nbd7, ...Qa5 and ...Rfb8 as usual.',
    ],
  },
  'benko:3': {
    plan: 'With 5.e3 White does not take on a6, but prepares to recapture on b5 with the bishop. You develop calmly with ...d6, ...g6, ...Bg7 and castle, then take on b5 and trade light-squared bishops with ...Ba6. After ...Nxa6 your knight can go to c7 or b4, and your queen and rooks (...Qb6, ...Rfb8) press on b2. Material is level and you have the open files.',
    remember: [
      '5...d6 and 6...g6 delay the capture until White has committed.',
      '9...axb5 opens the a-file once you have castled.',
      '10...Ba6 and 11...Nxa6 swap off White\'s best queenside defender.',
    ],
  },
  'benko:4': {
    plan: 'With 5.f3 White builds a strong centre with e4. You fianchetto, castle and use the knight via d7 to e5 to swap off White\'s d3 bishop. Then you open the a-file with ...axb5 and pin the b5 knight with ...Ba6. Your active pieces and the bishop pair give good play. White wants to keep the centre closed and use the extra space.',
    remember: [
      '5...d6 keeps things solid; the a6 pawn is not running away.',
      '10...Ne5 and 11...Nxd3 win the bishop pair.',
      '12...axb5 and 13...Ba6 open lines and pin the b5 knight.',
    ],
  },
  'benko:5': {
    plan: 'When White returns the pawn with 5.b6, material is level and your queen is active on b6. You fianchetto, castle and then play ...a5 so the bishop can go to a6 and swap off White\'s light-squared bishop. Plans include ...Nbd7, ...Rfb8 and ...Ne5 or ...Nb4. White wants to use the extra space from the d5 pawn and push e5.',
    remember: [
      '5...Qxb6 regains the pawn; material is now level.',
      '8...Bg7 and 9...O-O follow the usual Benko set-up.',
      '10...a5 makes room for ...Ba6 to swap light-squared bishops.',
    ],
  },
  'benko:6': {
    plan: 'In the Zaitsev System White plays 5.Nc3 and then e4, aiming to use the knight on b5. You take back the pawn and gain time with ...b4, then play ...d6 to keep the knight out of c7 and d6. After fianchettoing and castling you have equal material and easy play, with ...Ba6 to challenge the b5 knight and ...Nbd7 to come.',
    remember: [
      '5...axb5 takes the pawn back at once.',
      '6...b4 gains time on the c3 knight.',
      '7...d6 keeps the knight out of c7 and d6; then fianchetto and castle.',
    ],
  },
  'benko:7': {
    plan: 'After 4.Nf3 you take on c4 and play a Benoni-style position where White regains the pawn but you keep the half-open b-file. Your bishop on g7 and rook on b8 press on b2, and the knight comes to d7 and b6 or e5. White aims for e4-e5 or a central breakthrough. Look for ...Nbd7, ...Rb8, ...Qc7 or ...Ne8-c7.',
    remember: [
      '4...bxc4 opens the b-file for your rook.',
      '5...d6 and 6...g6 set up the Benoni structure.',
      '7...Bg7 and 8...O-O complete development; next ...Nbd7 and ...Rb8.',
    ],
  },
  'benko:8': {
    plan: 'With 4.a4 White stops the queenside from opening, but weakens b3 and b4. You take on c4 and develop with ...d6, ...g6, ...Bg7 and castling. Later you use the b-file and the b4 square, and trade White\'s c4 bishop with ...Ba6. White aims for e4-e5 in the centre.',
    remember: [
      '4...bxc4 makes White spend time regaining the pawn.',
      '5...d6 and 6...g6 prepare the fianchetto.',
      '8...O-O, then ...Nbd7, ...Ba6 and ...Rb8 use the queenside.',
    ],
  },
}
