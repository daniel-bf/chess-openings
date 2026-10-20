import type { OpeningSource } from '../types'

export const scotch: OpeningSource = {
  id: "scotch",
  name: "Scotch Game",
  eco: "C44\u2013C45",
  side: "white",
  summary:
    "White opens the centre at once with 3.d4. It leads to open, easy-to-understand positions where White has more space and quick development.",
  ideas: [
    "Trade d-pawn for e-pawn and get a knight on d4.",
    "Use the half-open d-file and the e4-e5 push.",
    "Develop fast and keep the initiative.",
  ],
  lines: [
    {
      name: "4...Nf6: Mieses Variation",
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. d4 {The Scotch: open the centre straight away.}
        exd4 4. Nxd4 {The knight is strong in the centre.}
        Nf6 5. Nxc6 bxc6 6. e5 {Kick the knight.}
        Qe7 7. Qe2 Nd5 8. c4 Ba6 9. b3 {White has space; Black has active pieces.}`,
    },
    {
      name: "4...Nf6 5...dxc6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6
        dxc6 6. Qxd8+ Kxd8 7. Nc3 Bb4 8. Bd2 {A small edge in the endgame.}`,
    },
    {
      name: "4...Bc5 5.Nxc6 Qf6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Bc5 {The Classical: hit the d4 knight.}
        5. Nxc6 {Trade first.}
        Qf6 6. Qd2 dxc6 7. Nc3 Be6 8. Na4 {Hunt the bishop pair.}
        Bd4 9. Bd3 {Develop. White keeps a small edge.}`,
    },
    {
      name: "4...Bc5 5...bxc6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6
        bxc6 6. Bd3 {Develop and castle.}
        Qh4 7. Qe2 Nf6 {White plays O-O and Nd2 next.}`,
    },
    {
      name: "4...Qh4 Steinitz",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Qh4 {The Steinitz: Black grabs at e4.}
        5. Nc3 Bb4 6. Be2 Qxe4 7. Nb5 Bxc3+ 8. bxc3 Kd8 9. O-O {Lots of compensation for the pawn.}`,
    },
    {
      name: "4...Nxd4",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Nxd4 5. Qxd4 {The queen is safe and strong on d4.}
        Ne7 6. Bc4 Nc6 7. Qd5 {Threatens Qxf7#.}
        Qf6 8. O-O {White leads in development.}`,
    },
    {
      name: "4...Bb4+",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Bb4+ 5. c3 Be7 6. Nxc6 bxc6 7. Bd3 d6 8. O-O {More space for White.}`,
    },
    {
      name: "3...d6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4
        d6 4. Bb5 {Pin the knight to pressure e5.}
        Bd7 5. Nc3 exd4 6. Nxd4 Nf6 7. O-O Be7 {White has a pleasant space advantage.}`,
    },
  ],
}
