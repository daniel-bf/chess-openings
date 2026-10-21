import type { OpeningSource } from '../types'

export const vienna: OpeningSource = {
  id: "vienna",
  name: "Vienna Game",
  eco: "C25–C29",
  side: "white",
  summary:
    "The Vienna Game (1.e4 e5 2.Nc3) develops the queen's knight first, which keeps the f-pawn free. Your main idea is f4, the Vienna Gambit: like a King's Gambit, but with the knight already defending e4 and watching d5. Black's best answers strike back in the centre with ...d5; against quieter set-ups you get a big centre and active pieces.",
  ideas: [
    "2.Nc3 protects e4 and controls d5 while leaving the f-pawn free to advance.",
    "f4 attacks e5: if Black takes, you get the centre and win the pawn back; if not, fxe5 gains space and opens the f-file.",
    "After castling, your rook uses the f-file, and many lines end with your pieces aimed at f7 and Black's king.",
  ],
  lines: [
    {
      name: "Vienna Gambit: 3...d5",
      pgn: `1. e4 {Takes a central square and opens lines for the queen and the f1 bishop.}
        e5 {Black claims an equal share of the centre.}
        2. Nc3 {The Vienna Game. The knight protects e4 and leaves the f-pawn free to advance.}
        Nf6 {Black develops and attacks e4.}
        3. f4 {The Vienna Gambit: attack e5 and aim for an open f-file.}
        d5 {Black's best answer: hit back in the centre instead of taking on f4.}
        4. fxe5 {Take on e5. The pawn gains space and takes the f6 square away from Black's knight.}
        Nxe4 {The knight jumps to a strong central square.}
        5. Nf3 {Develops and stops ...Qh4+, which would be dangerous now that your f-pawn has gone.}
        Be7 {Solid development: Black prepares to castle.}
        6. d4 {Supports e5 and builds a big centre.}
        O-O 7. Bd3 {Attacks the e4 knight and prepares to castle.}
        f5 {Black supports the knight with a pawn.}
        8. exf6 {Capture "en passant" (a pawn that has just moved two squares can be taken as if it had moved one). This opens the f-file.}
        Bxf6 9. O-O {Castle. Your rook now stands on the open f-file and your pieces are very active.}`,
    },
    {
      name: "Vienna Gambit: 5...Nc6",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3
        Nc6 {Black develops and attacks e5.}
        6. Bb5 {Pins the c6 knight to Black's king (the d-pawn has left d7), so it cannot do much against e5.}
        a6 7. Bxc6+ {Take, leaving Black with doubled c-pawns.}
        bxc6 8. d3 {Kicks the e4 knight out of the centre and opens your c1 bishop.}
        Nxc3 9. bxc3 {Take back toward the centre. The b-file is now half-open for your rook.}
        Be7 10. O-O {Castle. Your rook uses the f-file, and the e5 pawn cramps Black.}`,
    },
    {
      name: "Vienna Gambit: 3...exf4",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4
        exf4 {Black takes the pawn, but this lets you gain space with tempo.}
        4. e5 {Kick the f6 knight.}
        Ng8 {The only good square, but Black's development is undone.}
        5. Nf3 {Develop and stop ...Qh4+.}
        d6 {Black attacks e5 at once.}
        6. d4 {Support e5 and open your c1 bishop so it can win back f4.}
        dxe5 7. Qe2 {Attacks e5 along the e-file. The pawn is pinned to Black's king, so it cannot move away.}
        Be7 {Black blocks the e-file to break the pin.}
        8. Qxe5 {Win one pawn back.}
        Nf6 9. Bxf4 {And the second one. Material is level and you have the freer game.}`,
    },
    {
      name: "Vienna Gambit: 3...d6",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4
        d6 {Black holds e5 with a pawn and keeps things solid.}
        4. Nf3 {Develop and add pressure on e5.}
        Nc6 5. Bb5 {Pins the c6 knight to Black's king (the d-pawn has moved), and that knight is e5's key defender.}
        Bd7 6. d3 {Supports e4 and opens your c1 bishop so it can take back on f4.}
        exf4 7. Bxf4 {Win the pawn back with a developing move. You have the half-open f-file and easy play.}`,
    },
    {
      name: "2...Nc6: Hamppe-Allgaier Gambit",
      pgn: `1. e4 e5 2. Nc3
        Nc6 {Black develops and keeps an eye on d4.}
        3. f4 {The Vienna Gambit against ...Nc6.}
        exf4 4. Nf3 {Develop and stop ...Qh4+.}
        g5 {Black holds the extra pawn with ...g5, as in many King's Gambits.}
        5. h4 {Undermine the g5 pawn at once.}
        g4 6. Ng5 {The Hamppe-Allgaier Gambit: the knight has no safe retreat, and that is the point.}
        h6 7. Nxf7 {Sacrifice the knight to drag Black's king into the open.}
        Kxf7 8. d4 {Build a big centre and open your c1 bishop to win back f4. This is a speculative gambit (engines prefer Black), so keep attacking with Bxf4, Bc4 and O-O.}`,
    },
    {
      name: "2...Nc6 3...Bc5",
      pgn: `1. e4 e5 2. Nc3 Nc6 3. f4
        Bc5 {Black ignores the gambit. The bishop eyes g1, and after 4.fxe5? Black has ...Qh4+.}
        4. Nf3 {Develop and take h4 away from Black's queen.}
        d6 {Black supports e5.}
        5. Na4 {Go after the strong c5 bishop to win the bishop pair.}
        Bb6 6. Nxb6 {Trade it off: the bishop that kept you from castling is gone.}
        axb6 7. d3 {Support e4 and open your c1 bishop. You can castle next.}`,
    },
    {
      name: "2...Bc5",
      pgn: `1. e4 e5 2. Nc3
        Bc5 {Black develops the bishop toward f2 and skips ...Nc6.}
        3. Nf3 {Develop and attack e5.}
        d6 4. d4 {Strike in the centre, attacking e5 and the c5 bishop at the same time.}
        exd4 5. Nxd4 {Take back with a central knight.}
        Nf6 6. Be2 {Calm development; castling comes next.}
        O-O 7. O-O {Both sides are developed, and your e4 pawn against d6 gives you more space.}`,
    },
    {
      name: "2...d6",
      pgn: `1. e4 e5 2. Nc3
        d6 {A quiet move that supports e5.}
        3. f4 {Attack e5 with the f-pawn while it is free.}
        Nf6 4. Nf3
        exf4 {Black takes on f4 and gives up the centre.}
        5. d4 {Take the centre with two pawns.}
        Be7 6. Bxf4 {Win the pawn back with development.}
        O-O 7. Bd3 {Develop behind the e4 pawn, ready to castle with a strong centre.}`,
    },
  ],
}
