import type { OpeningSource } from '../types'

export const caroKannAdvanceWhite: OpeningSource = {
  id: 'caro-kann-advance-white',
  name: 'Caro-Kann Advance (as White)',
  eco: 'B12',
  side: 'white',
  summary:
    "You command the White Kingdom. In the Advance Variation (1.e4 c6 2.d4 d5 3.e5) your soldier on e5 grabs land, so the Black rider cannot use f6. This repertoire uses the Short Variation (4.Nf3, 5.Be2 and quick castling), made popular by Nigel Short: a calm build-up where you muster your army first and answer the Black Kingdom's ...c5 break. The enemy's kingside pieces struggle to find good squares, and you look for chances with c4, Be3 or a kingside land grab.",
  ideas: [
    'Muster first: Nf3, Be2 and O-O. Your extra land on the kingside leaves the Black army cramped and awkward.',
    'The Black Kingdom\'s main break is ...c5. Meet it with Be3 (guarding d4), c4, or by taking on c5 and using the d4 square for a piece.',
    'Watch the enemy\'s kingside pieces: a rider on e7 can be hit by Nb3-c5 ideas, a priest on g6 by Nh4, and ...h6 and ...g5 leave weaknesses.',
  ],
  lines: [
    {
      name: 'Short Variation: 5...Nd7 6.O-O Ne7 (8.Nb3)',
      pgn: `1. e4 {Your foot soldier marches to e4 and plants a flag in the heartland. Roads open for your Queen and the f1 priest.}
        c6 {The Caro-Kann Defence. The Black Kingdom prepares ...d5, backed by its c-soldier.}
        2. d4 {A second soldier joins: a full shield wall in the heartland.}
        d5 {The Black soldier strikes at e4.}
        3. e5 {The Advance Variation. You seize land and take the f6 square away from the Black rider.}
        Bf5 {The main move. Unlike in the French, the Black light-road priest escapes outside its shield wall before ...e6.}
        4. Nf3 {The Short Variation. Your rider calmly comes out and guards d4.}
        e6 {The Black Kingdom builds a solid shield wall and opens the road for its f8 priest.}
        5. Be2 {Your priest steps out and makes way for castling. It also stops ...Bg4 pins.}
        Nd7 {The Black rider backs a later ...c5 and keeps watch on your e5 soldier.}
        6. O-O {The King retreats into the castle first.}
        Ne7 {The Black rider heads for g6 or f5.}
        7. Nbd2 {Your rider comes out and heads for b3, where it controls c5 and d4.}
        h6 {The Black Kingdom digs a retreat on h7 for its priest.}
        8. Nb3 {Your rider blocks ...c5 and can leap to a5 or c5 later. Next come Bd2 or a4 to win queenside land.}`,
    },
    {
      name: 'Short Variation: 5...Nd7 6.O-O Bg6',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 Nd7 6. O-O
        Bg6 {The Black priest steps back early so Nh4 or g4 cannot hunt it later.}
        7. Nbd2 {Your rider comes out, keeping Nb3, c4 or Nh4 (to take the priest) in reserve.}`,
    },
    {
      name: 'Short Variation: 5...Ne7 6.O-O c5 (7.c4)',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2
        Ne7 {The Black rider heads for c6 or g6 before the enemy decides on ...Nd7.}
        6. O-O {Into the castle first.}
        c5 {The Black Kingdom strikes at d4 straight away.}
        7. c4 {Hit back in the heartland. The enemy is behind in development, so opening the land suits you.}
        Nbc6 {Another Black rider piles pressure on d4.}
        8. dxc5 {Take. The Black soldier on d5 grows weak, and the d4 square is free for your troops.}`,
    },
    {
      name: 'Short Variation: 5...c5 6.Be3 cxd4 (8.c4)',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2
        c5 {The main break. The Black Kingdom attacks d4 at once.}
        6. Be3 {Short's move. Your priest guards d4 and sometimes takes on c5.}
        cxd4 {The enemy trades soldiers.}
        7. Nxd4 {Your rider recaptures. It stands in the heartland and attacks the f5 priest.}
        Ne7 {The Black rider comes out and watches f5 and c6.}
        8. c4 {Attack the Black soldier on d5. You open the heartland while the enemy is still behind in development.}`,
    },
    {
      name: 'Short Variation: 5...c5 6.Be3 Nd7',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 c5 6. Be3
        Nd7 {The Black rider backs c5 and waits to see where your King goes.}
        7. O-O {Into the castle. Your King is safe before the heartland opens, and c4 or dxc5 can follow.}`,
    },
    {
      name: 'Botvinnik-Carls Defence: 3...c5 4.dxc5 Nc6',
      pgn: `1. e4 c6 2. d4 d5 3. e5
        c5 {The Botvinnik-Carls Defence. The Black Kingdom hits d4 a move later than in the French, but without ...e6 first.}
        4. dxc5 {Take. You keep your e5 soldier, and the enemy must spend time winning its soldier back.}
        Nc6 {The Black rider comes out and attacks e5.}
        5. Nf3 {Your rider comes out and guards e5.}
        Bg4 {The Black priest pins your rider, so it cannot easily keep guarding e5.}
        6. c3 {Prepares b4 to protect your extra soldier on c5, and opens b3 for your Queen.}
        e6 {The Black Kingdom opens the road for its f8 priest, which wants to take on c5.}
        7. b4 {Keeps the extra soldier on c5 and wins queenside land.}`,
    },
    {
      name: 'Botvinnik-Carls Defence: 3...c5 4.dxc5 e6',
      pgn: `1. e4 c6 2. d4 d5 3. e5 c5 4. dxc5
        e6 {The Black Kingdom opens its priest's diagonal road, planning ...Bxc5.}
        5. a3 {Prepares b4, which would keep the extra soldier and make room for Bb2 on the long diagonal road.}
        Nc6 {The Black rider comes out and attacks e5.}
        6. Nf3 {Your rider comes out and guards e5.}`,
    },
    {
      name: '3...Na6 4.Nf3',
      pgn: `1. e4 c6 2. d4 d5 3. e5
        Na6 {A side road. The Black rider heads for c7 or b4 and backs ...c5.}
        4. Nf3 {Muster as usual. The rider on a6 is not doing much yet.}
        Bf5 {The Black priest escapes outside its shield wall.}
        5. Be2 {The same camp as in the Short Variation.}
        e6 6. O-O {Into the castle. You have the usual Short Variation set-up, and the Black rider on a6 is less useful than on d7.}`,
    },
  ],
}
