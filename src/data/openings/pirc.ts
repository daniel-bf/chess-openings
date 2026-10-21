import type { OpeningSource } from '../types'

export const pirc: OpeningSource = {
  id: "pirc",
  name: "Pirc Defense",
  eco: "B07–B09",
  side: "black",
  summary:
    "A flexible 'hypermodern' defence to 1.e4: instead of putting pawns in the centre at once, you let White build a big centre and plan to attack it later. You play ...d6, ...Nf6, ...g6 and ...Bg7 (a fianchetto: the bishop goes on the long diagonal behind the g6 pawn), castle, and then hit back at White's centre with ...e5 or ...c5.",
  ideas: [
    "Set up with ...d6, ...Nf6, ...g6, ...Bg7 and ...O-O. The g7 bishop looks down the long diagonal at d4 and b2, so keep it.",
    "Strike at White's centre with a pawn, usually ...e5 or ...c5, once your pieces are ready. Waiting too long lets White push e5 and cramp you.",
    "Against aggressive set-ups (Be3, Qd2, f3, Bh6), do not castle into the attack too early: grab queenside space with ...c6 and ...b5 first.",
  ],
  lines: [
    {
      name: "Austrian Attack (4.f4)",
      pgn: `1. e4 d6 {The Pirc starts quietly. ...d6 controls e5, so after ...Nf6 White cannot easily kick the knight with e5.}
        2. d4 Nf6 {Develops and attacks e4, forcing White to defend it.}
        3. Nc3 {The natural way to protect e4.}
        g6 {Prepares ...Bg7, putting the bishop on the long diagonal aimed at White's centre.}
        4. f4 {The Austrian Attack: White builds a huge pawn centre and wants e5 to kick your f6 knight.}
        Bg7 {The bishop develops on the long diagonal, pressing on d4 and e5.}
        5. Nf3 O-O {Get your king safe first; your counterattack in the centre comes next.}
        6. Bd3 {The bishop supports e4 and aims at your king.}
        Na6 {The knight is heading for c7, where it supports ...b5 and is not in the way of ...c5.}
        7. O-O c5 {Hit d4 now that your king is safe. White's centre has to commit.}
        8. d5 {White gains space and blocks your g7 bishop's diagonal a little.}
        Nc7 {The knight arrives on c7, supporting ...b5 and watching d5.}
        9. a4 {White stops ...b5 for now.}
        b6 {Keeps the queenside solid and prepares ...a6, ...Rb8 and ...b5 anyway. Always watch for White's e5 push in the centre.}`,
    },
    {
      name: "150 Attack (4.Be3)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Be3 {The 150 Attack: White plans Qd2, Bh6 to swap off your g7 bishop, then f3 and a pawn storm with h4-h5.}
        Bg7 {The bishop goes to the long diagonal, aiming at d4 and the centre.}
        5. Qd2 {Lining up Bh6.}
        c6 {Prepares ...b5. Your king stays in the centre for now, because castling would give White's attack a target.}
        6. f3 {Supports e4 and prepares g4 and h4.}
        b5 {Gains queenside space and threatens ...b4, kicking the c3 knight that defends e4.}
        7. Nge2 Nbd7 {Develops and supports a later ...e5 or ...c5.}
        8. Bh6 Bxh6 {Swap the bishops yourself, so White's queen has to spend a move recapturing.}
        9. Qxh6 Bb7 {Develops the last minor piece on the long light diagonal towards e4. Next ...e5, ...Qb6 or ...a5 with play on the queenside; your king can stay in the centre or go queenside.}`,
    },
    {
      name: "Classical System (4.Nf3 and 5.Be2)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Nf3 {The Classical system: calm development with Be2 and short castling.}
        Bg7 {The bishop goes to the long diagonal, aiming at d4 and the centre.}
        5. Be2 O-O {Castle: your king is safe behind the g7 bishop before you start central play.}
        6. O-O c6 {Controls d5 and b5 and prepares ...b5, or ...Qc7 and ...e5.}
        7. a4 {Stops ...b5.}
        a5 {Stops White from pushing a5 and makes b4 a safe square for your knight.}
        8. h3 {Stops ...Bg4 and ...Ng4.}
        Na6 {The knight heads for b4, where no pawn can chase it away. Later ...e5 challenges the centre.}`,
    },
    {
      name: "Byrne Variation (4.Bg5)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Bg5 {The Byrne Variation: White plans Qd2 and Bh6 to swap off your g7 bishop.}
        Bg7 {The bishop goes to the long diagonal, aiming at d4 and the centre.}
        5. Qd2 {Prepares Bh6.}
        h6 {Ask the bishop to decide before Bh6 comes. Bxh6 does not win a pawn: your bishop and the h8 rook both guard h6.}
        6. Bh4 g5 {Chase the bishop again and gain kingside space. It has to go to g3.}
        7. Bg3 Nh5 {Attack the bishop: you swap your knight for it and get the bishop pair (two bishops against bishop and knight).}`,
    },
    {
      name: "Fianchetto System (4.g3)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. g3 {White puts a bishop on g2 too: a solid set-up aiming for a small, safe edge.}
        Bg7 {The bishop goes to the long diagonal, aiming at d4 and the centre.}
        5. Bg2 O-O {Castle: your king is safe behind the g7 bishop before you start central play.}
        6. Nge2 {The knight goes to e2 so it does not block the g2 bishop.}
        e5 {The classic Pirc break: challenge d4 straight away.}
        7. h3 {Prepares Be3 without allowing ...Ng4.}
        c6 {Controls d5 and b5, gives your queen c7 or b6, and prepares ...b5.}
        8. a4 {Stops ...b5.}
        Nbd7 {Develops and supports e5, so you can keep the central tension.}`,
    },
    {
      name: "Kholmov System (4.Bc4)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Bc4 {The bishop aims at f7. White often follows with Qe2 and e5.}
        Bg7 {The bishop goes to the long diagonal, aiming at d4 and the centre.}
        5. Qe2 {Prepares e5, which would kick your f6 knight.}
        c6 {Now after e5 dxe5 dxe5 your knight can jump to d5 and be protected by the c6 pawn. ...b5 hitting the c4 bishop is also possible.}
        6. e5 dxe5 {Take back, so the centre opens while White is not castled.}
        7. dxe5 Nd5 {The knight lands in the centre, blocks the c4 bishop and attacks c3.}
        8. Bd2 O-O {Castle now. Your g7 bishop will target the e5 pawn, and ...Bf5 or ...Nxc3 follow.}`,
    },
    {
      name: "3.Bd3",
      pgn: `1. e4 d6 2. d4 Nf6
        3. Bd3 {White defends e4 with the bishop, keeping c3 free for a pawn.}
        g6 {Carry on with the normal Pirc set-up.}
        4. Nf3 Bg7 {The bishop goes to the long diagonal, aiming at d4 and the centre.}
        5. O-O O-O {Castle: your king is safe behind the g7 bishop before you start central play.}
        6. c3 {A solid centre: c3 supports d4 and blunts your g7 bishop.}
        Nc6 {Develops and adds pressure on d4, preparing ...e5 to challenge the centre.}`,
    },
    {
      name: "3.f3 (King's Indian structure)",
      pgn: `1. e4 d6 2. d4 Nf6
        3. f3 {White supports e4 with a pawn and may follow with c4, reaching a King's Indian structure.}
        g6 {Prepares the fianchetto as usual.}
        4. c4 {Now it is a King's Indian Defence, Sämisch Variation.}
        Bg7 {The bishop goes to the long diagonal, aiming at d4 and the centre.}
        5. Nc3 O-O {Castle: your king is safe behind the g7 bishop before you start central play.}
        6. Be3 e5 {Hit d4 at once, a standard answer to this set-up.}
        7. d5 {White closes the centre.}
        Nh5 {Clears the f-pawn so it can go to f5 and attack e4, and eyes f4. Because f3 weakened White's dark squares, ...Qh4+ can also be an idea.}`,
    },
  ],
}
