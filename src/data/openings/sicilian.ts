import type { OpeningSource } from '../types'

export const sicilian: OpeningSource = {
  id: 'sicilian',
  name: 'Sicilian Defense (Najdorf)',
  eco: 'B20–B99',
  side: 'black',
  summary:
    'The most popular and most combative reply to 1.e4. Instead of copying White with ...e5, Black fights for the d4 square from the side with the c-pawn. After White opens the centre with d4, Black swaps the c-pawn for White\'s d-pawn, which leaves Black an extra centre pawn and the half-open c-file (a file with no black pawn on it, so rooks and queen can use it). The Najdorf, 5...a6, is a flexible waiting move that keeps White\'s pieces off b5 and prepares ...e5 or ...b5. White usually attacks on the kingside; Black counterattacks on the queenside.',
  ideas: [
    'Swap the c-pawn for White\'s d-pawn: you get two centre pawns (d and e) against one and an open c-file for your rooks.',
    '...a6 keeps knights and bishops off b5 and prepares ...b5, ...b4 to kick the c3 knight that defends e4.',
    'When the kings castle on opposite sides it is a race: answer White\'s kingside pawn storm with your own on the queenside, and watch the d5 square.',
  ],
  lines: [
    {
      name: 'Najdorf: English Attack (6.Be3)',
      pgn: `1. e4 {White takes the centre and opens lines for the queen and the f1 bishop.}
        c5 {The Sicilian. The c-pawn controls d4 from the side and makes the game unbalanced from move one.}
        2. Nf3 {Develops and prepares d4.}
        d6 {Keeps White's knight out of e5 and opens the c8 bishop. With ...d6 and later ...a6 you head for the Najdorf.}
        3. d4 {White opens the centre. This is the Open Sicilian, the main line.}
        cxd4 {Swap your c-pawn for White's d-pawn. You now have two centre pawns (d6 and e7) against White's one.}
        4. Nxd4 Nf6 {Develops and attacks e4, so White must spend a move defending it.}
        5. Nc3 {Defends e4.}
        a6 {The Najdorf. It stops Nb5 and Bb5 and prepares ...e5 or ...b5 without committing yet.}
        6. Be3 {The English Attack. White wants f3, Qd2, long castling and then g4-g5 to storm your king.}
        e5 {Grabs space and kicks the d4 knight. It leaves a hole on d5, so your next moves all keep an eye on that square.}
        7. Nb3 Be6 {Develops and guards d5, the key square of this structure.}
        8. f3 {Stops ...Ng4, which would hit the e3 bishop, and prepares g4.}
        Be7 {Simple development so you can castle next move.}
        9. Qd2 O-O {Castle short now, before White's pawns arrive.}
        10. O-O-O {The kings are on opposite sides: now it is a race of pawn storms.}
        Nbd7 {The knight covers e5 and f6 and can go to b6 to guard d5.}
        11. g4 {White's storm starts: g5 will kick your f6 knight.}
        b5 {Start your own storm at once. In this race a single move can decide the game.}
        12. g5 {Attacks the f6 knight.}
        b4 {Don't move the knight: hit the c3 knight first, because it guards d5 and e4.}`,
    },
    {
      name: 'Najdorf: 6.Bg5 main line (7...Be7)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Bg5 {The sharpest try. White pins the f6 knight to the queen and plans f4, Qf3 and long castling.}
        e6 {Solid: it covers d5 and f5 and frees the f8 bishop so ...Be7 can break the pin.}
        7. f4 {White prepares e5 or f5 to break open your position.}
        Be7 {Breaks the pin: if Bxf6 now, you take back with the bishop and your pawns stay healthy.}
        8. Qf3 {The queen supports e4 and gets ready for long castling and g4.}
        Qc7 {The queen watches e5, so White's e5 push is harder, and eyes the c-file towards c3.}
        9. O-O-O Nbd7 {Adds a second defender to f6 and keeps e5 covered. ...b5 comes next.}
        10. g4 {White's pawns run at your f6 knight.}
        b5 {The race begins: ...b4 next will hit the c3 knight, the defender of e4.}
        11. Bxf6 {White gives up the bishop to clear the way for g5.}
        Nxf6 {Take back with the knight so your pawns stay unbroken.}
        12. g5 {Attacks the knight again.}
        Nd7 {The knight retreats but is not passive: it can go to c5 or b6 to join your queenside attack.}`,
    },
    {
      name: 'Najdorf: Classical (6.Be2)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Be2 {A calm positional system: White castles short and fights for the d5 square instead of attacking.}
        e5 {Gains space and drives the d4 knight back with tempo.}
        7. Nb3 Be7 {Quiet development, preparing to castle.}
        8. O-O O-O {Both kings are safe, so this is a slow strategic battle.}
        9. Be3 Be6 {Guards d5, the square White's pieces want most.}
        10. Qd2 Nbd7 {Another piece watching d5 and e5; the knight may later go to b6.}
        11. a4 {Stops your ...b5 expansion.}
        Rc8 {With ...b5 blocked, your rook takes the half-open c-file and presses on c2 and the c3 knight.}`,
    },
    {
      name: 'Moscow Variation (3.Bb5+)',
      pgn: `1. e4 c5 2. Nf3 d6
        3. Bb5+ {White avoids the Open Sicilian with a check and is happy to swap the light-squared bishop.}
        Bd7 {The simplest block: offer the bishop trade and get a very solid game.}
        4. Bxd7+ Qxd7 {Take back with the queen so the b8 knight can still go to c6, its best square.}
        5. O-O Nc6 {Develops and adds control over d4.}
        6. c3 {White prepares d4, so that a pawn can recapture and keep a big centre.}
        Nf6 {Develops and attacks e4.}
        7. Re1 {Defends e4.}
        e6 {Opens the f8 bishop and prepares ...d5 with a pawn ready behind it.}
        8. d4 cxd4 {Release the tension; White has to take back with the pawn.}
        9. cxd4 d5 {Strike at e4 now, before White can play d5 or e5 on good terms.}
        10. e5 Ne4 {The knight jumps to a great central square, and White has no light-squared bishop left to chase it.}`,
    },
    {
      name: 'Alapin (2.c3)',
      pgn: `1. e4 c5
        2. c3 {The Alapin. White wants d4 next, so that c3xd4 keeps two pawns in the centre.}
        Nf6 {Attack e4 at once, before White gets d4 in. The c3 pawn has taken the knight's natural square, so White usually pushes e5.}
        3. e5 Nd5 {The knight is safe and central on d5.}
        4. d4 cxd4 {Swap pawns so White cannot keep a pawn on d4 supported by c3.}
        5. cxd4 d6 {Challenge the e5 pawn before it cramps your position.}
        6. Nf3 Nc6 {Develops and adds pressure on d4 and e5.}
        7. Bc4 {Attacks the d5 knight.}
        Nb6 {Retreat with tempo: now the knight attacks the c4 bishop.}
        8. Bb5 {The bishop pins your c6 knight.}
        dxe5 {Open the position while White's king is still in the centre.}
        9. Nxe5 Bd7 {Breaks the pin and offers to trade pieces, which helps you against the isolated d-pawn.}
        10. Nxd7 Qxd7 {The queen takes back and connects with your rooks.}
        11. Nc3 e6 {Solid: blocks the d4 pawn and opens your f8 bishop.}
        12. O-O Be7 {Castle next. White's d4 pawn has no neighbours on c or e (an isolated pawn), and you aim to blockade it on d5.}`,
    },
    {
      name: 'Smith-Morra Gambit',
      pgn: `1. e4 c5
        2. d4 {White offers a pawn: this starts the Smith-Morra Gambit.}
        cxd4 {Take, as in all Sicilians.}
        3. c3 {White gives a pawn for quick development and open c- and d-files.}
        dxc3 {Accept the gambit: you get a clear extra pawn if you develop carefully.}
        4. Nxc3 Nc6 {Develops and controls d4 and e5.}
        5. Nf3 d6 {Keeps White's pieces out of e5 and opens the c8 bishop.}
        6. Bc4 {The bishop aims at f7, your weakest point.}
        e6 {Blocks the bishop's diagonal so f7 is safe, and frees the f8 bishop.}
        7. O-O Nf6 {Develops and gets ready to castle.}
        8. Qe2 {White plans Rd1 to press against your d6 pawn.}
        Be7 {Develops so you can castle next.}
        9. Rd1 {The rook lines up against d6.}
        e5 {Closes the d-file and takes the centre. You are a solid pawn up; castle next.}`,
    },
    {
      name: 'Najdorf: Fischer-Sozin Attack (6.Bc4)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Bc4 {Fischer's favourite: the bishop aims at f7 and e6, ready for sacrifices there.}
        e6 {Blunts the bishop: it now bites on a pawn protected by f7.}
        7. Bb3 {The bishop steps out of reach of ...b5 and ...d5 tricks.}
        b5 {Gains space and threatens ...b4, hitting the c3 knight that defends e4.}
        8. O-O Be7 {Develops so you can castle.}
        9. Qf3 {The queen eyes the long diagonal (if e5 opens it, your a8 rook hangs) and heads for g3.}
        Qc7 {Watches e5, so the e5 trick does not work, and eyes the c-file.}
        10. Qg3 {Now the queen aims at g7.}
        O-O {Castle: your king is safe enough because e7 and f6 guard the kingside.}
        11. Bh6 {Threatens Bxg7, since your f6 knight cannot guard g7.}
        Ne8 {The knight protects g7. Next come ...Bb7 and ...Nd7 to finish development.}`,
    },
    {
      name: 'Najdorf: 6.f3 (into the English Attack)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. f3 {White plays f3 first to rule out ...Ng4 and then goes for the English Attack.}
        e5 {Same answer as against 6.Be3: space with tempo on the d4 knight.}
        7. Nb3 Be6 {Guard d5 straight away.}
        8. Be3 {Now we have the English Attack by another move order.}
        Be7 {Develop and get ready to castle.}
        9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 {Same plan as in the 6.Be3 line: start the queenside race immediately.}`,
    },
    {
      name: 'Najdorf: Adams Attack (6.h3)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. h3 {The Adams Attack. White prepares g4-g5 to chase your f6 knight.}
        e5 {Grabs space and kicks the knight.}
        7. Nde2 {This time the knight goes to e2, ready for g3 or Ng3.}
        h5 {Stops g4 for good. The pawn looks loose, but it takes the point out of h3.}
        8. g3 {White switches to a slower plan with Bg2.}
        Be6 {Develops and watches d5.}
        9. Bg2 Nbd7 {Another piece covering d5 and e5.}
        10. a4 {Stops ...b5.}
        Be7 {Develop and castle short next. You have a comfortable Najdorf structure.}`,
    },
    {
      name: 'Grand Prix Attack (2.Nc3 and 3.f4)',
      pgn: `1. e4 c5
        2. Nc3 {White keeps d4 back for now; this is a Closed Sicilian set-up.}
        d6 {Your usual move: it controls e5.}
        3. f4 {The Grand Prix: White wants f5 and a direct kingside attack.}
        Nc6 {Develops and watches d4.}
        4. Nf3 g6 {You fianchetto: the bishop goes to g7, on the long diagonal.}
        5. Bc4 {The bishop aims at f7.}
        Bg7 {The bishop looks along the long diagonal towards d4 and b2 and protects your king.}
        6. O-O e6 {Blocks the c4 bishop and keeps White's pieces out of d5 and f5.}
        7. d3 Nge7 {The knight goes to e7, not f6, so it supports ...d5 and covers f5 if White pushes f4-f5.}
        8. Qe1 {White wants Qh4 to attack your king.}
        O-O {Your king is safe; next you play ...d5 in the centre or ...b5 on the queenside.}`,
    },
  ],
}
