import type { OpeningSource } from '../types'

export const dutch: OpeningSource = {
  id: "dutch",
  name: "Dutch Defense (Leningrad)",
  eco: "A80\u2013A89",
  side: "black",
  summary:
    "An ambitious reply to 1.d4. Black grabs e4 with the f-pawn and, in the Leningrad, fianchettoes the bishop to g7 for a King's Indian style game with extra kingside space.",
  ideas: [
    "Control e4 with ...f5 and ...Nf6.",
    "Fianchetto with ...g6 and ...Bg7, castle, then ...d6 and ...Qe8.",
    "Break with ...e5 and attack on the kingside with ...Qf7 or ...Qh5.",
  ],
  lines: [
    {
      name: "Leningrad: main line (7...Qe8 8.d5)",
      pgn: `1. d4 f5 {The Dutch: control e4 from the side.}
        2. g3 Nf6 3. Bg2 g6 {The Leningrad: fianchetto the bishop.}
        4. Nf3 Bg7 5. O-O O-O 6. c4 d6 {Prepare ...e5.}
        7. Nc3 Qe8 {The queen supports ...e5 and can swing to f7 or h5.}
        8. d5 a5 {Gives the knight c5 via a6.}
        9. Be3 Na6 {The knight heads for c5.}`,
    },
    {
      name: "Leningrad: 8.b3",
      pgn: `1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8
        8. b3 Na6 9. Ba3 c6 {Prepares ...Nc7 and ...e5.}
        10. Qd3 Bd7 {Solid. Black still aims for ...e5.}`,
    },
    {
      name: "2.c4 move order",
      pgn: `1. d4 f5
        2. c4 Nf6 3. g3 g6 4. Bg2 Bg7 5. Nf3 O-O 6. O-O d6 {The main Leningrad position.}`,
    },
    {
      name: "2.Nf3 with 6.b3",
      pgn: `1. d4 f5
        2. Nf3 Nf6 3. g3 g6 4. Bg2 Bg7 5. O-O O-O 6. b3 d6 7. Bb2 Qe8 {Same plan: ...e5 next.}`,
    },
    {
      name: "Staunton Gambit (2.e4)",
      pgn: `1. d4 f5
        2. e4 {The Staunton Gambit.}
        fxe4 3. Nc3 Nf6 4. Bg5 g6 {Hold the pawn with the fianchetto setup.}
        5. f3 exf3 6. Nxf3 Bg7 7. Bd3 O-O 8. O-O d6 {Black is a pawn up and safe.}`,
    },
    {
      name: "Hopton Attack (2.Bg5)",
      pgn: `1. d4 f5
        2. Bg5 h6 3. Bh4 g5 {Chase the bishop.}
        4. e3 Nf6 5. Bg3 d6 {Black has space; the kingside is a bit loose.}`,
    },
    {
      name: "2.Nc3 and 3.Bg5",
      pgn: `1. d4 f5
        2. Nc3 Nf6 3. Bg5 d5 {Control e4.}
        4. Bxf6 exf6 5. e3 c6 6. Bd3 g6 {A solid wall of pawns.}`,
    },
    {
      name: "London setup (2.Bf4)",
      pgn: `1. d4 f5
        2. Bf4 Nf6 3. e3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O d6 {Black prepares ...Nc6 and ...e5.}`,
    },
  ],
}
