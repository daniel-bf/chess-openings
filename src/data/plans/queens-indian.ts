import type { Plans } from './types'

export const queensIndianPlans: Plans = {
  'queens-indian:0': {
    plan: 'In the 4.g3 Ba6 main line, your check on b4 lures White\'s bishop to d2, and after it reaches c3 you build a solid centre with ...c6 and ...d5. White\'s g2 bishop then bites on granite. White tries to open the centre with e4 after Ne5 and Nd2. You castle, put a rook on c8 and prepare ...c5 to free your game. Theory rates the position as equal.',
    remember: [
      '4...Ba6 attacks c4 and forces White to defend it with 5.b3.',
      '5...Bb4+ 6.Bd2 Be7 puts White\'s bishop on a passive square.',
      '7...c6 and 8...d5 blunt the g2 bishop; 12...Rc8 prepares ...c5.',
    ],
  },
  'queens-indian:1': {
    plan: 'With 9.Nbd2 White keeps more pieces on and aims for e4. You develop with ...Nbd7, castle, and strike with ...c5 before White gets e4 in. Your a6 bishop keeps pressure on c4, so if pawns are exchanged in the centre White can be left with weak hanging pawns. White wants to open the centre for the two bishops.',
    remember: [
      '9...Nbd7 supports both ...c5 and ...e5 later.',
      '10...O-O comes before any central break.',
      '11...c5 hits d4 before White can play e4.',
    ],
  },
  'queens-indian:2': {
    plan: 'With 5.Qa4 White defends c4 but takes the queen away from d4. You strike with ...c5 and send the bishop back to b7 to fight on the long diagonal. After dxc5 bxc5 your pawn on c5 controls d4, and you develop easily with ...Be7 and castling. Later ...d5 or ...Qb6 can bring pressure on White\'s queenside, while White targets your c5 pawn.',
    remember: [
      '5...c5 is the answer to any queen move that defends c4, because d4 loses its guard.',
      '6...Bb7 returns to the long diagonal once White is committed.',
      '7...bxc5 recaptures towards the centre, controlling d4.',
    ],
  },
  'queens-indian:3': {
    plan: 'After 5.Qc2 Bb7 6.Bg2 c5, White often gives a pawn with 7.d5 to open the long diagonal. You take it and keep your pieces safe: the b7 bishop protects the d5 knight, and quick development with ...Be7 and castling gets your king safe. White has activity and plays Rd1 and Nc3 to win back the pawn. You aim to keep the extra pawn or return it at a good moment.',
    remember: [
      '5...Bb7 goes back to the long diagonal once c4 is defended by the queen.',
      '6...c5 attacks d4, which the queen on c2 no longer guards.',
      '7...exd5 and 8...Nxd5 accept the gambit; then develop with 9...Be7.',
    ],
  },
  'queens-indian:4': {
    plan: 'In the Petrosian with 7.Qc2, White builds a big pawn centre with e4. You swap knights on c3, castle and immediately hit the centre with ...c5, supported by the b7 bishop pressing on e4. White plays for a kingside attack or the d5 push. You want to force a decision in the centre, for example ...cxd4 cxd4 and then pressure on d4 and e4 with ...Nc6 or ...Nd7 and ...Rc8.',
    remember: [
      '5...d5 blocks e4, then 6...Nxd5 keeps the b7 bishop\'s diagonal open.',
      '7...Nxc3 swaps before White\'s e4 gains time on the knight.',
      '10...c5 is the key strike at White\'s centre.',
    ],
  },
  'queens-indian:5': {
    plan: 'With 7.e3, White develops quietly and checks on b5 to provoke ...c6. You still get ...c5 in later, so the position resembles a solid Queen\'s Gambit with your bishop on b7. You castle and develop with ...Nd7, then decide whether to take on d4. White hopes to use the slight lead in development and play e4.',
    remember: [
      '7...Be7 develops before castling.',
      '8...c6 blocks the check; the c-pawn will still go to c5.',
      '9...c5 hits d4 now that the bishop has retreated.',
    ],
  },
  'queens-indian:6': {
    plan: 'In the Kasparov Variation with 4.Nc3 Bb4, you double White\'s c-pawns and plant a knight on e4. Your kingside pawns (...h6, ...g5) are loose, so you usually keep your king in the centre or castle long later. Play on the light squares with ...d6, ...Nd7 and ...f5, and attack the weak c-pawns. White hopes to use the bishop pair and open the position with f3 or Bd3.',
    remember: [
      '4...Bb4 pins the knight like a Nimzo-Indian.',
      '7...g5 and 8...Ne4 break the pin and plant the knight on a strong square.',
      '9...Bxc3+ doubles White\'s pawns, and 10...d6 keeps the e4 knight supported.',
    ],
  },
  'queens-indian:7': {
    plan: 'Against the quiet 4.e3, you develop calmly with ...Bb7, ...Be7 and castling, then stop e4 with ...d5. After ...c5 you get a symmetrical, equal position where both sides develop freely. Your plans include ...Nbd7, ...Rc8 and sometimes taking on d4 to give White hanging pawns or an isolated pawn. White wants to use the d3 bishop against your king.',
    remember: [
      '4...Bb7 controls e4 from a distance.',
      '7...d5 stops e4 the moment White prepares it.',
      '8...c5 hits d4 and frees your game.',
    ],
  },
  'queens-indian:8': {
    plan: 'If White plays 3.Nc3, you pin the knight with ...Bb4 (the Nimzo-Indian). Against 4.e3, castle and play ...d5 and ...c5 to challenge the centre. You are often happy to take on c3 to give White doubled c-pawns. White hopes for e4 and an attack with the two bishops. See the Nimzo-Indian opening for the full plans.',
    remember: [
      '3...Bb4 pins the c3 knight so it cannot support e4.',
      '4...O-O keeps your pawn moves flexible.',
      '5...d5 and 6...c5 attack White\'s centre with both pawns.',
    ],
  },
  'queens-indian:9': {
    plan: 'Against 4.Qc2 you castle and swap on c3 after a3, leaving White with the bishop pair but behind in development. Then ...b6 and ...Bb7 give a Queen\'s Indian-style set-up where your bishop and knight fight for e4. White hopes the two bishops will tell later. You aim to open lines quickly with ...d5 or ...c5.',
    remember: [
      '4...O-O waits to see White\'s plan.',
      '5...Bxc3+ takes before you are forced to retreat.',
      '6...b6 prepares ...Bb7 to fight for e4.',
    ],
  },
}
