import type { OpeningSource } from '../types'

export const grunfeld: OpeningSource = {
  id: "grunfeld",
  name: "Grünfeld Defense",
  eco: "D70–D99",
  side: "black",
  summary:
    "A dynamic, counter-attacking defence. Black hits the centre at once with ...d5, often swaps it off, and lets White build a big pawn centre with e4 and d4. Black does not try to block that centre. Instead, Black attacks it from the side with the g7 bishop, ...c5, ...Nc6 and ...Bg4, aiming to make the big centre a target rather than a strength.",
  ideas: [
    "Put the bishop on g7 (a fianchetto: developing a bishop on the long diagonal after ...g6). From there it pressures d4 and c3 from long range.",
    "Swap your d-pawn for White's c-pawn, then attack the d4 pawn with ...c5, ...Nc6 and ...Bg4 (which removes or pins a defender).",
    "Look for active queen moves such as ...Qa5, and remember that ...cxd4 at the right moment opens the c-file and the long diagonal.",
  ],
  lines: [
    {
      name: "Exchange: Modern (7.Nf3 and 8.Rb1)",
      pgn: `1. d4 Nf6 {Develop and control e4 without committing your pawns yet.}
        2. c4 g6 {Prepare ...Bg7, which puts the bishop on the long diagonal towards d4.}
        3. Nc3 d5 {The Grünfeld. Strike the centre at once, before White can play e4.}
        4. cxd5 Nxd5 {Take back with the knight. White will gain time by attacking it, but your plan is to undermine White's centre.}
        5. e4 Nxc3 {Swap knights before e4 can kick yours around. After bxc3, White's centre is big but the c3 and d4 pawns become targets.}
        6. bxc3 Bg7 {The bishop goes to the long diagonal, where it aims at d4 and c3.}
        7. Nf3 {The modern setup. The knight defends d4 and e5.}
        c5 {Hit d4 a second time. This is the typical Grünfeld strike.}
        8. Rb1 {White moves the rook off the long diagonal, away from your g7 bishop, and puts it on the b-file to hit b7.}
        O-O {Castle. Speed matters more than the b7 pawn.}
        9. Be2 cxd4 {Release the tension now, so the queen check on a5 works.}
        10. cxd4 Qa5+ {Check. White has to block, and your queen can then take on a2.}
        11. Bd2 Qxa2 {Win a pawn. Your a-pawn is now a passed pawn: no white pawn can stop it.}
        12. O-O {White has given a pawn for active pieces, the open b-file and the d4-d5 push.}
        Bg4 {Develop with pressure. The bishop hits the f3 knight, which defends d4 and the e5 square.}`,
    },
    {
      name: "Exchange: Classical (7.Bc4)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7
        7. Bc4 {The Classical Exchange. The bishop is active on c4, and the knight will go to e2 so ...Bg4 cannot pin it to the queen.}
        c5 {Hit d4.}
        8. Ne2 Nc6 {Pile more pressure on d4.}
        9. Be3 O-O {Castle. Your king is safe behind the g7 bishop.}
        10. O-O Bg4 {Hit the e2 knight. The idea is to provoke f3, which weakens the squares around White's king.}
        11. f3 Na5 {Attack the c4 bishop, White's best attacking piece.}
        12. Bd3 {The bishop retreats. The sharp alternative 12.Bxf7+ is the Seville Variation.}
        cxd4 {Swap on d4 to open the c-file.}
        13. cxd4 Be6 {The bishop takes control of d5 and eyes the a2 pawn. Watch for White's d4-d5 push. In theory Black often answers with ...Bxa1, giving up the bishop for the rook.}`,
    },
    {
      name: "Russian System: Hungarian (7...a6)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Nf3 Bg7 {Develop the bishop to the long diagonal.}
        5. Qb3 {The Russian System. The queen attacks d5.}
        dxc4 {Give up d5 for White's c-pawn. White's queen has to spend a move recapturing.}
        6. Qxc4 O-O {Castle. White's queen is exposed on c4, and you will hit it soon.}
        7. e4 {White has the big pawn centre.}
        a6 {The Hungarian Variation. Prepare ...b5, which gains space with tempo on the queen.}
        8. Be2 b5 {Kick the queen and grab queenside space.}
        9. Qb3 c5 {Strike d4 at once. Next ...Bb7 hits e4.}`,
    },
    {
      name: "4.Bf4 main line (5...c5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Bf4 {White develops the bishop before e3 and aims at c7.}
        Bg7 {Develop onto the long diagonal.}
        5. e3 c5 {Strike d4 before White finishes developing.}
        6. dxc5 Qa5 {Pin the c3 knight to the king, and prepare to win back c5.}
        7. Rc1 dxc4 {Take on c4. Both pawns will come back.}
        8. Bxc4 O-O {Castle before collecting the pawn.}
        9. Nf3 Qxc5 {Material is level again, and your queen hits the c4 bishop.}
        10. Bb3 Nc6 {Develop. Your pieces have good squares, and ...Qa5, ...Bf5 or ...Rd8 can follow.}`,
    },
    {
      name: "4.Bg5 (Stockholm Variation)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Bg5 {White threatens Bxf6 and then cxd5, winning the d5 pawn.}
        Ne4 {Attack the bishop and the c3 knight at the same time.}
        5. Bh4 Nxc3 {Swap knights to give White doubled c-pawns.}
        6. bxc3 dxc4 {Grab a pawn while White's pawns are broken.}
        7. e3 Be6 {Protect the c4 pawn. You are a pawn up, and White has the centre and quick development in return.}`,
    },
    {
      name: "Slow System (4.Nf3 Bg7 5.e3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7
        5. e3 {The Slow System. White protects d4 solidly but shuts in the c1 bishop.}
        O-O {Castle first and see how White sets up.}
        6. Be2 c5 {Hit d4, using your g7 bishop on the long diagonal.}
        7. O-O cxd4 {Swap on d4, so White has to recapture with a pawn.}
        8. exd4 Nc6 {Pile up on d4 with the knight and the g7 bishop. ...Bg4 can follow to pin the f3 knight that defends it.}`,
    },
    {
      name: "Fianchetto (3.g3) with 6.e4",
      pgn: `1. d4 Nf6 2. c4 g6
        3. g3 {White also fianchettoes, and the g2 bishop aims at d5 and b7.}
        Bg7 {Develop and castle soon.}
        4. Bg2 d5 {The Grünfeld strike, this time against a fianchetto.}
        5. cxd5 Nxd5 {Take back with the knight, aiming at White's centre.}
        6. e4 {White gains a tempo by kicking your knight.}
        Nb6 {Retreat to b6, where the knight watches d5 and c4.}
        7. Ne2 c5 {Hit d4, which your g7 bishop also attacks.}
        8. d5 {White pushes past to keep the long diagonal closed.}
        e6 {Undermine the d5 pawn straight away.}
        9. O-O O-O {Castle. Next ...exd5 opens the centre, and ...Na6 heads for b4 or c7 to attack d5.}`,
    },
    {
      name: "3.f3 (Anti-Grünfeld)",
      pgn: `1. d4 Nf6 2. c4 g6
        3. f3 {White prepares e4 with full pawn support, as in the Sämisch King's Indian.}
        d5 {Strike at once, before White can play e4.}
        4. cxd5 Nxd5 {Take back with the knight.}
        5. e4 Nb6 {Retreat to b6. From there the knight hits c4 and d5.}
        6. Nc3 Bg7 {The bishop goes to the long diagonal and aims at d4.}
        7. Be3 O-O {Castle. White is preparing to castle long, so get your king safe first.}
        8. Qd2 {White plans to castle long and attack with h4-h5.}
        Nc6 {Develop and pressure d4.}
        9. O-O-O e5 {Strike the centre. With White's king on the queenside, opening lines in the middle favours you.}
        10. d5 Nd4 {The knight lands on a strong central square. If White takes it with the bishop, ...exd4 hits the c3 knight and opens the e-file.}`,
    },
  ],
}
