import type { OpeningSource } from '../types'

export const french: OpeningSource = {
  id: 'french',
  name: 'French Defense',
  eco: 'C00–C19',
  side: 'black',
  summary:
    'The White Kingdom opens with 1.e4, and you, ruler of the Black Kingdom, answer as a patient counter-puncher. With ...e6 and ...d5 you challenge e4 at once, with a soldier ready to take back on d5. White often pushes e5 and grabs more land, but its soldiers on d4 and e5 then become targets: you strike the base of that shield wall with ...c5 and its front with ...f6. The price is your light-road priest on c8, locked in behind the e6 soldier, so your war is fought on the queenside and in the heartland, not against the enemy King.',
  ideas: [
    'Strike the base of White\'s shield wall with ...c5; if d4 falls, the e5 soldier is left standing alone.',
    'Gather an army against d4 with ...Nc6, ...Qb6 and a rider on f5, then break the front of the wall with ...f6.',
    'The c8 priest is your problem piece: trade it, or lead it out via d7 to b5 or a6 (or before ...e6 in the Exchange).',
  ],
  lines: [
    {
      name: 'Advance: Main Line (6.a3 c4)',
      pgn: `1. e4 e6 {The French. Your soldier steps to e6 to prepare ...d5, so that if White takes, a comrade can take back.}
        2. d4 d5 {You challenge e4 at once. White must defend it, trade it or push it.}
        3. e5 {The Advance Variation. White grabs land and cramps your kingside, but the d4 soldier now holds up the whole wall.}
        c5 {Strike the base of the wall right away: if d4 falls, e5 loses its support.}
        4. c3 {Another White soldier props up d4.}
        Nc6 {Your rider joins as a second attacker on d4.}
        5. Nf3 Qb6 {Your Queen becomes the third attacker on d4, and she also eyes b2.}
        6. a3 {White prepares b4 to grab queenside land and drive off your c5 soldier.}
        c4 {You seal the queenside before b4 arrives. Now b3 is a hole your army can use.}
        7. Nbd2 {The White rider guards b3 and c4.}
        Na5 {Your rider eyes b3 and protects the c4 soldier.}
        8. Rb1 {The White tower prepares b4 anyway.}
        Bd7 {Your problem priest finally leaves home; it can go to b5 or a4 later. Next come ...Ne7 and ...f6.}`,
    },
    {
      name: 'Advance: Paulsen Attack (6.Be2)',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6
        6. Be2 {Solid. White simply plans to retreat into the castle and defend d4.}
        cxd4 {Trade now, so the c-road opens and White's d4 soldier loses its c3 support.}
        7. cxd4 Nh6 {Your rider heads for f5, where it becomes the fourth attacker on d4.}
        8. b3 {White prepares Bb2 to add a defender of d4.}
        Nf5 {Now your rider, your Queen and the c6 rider all strike d4.}
        9. Bb2 Bb4+ {A useful check before White castles: blocking would pull a defender away from d4, so the White King usually steps aside.}
        10. Kf1 Be7 {Your priest withdraws, mission done: White can no longer castle and the h1 tower is stuck.}`,
    },
    {
      name: 'Advance: Milner-Barry Gambit, Main Line (6.Bd3)',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6
        6. Bd3 {The Milner-Barry Gambit: White is ready to sacrifice the d4 soldier for a fast muster of troops.}
        cxd4 {Trade first, so the d4 soldier has no comrade behind it.}
        7. cxd4 Bd7 {This prepares to take on d4: Bb5+ is no longer a threat, because your priest on d7 blocks the check.}
        8. O-O Nxd4 {Seize the soldier.}
        9. Nxd4 Qxd4 {You are a soldier up; now defend carefully and bring out your troops.}
        10. Nc3 a6 {This stops Nb5, a rider raid that would hit your Queen and the c7 square.}`,
    },
    {
      name: 'Winawer: Poisoned Pawn Variation, Main Line (7.Qg4)',
      pgn: `1. e4 e6 2. d4 d5
        3. Nc3 {The main road: the White rider defends e4.}
        Bb4 {The Winawer: your priest pins the rider that defends e4.}
        4. e5 {White closes the heartland and gains land.}
        c5 {Strike the base of the wall at once, as in the Advance.}
        5. a3 {White asks your priest to decide its fate.}
        Bxc3+ {Give up the priest to double White's c-soldiers.}
        6. bxc3 {White has doubled soldiers but gains the bishop pair (two priests against priest and rider).}
        Ne7 {Your rider heads for f5 or c6, without blocking the f-soldier.}
        7. Qg4 {The White Queen attacks g7, which lost its guard when your dark-road priest left.}
        Qc7 {Counterattack instead of defending: you abandon the kingside soldiers, hit e5 and prepare ...cxd4 against c3.}
        8. Qxg7 Rg8 {Chase the Queen and claim the open g-road for your tower.}
        9. Qxh7 cxd4 {Now White's heartland collapses: c3 is under attack too.}
        10. Ne2 Nbc6 {Another rider rides out and adds pressure on e5 and d4.}
        11. f4 {White shores up e5.}
        Bd7 {Your priest develops and links your army. Your King can castle long later.}
        12. Qd3 {The White Queen rushes home to defend.}
        dxc3 {Take on c3: that soldier cramps White's queenside. A sharp, double-edged war.}`,
    },
    {
      name: 'Exchange Variation (3.exd5)',
      pgn: `1. e4 e6 2. d4 d5
        3. exd5 {The Exchange: a mirror-image, quiet battlefield.}
        exd5 {Take back: the c8 priest is no longer locked in.}
        4. Nf3 Nf6 {Your rider heads for the kingside.}
        5. Bd3 Bd6 {Mirror White's muster.}
        6. O-O O-O {Both Kings retreat into their castles.}
        7. Bg5 Bg4 {Pin the f3 rider in return, so it cannot leap to e5 freely.}
        8. Nbd2 Nbd7 {This guards f6, so Bxf6 can be met by the rider. Equal, and easy to play.}`,
    },
    {
      name: 'Tarrasch: Chistyakov Defence, Modern Line (3...c5 4.exd5 Qxd5)',
      pgn: `1. e4 e6 2. d4 d5
        3. Nd2 {The Tarrasch. The White rider defends e4 without being pinned by ...Bb4.}
        c5 {Strike the heartland at once.}
        4. exd5 Qxd5 {Your Queen takes back, so you avoid an isolated d-soldier.}
        5. Ngf3 cxd4 {Trade soldiers; White will win d4 back.}
        6. Bc4 {The White priest attacks your Queen.}
        Qd6 {Your Queen finds a safe central square that still watches d4.}
        7. O-O Nf6 {Your rider rides out, and your King gets ready to retreat into the castle.}
        8. Nb3 Nc6 {Your rider guards d4 one more time.}
        9. Nbxd4 Nxd4 {Trade riders to thin out White's attacking force.}
        10. Nxd4 a6 {This stops Nb5 and Bb5+ and prepares ...b5. Your soldiers are healthy.}`,
    },
    {
      name: 'Winawer: Positional Variation (7.a4)',
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7
        7. a4 {White prepares Ba3, where the priest would hit your c5 soldier and e7 rider.}
        Nbc6 {Your rider develops and adds pressure on d4.}
        8. Nf3 Qa5 {Your Queen presses the weak c3 soldier and the a4 soldier.}
        9. Bd2 Bd7 {Your priest develops and links your towers.}
        10. Be2 f6 {Strike the front of the wall to open the f-road for your tower.}`,
    },
    {
      name: 'Winawer: Delayed Exchange Variation (4.exd5)',
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4
        4. exd5 exd5 {A mirror-image battlefield, but your priest is already active on b4.}
        5. Bd3 Nc6 {Your rider develops and eyes d4.}
        6. a3 Bxc3+ {Trade to give White doubled c-soldiers.}
        7. bxc3 Nge7 {The rider goes to e7 so the c8 priest can come to f5.}
        8. Ne2 Bf5 {Offer to trade White's best priest.}
        9. O-O O-O {Equal, with White's doubled soldiers as a long-term target.}`,
    },
    {
      name: 'Winawer: 4.a3 (Bxc3+ and ...dxe4)',
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4
        4. a3 {White forces your priest to decide at once.}
        Bxc3+ {Trade: White is left with doubled soldiers.}
        5. bxc3 dxe4 {The rider that defended e4 is gone, so seize the soldier.}
        6. Qg4 {The White Queen attacks g7.}
        Nf6 {Your rider develops with an attack on the Queen, instead of weakening your walls with ...g6.}
        7. Qxg7 Rg8 {Chase the Queen and claim the open g-road.}
        8. Qh6 Nbd7 {Muster quickly. Material is level (your e4 soldier for g7) and your army is out first.}`,
    },
    {
      name: 'King\'s Indian Attack (2.d3)',
      pgn: `1. e4 e6
        2. d3 {The King's Indian Attack: a quiet plan with g3, Bg2, castling and later e5.}
        d5 {Take the heartland.}
        3. Nd2 Nf6 {Your rider develops and attacks e4.}
        4. Ngf3 c5 {Grab land on the queenside, where your war will be fought.}
        5. g3 Nc6 {Your rider develops and watches d4.}
        6. Bg2 Be7 {The priest steps aside so your King can retreat into the castle.}
        7. O-O O-O {Your King retreats into the castle.}
        8. Re1 b5 {A race: you charge on the queenside with ...b4 and ...a5 while White pushes e5 and storms your King.}`,
    },
    {
      name: 'Winawer: Positional Variation (7.Nf3)',
      pgn: `1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7
        7. Nf3 {The Positional Variation: White skips Qg4, develops and keeps the heartland solid.}
        Nbc6 {Your rider develops and adds pressure on d4.}
        8. Be2 {A quiet muster so the White King can retreat into the castle.}
        Qa5 {Your Queen pins the c3 soldier to its King and presses the doubled soldiers.}
        9. Bd2 {White defends c3 and breaks the pin.}
        Bd7 {Your priest develops and links your towers; it can later go to a4 or b5.}
        10. O-O c4 {You seal the queenside: White's c3 and a3 soldiers become fixed targets, and White's light-road priest has fewer squares. Castle long, or keep your King in the centre.}`,
    },
    {
      name: 'Advance: Nimzowitsch System, Ruisdonk Gambit (4.Nf3 cxd4 5.Bd3)',
      pgn: `1. e4 e6 2. d4 d5 3. e5 c5
        4. Nf3 {The Nimzowitsch System: White develops instead of propping up d4 with c3.}
        cxd4 {Seize the soldier: without c3 no comrade can take back.}
        5. Bd3 {The Ruisdonk Gambit: White sacrifices the d4 soldier for a fast muster and attacking chances.}
        Nc6 {Your rider develops and holds the captured ground on d4.}
        6. O-O Nge7 {Your rider heads for g6, where it attacks the e5 soldier and guards your King.}
        7. Bf4 {The White priest defends e5.}
        Ng6 {Your rider hits the f4 priest and adds a third attacker on e5. You are a soldier up with a solid camp.}`,
    },
    {
      name: 'Tarrasch: Open System, Euwe-Keres Line (4.Ngf3)',
      pgn: `1. e4 e6 2. d4 d5 3. Nd2 c5
        4. Ngf3 {The Euwe-Keres Line: White develops first and saves exd5 for later.}
        cxd4 {Release the tension in the heartland.}
        5. exd5 {White opens the heartland.}
        Qxd5 {Your Queen takes back, just as against 4.exd5: no isolated soldier for you.}
        6. Bc4 Qd6 {Now it is the same battlefield as in the 4.exd5 line, and the same plan applies.}
        7. O-O Nf6 8. Nb3 Nc6 {The usual set-up: ...Nc6 guards the d4 soldier one more time.}`,
    },
  ],
}
