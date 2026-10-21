import type { OpeningSource } from '../types'

export const english: OpeningSource = {
  id: 'english',
  name: 'English Opening',
  eco: 'A10–A39',
  side: 'white',
  summary:
    "1.c4 fights for the centre from the side: the c-pawn controls d5 without putting a pawn there yet. White usually fianchettoes the king's bishop (g3 and Bg2) so it rakes the long diagonal toward d5 and b7. Against 1...e5 the English is a Sicilian with colours reversed, where White has an extra move; against other replies it is flexible and can turn into a d4 opening.",
  ideas: [
    "Control the light squares in the centre, especially d5, with c4, Nc3 and the bishop on g2.",
    "Fianchetto (g3 and Bg2): the bishop on the long diagonal presses on d5 and b7 and keeps White's king safe.",
    "Play on the queenside: Rb1, a3, b4 and b5 gain space there, usually while Black tries to attack on the kingside.",
  ],
  lines: [
    {
      name: 'Four Knights: 4.g3 d5 (Reversed Sicilian)',
      pgn: `1. c4 {The English: the c-pawn controls d5 from the side.}
        e5 {Black takes the centre. This is a Sicilian with colours reversed, and White has an extra move.}
        2. Nc3 {Develops and adds control of d5.}
        Nf6 3. Nf3 {Develops and attacks the e5 pawn.}
        Nc6 {Defends e5. This is the Four Knights English.}
        4. g3 {Prepares Bg2, which will aim along the long diagonal at d5 and b7.}
        d5 {Black grabs the centre, like White in an Open Sicilian.}
        5. cxd5 {Trades off Black's centre pawn.}
        Nxd5 6. Bg2 {The bishop hits the d5 knight straight away.}
        Nb6 {The knight retreats from the long diagonal.}
        7. O-O {King to safety.}
        Be7 8. d3 {Controls e4 and c4 and opens the c1 bishop.}
        O-O 9. a3 {Prepares b4 to gain queenside space and push away the c6 knight later with b5.}`,
    },
    {
      name: 'Closed English: Rb1 and b4',
      pgn: `1. c4 e5 2. Nc3
        Nc6 3. g3 {Prepares the bishop on g2.}
        g6 {Black also fianchettoes. With both sides keeping their centre pawns back, this is the Closed English.}
        4. Bg2 {Bishop on the long diagonal, aimed at d5 and b7.}
        Bg7 5. d3 {Controls e4 and opens the c1 bishop.}
        d6 6. Rb1 {Prepares b4-b5, and moves the rook off the long diagonal of Black's g7 bishop.}
        a5 {Tries to stop b4.}
        7. a3 {Supports b4 anyway.}
        f5 {Black starts kingside play.}
        8. b4 {The queenside push goes ahead.}
        axb4 9. axb4 {Recaptures and opens the a-file for White's rooks.}
        Nf6 10. b5 {Kicks the c6 knight away from d4 and gains more queenside space.}`,
    },
    {
      name: 'Symmetrical English',
      pgn: `1. c4
        c5 {The Symmetrical English: Black copies White.}
        2. Nf3 {Develops and prepares a later d4.}
        Nc6 3. Nc3 {Develops and controls d5.}
        g6 4. g3 {Prepares the fianchetto.}
        Bg7 5. Bg2 {Bishop on the long diagonal.}
        Nf6 6. O-O {King to safety.}
        O-O 7. d4 {Breaks the symmetry and opens the centre, which helps the better-developed side.}
        cxd4 8. Nxd4 {Recaptures with a centralised knight.}
        Nxd4 9. Qxd4 {Recaptures with the queen, which is well placed in the centre for now.}
        d6 10. Qd3 {Steps off the long diagonal, so Black cannot win time with ...Ng4 or ...Nd5 uncovering the g7 bishop. White keeps a small space edge thanks to the c4 pawn.}`,
    },
    {
      name: 'Mikenas Attack (2...e6 3.e4)',
      pgn: `1. c4 Nf6 2. Nc3 {Develops and controls d5 and e4.}
        e6 3. e4 {The Mikenas Attack: White grabs the centre at once.}
        d5 {Black hits the e4 pawn.}
        4. e5 {Gains space and kicks the knight.}
        d4 {A counterattack on the c3 knight.}
        5. exf6 {Takes the knight first.}
        dxc3 6. bxc3 {Recaptures toward the centre and opens the b-file for a rook.}
        Qxf6 7. d4 {Builds a strong pawn centre and shuts the queen out of c3. White has more central pawns and quick development.}`,
    },
    {
      name: "Against the King's Indian setup",
      pgn: `1. c4 Nf6 2. Nc3
        g6 3. e4 {Takes the centre with pawns: this will become a King's Indian.}
        d6 4. d4 {A big pawn centre.}
        Bg7 5. Be2 {Develops, covers g4 and prepares castling.}
        O-O 6. Bg5 {The Averbakh setup: the bishop pins the f6 knight and makes Black's usual ...e5 break harder to prepare.}`,
    },
    {
      name: "Transposing to the Queen's Gambit",
      pgn: `1. c4
        e6 2. Nc3 {Develops and controls d5.}
        d5 3. d4 {Transposes to the Queen's Gambit Declined.}
        Nf6 4. Bg5 {Pins the knight that defends d5, as in the Queen's Gambit course.}
        Be7 5. e3 {Supports d4 and opens the f1 bishop.}
        O-O 6. Nf3 {The same QGD setup as in the Queen's Gambit course.}`,
    },
    {
      name: 'Four Knights: 4.g3 Bb4',
      pgn: `1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3
        Bb4 {Pins the c3 knight to fight for the d5 and e4 squares.}
        5. Bg2 {Bishop on the long diagonal.}
        O-O 6. O-O {King to safety.}
        e4 {Kicks the f3 knight and gains space.}
        7. Ng5 {Attacks the e4 pawn instead of retreating.}
        Bxc3 8. bxc3 {Recaptures toward the centre; the pawns on c3 and c4 control d4 and d5.}
        Re8 {Defends e4.}
        9. f3 {Attacks e4 again to open the centre. Then White's bishops get open lines.}`,
    },
    {
      name: '1...Nf6 2...c5 transposing',
      pgn: `1. c4 Nf6 2. Nc3
        c5 3. Nf3 {Develops and prepares d4.}
        Nc6 4. g3 {Prepares the fianchetto.}
        g6 5. Bg2 {Bishop on the long diagonal, aimed at d5 and b7.}
        Bg7 6. O-O O-O 7. d4 {The Symmetrical main line again.}`,
    },
    {
      name: 'Caro-Kann setup (1...c6)',
      pgn: `1. c4
        c6 {Black prepares ...d5, as in the Caro-Kann.}
        2. e4 {Takes the centre and stops ...d5 from being played comfortably.}
        d5 3. exd5 {Opens the centre.}
        cxd5 4. d4 {Transposes to the Panov Attack against the Caro-Kann: White usually gets an isolated d-pawn but very active pieces.}
        Nf6 5. Nc3 {Develops with a second attacker on d5 alongside the c4 pawn.}`,
    },
    {
      name: 'Modern setup (1...g6)',
      pgn: `1. c4
        g6 {Black prepares ...Bg7 first.}
        2. Nc3 {Develops and controls d5.}
        Bg7 3. g3 {White fianchettoes too.}
        c5 4. Bg2 {Completes the fianchetto.}
        Nc6 5. Nf3 {Develops and prepares castling and d4.}
        Nf6 6. O-O O-O 7. d4 {The same Symmetrical main line.}`,
    },
    {
      name: 'Reversed Sicilian: 2...Bb4',
      pgn: `1. c4 e5 2. Nc3
        Bb4 {Pins the knight, threatening ...Bxc3 to double White's pawns.}
        3. Nd5 {Attacks the bishop and avoids doubled pawns. The knight is strong on d5.}
        Be7 {Black retreats.}
        4. d4 {Attacks e5 and grabs central space.}
        d6 5. e4 {A big pawn centre. White is comfortable and can trade the knight for the e7 bishop when it suits him.}`,
    },
  ],
}
