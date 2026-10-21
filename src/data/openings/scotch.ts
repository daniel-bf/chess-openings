import type { OpeningSource } from '../types'

export const scotch: OpeningSource = {
  id: "scotch",
  name: "Scotch Game",
  eco: "C44–C45",
  side: "white",
  summary:
    "The Scotch (1.e4 e5 2.Nf3 Nc6 3.d4) opens the centre on move three instead of building up slowly. After 3...exd4 4.Nxd4 you have a knight on a fine central square and a pawn on e4, while Black has no pawn in the centre at all. Kasparov brought it back to top level: the positions are open and clear, and you play for quick development and pressure along the d- and e-files.",
  ideas: [
    "Trade your d-pawn for Black's e-pawn: you keep the e4 pawn in the centre, Black does not.",
    "Nxc6 is often the key decision: after ...bxc6 Black's pawns are broken, after ...dxc6 the queens often come off.",
    "Watch f2 and e4: Black's counterplay usually comes from ...Bc5, ...Qf6 or ...Qh4 aimed at those points.",
  ],
  lines: [
    {
      name: "4...Nf6: Mieses Variation",
      pgn: `1. e4 {Takes a central square and opens lines for the queen and the f1 bishop.}
        e5 {Black claims an equal share of the centre.}
        2. Nf3 {Develops with a threat: the e5 pawn is attacked.}
        Nc6 {Defends e5.}
        3. d4 {The Scotch Game: you open the centre straight away.}
        exd4 {Black takes, since e5 was attacked twice and defended only once.}
        4. Nxd4 {Take back with the knight. It is strong on d4, and your e4 pawn is free to advance.}
        Nf6 {The Schmidt Variation: Black develops and attacks e4.}
        5. Nxc6 {Trade knights first, so that Black's pawns get damaged.}
        bxc6 6. e5 {Kick the f6 knight away from its good square.}
        Qe7 {Attacks e5 and pins it to your king on the e-file.}
        7. Qe2 {Blocks the e-file and defends e5.}
        Nd5 8. c4 {Kick the knight off its central square.}
        Ba6 {Pins your c4 pawn to the queen on e2.}
        9. b3 {Supports c4 so the pin costs nothing. This is the Mieses main line: you have space, Black has active pieces.}`,
    },
    {
      name: "4...Nf6 5...dxc6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6
        dxc6 {Black opens lines for the bishops and threatens ...Qxd1+ followed by ...Nxe4.}
        6. Qxd8+ {Trade queens with check: Black's king loses the right to castle.}
        Kxd8 7. Nc3 {Develops and defends e4.}
        Bb4 {Pins the knight to your king, so e4 is attacked again.}
        8. Bd2 {Breaks the pin. You have an easy endgame to play, with a healthy kingside pawn majority.}`,
    },
    {
      name: "4...Bc5 5.Nxc6 Qf6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Bc5 {The Classical Variation: the bishop attacks the d4 knight.}
        5. Nxc6 {Trade the attacked knight off.}
        Qf6 {Threatens ...Qxf2 mate, with the queen and the c5 bishop both hitting f2.}
        6. Qd2 {Defends f2. It looks clumsy, but the queen will move again soon.}
        dxc6 7. Nc3 {Develops and defends e4.}
        Be6 8. Na4 {Attacks the c5 bishop to win the bishop pair.}
        Bd4 {The bishop sidesteps to a strong central square, protected by the queen.}
        9. Bd3 {Develop and get ready to castle. Later c3 will chase the d4 bishop away.}`,
    },
    {
      name: "4...Bc5 5...bxc6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6
        bxc6 {Black takes toward the centre.}
        6. Bd3 {Develops and protects e4.}
        Qh4 {Attacks f2 together with the c5 bishop, and also eyes e4.}
        7. Qe2 {Defends both f2 and e4.}
        Nf6 8. h3 {Stops ...Ng4, which would hit f2 and h2 again, and prepares to castle. Black's broken queenside pawns are a long-term target.}`,
    },
    {
      name: "4...Qh4 Steinitz",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Qh4 {The Steinitz Variation: the queen attacks e4 straight away.}
        5. Nc3 {Defends e4 with a developing move.}
        Bb4 {Pins the knight, so e4 hangs again.}
        6. Be2 {A pawn sacrifice: you develop and prepare to castle instead of defending e4.}
        Qxe4 7. Nb5 {Threatens Nxc7+, forking the king and rook.}
        Bxc3+ 8. bxc3 {Take back. Your doubled c-pawns matter less than the open b-file and your lead in development.}
        Kd8 {The only safe way to cover c7, but Black's king is stuck in the centre.}
        9. O-O {Castle. Your pieces will use the open e-file and diagonals against Black's king on d8.}`,
    },
    {
      name: "4...Nxd4 5...Qf6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Nxd4 {Black trades knights, but this brings your queen to a great central square.}
        5. Qxd4 {The queen is safe here: Black has no easy way to chase it.}
        Qf6 {Black offers a queen trade to take the sting out of your lead in development.}
        6. e5 {Gain space with tempo by kicking the queen.}
        Qb6 {Black still wants the trade.}
        7. Qxb6 {Trade: Black must take back with the a-pawn and gets doubled b-pawns.}
        axb6 8. Nc3 {Develop. You have more space thanks to the e5 pawn and a lead in development.}`,
    },
    {
      name: "4...Bb4+",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Bb4+ {A check that mainly wants to provoke c3.}
        5. c3 {Block with a pawn. This gains time, because the bishop has to move again.}
        Be7 6. Nxc6 {Trade to damage Black's pawns.}
        bxc6 7. Bd3 {Develop and protect e4.}
        d6 8. O-O {Castle. You have more space and easier development.}`,
    },
    {
      name: "3...d6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4
        d6 {A Philidor-style defence: Black holds e5 with a pawn instead of giving up the centre.}
        4. Bb5 {With the d-pawn gone from d7, this pins the c6 knight to Black's king and adds pressure on e5. It is the Old Steinitz Ruy Lopez by another move order.}
        Bd7 {Breaks the pin.}
        5. Nc3 {Develop and protect e4.}
        exd4 {Black gives up the centre after all.}
        6. Nxd4 {Take back with the knight.}
        Nf6 7. O-O {Castle.}
        Be7 8. Re1 {Protect e4, so your d4 knight and b5 bishop are free to act. You keep more space with e4 against d6.}`,
    },
  ],
}
