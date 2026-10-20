import type { OpeningSource } from '../types'

export const pirc: OpeningSource = {
  id: "pirc",
  name: "Pirc Defense",
  eco: "B07\u2013B09",
  side: "black",
  summary:
    "A flexible hypermodern defence to 1.e4. Black lets White take the centre, fianchettoes the bishop and counterattacks with ...e5 or ...c5 later.",
  ideas: [
    "Fianchetto on g7 and castle quickly.",
    "Strike back with ...e5 or ...c5 at the right moment.",
    "Against aggressive setups, ...c6 and ...b5 give queenside play.",
  ],
  lines: [
    {
      name: "Austrian Attack (4.f4)",
      pgn: `1. e4 d6 {The Pirc: a modest start.}
        2. d4 Nf6 3. Nc3 g6 {Prepare the fianchetto.}
        4. f4 {The Austrian Attack: a huge centre.}
        Bg7 5. Nf3 O-O 6. Bd3 Na6 {The knight heads for c7 to support ...b5.}
        7. O-O c5 8. d5 Nc7 9. a4 b6 {Black has queenside play.}`,
    },
    {
      name: "150 Attack (4.Be3)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Be3 Bg7 5. Qd2 c6 {Prepare ...b5.}
        6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 {Black castles queenside or keeps the king in the centre.}`,
    },
    {
      name: "Classical (4.Nf3 and 5.Be2)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Nf3 Bg7 5. Be2 O-O 6. O-O c6 7. a4 a5 {Stops a5.}
        8. h3 Na6 {The knight goes to b4 or c7.}`,
    },
    {
      name: "4.Bg5",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Bg5 Bg7 5. Qd2 h6 6. Bh4 g5 {Chase the bishop.}
        7. Bg3 Nh5 {Trade the bishop off.}`,
    },
    {
      name: "Fianchetto (4.g3)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. g3 Bg7 5. Bg2 O-O 6. Nge2 e5 {The classic break.}
        7. h3 c6 8. a4 Nbd7 {Solid.}`,
    },
    {
      name: "4.Bc4",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Bc4 Bg7 5. Qe2 c6 6. e5 dxe5 7. dxe5 Nd5 8. Bd2 O-O {Black is safe and well placed.}`,
    },
    {
      name: "3.Bd3",
      pgn: `1. e4 d6 2. d4 Nf6
        3. Bd3 g6 4. Nf3 Bg7 5. O-O O-O 6. c3 Nc6 {Prepare ...e5.}`,
    },
    {
      name: "3.f3 (King's Indian structure)",
      pgn: `1. e4 d6 2. d4 Nf6
        3. f3 g6 4. c4 Bg7 5. Nc3 O-O 6. Be3 e5 7. d5 Nh5 {A Sämisch King's Indian.}`,
    },
  ],
}
