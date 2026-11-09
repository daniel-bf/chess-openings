import type { Plans } from './types'

export const alekhinePlans: Plans = {
  'alekhine:0': {
    plan: "After ...Nxe3 fxe3 the White Kingdom holds the land (soldiers on c5, d4 and e5) but has doubled e-pawns and no dark-squared priest. You play ...b6 to break up the c5 soldier, bring the other rider to c6 or d7, and later use the f-file road or ...f6 to attack e5. White wants more land with b4 and a4, or a kingside assault with the Queen and the f-file.",
    remember: [
      '4...Bg4 pins the f3 rider, the main guard of e5 and d4.',
      '8...Bh5 keeps the pin rather than handing White the two priests for free.',
      "11...Bxf3 lures the e2 priest away from guarding c4, so 12...Nc4 can land on c4 and take the e3 priest.",
    ],
  },
  'alekhine:1': {
    plan: 'The White Kingdom has the two priests and a soldier on e5 that cramps your kingside, but it is also a target. You play ...Nc6 or ...Nd7, ...Qh4 or ...Qc7 and attack e5, then castle (often queenside). White wants to mobilise quickly with Bc4, O-O and Re1 and use the priests on open roads.',
    remember: [
      '5...Bxf3 gives up your priest to remove the rider that guards e5.',
      '6...dxe5 takes the soldier as soon as its guard is gone.',
      '7...e6 backs the d5 rider; next you bring more pieces against e5.',
    ],
  },
  'alekhine:2': {
    plan: 'The White Kingdom has a big but loose heartland wall. After ...f6 and exf6 Bxf6 you have pieces aimed at d4 (Nc6, Bf6, a tower on d8) and a half-open f-file road. Your plan is ...Rad8, ...Kh8 and the ...e5 break to open the heartland. White tries to keep d4 safe with Qd2 and Rad1 and to use the extra land for a kingside assault.',
    remember: [
      '5...dxe5 6.fxe5 Nc6 sends a rider at d4, so White must defend it straight away.',
      '7...Bf5 sends the priest out beyond your shield wall before ...e6.',
      '11...f6 is the key break against the e5 soldier; recapture 12...Bxf6 to hit d4.',
    ],
  },
  'alekhine:3': {
    plan: 'The White Kingdom sacrificed a soldier with e6 to wreck your shield wall and gain time with c5. You keep the extra soldier and a great rider on d5, play ...g6 and ...Bg7 or ...e5, and use the open f-file road. White aims for quick mobilising (Bb5, O-O, Ng5) and pressure on the weak e6 soldier.',
    remember: [
      '7...Bg4 pins the rider that guards d4.',
      '8...fxe6 takes the soldier and opens the f-file road.',
      '9...Nd5 plants the rider in the heartland where no soldier can kick it.',
    ],
  },
  'alekhine:4': {
    plan: 'With the Queens gone, the war is about the d-file road and the c5 and e5 squares. You use the d8 tower, bring the riders to c6 and f6 or d4, and the g7 priest works along the long diagonal road. White tries to use the extra queenside land (c5, b4) and the bishop pair if the riders get traded.',
    remember: [
      '5...cxd6 recaptures toward the heartland and opens the c-file road.',
      '6...g6 and 7...Bg7 aim the priest at d4.',
      '9...e5 strikes at once; 12...N6d7 is the rider\'s safe retreat after c5.',
    ],
  },
  'alekhine:5': {
    plan: "White's soldiers on c5 and e5 have marched far ahead and need support. You undermine them with ...d6 and later ...b6, mobilise with ...Nc6 and ...Be7 and castle. White wants to use the land and the strong c4 priest, maybe with Qf3 or Nf3 and d4.",
    remember: [
      '4...Nd5 sends the rider back to the heartland after 4.c5: no soldier can kick it now.',
      '5...e6 backs the rider against Bc4.',
      '6...d6 attacks the overstretched shield wall at once.',
    ],
  },
  'alekhine:6': {
    plan: "The White Kingdom aims at f7 with Bb3 and Qh5. Once ...e6 blocks the diagonal road, White's e5 soldier is cramping but cut off from support. You play ...a5-a4 to drive back the priest, then ...Nc6, ...Nd7 or ...Bd7 and attack e5. White tries to mobilise with Nf3 and Nc3 and keep the priest on the a2-g8 diagonal.",
    remember: [
      '4...Nb6 hits the priest, but never 4...dxe5 5.dxe5 Nb6?? 6.Bxf7+.',
      '6...e6 answers the mate threat Qxf7 by blocking the priest.',
      '7...a5 threatens ...a4 to chase the b3 priest.',
    ],
  },
  'alekhine:7': {
    plan: 'After the rider trade the war is calm. The White Kingdom has quick development and an open d-file road; you aim at the e5 soldier with ...d6, ...Nc6 and ...Bg4, then bring out the f8 priest and castle. White wants Bb5 or Bc4, castling and quick piece play.',
    remember: [
      '3...Nxc3 trades riders so yours is not chased again.',
      '4...d6 strikes e5 right away.',
      '5...Nc6 adds a rider as attacker on e5; ...Bg4 or ...dxe5 follows.',
    ],
  },
  'alekhine:8': {
    plan: 'The battlefield is like a Scandinavian Defence where the White Kingdom has mobilised early. You finish mobilising with ...e5 or ...Bf5, ...e6, ...Be7 and castling. White uses quick piece play (Nf3, d4, O-O) and the b3 priest aimed at f7.',
    remember: [
      '2...d5 takes your share of the heartland against 2.Nc3.',
      '4...Nb6 hits the c4 priest and keeps the rider away from trades.',
      '5...Nc6 brings a rider out; ...e5 next gives you a share of the heartland.',
    ],
  },
  'alekhine:9': {
    plan: "After the forced sequence material is level, White's kingside soldiers are intact and yours are a little loose, but your priest on g7 is strong and you mobilise quickly. Your King castles short or you play ...c5 and ...Nc6. White aims for Nf3, Qe2 and long castling or a kingside assault with Qh5.",
    remember: [
      '3...d4 counterattacks the c3 rider instead of retreating.',
      '5...cxd2+ wins back the material with check.',
      '6...Bxg7 puts the priest on the long diagonal road; against 4.Nce2 play 4...Ng4.',
    ],
  },
}
