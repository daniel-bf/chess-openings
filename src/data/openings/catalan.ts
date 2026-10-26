import type { OpeningSource } from '../types'

export const catalan: OpeningSource = {
  id: "catalan",
  name: "Catalan Opening",
  eco: "E00–E09",
  side: "white",
  summary:
    "The Catalan is a Queen's Gambit (d4 and c4) where White also fianchettoes the king's bishop: g3 and Bg2 put it on the long diagonal from h1 to a8. That bishop presses on d5 and Black's queenside for the whole game and makes Black's c8 bishop hard to develop. If Black grabs the c4 pawn, White is happy to wait a few moves before winning it back.",
  ideas: [
    "Fianchetto with g3 and Bg2: the bishop on the long diagonal aims at d5, b7 and a8, and also guards White's king.",
    "If Black takes on c4, do not panic: castle, then win the pawn back with Qc2 or Qa4, using a4 to stop ...b5 when needed.",
    "Play a slow squeeze: Black's c8 bishop and queenside are the usual weaknesses, and the e4 push (prepared by Qc2 and Nbd2) gains central space.",
  ],
  lines: [
    {
      name: "Open Defence, Classical Line (5...Be7)",
      pgn: `1. d4 {Takes the centre and opens the c1 bishop.}
        Nf6 2. c4 {Gains more space and pressures d5, as in the Queen's Gambit.}
        e6 3. g3 {The Catalan: White prepares to fianchetto the bishop to g2, on the long diagonal.}
        d5 4. Bg2 {The bishop now aims at d5 and, further on, at b7 and a8.}
        dxc4 {The Open Catalan: Black takes the pawn and opens the bishop's diagonal even more.}
        5. Nf3 {Develops and prepares to castle. The c4 pawn can be won back later.}
        Be7 6. O-O {King to safety first; the pawn will not run away.}
        O-O 7. Qc2 {Attacks the c4 pawn so White can win it back.}
        a6 {Black prepares ...b5 to hold on to c4.}
        8. a4 {Stops ...b5, so the c4 pawn cannot be defended by a pawn.}
        Bd7 {Black plans ...Bc6 to oppose the g2 bishop on the long diagonal.}
        9. Qxc4 {The pawn is back.}
        Bc6 10. Bg5 {Develops and pins the f6 knight, which shields both Black's king and the c6 bishop. White keeps a small, pleasant edge.}`,
    },
    {
      name: "Open Defence: 5...c5 (7.Qa4)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        c5 {Black strikes at d4 at once, so White's centre is attacked too.}
        6. O-O {King to safety. After ...cxd4, White would recapture with the knight with a lively game.}
        Nc6 7. Qa4 {Attacks the c4 pawn and pins the c6 knight against the king.}
        Bd7 {Unpins.}
        8. Qxc4 {Pawn regained.}
        b5 {Kicks the queen and gains queenside space.}
        9. Qd3 {Keeps the queen centralised, eyeing d4 and b5.}
        c4 {Kicks the queen again and grabs more space.}
        10. Qd1 {Retreats to safety. Black's advanced b5 and c4 pawns can become targets for a4, b3 and the g2 bishop.}`,
    },
    {
      name: "Open Defence, Modern Sharp Variation (5...Nc6 6.Qa4)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        Nc6 {Black develops and attacks d4, planning ...Rb8 and ...b5 to keep the pawn.}
        6. Qa4 {Pins the c6 knight and attacks c4, before Black can protect it.}
        Bb4+ 7. Bd2 {Blocks the check and offers to trade bishops.}
        Nd5 {Defends the b4 bishop and centralises the knight.}
        8. Bxb4 {Trades off Black's active bishop.}
        Ndxb4 9. O-O {Castles before going after c4. Next come Nc3, a3 or Qxc4.}`,
    },
    {
      name: "Closed, Main Line (4...Be7, 9.e4)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2
        Be7 {The Closed Catalan: Black keeps the pawn on d5 for now.}
        5. Nf3 {Develops and prepares to castle.}
        O-O 6. O-O {King to safety.}
        Nbd7 7. Qc2 {Controls e4 and backs up c4, preparing e4.}
        c6 8. Nbd2 {Supports e4 and can recapture on c4 if Black ever takes there.}
        b6 {Black prepares ...Bb7 to solve his c8 bishop problem.}
        9. e4 {Strikes in the centre and gains space.}
        Bb7 10. b3 {Protects c4 and prepares Bb2, so every White piece is supporting the centre.}`,
    },
    {
      name: "4...Bb4+ 5.Bd2 Be7 (Bogo-Indian Retreat Variation)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2
        Bb4+ {A check to make White block, so the d2 square gets occupied.}
        5. Bd2 {Blocks and offers to trade bishops.}
        Be7 {Black drops back: now White's bishop on d2 is a little passive.}
        6. Nf3 {Develops and prepares castling.}
        O-O 7. O-O {King to safety.}
        c6 8. Qc2 {Supports c4 and controls e4.}
        b6 9. Ne5 {Clears the long diagonal for the g2 bishop and eyes the c6 pawn, which ...b6 has weakened.}`,
    },
    {
      name: "Bogo-Indian Defence: Retreat Variation (3...Bb4+ 4.Bd2 Be7)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        Bb4+ {The check comes before ...d5.}
        4. Bd2 {Blocks the check.}
        Be7 5. Bg2 {Bishop on the long diagonal.}
        d5 6. Nf3 {Develops and prepares castling.}
        O-O 7. O-O {The same position as in the 4...Bb4+ line.}`,
    },
    {
      name: "Benoni Defence: Fianchetto Variation (3...c5)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        c5 {Black attacks d4 and invites a Benoni structure.}
        4. d5 {Pushes past to gain space and cramp Black.}
        exd5 5. cxd5 {Recaptures with the c-pawn, keeping a pawn on d5.}
        d6 6. Nc3 {Develops and supports d5.}
        g6 7. Bg2 {The bishop backs up d5 from the long diagonal.}
        Bg7 8. Nf3 {Develops and controls e5, where Black would like to put pieces.}
        O-O 9. O-O {A Fianchetto Benoni. White has a space edge in the centre; Black has a queenside pawn majority.}`,
    },
    {
      name: "King's Indian: Fianchetto Variation, Classical (2...g6)",
      pgn: `1. d4 Nf6 2. c4
        g6 {Black goes for a King's Indian with ...Bg7.}
        3. g3 {White still fianchettoes: the g2 bishop will face Black's g7 bishop and guard White's king.}
        Bg7 4. Bg2 {The bishop on the long diagonal.}
        O-O 5. Nc3 {Develops and controls d5 and e4.}
        d6 6. Nf3 {Develops and controls e5, slowing down Black's ...e5.}
        Nbd7 7. O-O {King to safety.}
        e5 8. e4 {Answers ...e5 by taking more central space: the Fianchetto King's Indian.}`,
    },
    {
      name: "Open Defence: Main Line (5...a6 6.O-O Nc6)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        a6 {The main line of the Open Catalan: Black prepares ...b5 to hang on to the c4 pawn.}
        6. O-O {King to safety first. White is in no hurry to win the pawn back.}
        Nc6 {Black develops and adds pressure on d4.}
        7. e3 {Supports d4 solidly, so the c6 knight has nothing to hit, and opens the d1-e2 path for the queen.}
        Bd7 8. Qe2 {The queen attacks c4 and gets ready to support e4 or b3.}
        b5 {Black holds the extra pawn with ...b5, but this loosens c6 and the long diagonal.}
        9. Rd1 {Puts the rook opposite Black's queen on the d-file and prepares the central push d5 or e4. White will win back c4 with b3 or a4 later, with lasting pressure on the long diagonal.}`,
    },
    {
      name: "Budapest Gambit: Main Line, Rubinstein Variation (4.Bf4)",
      pgn: `1. d4 Nf6 2. c4
        e5 {The Budapest Gambit: Black offers a pawn to open lines and develop quickly.}
        3. dxe5 {Accepts the pawn.}
        Ng4 {Black attacks e5 and will win the pawn back.}
        4. Bf4 {The Rubinstein Variation: the bishop defends e5 and develops. This is the line most authors consider the most dangerous for Black.}
        Nc6 5. Nf3 {Develops and defends e5 a second time.}
        Bb4+ 6. Nbd2 {Blocks with the knight, so the bishop on f4 keeps guarding e5.}
        Qe7 7. e3 {Supports the f4 bishop and opens the f1 bishop.}
        Ngxe5 {Black wins the pawn back, so material is level.}
        8. Nxe5 {Trades a pair of knights.}
        Nxe5 9. Be2 {Develops and prepares to castle. White plans O-O and Nb3 or a3, with a small lead thanks to the c4 pawn and the bishop pair if Black takes on d2.}`,
    },
    {
      name: "Queen's Indian: Classical, Traditional Variation, Main Line (3...b6)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        b6 {A Queen's Indian setup: Black's bishop will fight White's g2 bishop on the long diagonal.}
        4. Nf3 {Develops and prepares to castle. With the knight on f3 the position is a normal Queen's Indian with g3.}
        Bb7 5. Bg2 {The fianchetto bishop now faces Black's b7 bishop, with the f3 knight standing between them.}
        Be7 6. O-O {King to safety.}
        O-O 7. Nc3 {Develops and adds control of e4 and d5, the squares Black's bishop is aiming at.}
        Ne4 {Black offers a knight trade to ease the fight for e4.}
        8. Qc2 {Defends c3 and adds control of e4.}
        Nxc3 9. Qxc3 {Recaptures with the queen, which now eyes the long diagonal. White wants b3, Bb2 and later e4 or d5 to gain space.}`,
    },
  ],
}
