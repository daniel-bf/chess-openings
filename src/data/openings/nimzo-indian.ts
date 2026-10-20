import type { OpeningSource } from '../types'

export const nimzoIndian: OpeningSource = {
  id: "nimzo-indian",
  name: "Nimzo-Indian Defense",
  eco: "E20\u2013E59",
  side: "black",
  summary:
    "One of Black's most respected defences to 1.d4. Black pins the c3 knight with ...Bb4, fights for e4 and is often happy to give up the bishop pair to double White's pawns.",
  ideas: [
    "Pin the c3 knight to stop e4.",
    "Trade on c3 when it doubles White's pawns, then attack them.",
    "Against 3.Nf3, the Queen's Indian with ...b6 and ...Bb7 fights for e4 the same way.",
  ],
  lines: [
    {
      name: "Rubinstein (4.e3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3
        Bb4 {The Nimzo-Indian: pin the knight that controls e4.}
        4. e3 {The Rubinstein: solid development.}
        O-O 5. Bd3 d5 6. Nf3 c5 {Hit the centre with both pawns.}
        7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qc7 {Black prepares ...e5 to fight the centre.}`,
    },
    {
      name: "Classical (4.Qc2)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qc2 {The Classical: White recaptures on c3 with the queen to avoid doubled pawns.}
        O-O 5. a3 Bxc3+ 6. Qxc3 b6 {Fight for e4 with the bishop from b7.}
        7. Bg5 Bb7 8. f3 h6 9. Bh4 d5 {Strike the centre while White's king is still in the middle.}`,
    },
    {
      name: "S\u00e4misch (4.a3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. a3 Bxc3+ 5. bxc3 {White gets the bishop pair and a big centre, but doubled c-pawns.}
        c5 6. e3 Nc6 7. Bd3 O-O 8. Ne2 b6 {The plan: ...Ba6 to attack the weak c4 pawn.}
        9. e4 Ne8 {Avoids the pin with Bg5 and prepares ...f5.}`,
    },
    {
      name: "Leningrad (4.Bg5)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Bg5 h6 5. Bh4 c5 6. d5 d6 7. e3 Bxc3+ 8. bxc3 e5 {Lock the centre on dark squares. White's bishop is shut out.}`,
    },
    {
      name: "Kmoch (4.f3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. f3 {White prepares e4.}
        d5 5. a3 Be7 6. e4 dxe4 7. fxe4 e5 {Hit the big centre at once.}
        8. d5 Bc5 {The bishop eyes the g1-a7 diagonal and the weak dark squares.}`,
    },
    {
      name: "Romanishin (4.Nf3 and 5.g3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Nf3 c5 5. g3 cxd4 6. Nxd4 O-O 7. Bg2 d5 {Black is active and equal.}
        8. cxd5 Nxd5 9. Qb3 Qb6 {Offer the queen trade.}`,
    },
    {
      name: "Spielmann (4.Qb3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 {Attack the c3 and f2 squares.}
        7. Bd2 Nxd2 8. Nxd2 O-O {Black has the bishop pair and quick development.}`,
    },
    {
      name: "Queen's Indian (3.Nf3 b6)",
      pgn: `1. d4 Nf6 2. c4 e6
        3. Nf3 {Avoids the Nimzo pin.}
        b6 {The Queen's Indian: the bishop fights for e4 from b7 or a6.}
        4. g3 Ba6 {Attack c4.}
        5. b3 Bb4+ 6. Bd2 Be7 {Lure the bishop to d2, where it blocks the queen.}
        7. Bg2 c6 8. Bc3 d5 9. Ne5 Nfd7 {Challenge the strong knight.}`,
    },
  ],
}
