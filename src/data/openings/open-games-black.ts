import type { OpeningSource } from '../types'

export const openGamesBlack: OpeningSource = {
  id: 'open-games-black',
  name: '1.e4 e5 for Black',
  eco: 'C20–C67',
  side: 'black',
  summary:
    "A complete war plan against 1.e4 with 1...e5. After 2.Nf3 Nc6 you meet the Ruy Lopez with the sturdy Berlin Defence (3...Nf6), the Italian with the Two Knights Defence (also 3...Nf6), and the Scotch and Four Knights with fast mustering and ...Bb4 or ...Nf6 pressure on e4. Against the Vienna, King's Gambit, Bishop's Opening, Ponziani and Centre Game you strike back in the heartland with ...Nf6 and ...d5 instead of just hiding behind walls.",
  ideas: [
    "Attack the e4 soldier. ...Nf6 hits it in almost every line, and often you can take it (the Berlin, the Vienna 3.Bc4 Nxe4, the Ponziani 4...Nxe4) because you win it back or keep it safely.",
    "Strike back in the heartland with ...d5. It frees your warriors, blunts a priest on c4 and is the best answer to most early White gambits (Two Knights 4.Ng5, Vienna 3.f4, King's Gambit).",
    'Muster with gain of time: ...Bb4 pins a rider on c3, ...Nf6 and ...Nc6 hit soldiers, and the priest on c5 or b4 gets out before ...d6 walls it in.',
  ],
  lines: [
    {
      name: 'Ruy Lopez: Berlin Wall Endgame (9.Nc3 Bd7)',
      pgn: `1. e4 e5 {Your foot soldier claims its share of the heartland and opens roads for the Queen and the f8 priest.}
        2. Nf3 {A White rider gallops out and threatens the e5 soldier.}
        Nc6 {A rider rides out and guards e5.}
        3. Bb5 {The Ruy Lopez: the White priest attacks the rider who guards e5.}
        Nf6 {The Berlin Defence: strike back at the e4 soldier instead of defending.}
        4. O-O {White leaves e4 unguarded, planning Re1 or d4 to win it back.}
        Nxe4 {Take it. White will win the soldier back, but your army musters easily.}
        5. d4 {Opens the e-file road and threatens d5 or dxe5.}
        Nd6 {The rider hits the b5 priest and guards against raids along the e-file.}
        6. Bxc6 dxc6 {Take back away from the heartland: this opens the d-file road and the c8 priest's diagonal, so your two priests come to life.}
        7. dxe5 Nf5 {The only good post; from f5 the rider watches d4, e7 and h4.}
        8. Qxd8+ Kxd8 {The Berlin endgame. Your King can no longer castle, but with the Queens gone he is safe, and you own the two priests.}
        9. Nc3 Bd7 {Link your towers and prepare ...Kc8.}
        10. h3 h6 {Takes g5 away from the White rider and priest, a typical Berlin move.}
        11. b3 Kc8 {The King walks to the queenside, where he is safe and guards your soldiers.}
        12. Bb2 b6 {Makes room for ...Kb7 and prepares ...c5, using your extra queenside soldier.}`,
    },
    {
      name: 'Ruy Lopez: Berlin, Anti-Berlin (4.d3 Bc5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6
        4. d3 {The Anti-Berlin: White simply guards e4 and keeps the Queens on the field.}
        Bc5 {The active post: the priest aims at f2 and gets out before ...d6.}
        5. c3 {Prepares d4 and gives the White priest a road home.}
        O-O {Into the castle early; your King is safe and the tower can come to e8.}
        6. O-O d5 {Strike the heartland while White is still slow.}
        7. exd5 Qxd5 {Take back with the Queen, who now attacks the b5 priest.}
        8. Bc4 {The priest retreats with an attack on your Queen.}
        Qd6 {A safe square where the Queen guards e5 and eyes h2.}`,
    },
    {
      name: 'Two Knights: Polerio Defence (4.Ng5 d5 5.exd5 Na5)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. Bc4 {The Italian: the White priest stares at f7, the weakest point near your King.}
        Nf6 {The Two Knights Defence: your rider rides out and attacks e4 at once.}
        4. Ng5 {The White rider attacks f7 a second time.}
        d5 {Block the priest's road to f7. It is the main move.}
        5. exd5 Na5 {Do NOT take back with the rider (that allows the dangerous Fried Liver sacrifice on f7). Instead hit the c4 priest.}
        6. Bb5+ c6 {Block the check with gain of time: the soldier attacks d5.}
        7. dxc6 bxc6 {You are a soldier down, but you win lots of time chasing White's warriors. This is a well-known gambit.}
        8. Be2 h6 {Chase the rider from g5.}
        9. Nf3 e4 {Chase the rider again.}
        10. Ne5 Bd6 {Your priest steps out and attacks the e5 rider.}
        11. d4 exd3 {Take en passant (the soldier on e4 takes the d-soldier as if it had moved one square).}
        12. Nxd3 Qc7 {Your Queen hits h2 and links your warriors. After ...O-O your lively army makes up for the soldier.}`,
    },
    {
      name: 'Two Knights: 4.d3 into the Giuoco Pianissimo Main Line',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6
        4. d3 {The quiet main road: White guards e4 and builds slowly (the Giuoco Pianissimo).}
        Bc5 {The most common reply: a lively priest aimed at f2.}
        5. c3 d6 {Prop up e5 firmly.}
        6. O-O O-O {Both Kings retreat into their castles.}
        7. Re1 a6 {Gives the priest a road home on a7, so White's b4 or d4 will not come with gain of time.}
        8. Bb3 Ba7 {The priest keeps aiming at f2 from a safe square.}
        9. h3 h6 {Stops Ng5 and Bg5. Both kingdoms manoeuvre before ...Re8, ...Be6 or ...d5.}`,
    },
    {
      name: 'Scotch Gambit: Max Lange Attack (4.d4 exd4 5.e5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6
        4. d4 {White storms the heartland at once.}
        exd4 {Take the soldier.}
        5. e5 {A White soldier chases your rider.}
        d5 {Strike back at the c4 priest rather than retreat the rider.}
        6. Bb5 Ne4 {Your rider leaps to a strong post in the heartland.}
        7. Nxd4 Bd7 {Your priest breaks the pin on the c6 rider.}
        8. Bxc6 bxc6 {Take back; the b-soldier now props up d5.}
        9. O-O Bc5 {Your priest steps out and hits the d4 rider. (Against 5.O-O, take with 5...Nxe4.)}
        10. f3 Ng5 {Step back from f3's attack; the rider heads for e6 to challenge d4.}`,
    },
    {
      name: 'Scotch: Mieses Variation (4...Nf6)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. d4 {The Scotch: White storms the heartland straight away.}
        exd4 {Take the soldier; you cannot hold e5 comfortably.}
        4. Nxd4 Nf6 {Your rider rides out and attacks e4. (After 5.Nc3, play 5...Bb4 as in the Scotch Four Knights.)}
        5. Nxc6 bxc6 {Take back towards the heartland; the b-soldier props up ...d5.}
        6. e5 {A White soldier chases the f6 rider.}
        Qe7 {Pin the e5 soldier to the White King on e1: it cannot take your rider, and your Queen attacks it, so White must defend it.}
        7. Qe2 Nd5 {Your rider leaps to a strong post in the heartland.}
        8. c4 Ba6 {Pin the c4 soldier to the White Queen on e2, so the d5 rider is not chased away for free.}
        9. b3 g6 {Clear the long diagonal road for ...Bg7, so the priest can attack e5 again, then castle.}`,
    },
    {
      name: 'Four Knights: Spanish, Metger Unpin (4.Bb5 Bb4)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. Nc3 {The Four Knights Game: a second White rider joins the war.}
        Nf6 {Your rider rides out and hits e4.}
        4. Bb5 {The Spanish Four Knights: the White priest rides to b5.}
        Bb4 {Copy the enemy: your priest pins the c3 rider.}
        5. O-O O-O {Into the castle, like White.}
        6. d3 d6 {Sturdy: guard e5 and open the road for the c8 priest.}
        7. Bg5 {The White priest pins the f6 rider.}
        Bxc3 {Take the rider first: White is left with doubled c-soldiers.}
        8. bxc3 Qe7 {The Metger unpin: your Queen steps off the d8-h4 road so the pin on f6 is harmless.}
        9. Re1 Nd8 {The rider heads for e6 to hit the g5 priest.}
        10. d4 Ne6 {Attack the priest on g5 and watch d4, f4 and g5.}`,
    },
    {
      name: 'Four Knights: Scotch Variation, Main Line (4.d4)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6
        4. d4 {The Scotch Four Knights: White storms the heartland.}
        exd4 {Take the soldier; it opens the e-file road and your priests' paths.}
        5. Nxd4 Bb4 {Your priest pins the c3 rider, and ...Nxe4 is now threatened.}
        6. Nxc6 bxc6 {Take back towards the heartland; the b-soldier now props up ...d5.}
        7. Bd3 {The White priest guards e4.}
        d5 {Your soldier strikes at e4: it is now attacked three times.}
        8. exd5 O-O {Into the castle first; the d5 soldier will not run away.}
        9. O-O cxd5 {Win the soldier back and plant a strong soldier on d5.}
        10. Bg5 c6 {Prop up the d5 soldier. Next ...h6 or ...Be7 deals with the pin.}`,
    },
    {
      name: 'Vienna Gambit: Breyer Variation (3.f4 d5)',
      pgn: `1. e4 e5
        2. Nc3 {The Vienna Game: the White rider rides out to c3.}
        Nf6 {Your rider rides out and attacks e4. (If 3.Nf3, play 3...Nc6, the Four Knights.)}
        3. f4 {The Vienna Gambit: a White soldier attacks e5.}
        d5 {Strike back in the heartland; this is the main move.}
        4. fxe5 Nxe4 {Your rider lands on a great post in the heartland and hits c3.}
        5. Nf3 Be7 {Quiet mustering, readying the castle. (Against 5.Qf3, play 5...Nc6 or 5...f5; against 5.d3, 5...Nxc3 6.bxc3 d4.)}
        6. d4 O-O {Into the castle before opening any roads.}
        7. Bd3 f5 {A soldier props up the e4 rider, your finest warrior.}
        8. exf6 Bxf6 {White took en passant; take back with the priest. The f-file road is open for your tower and the priest hits d4.}`,
    },
    {
      name: 'Vienna: Stanley Variation (3.Bc4 Nxe4)',
      pgn: `1. e4 e5 2. Nc3 Nf6
        3. Bc4 {The White priest stares at f7.}
        Nxe4 {Take the soldier. If 4.Nxe4, ...d5 forks priest and rider and wins the warrior back.}
        4. Qh5 {The White Queen threatens Qxf7 mate.}
        Nd6 {Blocks the priest's attack on f7 and hits the c4 priest.}
        5. Bb3 Be7 {Calm mustering, avoiding the wild battles after 5...Nc6.}
        6. Nf3 Nc6 {A rider guards e5.}
        7. Nxe5 O-O {Into the castle: now your tower guards f7 too.}
        8. O-O Nd4 {Attack the b3 priest and head for the heartland.}`,
    },
    {
      name: "King's Gambit Accepted: Abbazia (Modern) Defence (3...d5)",
      pgn: `1. e4 e5
        2. f4 {The King's Gambit: White sacrifices a soldier to open the f-file road.}
        exf4 {Accept the soldier.}
        3. Nf3 {A White rider rides out and stops ...Qh4+.}
        d5 {The Modern Defence: give back a soldier in the heartland to open roads for your army.}
        4. exd5 Nf6 {Your rider rides out and attacks d5. (Against 5.Bc4 take with 5...Nxd5.)}
        5. Bb5+ c6 {Block the check by offering another soldier; it buys time for your mustering.}
        6. dxc6 Nxc6 {Your army musters with gain of time.}
        7. d4 Bd6 {Your priest steps out and guards the f4 soldier.}
        8. O-O O-O {Into the castle; now you are ready to pin the f3 rider.}
        9. Nbd2 Bg4 {Pin the rider and press on d4.}
        10. c3 Bc7 {Keep guarding f4 from a safe square where the priest cannot be hit by Nc4.}`,
    },
    {
      name: "Bishop's Opening: Paulsen Defence (3.d3 c6)",
      pgn: `1. e4 e5
        2. Bc4 {The Bishop's Opening: the White priest stares at f7.}
        Nf6 {Your rider rides out and hits e4. (After 3.Nc3, play 3...Nxe4 as in the Vienna.)}
        3. d3 {A White soldier guards e4.}
        c6 {Prepare ...d5 to seize the heartland and blunt the c4 priest.}
        4. Nf3 d5 {Seize the heartland and attack e4.}
        5. Bb3 Bd6 {Your priest steps out and guards e5.}
        6. O-O O-O {Into the castle; then ...Re8 or ...Nbd7 with a fine heartland.}`,
    },
    {
      name: 'Ponziani: Jaenisch Counterattack (3...Nf6)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. c3 {The Ponziani: a White soldier steps to c3 to prepare d4.}
        Nf6 {The safest reply: your rider hits e4 at once.}
        4. d4 Nxe4 {Take the soldier.}
        5. d5 {A White soldier chases the c6 rider.}
        Ne7 {The usual retreat; the rider heads for g6.}
        6. Nxe5 Ng6 {Challenge the proud e5 rider.}
        7. Nxg6 hxg6 {Take back towards the heartland; your tower on h8 now has the open h-file road.}
        8. Qe2 {The White Queen pins the e4 rider against your King.}
        Qe7 {Your Queen blocks the e-file and guards the rider.}
        9. Bf4 d6 {Guard the c7 and e5 squares and open the road for the c8 priest, which will back the rider from f5.}`,
    },
    {
      name: 'Centre Game: Berger Variation (4.Qe3 Nf6)',
      pgn: `1. e4 e5
        2. d4 {The Centre Game: White charges straight into the heartland.}
        exd4 {Take the soldier: White has to take back with the Queen.}
        3. Qxd4 {The White Queen rides out early.}
        Nc6 {Your rider rides out with an attack on the Queen.}
        4. Qe3 Nf6 {Another rider joins and attacks e4.}
        5. Nc3 Bb4 {Your priest pins the c3 rider, which guards e4.}
        6. Bd2 O-O {Into the castle, ready to put your tower on the open e-file road.}
        7. O-O-O Re8 {Attack e4. The soldier is pinned to the White Queen on e3, so it is hard to defend.}`,
    },
  ],
}
