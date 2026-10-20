import type { OpeningSource } from '../types'

export const vienna: OpeningSource = {
  id: "vienna",
  name: "Vienna Game",
  eco: "C25\u2013C29",
  side: "white",
  summary:
    "An attacking alternative to 2.Nf3. White develops the queen's knight and often plays f4, like a King's Gambit with an extra developing move.",
  ideas: [
    "2.Nc3 keeps the f-pawn free for f4.",
    "Attack e5 with f4 and open the f-file.",
    "Develop quickly and aim at Black's king.",
  ],
  lines: [
    {
      name: "Vienna Gambit: 3...d5",
      pgn: `1. e4 e5
        2. Nc3 {The Vienna Game.}
        Nf6 3. f4 {The Vienna Gambit.}
        d5 {The best reply: strike back in the centre.}
        4. fxe5 Nxe4 5. Nf3 Be7 6. d4 O-O 7. Bd3 f5 8. exf6 Bxf6 9. O-O {Open lines and active pieces for White.}`,
    },
    {
      name: "Vienna Gambit: 5...Nc6",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3
        Nc6 6. Bb5 {Pin the knight and pressure e5's defender.}
        a6 7. Bxc6+ bxc6 8. d3 {Kick the e4 knight.}
        Nxc3 9. bxc3 Be7 10. O-O {Open f-file and a solid centre.}`,
    },
    {
      name: "Vienna Gambit: 3...exf4",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4
        exf4 4. e5 {Kick the knight.}
        Ng8 5. Nf3 d6 6. d4 dxe5 7. Qe2 Be7 8. Qxe5 Nf6 9. Bxf4 {White has regained the pawn with good development.}`,
    },
    {
      name: "Vienna Gambit: 3...d6",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4
        d6 4. Nf3 Nc6 5. Bb5 Bd7 6. d3 exf4 7. Bxf4 {Comfortable development.}`,
    },
    {
      name: "2...Nc6 Hamppe-Allgaier",
      pgn: `1. e4 e5 2. Nc3
        Nc6 3. f4 exf4 4. Nf3 g5 5. h4 g4 6. Ng5 {The Hamppe-Allgaier: sacrifice the knight.}
        h6 7. Nxf7 Kxf7 8. d4 {Big centre and attack against the exposed king.}`,
    },
    {
      name: "2...Nc6 3...Bc5",
      pgn: `1. e4 e5 2. Nc3 Nc6 3. f4
        Bc5 4. Nf3 d6 5. Na4 {Trade off the strong bishop.}
        Bb6 6. Nxb6 axb6 7. d3 {White has the bishop pair.}`,
    },
    {
      name: "2...Bc5",
      pgn: `1. e4 e5 2. Nc3
        Bc5 3. Nf3 d6 4. d4 exd4 5. Nxd4 Nf6 6. Be2 O-O 7. O-O {A comfortable space advantage.}`,
    },
    {
      name: "2...d6",
      pgn: `1. e4 e5 2. Nc3
        d6 3. f4 Nf6 4. Nf3 exf4 5. d4 Be7 6. Bxf4 O-O 7. Bd3 {A strong centre.}`,
    },
  ],
}
