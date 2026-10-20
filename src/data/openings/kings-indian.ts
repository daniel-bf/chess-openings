import type { OpeningSource } from '../types'

export const kingsIndian: OpeningSource = {
  id: 'kings-indian',
  name: "King's Indian Defense",
  eco: 'E60–E99',
  side: 'black',
  summary:
    'A fighting hypermodern defence against 1.d4. Black lets White build a big centre, fianchettoes the bishop, then strikes back with ...e5 and often a kingside pawn storm with ...f5-f4.',
  ideas: [
    'Fianchetto the bishop on g7 and castle quickly.',
    'Hit the centre with ...e5 (or ...c5).',
    'When the centre locks, attack on the kingside with ...f5, ...f4 and ...g5.',
  ],
  lines: [
    {
      name: 'Classical: Mar del Plata (9.Ne1)',
      pgn: `1. d4 Nf6 {Flexible. It stops e4 for now.}
        2. c4 g6 {Prepares the fianchetto.}
        3. Nc3 Bg7 4. e4 d6 {Black lets White have the centre, planning to attack it later.}
        5. Nf3 O-O 6. Be2 e5 {The key break. Black fights for the dark squares.}
        7. O-O Nc6 {Adds pressure to d4 and provokes d5.}
        8. d5 Ne7 {The centre is locked: now each side attacks where its pawns point.}
        9. Ne1 {White prepares f3 and c5 on the queenside.}
        Nd7 {Clears the way for the f-pawn.}
        10. Nd3 f5 {The thematic kingside break.}
        11. Bd2 Nf6 12. f3 f4 {Gains space and prepares ...g5-g4. A race between attacks follows.}`,
    },
    {
      name: 'Classical: Bayonet Attack (9.b4)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7
        9. b4 {The Bayonet: White races on the queenside at once.}
        Nh5 {Clears the f-pawn and eyes f4.}
        10. Re1 f5 11. Ng5 {The knight eyes e6 and the light squares.}
        Nf6 {Defends and fights for e4.}`,
    },
    {
      name: 'Classical: Petrosian (7.d5)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. d5 {The Petrosian System: White locks the centre at once.}
        a5 {Slows down White's b4 queenside expansion.}
        8. Bg5 h6 9. Bh4 Na6 {The knight heads for c5, a superb outpost.}`,
    },
    {
      name: 'Sämisch Variation (5.f3)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. f3 {The Sämisch: rock-solid e4 and a plan of Be3, Qd2 and a kingside pawn storm.}
        O-O 6. Be3 e5 7. d5 Nh5 {Prepares ...f5 to fight for e4.}
        8. Qd2 f5 9. O-O-O Nd7 {Black develops and keeps ...f4 in reserve.}`,
    },
    {
      name: 'Four Pawns Attack (5.f4)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. f4 {The Four Pawns Attack: White builds a huge centre.}
        O-O 6. Nf3 c5 {Hit the centre before it rolls forward.}
        7. d5 e6 8. Be2 exd5 9. cxd5 Re8 {Pressure on e4 along the e-file.}
        10. e5 dxe5 11. fxe5 Ng4 {Attack the e5 pawn again.}
        12. Bg5 Qb6 {Counterattack on b2. Sharp tactics follow.}`,
    },
    {
      name: 'Fianchetto Variation (3.Nf3 4.g3)',
      pgn: `1. d4 Nf6 2. c4 g6
        3. Nf3 Bg7 4. g3 {White mirrors Black with a kingside fianchetto.}
        O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 {The usual ...e5 break.}
        8. e4 c6 {Supports ...b5 or ...Qb6 and controls d5.}
        9. h3 Qb6 {Pressure on d4 and b2.}`,
    },
    {
      name: "Classical: Gligoric (7.Be3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. Be3 {The Gligoric system: White keeps the tension.}
        Ng4 {Chase the bishop.}
        8. Bg5 f6 9. Bh4 Nc6 {Pressure on d4 forces a decision.}
        10. d5 Ne7 {Now the knight goes to the kingside and ...f5 follows.}`,
    },
    {
      name: "Classical: Exchange (7.dxe5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. dxe5 dxe5 8. Qxd8 Rxd8 {The queens are off but Black is fine.}
        9. Bg5 Re8 10. Nd5 Nxd5 11. cxd5 c6 {Break up the d5 pawn. Equal.}`,
    },
    {
      name: "Makogonov (5.h3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. h3 {Stops ...Ng4 and ...Bg4, and prepares g4.}
        O-O 6. Be3 e5 7. d5 a5 {Stops b4 and gives the knight c5.}
        8. g4 Na6 {The knight heads for c5.}`,
    },
    {
      name: "Averbakh (5.Be2 and 6.Bg5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. Be2 O-O 6. Bg5 {The Averbakh: Bg5 makes ...e5 awkward for now.}
        c5 {Hit the centre from the other side.}
        7. d5 e6 8. Qd2 exd5 9. exd5 Re8 {Pressure on the e-file.}
        10. Nf3 Bg4 {Black develops with ...Nbd7 and ...a6 next.}`,
    },
  ],
}
