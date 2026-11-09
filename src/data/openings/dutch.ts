import type { OpeningSource } from '../types'

export const dutch: OpeningSource = {
  id: "dutch",
  name: "Dutch Defense (Leningrad)",
  eco: "A80–A89",
  side: "black",
  summary:
    "A bold, unbalancing answer to 1.d4. With 1...f5, you, commander of the Black Kingdom, control e4 from the flank and claim land on the kingside, at the cost of slightly loosening your King's walls (the e8-h5 diagonal). In the Leningrad set-up you add ...g6 and ...Bg7, castle, and play ...d6, giving a King's Indian-style war with extra kingside land. The main plan is the ...e5 break, often prepared with ...Qe8, then a kingside assault with the Queen and the f-pawn.",
  ideas: [
    "Control e4 with ...f5 and ...Nf6. Then fianchetto with ...g6 and ...Bg7 (post the priest on the long diagonal road) and castle quickly to shelter your King.",
    "Play ...d6 and prepare ...e5, usually with ...Qe8, ...Nc6 or ...Na6 and ...c6. If White seals the heartland with d5, secure posts for your riders with ...a5.",
    "Against early sidelines (2.e4, 2.Bg5, 2.Nc3, 2.Bf4), raise your army quickly and fight for e4. Don't grab plunder at the cost of your King's safety.",
  ],
  lines: [
    {
      name: "Leningrad Variation (7...Qe8 8.d5)",
      pgn: `1. d4 f5 {The Dutch. A soldier controls e4 from the flank and claims kingside land.}
        2. g3 {White will fianchetto (post the priest on g2, on the long diagonal road), where it aims at e4 and b7.}
        Nf6 {A rider rides out and watches e4 too.}
        3. Bg2 g6 {The Leningrad. Clear the way for ...Bg7.}
        4. Nf3 Bg7 {Your priest takes the long diagonal road. It shields your King and presses on d4.}
        5. O-O O-O {Castle. Your King is safe behind the g7 priest.}
        6. c4 d6 {Keep the White rider out of e5 and prepare the ...e5 break.}
        7. Nc3 Qe8 {The main plan. Your Queen backs ...e5 and can later swing to f7 or h5 for a kingside assault.}
        8. d5 {White grabs land and takes the c6 and e6 squares from your pieces.}
        a5 {Stop b4. This makes c5 a safe post for your rider.}
        9. Be3 Na6 {The rider heads for c5 (or b4), where it presses on White's queenside.}`,
    },
    {
      name: "Leningrad Variation (7...Qe8 8.b3)",
      pgn: `1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8
        8. b3 {A calm march. White prepares Ba3 or Bb2.}
        Na6 {A rider joins. It can go to c7, and it stays out of your c-pawn's way.}
        9. Ba3 {The White priest puts pressure on your d6 soldier.}
        c6 {Cover the d5 and b5 squares and open c7 for the rider.}
        10. Qd3 {The White Queen gets ready for e4.}
        Rb8 {Prepare ...b5 to gain queenside land and challenge c4.}`,
    },
    {
      name: "Leningrad Variation (via 2.c4)",
      pgn: `1. d4 f5
        2. c4 {The most common march. Now White can play Nc3 and e4 more easily.}
        Nf6 {A rider rides out to control e4.}
        3. g3 g6 {Head for the Leningrad set-up.}
        4. Bg2 Bg7 {Your priest takes the long diagonal road.}
        5. Nf3 O-O {Castle. Your King shelters behind the g7 priest.}
        6. O-O d6 {The main Leningrad battlefield again. Next comes ...Qe8 or ...c6 to prepare ...e5.}`,
    },
    {
      name: "Leningrad Variation (via 2.Nf3, 6.b3)",
      pgn: `1. d4 f5
        2. Nf3 {A flexible road. White holds the c-pawn back.}
        Nf6 {Your rider rides out and watches e4.}
        3. g3 g6 {The same Leningrad set-up.}
        4. Bg2 Bg7 5. O-O O-O
        6. b3 {White will post the priest on b2, aiming down the long diagonal road at your King.}
        d6 {Prepare ...e5, which will block that road.}
        7. Bb2 Qe8 {Your Queen backs ...e5 and can later swing to f7 or h5.}`,
    },
    {
      name: "Staunton Gambit: Lasker Variation (2.e4)",
      pgn: `1. d4 f5
        2. e4 {The Staunton Gambit. White sacrifices a soldier for quick development and attacking chances.}
        fxe4 {Accept. You are a soldier up and must keep your King safe.}
        3. Nc3 Nf6 {Your rider guards the e4 soldier.}
        4. Bg5 {White plans Bxf6 to remove the guard of e4.}
        g6 {Leningrad-style. The priest goes to g7 to guard your King. Be ready to give the soldier back if needed.}
        5. f3 {White opens the f-file to win back the soldier or attack.}
        exf3 {Take. White must retake with a piece, so you stay a soldier up.}
        6. Nxf3 Bg7 {The priest shields your King.}
        7. Bd3 O-O {Castle. Your King is safe behind the g7 priest.}
        8. O-O d5 {Plant a soldier in the heartland. It stops d4-d5 and keeps White's pieces off e4. You are a soldier up with a safe King.}`,
    },
    {
      name: "Hopton Attack (2.Bg5)",
      pgn: `1. d4 f5
        2. Bg5 {The Hopton Attack. The White priest makes ...Nf6 awkward, as Bxf6 would damage your shield wall.}
        h6 {Make the priest decide straight away.}
        3. Bh4 g5 {Chase it again. You gain kingside land and free f6 for your rider.}
        4. Bg3 Nf6 {Develop. The rider can no longer be pinned or taken.}
        5. e3 d6 {Block the g3 priest's road towards c7 and control e5.}
        6. h4 {White attacks your g5 soldier to open roads against your King.}
        g4 {March past. This keeps the kingside closed, while ...gxh4 would open the h-file for White.}`,
    },
    {
      name: "Raphael Variation (2.Nc3 Nf6 3.Bg5)",
      pgn: `1. d4 f5
        2. Nc3 {A White rider rides out to prepare e4.}
        Nf6 {A rider rides out to control e4.}
        3. Bg5 {White plans to remove the rider that guards e4.}
        d5 {Make e4 impossible by planting a soldier on d5.}
        4. Bxf6 exf6 {Retake towards the heartland. This opens the e-file and the f8 priest's road.}
        5. e3 c6 {Support d5 and build a solid shield wall.}
        6. Bd3 {The White priest attacks your f5 soldier.}
        g6 {Guard f5. Next ...Bd6 and ...O-O complete your army.}`,
    },
    {
      name: "London System (2.Bf4)",
      pgn: `1. d4 f5
        2. Bf4 {The London set-up. The White priest controls e5 and White plays e3 and Nf3.}
        Nf6 {Your rider rides out to control e4.}
        3. e3 g6 {Build the usual Leningrad fortress.}
        4. Nf3 Bg7 {The priest takes the long diagonal road.}
        5. Be2 O-O {Your King retreats behind the castle walls.}
        6. O-O d6 {Prepare ...e5. Later ...Nc6 or ...Nbd7 backs the break, and ...Nh5 can chase the f4 priest.}`,
    },
    {
      name: "Leningrad Variation (8.d5 a5 9.Nd4)",
      pgn: `1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8 8. d5 a5
        9. Nd4 {The most popular move here. The rider eyes e6 and b5, and White prepares e4 to break open the heartland.}
        Na6 {The usual plan: the rider heads for c5, where the a5 soldier supports it.}
        10. e4 {White strikes f5 before your army is fully raised.}
        fxe4 {Take. This opens the f-file road for your tower.}
        11. Nxe4 Nxe4 {Trade riders to thin out White's attacking force.}
        12. Bxe4 Nc5 {Your rider lands on its best post and hits the e4 priest. Next ...Bd7 and ...Qf7, with play on the f-file.}`,
    },
    {
      name: "Staunton Gambit: Blackmar's Second Gambit (4.f3)",
      pgn: `1. d4 f5 2. e4 fxe4 3. Nc3 Nf6
        4. f3 {Blackmar's Second Gambit: White sacrifices a second soldier to open the f-file quickly.}
        d5 {Hold e4 with a soldier and grab heartland land. Taking on f3 would only help White develop.}
        5. fxe4 dxe4 {Retake: you are still a soldier up, and the e4 soldier cramps White.}
        6. Bg5 {White attacks the f6 rider, which guards e4.}
        Bf5 {Guard e4 with the priest, so even after Bxf6 your soldier stays protected.}
        7. Bc4 {White aims the priest at your kingside, through e6 towards g8.}
        Nc6 {Develop with a hit on d4. Next ...e6 blocks the c4 priest, and ...Qd7 with ...O-O-O gives your King a safe home.}`,
    },
    {
      name: "Queen's Knight Variation (2.c4 Nf6 3.Nc3)",
      pgn: `1. d4 f5 2. c4 Nf6
        3. Nc3 {The Queen's Knight Variation: White raises a rider first and keeps options such as Bg5, Qc2 or e4.}
        g6 {Stay loyal to the Leningrad fortress.}
        4. Nf3 Bg7 {Your priest takes the long diagonal road, where it presses on d4.}
        5. g3 O-O {Castle; your King is safe behind the g7 priest.}
        6. Bg2 d6 {Keep the White rider out of e5 and prepare ...e5.}
        7. O-O Qe8 {The main Leningrad battlefield again, reached by another road. Your Queen backs ...e5.}`,
    },
  ],
}
