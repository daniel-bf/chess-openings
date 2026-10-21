import type { OpeningSource } from '../types'

export const queensGambitDeclined: OpeningSource = {
  id: 'queens-gambit-declined',
  name: "Queen's Gambit Declined",
  eco: 'D30–D69',
  side: 'black',
  summary:
    "One of the oldest and most trusted answers to 1.d4. After 1.d4 d5 2.c4, Black keeps the d5 pawn with ...e6 instead of taking on c4. Black's position is solid but a little cramped: the c8 bishop is shut in behind the e6 pawn. Black develops calmly (...Nf6, ...Be7, ...O-O) and then frees the game with a well-timed ...c5, ...dxc4 followed by ...e5, or by getting the bishop out to b7 or f5.",
  ideas: [
    'Hold the strong point d5 with ...e6 and ...Nf6, develop with ...Be7 and castle quickly. Do not take on c4 early unless White has spent a tempo, so that White\'s bishop has to move twice.',
    "Free your position with a pawn break: ...c5 hits White's centre, and ...dxc4 followed by ...e5 opens the c8 bishop. In the Tartakower, ...b6 and ...Bb7 develop that bishop on the long diagonal instead.",
    'In the Exchange Variation (cxd5 exd5) the pawn structure is fixed. White plans a "minority attack" with b4-b5 on the queenside, and you answer with active pieces: ...Re8, ...Nf8-g6 or -e6 towards the kingside, and the c8 bishop to f5 or g4.',
  ],
  lines: [
    {
      name: 'Exchange Variation: Reshevsky (9.Nf3)',
      pgn: `1. d4 d5 {Claim the centre and stop White from playing e4 at once.}
        2. c4 {The Queen's Gambit. White offers the c-pawn to pull your d-pawn away from the centre.}
        e6 {The Queen's Gambit Declined. Support d5 with a pawn, so you keep a firm foothold in the centre. The price is that your c8 bishop is temporarily shut in.}
        3. Nc3 {Develops and adds a third attacker on d5.}
        Nf6 {Develop and defend d5 a second time.}
        4. cxd5 {The Exchange Variation. White fixes the pawn structure early and plans a queenside "minority attack" with b4-b5.}
        exd5 {Recapture with the pawn. Your c8 bishop's diagonal is now open, which solves Black's usual problem piece.}
        5. Bg5 {Pins your f6 knight against the queen, and prepares to develop calmly.}
        c6 {Support d5 so the knight on f6 is free to move, and give your queen a route to a5 or c7.}
        6. e3 Be7 {Break the pin, so ...Nf6 can move without losing the queen.}
        7. Bd3 {White aims the bishop at your kingside and stops ...Bf5.}
        Nbd7 {Develop towards f8, from where the knight can go to g6 or e6 to defend the king.}
        8. Qc2 {Controls f5 and h7, so ...Bf5 is not possible for now.}
        O-O {King to safety before anything else.}
        9. Nf3 Re8 {Put the rook on the half-open e-file and free f8 for the knight.}
        10. O-O {White castles kingside. The plan is often Rab1, b4 and b5 (the minority attack).}
        Nf8 {The classic regrouping. The knight defends h7, and can come to g6 or e6. Your c8 bishop can now go to g4 or e6.}`,
    },
    {
      name: 'Exchange Variation: Reshevsky (9.Nge2)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 c6 6. e3 Be7 7. Bd3 Nbd7 8. Qc2 O-O
        9. Nge2 {The knight goes to e2 so that f3 is free. White plans f3 and e4 to grab the whole centre, sometimes castling long.}
        Re8 {Same plan as before: the rook on e8 eyes e3 and e4, and frees f8 for the knight.}
        10. O-O {White chooses to castle short and keep f3-e4 in reserve.}
        Nf8 {The knight heads for g6 or e6, and the c8 bishop is free to come out. When White plays f3 and e4, be ready to answer by challenging the centre with ...Ne6 or ...c5.}`,
    },
    {
      name: 'Orthodox: Tartakower Defence (8.Be2, 11.b4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6
        4. Bg5 {The classical main line. White pins the f6 knight, which defends d5.}
        Be7 {Unpin calmly. The bishop on e7 shields the queen.}
        5. e3 O-O {Castle early; you will choose a plan once White has committed.}
        6. Nf3 h6 {Ask the bishop to decide. It must give up the bishop pair with Bxf6 or retreat to h4, and h6 gives your king a bolt-hole.}
        7. Bh4 b6 {The Tartakower Defence. Prepare ...Bb7, so your problem bishop gets the long diagonal instead of being stuck behind e6.}
        8. Be2 Bb7 {The bishop now watches d5 and e4.}
        9. Bxf6 {White swaps the bishop to take control of d5.}
        Bxf6 {Recapture with the bishop. It now has a fine diagonal towards d4 and b2.}
        10. cxd5 exd5 {Recapture with the pawn so you keep a pawn on d5 and open the e-file.}
        11. b4 {White starts a queenside attack, aiming b5 to attack the c-pawn.}
        c5 {Hit back at once. After bxc5 bxc5 you get "hanging pawns" on c5 and d5: two side-by-side pawns that control lots of squares and give your pieces open files.}`,
    },
    {
      name: 'Orthodox: Tartakower Defence (8.cxd5)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6
        8. cxd5 {White releases the tension at once to swap pieces.}
        Nxd5 {Take with the knight. This offers a trade of bishops on e7 and of knights on d5, which frees your cramped position.}
        9. Bxe7 Qxe7 {Recapture with the queen, which also develops it.}
        10. Nxd5 exd5 {Recapture with the pawn. You get a solid pawn on d5 and an open e-file.}
        11. Rc1 {White puts the rook on the half-open c-file to press on c7 and later on c5 if you play ...c5.}
        Be6 {In this exact position, e6 is the best square for the bishop: it guards d5 and supports ...c5. This line was played by Spassky against Fischer in their 1972 world championship match.}`,
    },
    {
      name: 'Anti-Tartakower: Petrosian Variation (7.Bxf6)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6
        7. Bxf6 {White gives up the bishop at once, before you can play ...b6.}
        Bxf6 {You get the bishop pair (two bishops against bishop and knight).}
        8. Rc1 {White puts the rook on the c-file, ready for when lines open.}
        c6 {Firm up d5. You plan to free yourself with ...dxc4 and ...e5.}
        9. Bd3 Nd7 {Develop the knight where it supports ...e5.}
        10. O-O dxc4 {Now that White's bishop has gone to d3, taking on c4 makes it move a second time.}
        11. Bxc4 e5 {The freeing break. It opens the c8 bishop and challenges White's centre, so your two bishops come to life.}`,
    },
    {
      name: 'Orthodox: Tartakower via 3.Nf3 (8.Rc1)',
      pgn: `1. d4 d5 2. c4 e6
        3. Nf3 {White develops the knight first. This often transposes to the same lines as 3.Nc3.}
        Nf6 {Develop and guard d5.}
        4. Nc3 Be7 {Calm development. Against both Bg5 and Bf4 the bishop is well placed on e7.}
        5. Bg5 O-O {Castle; the position can now transpose to the Orthodox with 6.e3 h6 7.Bh4 b6.}
        6. e3 h6 7. Bh4 b6
        8. Rc1 {White puts the rook on the c-file to press on c7 and c5.}
        Bb7 {Develop the bishop to the long diagonal.}
        9. Be2 {White develops and prepares to castle.}
        dxc4 {Exchange on c4 now that the bishop on e2 has to recapture, losing a tempo.}
        10. Bxc4 Nbd7 {Develop the last minor piece and get ready for ...c5, which frees your game.}`,
    },
    {
      name: 'Harrwitz Attack (5.Bf4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3 Be7
        5. Bf4 {White develops the bishop outside the pawn chain, where it cannot be harassed by ...h6.}
        O-O {Castle before striking.}
        6. e3 c5 {With the bishop on f4 instead of g5, the usual reply is to strike at d4 at once.}
        7. dxc5 Bxc5 {Recapture with the bishop. It moves twice, but lands on an active diagonal.}
        8. Qc2 {White prepares to castle long and puts pressure on h7 and c7.}
        Nc6 {Develop with pressure on the centre.}
        9. a3 {White makes room for the bishop and prepares b4.}
        Qa5 {The main line. The queen pins the c3 knight and eyes the a5-e1 diagonal. Later ...Re8 and ...e5 or ...Bd7 complete your development.}`,
    },
    {
      name: 'Exchange Variation (5.cxd5, 6.Bf4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3 Be7
        5. cxd5 exd5 {Recapture with the pawn. The c8 bishop's diagonal is open again.}
        6. Bf4 {In this version White's bishop goes to f4, where it controls e5 and b8.}
        c6 {Support d5 and keep your structure solid.}
        7. Qc2 {White stops your bishop from going to f5.}
        g6 {Take the square back. The pawn on g6 supports ...Bf5 so you can swap off your light-squared bishop.}
        8. e3 Bf5 {Offer a trade of bishops. Your c8 bishop is often your worst piece, while White's d3 bishop is White's best attacker.}
        9. Bd3 Bxd3 {Complete the trade you offered.}
        10. Qxd3 Nbd7 {Develop and get ready to castle. With the light-squared bishops gone, the position is solid and level.}`,
    },
    {
      name: 'Catalan: Open Defence, Classical Line (8.Qxc4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6
        4. g3 {The Catalan. White will put the bishop on g2 to press down the long diagonal on b7 and your queenside.}
        Be7 {Develop and castle quickly, as in the other lines.}
        5. Bg2 O-O {Castle before opening the centre.}
        6. O-O dxc4 {The Open Catalan. Take the pawn: White must spend time winning it back, which gives you time to develop.}
        7. Qc2 {White plans to win back c4 with the queen.}
        a6 {Prepare ...b5, which would keep the pawn or gain space if White takes it back.}
        8. Qxc4 b5 {Gain space with tempo by hitting the queen.}
        9. Qc2 Bb7 {The bishop goes to the long diagonal, where it fights White's g2 bishop.}`,
    },
    {
      name: 'Catalan: Open Defence, Classical Line (8.a4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2 a6
        8. a4 {White stops ...b5 before taking back on c4.}
        Bd7 {Head for c6, where the bishop challenges White's g2 bishop on the long diagonal. It also gains time by attacking the a4 pawn.}
        9. Qxc4 Bc6 {Now the bishop is active and opposes White's Catalan bishop.}
        10. Bg5 {White develops and pins the knight in some lines.}
        a5 {Fix the queenside and claim b4 for your pieces, so White's a4 pawn cannot advance and your bishop on c6 is safe.}`,
    },
  ],
}
