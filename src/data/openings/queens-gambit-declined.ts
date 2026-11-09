import type { OpeningSource } from '../types'

export const queensGambitDeclined: OpeningSource = {
  id: 'queens-gambit-declined',
  name: "Queen's Gambit Declined",
  eco: 'D30–D69',
  side: 'black',
  summary:
    "You command the Black Kingdom with one of the oldest, most trusted answers to 1.d4. After 1.d4 d5 2.c4, you refuse the offered soldier and hold d5 with ...e6. Your camp is solid but a little cramped: the c8 priest is walled in behind the e6 soldier. You develop calmly (...Nf6, ...Be7, ...O-O) and then break free with a well-timed ...c5, ...dxc4 followed by ...e5, or by leading the priest out to b7 or f5.",
  ideas: [
    'Hold the fortress on d5 with ...e6 and ...Nf6, bring out ...Be7 and retreat the King into the castle quickly. Do not take on c4 early unless the White Kingdom has spent a tempo, so that its priest has to move twice.',
    "Break out with a soldier strike: ...c5 hits the White heartland, and ...dxc4 followed by ...e5 frees the c8 priest. In the Tartakower, ...b6 and ...Bb7 send that priest down the long diagonal road instead.",
    'In the Exchange Variation (cxd5 exd5) the shield walls are fixed. The enemy plans a "minority attack" with b4-b5 on the queenside, and you answer with active pieces: ...Re8, the rider via ...Nf8 to g6 or e6 near your King, and the c8 priest to f5 or g4.',
  ],
  lines: [
    {
      name: 'Exchange Variation: Reshevsky (9.Nf3)',
      pgn: `1. d4 d5 {Your soldier claims d5 in the heartland and stops the enemy from playing e4 at once.}
        2. c4 {The Queen's Gambit. The White Kingdom offers its c-soldier to lure your d-soldier out of the heartland.}
        e6 {The Queen's Gambit Declined. A second soldier props up d5, so you keep a firm foothold in the heartland. The price: your c8 priest is walled in for now.}
        3. Nc3 {A White rider comes out, a third attacker on d5.}
        Nf6 {Your rider comes out and guards d5 a second time.}
        4. cxd5 {The Exchange Variation. The enemy fixes the shield walls early and plans a queenside "minority attack" with b4-b5.}
        exd5 {Retake with the soldier. The c8 priest's road is now open, so your usual problem piece is free.}
        5. Bg5 {The White priest pins your f6 rider to your Queen and prepares calm development.}
        c6 {Prop up d5 so the f6 rider is free to move, and give your Queen a path to a5 or c7.}
        6. e3 Be7 {Your priest breaks the pin, so the f6 rider can move without losing the Queen.}
        7. Bd3 {The White priest aims at your kingside and stops ...Bf5.}
        Nbd7 {Your rider heads for f8, from where it can reach g6 or e6 to guard the King.}
        8. Qc2 {The White Queen watches f5 and h7, so ...Bf5 is off for now.}
        O-O {The King into the castle before anything else.}
        9. Nf3 Re8 {Your tower takes the half-open e-file road and frees f8 for the rider.}
        10. O-O {The White King castles short. The enemy often follows with Rab1, b4 and b5 (the minority attack).}
        Nf8 {The classic regrouping. The rider guards h7 and can reach g6 or e6. Your c8 priest can now go to g4 or e6.}`,
    },
    {
      name: 'Exchange Variation: Reshevsky (9.Nge2)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 c6 6. e3 Be7 7. Bd3 Nbd7 8. Qc2 O-O
        9. Nge2 {The White rider goes to e2 to leave f3 free. The enemy plans f3 and e4 to seize the whole heartland, sometimes castling long.}
        Re8 {Same plan as before: your tower on e8 eyes e3 and e4, and frees f8 for the rider.}
        10. O-O {The White King castles short and keeps f3-e4 in reserve.}
        Nf8 {Your rider heads for g6 or e6, and the c8 priest is free to come out. When the enemy plays f3 and e4, be ready to challenge the heartland with ...Ne6 or ...c5.}`,
    },
    {
      name: 'Orthodox: Tartakower Defence (8.Be2, 11.b4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6
        4. Bg5 {The classical main line. The White priest pins your f6 rider, a guard of d5.}
        Be7 {Break the pin calmly. The priest on e7 shields your Queen.}
        5. e3 O-O {Into the castle early; you will choose a plan once the enemy has committed.}
        6. Nf3 h6 {Make the White priest decide. It must give up the bishop pair with Bxf6 or retreat to h4, and h6 gives your King an escape hatch.}
        7. Bh4 b6 {The Tartakower Defence. Prepare ...Bb7, so your problem priest gets the long diagonal road instead of rotting behind e6.}
        8. Be2 Bb7 {Your priest now watches d5 and e4.}
        9. Bxf6 {The White priest swaps itself off to gain control of d5.}
        Bxf6 {Retake with the priest. It now has a fine road towards d4 and b2.}
        10. cxd5 exd5 {Retake with the soldier: you keep a soldier on d5 and open the e-file road.}
        11. b4 {The enemy starts a queenside raid, aiming b5 to attack your c-soldier.}
        c5 {Strike back at once. After bxc5 bxc5 you get "hanging pawns" on c5 and d5: two soldiers side by side that control many squares and give your pieces open roads.}`,
    },
    {
      name: 'Orthodox: Tartakower Defence (8.cxd5)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6
        8. cxd5 {The White Kingdom releases the tension at once to swap pieces.}
        Nxd5 {Take with the rider. This offers a priest trade on e7 and a rider trade on d5, which frees your cramped camp.}
        9. Bxe7 Qxe7 {Your Queen retakes, and steps into play at the same time.}
        10. Nxd5 exd5 {Retake with the soldier. You get a sturdy soldier on d5 and an open e-file road.}
        11. Rc1 {The White tower takes the half-open c-file road to press on c7, and later on c5 if you play ...c5.}
        Be6 {Here, e6 is the best post for your priest: it guards d5 and backs ...c5. Spassky played this line against Fischer in their 1972 world championship match.}`,
    },
    {
      name: 'Anti-Tartakower: Petrosian Variation (7.Bxf6)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6
        7. Bxf6 {The White priest gives itself up at once, before you can play ...b6.}
        Bxf6 {You get the bishop pair: two priests against priest and rider.}
        8. Rc1 {The White tower takes the c-file road, ready for when roads open.}
        c6 {Shore up d5. You plan to break free with ...dxc4 and ...e5.}
        9. Bd3 Nd7 {Your rider comes out where it supports ...e5.}
        10. O-O dxc4 {With the White priest now on d3, taking on c4 makes it move a second time.}
        11. Bxc4 e5 {The freeing strike. It opens the road for the c8 priest and challenges the White heartland, so your two priests come alive.}`,
    },
    {
      name: 'Orthodox: Tartakower via 3.Nf3 (8.Rc1)',
      pgn: `1. d4 d5 2. c4 e6
        3. Nf3 {The White rider comes out first. This often transposes to the same lines as 3.Nc3.}
        Nf6 {Your rider comes out and guards d5.}
        4. Nc3 Be7 {Calm development. Against both Bg5 and Bf4 your priest stands well on e7.}
        5. Bg5 O-O {Into the castle; the battle can now transpose to the Orthodox with 6.e3 h6 7.Bh4 b6.}
        6. e3 h6 7. Bh4 b6
        8. Rc1 {The White tower takes the c-file road to press on c7 and c5.}
        Bb7 {Your priest takes the long diagonal road.}
        9. Be2 {The White priest comes out and the enemy King gets ready to castle.}
        dxc4 {Swap on c4 now, while the e2 priest must retake, losing a tempo.}
        10. Bxc4 Nbd7 {Your last minor piece comes out, ready for ...c5, which frees your camp.}`,
    },
    {
      name: 'Harrwitz Attack (5.Bf4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3 Be7
        5. Bf4 {The White priest steps out in front of its shield wall, where ...h6 cannot harass it.}
        O-O {Into the castle before you strike.}
        6. e3 c5 {With the priest on f4 instead of g5, the usual answer is to hit d4 at once.}
        7. dxc5 Bxc5 {Retake with the priest. It moves twice, but lands on an active road.}
        8. Qc2 {The White Queen prepares to castle long and presses on h7 and c7.}
        Nc6 {Your rider comes out with pressure on the heartland.}
        9. a3 {The enemy makes room for its priest and prepares b4.}
        Qa5 {The main line. Your Queen pins the c3 rider and eyes the a5-e1 diagonal road. Later ...Re8 and ...e5 or ...Bd7 complete your development.}`,
    },
    {
      name: 'Exchange Variation (5.cxd5, 6.Bf4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3 Be7
        5. cxd5 exd5 {Retake with the soldier. The c8 priest's road is open again.}
        6. Bf4 {Here the White priest goes to f4, where it watches e5 and b8.}
        c6 {Prop up d5 and keep your shield wall solid.}
        7. Qc2 {The White Queen stops your priest from going to f5.}
        g6 {Take the square back. The g6 soldier supports ...Bf5 so you can swap off your light-road priest.}
        8. e3 Bf5 {Offer a priest trade. Your c8 priest is often your worst piece, while the White d3 priest is the enemy's best attacker.}
        9. Bd3 Bxd3 {Your priest seals the trade you offered.}
        10. Qxd3 Nbd7 {Your rider comes out and the King gets ready for the castle. With the light-road priests gone, the battle is solid and level.}`,
    },
    {
      name: 'Catalan: Open Defence, Classical Line (8.Qxc4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6
        4. g3 {The Catalan. The White priest will stand on g2 and press down the long diagonal road on b7 and your queenside.}
        Be7 {Develop and head for the castle quickly, as in the other lines.}
        5. Bg2 O-O {Into the castle before the heartland opens.}
        6. O-O dxc4 {The Open Catalan. Grab the soldier: the enemy must spend time winning it back, which gives you time to develop.}
        7. Qc2 {The White Queen plans to win back c4.}
        a6 {Prepare ...b5, which would keep the soldier or gain land if the enemy takes it back.}
        8. Qxc4 b5 {Gain land with tempo by hitting the Queen.}
        9. Qc2 Bb7 {Your priest takes the long diagonal road, where it fights the White g2 priest.}`,
    },
    {
      name: 'Catalan: Open Defence, Classical Line (8.a4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2 a6
        8. a4 {The White Kingdom stops ...b5 before taking back on c4.}
        Bd7 {Your priest heads for c6 to challenge the White g2 priest on the long diagonal road. It also gains time by hitting the a4 soldier.}
        9. Qxc4 Bc6 {Now your priest is active and faces the Catalan priest.}
        10. Bg5 {The White priest develops and, in some lines, pins your rider.}
        a5 {Fix the queenside and claim b4 for your pieces, so the a4 soldier cannot advance and your c6 priest is safe.}`,
    },
  ],
}
