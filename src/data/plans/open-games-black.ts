import type { Plans } from './types'

export const openGamesBlackPlans: Plans = {
  'open-games-black:0': {
    plan: "In the Berlin endgame White has a kingside pawn majority (four against three) and wants to push f4-f5 or use the e5 pawn to cramp you. You have the two bishops and a healthy queenside majority. Tuck the king on b7 or c8, play ...b6, ...c5 and ...Be6 or ...Bc6, and keep White's kingside pawns blocked with ...h6 and ...h5 ideas.",
    remember: [
      '4...Nxe4 takes the pawn; 5...Nd6 hits the bishop and covers the e-file.',
      '6...dxc6 recaptures away from the centre to free both bishops.',
      '10...h6 stops Ng5 and Bg5; 11...Kc8 and 12...b6 bring the king to safety on b7.',
    ],
  },
  'open-games-black:1': {
    plan: 'With 4.d3 White avoids the Berlin endgame and plays slowly. After ...d5 and exd5 Qxd5 you have a free, active position with the c5 bishop aimed at f2. Develop with ...Bg4 or ...Bf5, ...Rd8 and keep e5 well defended. White hopes for d4 or a slow build-up with Nbd2, Re1 and a kingside attack.',
    remember: [
      '4...Bc5 puts the bishop on its active diagonal before ...d6 or ...d5.',
      '6...d5 strikes in the centre while White is slow.',
      '7...Qxd5 attacks the b5 bishop; after 8.Bc4 retreat to 8...Qd6.',
    ],
  },
  'open-games-black:2': {
    plan: 'You are a pawn down but have a big lead in development and active pieces. Castle quickly, put a rook on e8 or d8 and aim at White\'s king with ...Qc7 (hitting h2), ...Bf5 and ...Nb7-c5 or ...Re8. White tries to finish development, keep the extra pawn and swap pieces.',
    remember: [
      '4...d5 blocks the bishop; 5...Na5 (not 5...Nxd5) avoids the Fried Liver attack on f7.',
      '8...h6 and 9...e4 chase the knight with gain of time.',
      '11...exd3 takes en passant; 12...Qc7 hits h2 before castling.',
    ],
  },
  'open-games-black:3': {
    plan: 'A slow positional game. Both sides manoeuvre: you keep e5 firm with ...d6, retreat the bishop to a7 where it still hits f2, and prepare ...Re8, ...Be6 or ...d5. White plays Nbd2-f1-g3, maybe d4 or a kingside build-up with Ng3 and Nh4. Look for the ...d5 break when your pieces are ready.',
    remember: [
      '4...Bc5 transposes into the Giuoco Pianissimo.',
      '7...a6 gives the bishop a retreat on a7 before White can hit it with b4 or d4.',
      '9...h6 rules out Ng5 and Bg5.',
    ],
  },
  'open-games-black:4': {
    plan: "Your knight on e4 and pawn on d5 hold the centre, while White's e5 pawn is supported by f3 and f4 ideas. You play ...Ne6 to challenge the d4 knight, castle and push ...c5 or ...f6 to open lines for your bishops. White wants f4-f5 to attack, or to blockade your doubled c-pawns.",
    remember: [
      '5...d5 counterattacks the c4 bishop instead of retreating the knight.',
      '7...Bd7 breaks the pin on c6.',
      '9...Bc5 hits the d4 knight; after 10.f3 the knight goes 10...Ng5 heading for e6.',
    ],
  },
  'open-games-black:5': {
    plan: 'White has a space-gaining pawn on e5 and pawns on c4 and b3, while you have doubled c-pawns but active pieces. You fianchetto with ...g6 and ...Bg7, castle (often short, sometimes long) and attack the e5 pawn with ...Bg7, ...f6 or ...d6. White tries to keep e5 safe with Bb2 and f4 and to play against your queenside pawns.',
    remember: [
      '5...bxc6 recaptures towards the centre to support ...d5.',
      '6...Qe7 pins the e5 pawn to White\'s king so it cannot take on f6.',
      "8...Ba6 pins the c4 pawn to White's queen, protecting the d5 knight.",
    ],
  },
  'open-games-black:6': {
    plan: "After the Metger unpin White has the two bishops but doubled c-pawns. Your knight reaches e6, where it hits g5 and eyes f4 and d4. Follow up with ...c5 or ...c6, ...Rd8 and ...h6 to keep the position closed and the bishops limited. White aims to open the centre with d4 and use the bishops.",
    remember: [
      '4...Bb4 copies White and pins the c3 knight.',
      '7...Bxc3 doubles White\'s c-pawns before unpinning.',
      '8...Qe7 unpins the f6 knight, then 9...Nd8 and 10...Ne6 hit the g5 bishop.',
    ],
  },
  'open-games-black:7': {
    plan: 'You have a strong pawn on d5 backed by c6, and quick development. You play ...h6 or ...Be7 against the pin, ...Re8 and ...Bd6, and later ...c5 or ...Rb8 to use the half-open b-file. White attacks the pinned knight and your queenside pawns with Qf3, Ne2 and Na4 or c4 ideas.',
    remember: [
      '5...Bb4 pins the c3 knight and threatens ...Nxe4.',
      '7...d5 attacks e4 a third time.',
      '8...O-O castles first, then 9...cxd5 and 10...c6 hold the centre.',
    ],
  },
  'open-games-black:8': {
    plan: "Your e4 knight is the key piece, now supported by ...f5 and the d5 pawn. After the e5 pawn is gone you have an open f-file and the bishop on f6 aimed at d4. Play ...c5 to attack d4, ...Nc6 and ...Be6. White tries to swap the e4 knight (Nxe4) and use the e-file against your e6 square.",
    remember: [
      '3...d5 hits back in the centre against the Vienna Gambit.',
      '4...Nxe4 puts the knight on a strong square; 5...Be7 develops quietly.',
      '7...f5 supports the knight; after exf6 recapture 8...Bxf6.',
    ],
  },
  'open-games-black:9': {
    plan: 'White regains the e5 pawn and has some pressure on f7, but your position is solid. After ...Nd4 you can trade off the b3 bishop, then play ...Ne6 or ...Bf6 and ...d6 to drive away the e5 knight. White hopes for Re1 or Nd5 to keep the initiative against your king.',
    remember: [
      '3...Nxe4 is the fork trick: 4.Nxe4 d5 wins the piece back.',
      '4...Nd6 blocks the Qxf7 mate threat and hits the bishop.',
      '7...O-O guards f7 with the rook; 8...Nd4 hits the b3 bishop.',
    ],
  },
  'open-games-black:10': {
    plan: 'You have given back material for quick development and active pieces. Keep the f4 pawn if you can (Bd6-c7, ...g5 ideas), pin the f3 knight with ...Bg4 and use the e-file with ...Re8 or ...Qe8. White wants to win back f4 with Nc4 or Qb3 and use the open f-file against f7.',
    remember: [
      '3...d5 gives back a pawn to open lines for your pieces.',
      '5...c6 and 6...Nxc6 gain time for development.',
      '7...Bd6 and 10...Bc7 keep the f4 pawn defended; 9...Bg4 pins the knight.',
    ],
  },
  'open-games-black:11': {
    plan: 'You have a fine pawn centre on d5 and e5 and easy development. Play ...Re8, ...Nbd7 or ...h6 and keep White\'s Bb3 shut out with ...dxe4 or ...d4 when it suits you. White plays slowly with Nc3, Re1 and Bg5 and hopes to pressure e5.',
    remember: [
      '2...Nf6 hits e4 straight away.',
      '3...c6 prepares ...d5 and blunts the bishop.',
      '5...Bd6 defends e5; then castle.',
    ],
  },
  'open-games-black:12': {
    plan: "Your knight on e4 is pinned but well supported, and your rook already uses the open h-file. Play ...Bf5 to support e4, ...Nf6 when it is safe and ...O-O-O so your king is out of the e-file. White tries to win the pinned knight with f3 or Nd2 and to castle long.",
    remember: [
      '4...Nxe4 takes the pawn; 5...Ne7 then 6...Ng6 challenges the e5 knight.',
      '7...hxg6 opens the h-file for your rook.',
      '8...Qe7 blocks the pin on e4; 9...d6 guards c7 and frees the c8 bishop.',
    ],
  },
  'open-games-black:13': {
    plan: 'White has castled long and wants to attack with Qg3, f3 and g4, but the e4 pawn is weak and pinned to the queen on e3. You keep pressure on e4 with ...Re8 and ...Bxc3, play ...d6 and ...Be6 or ...Ng4, and open lines towards White\'s king with ...b5 or ...d5.',
    remember: [
      '3...Nc6 develops with an attack on the queen.',
      '5...Bb4 pins the knight that defends e4.',
      '7...Re8 attacks the e4 pawn, which is pinned to the queen on e3.',
    ],
  },
}
