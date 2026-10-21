import type { OpeningSource } from '../types'

export const frenchAdvanceWhite: OpeningSource = {
  id: 'french-advance-white',
  name: 'French Advance (as White)',
  eco: 'C02',
  side: 'white',
  summary:
    "In the Advance Variation (1.e4 e6 2.d4 d5 3.e5) you push past Black's d5 pawn and build a pawn chain d4-e5 that cramps Black's kingside. Black will attack the base of the chain with ...c5 and pile up on d4 with ...Nc6, ...Qb6 and a knight on f5. Your job is to keep d4 firmly defended (c3, Nf3, sometimes Na3-c2 or b4 and Bb2) and to use your extra space for the kingside.",
  ideas: [
    'Defend the base of the chain: d4 is what Black attacks, so c3, Nf3, Be2 and sometimes Na3-c2 or Be3 keep it safe.',
    'Black\'s light-squared bishop on c8 is shut in by its own e6 pawn. Black often tries ...Bd7-b5 or ...b6 and ...Ba6 to swap it off.',
    'Against ...Qb6 the a3 and b4 plan gains queenside space and puts your bishop on b2, where it defends d4.',
  ],
  lines: [
    {
      name: 'Main Line: 6.a3 c4',
      pgn: `1. e4 {Takes a central square and opens lines for the queen and the f1 bishop.}
        e6 {The French Defence. Black prepares ...d5 to challenge e4.}
        2. d4 {Builds a full pawn centre.}
        d5 {Black attacks e4.}
        3. e5 {The Advance Variation. You gain space and cramp Black's kingside: the knight cannot use f6.}
        c5 {The standard break. Black attacks d4, the base of your pawn chain.}
        4. c3 {Supports d4 with a pawn, so that after ...cxd4 you recapture with the c-pawn.}
        Nc6 {Adds a second attacker to d4.}
        5. Nf3 {Develops and defends d4 again.}
        Qb6 {The queen joins the attack on d4 and also hits b2.}
        6. a3 {The Main Line. You prepare b4, which gains queenside space and makes room for the bishop on b2.}
        c4 {Black closes the queenside so that b4 can be met by ...cxb3 en passant.}
        7. Nbd2 {Develops and keeps the b3 square under control, so Black's knight cannot settle there. b4 is now met by ...cxb3 and Nxb3.}
        Na5 {The knight eyes b3, a hole in your camp.}
        8. Rb1 {Protects b2 from the queen, so you can play b4 or g3 and Bh3 next.}`,
    },
    {
      name: 'Main Line: 6.a3 Bd7 7.b4',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3
        Bd7 {Black develops and prepares ...Rc8 to use the c-file.}
        7. b4 {Gain space on the queenside and stop ...c4 from fixing your pawns.}
        cxd4 8. cxd4 {Recapture with the pawn. The c-file is now open.}
        Rc8 {Black's rook goes to the open c-file to pressure c3 and c2.}
        9. Bb2 {The bishop defends d4 and later supports b4-b5.}`,
    },
    {
      name: 'Lputian Variation: 6.a3 Nh6',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3
        Nh6 {The Lputian Variation. The knight heads for f5 to hit d4. Taking it with Bxh6 is good for Black, who gets the g-file and the bishop pair.}
        7. b4 {Carry on with your plan: gain queenside space and prepare Bb2 to protect d4.}
        cxd4 8. cxd4 {Recapture with the pawn.}
        Nf5 {The knight reaches f5 and adds pressure on d4.}
        9. Bb2 {Defends d4 a third time. Later you can chase the knight with g4.}`,
    },
    {
      name: 'Euwe Variation: 5...Bd7 6.Be2',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3
        Bd7 {The Euwe Variation. Black waits with the queen and develops first.}
        6. Be2 {A flexible move. Against ...Bd7 the a3 plan is less useful, so you develop and get ready to castle.}
        Nge7 {The knight heads for f5 to attack d4.}
        7. Na3 {The knight goes to c2, where it defends d4 from a safe square.}
        cxd4 8. cxd4 {Recapture with the pawn.}
        Nf5 {Now d4 is attacked by the knights on c6 and f5.}
        9. Nc2 {The knight guards d4 and also covers e3 and b4.}
        Qb6 10. O-O {Castle. d4 is held by the queen, the f3 knight and the c2 knight.}`,
    },
    {
      name: 'Paulsen Attack: 5...Nge7 6.Na3',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3
        Nge7 {The knight heads for f5 to hit d4 straight away.}
        6. Na3 {The same idea as against 5...Bd7: the knight goes to c2 to guard d4.}
        cxd4 7. cxd4 {Recapture with the pawn.}
        Nf5 {The knight attacks d4.}
        8. Nc2 {Holds d4 and frees you to develop the f1 bishop and castle.}`,
    },
    {
      name: 'Paulsen Attack: 5...Nh6 6.Bd3',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3
        Nh6 {The knight heads for f5 by the edge route.}
        6. Bd3 {Covers f5, so when the knight arrives you can take it.}
        cxd4 7. cxd4 {Recapture with the pawn.}
        Nf5 8. Bxf5 {Remove the knight that attacks d4.}
        exf5 {Black's e6 pawn moves to f5. The c8 bishop is still blocked by the d5 pawn.}
        9. Nc3 {Develops and attacks d5. Next O-O and Ne2-f4 aim at the weak d5 pawn.}`,
    },
    {
      name: 'Wade Variation: 4...Qb6 5.Nf3 Bd7',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3
        Qb6 {Black brings the queen out first, aiming at d4 and b2.}
        5. Nf3 {Develops and protects d4.}
        Bd7 {The Wade Variation. Black plans ...Bb5 to exchange the bad light-squared bishop (the one blocked by its own pawns on e6 and d5).}
        6. Be2 {Develop and get ready to castle. If Black trades on e2, you recapture with the queen and stay well placed.}
        Bb5 {Black offers the bishop trade.}
        7. O-O {Castle. Black has spent several moves on the bishop, and you are ahead in development.}`,
    },
    {
      name: '3...b6 (bishop to a6)',
      pgn: `1. e4 e6 2. d4 d5 3. e5
        b6 {Black prepares ...Ba6 to trade off the bad c8 bishop.}
        4. c3 {Supports d4 and keeps your usual centre.}
        Qd7 {Prepares ...Ba6 and makes sure the queen can recapture on a6 or b5.}
        5. Nf3 {Develops and protects d4.}
        Ba6 {Black offers the bishop trade.}
        6. Bxa6 {Take. Black has to recapture with the knight, which ends up on the rim.}
        Nxa6 7. Qe2 {Attacks the a6 knight, which has no defender, and gains time.}
        Nb8 8. O-O {Castle. You have more space and a lead in development; c4 or a4-a5 can open lines on the queenside.}`,
    },
  ],
}
