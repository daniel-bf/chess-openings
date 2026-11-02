// Prototype content for the Middlegame section, written for three pilot openings:
// French Defense (Black), King's Indian Defense (Black) and London System (White).
// `npx tsx scripts/validate-middlegame.ts` checks every square, move and game here.

/** A pawn structure that several lines reach, with the plans for both sides. */
export interface StructureLesson {
  id: string
  name: string
  /** The line whose final position illustrates the structure. */
  exampleLineId: string
  summary: string
  /** Plans for the side you play in these openings, then for the opponent. */
  yourPlans: string[]
  theirPlans: string[]
  /** Arrows for your key breaks and routes, drawn on the example position. */
  arrows: { from: string; to: string }[]
  trades: string
  lineIds: string[]
}

export const structures: StructureLesson[] = [
  {
    id: 'french-chain',
    name: 'French pawn chain (d4 and e5 against e6 and d5)',
    exampleLineId: 'french:0',
    summary:
      'White has more space on the kingside, and you have more on the queenside. The pawn chain points at the side where each player should attack: White plays on the kingside, in front of the e5 pawn, and you play on the queenside and in the centre, against the base at d4.',
    yourPlans: [
      'Hit the base with ...c5, then pile up on d4 with ...Nc6, ...Qb6 and a knight on f5.',
      'Break the front of the chain with ...f6. Prepare it first, so that White cannot answer with a quick attack on e6.',
      'If White plays b4 ideas, close the queenside with ...c4 and use the b3 hole for a knight.',
      'Improve your problem bishop on c8: ...Bd7, then ...Bb5 or ...Ba4 to trade it or make it active.',
    ],
    theirPlans: [
      'Keep the chain with c3, Nf3 and Be2, or give up d4 for quick development (the Milner-Barry Gambit).',
      'Attack the kingside with f4-f5, g4 or a queen on g4, using the space that e5 gives.',
      'Grab queenside space with a3 and b4 when you have played ...c4.',
    ],
    arrows: [
      { from: 'a5', to: 'b3' },
      { from: 'f7', to: 'f6' },
      { from: 'd7', to: 'b5' },
    ],
    trades:
      'Trade your light-squared bishop if you can: it is blocked by your own pawns on e6 and d5. Trading knights on d4 helps you, because it removes a defender of the chain.',
    lineIds: ['french:0', 'french:1', 'french:6', 'french:10', 'french:11'],
  },
  {
    id: 'kid-closed',
    name: "King's Indian closed centre (d5 and e4 against d6 and e5)",
    exampleLineId: 'kings-indian:0',
    summary:
      'Once White plays d5 the centre is locked, so both sides attack where their pawns point. White plays on the queenside with c5, and you storm the kingside with ...f5, ...f4 and ...g5-g4. It is a race: the side whose attack lands first usually wins.',
    yourPlans: [
      'Break with ...f5 after a knight move (...Nd7 or ...Nh5) frees the f-pawn.',
      'Push ...f4 to lock the centre and gain space, then ...g5, ...Ng6 and ...g4 to open lines near White\'s king.',
      'Bring every piece to the kingside: ...Rf7 and ...Bf8 defend the queenside, the queen goes to e8 or h4, and the light bishop eyes h3.',
    ],
    theirPlans: [
      'Break with c5 and open the c-file; a knight on b5 or d3 hits c7 and d6.',
      'Expand with b4, a4 and Nd3, and slow your attack with f3 and Bf2 or Kh1.',
    ],
    arrows: [
      { from: 'g6', to: 'g5' },
      { from: 'e7', to: 'g6' },
      { from: 'f8', to: 'f7' },
    ],
    trades:
      'Keep your light-squared bishop: it is your best attacking piece. Your dark-squared bishop looks blocked by e5, but it defends your king, so do not trade it lightly.',
    lineIds: ['kings-indian:0', 'kings-indian:1', 'kings-indian:10', 'kings-indian:3'],
  },
  {
    id: 'london-triangle',
    name: 'London triangle (c3, d4 and e3 against c5, d5 and e6)',
    exampleLineId: 'london:0',
    summary:
      'Your pawns on c3, d4 and e3 make a solid triangle, and your dark-squared bishop is outside it on f4 or g3. Black usually puts pressure on d4 and b2. The position is quiet, so the plan matters more than the moves: put a knight on e5, support it with f4, and swing pieces to the kingside.',
    yourPlans: [
      'Put a knight on e5 and support it with f4, as in a Stonewall.',
      'Bring the queen to f3 or h5 and a rook to f3 and h3 for a kingside attack.',
      'If Black plays passively, break in the centre with Qe2 and e4.',
      'If Black takes on g3 with the bishop, take back with the h-pawn to open the h-file for your rook.',
    ],
    theirPlans: [
      'Pressure d4 and b2 with ...c5, ...Nc6 and ...Qb6.',
      'Trade your dark-squared bishop with ...Bd6 or ...Nh5, because your attack depends on it.',
      'Exchange the knight on e5 with ...Nd7 or ...Ne7-f5.',
    ],
    arrows: [
      { from: 'f2', to: 'f4' },
      { from: 'd1', to: 'f3' },
      { from: 'd3', to: 'h7' },
    ],
    trades:
      'Keep your dark-squared bishop, retreating it to g3 or h2 rather than allowing a swap. Trading light-squared bishops is fine for you, because it takes Black\'s best defender away.',
    lineIds: ['london:0', 'london:3', 'london:6', 'london:8', 'london:4'],
  },
]

/** A multiple-choice question about the plan at the end of a line. */
export interface PlanQuestion {
  lineId: string
  question: string
  options: {
    text: string
    correct: boolean
    why: string
    /** Arrows that show the idea on the board. */
    arrows: { from: string; to: string }[]
  }[]
}

export const planQuestions: PlanQuestion[] = [
  {
    lineId: 'french:0',
    question: 'You have closed the queenside with ...c4. What is your plan for the next few moves?',
    options: [
      {
        text: 'Develop with ...Ne7 and ...Nc6 or ...Ng6, then break with ...f6 against e5.',
        correct: true,
        why: 'Yes. With the queenside closed, your main lever is ...f6, which attacks the front of the chain. Develop the kingside first so the break comes with your king safe.',
        arrows: [
          { from: 'g8', to: 'e7' },
          { from: 'f7', to: 'f6' },
        ],
      },
      {
        text: 'Grab the b2 pawn with ...Qxb2.',
        correct: false,
        why: 'The rook on b1 guards b2, so ...Qxb2 simply loses the queen.',
        arrows: [{ from: 'b6', to: 'b2' }],
      },
      {
        text: 'Bring the knight back with ...Nc6 to attack d4 again.',
        correct: false,
        why: 'After ...c4 your c-pawn no longer hits d4, so piling up on d4 has lost its point. The knight belongs on b3, the hole that ...c4 created.',
        arrows: [{ from: 'a5', to: 'c6' }],
      },
    ],
  },
  {
    lineId: 'french:1',
    question: "Your check forced White's king to f1. What now?",
    options: [
      {
        text: 'Castle, then play ...f6 to open the f-file against the king on f1.',
        correct: true,
        why: "Yes. White's king is stuck in the centre, so opening the f-file with ...f6 brings your rook straight into the attack, and e5 also comes under fire.",
        arrows: [
          { from: 'e8', to: 'g8' },
          { from: 'f7', to: 'f6' },
        ],
      },
      {
        text: 'Win the d4 pawn now with ...Ncxd4.',
        correct: false,
        why: 'd4 has three defenders (the f3 knight, the b2 bishop and the queen) against your three attackers. After all the swaps you have given a knight, knight and queen for a pawn, knight and bishop.',
        arrows: [{ from: 'c6', to: 'd4' }],
      },
      {
        text: 'Push ...g5 to chase the f3 knight away from d4.',
        correct: false,
        why: 'It weakens your own king and the f5 knight\'s support for little gain. The plan here is ...h5 at most, to stop g4, and play in the centre.',
        arrows: [{ from: 'g7', to: 'g5' }],
      },
    ],
  },
  {
    lineId: 'kings-indian:0',
    question: 'You have played ...f4 and the centre is locked. What is your plan?',
    options: [
      {
        text: 'Storm the kingside with ...g5, ...Ng6 and ...g4.',
        correct: true,
        why: "Yes. This is the classic plan: the g-pawn opens a file near White's king, and the knight on g6 and the bishop on c8 join the attack.",
        arrows: [
          { from: 'g6', to: 'g5' },
          { from: 'e7', to: 'g6' },
        ],
      },
      {
        text: 'Play ...b5 to attack on the queenside.',
        correct: false,
        why: 'The pawns point the other way: White has more space on the queenside and will win any fight there. Your chances are on the kingside.',
        arrows: [{ from: 'b7', to: 'b5' }],
      },
      {
        text: 'Win the e4 pawn with ...Nxe4.',
        correct: false,
        why: 'e4 is defended by the f3 pawn and the c3 knight, so ...Nxe4 just gives away a piece.',
        arrows: [{ from: 'f6', to: 'e4' }],
      },
    ],
  },
  {
    lineId: 'kings-indian:10',
    question: 'You have played ...f5. How do you continue?',
    options: [
      {
        text: 'Bring the knight to f6, then push ...f4 and start the kingside storm with ...g5.',
        correct: true,
        why: 'Yes. ...Nf6 adds pressure on e4 and gets ready for the attack; once White commits, ...f4 and ...g5 follow.',
        arrows: [
          { from: 'd7', to: 'f6' },
          { from: 'f5', to: 'f4' },
        ],
      },
      {
        text: 'Take on e4 at once with ...fxe4 and keep the f-file open.',
        correct: false,
        why: 'This releases the tension too early: White takes back with a knight, gets the e4 square for its pieces and pushes on with c5.',
        arrows: [{ from: 'f5', to: 'e4' }],
      },
      {
        text: 'Play ...c5 to close the queenside for good.',
        correct: false,
        why: 'White simply answers dxc6 or ignores it and plays b4 later; meanwhile your kingside attack has not started. Your time belongs on the kingside.',
        arrows: [{ from: 'c7', to: 'c5' }],
      },
    ],
  },
  {
    lineId: 'london:0',
    question: 'Your knight is on e5. What is the plan?',
    options: [
      {
        text: 'Support the knight with f4, then attack with Qf3 and Rf3-h3.',
        correct: true,
        why: 'Yes. f4 makes the e5 knight hard to remove, and the queen and rook can swing to the kingside along the third rank.',
        arrows: [
          { from: 'f2', to: 'f4' },
          { from: 'd1', to: 'f3' },
        ],
      },
      {
        text: 'Take on c5 with dxc5 to win a pawn.',
        correct: false,
        why: 'Black takes back with the bishop or the b-pawn and gains time. You give up your centre and the support of the e5 knight.',
        arrows: [{ from: 'd4', to: 'c5' }],
      },
      {
        text: 'Push b4 to attack on the queenside.',
        correct: false,
        why: "Your pieces point at the kingside; b4 weakens c3 and c4 and does nothing for the e5 knight. Black's pieces are better placed for a queenside fight.",
        arrows: [{ from: 'b2', to: 'b4' }],
      },
    ],
  },
  {
    lineId: 'london:6',
    question: 'Black often answers this setup with ...Bxg3. How do you take back?',
    options: [
      {
        text: 'hxg3, opening the h-file for your rook.',
        correct: true,
        why: 'Yes. Your king stays safe in the centre or on the queenside for now, and the rook on h1 gets an open file towards h7. The doubled pawns are not a real weakness here.',
        arrows: [{ from: 'h2', to: 'g3' }],
      },
      {
        text: 'fxg3, opening the f-file.',
        correct: false,
        why: 'It is playable, but it weakens e3 and your king\'s cover, and leaves the h2 pawn blocking the h-file. Most players prefer hxg3.',
        arrows: [{ from: 'f2', to: 'g3' }],
      },
      {
        text: 'Avoid the swap: retreat the bishop to h4 now.',
        correct: false,
        why: 'On h4 the bishop can be hit by ...g5 or swapped with ...Be7. Moving it again just loses time; letting Black take is fine.',
        arrows: [{ from: 'g3', to: 'h4' }],
      },
    ],
  },
]

/** Something to do in a play-out: a piece of yours reaching one of the squares. */
export interface PlanGoal {
  label: string
  /** Piece letters that count (p, n, b, r, q, k), in lower case. */
  pieces: string
  squares: string[]
}

export interface PlayoutPlan {
  lineId: string
  goals: PlanGoal[]
}

export const playoutPlans: PlayoutPlan[] = [
  {
    lineId: 'french:0',
    goals: [
      { label: 'Knight to b3 (...Na5-b3)', pieces: 'n', squares: ['b3'] },
      { label: 'Develop the g8 knight (...Ne7)', pieces: 'n', squares: ['e7', 'g6', 'f5'] },
      { label: 'Break with ...f6', pieces: 'p', squares: ['f6', 'e5'] },
    ],
  },
  {
    lineId: 'french:1',
    goals: [
      { label: 'Castle (...O-O)', pieces: 'k', squares: ['g8'] },
      { label: 'Break with ...f6', pieces: 'p', squares: ['f6', 'e5'] },
      { label: 'Develop the bishop (...Bd7)', pieces: 'b', squares: ['d7', 'b5', 'c6'] },
    ],
  },
  {
    lineId: 'kings-indian:0',
    goals: [
      { label: 'Push ...g5', pieces: 'p', squares: ['g5'] },
      { label: 'Knight to g6 (...Ng6)', pieces: 'n', squares: ['g6'] },
      { label: 'Push ...g4', pieces: 'p', squares: ['g4', 'f3', 'h3'] },
    ],
  },
  {
    lineId: 'kings-indian:10',
    goals: [
      { label: 'Knight to f6 (...Nf6)', pieces: 'n', squares: ['f6'] },
      { label: 'Push ...f4', pieces: 'p', squares: ['f4', 'e3', 'g3'] },
      { label: 'Push ...g5', pieces: 'p', squares: ['g5'] },
    ],
  },
  {
    lineId: 'london:0',
    goals: [
      { label: 'Support the knight with f4', pieces: 'p', squares: ['f4'] },
      { label: 'Castle (O-O)', pieces: 'k', squares: ['g1'] },
      { label: 'Queen or rook to f3', pieces: 'qr', squares: ['f3', 'h3', 'h5'] },
    ],
  },
  {
    lineId: 'london:6',
    goals: [
      { label: 'Knight to e5 (Ne5)', pieces: 'n', squares: ['e5'] },
      { label: 'Support it with f4', pieces: 'p', squares: ['f4'] },
      { label: 'Castle (O-O)', pieces: 'k', squares: ['g1'] },
    ],
  },
]

/** A real master game in one of the pilot openings, for guess-the-move. */
export interface ModelGame {
  id: string
  openingId: string
  white: string
  black: string
  event: string
  result: string
  /** You guess the moves of this side. */
  side: 'white' | 'black'
  /** Guessing starts at this ply (0 = White's first move). Earlier moves auto-play. */
  startPly: number
  /** Move text, without comments. */
  moves: string
  /** Short notes on key moves, keyed by ply index. */
  notes: Record<number, string>
  source: string
  intro: string
}

export const modelGames: ModelGame[] = [
  {
    id: 'taimanov-najdorf-1953',
    openingId: 'kings-indian',
    white: 'Mark Taimanov',
    black: 'Miguel Najdorf',
    event: 'Zurich Candidates 1953',
    result: '0-1',
    side: 'black',
    // Guess from Black's 10th move (ply 19).
    startPly: 19,
    moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7
      9. Ne1 Nd7 10. Be3 f5 11. f3 f4 12. Bf2 g5 13. Nd3 Nf6 14. c5 Ng6 15. Rc1 Rf7
      16. Rc2 Bf8 17. cxd6 cxd6 18. Qd2 g4 19. Rfc1 g3 20. hxg3 fxg3 21. Bxg3 Nh5
      22. Bh2 Be7 23. Nb1 Bd7 24. Qe1 Bg5 25. Nd2 Be3+ 26. Kh1 Qg5 27. Bf1 Raf8
      28. Rd1 b5 29. a4 a6 30. axb5 axb5 31. Rc7 Rg7 32. Nb3 Nh4 33. Rc2 Bh3
      34. Qe2 Nxg2 35. Bxg2 Bxg2+ 36. Qxg2 Qh4 37. Qxg7+ Kxg7`,
    notes: {
      19: 'The standard break: the knight left f6 so the f-pawn can go.',
      21: '...f4 locks the centre and gains kingside space. Now the pawn storm can begin.',
      23: '...g5 starts the storm. The g-pawn will go all the way to g3.',
      27: '...Ng6 brings another attacker towards h4 and f4.',
      29: '...Rf7 guards the second rank (c7 and g7), and frees f8 for the bishop.',
      31: '...Bf8 defends d6, the pawn White is attacking after c5.',
      35: '...g4: the storm reaches White\'s king.',
      37: '...g3 opens lines; White must take or let the pawn sit near the king.',
      41: "The knight jumps to h5, heading for f4 and g3 around White's king.",
      47: 'The dark-squared bishop finally gets out, via g5 to e3.',
      49: 'A check that forces the king into the corner.',
      51: 'The queen joins the attack on the g-file.',
      65: '...Bh3 brings the light-squared bishop into the attack, aiming at g2.',
      67: 'The sacrifice breaks open the king\'s cover.',
      71: 'The queen joins and White\'s position collapses.',
    },
    source: 'Move list from GameKnot (gameknot.com/annotation.pl/taimanov-najdorf-zurich-1953). Check it against a second database before release.',
    intro:
      "One of the first great King's Indian attacks. Najdorf follows the plan from the structure lesson move by move: ...f5, ...f4, ...g5-g4-g3, and every piece swings to the kingside while White's queenside play comes too late.",
  },
]
