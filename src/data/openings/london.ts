import type { OpeningSource } from '../types'

export const london: OpeningSource = {
  id: 'london',
  name: 'London System',
  eco: 'D02, A46',
  side: 'white',
  summary:
    "A \"system\": you, ruler of the White Kingdom, build the same fortress against almost any Black army, with d4, Bf4, e3, Nf3, c3, Nbd2 and Bd3. The key detail is getting your dark-road priest out to f4 before e3 shuts it in. The result is a solid shield wall triangle on c3-d4-e3, a safe King and a slow build-up toward Ne5 and an assault on the Black King.",
  ideas: [
    "Bf4 first, then e3: the priest must leave c1 before the e-soldier blocks it in. If Black challenges it with ...Bd6, step back to g3 and meet ...Bxg3 with hxg3, which opens the h-road for your tower.",
    "Build the c3-d4-e3 soldier triangle so d4 never falls, then Bd3, Nbd2 and castle. Once the priest has left c1, b2 is weaker, so watch for ...Qb6.",
    "Use the e5 square: a rider on e5, backed by d4, supports a kingside assault with Qf3, h4 or g4.",
  ],
  lines: [
    {
      name: 'London System: Main Line (...e6, ...c5, ...Bd6 7.Bg3)',
      pgn: `1. d4 {Your foot soldier plants a flag on d4 in the heartland and opens the road for the c1 priest.}
        d5 2. Bf4 {The London: your priest leaves now, before e3 would lock it inside the shield wall.}
        Nf6 3. e3 {This soldier supports d4 and opens the road for the f1 priest.}
        e6 4. Nf3 {Your rider develops and watches e5, the square you want to use later.}
        c5 {The Black Kingdom strikes d4 from the side, the usual way to challenge the London.}
        5. c3 {This completes the c3-d4-e3 triangle, so if Black ever takes on d4 a soldier takes back.}
        Nc6 6. Nbd2 {The rider goes to d2, not c3, where it would block the c-soldier. From d2 it watches e4 and can support Ne5.}
        Bd6 {Black offers to trade off your good priest.}
        7. Bg3 {Keep the priest. If ...Bxg3, hxg3 opens the h-road for your tower, which helps an assault on the King.}
        O-O 8. Bd3 {Your priest develops toward the Black King: it aims at h7.}
        b6 9. Ne5 {The classic London rider: strong on e5, supported by d4. Next can come Qf3, f4 or castling, aiming at the kingside.}`,
    },
    {
      name: 'Accelerated London: Steinitz Countergambit (2...c5), the 6...Bf5? trap',
      pgn: `1. d4 d5 2. Bf4
        c5 {Black strikes d4 straight away.}
        3. e3 {This soldier supports d4. The f1 priest is now free too.}
        Nc6 4. c3 {A second soldier props up d4.}
        Qb6 {The Black Queen attacks b2, which lost its guard when your priest left c1.}
        5. Qb3 {Your Queen defends b2 and offers a duel of Queens. If ...Qxb3 axb3, the a-road opens for your tower.}
        c4 {Black refuses the trade and grabs queenside land, gaining time on your Queen.}
        6. Qc2 {Your Queen steps away while still guarding b2.}
        Bf5 {A natural-looking attack on your Queen, but here it is a mistake: with no rider on f6, d5 will be unguarded.}
        7. Qxf5 {Take the priest! It had no defender.}
        Qxb2 {Black grabs b2 and threatens the a1 tower and ...Qc1+.}
        8. Qxd5 {Your Queen takes the loose d5 soldier and rules the centre, also eyeing c4.}
        Nf6 9. Qxc4 {You are a piece up. After ...Qc1+ your King steps to e2 and is safe enough.}`,
    },
    {
      name: "London System, with Be2: King's Indian setup (2...g6)",
      pgn: `1. d4
        Nf6 2. Bf4 {The London works against 1...Nf6 as well: the same fortress follows.}
        g6 {The Black Kingdom readies ...Bg7, the King's Indian setup.}
        3. e3 {This soldier supports d4 and opens the road for the f1 priest.}
        Bg7 4. Nf3 {Your rider develops and watches e5, slowing down Black's ...e5 break.}
        O-O 5. Be2 {Against a fianchetto your priest has little to do on d3, so it goes to e2, where it covers g4 and lets your King castle.}
        d6 6. h3 {This makes an escape square on h2, so if Black plays ...Nh5 or ...e5 your priest can retreat there. It also keeps ...Ng4 and ...Bg4 out.}
        c5 7. c3 {Keeps d4 guarded by a soldier against ...c5 and ...Nc6.}
        Nc6 8. O-O {Your King retreats into the castle. Your camp is solid, and you wait to see whether Black goes for ...e5 or queenside play.}`,
    },
    {
      name: 'Accelerated London: 1...Nf6 2...e6 into the main line',
      pgn: `1. d4 Nf6 2. Bf4
        e6 3. e3 {This soldier supports d4 and frees the f1 priest, just as in the main line.}
        c5 4. c3 {The soldier triangle again, holding d4 against ...c5.}
        Nc6 5. Nd2 {The queenside rider rides first so the g1 rider stays flexible. Nd2 also stops ...Ne4.}
        d5 6. Ngf3 {Now Black has committed to ...d5, so the rider goes to f3. This is the main-line London battlefield.}
        Bd6 7. Bg3 O-O 8. Bd3 {The same fortress as the main line.}`,
    },
    {
      name: 'Accelerated London: Symmetrical 2...Bf5 (5.Bd3)',
      pgn: `1. d4 d5 2. Bf4
        Bf5 {The Black priest copies your priest's march.}
        3. e3 {This soldier supports d4 and opens the road for the f1 priest, which will challenge Black's priest from d3.}
        e6 4. Nf3 {Your rider develops and watches e5.}
        Nf6 5. Bd3 {You offer to trade the light-road priests. Black's f5 priest is his best minor piece, so trading it helps you.}
        Bxd3 6. Qxd3 {Your Queen takes back and joins the war, now watching e4 and b5.}
        c5 7. c3 {This soldier supports d4 against the ...c5 attack.}
        Nc6 8. Nbd2 {Your rider develops and supports a later e4 push.}
        Bd6 9. Bg3 {The usual answer to ...Bd6: if ...Bxg3, hxg3 opens the h-road.}`,
    },
    {
      name: 'Accelerated London: 3...Bf5 (4.c4 and Qb3)',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        Bf5 {Black's priest develops actively, but now b7 has no guard.}
        4. c4 {This soldier attacks d5 and opens the d1-b3 diagonal road, so your Queen can go to b3 and hit b7.}
        e6 5. Nc3 {Your rider adds pressure on d5.}
        c6 6. Qb3 {Your Queen attacks b7, which the f5 priest no longer guards.}
        Qb6 {Black defends b7 and offers a duel of Queens.}
        7. c5 {Your soldier marches past, gaining time on the Black Queen and grabbing queenside land.}
        Qxb3 8. axb3 {Take back toward the centre. The a-road opens for your tower and the b-soldiers support b4-b5 to attack Black's queenside.}`,
    },
    {
      name: 'Accelerated London: 3...c5 4.c3 into the main line',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        c5 4. c3 {You answer ...c5 by propping up d4 with a second soldier.}
        Nc6 5. Nd2 {Your rider develops and keeps the g1 rider flexible. It also covers e4.}
        e6 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 {The main London fortress again.}`,
    },
    {
      name: 'Dutch Defence: London setup (2.Bf4)',
      pgn: `1. d4
        f5 {The Dutch: the Black Kingdom fights for the e4 square with a soldier.}
        2. Bf4 {The London fortress works here too.}
        Nf6 3. e3 {This soldier supports d4 and opens the road for the f1 priest.}
        e6 4. Nf3 {Your rider develops and adds control of e5.}
        b6 {Black sends his priest toward b7, another piece aimed at e4.}
        5. h3 {This makes a retreat square on h2 for your priest and keeps Black's rider and priest off g4.}
        Bb7 6. Nbd2 {Your rider develops and adds control of e4.}
        Be7 7. c3 {The soldier triangle: d4 is safe.}
        O-O 8. Bd3 {Your priest aims at f5 and Black's slightly loosened kingside walls. Ideas include Qe2, e4 to open the heartland, or g4 to attack.}`,
    },
    {
      name: 'Accelerated London: 2...e6 3.e3 Bd6 (4.Bg3)',
      pgn: `1. d4 d5 2. Bf4
        e6 3. e3 {Solid: this soldier supports d4 and frees the f1 priest.}
        Bd6 {The Black priest challenges yours at once.}
        4. Bg3 {Keep the priest. If ...Bxg3, hxg3 opens the h-road.}
        Nf6 5. Nd2 {Your rider develops while the g1 rider stays flexible.}
        c5 6. c3 {This soldier supports d4 against ...c5.}
        Nc6 7. Bd3 {Your priest aims at h7.}
        O-O 8. Ngf3 {The standard fortress is built. Ne5 is coming.}`,
    },
    {
      name: 'Accelerated London: Slav setup 3...c6 (5.Bd3)',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3
        c6 {A solid wall: c6 backs up d5 and opens the d8-a5 diagonal road for the Black Queen, so ...Qb6 is possible.}
        4. Nf3 {Simple development. Because ...c6 makes ...Qb6 easy, the 4.c4 and Qb3 idea is weaker here.}
        Bf5 5. Bd3 {You offer to trade priests, removing Black's best minor piece.}
        Bxd3 6. Qxd3 {Your Queen takes back and joins the war, aiming toward e4.}
        e6 7. O-O {Your King retreats into the castle.}
        Nbd7 8. Nbd2 {Your rider supports e4.}
        Be7 9. e4 {Now your whole army is out, so you open the heartland. The Queen on d3 and the d2 rider both back this soldier.}`,
    },
    {
      name: 'London System, with Be2: Old Indian move order (2...d6)',
      pgn: `1. d4 Nf6 2. Bf4
        d6 {Black prepares ...e5 to attack your priest and the d4 soldier.}
        3. e3 {This soldier supports d4 and opens the road for the f1 priest.}
        g6 4. Nf3 {Your rider watches e5, making ...e5 harder.}
        Bg7 5. Be2 {Against a fianchetto your priest is better on e2 than d3; it covers g4.}
        O-O 6. h3 {The same plan as against the King's Indian setup: a retreat square on h2 for your priest.}`,
    },
    {
      name: 'Accelerated London: 2...c5 3.e3 Qb6, Poisoned Pawn (4.Nc3)',
      pgn: `1. d4 Nf6 2. Bf4
        c5 {Black strikes d4 at once, before you have played c3.}
        3. e3 {This soldier supports d4 and opens the road for the f1 priest.}
        Qb6 {The sternest test of the London: the Black Queen hits b2, which lost its guard when your priest left c1.}
        4. Nc3 {Your rider develops and leaves b2 as bait. If Black takes it, the rider leaps to b5 with threats.}
        Qxb2 {The Black Queen grabs the "poisoned" soldier.}
        5. Nb5 {You threaten Nc7+, a fork of the King and the a8 tower. Black must find ...Nd5 at once, and you follow with Rb1 or a3 to hound the Queen while Black's army lags behind.}`,
    },
    {
      name: "Accelerated London: Queen's Indian setup (3...b6)",
      pgn: `1. d4 Nf6 2. Bf4 e6 3. e3
        b6 {A Queen's Indian setup: the Black priest goes to b7 to watch e4.}
        4. Nf3 {Your rider develops and watches e5.}
        Bb7 5. h3 {This makes a retreat square on h2 for your priest and keeps Black's rider off g4.}
        Be7 6. Bd3 {Your priest joins the fight for e4 and aims at h7.}
        O-O 7. O-O {Your King retreats into the castle.}
        c5 8. c3 {The soldier triangle again, so d4 stays guarded by a soldier. Next come Nbd2 and Qe2, as in Carlsen v Tomashevsky, 2016.}`,
    },
    {
      name: 'Accelerated London: 3...c5 4.c3 Qb6 (5.Qb3)',
      pgn: `1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3
        Qb6 {The Black Queen goes for b2 again.}
        5. Qb3 {Your Queen defends b2 and offers a duel of Queens. If ...Qxb3 axb3, the a-road opens for your tower.}
        c4 {Black refuses the trade and drives your Queen away.}
        6. Qc2 {Your Queen still guards b2. Here 6...Bf5? fails to 7.Qxf5 Qxb2 8.Qc8 mate: the b8 rider blocks the a8 tower from guarding c8, and nothing can block on d8.}
        Nc6 7. Nd2 {Your rider develops and supports a later e4 break, which hits Black's centre now that ...c4 has released the tension. Next come Ngf3, Be2 and castling.}`,
    },
  ],
}
