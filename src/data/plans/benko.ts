import type { Plans } from './types'

export const benkoPlans: Plans = {
  'benko:0': {
    plan: 'In the fully accepted Benko with g3, you are a soldier down but hold a lasting siege. Your priest on g7, Queen on a5 and towers on a8 and b8 all aim at the White queenside (a2, b2 and c3). Your riders head for b4, c4 or e5. The White Kingdom wants to untangle with Nd2, Rb1 and b3, and later play e4-e5 or a4 to keep the extra soldier. Many wars end in an endgame where your pressure wins the soldier back.',
    remember: [
      '5...Bxa6 and 8...Bg7 give you the two key priests.',
      '11...Qa5 sends your Queen to join the queenside siege.',
      '12...Rfb8 completes the standard set-up with both towers on the open roads.',
    ],
  },
  'benko:1': {
    plan: 'When the White Kingdom plays e4, you trade priests on f1 so White must take with the King. The King then walks to g2 on foot. You set up as always (...g6, ...Bg7, ...O-O, ...Nbd7, ...Qa5, ...Rfb8) and press on the queenside. White aims for e5 in the heartland, often after h3 and Re1. Watch for this push and keep troops ready to block or exploit it.',
    remember: [
      '7...Bxf1 8.Kxf1 means the White King can never castle.',
      '11...Nbd7 and 12...Qa5 build the queenside siege.',
      '13...Rfb8 puts the second tower on the b-file; watch for White\'s e5.',
    ],
  },
  'benko:2': {
    plan: 'With 8.Nd2 the White rider heads for c4, where it blocks your siege and hits d6. You fianchetto first, then trade priests on f1 once White plays e4, so the White King stays stuck in the centre. After castling you use the usual set-up and look for ...Nbd7-b6 to challenge the c4 rider. The enemy aims to dig in with Kg2 and keep the extra soldier.',
    remember: [
      '8...Bg7 comes first: the long diagonal road is your key asset.',
      '9...Bxf1 after e4 stops the White King castling.',
      '10...O-O, then ...Nbd7, ...Qa5 and ...Rfb8: the usual siege.',
    ],
  },
  'benko:3': {
    plan: 'With 5.e3 the White Kingdom does not take on a6, but prepares to recapture on b5 with its priest. You develop calmly with ...d6, ...g6, ...Bg7 and castle, then take on b5 and trade light-road priests with ...Ba6. After ...Nxa6 your rider can go to c7 or b4, and your Queen and towers (...Qb6, ...Rfb8) press on b2. Armies are level and the open roads are yours.',
    remember: [
      '5...d6 and 6...g6 hold back the capture until the enemy has committed.',
      '9...axb5 opens the a-file once your King is in the castle.',
      '10...Ba6 and 11...Nxa6 trade off the enemy\'s best queenside guardian.',
    ],
  },
  'benko:4': {
    plan: 'With 5.f3 the White Kingdom builds a strong heartland with e4. You fianchetto, castle and send your rider via d7 to e5 to trade off the White priest on d3. Then you open the a-file with ...axb5 and pin the b5 rider with ...Ba6. Your lively troops and the bishop pair give good play. The enemy wants to keep the heartland closed and use the extra ground.',
    remember: [
      '5...d6 keeps things solid; the a6 soldier is not running away.',
      '10...Ne5 and 11...Nxd3: your rider takes the d3 priest and wins you the bishop pair.',
      '12...axb5 and 13...Ba6 open roads and pin the b5 rider.',
    ],
  },
  'benko:5': {
    plan: 'When the White Kingdom hands back the soldier with 5.b6, armies are level and your Queen is active on b6. You fianchetto, castle and then play ...a5 so your priest can go to a6 and trade off the White light-road priest. Plans include ...Nbd7, ...Rfb8 and ...Ne5 or ...Nb4. The enemy wants to use the extra ground from the d5 soldier and push e5.',
    remember: [
      '5...Qxb6 wins back the soldier; the armies are now level.',
      '8...Bg7 and 9...O-O: priest to the long road, King into the castle, as in every Benko.',
      '10...a5 clears the road for ...Ba6 to trade light-road priests.',
    ],
  },
  'benko:6': {
    plan: 'In the Zaitsev System the White Kingdom plays 5.Nc3 and then e4, hoping to use its rider on b5. You take back the soldier and gain time with ...b4, then play ...d6 to keep the rider out of c7 and d6. After the fianchetto and castling the armies are level and your play is easy, with ...Ba6 to challenge the b5 rider and ...Nbd7 to come.',
    remember: [
      '5...axb5 wins the soldier back at once.',
      '6...b4 gains time on the c3 rider.',
      '7...d6 keeps the rider out of c7 and d6; then fianchetto and castle.',
    ],
  },
  'benko:7': {
    plan: 'After 4.Nf3 you take on c4 and fight a Benoni-style war where the enemy wins back the soldier but you keep the half-open b-file. Your priest on g7 and tower on b8 press on b2, and your rider comes to d7 and then b6 or e5. The White Kingdom aims for e4-e5 or a breakthrough in the heartland. Look for ...Nbd7, ...Rb8, ...Qc7 or ...Ne8-c7.',
    remember: [
      '4...bxc4 opens the b-file for your tower.',
      '5...d6 and 6...g6 raise the Benoni shield wall.',
      '7...Bg7 and 8...O-O finish development; next ...Nbd7 and ...Rb8.',
    ],
  },
  'benko:8': {
    plan: 'With 4.a4 the White Kingdom keeps the queenside shut, but weakens b3 and b4. You take on c4 and develop with ...d6, ...g6, ...Bg7 and castling. Later you use the b-file and the b4 square, and trade the White priest on c4 with ...Ba6. The enemy aims for e4-e5 in the heartland.',
    remember: [
      '4...bxc4 makes the enemy spend time winning the soldier back.',
      '5...d6 and 6...g6 clear the road for the g7 priest.',
      '8...O-O, then ...Nbd7, ...Ba6 and ...Rb8 put the queenside to use.',
    ],
  },
}
