import type { OpeningSource } from '../types'

export const french: OpeningSource = {
  id: 'french',
  name: 'French Defense',
  eco: 'C00–C19',
  side: 'black',
  summary:
    'A solid, counter-punching reply to 1.e4. Black builds a pawn chain with ...e6 and ...d5, accepts a little less space, and attacks White\'s centre with ...c5 and ...f6.',
  ideas: [
    'Strike the base of White\'s pawn chain with ...c5.',
    'Pile up on d4 with ...Nc6, ...Qb6 and ...Nf5 or ...Ne7-f5.',
    'The c8 bishop is the problem piece: trade it or activate it via d7-b5 or a6.',
  ],
  lines: [
    {
      name: 'Advance: 5...Qb6 6.a3',
      pgn: `1. e4 e6 {The French. Black prepares ...d5 with a pawn ready to recapture.}
        2. d4 d5 {Challenges e4 straight away.}
        3. e5 {The Advance Variation: White gains space and cramps Black.}
        c5 {Hit the base of the chain right away.}
        4. c3 Nc6 {Adds pressure on d4.}
        5. Nf3 Qb6 {The queen joins the attack on d4 and also eyes b2.}
        6. a3 {White prepares b4 to gain space on the queenside.}
        c4 {Locks the queenside and stops b4 from coming with gain of time.}
        7. Nbd2 Na5 {The knight eyes b3 and supports the c4 pawn.}
        8. Rb1 Bd7 {Develop and prepare ...Ne7-c6 or ...Bb5. The queenside is Black's.}`,
    },
    {
      name: 'Advance: 6.Be2',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6
        6. Be2 {Solid. White simply defends d4 and castles.}
        cxd4 7. cxd4 Nh6 {The knight heads for f5 to add a fourth attacker on d4.}
        8. b3 {Lets the bishop defend d4 from b2.}
        Nf5 9. Bb2 Bb4+ {Before White castles, the check forces an awkward reply.}
        10. Kf1 Be7 {The bishop drops back. White has lost castling rights.}`,
    },
    {
      name: 'Advance: Milner-Barry Gambit',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6
        6. Bd3 {The Milner-Barry: White is ready to give up d4.}
        cxd4 7. cxd4 Bd7 {Prepares ...Nxd4 without allowing Bb5+.}
        8. O-O Nxd4 9. Nxd4 Qxd4 {Take the pawn. Black must now defend carefully.}
        10. Nc3 a6 {Stops Nb5 and keeps the queen safe. Black is a pawn up.}`,
    },
    {
      name: 'Winawer: Poisoned Pawn',
      pgn: `1. e4 e6 2. d4 d5
        3. Nc3 {The main line. The knight defends e4.}
        Bb4 {The Winawer: pin the knight and pressure e4.}
        4. e5 c5 {Attack the centre at once.}
        5. a3 Bxc3+ 6. bxc3 {White has doubled pawns but gets the bishop pair.}
        Ne7 {Heading for f5 or c6, without blocking the f-pawn.}
        7. Qg4 {Attacks g7, which no longer has a dark-squared bishop to protect it.}
        Qc7 {Counterattack: Black gives up the kingside pawns for central play.}
        8. Qxg7 Rg8 9. Qxh7 cxd4 10. Ne2 Nbc6 11. f4 dxc3 {A sharp, double-edged position with chances for both sides.}`,
    },
    {
      name: 'Exchange Variation',
      pgn: `1. e4 e6 2. d4 d5
        3. exd5 {The Exchange: a symmetrical, quiet structure.}
        exd5 {Black's light-squared bishop is no longer blocked.}
        4. Nf3 Nf6 5. Bd3 Bd6 6. O-O O-O 7. Bg5 Bg4 {Mirror moves. Black is fine and can play for a win.}
        8. Nbd2 Nbd7 {Equal and easy to play.}`,
    },
    {
      name: 'Tarrasch: 3...c5',
      pgn: `1. e4 e6 2. d4 d5
        3. Nd2 {The Tarrasch. The knight avoids the Winawer pin.}
        c5 {Hit the centre immediately.}
        4. exd5 Qxd5 {Recapture with the queen to avoid an isolated pawn.}
        5. Ngf3 cxd4 6. Bc4 Qd6 {The queen retreats to a safe square.}
        7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6 {Stops Nb5 and Bb5+. Black has a healthy pawn structure.}`,
    },
    {
      name: "Winawer: 7.a4",
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7
        7. a4 {White prepares Ba3 to use the bishop pair.}
        Nbc6 8. Nf3 Qa5 {Pressure on c3 and the a4 pawn.}
        9. Bd2 Bd7 10. Be2 f6 {Black attacks e5 next, opening the f-file.}`,
    },
    {
      name: "Winawer: 4.exd5",
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4
        4. exd5 exd5 {A symmetrical structure, but Black's bishop is active.}
        5. Bd3 Nc6 6. a3 Bxc3+ 7. bxc3 Nge7 8. Ne2 Bf5 {Trade off White's good bishop.}
        9. O-O O-O {Equal and easy for Black.}`,
    },
    {
      name: "Winawer: 4.a3",
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4
        4. a3 Bxc3+ 5. bxc3 dxe4 {Take the pawn while White's pieces are undeveloped.}
        6. Qg4 Nf6 7. Qxg7 Rg8 8. Qh6 Nbd7 {Black is a pawn up in the centre and develops quickly.}`,
    },
    {
      name: "King's Indian Attack (2.d3)",
      pgn: `1. e4 e6
        2. d3 {The King's Indian Attack: a quiet system with g3 and Bg2.}
        d5 3. Nd2 Nf6 4. Ngf3 c5 {Space on the queenside.}
        5. g3 Nc6 6. Bg2 Be7 7. O-O O-O 8. Re1 b5 {Black attacks on the queenside while White prepares e5 and a kingside attack.}`,
    },
  ],
}
