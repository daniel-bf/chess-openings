import type { OpeningSource } from '../types'

export const slav: OpeningSource = {
  id: 'slav',
  name: 'Slav Defense',
  eco: 'D10–D19',
  side: 'black',
  summary:
    'A sturdy reply to the Queen\'s Gambit. Black defends d5 with the c-pawn, which keeps the light-squared bishop free to develop to f5 or g4 before ...e6.',
  ideas: [
    'Hold d5 with ...c6 and develop the c8 bishop outside the pawn chain.',
    'Take on c4 when White allows it and make White work to win it back.',
    'Meet Qb3 ideas with ...Qb6, and Nh4 ideas by keeping the bishop safe.',
  ],
  lines: [
    {
      name: 'Main line: 5.a4 Bf5',
      pgn: `1. d4 d5 {Claim the centre.}
        2. c4 c6 {The Slav. d5 stays protected and the c8 bishop stays free.}
        3. Nf3 Nf6 4. Nc3 dxc4 {Take the pawn now that White's knight blocks the c-pawn.}
        5. a4 {Stops ...b5.}
        Bf5 {The bishop comes out before ...e6.}
        6. e3 e6 7. Bxc4 Bb4 {Pins the knight and slows down e4.}
        8. O-O Nbd7 9. Qe2 O-O 10. e4 Bg6 {The bishop retreats but stays active. Black is solid.}
        11. Bd3 Bh5 {Pin the f3 knight to reduce pressure on e5 and d4.}`,
    },
    {
      name: 'Geller Gambit (5.e4)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4
        5. e4 {The Geller Gambit: White gives a pawn for a big centre.}
        b5 {Hold on to the extra pawn.}
        6. e5 Nd5 7. a4 e6 8. axb5 Nxc3 9. bxc3 cxb5
        10. Ng5 {White threatens Qh5.}
        Bb7 11. Qh5 g6 12. Qg4 Be7 {Black stays a pawn up and the attack is blocked.}`,
    },
    {
      name: 'Exchange Slav',
      pgn: `1. d4 d5 2. c4 c6
        3. cxd5 {The Exchange: a symmetrical structure.}
        cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 {Black copies and stays equal.}
        7. Nf3 e6 8. Bb5 Bb4 9. Ne5 Qa5 {Counter-pin on c3. Black holds everything.}`,
    },
    {
      name: '4.e3 Bf5 5.Nc3 e6 6.Nh4',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. e3 {A quieter move that protects c4.}
        Bf5 5. Nc3 e6 6. Nh4 {White goes after the bishop pair.}
        Bg6 7. Nxg6 hxg6 {The open h-file helps Black's rook.}
        8. Bd3 Nbd7 9. O-O Bd6 {Solid and comfortable.}`,
    },
    {
      name: '4.e3 Bf5 5.Bd3',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5
        5. Bd3 {White offers to trade the light-squared bishops.}
        Bxd3 6. Qxd3 e6 7. O-O Nbd7 8. Nc3 Bd6 {All Black's pieces are developed with no weaknesses.}`,
    },
    {
      name: '3.Nc3 Nf6 4.e3 Bf5 5.Qb3',
      pgn: `1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 Bf5
        5. Qb3 {Pressure on b7, which Black's bishop has stopped guarding.}
        Qb6 {Block the queen and offer a trade.}
        6. c5 Qxb3 7. axb3 Nbd7 8. b4 e6 {Black plans ...e5 or ...a6 and is completely fine.}`,
    },
    {
      name: "4.Qc2 line",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. Qc2 {The queen protects c4.}
        dxc4 5. Qxc4 Bf5 {Develop with tempo on the queen.}
        6. g3 e6 7. Bg2 Nbd7 8. O-O Be7 {Solid development. Black follows with ...O-O.}`,
    },
    {
      name: "3.e3 move order",
      pgn: `1. d4 d5 2. c4 c6
        3. e3 Nf6 4. Nc3 Bf5 {Same as the 3.Nc3 lines.}
        5. Nf3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 {The h-file helps Black.}`,
    },
    {
      name: "Main line: 6.Ne5",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5
        6. Ne5 {Win back c4 with the knight.}
        Nbd7 7. Nxc4 Qc7 8. g3 e5 {The key freeing break.}
        9. dxe5 Nxe5 10. Bf4 Nfd7 11. Bg2 g5 {Sharp: Black kicks the bishop off the diagonal.}`,
    },
    {
      name: "Main line: 9.Nh4",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7
        9. Nh4 {White goes for the bishop.}
        O-O 10. Nxf5 exf5 11. Qc2 g6 {Black is solid. The f5 pawn controls e4.}`,
    },
    {
      name: "5.e3 b5",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4
        5. e3 b5 {Keep the extra pawn.}
        6. a4 b4 7. Na2 e6 8. Bxc4 Be7 9. O-O O-O {Black is solid.}`,
    },
  ],
}
