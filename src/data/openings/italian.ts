import type { OpeningSource } from '../types'

export const italian: OpeningSource = {
  id: 'italian',
  name: 'Italian Game',
  eco: 'C50–C59',
  side: 'white',
  summary:
    "The Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4) sends your priest to its most natural post, staring at f7: early on, only the Black King guards that soldier. Today the White Kingdom rarely charges straight in. Instead you wage the slow Giuoco Pianissimo (\"very quiet game\"): c3, d3, castle, Re1 and h3, ride the queen's rider round to g3, and break with d4 only when everything is ready.",
  ideas: [
    'The c4 priest stares at f7, the weakest point in the Black camp, so raids with Ng5 and Bxf7+ always hang in the air.',
    'Build a small, sturdy wall in the heartland with c3 and d3 first. c3 also prepares the d4 break and gives the priest a road home.',
    'Manoeuvre before you strike: Re1, h3 and the rider\'s journey Nbd2-f1-g3, then choose between d4 in the heartland and a4 or b4 on the queenside.',
  ],
  lines: [
    {
      name: 'Giuoco Pianissimo: main line (6...a6 7.a4)',
      pgn: `1. e4 {A White foot soldier marches to e4 and plants a flag in the heartland. Behind it, roads open for the Queen and the f1 priest.}
        e5 {The Black Kingdom answers in kind, claiming an equal share of the heartland.}
        2. Nf3 {A White rider gallops out to f3, and already the soldier on e5 is under threat.}
        Nc6 {The most natural guard for e5: a Black rider steps up.}
        3. Bc4 {The Italian Game. Your priest takes the road to c4 and stares at f7, a soldier guarded only by the Black King himself.}
        Bc5 {The Giuoco Piano ("quiet game"). The Black Kingdom copies you and aims its priest at f2.}
        4. c3 {Prepares d4 to build a great wall in the heartland, and later gives your priest a road home to c2.}
        Nf6 {A Black rider joins the war and attacks e4.}
        5. d3 {The Giuoco Pianissimo. You guard e4 calmly and keep d4 for later, when it is well prepared.}
        d6 {The Black Kingdom props up e5 too. Neither side is in a hurry.}
        6. O-O {The King retreats into the castle first, before the heartland opens.}
        a6 {Makes room for ...Ba7, where the priest keeps aiming at f2 but cannot be hit by b4 or d4.}
        7. a4 {Stops ...b5, which would grab land and chase your priest, and frees a2 as a road home for it.}
        Ba7 {The Black priest steps back to safety, still staring at f2.}
        8. Re1 {The tower backs up e4 and frees f1, so the queen's rider can travel d2-f1-g3.}
        O-O
        9. h3 {A soldier guards g4 against the Black priest and rider: no annoying pin on your f3 rider and no ...Ng4 hitting f2.}
        h6 {The Black Kingdom does the same and keeps your warriors off g5.}
        10. Nbd2 {The rider begins its classic journey: d2, then f1, then g3.}
        Re8 {A Black tower joins the guard of e5.}
        11. Nf1 {The second leg. After Ng3 the rider eyes f5 and h5 near the Black King, and you can choose between d4, b4 or Be3.}`,
    },
    {
      name: 'Giuoco Pianissimo: 5...O-O and ...d5',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3
        O-O {The Black King hides in his castle first and keeps the ...d5 break in reserve.}
        6. O-O {Into the castle as well. Your King is safe before the enemy opens the heartland.}
        d5 {The Black Kingdom strikes the heartland at once, before you are ready for d4.}
        7. exd5 {Take. This removes the Black soldier from the heartland and opens the e-file road.}
        Nxd5 8. Re1 {Now e5 is the target: your tower attacks it, and with the Black d-soldier gone only the c6 rider guards it.}
        Bg4 {The Black priest pins your f3 rider to your Queen, so it cannot capture on e5.}
        9. h3 {Asks the priest to decide: give up the bishop pair with ...Bxf3, or keep the pin with ...Bh5.}
        Bh5 10. Nbd2 {A rider joins and heads for e4, where it hits the c5 priest. The e1 tower keeps pressing on e5.}`,
    },
    {
      name: "Two Knights: Modern Bishop's Opening (4.d3 Be7)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Nf6 {The Two Knights Defence. Instead of copying with ...Bc5, the Black rider rides out and attacks e4.}
        4. d3 {Guards e4 calmly. You avoid the wild 4.Ng5 battles and go for the same slow build-up as in the Giuoco Piano.}
        Be7 {A modest but sturdy post. The Black Kingdom plans ...O-O and ...d6.}
        5. O-O {The King retreats into the castle first.}
        O-O 6. Re1 {Backs up e4 and puts your tower on the same road as e5, which matters as soon as the heartland opens.}
        d6 {The right way to hold e5 (see the 6...d5 chapter for what goes wrong otherwise).}
        7. c3 {Prepares d4 and gives your priest the c2 square.}
        Na5 {The Black rider attacks the c4 priest: the enemy wants to trade off your best minor warrior.}
        8. Bb5 {Sidestep the trade. The priest will travel a4 and then c2, just like in the Ruy Lopez.}
        a6 9. Ba4 {Stay on the diagonal road. If ...b5, the priest simply drops back to c2.}
        b5 10. Bc2 {The priest ends its journey on c2, where it guards e4 and points at the Black kingside.}
        c5 {The Black Kingdom grabs land on the queenside. The war now looks just like a Closed Ruy Lopez.}
        11. Nbd2 {Same plan as in the Ruy Lopez: the rider heads for f1 and g3, and d4 comes later.}`,
    },
    {
      name: 'Giuoco Pianissimo: Normal (4.d3 Bc5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3
        Bc5 {Transposes to the Giuoco Piano: the same camp reached by a different path.}
        5. c3 {Back in the Giuoco Pianissimo: c3 prepares d4 and gives the priest a road home.}
        d6 6. O-O O-O {The Black King castles before ...a6 this time.}
        7. Re1 {Backs up e4 and frees f1 for the rider's journey to g3.}
        a6 8. a4 {Stops ...b5 and keeps a2 free as a road home for your priest.}
        Ba7 9. h3 {The same camp as the main chapter by a different path. h3 stops ...Bg4 and ...Ng4.}`,
    },
    {
      name: 'Hungarian Defence (3...Be7)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Be7 {The Hungarian Defence: very sturdy but timid, because the Black priest does nothing against your camp.}
        4. d4 {Against a timid army, storm the heartland at once and use your faster mustering.}
        exd4 {The Black Kingdom gives up the heartland.}
        5. Nxd4 {Take back with the rider, which stands proudly on d4.}
        d6 6. O-O {Into the castle. The g8 rider has not left home yet, so e4 is not under attack.}
        Nf6 {Now the Black rider attacks e4.}
        7. Nc3 {Another rider joins and guards e4.}
        O-O 8. h3 {With your rider gone from f3, ...Bg4 would attack your Queen and ...Ng4 could jump in. h3 stops both. You hold more land and freer warriors.}`,
    },
    {
      name: 'Blackburne-Kostić Gambit (3...Nd4)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Nd4 {The Blackburne Shilling Gambit, a cheap ambush that leaves e5 unguarded on purpose.}
        4. Nxd4 {Just take the rider. Not 4.Nxe5? Qg5!, hitting the rider and g2: after 5.Nxf7? Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3 is mate.}
        exd4 5. O-O {Into the castle. Your army is ahead in mustering and the Black soldier on d4 is cut off from its comrades.}
        Bc5 {A natural move, but it walks into an ambush.}
        6. Bxf7+ {Wins a soldier. If 6...Kxf7, 7.Qh5+ gives check and then takes the loose priest on c5.}
        Kf8 {The Black King dodges the fork but can no longer castle.}
        7. d3 {Opens the road for the c1 priest. The priest on f7 is still safe: 7...Kxf7 runs into 8.Qh5+ and 9.Qxc5.}
        Nf6 8. Bb3 {Now the priest retreats to safety, still staring at g8 and the Black King.}
        d6 9. Nd2 {The last minor warrior joins. Next comes f4 to open the f-file road against the Black King on f8. You are a soldier up with the safer King.}`,
    },
    {
      name: "Classical: Centre-Holding Variation (4...Qe7)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3
        Qe7 {The Black Queen guards e5 in advance, so that your d4 does not simply win the heartland.}
        5. d4 {Take the heartland anyway. The e5 soldier is attacked again and the enemy must give ground.}
        Bb6 {The Black priest steps back but keeps aiming at d4 and f2.}
        6. O-O {Into the castle. d4 is well supported by c3 and the f3 rider, so there is no hurry.}
        d6 7. a4 {Threatens a5, chasing the b6 priest off its good diagonal road.}
        a6 {Gives the priest a7 as an escape square.}
        8. h3 {Stops ...Bg4, which would pin the f3 rider, a key guard of d4. Next you can choose between Re1, d5 or a5.}`,
    },
    {
      name: "Paris Defence (3...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        d6 {Sturdy but timid: the soldier on d6 walls in the f8 priest.}
        4. d4 {Against a timid army, storm the heartland at once.}
        exd4 5. Nxd4 {Take back with the rider, a strong warrior in the heartland.}
        Nf6 6. Nc3 {Another rider joins and guards e4, which the f6 rider attacks.}
        Be7 7. O-O {Into the castle. This is the same camp as in the Hungarian Defence, and your army is freer there.}
        O-O 8. h3`,
    },
    {
      name: "Two Knights: Modern Bishop's Opening (4.d3 h6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3
        h6 {Keeps your rider and priest off g5 and prepares ...g6 and ...Bg7 (a "fianchetto": the priest takes the long diagonal road).}
        5. O-O {Into the castle, as usual.}
        d6 6. c3 {A soldier steps to c3 to prepare d4.}
        g6 7. Re1 {Backs up e4 so it is not left unguarded once the heartland opens.}
        Bg7 8. d4 {With c3 and Re1 in place, strike now. You win land in the heartland and the g7 priest runs into a solid shield wall.}`,
    },
    {
      name: "Two Knights: Modern Bishop's Opening (6...d5?)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Be7 5. O-O O-O 6. Re1
        d5 {Looks natural, but with your tower already on e1 it loses a soldier.}
        7. exd5 {Take first. After ...Nxd5, the e5 soldier has lost its d-soldier's support.}
        Nxd5 8. Nxe5 {Wins a soldier: if 8...Nxe5, 9.Rxe5 and the tower is safe.}
        Nxe5 9. Rxe5 {The tower takes back. The d5 rider is now attacked twice, by the tower and the c4 priest.}
        c6 {The Black Kingdom guards the d5 rider a second time.}
        10. Re1 {Bring the tower home before ...Bd6 or ...Bf6 hits it. You are a clean soldier up: finish mustering with Nd2 and Nf3.}`,
    },
    {
      name: "Giuoco Pianissimo: 9...Ne7 (10.d4)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. a4 Ba7 8. Re1 O-O 9. h3
        Ne7 {The Black rider heads for g6 and the kingside, but it no longer guards d4 and e5.}
        10. d4 {Strike now. With the c6 rider gone, d4 hits e5 and the enemy cannot easily press your heartland.}
        Ng6 11. Nbd2 {A rider joins and props up e4. It can still ride to f1 and g3 later, and you keep a strong heartland.}`,
    },
    {
      name: "Giuoco Pianissimo: 7...Bg4 (8.h3)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O O-O 7. Re1
        Bg4 {The main line on Wikibooks: the Black priest pins your f3 rider to your Queen before you have played h3.}
        8. h3 {Ask the priest at once. ...Bxf3 hands you the bishop pair, ...Be6 offers to trade your c4 priest, and ...Bh5 keeps the pin.}
        Bh5 {The enemy keeps the pin, but the priest is now far from the queenside.}
        9. Nbd2 {A rider joins and begins the journey Nf1-g3. From g3 it hits the h5 priest and ends the pin for good.}`,
    },
    {
      name: "Classical: La Bourdonnais Variation (4...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3
        d6 {The Black Kingdom props up e5 first and leaves the g8 rider at home.}
        5. d4 {With no rider on f6, e4 is not under attack, so seize the heartland at once: e5 is hit and the c5 priest's road is blocked.}
        exd4 6. cxd4 {Take back with the c-soldier: you now have two soldiers side by side on d4 and e4.}
        Bb6 {The Black priest steps back but keeps aiming at d4 and f2.}
        7. Nc3 {A rider joins and guards e4.}
        Nf6 {The Black rider attacks e4, which your c3 rider guards.}
        8. Bb3 {Move the priest off c4 before it becomes a target for ...Na5, or for the trick ...Nxe4 and ...d5, which forks priest and rider. Next come h3, O-O and Be3.}`,
    },
    {
      name: "Rousseau Gambit (3...f5)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        f5 {The Rousseau Gambit: the enemy attacks e4 at once and opens the f-file road, but weakens the a2-g8 diagonal to its own King.}
        4. d3 {The calm answer given by Wikibooks: e4 is guarded, and after ...fxe4 you simply take back with the soldier.}
        Nf6 {A Black rider rides out and attacks e4 a second time.}
        5. O-O {Into the castle. Your c4 priest watches g8, so the Black King will find it hard to castle short.}
        Bc5 6. Nc3 {Another rider joins and guards e4 once more.}
        d6 7. Bg5 {Your priest pins the f6 rider to its Queen. Bxf6 followed by Nd5 can follow, planting your rider on a great post in the heartland.}`,
    },
  ],
}
