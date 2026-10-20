import type { OpeningSource } from '../types'

export const sicilian: OpeningSource = {
  id: 'sicilian',
  name: 'Sicilian Defense (Najdorf)',
  eco: 'B20–B99',
  side: 'black',
  summary:
    'The most popular reply to 1.e4. Black fights for d4 from the side with the c-pawn, creating an unbalanced game where Black usually gets the half-open c-file and a central pawn majority.',
  ideas: [
    'Trade the c-pawn for White\'s d-pawn to win the centre majority.',
    '...a6 (the Najdorf) controls b5 and prepares ...b5 queenside expansion.',
    'Counterattack on the c-file and the queenside while White attacks the king.',
  ],
  lines: [
    {
      name: 'Najdorf: English Attack (6.Be3)',
      pgn: `1. e4 {White grabs the centre and opens lines for the queen and bishop.}
        c5 {The Sicilian. Black stops d4 with a flank pawn and keeps the game unbalanced.}
        2. Nf3 {Developing and preparing d4.}
        d6 {Controls e5 and opens the c8 bishop. This move order leads to the Najdorf.}
        3. d4 {White opens the centre, as Sicilian main lines require.}
        cxd4 {Trade a flank pawn for a central pawn: Black now has two centre pawns to White's one.}
        4. Nxd4 Nf6 {Develops with tempo by hitting e4, which forces Nc3.}
        5. Nc3 {Defends e4.}
        a6 {The Najdorf. It covers b5 from White's knights and bishop and prepares ...e5 or ...b5.}
        6. Be3 {The English Attack: White plans f3, Qd2, O-O-O and a g4-g5 pawn storm.}
        e5 {Gains space and kicks the d4 knight. The d5 square is weakened, so Black watches it closely.}
        7. Nb3 Be6 {Fights for d5, the key square in this structure.}
        8. f3 {Supports g4 and blunts any ...Ng4 hitting the e3 bishop.}
        Be7 9. Qd2 O-O {Castle short before the storm arrives.}
        10. O-O-O {Opposite-side castling: now it is a race of pawn storms.}
        Nbd7 {Heads for b6 or c5 and keeps d5 under control.}
        11. g4 b5 {Black's own pawn storm starts at once. Speed matters more than material here.}
        12. g5 b4 {Hit the c3 knight first so it cannot defend d5 or the king.}`,
    },
    {
      name: 'Najdorf: 6.Bg5 main line',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Bg5 {The sharpest try. White pins the f6 knight and prepares f4.}
        e6 {Solid: it unpins with ...Be7 and keeps an eye on d5.}
        7. f4 {Supports e5 or f5 pawn breaks.}
        Be7 {Breaks the pin, so Bxf6 no longer damages the pawns.}
        8. Qf3 Qc7 {The queen eyes the c-file and watches e5.}
        9. O-O-O Nbd7 {Re-enforces f6 and prepares ...b5.}
        10. g4 b5 {The race begins. Black's pawns go after White's king on c1.}
        11. Bxf6 Nxf6 {Recapture with the knight to keep the pawn structure intact.}
        12. g5 Nd7 {The knight retreats but heads for c5 or b6 to join the queenside attack.}`,
    },
    {
      name: 'Najdorf: 6.Be2 classical',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Be2 {A quiet positional system: White castles short and plays for d5.}
        e5 {Gains space and time against the d4 knight.}
        7. Nb3 Be7 8. O-O O-O 9. Be3 Be6 {The bishop guards d5 and can go to c4.}
        10. Qd2 Nbd7 11. a4 {Stops ...b5, so Black finds play on the c-file instead.}
        Rc8 {Rook to the half-open file. ...Qc7 and ...Nb6 can follow.}`,
    },
    {
      name: 'Moscow Variation (3.Bb5+)',
      pgn: `1. e4 c5 2. Nf3 d6
        3. Bb5+ {White avoids the Open Sicilian and wants to trade the light-squared bishop.}
        Bd7 {The simplest block. Bishops come off and Black is very solid.}
        4. Bxd7+ Qxd7 {Recapture with the queen so the b8 knight can go to c6.}
        5. O-O Nc6 6. c3 {White prepares d4 with a pawn recapture.}
        Nf6 7. Re1 e6 {Keeps the centre solid and opens the f8 bishop.}
        8. d4 cxd4 9. cxd4 d5 {Strike back in the centre before White's e5 cramps you.}
        10. e5 Ne4 {The knight is strong on e4 and Black has a comfortable French-type game.}`,
    },
    {
      name: 'Alapin (2.c3)',
      pgn: `1. e4 c5
        2. c3 {The Alapin: White prepares d4 with a pawn recapture to keep a full centre.}
        Nf6 {Hits e4 at once, so White must push or defend it.}
        3. e5 Nd5 4. d4 cxd4 5. cxd4 d6 {Challenge the e5 pawn before it cramps you.}
        6. Nf3 Nc6 7. Bc4 Nb6 {Kicks the bishop with tempo.}
        8. Bb5 dxe5 9. Nxe5 Bd7 {Neutralises the pin and invites trades.}
        10. Nxd7 Qxd7 11. Nc3 e6 12. O-O Be7 {Black is solid; White has an isolated d-pawn to look after.}`,
    },
    {
      name: 'Smith-Morra Gambit',
      pgn: `1. e4 c5
        2. d4 {The Smith-Morra starts with this move.}
        cxd4 3. c3 {White gives a pawn for quick development and open lines.}
        dxc3 {Accepting is the principled answer. Take the pawn and develop carefully.}
        4. Nxc3 Nc6 5. Nf3 d6 {Keeps the e5 and c5 squares covered.}
        6. Bc4 e6 {Blunts the bishop's view of f7.}
        7. O-O Nf6 8. Qe2 Be7 9. Rd1 e5 {Closes the d-file and the centre. Black stays a pawn up with a solid position.}`,
    },
    {
      name: "Najdorf: Sozin Attack (6.Bc4)",
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Bc4 {Fischer's favourite: the bishop aims at e6 and f7.}
        e6 {Blunts the bishop. The pawn on e6 is well protected.}
        7. Bb3 b5 {Gains space and threatens ...b4 to hit the c3 knight and the e4 pawn.}
        8. O-O Be7 9. Qf3 Qc7 {Protects against e5 tricks and eyes the c-file.}
        10. Qg3 O-O {Castle now that the bishop covers f6.}
        11. Bh6 Ne8 {The knight guards g7. Black follows with ...Bb7 and ...Nd7.}`,
    },
    {
      name: "Najdorf: 6.f3 (into the English Attack)",
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. f3 {White plays f3 first to stop ...Ng4 ideas.}
        e5 7. Nb3 Be6 8. Be3 {The same English Attack position by another move order.}
        Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 {Same plan: race on the queenside.}`,
    },
    {
      name: "Najdorf: 6.h3",
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. h3 {White prepares g4 to kick the f6 knight.}
        e5 7. Nde2 h5 {Stops g4 for good.}
        8. g3 Be6 9. Bg2 Nbd7 10. a4 Be7 {Black has a comfortable Najdorf structure and will castle short.}`,
    },
    {
      name: "Grand Prix Attack (2.Nc3 and 3.f4)",
      pgn: `1. e4 c5
        2. Nc3 d6 3. f4 {The Grand Prix: White aims for a kingside attack with f5.}
        Nc6 4. Nf3 g6 {The fianchetto bishop will press on the long diagonal.}
        5. Bc4 Bg7 6. O-O e6 {Takes d5 and f5 away from White's pieces and blunts the c4 bishop.}
        7. d3 Nge7 {The knight goes to e7 so the f-pawn and bishop stay free.}
        8. Qe1 O-O {Black is safe and plans ...d5 or ...b5.}`,
    },
  ],
}
