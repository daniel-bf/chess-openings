import type { Plans } from './types'

export const queensGambitDeclinedPlans: Plans = {
  'queens-gambit-declined:0': {
    plan: 'The Exchange Variation fixes the "Carlsbad" shield walls: your soldiers on c6 and d5 against the enemy\'s on d4 and e3. The White Kingdom usually launches the minority attack, pushing b4-b5 to swap on c6 and leave you a weak soldier on c6 or d5. You post a tower on e8, lead the rider via f8 to g6 or e6, and bring the c8 priest to g4 or e6. Then you look for a kingside raid or the ...Ne4 outpost.',
    remember: [
      '4...exd5 frees the c8 priest, normally your problem piece in the QGD.',
      '5...c6 and 6...Be7 handle the Bg5 pin calmly and keep the d5 fortress solid.',
      '9...Re8 and 10...Nf8 are the standard regrouping: the rider guards h7 and heads to g6 or e6.',
    ],
  },
  'queens-gambit-declined:1': {
    plan: 'With Nge2, the enemy keeps its f-soldier free and may aim for f3 and e4 to build a big heartland, sometimes after castling long. You use the same regrouping as against Nf3: ...Re8, ...Nf8 and a quick ...Be6 or ...Ng6. When the enemy plays f3 and e4, answer actively with pieces in the heartland and soldier strikes such as ...c5, so the White centre becomes a target.',
    remember: [
      '9...Re8 puts your tower opposite the White e-soldier, which matters once the enemy plays e4.',
      '10...Nf8 is the key march: the rider goes to g6 or e6, freeing the c8 priest.',
      'If the enemy plays f3 and e4, meet it by opening roads, for example with ...c5 or ...dxe4.',
    ],
  },
  'queens-gambit-declined:2': {
    plan: 'In the Tartakower your priest goes to b7 instead of staying walled in on c8. After the enemy swaps on f6 and d5, you have a priest on f6 aiming down the long diagonal road and an open e-file. The White Kingdom raids your queenside with b4. You answer ...c5, accepting "hanging pawns" on c5 and d5, which give your towers the b- and c-file roads and control many heartland squares.',
    remember: [
      '6...h6 makes the White priest decide before you play 7...b6.',
      '9...Bxf6 gives you the two priests; the f6 priest presses on d4.',
      '11...c5 answers b4 at once, so the enemy cannot fix your c-soldier on c7 or c6.',
    ],
  },
  'queens-gambit-declined:3': {
    plan: 'With 8.cxd5 the enemy trades a pair of riders and the dark-road priests. That frees your cramped camp. You get a sturdy soldier on d5 and the e-file road, and your queenside majority can march with ...c5. The White Kingdom presses on the c-file and hopes to make your c- and d-soldiers weak. You develop with ...Be6, ...c5 and ...Nd7, and keep your pieces active.',
    remember: [
      '8...Nxd5 offers trades, which helps the side with less land.',
      '9...Qxe7 and 10...exd5 leave you a sturdy heartland soldier and the e-file road.',
      '11...Be6 is the right post here: it guards d5 and backs ...c5.',
    ],
  },
  'queens-gambit-declined:4': {
    plan: 'When the enemy plays Bxf6 early, you get the bishop pair but a slightly passive camp. You build with ...c6 and ...Nd7, then break free with ...dxc4 and ...e5. Once e5 is in, both your priests come alive and the battle opens in your favour. The White Kingdom wants to keep its grip on the heartland and use the c-file before you are fully free.',
    remember: [
      '7...Bxf6 gives you two priests; you must open the roads to use them.',
      '10...dxc4 makes the White d3 priest move a second time.',
      '11...e5 is the freeing strike that opens your c8 priest\'s road.',
    ],
  },
  'queens-gambit-declined:5': {
    plan: 'This is the Tartakower reached by the 3.Nf3 move order. With the White tower on c1, you take on c4 so the priest must retake with loss of time, then you develop with ...Nbd7 and prepare ...c5. Your b7 priest and queenside majority give you counterplay. The enemy hopes to use the c-file and its more active pieces.',
    remember: [
      '4...Be7 and 5...O-O keep the same camp whatever the enemy does.',
      '8...Bb7 sends the problem priest to the long diagonal road.',
      '9...dxc4 after Be2 costs the enemy a tempo, then 10...Nbd7 prepares ...c5.',
    ],
  },
  'queens-gambit-declined:6': {
    plan: 'Against 5.Bf4 you strike at once with ...c5. After dxc5 Bxc5 your priest is active and your development is free. The White King often castles long, and the enemy aims at your King. You play ...Qa5 to pin the c3 rider and press the queenside, then ...Re8, ...e5 or ...Bd7 and ...Rac8. Your aim is to open roads against the White King or use the activity of the isolated d5 soldier.',
    remember: [
      '6...c5 is the main reply because the f4 priest cannot pin your rider.',
      '8...Nc6 brings out a rider with pressure on the heartland.',
      '9...Qa5 pins the c3 rider and prepares ...Re8 and ...e5 or ...Bd7.',
    ],
  },
  'queens-gambit-declined:7': {
    plan: 'In this Exchange line with Bf4, the White Queen on c2 stops ...Bf5. You answer ...g6 and play ...Bf5 anyway to swap off your priest, often the worst piece in the Carlsbad structure. After the swap the camp is solid: you develop with ...Nbd7, ...O-O and ...Re8, and the enemy may still try the minority attack with b4-b5.',
    remember: [
      '7...g6 supports ...Bf5 even with the White Queen on c2.',
      '8...Bf5 and 9...Bxd3 trade your bad priest for the enemy\'s best attacker.',
      '10...Nbd7 continues development; castle next and post a tower on e8.',
    ],
  },
  'queens-gambit-declined:8': {
    plan: 'Against the Catalan you take on c4 (the Open Catalan) and use the time the enemy spends winning the soldier back. With ...a6 and ...b5 you gain land, then ...Bb7 fights the White g2 priest on the long diagonal road. The White Kingdom wants to press your queenside with a4 and Bd2 or Bf4, and use the long diagonal. You aim for ...Nbd7 and ...c5 to break free.',
    remember: [
      '6...dxc4 grabs the soldier; the enemy spends time winning it back.',
      '7...a6 and 8...b5 gain land with tempo on the White Queen.',
      '9...Bb7 faces the Catalan priest on the long diagonal road.',
    ],
  },
  'queens-gambit-declined:9': {
    plan: 'When the enemy stops ...b5 with a4, your priest travels via d7 to c6, where it faces the g2 priest and gains time on the a4 soldier. After the enemy wins back c4, you fix the queenside with ...a5 and use b4 as an outpost for your pieces (for example ...Bb4 or ...Na6-b4). The White Kingdom aims for heartland play with e4 or pressure on the c-file.',
    remember: [
      '8...Bd7 heads for c6 and hits a4 on the way.',
      '9...Bc6 challenges the White g2 priest on the long diagonal road.',
      '10...a5 fixes the a4 soldier and gives you the b4 outpost.',
    ],
  },
}
