import type { OpeningSource } from '../types'

export const english: OpeningSource = {
  id: 'english',
  name: 'English Opening',
  eco: 'A10–A39',
  side: 'white',
  summary:
    'A flexible flank opening. White controls d5 with the c-pawn and usually fianchettoes the king\'s bishop, playing a "Sicilian with an extra move" against 1...e5.',
  ideas: [
    'Control d5 with c4, Nc3 and the g2 bishop.',
    'Fianchetto with g3 and Bg2 to rake the long diagonal.',
    'Expand on the queenside with Rb1, b4 and b5.',
  ],
  lines: [
    {
      name: 'Reversed Sicilian: 4...d5',
      pgn: `1. c4 {The English. It controls d5 from the side.}
        e5 {A reversed Sicilian. White is a tempo up compared with a normal Sicilian.}
        2. Nc3 Nf6 3. Nf3 Nc6 {The Four Knights English.}
        4. g3 {Prepares the fianchetto that hits the d5 square and the long diagonal.}
        d5 5. cxd5 Nxd5 6. Bg2 {Puts pressure on the d5 knight.}
        Nb6 7. O-O Be7 8. d3 O-O 9. a3 {Prepares b4 for a queenside expansion.}`,
    },
    {
      name: 'Closed English: Rb1 and b4',
      pgn: `1. c4 e5 2. Nc3
        Nc6 3. g3 g6 {Black mirrors with a fianchetto. This is the Closed English.}
        4. Bg2 Bg7 5. d3 d6 6. Rb1 {Prepares b4-b5 to gain queenside space.}
        a5 7. a3 {Supports b4 anyway.}
        f5 8. b4 axb4 9. axb4 Nf6 {White has the open a-file and queenside play; Black plays on the kingside.}`,
    },
    {
      name: 'Symmetrical English',
      pgn: `1. c4
        c5 {The Symmetrical English.}
        2. Nf3 Nc6 3. Nc3 g6 4. g3 Bg7 5. Bg2 Nf6 6. O-O O-O 7. d4 {Break the symmetry in the centre.}
        cxd4 8. Nxd4 Nxd4 9. Qxd4 d6 10. Qd3 {The queen retreats. White has a small but lasting space advantage.}`,
    },
    {
      name: 'Mikenas Attack (2...e6 3.e4)',
      pgn: `1. c4 Nf6 2. Nc3
        e6 3. e4 {The Mikenas Attack: grab the centre at once.}
        d5 4. e5 {Kick the knight.}
        d4 5. exf6 dxc3 6. bxc3 Qxf6 7. d4 {White has a strong centre and the bishop pair.}`,
    },
    {
      name: "Against the King's Indian setup",
      pgn: `1. c4 Nf6 2. Nc3
        g6 3. e4 {White goes for a big centre.}
        d6 4. d4 Bg7 5. Be2 O-O 6. Bg5 {The Averbakh setup. Be2 keeps the knight out of g4, and Bg5 makes ...e5 awkward.}`,
    },
    {
      name: "Transposing to the Queen's Gambit",
      pgn: `1. c4
        e6 2. Nc3 d5 3. d4 {Transposes to the Queen's Gambit Declined.}
        Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 {The same plan as the Queen's Gambit course.}`,
    },
    {
      name: "Reversed Sicilian: 4...Bb4",
      pgn: `1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3
        Bb4 {Pin the knight and fight for d4.}
        5. Bg2 O-O 6. O-O e4 7. Ng5 {Attack the e4 pawn.}
        Bxc3 8. bxc3 Re8 9. f3 {Break up the centre. White's bishops will be strong.}`,
    },
    {
      name: "1...Nf6 2...c5 transposing",
      pgn: `1. c4 Nf6 2. Nc3
        c5 3. Nf3 Nc6 4. g3 g6 5. Bg2 Bg7 6. O-O O-O 7. d4 {The Symmetrical main line again.}`,
    },
    {
      name: "Caro-Kann setup (1...c6)",
      pgn: `1. c4
        c6 2. e4 {Take the centre.}
        d5 3. exd5 cxd5 4. d4 {Transposes to the Panov Attack against the Caro-Kann.}
        Nf6 5. Nc3 {Pressure on d5.}`,
    },
    {
      name: "Modern setup (1...g6)",
      pgn: `1. c4
        g6 2. Nc3 Bg7 3. g3 c5 4. Bg2 Nc6 5. Nf3 Nf6 6. O-O O-O 7. d4 {Again the Symmetrical main line.}`,
    },
    {
      name: "Reversed Sicilian: 2...Bb4",
      pgn: `1. c4 e5 2. Nc3
        Bb4 3. Nd5 {Attack the bishop and keep control of d5.}
        Be7 4. d4 d6 5. e4 {A big centre. White is better.}`,
    },
  ],
}
