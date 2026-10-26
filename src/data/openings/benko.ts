import type { OpeningSource } from '../types'

export const benko: OpeningSource = {
  id: 'benko',
  name: 'Benko Gambit',
  eco: 'A57–A59',
  side: 'black',
  summary:
    "An ambitious gambit against 1.d4. After 1.d4 Nf6 2.c4 c5 3.d5, Black gives up the b-pawn with 3...b5. If White takes everything, Black gets two half-open files (a and b) for the rooks and a long diagonal for a fianchettoed bishop on g7. The pressure on White's queenside lasts well into the endgame, which is why strong players happily stay a pawn down. Theory sees the gambit as sound but slightly risky.",
  ideas: [
    "After 4.cxb5 a6 5.bxa6 Bxa6, set up the standard formation: ...d6, ...g6, ...Bg7, ...O-O, ...Nbd7, ...Qa5 and ...Rfb8. Every piece then points at White's queenside, especially the a2 and b2 pawns.",
    "If White plays e4, swap the light-squared bishops with ...Bxf1. White's king loses the right to castle and must walk to g2, and your knights get the light squares (c4, b3).",
    "When White declines the gambit (4.Nf3, 4.a4, 5.e3, 5.f3, 5.b6), keep the same idea: open the a- and b-files, fianchetto on g7 and pressure the queenside with ...Ba6, ...Qa5 or ...Qb6.",
  ],
  lines: [
    {
      name: 'Fully Accepted: Fianchetto Variation (8.g3)',
      pgn: `1. d4 Nf6 {Develop and control e4.}
        2. c4 c5 {Challenge d4 at once and tempt White to push d5.}
        3. d5 {White grabs space. Taking on c5 with 3.dxc5 is harmless.}
        b5 {The Benko Gambit. Offer the b-pawn to undermine the c4 pawn that supports d5 and open queenside files for your rooks.}
        4. cxb5 {White accepts the pawn.}
        a6 {Offer a second pawn. If White takes it, your a-file and b-file are both open.}
        5. bxa6 {The fully accepted line. White is a pawn up.}
        Bxa6 {Recapture with the bishop. On a6 it aims at f1, so White's kingside bishop has trouble developing and White's king has trouble castling.}
        6. Nc3 d6 {Control e5 and c5 and prepare ...g6 and ...Bg7.}
        7. Nf3 g6 {Prepare the bishop fianchetto: the bishop on g7 will hit the long diagonal down to a1.}
        8. g3 {White fianchettoes too, so the king can castle after the bishop moves to g2.}
        Bg7 {The bishop on the long diagonal is the heart of the Benko. It points at c3, b2 and a1.}
        9. Bg2 O-O {Castle. Your king is safe and the f8 rook will head to b8.}
        10. O-O Nbd7 {The knight heads for b6, e5 or c5 and frees the queen's path.}
        11. Qc2 {White guards the queenside and prepares to develop the c1 bishop.}
        Qa5 {The queen joins the queenside pressure, eyeing a2 and c3.}
        12. Rd1 Rfb8 {The typical set-up: both rooks on the open a- and b-files. White is a pawn up but finds it hard to unravel the queenside.}`,
    },
    {
      name: 'Fully Accepted: King Walk (7.e4 Bxf1 8.Kxf1)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6
        7. e4 {White builds a big centre. But the f1 bishop now blocks the king's path.}
        Bxf1 {Swap the bishops. White has to take with the king and loses the right to castle.}
        8. Kxf1 g6 {Fianchetto as usual. The bishop on g7 is now your best minor piece.}
        9. Nf3 Bg7 {The bishop lands on the long diagonal, pointing at White's queenside.}
        10. g3 O-O {Castle. White will tuck the king away on g2 by hand.}
        11. Kg2 {The "King Walk": White's king reaches safety in two moves instead of castling.}
        Nbd7 {Develop. The knight can go to b6, e5 or c5.}
        12. h3 {Gives the king a square and stops ...Ng4.}
        Qa5 {The queen heads for the queenside pressure.}
        13. Re1 {White prepares e5 to open the centre.}
        Rfb8 {Rooks to the open files: the classic Benko set-up, with pressure on b2 and a2.}`,
    },
    {
      name: 'Fully Accepted: Nd2 Variation (8.Nd2)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. Nf3 g6
        8. Nd2 {The knight heads for c4, where it blocks the c-file and attacks d6 and b6.}
        Bg7 {Fianchetto first; the bishop's diagonal is the key.}
        9. e4 Bxf1 {Swap bishops so White loses the right to castle.}
        10. Kxf1 O-O {Castle. White's king will need g3 and Kg2, and your rooks and queen will come to the queenside.}`,
    },
    {
      name: 'Accepted: Modern Variation (5.e3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. e3 {White does not take on a6. The e3 move opens the f1 bishop so it can recapture on b5 later.}
        d6 {Develop calmly. You will take back the pawn on b5 once White has committed.}
        6. Nc3 g6 {Fianchetto, as in all Benko lines.}
        7. Nf3 Bg7 {The bishop takes up the long diagonal towards b2.}
        8. Be2 O-O {Castle before opening the queenside.}
        9. O-O axb5 {Now take the pawn. The a-file opens for your rook.}
        10. Bxb5 Ba6 {Offer a bishop swap: White's b5 bishop is a good defender of the queenside.}
        11. Bxa6 Nxa6 {Recapture with the knight. Next ...Qb6 and ...Rfb8 put pressure on b2, and the knight can go to c7 or b4.}`,
    },
    {
      name: 'Accepted: Dlugy Variation (5.f3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. f3 {White supports e4 and keeps the knight from g4.}
        d6 {Develop solidly and keep the a6 pawn in place for now. Taking on b5 at once is also possible.}
        6. e4 g6 {Prepare the fianchetto.}
        7. Nc3 Bg7 {The bishop on the long diagonal points at c3 and b2.}
        8. Bd3 O-O {Castle before opening the queenside.}
        9. Nge2 Nbd7 {Develop and head for e5.}
        10. O-O Ne5 {The knight hits the d3 bishop, White's best defender of the light squares.}
        11. Be3 Nxd3 {Take the bishop. You get the two bishops, and White has fewer pieces to defend b5 and the light squares.}
        12. Qxd3 axb5 {Now open the a-file.}
        13. Nxb5 Ba6 {Pin the b5 knight to the queen. Your pieces are active on the queenside, and the pawn deficit is gone.}`,
    },
    {
      name: 'Accepted: Pawn Return Variation (5.b6)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. b6 {White gives the pawn back to keep the queenside closed and avoid your open files.}
        Qxb6 {Take back the pawn. Material is level, and your queen is active on b6.}
        6. Nc3 d6 {Control e5 and c5 and open the c8 bishop.}
        7. e4 g6 {Prepare the fianchetto.}
        8. Nf3 Bg7 {The usual fianchetto: the bishop aims at b2.}
        9. Be2 O-O {Castle; your pieces will now turn to the queenside.}
        10. O-O a5 {Move the a-pawn out of the way so the bishop can go to a6 and swap off White's good bishop.}`,
    },
    {
      name: 'Zaitsev System (5.Nc3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. Nc3 {White develops and hopes to keep the b5 pawn with the knight.}
        axb5 {Take the pawn back at once.}
        6. e4 {White gives up the pawn to build a centre and play Nb5.}
        b4 {Gain time by hitting the c3 knight.}
        7. Nb5 d6 {Stop the knight jumping to c7 or d6, and open the c8 bishop.}
        8. Bd3 g6 {Fianchetto. The knight on b5 can be hit later by ...Ba6.}
        9. Nf3 Bg7 {The bishop eyes the long diagonal.}
        10. O-O O-O {Castle. Your pawn on b4 cramps White and you have easy play.}`,
    },
    {
      name: 'Declined: Main Line (4.Nf3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5
        4. Nf3 {The simplest way to decline: White develops and lets you take on c4.}
        bxc4 {Take the pawn. White will win it back, but your b-file opens.}
        5. Nc3 d6 {Control e5 and c5 and prepare ...g6.}
        6. e4 g6 {Prepare the fianchetto.}
        7. Bxc4 Bg7 {White has regained the pawn, but your bishop on g7 is strong and the b-file is yours.}
        8. O-O O-O {Castle. You get a Benoni-style game with active play on the b-file.}`,
    },
    {
      name: 'Declined: Sosonko Variation (4.a4)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5
        4. a4 {White stops the queenside from opening by hitting b5.}
        bxc4 {Take on c4. White will spend time regaining the pawn.}
        5. Nc3 d6 {Control e5 and c5 so White's centre cannot advance with gain of time.}
        6. e4 g6 {Prepare the fianchetto. Developing the bishop to a6 to keep the c4 pawn is a sharper option.}
        7. Bxc4 Bg7 {Fianchetto. The a4 pawn has weakened b4 and b3 for your pieces.}
        8. Nf3 O-O {Castle. Plans include ...Nbd7, ...Nb6 and ...Ba6 to trade White's c4 bishop.}`,
    },
  ],
}
