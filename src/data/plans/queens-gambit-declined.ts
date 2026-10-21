import type { Plans } from './types'

export const queensGambitDeclinedPlans: Plans = {
  'queens-gambit-declined:0': {
    plan: 'The Exchange Variation fixes the "Carlsbad" pawn structure: your pawns on c6 and d5 against White\'s on d4 and e3. White usually plays the minority attack, pushing b4-b5 to swap on c6 and leave you with a weak pawn on c6 or d5. You put the rook on e8, bring the knight round via f8 to g6 or e6, and develop the c8 bishop to g4 or e6. Then you look for kingside play or the ...Ne4 outpost.',
    remember: [
      '4...exd5 opens the c8 bishop, which is normally your problem piece in the QGD.',
      '5...c6 and 6...Be7 deal with the Bg5 pin calmly and keep d5 solid.',
      '9...Re8 and 10...Nf8 are the standard regrouping: the knight guards h7 and heads to g6 or e6.',
    ],
  },
  'queens-gambit-declined:1': {
    plan: 'With Nge2, White keeps the f-pawn free and may aim for f3 and e4 to build a big centre, sometimes after castling long. You use the same regrouping as against Nf3: ...Re8, ...Nf8 and a quick ...Be6 or ...Ng6. When White plays f3 and e4, answer actively with pieces on the centre and pawn breaks such as ...c5, so that White\'s centre turns into a target.',
    remember: [
      '9...Re8 puts the rook opposite White\'s e-pawn, which matters once White plays e4.',
      '10...Nf8 is the key manoeuvre: the knight goes to g6 or e6, freeing the c8 bishop.',
      'If White plays f3 and e4, meet it by opening lines, for example with ...c5 or ...dxe4.',
    ],
  },
  'queens-gambit-declined:2': {
    plan: 'In the Tartakower your bishop goes to b7 instead of staying shut in on c8. After White swaps on f6 and d5, you get a bishop on f6 aiming down the long diagonal and an open e-file. White attacks your queenside with b4. You answer ...c5, accepting "hanging pawns" on c5 and d5, which give your rooks the b- and c-files and control lots of central squares.',
    remember: [
      '6...h6 makes White decide about the bishop before you play 7...b6.',
      '9...Bxf6 gives you the two bishops; the f6 bishop presses on d4.',
      '11...c5 answers b4 at once, so White cannot fix your c-pawn on c7 or c6.',
    ],
  },
  'queens-gambit-declined:3': {
    plan: 'With 8.cxd5 White trades a pair of knights and the dark-squared bishops. That frees your cramped position. You get a solid pawn on d5 and the e-file, and your queenside majority can move with ...c5. White presses on the c-file and hopes to make your c- and d-pawns weak. You develop with ...Be6, ...c5 and ...Nd7, and keep your pieces active.',
    remember: [
      '8...Nxd5 offers trades, which is good for the side with less space.',
      '9...Qxe7 and 10...exd5 leave you with a solid centre pawn and the e-file.',
      '11...Be6 is the right square here: it guards d5 and supports ...c5.',
    ],
  },
  'queens-gambit-declined:4': {
    plan: 'When White plays Bxf6 early, you get the bishop pair but a slightly passive position. You build with ...c6 and ...Nd7, then free yourself with ...dxc4 and ...e5. Once e5 is in, both your bishops come to life and the position opens up in your favour. White wants to keep a grip on the centre and use the c-file before you are fully freed.',
    remember: [
      '7...Bxf6 gives you two bishops; you need to open the position to use them.',
      '10...dxc4 makes White\'s d3 bishop move a second time.',
      '11...e5 is the freeing break that opens your c8 bishop.',
    ],
  },
  'queens-gambit-declined:5': {
    plan: 'This is the Tartakower reached by the 3.Nf3 move order. With White\'s rook on c1, you take on c4 so the bishop has to recapture with loss of time, then you develop with ...Nbd7 and prepare ...c5. Your b7 bishop and queenside majority give you counterplay. White hopes to use the c-file and the more active pieces.',
    remember: [
      '4...Be7 and 5...O-O keep the same set-up whatever White does.',
      '8...Bb7 develops the problem bishop to the long diagonal.',
      '9...dxc4 after Be2 costs White a tempo, then 10...Nbd7 prepares ...c5.',
    ],
  },
  'queens-gambit-declined:6': {
    plan: 'Against 5.Bf4 you strike at once with ...c5. After dxc5 Bxc5 your bishop is active and you have free development. White often castles long and aims at your king. You play ...Qa5 to pin the c3 knight and pressure the queenside, followed by ...Re8, ...e5 or ...Bd7 and ...Rac8. Your aim is to open lines against White\'s king or to use the isolated d5 pawn\'s activity.',
    remember: [
      '6...c5 is the main reply because the bishop on f4 cannot pin your knight.',
      '8...Nc6 develops with pressure on the centre.',
      '9...Qa5 pins the c3 knight and prepares ...Re8 and ...e5 or ...Bd7.',
    ],
  },
  'queens-gambit-declined:7': {
    plan: 'In this Exchange line with Bf4, White uses Qc2 to stop ...Bf5. You answer ...g6 and play ...Bf5 anyway to swap off your bishop, which is often the worst piece in the Carlsbad structure. After the swap the position is solid: you develop with ...Nbd7, ...O-O and ...Re8, and White may still try the minority attack with b4-b5.',
    remember: [
      '7...g6 supports ...Bf5 even when White\'s queen is on c2.',
      '8...Bf5 and 9...Bxd3 trade your bad bishop for White\'s best attacker.',
      '10...Nbd7 continues development; castle next and put a rook on e8.',
    ],
  },
  'queens-gambit-declined:8': {
    plan: 'Against the Catalan you take on c4 (the Open Catalan) and use the time White spends regaining the pawn. With ...a6 and ...b5 you gain space, then ...Bb7 fights White\'s g2 bishop on the long diagonal. White wants to press on your queenside with a4 and Bd2 or Bf4, and use the long diagonal. You aim for ...Nbd7 and ...c5 to free your game.',
    remember: [
      '6...dxc4 takes the pawn; White spends time winning it back.',
      '7...a6 and 8...b5 gain space with tempo on White\'s queen.',
      '9...Bb7 opposes the Catalan bishop on the long diagonal.',
    ],
  },
  'queens-gambit-declined:9': {
    plan: 'When White stops ...b5 with a4, your bishop goes via d7 to c6, where it opposes the g2 bishop and gains time on the a4 pawn. After White regains c4, you fix the queenside with ...a5 and use b4 as an outpost for your pieces (for example ...Bb4 or ...Na6-b4). White aims for central play with e4 or pressure on the c-file.',
    remember: [
      '8...Bd7 heads for c6 and attacks a4 along the way.',
      '9...Bc6 challenges White\'s g2 bishop on the long diagonal.',
      '10...a5 fixes White\'s a4 pawn and gives you the b4 square.',
    ],
  },
}
