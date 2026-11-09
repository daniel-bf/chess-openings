import type { OpeningSource } from '../types'

export const frenchAdvanceWhite: OpeningSource = {
  id: 'french-advance-white',
  name: 'French Advance (as White)',
  eco: 'C02',
  side: 'white',
  summary:
    "You command the White Kingdom. In the Advance Variation (1.e4 e6 2.d4 d5 3.e5) your soldiers march past the Black soldier on d5 and form a shield wall d4-e5 that cramps the enemy's kingside. The Black Kingdom will attack the base of that wall with ...c5 and gang up on d4 with ...Nc6, ...Qb6 and a rider on f5. Your task is to keep d4 firmly guarded (c3, Nf3, sometimes Na3-c2 or b4 and Bb2) and to use your extra land on the kingside.",
  ideas: [
    'Guard the base of the shield wall: d4 is what the enemy attacks, so c3, Nf3, Be2 and sometimes Na3-c2 or Be3 keep it safe.',
    'The Black light-road priest on c8 is walled in by its own e6 soldier. The enemy often tries ...Bd7-b5 or ...b6 and ...Ba6 to trade it off.',
    'Against ...Qb6 the a3 and b4 plan wins queenside land and puts your priest on b2, where it guards d4.',
  ],
  lines: [
    {
      name: 'Main Line: 6.a3 c4',
      pgn: `1. e4 {Your foot soldier marches to e4 and plants a flag in the heartland. Roads open for your Queen and the f1 priest.}
        e6 {The French Defence. The Black Kingdom prepares ...d5 to challenge e4.}
        2. d4 {A second soldier joins: a full shield wall in the heartland.}
        d5 {The Black soldier strikes at e4.}
        3. e5 {The Advance Variation. You seize land and cramp the enemy kingside: the Black rider cannot use f6.}
        c5 {The standard break. The Black Kingdom attacks d4, the base of your shield wall.}
        4. c3 {A soldier backs up d4, so after ...cxd4 you recapture with the c-soldier.}
        Nc6 {A Black rider becomes the second attacker of d4.}
        5. Nf3 {Your rider comes out and guards d4 once more.}
        Qb6 {The Black Queen joins the assault on d4 and also hits b2.}
        6. a3 {The Main Line. You prepare b4, which wins queenside land and makes room for your priest on b2.}
        c4 {The Black Kingdom shuts the queenside, so that b4 can be met by ...cxb3 en passant.}
        7. Nbd2 {Your rider comes out and watches b3, so the Black rider cannot settle there. b4 is now met by ...cxb3 and Nxb3.}
        Na5 {The Black rider eyes b3, a hole in your camp.}
        8. Rb1 {Your tower guards b2 from the Queen, so b4 or g3 and Bh3 can come next.}`,
    },
    {
      name: 'Main Line: 6.a3 Bd7 7.b4',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3
        Bd7 {The Black priest comes out and prepares ...Rc8 to use the c-file.}
        7. b4 {Win queenside land and stop ...c4 from fixing your soldiers.}
        cxd4 8. cxd4 {Recapture with the soldier. The c-file is now an open road.}
        Rc8 {The Black tower takes the open c-file to press on c3 and c2.}
        9. Bb2 {Your priest guards d4 and later backs b4-b5.}`,
    },
    {
      name: 'Lputian Variation: 6.a3 Nh6',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3
        Nh6 {The Lputian Variation. The Black rider heads for f5 to hit d4. Taking it with Bxh6 helps the enemy, who gets the g-file and the bishop pair.}
        7. b4 {Stick to your plan: win queenside land and prepare Bb2 to guard d4.}
        cxd4 8. cxd4 {Recapture with the soldier.}
        Nf5 {The Black rider reaches f5 and adds pressure on d4.}
        9. Bb2 {A third guard for d4. Later you can chase the rider away with g4.}`,
    },
    {
      name: 'Euwe Variation: 5...Bd7 6.Be2',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3
        Bd7 {The Euwe Variation. The Black Kingdom holds its Queen back and develops first.}
        6. Be2 {A flexible move. Against ...Bd7 the a3 plan is less useful, so your priest comes out and you get ready to castle.}
        Nge7 {The Black rider heads for f5 to attack d4.}
        7. Na3 {Your rider is bound for c2, where it guards d4 from a safe square.}
        cxd4 8. cxd4 {Recapture with the soldier.}
        Nf5 {Now d4 is attacked by the riders on c6 and f5.}
        9. Nc2 {Your rider guards d4 and also covers e3 and b4.}
        Qb6 10. O-O {Into the castle. d4 is held by your Queen, the f3 rider and the c2 rider.}`,
    },
    {
      name: 'Paulsen Attack: 5...Nge7 6.Na3',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3
        Nge7 {The Black rider heads for f5 to hit d4 straight away.}
        6. Na3 {The same idea as against 5...Bd7: your rider goes to c2 to guard d4.}
        cxd4 7. cxd4 {The c-soldier recaptures and the shield wall stands.}
        Nf5 {The Black rider attacks d4.}
        8. Nc2 {Holds d4 and frees you to bring out the f1 priest and castle.}`,
    },
    {
      name: 'Paulsen Attack: 5...Nh6 6.Bd3',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3
        Nh6 {The Black rider heads for f5 along the edge of the land.}
        6. Bd3 {Your priest covers f5, so when the rider arrives you can take it.}
        cxd4 7. cxd4 {Your c-soldier takes back, and d4 stands firm.}
        Nf5 8. Bxf5 {Remove the rider that attacks d4.}
        exf5 {The Black e6 soldier moves to f5. The c8 priest is still blocked by the d5 soldier.}
        9. Nc3 {Your rider comes out and attacks d5. Next O-O and Ne2-f4 aim at the weak d5 soldier.}`,
    },
    {
      name: 'Wade Variation: 4...Qb6 5.Nf3 Bd7',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3
        Qb6 {The Black Queen rides out first, aiming at d4 and b2.}
        5. Nf3 {Your rider comes out and guards d4.}
        Bd7 {The Wade Variation. The enemy plans ...Bb5 to trade its bad light-road priest (the one walled in by its own soldiers on e6 and d5).}
        6. Be2 {Bring out your priest and get ready to castle. If Black trades on e2, your Queen recaptures and stands well.}
        Bb5 {The Black Kingdom offers the priest trade.}
        7. O-O {Into the castle. The enemy has spent several moves on its priest, and you are ahead in development.}`,
    },
    {
      name: '3...b6 (bishop to a6)',
      pgn: `1. e4 e6 2. d4 d5 3. e5
        b6 {The Black Kingdom prepares ...Ba6 to trade off its bad c8 priest.}
        4. c3 {A soldier backs up d4 and your usual heartland stays intact.}
        Qd7 {Prepares ...Ba6 and makes sure the Black Queen can recapture on a6 or b5.}
        5. Nf3 {Your rider comes out and guards d4.}
        Ba6 {The Black Kingdom offers the priest trade.}
        6. Bxa6 {Take. The enemy must recapture with its rider, which ends up stranded on the rim.}
        Nxa6 7. Qe2 {Your Queen attacks the a6 rider, which has no guard, and you gain time.}
        Nb8 8. O-O {Into the castle. You have more land and a lead in development; c4 or a4-a5 can open roads on the queenside.}`,
    },
  ],
}
