import type { OpeningSource } from '../types'

export const catalan: OpeningSource = {
  id: "catalan",
  name: "Catalan Opening",
  eco: "E00\u2013E09",
  side: "white",
  summary:
    "A Queen's Gambit with a kingside fianchetto. The g2 bishop puts long-term pressure on the long diagonal and Black's queenside, and White often happily gives the c4 pawn for a while.",
  ideas: [
    "Fianchetto with g3 and Bg2 to rake the long diagonal toward b7 and a8.",
    "If Black takes on c4, win it back with Qa4 or Qc2 and Qxc4.",
    "Play quietly and squeeze: Black's c8 bishop is often the problem piece.",
  ],
  lines: [
    {
      name: "Open Catalan: 5...Be7",
      pgn: `1. d4 Nf6 2. c4 e6
        3. g3 {The Catalan: the bishop will go to g2.}
        d5 4. Bg2 dxc4 {The Open Catalan: Black takes the pawn.}
        5. Nf3 Be7 6. O-O O-O 7. Qc2 {Win the pawn back.}
        a6 8. a4 {Stop ...b5.}
        Bd7 9. Qxc4 Bc6 10. Bg5 {White keeps a pleasant edge.}`,
    },
    {
      name: "Open Catalan: 5...c5",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        c5 6. O-O Nc6 7. Qa4 {Pin the knight and win c4 back.}
        Bd7 8. Qxc4 b5 9. Qd3 c4 10. Qc2 {White's pieces stay active.}`,
    },
    {
      name: "Open Catalan: 5...Nc6",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        Nc6 6. Qa4 Bb4+ 7. Bd2 Nd5 8. Bxb4 Ndxb4 9. O-O {White wins back c4 with a good game.}`,
    },
    {
      name: "Closed Catalan",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2
        Be7 {The Closed Catalan.}
        5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2 b6 9. e4 {Take the centre.}
        Bb7 {White has more space.}`,
    },
    {
      name: "4...Bb4+",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2
        Bb4+ 5. Bd2 Be7 6. Nf3 O-O 7. O-O c6 8. Qc2 b6 {Solid. White keeps the long diagonal pressure.}`,
    },
    {
      name: "3...Bb4+",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        Bb4+ 4. Bd2 Be7 5. Bg2 d5 6. Nf3 O-O 7. O-O {Same position as the 4...Bb4+ line.}`,
    },
    {
      name: "Benoni setup (3...c5)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        c5 4. d5 {Gain space.}
        exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O 9. O-O {A Fianchetto Benoni, good for White.}`,
    },
    {
      name: "King's Indian setup (2...g6)",
      pgn: `1. d4 Nf6 2. c4
        g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nbd7 7. O-O e5 8. e4 {The Fianchetto King's Indian.}`,
    },
  ],
}
