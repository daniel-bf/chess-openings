import type { OpeningSource } from '../types'

export const french: OpeningSource = {
  id: 'french',
  name: 'French Defense',
  eco: 'C00–C19',
  side: 'black',
  summary:
    'A solid counter-punching reply to 1.e4. With ...e6 and ...d5 Black challenges e4 straight away, with a pawn ready to take back on d5. White often pushes e5 and gets more space, but the pawns on d4 and e5 then become targets: Black hits the base of the chain with ...c5 and the front with ...f6. The price is the light-squared bishop on c8, which is shut in behind the e6 pawn, so Black plays on the queenside and in the centre rather than attacking the king.',
  ideas: [
    'Attack the base of White\'s pawn chain with ...c5; if d4 falls, the e5 pawn is left hanging.',
    'Pile up on d4 with ...Nc6, ...Qb6 and a knight on f5, then break the front of the chain with ...f6.',
    'The c8 bishop is your problem piece: swap it, or bring it out via d7 to b5 or a6 (or before ...e6 in the Exchange).',
  ],
  lines: [
    {
      name: 'Advance: 5...Qb6 6.a3',
      pgn: `1. e4 e6 {The French. You prepare ...d5 so that if White takes, a pawn can take back.}
        2. d4 d5 {Challenges e4 at once. White must defend, swap or push it.}
        3. e5 {The Advance Variation. White grabs space and cramps your kingside, but the d4 pawn now holds the whole chain.}
        c5 {Hit the base of the chain right away: if d4 goes, e5 loses its support.}
        4. c3 {Supports d4 with another pawn.}
        Nc6 {A second attacker on d4.}
        5. Nf3 Qb6 {A third attacker on d4, and the queen also eyes b2.}
        6. a3 {White prepares b4 to grab queenside space and kick your c5 pawn.}
        c4 {Closes the queenside before b4 comes. Now b3 is a hole your pieces can use.}
        7. Nbd2 {The knight covers b3 and c4.}
        Na5 {The knight eyes b3 and protects the c4 pawn.}
        8. Rb1 {The rook prepares b4 anyway.}
        Bd7 {Develops your problem bishop; it can go to b5 or a4 later. Then come ...Ne7 and ...f6.}`,
    },
    {
      name: 'Advance: 6.Be2',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6
        6. Be2 {Solid. White simply plans to castle and defend d4.}
        cxd4 {Swap now so the c-file opens and White's d4 pawn loses its c3 support.}
        7. cxd4 Nh6 {The knight heads for f5, where it becomes the fourth attacker on d4.}
        8. b3 {Prepares Bb2 to add a defender of d4.}
        Nf5 {Now the knight, queen and c6 knight all hit d4.}
        9. Bb2 Bb4+ {A useful check before White castles: blocking would take a defender away from d4, so White usually moves the king.}
        10. Kf1 Be7 {The bishop drops back with its job done: White can no longer castle and the h1 rook is stuck.}`,
    },
    {
      name: 'Advance: Milner-Barry Gambit',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6
        6. Bd3 {The Milner-Barry Gambit: White is ready to give up the d4 pawn for fast development.}
        cxd4 {Swap first so the d4 pawn has no pawn support.}
        7. cxd4 Bd7 {Prepares to take on d4: now Bb5+ is no longer a threat, because the bishop on d7 blocks the check.}
        8. O-O Nxd4 {Take the pawn.}
        9. Nxd4 Qxd4 {Black is a pawn up; now defend carefully and develop.}
        10. Nc3 a6 {Stops Nb5, which would hit your queen and the c7 square.}`,
    },
    {
      name: 'Winawer: Poisoned Pawn',
      pgn: `1. e4 e6 2. d4 d5
        3. Nc3 {The main line: the knight defends e4.}
        Bb4 {The Winawer: pin the knight that defends e4.}
        4. e5 {White closes the centre and gains space.}
        c5 {Attack the base of the chain at once, as in the Advance.}
        5. a3 {White asks the bishop to decide.}
        Bxc3+ {Give up the bishop to double White's c-pawns.}
        6. bxc3 {White has doubled pawns but gets the bishop pair (two bishops against bishop and knight).}
        Ne7 {Heading for f5 or c6, without blocking the f-pawn.}
        7. Qg4 {Attacks g7, which lost its defender when your dark-squared bishop left.}
        Qc7 {Counterattack instead of defending: you give up the kingside pawns, hit e5 and prepare ...cxd4 against c3.}
        8. Qxg7 Rg8 {Chase the queen and take the open g-file for your rook.}
        9. Qxh7 cxd4 {Now the white centre collapses: c3 is attacked as well.}
        10. Ne2 Nbc6 {Develops and adds pressure on e5 and d4.}
        11. f4 {Defends e5.}
        Bd7 {Develops and connects your pieces. Your king can castle long later.}
        12. Qd3 {The queen comes back to defend.}
        dxc3 {Take on c3: the pawn there cramps White's queenside. A sharp, double-edged fight.}`,
    },
    {
      name: 'Exchange Variation',
      pgn: `1. e4 e6 2. d4 d5
        3. exd5 {The Exchange: a symmetrical, quiet structure.}
        exd5 {Take back: the c8 bishop is no longer shut in.}
        4. Nf3 Nf6 {Develop towards the kingside.}
        5. Bd3 Bd6 {Mirror White's development.}
        6. O-O O-O {Kings to safety.}
        7. Bg5 Bg4 {Pin the f3 knight in return, so it cannot jump to e5 freely.}
        8. Nbd2 Nbd7 {Protects f6, so Bxf6 can be met with the knight. Equal, and easy to play.}`,
    },
    {
      name: 'Tarrasch: 3...c5',
      pgn: `1. e4 e6 2. d4 d5
        3. Nd2 {The Tarrasch. The knight defends e4 without being pinned by ...Bb4.}
        c5 {Hit the centre at once.}
        4. exd5 Qxd5 {Take back with the queen to avoid an isolated d-pawn.}
        5. Ngf3 cxd4 {Swap pawns; White will win d4 back.}
        6. Bc4 {Attacks your queen.}
        Qd6 {A safe central square that still watches d4.}
        7. O-O Nf6 {Develop and prepare to castle.}
        8. Nb3 Nc6 {Defends d4 one more time.}
        9. Nbxd4 Nxd4 {Swap knights to reduce White's attacking pieces.}
        10. Nxd4 a6 {Stops Nb5 and Bb5+ and prepares ...b5. Your pawns are healthy.}`,
    },
    {
      name: 'Winawer: 7.a4',
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7
        7. a4 {Prepares Ba3, where the bishop would hit your c5 pawn and e7 knight.}
        Nbc6 {Develops and adds pressure on d4.}
        8. Nf3 Qa5 {Pressure on the weak c3 pawn and the a4 pawn.}
        9. Bd2 Bd7 {Develops and connects your rooks.}
        10. Be2 f6 {Attack the front of the chain to open the f-file for your rook.}`,
    },
    {
      name: 'Winawer: Exchange (4.exd5)',
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4
        4. exd5 exd5 {A symmetrical structure, but your bishop is already active on b4.}
        5. Bd3 Nc6 {Develops and eyes d4.}
        6. a3 Bxc3+ {Swap to give White doubled c-pawns.}
        7. bxc3 Nge7 {The knight goes to e7 so the c8 bishop can come to f5.}
        8. Ne2 Bf5 {Offer to swap White's best bishop.}
        9. O-O O-O {Equal, with White's doubled pawns as a long-term target.}`,
    },
    {
      name: 'Winawer: 4.a3',
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4
        4. a3 {White forces the bishop to decide at once.}
        Bxc3+ {Swap: White gets doubled pawns.}
        5. bxc3 dxe4 {The knight that defended e4 is gone, so take the pawn.}
        6. Qg4 {Attacks g7.}
        Nf6 {Develop with an attack on the queen instead of weakening yourself with ...g6.}
        7. Qxg7 Rg8 {Chase the queen and take the open g-file.}
        8. Qh6 Nbd7 {Develop quickly. Material is level (your e4 pawn for g7) and you are ahead in development.}`,
    },
    {
      name: 'King\'s Indian Attack (2.d3)',
      pgn: `1. e4 e6
        2. d3 {The King's Indian Attack: a quiet system with g3, Bg2, castling and later e5.}
        d5 {Take the centre.}
        3. Nd2 Nf6 {Develop and attack e4.}
        4. Ngf3 c5 {Grab space on the queenside, where you will play.}
        5. g3 Nc6 {Develops and controls d4.}
        6. Bg2 Be7 {Prepare to castle.}
        7. O-O O-O {King to safety.}
        8. Re1 b5 {Race on the queenside with ...b4 and ...a5 while White pushes e5 and attacks your king.}`,
    },
  ],
}
