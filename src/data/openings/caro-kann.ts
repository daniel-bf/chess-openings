import type { OpeningSource } from '../types'

export const caroKann: OpeningSource = {
  id: 'caro-kann',
  name: 'Caro-Kann Defense',
  eco: 'B10–B19',
  side: 'black',
  summary:
    'A rock-solid reply to 1.e4. Black prepares ...d5 with the c-pawn, so the light-squared bishop can still come out to f5 or g4 before ...e6.',
  ideas: [
    'Develop the light-squared bishop outside the pawn chain before ...e6.',
    'Aim for a sound pawn structure and a good endgame.',
    'Counter with ...c5 against the Advance Variation.',
  ],
  lines: [
    {
      name: 'Classical: 4...Bf5',
      pgn: `1. e4 c6 {The Caro-Kann. It prepares ...d5 and keeps the c8 bishop's diagonal open.}
        2. d4 d5 {Challenges e4.}
        3. Nc3 dxe4 4. Nxe4 Bf5 {The Classical: develop the bishop with tempo on the knight.}
        5. Ng3 Bg6 6. h4 {White threatens h5 to trap the bishop.}
        h6 {Gives the bishop h7 as a retreat.}
        7. Nf3 Nd7 {Stops Ne5 hitting g6.}
        8. h5 Bh7 9. Bd3 Bxd3 {Trade the bishop off, Black's main idea of this line.}
        10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7 {Black is solid and will castle short or keep the king central.}`,
    },
    {
      name: 'Advance: Short system (4.Nf3)',
      pgn: `1. e4 c6 2. d4 d5
        3. e5 {The Advance: White grabs space.}
        Bf5 {Develop the bishop before ...e6 locks it in.}
        4. Nf3 e6 5. Be2 c5 {The usual break against the d4 base.}
        6. Be3 cxd4 7. Nxd4 Ne7 {The knight heads for c6 or g6, hitting d4 or e5.}
        8. O-O Nbc6 {Black targets e5 and d4 with easy development.}`,
    },
    {
      name: 'Advance: 4.Bd3',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5
        4. Bd3 {White offers to trade the bishops.}
        Bxd3 {Take: Black is happy to swap the bishop that the French player usually struggles with.}
        5. Qxd3 e6 6. Nf3 Qb6 {Pressure on d4 and b2.}
        7. O-O c5 {A good French structure without the bad bishop.}`,
    },
    {
      name: 'Exchange Variation',
      pgn: `1. e4 c6 2. d4 d5
        3. exd5 {The Exchange.}
        cxd5 4. Bd3 Nc6 5. c3 Nf6 6. Bf4 Bg4 {Develop the bishop before ...e6.}
        7. Qb3 Qd7 {Defends b7 and keeps the queens on.}
        8. Nd2 e6 9. Ngf3 Bd6 10. Bxd6 Qxd6 {Equal. Black's plan is a minority attack with ...b5-b4.}`,
    },
    {
      name: 'Panov-Botvinnik Attack',
      pgn: `1. e4 c6 2. d4 d5 3. exd5 cxd5
        4. c4 {The Panov: White accepts an isolated d-pawn for active piece play.}
        Nf6 5. Nc3 e6 6. Nf3 Be7 7. cxd5 Nxd5 {Blockade d5 with the knight.}
        8. Bd3 Nc6 9. O-O O-O 10. Re1 Bf6 {Black targets the isolated d4 pawn.}`,
    },
    {
      name: 'Two Knights (2.Nc3 d5 3.Nf3)',
      pgn: `1. e4 c6
        2. Nc3 d5 3. Nf3 {The Two Knights Variation.}
        Bg4 {Pin the knight before White plays d4.}
        4. h3 Bxf3 {Trade at once to keep a sound structure.}
        5. Qxf3 e6 6. d3 Nf6 7. Be2 Nbd7 8. O-O Bd6 {A solid setup. White has the bishop pair but no targets.}`,
    },
    {
      name: "Classical: 6.Nf3 move order",
      pgn: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6
        6. Nf3 Nd7 {Stops Ne5.}
        7. h4 h6 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 {The same position as the main line.}`,
    },
    {
      name: "Classical: 5.Nc5",
      pgn: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5
        5. Nc5 {The knight attacks b7.}
        b6 6. Nb3 e6 7. Nf3 Nd7 8. Bd3 Bxd3 9. Qxd3 Ngf6 {A solid Classical setup.}`,
    },
    {
      name: "Fantasy Variation (3.f3)",
      pgn: `1. e4 c6 2. d4 d5
        3. f3 {The Fantasy: White supports e4 with a pawn.}
        e6 4. Nc3 Bb4 {Pin the knight and pressure e4.}
        5. Bf4 Nf6 6. e5 Nfd7 7. a3 Bxc3+ 8. bxc3 c5 {A French-like position where Black hits the centre.}
        9. Nh3 Nc6 {Black pressures d4.}`,
    },
    {
      name: "Accelerated Panov (2.c4)",
      pgn: `1. e4 c6
        2. c4 d5 3. exd5 cxd5 4. cxd5 Nf6 {Win the pawn back with the knight.}
        5. Nc3 Nxd5 6. Nf3 Nc6 7. Bb5 e6 8. O-O Be7 9. d4 O-O {An isolated pawn structure where Black is solid.}`,
    },
  ],
}
