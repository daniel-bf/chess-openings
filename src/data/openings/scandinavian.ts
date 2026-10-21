import type { OpeningSource } from '../types'

export const scandinavian: OpeningSource = {
  id: "scandinavian",
  name: "Scandinavian Defense",
  eco: "B01",
  side: "black",
  summary:
    "Black attacks White's e4 pawn on move one with 1...d5. After 2.exd5 Qxd5 your queen comes out early and gets chased by Nc3, but it has a safe home on a5. You then build a simple, solid set-up: the light-squared bishop out to f5 or g4, pawns on c6 and e6, and quick castling. The plans are the same in almost every line, so it is easy to learn.",
  ideas: [
    "When 3.Nc3 attacks your queen, put it on a5: it is safe there, it pins the c3 knight to White's king, and a later ...c6 gives it a retreat on c7.",
    "Develop the light-squared bishop (the one on c8) to f5 or g4 BEFORE you play ...e6, otherwise your own pawn shuts it in.",
    "Build a wall with ...c6 and ...e6, like a Caro-Kann. ...c6 also stops White's knights jumping to b5 or d5 to hit your queen.",
  ],
  lines: [
    {
      name: "Classical Variation (5...Bf5 6.Bc4)",
      pgn: `1. e4 d5 {Attack the e4 pawn straight away. If White takes, you recapture and get an open, easy centre.}
        2. exd5 Qxd5 {Take back with the queen. It comes out early, but White has no centre pawn on e4 any more and your pieces can develop freely.}
        3. Nc3 {White develops with gain of time: the knight attacks your queen, so it has to move again.}
        Qa5 {The main square. On a5 the queen is out of your pieces' way, hard to attack, and it pins the c3 knight to White's king: the knight cannot move without exposing e1.}
        4. d4 {White takes the centre.}
        Nf6 {Develop the knight to its best square, where it controls e4 and d5 and guards your king.}
        5. Nf3 Bf5 {Get the light-squared bishop out now. Once you play ...e6 it would be stuck behind your own pawn.}
        6. Bc4 {The bishop aims at f7 and e6.}
        e6 {Opens the way for your f8 bishop and blocks the c4 bishop's line towards f7.}
        7. Bd2 {White unpins the knight and sets a trap: if the knight jumps to d5, the d2 bishop suddenly attacks your queen on a5.}
        c6 {Takes d5 and b5 away from White's knights so those tricks fail, and gives your queen a retreat on c7 or d8.}
        8. Qe2 {White gets ready to castle queenside and to open lines with d5 or Nd5 while your king is still in the centre.}
        Bb4 {Develops with a second attack on the c3 knight, the piece behind all of White's Nd5 and Ne4 ideas.}
        9. O-O-O Nbd7 {Develops the last minor piece and keeps the knight near your king. Short castling is next.}
        10. a3 {White asks your bishop to take or retreat.}
        Bxc3 {Take the knight: it was White's most active piece and the one that could jump into d5 or e4.}
        11. Bxc3 Qc7 {The c3 bishop now hits your queen, so step to c7, a safe square that also watches e5. Then castle short.}`,
    },
    {
      name: "Classical Variation: 6.Bd2",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5
        6. Bd2 {White unpins the knight first. Watch out: now Nd5 would uncover the d2 bishop's attack on your queen.}
        c6 {Covers d5 at once, so the Nd5 trick never works.}
        7. Bc4 e6 {The same set-up as the main line, reached in a different order. Next come ...Bb4 or ...Be7, ...Nbd7 and castling.}`,
    },
    {
      name: "Main Line: 4.Nf3 and 5.Bc4",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5
        4. Nf3 {White develops and keeps d4 for later.}
        Nf6 {Develop the knight to its natural square, where it guards your king and eyes e4 and d5.}
        5. Bc4 {The bishop aims at f7.}
        c6 {Takes b5 and d5 away from White's knights and gives your queen a retreat square on c7.}
        6. d3 {A modest set-up: White guards c4 and e4 and plans Bd2 to unpin the knight.}
        Bg4 {With no white pawn on d4, the bishop is best used pinning the f3 knight to White's queen.}
        7. Bd2 {The c3 knight is now unpinned, so a knight jump would uncover the d2 bishop's attack on your queen.}
        Qc7 {Step off the a5-e1 diagonal before any discovered attack can happen. From c7 the queen still watches e5.}
        8. h3 {White asks your bishop to decide.}
        Bh5 {Keep the pin. Next come ...e6, ...Nbd7, ...Bd6 or ...Be7 and castling.}`,
    },
    {
      name: "Main Line: 4.Bc4",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5
        4. Bc4 {White aims at f7 and delays d4.}
        Nf6 {Develop the knight to its natural square, where it guards your king and eyes e4 and d5.}
        5. Nf3 c6 {The same position as in the 4.Nf3 line.}
        6. O-O {White castles quickly and keeps d3 or d4 in reserve.}
        Bg4 {Pin the f3 knight against White's queen, so it cannot jump to e5 or g5 without losing the queen.}
        7. h3 Bh5 {Keep the pin. Trading the bishop for the knight later is fine too, but there is no need yet.}
        8. d3 e6 {Opens the f8 bishop's path and blocks the c4 bishop's line to f7. Next come ...Nbd7, ...Be7 or ...Bd6, and short castling.}`,
    },
    {
      name: "Mieses-Kotroc Variation: 3.d4",
      pgn: `1. e4 d5 2. exd5 Qxd5
        3. d4 {White skips Nc3, so your queen is not attacked yet.}
        Nf6 {Develop first: there is no need to move the queen until it is attacked. If 4.Nc3 now, ...Qa5 takes you back to the main line.}
        4. Nf3 Bf5 {The bishop comes out before ...e6, as always.}
        5. Be2 e6 {Frees the f8 bishop and gives your queen a stable centre around it.}
        6. O-O Nc6 {Develops with pressure on d4: your queen on d5 and this knight both attack it.}
        7. c4 {Finally White hits the queen.}
        Qd7 {Keep the queen on the d-file, where it still eyes d4, and away from knight attacks. ...Rd8 or long castling (...O-O-O) can follow to keep pressing d4.}`,
    },
    {
      name: "Mieses-Kotroc Variation: 3.Nf3",
      pgn: `1. e4 d5 2. exd5 Qxd5
        3. Nf3 {Flexible: White develops and keeps d4 for later.}
        Nf6 {Same idea as against 3.d4: develop and leave the queen where it is until it is attacked.}
        4. Be2 Bf5 {Bishop out before ...e6.}
        5. O-O e6 {Opens the f8 bishop and keeps your position compact.}
        6. d4 Nc6 {Now that d4 is played, the knight joins the queen in attacking it.}
        7. c4 Qd7 {This is the same position as in the 3.d4 line, so the same plan applies.}`,
    },
    {
      name: "Advance (2.e5)",
      pgn: `1. e4 d5
        2. e5 {White avoids the pawn trade and grabs space, like an Advance French.}
        c5 {Hit d4 at once. White wants a pawn on d4 to support e5, and this makes that harder.}
        3. c3 {White prepares d4 with a pawn behind it.}
        Nc6 {Develops and adds pressure on d4 and e5.}
        4. d4 Bf5 {The big difference from a French: your light-squared bishop gets outside the pawn chain before ...e6 locks it in. ...e6 comes next.}`,
    },
    {
      name: "2.Nc3 d4",
      pgn: `1. e4 d5
        2. Nc3 {White defends e4 instead of taking on d5.}
        d4 {Gain space with tempo: the pawn kicks the c3 knight.}
        3. Nce2 {The knight retreats and heads for g3.}
        e5 {Back up the d4 pawn with another pawn and claim the centre.}
        4. Ng3 {The knight eyes f5 and supports a later f4 or Bc4.}
        Be6 {Develops and covers f5 and c4, squares White's pieces want. Follow with ...Nc6, ...Nf6 and ...Bd6.}`,
    },
    {
      name: "Main Line, Mieses Variation: 5.Bc4",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6
        5. Bc4 {White develops the bishop before the king's knight, aiming at f7.}
        c6 {Play this first: it takes d5 and b5 from White's knights and gives your queen a retreat on c7.}
        6. Bd2 {Unpins the c3 knight. Nd5 would now uncover an attack on your queen, but ...Qxd5 simply wins the knight because c6 also covers d5.}
        Bf5 {The bishop comes out before ...e6, as always.}
        7. Nge2 {The knight heads for g3 to chase your bishop.}
        e6 {Opens the f8 bishop and supports d5. Next ...Nbd7, ...Bb4 or ...Be7, and castling.}
        8. Ng3 {Attacks the f5 bishop.}
        Bg6 {Keep the bishop on its good diagonal. If h4, answer ...h6 so the bishop can drop back to h7.}`,
    },
    {
      name: "Blackmar-Diemer Gambit: Teichmann Defence (2.d4)",
      pgn: `1. e4 d5
        2. d4 {White offers a pawn: after ...dxe4 this is the Blackmar-Diemer Gambit.}
        dxe4 {Take the pawn: you are now playing against a gambit.}
        3. Nc3 {Attacks e4.}
        Nf6 {Defends e4 with a developing move.}
        4. f3 {The Blackmar-Diemer Gambit: White offers a second pawn for open lines.}
        exf3 {Accept. White gets the f-file and fast development, but you have an extra pawn.}
        5. Nxf3 Bg4 {The Teichmann Defence: pin the f3 knight and plan to swap it off, so White's attack loses a key piece.}
        6. h3 Bxf3 {Swap now. You give up the bishop but remove an attacker and keep the extra pawn.}
        7. Qxf3 c6 {Blunts the queen's view of b7 and supports a later ...e6 and ...Nbd7. Your position is very solid.}
        8. Be3 e6 {Builds the pawn wall and frees the f8 bishop. Next ...Nbd7, ...Bd6 or ...Bb4, and castling.}`,
    },
  ],
}
