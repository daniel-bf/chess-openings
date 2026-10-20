import type { OpeningSource } from '../types'

export const kingsGambit: OpeningSource = {
  id: "kings-gambit",
  name: "King's Gambit",
  eco: "C30\u2013C39",
  side: "white",
  summary:
    "The romantic gambit: White gives the f-pawn to open the f-file and take the centre with d4. Sharp, attacking chess where both kings can come under fire.",
  ideas: [
    "Deflect the e5 pawn with f4 and build a big centre with d4.",
    "Use the open f-file and quick development to attack f7.",
    "Win back the f4 pawn with Bxf4 when possible.",
  ],
  lines: [
    {
      name: "Kieseritzky Gambit",
      pgn: `1. e4 e5
        2. f4 {The King's Gambit.}
        exf4 3. Nf3 {Stop ...Qh4+.}
        g5 4. h4 {Undermine the g5 pawn at once.}
        g4 5. Ne5 {The Kieseritzky.}
        Nf6 6. d4 d6 7. Nd3 Nxe4 8. Bxf4 Bg7 {Wild play, with chances for both sides.}`,
    },
    {
      name: "Modern Defence (3...d5)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        d5 4. exd5 Nf6 5. Bb5+ c6 6. dxc6 Nxc6 7. d4 Bd6 8. O-O O-O 9. Nbd2 {White wins back the f4 pawn soon.}`,
    },
    {
      name: "Fischer Defence (3...d6)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        d6 4. Bc4 {Aim at f7.}
        h6 5. d4 g5 6. O-O Bg7 7. c3 Nc6 8. g3 {Break up Black's kingside chain.}`,
    },
    {
      name: "Schallopp (3...Nf6)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        Nf6 4. e5 Nh5 5. d4 d6 6. Qe2 Be7 {White has a big centre; Black has the extra pawn.}`,
    },
    {
      name: "Cunningham (3...Be7)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        Be7 4. Bc4 {Stop ...Bh4+ ideas with quick development.}
        Nf6 5. e5 Ng4 6. d4 d6 {Sharp play.}`,
    },
    {
      name: "Classical Declined (2...Bc5)",
      pgn: `1. e4 e5 2. f4
        Bc5 {Declined: the bishop stops White from castling short.}
        3. Nf3 d6 4. Nc3 Nf6 5. Bc4 Nc6 6. d3 Bg4 7. Bb5 {Pin the knight first. Kicking the bishop with h3 can wait.}`,
    },
    {
      name: "Falkbeer Countergambit",
      pgn: `1. e4 e5 2. f4
        d5 3. exd5 e4 {The Falkbeer.}
        4. d3 Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 {Pin the knight and hit e4.}`,
    },
    {
      name: "2...Nc6 3...exf4",
      pgn: `1. e4 e5 2. f4
        Nc6 3. Nf3 exf4 4. d4 g5 5. d5 {Hit the knight before Black consolidates.}
        g4 6. dxc6 gxf3 7. Qxf3 {Both sides have lost material. White's pieces come out fast.}`,
    },
  ],
}
