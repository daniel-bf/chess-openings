import type { OpeningSource } from '../types'

export const caroKannAdvanceWhite: OpeningSource = {
  id: 'caro-kann-advance-white',
  name: 'Caro-Kann Advance (as White)',
  eco: 'B12',
  side: 'white',
  summary:
    "In the Advance Variation (1.e4 c6 2.d4 d5 3.e5) you grab space with the e5 pawn, so Black's knight cannot use f6. This repertoire uses the Short Variation (4.Nf3, 5.Be2 and quick castling), popularised by Nigel Short: a calm set-up where you develop first and react to Black's ...c5 break. Black's kingside pieces have trouble finding good squares, and you look for chances with c4, Be3 or a kingside space grab.",
  ideas: [
    'Develop first: Nf3, Be2 and O-O. Your space on the kingside makes Black\'s pieces awkward to develop.',
    'Black\'s main break is ...c5. Meet it with Be3 (supporting d4), c4, or by taking on c5 and using the d4 square for a piece.',
    'Watch Black\'s kingside pieces: a knight on e7 can be hit by Nb3-c5 ideas, a bishop on g6 by Nh4, and ...h6 and ...g5 leave weaknesses.',
  ],
  lines: [
    {
      name: 'Short Variation: 5...Nd7 6.O-O Ne7 (8.Nb3)',
      pgn: `1. e4 {Takes a central square and opens lines for the queen and the f1 bishop.}
        c6 {The Caro-Kann Defence. Black prepares ...d5 with the c-pawn's support.}
        2. d4 {Builds a full pawn centre.}
        d5 {Black attacks e4.}
        3. e5 {The Advance Variation. You gain space and take the f6 square away from Black's knight.}
        Bf5 {The main move. Unlike in the French, Black's light-squared bishop gets outside the pawn chain before ...e6.}
        4. Nf3 {The Short Variation. A calm developing move that protects d4.}
        e6 {Black builds a solid pawn chain and opens the f8 bishop.}
        5. Be2 {Develops and prepares to castle. The bishop also stops ...Bg4 pins.}
        Nd7 {Black supports a later ...c5 and keeps the e5 pawn under watch.}
        6. O-O {King safety first.}
        Ne7 {The knight heads for g6 or f5.}
        7. Nbd2 {Develops and heads for b3, where it controls c5 and d4.}
        h6 {Black makes a retreat square on h7 for the bishop.}
        8. Nb3 {The knight stops ...c5 and can jump to a5 or c5 later. Next come Bd2 or a4 to gain queenside space.}`,
    },
    {
      name: 'Short Variation: 5...Nd7 6.O-O Bg6',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 Nd7 6. O-O
        Bg6 {The bishop steps back early so it cannot be hit by Nh4 or g4 later.}
        7. Nbd2 {Develops and keeps options for Nb3, c4 or Nh4 to take the bishop.}`,
    },
    {
      name: 'Short Variation: 5...Ne7 6.O-O c5 (7.c4)',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2
        Ne7 {The knight heads for c6 or g6 before Black decides on ...Nd7.}
        6. O-O {Castle first.}
        c5 {Black strikes at d4 straight away.}
        7. c4 {Hit back in the centre. Black is behind in development, so opening the position suits you.}
        Nbc6 {Black adds pressure on d4.}
        8. dxc5 {Take. Black's d5 pawn becomes weak, and the d4 square is free for your pieces.}`,
    },
    {
      name: 'Short Variation: 5...c5 6.Be3 cxd4 (8.c4)',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2
        c5 {The main break. Black attacks d4 straight away.}
        6. Be3 {Short's move. The bishop protects d4 and sometimes takes on c5.}
        cxd4 {Black exchanges.}
        7. Nxd4 {Recapture with the knight. It is centralised and attacks the f5 bishop.}
        Ne7 {Black develops and keeps an eye on f5 and c6.}
        8. c4 {Attack Black's d5 pawn. You open the centre while Black is still behind in development.}`,
    },
    {
      name: 'Short Variation: 5...c5 6.Be3 Nd7',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 c5 6. Be3
        Nd7 {Black supports c5 and waits to see where you put your king.}
        7. O-O {Castle. Your king is safe before the centre opens, and c4 or dxc5 can follow.}`,
    },
    {
      name: 'Botvinnik-Carls Defence: 3...c5 4.dxc5 Nc6',
      pgn: `1. e4 c6 2. d4 d5 3. e5
        c5 {The Botvinnik-Carls Defence. Black attacks d4 a move later than in the French, but without ...e6 first.}
        4. dxc5 {Take. You keep the e5 pawn and Black has to spend time getting the pawn back.}
        Nc6 {Develops and attacks e5.}
        5. Nf3 {Develops and protects e5.}
        Bg4 {Pins the knight, so it cannot easily keep guarding e5.}
        6. c3 {Prepares b4 to protect your extra c5 pawn and gives the queen the b3 square.}
        e6 {Black opens the f8 bishop, which wants to take on c5.}
        7. b4 {Keeps the extra pawn on c5 and gains queenside space.}`,
    },
    {
      name: 'Botvinnik-Carls Defence: 3...c5 4.dxc5 e6',
      pgn: `1. e4 c6 2. d4 d5 3. e5 c5 4. dxc5
        e6 {Black opens the bishop's diagonal, planning ...Bxc5.}
        5. a3 {Prepares b4, which would keep the extra pawn and make room for Bb2 on the long diagonal.}
        Nc6 {Black develops and attacks e5.}
        6. Nf3 {Develops and protects e5.}`,
    },
    {
      name: '3...Na6 4.Nf3',
      pgn: `1. e4 c6 2. d4 d5 3. e5
        Na6 {A sideline. The knight heads for c7 or b4 and supports ...c5.}
        4. Nf3 {Develop as usual. The knight on a6 is not doing much yet.}
        Bf5 {Black develops the bishop outside the pawn chain.}
        5. Be2 {Same set-up as the Short Variation.}
        e6 6. O-O {Castle. You have the usual Short Variation set-up, and Black's knight on a6 is less useful than on d7.}`,
    },
  ],
}
