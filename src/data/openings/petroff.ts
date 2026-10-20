import type { OpeningSource } from '../types'

export const petroff: OpeningSource = {
  id: "petroff",
  name: "Petrov's Defense",
  eco: "C42\u2013C43",
  side: "black",
  summary:
    "A symmetrical, very solid answer to 1.e4 e5 2.Nf3. Black counterattacks e4 instead of defending e5, aiming for an equal and safe game.",
  ideas: [
    "Answer 3.Nxe5 with ...d6 first, never ...Nxe4 at once.",
    "Keep the knight active on e4 and develop quickly.",
    "Aim for a sound, symmetrical structure and equal chances.",
  ],
  lines: [
    {
      name: "Classical: 5.d4",
      pgn: `1. e4 e5 2. Nf3
        Nf6 {Petrov's Defence: counterattack e4.}
        3. Nxe5 d6 {Kick the knight first. 3...Nxe4? 4.Qe2 is bad for Black.}
        4. Nf3 Nxe4 {Now the pawn is safe to take.}
        5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4 Nb4 {Hit the d3 bishop.}
        9. Be2 O-O 10. Nc3 Bf5 11. a3 Nxc3 12. bxc3 Nc6 {Equal.}`,
    },
    {
      name: "5.Nc3",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Nc3 Nxc3 6. dxc3 Be7 {White plans queenside castling.}
        7. Be3 O-O 8. Qd2 Nd7 9. O-O-O Nf6 {Solid. Black attacks with ...c5 or ...b5.}`,
    },
    {
      name: "5.Qe2",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Qe2 Qe7 {Block the pin.}
        6. d3 Nf6 7. Bg5 Qxe2+ 8. Bxe2 Be7 {A level endgame.}`,
    },
    {
      name: "5.c4",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. c4 Nc6 6. Nc3 Nxc3 7. dxc3 Be7 8. Bd3 O-O 9. O-O {Equal.}`,
    },
    {
      name: "Steinitz (3.d4)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. d4 Nxe4 4. Bd3 d5 5. Nxe5 Nd7 {Challenge the strong knight.}
        6. Nxd7 Bxd7 7. O-O Bd6 8. c4 c6 {Solid.}`,
    },
    {
      name: "Cochrane Gambit (4.Nxf7)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6
        4. Nxf7 {The Cochrane Gambit: a piece for two pawns and an exposed king.}
        Kxf7 5. d4 c5 {Fight for the centre.}
        6. dxc5 Nc6 7. Bc4+ Be6 8. Bxe6+ Kxe6 {The king is fine. Black is a piece up.}`,
    },
    {
      name: "Three Knights (3.Nc3)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. Nc3 Bb4 4. Nxe5 O-O 5. Be2 Re8 6. Nd3 Bxc3 7. dxc3 Nxe4 8. O-O d6 {Black wins the pawn back with a good game.}`,
    },
    {
      name: "3.Bc4",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. Bc4 Nxe4 4. Nc3 Nxc3 5. dxc3 f6 {Hold e5.}
        6. Nh4 g6 7. f4 Qe7 {The queen defends the kingside.}`,
    },
  ],
}
