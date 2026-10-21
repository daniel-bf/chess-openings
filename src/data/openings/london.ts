import type { OpeningSource } from '../types'

export const london: OpeningSource = {
  id: 'london',
  name: 'London System',
  eco: 'D02, A46',
  side: 'white',
  summary:
    "A \"system\": White sets up the same way against almost anything, with d4, Bf4, e3, Nf3, c3, Nbd2 and Bd3. The key detail is getting the dark-squared bishop out to f4 before e3 shuts it in. The result is a solid pawn triangle on c3-d4-e3, a safe king and a slow build-up toward Ne5 and a kingside attack.",
  ideas: [
    "Bf4 first, then e3: the bishop must leave c1 before the e-pawn blocks it in. If Black challenges it with ...Bd6, step back to g3 and meet ...Bxg3 with hxg3, which opens the h-file for your rook.",
    "Build the c3-d4-e3 pawn triangle so d4 never falls, then Bd3, Nbd2 and castle. Once the bishop has left c1, b2 is weaker, so watch for ...Qb6.",
    "Use the e5 square: a knight on e5, backed by d4, supports kingside play with Qf3, h4 or g4.",
  ],
  lines: [
    {
      name: 'Main line: ...e6, ...c5, ...Bd6',
      pgn: `1. d4 {Puts a pawn in the centre and opens the c1 bishop.}
        d5 2. Bf4 {The London: the bishop comes out now, before e3 would lock it inside the pawn chain.}
        Nf6 3. e3 {Supports d4 and opens the f1 bishop.}
        e6 4. Nf3 {Develops and controls e5, the square White would like to use later.}
        c5 {Black attacks d4 from the side, the typical way to challenge the London.}
        5. c3 {Completes the c3-d4-e3 pawn triangle, so if Black ever takes on d4 White recaptures with a pawn.}
        Nc6 6. Nbd2 {The knight goes to d2, not c3, where it would block the c-pawn. From d2 it controls e4 and can support Ne5.}
        Bd6 {Black offers to trade off White's good bishop.}
        7. Bg3 {Keep the bishop. If ...Bxg3, hxg3 opens the h-file for White's rook, which helps a kingside attack.}
        O-O 8. Bd3 {Develops toward Black's king: the bishop aims at h7.}
        b6 9. Ne5 {The classic London knight: strong on e5, supported by d4. Next can come Qf3, f4 or castling, aiming at the kingside.}`,
    },
    {
      name: '2...c5 and ...Qb6: the 6...Bf5? trap',
      pgn: `1. d4 d5 2. Bf4
        c5 {Black attacks d4 straight away.}
        3. e3 {Supports d4. The f1 bishop is now free too.}
        Nc6 4. c3 {Supports d4 with a second pawn.}
        Qb6 {The queen attacks b2, which lost its defender when the bishop left c1.}
        5. Qb3 {Defends b2 and offers a queen trade. If ...Qxb3 axb3, the a-file opens for White's rook.}
        c4 {Black avoids the trade and gains queenside space with tempo on the queen.}
        6. Qc2 {Steps away while still guarding b2.}
        Bf5 {A natural-looking attack on the queen, but here it is a mistake: with no knight on f6, d5 will be unprotected.}
        7. Qxf5 {Take the bishop! It had no defender.}
        Qxb2 {Black grabs b2 and threatens the a1 rook and ...Qc1+.}
        8. Qxd5 {Takes the loose d5 pawn and centralises the queen, which also eyes c4.}
        Nf6 9. Qxc4 {White is a piece up. After ...Qc1+ the king steps to e2 and is safe enough.}`,
    },
    {
      name: "Against the King's Indian setup",
      pgn: `1. d4
        Nf6 2. Bf4 {The London works against 1...Nf6 as well: the same setup follows.}
        g6 {Black prepares ...Bg7, the King's Indian setup.}
        3. e3 {Supports d4 and opens the f1 bishop.}
        Bg7 4. Nf3 {Develops and controls e5, slowing down Black's ...e5 break.}
        O-O 5. Be2 {Against a fianchetto the bishop has little to do on d3, so it goes to e2 where it covers g4 and lets White castle.}
        d6 6. h3 {Makes an escape square on h2, so if Black plays ...Nh5 or ...e5 the bishop can retreat there. It also keeps ...Ng4 and ...Bg4 out.}
        c5 7. c3 {Keeps d4 protected by a pawn against ...c5 and ...Nc6.}
        Nc6 8. O-O {King to safety. White is solid and waits to see whether Black goes for ...e5 or queenside play.}`,
    },
    {
      name: '1...Nf6 2...e6 transposing',
      pgn: `1. d4 Nf6 2. Bf4
        e6 3. e3 {Supports d4 and frees the f1 bishop, just as in the main line.}
        c5 4. c3 {The pawn triangle again, holding d4 against ...c5.}
        Nc6 5. Nd2 {Develops the queenside knight first so the g1 knight stays flexible. Nd2 also stops ...Ne4.}
        d5 6. Ngf3 {Now Black has committed to ...d5, so the knight goes to f3. This is the main-line London position.}
        Bd6 7. Bg3 O-O 8. Bd3 {The same structure as the main line.}`,
    },
    {
      name: '2...Bf5 mirror',
      pgn: `1. d4 d5 2. Bf4
        Bf5 {Black copies White's bishop move.}
        3. e3 {Supports d4 and opens the f1 bishop, which will challenge Black's bishop from d3.}
        e6 4. Nf3 {Develops and controls e5.}
        Nf6 5. Bd3 {Offers to trade the light-squared bishops. Black's f5 bishop is his best minor piece, so swapping it is good for White.}
        Bxd3 6. Qxd3 {Recaptures and develops the queen, which now controls e4 and b5.}
        c5 7. c3 {Supports d4 against the ...c5 attack.}
        Nc6 8. Nbd2 {Develops and supports a later e4 push.}
        Bd6 9. Bg3 {The usual answer to ...Bd6: if ...Bxg3, hxg3 opens the h-file.}`,
    },
    {
      name: '3...Bf5 with 4.c4',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        Bf5 {Black develops actively, but now b7 has no defender.}
        4. c4 {Attacks d5 and opens the d1-b3 diagonal, so the queen can go to b3 and hit b7.}
        e6 5. Nc3 {Adds pressure on d5.}
        c6 6. Qb3 {Attacks b7, which the f5 bishop no longer guards.}
        Qb6 {Black defends b7 and offers a queen trade.}
        7. c5 {Pushes past with tempo on the queen and gains queenside space.}
        Qxb3 8. axb3 {Recaptures toward the centre. The a-file opens for White's rook and the b-pawns support b4-b5 to attack Black's queenside.}`,
    },
    {
      name: '3...c5 4.c3 transposing',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        c5 4. c3 {Answers ...c5 by supporting d4 with a second pawn.}
        Nc6 5. Nd2 {Develops and keeps the g1 knight flexible. It also covers e4.}
        e6 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 {The main London structure again.}`,
    },
    {
      name: 'Against the Dutch (1...f5)',
      pgn: `1. d4
        f5 {The Dutch: Black fights for the e4 square with a pawn.}
        2. Bf4 {The London setup works here too.}
        Nf6 3. e3 {Supports d4 and opens the f1 bishop.}
        e6 4. Nf3 {Develops and adds control of e5.}
        b6 {Black puts his bishop on b7 to add another piece aimed at e4.}
        5. h3 {Makes a retreat square on h2 for the bishop and keeps Black's knight and bishop off g4.}
        Bb7 6. Nbd2 {Develops and adds control of e4.}
        Be7 7. c3 {Pawn triangle: d4 is safe.}
        O-O 8. Bd3 {Bishop aimed at f5 and Black's slightly loosened kingside. Ideas include Qe2, e4 to open the centre, or g4 to attack.}`,
    },
    {
      name: '2...e6 with ...Bd6',
      pgn: `1. d4 d5 2. Bf4
        e6 3. e3 {Solid: supports d4 and frees the f1 bishop.}
        Bd6 {Black challenges the bishop at once.}
        4. Bg3 {Keeps the bishop. If ...Bxg3, hxg3 opens the h-file.}
        Nf6 5. Nd2 {Develops while keeping the g1 knight flexible.}
        c5 6. c3 {Supports d4 against ...c5.}
        Nc6 7. Bd3 {Bishop aimed at h7.}
        O-O 8. Ngf3 {Standard setup reached. Ne5 is coming.}`,
    },
    {
      name: '3...c6 4.Nf3 Bf5',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        c6 {A solid setup: c6 backs up d5 and opens the d8-a5 diagonal for the queen, so ...Qb6 is possible.}
        4. Nf3 {Simple development. Because ...c6 makes ...Qb6 easy, the 4.c4 and Qb3 idea is less effective here.}
        Bf5 5. Bd3 {Offers to trade bishops, removing Black's best minor piece.}
        Bxd3 6. Qxd3 {Recaptures, developing the queen toward e4.}
        e6 7. O-O {King to safety.}
        Nbd7 8. Nbd2 {Supports e4.}
        Be7 9. e4 {Opens the centre now that White is fully developed. The queen on d3 and the d2 knight both support it.}`,
    },
    {
      name: '1...Nf6 2...d6 setup',
      pgn: `1. d4 Nf6 2. Bf4
        d6 {Black prepares ...e5 to attack the bishop and the d4 pawn.}
        3. e3 {Supports d4 and opens the f1 bishop.}
        g6 4. Nf3 {Controls e5, making ...e5 harder.}
        Bg7 5. Be2 {Against a fianchetto the bishop is better on e2 than d3; it covers g4.}
        O-O 6. h3 {Same plan as against the King's Indian setup: a retreat square on h2 for the bishop.}`,
    },
  ],
}
