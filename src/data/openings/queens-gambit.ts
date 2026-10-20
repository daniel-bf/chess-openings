import type { OpeningSource } from '../types'

export const queensGambit: OpeningSource = {
  id: 'queens-gambit',
  name: "Queen's Gambit",
  eco: 'D06–D69',
  side: 'white',
  summary:
    'White offers the c-pawn to deflect Black\'s d5 pawn from the centre. It is not a real gambit: if Black takes, White usually wins the pawn back while building a big centre.',
  ideas: [
    'Undermine d5 with c4 and win the central battle.',
    'Pin the f6 knight with Bg5 to increase pressure on d5.',
    'Against ...dxc4, build the centre with e4 and regain the pawn.',
  ],
  lines: [
    {
      name: 'QGD Orthodox: Capablanca freeing',
      pgn: `1. d4 {Claims the centre with a protected pawn.}
        d5 2. c4 {The Queen's Gambit. It challenges d5 from the side.}
        e6 {The Queen's Gambit Declined: Black keeps a firm grip on d5.}
        3. Nc3 Nf6 4. Bg5 {Pins the knight that defends d5.}
        Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 {The rook goes to the c-file, which will open after cxd5.}
        c6 8. Bd3 dxc4 {Black gives up the centre to free the position.}
        9. Bxc4 Nd5 {Capablanca's idea: trade pieces to relieve the cramp.}
        10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5 {Black frees the c8 bishop. White keeps slightly better development.}`,
    },
    {
      name: 'QGD Tartakower (6...h6 7...b6)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3
        h6 {Asks the bishop whether it will keep the pin.}
        7. Bh4 {Keep the pin.}
        b6 {The Tartakower: the c8 bishop goes to b7.}
        8. Be2 Bb7 9. Bxf6 Bxf6 10. cxd5 exd5 {Black has the bishop pair. White will aim at the d5 pawn.}
        11. b4 {A minority attack: White pushes queenside pawns to create weaknesses on c6 or d5.}`,
    },
    {
      name: 'QGA: 3.e4 e5',
      pgn: `1. d4 d5 2. c4
        dxc4 {The Queen's Gambit Accepted.}
        3. e4 {Take the whole centre. The c4 pawn can be won back later.}
        e5 {Black strikes back immediately.}
        4. Nf3 {Develops with a threat: Nxe5. Do not rush dxe5 because of the queen trade.}
        exd4 5. Bxc4 {Regains the pawn and develops.}
        Nc6 6. O-O Be6 7. Bxe6 fxe6 8. Qb3 {Targets the weak e6 and b7 pawns.}
        Qd7 9. Qxb7 Rb8 10. Qa6 Nf6 {White is a pawn up; Black has open lines.}`,
    },
    {
      name: 'QGA: 3.e4 Nf6',
      pgn: `1. d4 d5 2. c4 dxc4 3. e4
        Nf6 {Attack e4 straight away.}
        4. e5 Nd5 5. Bxc4 {Regain the pawn.}
        Nb6 6. Bb3 Nc6 7. Ne2 {Keeps d4 protected and leaves f2-f4 open as an idea.}
        Bf5 8. Nbc3 e6 9. O-O {White has a pleasant space advantage.}`,
    },
    {
      name: 'Slav: 4...dxc4 5.a4',
      pgn: `1. d4 d5 2. c4
        c6 {The Slav: support d5 with the c-pawn and keep the c8 bishop free.}
        3. Nf3 Nf6 4. Nc3 dxc4 5. a4 {Stops ...b5, which would hold on to the pawn.}
        Bf5 6. e3 e6 7. Bxc4 {Pawn regained.}
        Bb4 8. O-O Nbd7 9. Qe2 O-O 10. e4 {White gains the centre with tempo on the f5 bishop.}
        Bg6 {White has more space; Black is solid.}`,
    },
    {
      name: 'Semi-Slav: Moscow (5.Bg5 h6)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3
        e6 {The Semi-Slav: Black supports d5 with both c- and e-pawns.}
        5. Bg5 h6 6. Bxf6 {Give up the bishop for central control and quick development.}
        Qxf6 7. e3 Nd7 8. Bd3 dxc4 9. Bxc4 g6 {Black prepares ...Bg7 and ...e5.}
        10. O-O Bg7 {Black has the bishop pair; White has a lead in development.}`,
    },
    {
      name: "QGD: Cambridge Springs",
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5
        Nbd7 {Hides a trap: if 5.cxd5 exd5 6.Nxd5?? Nxd5 7.Bxd8 Bb4+ and Black wins material.}
        5. e3 c6 6. Nf3 Qa5 {The Cambridge Springs: pin on c3 and pressure on g5.}
        7. Nd2 {Covers g5 and adds a defender to c4.}
        Bb4 8. Qc2 O-O 9. Be2 {Solid. White is ready for O-O.}`,
    },
    {
      name: "QGD: Lasker Defence",
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4
        Ne4 {The Lasker: trade pieces to free the position.}
        8. Bxe7 Qxe7 9. cxd5 Nxc3 10. bxc3 exd5 11. Qb3 {Pressure on d5 and b7.}
        Rd8 12. c4 {Break up Black's centre.}`,
    },
    {
      name: "Albin Countergambit",
      pgn: `1. d4 d5 2. c4
        e5 {The Albin: a sharp gambit.}
        3. dxe5 d4 4. Nf3 {Develop and protect the e5 pawn.}
        Nc6 5. g3 Be6 6. Nbd2 Qd7 7. Bg2 O-O-O 8. O-O {White is a pawn up and attacks on the queenside.}`,
    },
    {
      name: "Chigorin Defence",
      pgn: `1. d4 d5 2. c4
        Nc6 {The Chigorin: active pieces instead of a pawn chain.}
        3. Nf3 Bg4 4. cxd5 Bxf3 5. gxf3 Qxd5 6. e3 e5 7. Nc3 Bb4 8. Bd2 Bxc3 9. bxc3 {White has the bishop pair and a strong centre.}`,
    },
    {
      name: "Slav: Chebanenko (4...a6)",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3
        a6 {The Chebanenko: Black prepares ...b5.}
        5. c5 {Gain space and stop ...b5 from undermining c4.}
        Bf5 6. Bf4 Nbd7 7. e3 {White plans Be2, O-O and b4.}`,
    },
  ],
}
