import type { OpeningSource } from '../types'

export const kingsGambit: OpeningSource = {
  id: "kings-gambit",
  name: "King's Gambit",
  eco: "C30–C39",
  side: "white",
  summary:
    "The King's Gambit (1.e4 e5 2.f4) is the classic romantic opening. You offer the f-pawn to lure Black's e-pawn away from the centre, then build a centre with d4 and use the half-open f-file against f7. Engines say Black is fine with exact play, but the positions are sharp, Black must know a lot, and you usually either win the f4 pawn back or keep the initiative while it is out of play.",
  ideas: [
    "2.f4 lures the e5 pawn away, so d4 can follow and you get two central pawns against none.",
    "After ...exf4, 3.Nf3 stops ...Qh4+, and the black pawn on f4 becomes a target for Bxf4, g3 or the f1 rook.",
    "Speed matters: develop fast, castle, and use the f-file and a bishop on c4 against f7 before Black settles down.",
  ],
  lines: [
    {
      name: "Kieseritzky Gambit",
      pgn: `1. e4 {Takes a central square and opens lines for the queen and the f1 bishop.}
        e5 {Black claims an equal share of the centre.}
        2. f4 {The King's Gambit: offer the f-pawn to pull Black's e-pawn away from the centre.}
        exf4 {Black accepts the gambit.}
        3. Nf3 {Develops and stops ...Qh4+.}
        g5 {Black protects the extra f4 pawn with another pawn.}
        4. h4 {Hit the g5 pawn at once, before Black can support it with ...h6 and ...Bg7.}
        g4 5. Ne5 {The Kieseritzky Gambit: the knight jumps to the centre, eyeing g4 and f7.}
        Nf6 {The Berlin Defence to the Kieseritzky: Black counter-attacks e4.}
        6. d4 {Build a centre and open your c1 bishop toward f4.}
        d6 7. Nd3 {The knight retreats, but now it attacks f4.}
        Nxe4 8. Bxf4 {Win the gambit pawn back.}
        Qe7 {The queen lines up against your king: if the e4 knight moves, it gives a discovered check.}
        9. Qe2 {Block the e-file so there is no discovered check. Sharp play follows, often with the kings castled on opposite sides.}`,
    },
    {
      name: "Modern Defence (3...d5)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        d5 {The Modern Defence: Black hits back in the centre instead of holding on to f4.}
        4. exd5 {Take the pawn.}
        Nf6 {Black develops and gets ready to win d5 back.}
        5. Bb5+ {Develop with check before Black can play ...Nxd5.}
        c6 6. dxc6 {Take: Black has to spend a move recapturing.}
        Nxc6 {Black recaptures with development, but the knight is now pinned by your b5 bishop.}
        7. d4 {Take the centre and open your c1 bishop toward f4.}
        Bd6 {Defends the f4 pawn.}
        8. O-O {Castle. Your f1 rook joins the pressure on f4.}
        O-O 9. Nbd2 {The knight heads for c4 to challenge the d6 bishop, which is the main defender of f4.}`,
    },
    {
      name: "Fischer Defence (3...d6)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        d6 {The Fischer Defence: it takes e5 away from your knight, so ...g5 can follow safely.}
        4. Bc4 {Develop and aim at f7.}
        h6 {Black prepares ...g5 and keeps your pieces off g5.}
        5. h4 {Stops ...g5: if 5...g5 6.hxg5 hxg5??, then 7.Rxh8 wins Black's rook.}
        Nf6 6. Nc3 {Develop and protect e4.}
        Nc6 7. d4 {Take the centre. Next comes Bxf4 to win the pawn back.}`,
    },
    {
      name: "Schallopp Defence (3...Nf6)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        Nf6 {The Schallopp Defence: Black develops and attacks e4.}
        4. e5 {Kick the knight to the edge of the board.}
        Nh5 {From h5 the knight still defends the f4 pawn.}
        5. d4 {Take the centre and open your c1 bishop toward f4.}
        d5 {Black blocks the centre.}
        6. Be2 {Attacks the h5 knight, the piece that holds f4.}
        g5 {Black protects f4 with a pawn instead.}
        7. O-O {Castle and add the f1 rook to the pressure on f4. You have a big centre, and Black's knight on h5 is out of play.}`,
    },
    {
      name: "Cunningham Defence (3...Be7)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        Be7 {The Cunningham Defence: Black threatens ...Bh4+, forcing your king to move.}
        4. Bc4 {Develop. If ...Bh4+, your king can step to f1 because the bishop has left it.}
        Nf6 {Attacks e4.}
        5. e5 {Kick the knight.}
        Ng4 {The knight jumps forward, eyeing e3 and f2.}
        6. d4 {Take the centre and open your c1 bishop.}
        d6 {Black attacks e5.}
        7. exd6 {Take, opening the e-file toward Black's king.}
        Bxd6 8. Qe2+ {Check. Black has to spend a move answering it (often ...Qe7 and a queen trade), and Bxf4 will win the pawn back.}`,
    },
    {
      name: "Classical Declined (2...Bc5)",
      pgn: `1. e4 e5 2. f4
        Bc5 {Declined: the bishop covers g1, so you cannot castle short for now. Never 3.fxe5?? Qh4+.}
        3. Nf3 {Develop and stop ...Qh4+.}
        d6 {Supports e5.}
        4. Nc3 {Develop and protect e4.}
        Nf6 5. Bc4 {Aim at f7.}
        Nc6 6. d3 {Support e4 and open your c1 bishop.}
        Bg4 {Pins your f3 knight to the queen.}
        7. Na4 {Go after the c5 bishop and trade it, so you can castle.}
        Bb6 8. Nxb6 {Take it: you win the bishop pair.}
        axb6 9. O-O {Castle now that the c5 bishop has gone. The f-file will open soon.}`,
    },
    {
      name: "Falkbeer Countergambit",
      pgn: `1. e4 e5 2. f4
        d5 {The Falkbeer Countergambit: Black hits back in the centre.}
        3. exd5 {Take.}
        e4 {Black gives up a pawn for a wedge on e4 that cramps your development.}
        4. d3 {Attack the wedge at once, before Black can support it.}
        Nf6 5. dxe4 {Take. You are a pawn up.}
        Nxe4 6. Nf3 {Develop and stop ...Qh4+.}
        Bc5 {Aims at f2, with ideas like ...Nf2 or ...Bf2+.}
        7. Qe2 {Pins the e4 knight against Black's king and covers f2.}`,
    },
    {
      name: "2...Nc6 3...exf4",
      pgn: `1. e4 e5 2. f4
        Nc6 {Black develops before deciding what to do about f4.}
        3. Nf3 {Develop and stop ...Qh4+.}
        exf4 {Black accepts the pawn after all.}
        4. d4 {Take the centre.}
        g5 {Holds f4 and threatens ...g4, kicking your f3 knight.}
        5. d5 {Hit the c6 knight first.}
        g4 {Black counter-attacks your f3 knight.}
        6. dxc6 {Take the knight.}
        gxf3 7. Qxf3 {Take back. Material is level; you have open lines and the f4 pawn is a target. Watch out for ...Qh4+.}`,
    },
  ],
}
