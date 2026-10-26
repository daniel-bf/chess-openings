import type { OpeningSource } from '../types'

export const dutch: OpeningSource = {
  id: "dutch",
  name: "Dutch Defense (Leningrad)",
  eco: "A80–A89",
  side: "black",
  summary:
    "An ambitious, unbalancing reply to 1.d4. With 1...f5, Black controls e4 from the side and claims space on the kingside, at the cost of slightly loosening the king (the e8-h5 diagonal). In the Leningrad set-up, Black adds ...g6 and ...Bg7, castles, and plays ...d6, giving a King's Indian-style game with extra kingside space. The main plan is the ...e5 break, often prepared with ...Qe8, followed by kingside play with the queen and the f-pawn.",
  ideas: [
    "Control e4 with ...f5 and ...Nf6. Then fianchetto with ...g6 and ...Bg7 (put the bishop on the long diagonal) and castle quickly to cover your king.",
    "Play ...d6 and prepare ...e5, usually with ...Qe8, ...Nc6 or ...Na6 and ...c6. If White closes the centre with d5, secure squares for your knights with ...a5.",
    "Against early sidelines (2.e4, 2.Bg5, 2.Nc3, 2.Bf4), develop quickly and fight for e4. Don't grab material at the cost of your king's safety.",
  ],
  lines: [
    {
      name: "Leningrad Variation (7...Qe8 8.d5)",
      pgn: `1. d4 f5 {The Dutch. Control e4 with a pawn from the side and claim kingside space.}
        2. g3 {White will fianchetto (put the bishop on g2, on the long diagonal), where it aims at e4 and b7.}
        Nf6 {Develop and control e4 again.}
        3. Bg2 g6 {The Leningrad. Prepare ...Bg7.}
        4. Nf3 Bg7 {The bishop goes to the long diagonal. It protects your king and presses on d4.}
        5. O-O O-O {Castle. Your king is safe behind the g7 bishop.}
        6. c4 d6 {Keep White's knight out of e5 and prepare the ...e5 break.}
        7. Nc3 Qe8 {The main plan. The queen supports ...e5 and can later swing to f7 or h5 for kingside play.}
        8. d5 {White grabs space and takes the c6 and e6 squares away from your pieces.}
        a5 {Stop b4. This makes c5 a safe square for your knight.}
        9. Be3 Na6 {The knight heads for c5 (or b4), where it presses on White's queenside.}`,
    },
    {
      name: "Leningrad Variation (7...Qe8 8.b3)",
      pgn: `1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8
        8. b3 {Calm. White prepares Ba3 or Bb2.}
        Na6 {Develop. The knight can go to c7, and it does not get in the way of your c-pawn.}
        9. Ba3 {The bishop puts pressure on your d6 pawn.}
        c6 {Cover the d5 and b5 squares and open c7 for the knight.}
        10. Qd3 {White gets ready for e4.}
        Rb8 {Prepare ...b5 to gain queenside space and challenge c4.}`,
    },
    {
      name: "Leningrad Variation (via 2.c4)",
      pgn: `1. d4 f5
        2. c4 {The most common move. Now White can play Nc3 and e4 more easily.}
        Nf6 {Develop and control e4.}
        3. g3 g6 {Go for the Leningrad set-up.}
        4. Bg2 Bg7 {The bishop goes to the long diagonal.}
        5. Nf3 O-O {Castle. Your king is safe behind the g7 bishop.}
        6. O-O d6 {This is the main Leningrad position again. Next comes ...Qe8 or ...c6 to prepare ...e5.}`,
    },
    {
      name: "Leningrad Variation (via 2.Nf3, 6.b3)",
      pgn: `1. d4 f5
        2. Nf3 {A flexible move order. White keeps the c-pawn back.}
        Nf6 {Develop and control e4.}
        3. g3 g6 {Same Leningrad set-up.}
        4. Bg2 Bg7 5. O-O O-O
        6. b3 {White will put the bishop on b2, aiming down the long diagonal at your king.}
        d6 {Prepare ...e5, which will block that diagonal.}
        7. Bb2 Qe8 {Support ...e5. The queen can later swing to f7 or h5.}`,
    },
    {
      name: "Staunton Gambit: Lasker Variation (2.e4)",
      pgn: `1. d4 f5
        2. e4 {The Staunton Gambit. White offers a pawn for quick development and attacking chances.}
        fxe4 {Accept. You are a pawn up and have to keep your king safe.}
        3. Nc3 Nf6 {Defend the e4 pawn.}
        4. Bg5 {White plans Bxf6 to remove the defender of e4.}
        g6 {Leningrad-style. The bishop goes to g7 to guard your king. Be ready to give the pawn back if needed.}
        5. f3 {White opens the f-file to win back the pawn or attack.}
        exf3 {Take. White has to recapture with a piece, so you stay a pawn up.}
        6. Nxf3 Bg7 {The bishop protects your king.}
        7. Bd3 O-O {Castle. Your king is safe behind the g7 bishop.}
        8. O-O d5 {Put a pawn in the centre. It stops d4-d5 and keeps White's pieces off e4. You are a pawn up with a safe king.}`,
    },
    {
      name: "Hopton Attack (2.Bg5)",
      pgn: `1. d4 f5
        2. Bg5 {The Hopton Attack. White makes ...Nf6 awkward, because Bxf6 would damage your pawns.}
        h6 {Ask the bishop to decide straight away.}
        3. Bh4 g5 {Chase it again. You gain kingside space and free f6 for your knight.}
        4. Bg3 Nf6 {Develop. The knight can no longer be pinned or taken.}
        5. e3 d6 {Block the g3 bishop's diagonal towards c7 and control e5.}
        6. h4 {White attacks your g5 pawn to open lines against your king.}
        g4 {Push past. This keeps the kingside closed, while ...gxh4 would open the h-file for White.}`,
    },
    {
      name: "Raphael Variation (2.Nc3 Nf6 3.Bg5)",
      pgn: `1. d4 f5
        2. Nc3 {White prepares e4.}
        Nf6 {Develop and control e4.}
        3. Bg5 {White plans to remove the knight that guards e4.}
        d5 {Make e4 impossible by putting a pawn on d5.}
        4. Bxf6 exf6 {Take back towards the centre. This opens the e-file and the f8 bishop's diagonal.}
        5. e3 c6 {Support d5 and build a solid pawn wall.}
        6. Bd3 {The bishop attacks your f5 pawn.}
        g6 {Protect f5. Next ...Bd6 and ...O-O complete development.}`,
    },
    {
      name: "London System (2.Bf4)",
      pgn: `1. d4 f5
        2. Bf4 {The London set-up. The bishop controls e5 and White plays e3 and Nf3.}
        Nf6 {Develop and control e4.}
        3. e3 g6 {Go for the Leningrad set-up as usual.}
        4. Nf3 Bg7 {The bishop goes to the long diagonal.}
        5. Be2 O-O {Castle.}
        6. O-O d6 {Prepare ...e5. Later ...Nc6 or ...Nbd7 supports the break, and ...Nh5 can chase the f4 bishop.}`,
    },
    {
      name: "Leningrad Variation (8.d5 a5 9.Nd4)",
      pgn: `1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8 8. d5 a5
        9. Nd4 {The most popular move here. The knight eyes e6 and b5, and White prepares e4 to open the centre.}
        Na6 {The usual plan: the knight heads for c5, where the a5 pawn supports it.}
        10. e4 {White strikes at f5 before you are fully developed.}
        fxe4 {Take. This opens the f-file for your rook.}
        11. Nxe4 Nxe4 {Swap knights to reduce White's attacking force.}
        12. Bxe4 Nc5 {The knight lands on its best square and hits the e4 bishop. Next ...Bd7 and ...Qf7, with play on the f-file.}`,
    },
    {
      name: "Staunton Gambit: Blackmar's Second Gambit (4.f3)",
      pgn: `1. d4 f5 2. e4 fxe4 3. Nc3 Nf6
        4. f3 {Blackmar's Second Gambit: White offers a second pawn to open the f-file quickly.}
        d5 {Hold e4 with a pawn and grab central space. Taking on f3 would only help White develop.}
        5. fxe4 dxe4 {Recapture: you are still a pawn up, and the e4 pawn cramps White.}
        6. Bg5 {White attacks the f6 knight, which defends e4.}
        Bf5 {Defend e4 with the bishop, so even after Bxf6 your pawn stays protected.}
        7. Bc4 {White aims the bishop at your kingside, through e6 towards g8.}
        Nc6 {Develop with a hit on d4. Next ...e6 blocks the c4 bishop, and ...Qd7 with ...O-O-O gives your king a safe home.}`,
    },
    {
      name: "Queen's Knight Variation (2.c4 Nf6 3.Nc3)",
      pgn: `1. d4 f5 2. c4 Nf6
        3. Nc3 {The Queen's Knight Variation: White develops first and keeps options such as Bg5, Qc2 or e4.}
        g6 {Stick to the Leningrad set-up.}
        4. Nf3 Bg7 {The bishop goes to the long diagonal, where it presses on d4.}
        5. g3 O-O {Castle; your king is safe behind the g7 bishop.}
        6. Bg2 d6 {Keep White's knight out of e5 and prepare ...e5.}
        7. O-O Qe8 {This is the main Leningrad position again, reached by a different route. The queen supports ...e5.}`,
    },
  ],
}
