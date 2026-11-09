import type { OpeningSource } from '../types'

export const kingsIndian: OpeningSource = {
  id: 'kings-indian',
  name: "King's Indian Defense",
  eco: 'E60–E99',
  side: 'black',
  summary:
    "A fighting 'hypermodern' defence to 1.d4. You let the White Kingdom build a great shield wall in the heartland with c4, d4 and e4, post your priest on g7 behind the g6 soldier (a fianchetto) and retreat the King into the castle, then strike back with ...e5 (or sometimes ...c5). When White seals the heartland with d5, the war becomes a race: White storms your queenside, you hurl your f- and g-soldiers at the White King.",
  ideas: [
    "Muster quickly with ...Nf6, ...g6, ...Bg7, ...d6 and ...O-O. The g7 priest is your finest warrior, so avoid trading it.",
    "Challenge the heartland with ...e5. Against camps that make ...e5 awkward (Bg5 pins, or a huge wall with f4), use ...c5 instead.",
    "Attack where your soldiers point: once d5 seals the heartland, move your riders out of the way and march ...f5, ...f4 and ...g5-g4 against the White King.",
  ],
  lines: [
    {
      name: "Orthodox: Classical System (9.Ne1)",
      pgn: `1. d4 Nf6 {Your rider rides out and keeps the White soldier from reaching e4 for now.}
        2. c4 g6 {A soldier steps aside for ...Bg7, the King's Indian priest.}
        3. Nc3 {The White rider prepares e4.}
        Bg7 {The priest takes the long diagonal road, where it presses on d4 and the whole heartland.}
        4. e4 d6 {Let White hold the heartland for now. ...d6 stops e5 and prepares your own ...e5.}
        5. Nf3 O-O {The King retreats into the castle first; the counterattack comes next.}
        6. Be2 e5 {The key strike: challenge d4 and claim your share of the heartland. It does not lose a soldier: 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nxe5? Nxe4 wins it back.}
        7. O-O Nc6 {Your rider adds pressure on d4 and asks White to decide.}
        8. d5 {White seals the heartland and grabs land.}
        Ne7 {The rider falls back towards the kingside, where your war will be, and clears the road for the f-soldier.}
        9. Ne1 {The Mar del Plata main road: the White rider heads to d3 to back c5, and f3 will guard e4.}
        Nd7 {Clears f6 so the f-soldier can march, and watches c5 for a while.}
        10. Nd3 f5 {The classic kingside strike: hit e4 and seize land.}
        11. Bd2 {White prepares f3 and the queenside march.}
        Nf6 {The rider returns to f6, pressing on e4 now that the f-soldier is out of the way.}
        12. f3 f4 {Seals the kingside. Next ...g5-g4 with ...Rf7, ...Bf8 and ...Ng6 to storm the White King, while White races with c5 on the other wing.}`,
    },
    {
      name: "Orthodox: Bayonet Attack, Sokolov's Line (9.b4 Nh5 10.Re1)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7
        9. b4 {The Bayonet Attack: the White Kingdom starts its queenside march at once, aiming for c5.}
        Nh5 {Clears the road for the f-soldier and eyes f4, so ...f5 can come straight away.}
        10. Re1 {The White tower guards e4 in case the heartland opens, and Bf1 can follow to shield the King.}
        f5 {Hit e4 at once and open the f-file road.}
        11. Ng5 {The White rider eyes e6, a square weakened by ...f5, and adds pressure on e4.}
        Nf6 {Your rider returns to the heartland to fight for e4. Next ...h6 chases off the g5 rider.}`,
    },
    {
      name: "Petrosian Variation: Stein Defence (7.d5 a5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. d5 {The Petrosian System: the White Kingdom seals the heartland at once.}
        a5 {Slows down White's b4 march and secures c5 for a rider.}
        8. Bg5 {The White priest pins your f6 rider to your Queen, making ...Nd7 and ...f5 harder.}
        h6 {Ask the priest to decide.}
        9. Bh4 Na6 {The rider heads for c5, a great post where no soldier can attack it once b4 is stopped.}`,
    },
    {
      name: "Sämisch Variation: Closed Variation (7.d5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. f3 {The Sämisch: f3 makes e4 rock solid and prepares Be3, Qd2 and a soldier storm on the kingside.}
        O-O {The King retreats into the castle first, before you open the heartland.}
        6. Be3 e5 {Your soldier strikes at d4 at once.}
        7. d5 Nh5 {Clears the road for ...f5 and eyes f4. Because f3 weakened White's dark squares, ...Qh4+ is also an idea.}
        8. Qd2 f5 {Attack e4 and open the f-file road.}
        9. O-O-O {The White King hides in the long castle: Kings on opposite wings, so both kingdoms attack.}
        Nd7 {The last rider joins; it can go to f6 or c5, and ...a6 with ...b5 can open roads to the White King.}`,
    },
    {
      name: "Four Pawns Attack: Main Line (5.f4)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. f4 {The Four Pawns Attack: four White soldiers in the heartland, aiming for e5.}
        O-O {The King retreats into the castle first, before you open the heartland.}
        6. Nf3 c5 {Strike the heartland before White finishes mustering; such a huge shield wall is hard to support.}
        7. d5 e6 {Attack d5 again to open the e-file road towards the White King, still outside his castle.}
        8. Be2 exd5 {Open the e-file road.}
        9. cxd5 Re8 {Your tower rolls onto the open e-file, pressing on e4 and the e2 priest.}
        10. e5 {A White soldier charges forward with tempo on your rider.}
        dxe5 {Take: opening roads suits you while the White King is still in the middle.}
        11. fxe5 Ng4 {Your rider attacks the e5 soldier again.}
        12. Bg5 {The White priest hits your Queen.}
        Qb6 {Your Queen steps away with an attack on b2, and e5 is still under fire. Sharp skirmishes follow.}`,
    },
    {
      name: "Fianchetto Variation: Classical Main Line (4.g3)",
      pgn: `1. d4 Nf6 2. c4 g6
        3. Nf3 Bg7 {The priest takes the long diagonal road, as always in the King's Indian.}
        4. g3 {The White Kingdom posts a priest on g2 as well: a quieter, very sturdy approach.}
        O-O {Into the castle before choosing a plan for the heartland.}
        5. Bg2 d6 {The usual King's Indian camp.}
        6. O-O Nbd7 {A rider backs the coming ...e5 and keeps c6 free for a soldier.}
        7. Nc3 e5 {The usual ...e5 strike.}
        8. e4 c6 {Controls d5 and b5 and frees b6 for your Queen.}
        9. h3 Qb6 {Your Queen presses on d4 along the diagonal road and on b2 down the b-file, so White must keep defending.}`,
    },
    {
      name: "Orthodox: Gligoric-Taimanov System (7.Be3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. Be3 {The Gligoric System: the White Kingdom keeps the tension in the heartland.}
        Ng4 {Your rider hits the priest, the warrior guarding d4.}
        8. Bg5 {The priest moves with tempo on your Queen.}
        f6 {A soldier blocks the priest's attack on your Queen and props up e5.}
        9. Bh4 Nc6 {Your rider presses on d4 and forces White to decide.}
        10. d5 Ne7 {The rider heads for the kingside. Next ...Nh6, ...f5 and a kingside assault.}`,
    },
    {
      name: "Exchange Variation (7.dxe5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. dxe5 {The Exchange Variation: White trades in the heartland to blunt your attack.}
        dxe5 {Take back; the d-file road opens.}
        8. Qxd8 Rxd8 {The Queens leave the field, but your tower owns the d-file. Your kingdom is fine.}
        9. Bg5 {The White priest pins your f6 rider to the d8 tower.}
        Re8 {The tower steps out of the pin and keeps e5 guarded.}
        10. Nd5 {Threatens Nxf6+ and Nxc7, a fork of your two towers.}
        Nxd5 {Strike down the dangerous rider.}
        11. cxd5 c6 {Attack the d5 soldier at once to break up White's heartland. An even war.}`,
    },
    {
      name: "Makogonov Variation: Karpov System (5.h3 and 6.Be3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. h3 {The Makogonov: a soldier on h3 stops ...Ng4 and ...Bg4, and prepares Be3 and g4.}
        O-O {The King retreats into the castle first, before you open the heartland.}
        6. Be3 e5 {Hit d4: with ...Ng4 off the table, this is the direct route.}
        7. d5 a5 {Stops b4, so a rider on c5 cannot be chased away.}
        8. g4 {White grabs kingside land to slow down your ...f5.}
        Na6 {Your rider heads for c5, where it attacks e4.}`,
    },
    {
      name: "Averbakh Variation: Main Line (6.Bg5 c5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. Be2 O-O {The King retreats into the castle first, before you open the heartland.}
        6. Bg5 {The Averbakh: the White priest pins your rider and makes ...e5 awkward (6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 hits f6 and c7).}
        c5 {Strike the heartland from the other side.}
        7. d5 e6 {Undermine d5 and open the e-file road.}
        8. Qd2 exd5 {Open the e-file road.}
        9. exd5 Re8 {Your tower pins the e2 priest to the White King along the open e-file.}
        10. Nf3 Bg4 {Your priest steps out and pins the f3 rider to the e2 priest. Next ...Nbd7, ...a6 and ...b5 or ...Ne4 ideas.}`,
    },
    {
      name: "Orthodox: Modern System (9.Nd2)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7
        9. Nd2 {The Modern System: the White rider heads for b3 or c4 to back the c5 march, and it no longer blocks the f-soldier, so f3 is possible.}
        a5 {Slow down White's queenside war: now b4 needs a3 and Rb1 first.}
        10. a3 {The White Kingdom prepares b4 anyway.}
        Nd7 {Clear the road for the f-soldier and keep an eye on c5.}
        11. Rb1 {The White tower backs the b4 march.}
        f5 {The usual kingside strike: hit e4 and start your assault before White's queenside soldiers arrive.}`,
    },
    {
      name: "Zinnowitz Variation (6.Bg5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O
        6. Bg5 {The Zinnowitz Variation: the White priest pins your f6 rider to your Queen before White decides where the f1 priest goes.}
        h6 {Ask the priest at once whether it wants to keep the pin.}
        7. Bh4 {The White priest keeps the pin.}
        g5 {Break the pin by force. Your King's walls are a little looser, but the White priest is pushed off the h4-d8 diagonal.}
        8. Bg3 Nh5 {Your rider hits the g3 priest, ready to trade it with ...Nxg3. Without that priest, White has fewer guards of the dark squares, and your ...e5 or ...c5 strike lands harder.}`,
    },
    {
      name: "Sämisch Variation (7.Nge2 c6)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5
        7. Nge2 {White keeps the tension in the heartland instead of sealing it with d5. The rider props up d4 and can go to c1 or g3 later.}
        c6 {Prepare ...b5 or ...d5 and give your Queen the a5 and b6 squares. If White plays d5, ...cxd5 opens the c-file road.}
        8. Qd2 {White links its warriors and gets ready to castle long or play Rd1.}
        Nbd7 {Add a guard to e5 and keep your options open: ...a6 and ...b5 on the queenside, or ...exd4 and ...Re8 against e4.}`,
    },
  ],
}
