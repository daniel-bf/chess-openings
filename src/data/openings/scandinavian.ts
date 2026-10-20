import type { OpeningSource } from '../types'

export const scandinavian: OpeningSource = {
  id: "scandinavian",
  name: "Scandinavian Defense",
  eco: "B01",
  side: "black",
  summary:
    "Black hits e4 on move one and recaptures with the queen. The queen gets chased a little, but Black gets a clear, solid structure that is easy to learn.",
  ideas: [
    "After ...Qxd5 and Nc3, park the queen on a5 where it pins and stays safe.",
    "Develop the c8 bishop to f5 or g4 before ...e6.",
    "Build a solid ...c6 and ...e6 shell, like a Caro-Kann with active pieces.",
  ],
  lines: [
    {
      name: "Main line: 3.Nc3 Qa5 4.d4",
      pgn: `1. e4 d5 {The Scandinavian: challenge e4 at once.}
        2. exd5 Qxd5 {Recapture with the queen.}
        3. Nc3 {White gains time on the queen.}
        Qa5 {The safest square. The queen pins the c3 knight along the diagonal.}
        4. d4 Nf6 5. Nf3 Bf5 {Develop the bishop before ...e6 shuts it in.}
        6. Bc4 e6 7. Bd2 c6 {A solid shell. The queen now has a safe retreat on c7 or b6.}
        8. Qe2 Bb4 {Pin the knight again.}
        9. O-O-O Nbd7 10. a3 Bxc3 11. Bxc3 Qc7 {Black is solid and will castle short.}`,
    },
    {
      name: "Main line: 6.Bd2",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5
        6. Bd2 {White unpins first.}
        c6 7. Bc4 e6 {The same setup as the main line.}`,
    },
    {
      name: "4.Nf3 and 5.Bc4",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5
        4. Nf3 Nf6 5. Bc4 c6 {Gives the queen a retreat and controls d5 and b5.}
        6. d3 Bg4 {Pin the knight.}
        7. Bd2 Qc7 8. h3 Bh5 {Keep the pin. Black follows with ...e6 and ...Nbd7.}`,
    },
    {
      name: "4.Bc4 with castling",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5
        4. Bc4 Nf6 5. Nf3 c6 6. O-O Bg4 7. h3 Bh5 8. d3 e6 {Solid development. Black castles after ...Be7.}`,
    },
    {
      name: "3.d4 without Nc3",
      pgn: `1. e4 d5 2. exd5 Qxd5
        3. d4 Nf6 {Develop first; the queen is fine on d5 for now.}
        4. Nf3 Bf5 5. Be2 e6 6. O-O Nc6 {Pressure on d4.}
        7. c4 Qd7 {The queen steps back. Black plans ...O-O-O.}`,
    },
    {
      name: "3.Nf3 transposing",
      pgn: `1. e4 d5 2. exd5 Qxd5
        3. Nf3 Nf6 4. Be2 Bf5 5. O-O e6 6. d4 Nc6 7. c4 Qd7 {The same position as the 3.d4 line.}`,
    },
    {
      name: "2.e5 Advance",
      pgn: `1. e4 d5
        2. e5 {White avoids the trade.}
        c5 {Fight for d4, French style.}
        3. c3 Nc6 4. d4 Bf5 {Now the bishop is outside the pawn chain, unlike in the French.}`,
    },
    {
      name: "2.Nc3 d4",
      pgn: `1. e4 d5
        2. Nc3 d4 {Gain space with tempo on the knight.}
        3. Nce2 e5 4. Ng3 Be6 {Black has a nice space advantage in the centre.}`,
    },
  ],
}
