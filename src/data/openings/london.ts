import type { OpeningSource } from '../types'

export const london: OpeningSource = {
  id: 'london',
  name: 'London System',
  eco: 'D02, A46',
  side: 'white',
  summary:
    'A "system" opening: White plays the same setup against almost anything, with d4, Bf4, e3, Nf3, c3 and Bd3. It is easy to learn and gives a sturdy position with kingside attacking chances.',
  ideas: [
    'Develop the dark-squared bishop to f4 before e3.',
    'Build the pyramid d4, e3, c3, then Bd3, Nbd2 and castle.',
    'Use the e5 square for a knight and attack the king with Qf3, h4 or g4.',
  ],
  lines: [
    {
      name: 'Main line: ...e6, ...c5, ...Bd6',
      pgn: `1. d4 {Claims the centre.}
        d5 2. Bf4 {The London: the bishop comes out before e3 locks it in.}
        Nf6 3. e3 {Supports d4 and opens the f1 bishop.}
        e6 4. Nf3 c5 {Black attacks d4 from the side.}
        5. c3 {The pyramid. d4 is now rock solid.}
        Nc6 6. Nbd2 Bd6 {Black challenges the f4 bishop.}
        7. Bg3 {Keep the bishop. If ...Bxg3, hxg3 opens the h-file for the rook.}
        O-O 8. Bd3 b6 9. Ne5 {The classic London outpost. Qf3 and a kingside attack can follow.}`,
    },
    {
      name: '2...c5 with ...Qb6',
      pgn: `1. d4 d5 2. Bf4
        c5 {Black hits d4 at once.}
        3. e3 Nc6 4. c3 Qb6 {The queen attacks b2.}
        5. Qb3 {Offer the queen trade. After ...Qxb3 axb3 the a-file opens for White's rook.}
        c4 {Black avoids the trade and gains space.}
        6. Qc2 Bf5 {It looks natural to hit the queen, but it is a mistake.}
        7. Qxf5 {Take it! The bishop was unprotected, and d5 falls next.}
        Qxb2 8. Qxd5 Nf6 9. Qxc4 {White is a piece up. After ...Qc1+ the king steps to e2 and stays safe enough.}`,
    },
    {
      name: "Against the King's Indian setup",
      pgn: `1. d4
        Nf6 2. Bf4 {The London works against 1...Nf6 too.}
        g6 3. e3 Bg7 4. Nf3 O-O 5. Be2 d6 6. h3 {Keeps a square for the bishop on h2 and stops ...Nh5 or ...Bg4 ideas.}
        c5 7. c3 Nc6 8. O-O {A solid setup. White waits for ...e5 and keeps the centre steady.}`,
    },
    {
      name: '1...Nf6 2...e6 transposing',
      pgn: `1. d4 Nf6 2. Bf4
        e6 3. e3 c5 4. c3 Nc6 5. Nd2 {This move order keeps Ngf3 flexible.}
        d5 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 {The same structure as the main line.}`,
    },
    {
      name: '2...Bf5 mirror',
      pgn: `1. d4 d5 2. Bf4
        Bf5 {Black copies White's bishop move.}
        3. e3 e6 4. Nf3 Nf6 5. Bd3 {Offer the trade of light-squared bishops.}
        Bxd3 6. Qxd3 c5 7. c3 Nc6 8. Nbd2 Bd6 9. Bg3 {Same plan: if ...Bxg3, hxg3 gives the rook the h-file.}`,
    },
    {
      name: '3...Bf5 with 4.c4',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        Bf5 {Black develops actively.}
        4. c4 {When the c8 bishop leaves, b7 is weak: c4 and Qb3 hit it.}
        e6 5. Nc3 c6 6. Qb3 {Pressure on b7.}
        Qb6 7. c5 {Gain time on the queen.}
        Qxb3 8. axb3 {The a-file opens for the rook and the b3 pawn supports b4-b5.}`,
    },
    {
      name: "3...c5 4.c3 transposing",
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        c5 4. c3 Nc6 5. Nd2 e6 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 {The main London structure again.}`,
    },
    {
      name: "Against the Dutch (1...f5)",
      pgn: `1. d4
        f5 2. Bf4 Nf6 3. e3 e6 4. Nf3 b6 5. h3 {Keep a square for the bishop on h2.}
        Bb7 6. Nbd2 Be7 7. c3 O-O 8. Bd3 {White's pieces point at Black's kingside.}`,
    },
    {
      name: "2...e6 with ...Bd6",
      pgn: `1. d4 d5 2. Bf4
        e6 3. e3 Bd6 4. Bg3 {Keep the bishop. If ...Bxg3, hxg3 opens the h-file.}
        Nf6 5. Nd2 c5 6. c3 Nc6 7. Bd3 O-O 8. Ngf3 {The standard setup.}`,
    },
    {
      name: "3...c6 4.Nf3 Bf5",
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        c6 4. Nf3 Bf5 5. Bd3 {Offer the bishop trade.}
        Bxd3 6. Qxd3 e6 7. O-O Nbd7 8. Nbd2 Be7 {Solid. White can play c4 or e4 next.}`,
    },
    {
      name: "1...Nf6 2...d6 setup",
      pgn: `1. d4 Nf6 2. Bf4
        d6 3. e3 g6 4. Nf3 Bg7 5. Be2 O-O 6. h3 {Same plan as against the King's Indian setup.}`,
    },
  ],
}
