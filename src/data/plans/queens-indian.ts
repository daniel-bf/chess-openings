import type { Plans } from './types'

export const queensIndianPlans: Plans = {
  'queens-indian:0': {
    plan: 'In the 4.g3 Ba6 main line, your check on b4 lures the White priest to d2, and after it reaches c3 you raise a solid shield wall with ...c6 and ...d5. The g2 priest then bites on granite. The enemy tries to open the heartland with e4 after Ne5 and Nd2. You castle, put a tower on c8 and prepare ...c5 to free your army. Theory calls the war equal.',
    remember: [
      '4...Ba6 attacks c4 and forces the enemy to prop it up with 5.b3.',
      '5...Bb4+ 6.Bd2 Be7 leaves the White priest on a passive square.',
      '7...c6 and 8...d5 blunt the g2 priest; 12...Rc8 prepares ...c5.',
    ],
  },
  'queens-indian:1': {
    plan: 'With 9.Nbd2 the White Kingdom keeps more pieces on and aims for e4. You bring out ...Nbd7, castle, and strike with ...c5 before e4 lands. Your a6 priest keeps pressing c4, so if soldiers are traded in the heartland the enemy can be left with weak hanging pawns. White wants to open the heartland for its two priests.',
    remember: [
      '9...Nbd7 backs both ...c5 and, later, ...e5.',
      '10...O-O: the King is in the castle before any central break.',
      '11...c5 hits d4 before the enemy can play e4.',
    ],
  },
  'queens-indian:2': {
    plan: 'With 5.Qa4 the White Queen guards c4 but abandons d4. You strike with ...c5 and send your priest back to b7 to fight on the long diagonal road. After dxc5 bxc5 your soldier on c5 controls d4, and you develop easily with ...Be7 and castling. Later ...d5 or ...Qb6 can press the enemy queenside, while White targets your c5 soldier.',
    remember: [
      '5...c5 answers any Queen move that guards c4, because d4 loses its guard.',
      '6...Bb7 returns to the long diagonal road once White is committed.',
      '7...bxc5 recaptures towards the heartland, controlling d4.',
    ],
  },
  'queens-indian:3': {
    plan: 'After 5.Qc2 Bb7 6.Bg2 c5, the White Kingdom often sacrifices a soldier with 7.d5 to open the long diagonal road. You take it and keep your troops safe: the b7 priest guards the d5 rider, and quick development with ...Be7 and castling hides your King. The enemy has activity and plays Rd1 and Nc3 to win the soldier back. You aim to keep the extra soldier or return it at a good moment.',
    remember: [
      '5...Bb7 goes back to the long diagonal road once the Queen guards c4.',
      '6...c5 attacks d4, which the Queen on c2 no longer guards.',
      '7...exd5 and 8...Nxd5 accept the gambit soldier; then develop with 9...Be7.',
    ],
  },
  'queens-indian:4': {
    plan: 'In the Petrosian with 7.Qc2, the White Kingdom builds a big heartland with e4. You trade riders on c3, castle and at once hit the centre with ...c5, while the b7 priest presses on e4. White plays for a kingside attack or the d5 push. You want to force a decision in the heartland, for example ...cxd4 cxd4 and then pressure on d4 and e4 with ...Nc6 or ...Nd7 and ...Rc8.',
    remember: [
      '5...d5 blocks e4, then 6...Nxd5 keeps the b7 priest\'s road open.',
      '7...Nxc3 trades before White\'s e4 gains time on your rider.',
      '10...c5 is the key strike at the enemy heartland.',
    ],
  },
  'queens-indian:5': {
    plan: 'With 7.e3, the White Kingdom develops quietly and checks on b5 to provoke ...c6. You still get ...c5 in later, so the war looks like a solid Queen\'s Gambit with your priest on b7. You castle and bring out ...Nd7, then decide whether to take on d4. The enemy hopes to use a slight lead in development and play e4.',
    remember: [
      '7...Be7 brings the priest out before the King castles.',
      '8...c6 blocks the check; the c-soldier will still reach c5.',
      '9...c5 hits d4 now that the White priest has stepped back.',
    ],
  },
  'queens-indian:6': {
    plan: 'In the Kasparov Variation with 4.Nc3 Bb4, you double the enemy\'s c-pawns and plant a rider on e4. Your kingside soldiers (...h6, ...g5) are loose, so your King usually stays in the centre or castles long later. Fight on the light squares with ...d6, ...Nd7 and ...f5, and attack the weak c-pawns. The White Kingdom hopes its bishop pair will open the land with f3 or Bd3.',
    remember: [
      '4...Bb4 pins the rider like a Nimzo-Indian.',
      '7...g5 and 8...Ne4 break the pin and plant your rider on a strong square.',
      '9...Bxc3+ doubles the enemy\'s pawns, and 10...d6 keeps the e4 rider supported.',
    ],
  },
  'queens-indian:7': {
    plan: 'Against the quiet 4.e3, you develop calmly with ...Bb7, ...Be7 and castling, then stop e4 with ...d5. After ...c5 you get a mirror-image, equal war where both armies develop freely. Your plans include ...Nbd7, ...Rc8 and sometimes taking on d4 to leave White with hanging pawns or an isolated pawn. The enemy wants to aim its d3 priest at your King.',
    remember: [
      '4...Bb7 controls e4 from afar.',
      '7...d5 stops e4 the moment the enemy prepares it.',
      '8...c5 hits d4 and frees your army.',
    ],
  },
  'queens-indian:8': {
    plan: 'If the White Kingdom plays 3.Nc3, you pin the rider with ...Bb4 (the Nimzo-Indian). Against 4.e3, castle and play ...d5 and ...c5 to challenge the heartland. You are often happy to take on c3 and leave White with doubled c-pawns. The enemy hopes for e4 and an attack with its two priests. See the Nimzo-Indian opening for the full war plans.',
    remember: [
      '3...Bb4 pins the c3 rider so it cannot support e4.',
      '4...O-O keeps your foot soldiers flexible.',
      '5...d5 and 6...c5 attack the enemy heartland with both soldiers.',
    ],
  },
  'queens-indian:9': {
    plan: 'Against 4.Qc2 you castle and trade on c3 after a3, leaving the White Kingdom with the bishop pair but behind in development. Then ...b6 and ...Bb7 give a Queen\'s Indian-style camp where your priest and rider fight for e4. White hopes its two priests will tell later. You aim to open roads quickly with ...d5 or ...c5.',
    remember: [
      '4...O-O waits to see the enemy\'s plan.',
      '5...Bxc3+ strikes before your priest is forced to retreat.',
      '6...b6 clears the road for ...Bb7 to fight for e4.',
    ],
  },
}
