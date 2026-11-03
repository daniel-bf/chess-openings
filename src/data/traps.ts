/**
 * Named traps: the opponent makes a natural-looking mistake and you punish it.
 * `moves` ends with the opponent's mistake; `punish` starts with your reply.
 * Checked by scripts/check-traps.ts (legal moves, and Stockfish agrees).
 */
export interface Trap {
  id: string
  openingId: string
  name: string
  /** Moves up to and including the opponent's mistake. */
  moves: string
  /** Your punishment and the opponent's best defence, your move first. */
  punish: string
  /** Other first moves that are just as strong. */
  alsoGood?: string[]
  idea: string
}

export const traps: Trap[] = [
  {
    id: 'fried-liver',
    openingId: 'italian',
    name: 'Fried Liver Attack (5...Nxd5?)',
    moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5',
    punish: '6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3',
    alsoGood: ['d4'],
    idea:
      'Taking back on d5 with the knight leaves f7 defended only by the king. After Nxf7 and Qf3+ the king has to walk to e6, where it pins its own d5 knight. Nc3 piles up on that knight and Black is fighting for survival. 6.d4 (the Lolli Attack) is just as strong.',
  },
  {
    id: 'legal-mate',
    openingId: 'italian',
    name: "Légal's Mate (4...g6?)",
    moves: '1. e4 e5 2. Nf3 d6 3. Bc4 Bg4 4. Nc3 g6',
    punish: '5. Nxe5 Bxd1 6. Bxf7+ Ke7 7. Nd5#',
    idea:
      "The g4 bishop pins your knight to the queen, but the pin is fake: Nxe5 attacks f7 again. If Black grabs the queen, Bxf7+ and Nd5 is mate. If Black declines with 5...dxe5, 6.Qxg4 simply leaves you a pawn up.",
  },
  {
    id: 'qga-b5',
    openingId: 'queens-gambit',
    name: "Queen's Gambit Accepted: holding c4 with ...b5",
    moves: '1. d4 d5 2. c4 dxc4 3. e3 b5 4. a4 c6 5. axb5 cxb5',
    punish: '6. Qf3',
    idea:
      'Black tries to keep the extra c4 pawn with ...b5 and ...c6, but after the exchanges on b5 the long diagonal is open. Qf3 hits the a8 rook along it. The rook cannot run, because your a1 rook now controls the open a-file, and blocking with ...Nc6 or ...Bb7 just drops that piece.',
  },
  {
    id: 'milner-barry-queen',
    openingId: 'french-advance-white',
    name: 'French Advance: the d4 pawn is poisoned (7...Nxd4?)',
    moves: '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. Bd3 cxd4 7. cxd4 Nxd4',
    punish: '8. Nxd4 Qxd4 9. Bb5+ Kd8 10. Qxd4',
    idea:
      'The d4 pawn looks loose, but taking it walks the queen onto the d-file. After Nxd4 Qxd4, Bb5+ is a discovered attack: whatever Black does about the check, your queen on d1 takes the queen on d4. (If Black blocks with ...Bd7, take on d7 with check first.)',
  },
  {
    id: 'ruy-exchange-nxe5',
    openingId: 'open-games-black',
    name: 'Ruy Lopez Exchange: 5.Nxe5? Qd4!',
    moves: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. Nxe5',
    punish: '5... Qd4 6. Nf3 Qxe4+ 7. Qe2 Qxe2+',
    alsoGood: ['Qg5'],
    idea:
      'After Bxc6 White threatens to win e5, but not yet: Qd4 forks the knight and the e4 pawn. You win the pawn back with check, trade queens, and keep the two bishops for the endgame.',
  },
  {
    id: 'elephant-trap',
    openingId: 'queens-gambit-declined',
    name: 'Elephant Trap (6.Nxd5?)',
    moves: '1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. cxd5 exd5 6. Nxd5',
    punish: '6... Nxd5 7. Bxd8 Bb4+ 8. Qd2 Bxd2+ 9. Kxd2 Kxd8',
    idea:
      'White thinks the f6 knight is pinned to your queen, so d5 looks free. Take it anyway. If White grabs the queen, Bb4+ forces Qd2 and you take the queen back: you come out a piece up.',
  },
  {
    id: 'siberian-trap',
    openingId: 'sicilian',
    name: 'Siberian Trap in the Smith-Morra (9.h3?)',
    moves: '1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Qc7 7. O-O Nf6 8. Qe2 Ng4 9. h3',
    punish: '9... Nd4 10. Nxd4 Qh2#',
    idea:
      'White kicks the g4 knight, but your queen and knight are already aimed at h2. Nd4 hits the e2 queen, and if White takes it with the f3 knight, nothing guards h2 any more: Qh2 is mate. If the queen moves instead, Nxf3+ wins material.',
  },
]

export function trapsForOpening(openingId: string): Trap[] {
  return traps.filter((t) => t.openingId === openingId)
}
