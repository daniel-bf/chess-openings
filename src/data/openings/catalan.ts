import type { OpeningSource } from '../types'

export const catalan: OpeningSource = {
  id: "catalan",
  name: "Catalan Opening",
  eco: "E00–E09",
  side: "white",
  summary:
    "You lead the White Kingdom in a Queen's Gambit (d4 and c4) with a twist: g3 and Bg2 post your king's priest on the long diagonal road from h1 to a8. This fianchetto priest presses on d5 and the Black queenside all game and makes the Black c8 priest hard to bring out. If the enemy grabs the c4 soldier, you are happy to wait a few moves before taking it back.",
  ideas: [
    "Fianchetto with g3 and Bg2: the priest on the long diagonal road aims at d5, b7 and a8, and also guards your King.",
    "If the enemy takes on c4, do not panic: retreat the King into the castle, then win the soldier back with Qc2 or Qa4, using a4 to stop ...b5 when needed.",
    "Squeeze slowly: the Black c8 priest and queenside are the usual weak spots, and the e4 push (prepared by Qc2 and Nbd2) gains heartland space.",
  ],
  lines: [
    {
      name: "Open Defence, Classical Line (5...Be7)",
      pgn: `1. d4 {A White soldier claims d4 in the heartland and opens the road for the c1 priest.}
        Nf6 2. c4 {A second soldier marches to c4, gaining space and pressing on d5, as in the Queen's Gambit.}
        e6 3. g3 {The Catalan: you prepare to post the priest on g2, on the long diagonal road.}
        d5 4. Bg2 {The priest now aims at d5 and, further down the road, at b7 and a8.}
        dxc4 {The Open Catalan: the Black Kingdom grabs the soldier and opens your priest's road even more.}
        5. Nf3 {A rider comes out and the King gets ready for the castle. The c4 soldier can be won back later.}
        Be7 6. O-O {The King into the castle first; the soldier on c4 will not run away.}
        O-O 7. Qc2 {Your Queen attacks the c4 soldier to win it back.}
        a6 {The enemy prepares ...b5 to hold on to c4.}
        8. a4 {Stops ...b5, so no Black soldier can come to guard c4.}
        Bd7 {The Black priest plans ...Bc6 to face your g2 priest on the long diagonal road.}
        9. Qxc4 {The soldier is won back.}
        Bc6 10. Bg5 {Your priest develops and pins the f6 rider, which shields both the Black King and the c6 priest. You keep a small, pleasant edge.}`,
    },
    {
      name: "Open Defence: 5...c5 (7.Qa4)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        c5 {The enemy strikes at d4 at once, so your heartland is under attack too.}
        6. O-O {The King into the castle. After ...cxd4, your rider would recapture, with a lively fight.}
        Nc6 7. Qa4 {Your Queen hits the c4 soldier and pins the c6 rider against its King.}
        Bd7 {The Black priest steps in to break the pin.}
        8. Qxc4 {The soldier is won back.}
        b5 {A Black soldier kicks your Queen and gains queenside land.}
        9. Qd3 {The Queen stays in the heartland, eyeing d4 and b5.}
        c4 {Another soldier kicks the Queen and grabs more land.}
        10. Qd1 {The Queen retreats to safety. The advanced b5 and c4 soldiers can become targets for a4, b3 and the g2 priest.}`,
    },
    {
      name: "Open Defence, Modern Sharp Variation (5...Nc6 6.Qa4)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        Nc6 {A Black rider comes out and attacks d4, planning ...Rb8 and ...b5 to keep the stolen soldier.}
        6. Qa4 {Your Queen pins the c6 rider and hits c4 before the enemy can guard it.}
        Bb4+ 7. Bd2 {Your priest blocks the check and offers a priest trade.}
        Nd5 {The Black rider guards its b4 priest from the heartland.}
        8. Bxb4 {You trade off the enemy's busy priest.}
        Ndxb4 9. O-O {The King into the castle before chasing c4. Next come Nc3, a3 or Qxc4.}`,
    },
    {
      name: "Closed, Main Line (4...Be7, 9.e4)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2
        Be7 {The Closed Catalan: the Black soldier stays on d5 for now.}
        5. Nf3 {A rider comes out and the King gets ready for the castle.}
        O-O 6. O-O {The King is safe in the castle.}
        Nbd7 7. Qc2 {Your Queen watches e4 and backs up c4, preparing e4.}
        c6 8. Nbd2 {The second rider supports e4 and can retake on c4 if the enemy ever captures there.}
        b6 {The enemy prepares ...Bb7 to free its trapped c8 priest.}
        9. e4 {Your soldier strikes in the heartland and gains land.}
        Bb7 10. b3 {Guards c4 and prepares Bb2, so every White piece backs the heartland.}`,
    },
    {
      name: "4...Bb4+ 5.Bd2 Be7 (Bogo-Indian Retreat Variation)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2
        Bb4+ {A check from the Black priest forces you to block, so the d2 square gets filled.}
        5. Bd2 {Your priest blocks and offers a trade.}
        Be7 {The Black priest walks back: now your priest on d2 stands a little idle.}
        6. Nf3 {A rider comes out and the King gets ready for the castle.}
        O-O 7. O-O {The King is safe in the castle.}
        c6 8. Qc2 {Your Queen backs up c4 and watches e4.}
        b6 9. Ne5 {The rider jumps clear of the long diagonal road for the g2 priest and eyes c6, a soldier weakened by ...b6.}`,
    },
    {
      name: "Bogo-Indian Defence: Retreat Variation (3...Bb4+ 4.Bd2 Be7)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        Bb4+ {The Black priest checks before ...d5.}
        4. Bd2 {Your priest blocks the check.}
        Be7 5. Bg2 {Your priest takes the long diagonal road.}
        d5 6. Nf3 {A rider comes out and the King gets ready for the castle.}
        O-O 7. O-O {The same battlefield as in the 4...Bb4+ line.}`,
    },
    {
      name: "Benoni Defence: Fianchetto Variation (3...c5)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        c5 {A Black soldier attacks d4 and invites a Benoni structure.}
        4. d5 {Your soldier marches past to gain land and cramp the enemy.}
        exd5 5. cxd5 {You retake with the c-soldier, keeping a soldier planted on d5.}
        d6 6. Nc3 {A rider comes out and guards d5.}
        g6 7. Bg2 {Your priest backs up d5 from the long diagonal road.}
        Bg7 8. Nf3 {The second rider comes out and watches e5, where the enemy wants to post pieces.}
        O-O 9. O-O {A Fianchetto Benoni. You hold more heartland space; the enemy has an extra soldier on the queenside, a pawn majority.}`,
    },
    {
      name: "King's Indian: Fianchetto Variation, Classical (2...g6)",
      pgn: `1. d4 Nf6 2. c4
        g6 {The Black Kingdom goes for a King's Indian with ...Bg7.}
        3. g3 {You still fianchetto: the g2 priest will face the g7 priest and guard your King.}
        Bg7 4. Bg2 {Your priest takes the long diagonal road.}
        O-O 5. Nc3 {A rider comes out and watches d5 and e4.}
        d6 6. Nf3 {The second rider watches e5, slowing the enemy's ...e5.}
        Nbd7 7. O-O {The King is safe in the castle.}
        e5 8. e4 {You answer ...e5 by grabbing more heartland: the Fianchetto King's Indian.}`,
    },
    {
      name: "Open Defence: Main Line (5...a6 6.O-O Nc6)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
        a6 {The main line of the Open Catalan: the enemy prepares ...b5 to hang on to the c4 soldier.}
        6. O-O {The King into the castle first. You are in no hurry to win the soldier back.}
        Nc6 {A Black rider comes out and adds pressure on d4.}
        7. e3 {A soldier props up d4, so the c6 rider has nothing to hit, and opens the d1-e2 path for your Queen.}
        Bd7 8. Qe2 {Your Queen hits c4 and gets ready to support e4 or b3.}
        b5 {The enemy holds the extra soldier with ...b5, but this loosens c6 and the long diagonal road.}
        9. Rd1 {Your tower faces the Black Queen on the d-file road and prepares d5 or e4 in the heartland. You will win back c4 with b3 or a4 later, with lasting pressure on the long diagonal.}`,
    },
    {
      name: "Budapest Gambit: Main Line, Rubinstein Variation (4.Bf4)",
      pgn: `1. d4 Nf6 2. c4
        e5 {The Budapest Gambit: the enemy offers a soldier to open roads and bring out pieces fast.}
        3. dxe5 {You take the soldier.}
        Ng4 {A Black rider attacks e5 and will win the soldier back.}
        4. Bf4 {The Rubinstein Variation: your priest guards e5 and develops. Most authors call this the most dangerous line for Black.}
        Nc6 5. Nf3 {A rider comes out and guards e5 a second time.}
        Bb4+ 6. Nbd2 {You block with a rider, so the f4 priest keeps guarding e5.}
        Qe7 7. e3 {A soldier backs up the f4 priest and opens the road for the f1 priest.}
        Ngxe5 {The enemy wins the soldier back, so armies are level.}
        8. Nxe5 {A pair of riders leaves the field.}
        Nxe5 9. Be2 {Your priest comes out and the King gets ready for the castle. You plan O-O and Nb3 or a3, with a small edge thanks to the c4 soldier, plus the bishop pair if the enemy takes on d2.}`,
    },
    {
      name: "Queen's Indian: Classical, Traditional Variation, Main Line (3...b6)",
      pgn: `1. d4 Nf6 2. c4 e6 3. g3
        b6 {A Queen's Indian setup: the Black priest will fight your g2 priest on the long diagonal road.}
        4. Nf3 {A rider comes out and the King gets ready for the castle. With the rider on f3 this is a normal Queen's Indian with g3.}
        Bb7 5. Bg2 {Your fianchetto priest now faces the b7 priest, with the f3 rider standing between them.}
        Be7 6. O-O {The King is safe in the castle.}
        O-O 7. Nc3 {The second rider comes out and watches e4 and d5, the squares the Black priest is aiming at.}
        Ne4 {The enemy offers a rider trade to ease the fight for e4.}
        8. Qc2 {Your Queen guards c3 and watches e4.}
        Nxc3 9. Qxc3 {The Queen retakes and now eyes the long diagonal road. You want b3, Bb2 and later e4 or d5 to gain land.}`,
    },
  ],
}
