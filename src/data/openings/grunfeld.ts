import type { OpeningSource } from '../types'

export const grunfeld: OpeningSource = {
  id: "grunfeld",
  name: "Gr\u00fcnfeld Defense",
  eco: "D70\u2013D99",
  side: "black",
  summary:
    "A dynamic defence where Black lets White build a big centre with e4, then attacks it with the g7 bishop, ...c5 and piece pressure on d4.",
  ideas: [
    "Trade the d5 pawn for White's c-pawn and let White build a centre.",
    "Attack d4 with the g7 bishop, ...c5 and ...Nc6.",
    "Look for ...Qa5 or ...Bg4 to add pressure.",
  ],
  lines: [
    {
      name: "Exchange: Modern (8.Rb1)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3
        d5 {The Grünfeld: strike the centre at once.}
        4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 {The bishop aims at c3 and d4.}
        7. Nf3 c5 {Hit d4 again.}
        8. Rb1 O-O 9. Be2 cxd4 10. cxd4 Qa5+ {Trade queens or win a pawn.}
        11. Bd2 Qxa2 12. O-O Bg4 {Black is a pawn up; White has active pieces.}`,
    },
    {
      name: "Exchange: 7.Bc4",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7
        7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Bg4 {Pin and provoke f3.}
        11. f3 Na5 {Hit the c4 bishop.}
        12. Bd3 cxd4 13. cxd4 Be6 {Black has the d5 square and pressure on d4.}`,
    },
    {
      name: "Russian System (5.Qb3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 {The Hungarian: prepare ...b5.}
        8. Be2 b5 9. Qb3 c5 {Strike the centre.}`,
    },
    {
      name: "4.Bf4",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Bf4 Bg7 5. e3 c5 {The thematic gambit.}
        6. dxc5 Qa5 7. Rc1 dxc4 8. Bxc4 O-O 9. Nf3 Qxc5 10. Bb3 Nc6 {Black has easy development.}`,
    },
    {
      name: "4.Bg5",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Bg5 Ne4 {Hit the bishop and the c3 knight.}
        5. Bh4 Nxc3 6. bxc3 dxc4 7. e3 Be6 {Hold on to the c4 pawn for now.}`,
    },
    {
      name: "Quiet: 4.Nf3 and 5.e3",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Nf3 Bg7 5. e3 O-O 6. Be2 c5 7. O-O cxd4 8. exd4 Nc6 {Pressure on the isolated d4 pawn.}`,
    },
    {
      name: "Fianchetto (3.g3)",
      pgn: `1. d4 Nf6 2. c4 g6
        3. g3 Bg7 4. Bg2 d5 5. cxd5 Nxd5 6. e4 Nb6 7. Ne2 c5 {Hit d4.}
        8. d5 e6 9. O-O O-O {Black breaks open the centre with ...exd5 next.}`,
    },
    {
      name: "3.f3",
      pgn: `1. d4 Nf6 2. c4 g6
        3. f3 d5 4. cxd5 Nxd5 5. e4 Nb6 6. Nc3 Bg7 7. Be3 O-O 8. Qd2 Nc6 9. O-O-O f5 {Attack e4.}`,
    },
  ],
}
