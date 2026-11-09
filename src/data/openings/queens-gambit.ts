import type { OpeningSource } from '../types'

export const queensGambit: OpeningSource = {
  id: 'queens-gambit',
  name: "Queen's Gambit",
  eco: 'D06–D69',
  side: 'white',
  summary:
    "After 1.d4 d5, you, commander of the White Kingdom, send the c-pawn to c4 to strike Black's heartland soldier from the side. If the Black Kingdom takes on c4, you get a free hand in the heartland and almost always win the soldier back, so it is not a real sacrifice. If Black holds d5 instead, you mobilise fast, keep more land and grind away at the Black Kingdom over the long war.",
  ideas: [
    "Hit d5 with c4, Nc3 and often Bg5 (pinning the f6 rider that defends d5), so the Black Kingdom is always busy holding the heartland.",
    "If Black takes on c4, do not chase the soldier at once: build the heartland with e3 or e4, mobilise, and win it back with Bxc4.",
    "In the middlegame use the c-file road and your queenside land (Rc1, b4-b5) or the e3-e4 push into the heartland, depending on how Black has set up.",
  ],
  lines: [
    {
      name: 'QGD: Orthodox Defence, Classical Variation (12...e5 13.dxe5)',
      pgn: `1. d4 {A White soldier plants a flag on d4, already guarded by the Queen, and the road opens for the c1 priest.}
        d5 2. c4 {The Queen's Gambit: the c-pawn strikes d5 from the side. If Black takes, you will win the soldier back and own the heartland.}
        e6 {The Queen's Gambit Declined. Black props up d5 with the e-pawn, a solid wall, but the c8 priest is now locked in behind e6.}
        3. Nc3 {A rider joins the attack on d5 as a second attacker.}
        Nf6 4. Bg5 {A pin: the f6 rider cannot move without exposing the Queen on d8, and that rider is a key guard of d5.}
        Be7 {Black breaks the pin, so Bxf6 is no longer a worry.}
        5. e3 {Supports d4 and opens the road for the f1 priest.}
        O-O 6. Nf3 {A rider comes out and watches e5, so Black cannot easily break with ...e5.}
        Nbd7 7. Rc1 {The tower rolls to the c-file now, because that road usually opens once soldiers are traded on c4 or d5.}
        c6 8. Bd3 {The last minor piece marches out. The priest eyes h7, but Black will make it move again by taking on c4.}
        dxc4 {Black gives up the heartland on purpose, gaining a tempo because the priest must recapture.}
        9. Bxc4 {The priest recaptures and keeps a good road toward f7.}
        Nd5 {Capablanca's freeing idea: trade some pieces so the cramped Black army gets room to breathe.}
        10. Bxe7 {Take before Black trades on g5. Moving away would just waste time.}
        Qxe7 11. O-O {Your King retreats into the castle before the land opens up.}
        Nxc3 12. Rxc3 {The tower recaptures and stays active on the third row and the c-file.}
        e5 {The freeing push: at last the c8 priest is let out.}
        13. dxe5 {Take at once, so the heartland opens while your army is the more active one.}
        Nxe5 14. Nxe5 {Riders are traded; Black must recapture with the Queen, who can then be chased.}
        Qxe5 15. f4 {The f-pawn kicks the Queen with gain of time and grabs kingside land. With the f-pawn and the c4 priest both aimed at f7, you keep a small but lasting initiative.}`,
    },
    {
      name: 'QGD: Tartakower Defence, Makogonov Exchange (8.cxd5)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3
        h6 {Black asks your priest: keep the pin with Bh4, or give yourself up on f6?}
        7. Bh4 {Keep the pin, so the f6 rider stays tied down.}
        b6 {The Tartakower: Black's problem priest on c8 will come out via b7 instead.}
        8. cxd5 {Trade in the heartland at once, before the priest reaches b7, so Black must decide how to recapture.}
        Nxd5 {Black recaptures with the rider to trade pieces and free the army.}
        9. Bxe7 {Trade priests rather than let the h4 priest be taken or chased.}
        Qxe7 10. Nxd5 {Riders are traded, so Black must recapture with the e-pawn. That soldier on d5 will then block the long diagonal road that ...b6 was meant to open.}
        exd5 11. Rc1 {The tower takes the half-open c-file and aims at c7, ready to lean on the ...c5 break.}
        Be6 {With the long diagonal blocked by d5, the priest settles on e6 instead of b7.}
        12. Qa4 {Fischer's move against Spassky in game 6 of their 1972 match. Your Queen eyes a7 and c6, and if Black plays ...c5, Qa3 piles onto the c5 soldier.}`,
    },
    {
      name: 'QGA: Central Variation, McDonnell Defence (3...e5)',
      pgn: `1. d4 d5 2. c4
        dxc4 {The Queen's Gambit Accepted. Black takes the soldier but usually does not try to keep it.}
        3. e4 {Seize the whole heartland at once. The c4 soldier is going nowhere, so you can win it back later.}
        e5 {Black strikes back in the heartland at once, before you settle in.}
        4. Nf3 {A rider comes out and defends d4 indirectly by attacking e5. Avoid 4.dxe5, which allows a Queen trade and kills your lead in development.}
        exd4 5. Bxc4 {Win the gambit soldier back, and the priest now eyes f7.}
        Nc6 {Black guards the d4 soldier, which he keeps for now.}
        6. O-O {Your King retreats into the castle before you go after d4. Your lead in development counts for more than one soldier.}
        Be6 {Black offers to trade off your strong c4 priest.}
        7. Bxe6 {Take, so Black must recapture with the f-pawn and gets doubled e-pawns.}
        fxe6 8. Qb3 {Your Queen hits two weak soldiers at once: b7 and e6.}
        Qd7 9. Qxb7 {She takes b7, and material is level again.}
        Rb8 10. Qa6 {The Queen steps off the open b-file road and keeps an eye on a7 and e6.}
        Nf6 11. Nbd2 {A rider heads for b3 or c4 to win the d4 soldier. You have the better pawn structure; Black has open roads for his towers.}`,
    },
    {
      name: 'QGA: Central Variation, Alekhine System (3...Nf6)',
      pgn: `1. d4 d5 2. c4 dxc4 3. e4
        Nf6 {A Black rider attacks e4 at once.}
        4. e5 {Your soldier gains land and kicks the rider out of the heartland.}
        Nd5 5. Bxc4 {Win the soldier back, and the priest attacks the d5 rider.}
        Nb6 6. Bb3 {The priest stays on the a2-g8 diagonal road, aimed at f7.}
        Nc6 {The rider attacks d4.}
        7. Ne2 {A rider guards d4 from e2 and leaves the f-pawn free to march to f4 in support of e5.}
        Bf5 8. Nbc3 {Another rider comes out and watches e4.}
        e6 9. O-O {Your King retreats into the castle. The e5 soldier gives you more land; Black will try to undermine it with ...f6 or ...Na5.}`,
    },
    {
      name: 'Slav: Czech Variation, Classical System, Main Line (9.Qe2)',
      pgn: `1. d4 d5 2. c4
        c6 {The Slav: Black backs d5 with the c-pawn, so the c8 priest is not locked in as after ...e6.}
        3. Nf3 {A rider comes out and keeps watch over e5.}
        Nf6 4. Nc3 {A third piece now aims at d5.}
        dxc4 {Black grabs the soldier and hopes to keep it with ...b5.}
        5. a4 {Stops ...b5, so Black cannot hold on to the c4 soldier.}
        Bf5 {The Czech Variation: the priest walks out before Black plays ...e6.}
        6. e3 {Opens the road for the f1 priest to recapture on c4.}
        e6 7. Bxc4 {The soldier is won back and the priest stands well.}
        Bb4 {A pin on the c3 rider, which slows down your e4 push.}
        8. O-O {Your King retreats into the castle; this also ends any future pin on the e1-a5 diagonal.}
        O-O 9. Qe2 {The Queen backs e4, the move you want to play.}
        Nbd7 10. e4 {Take the heartland and hit the f5 priest, gaining a tempo.}
        Bg6 11. Bd3 {Supports e4 and prepares e5 to drive off the f6 rider. You hold more land; Black is solid.}`,
    },
    {
      name: 'Semi-Slav: Moscow Variation (6.Bxf6)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3
        e6 {The Semi-Slav: Black props up d5 with both the c- and e-pawns, a double wall.}
        5. Bg5 {A pin on the rider, adding pressure on d5.}
        h6 {Black asks your priest to decide. 6.Bh4 leads to very sharp, theory-heavy battles.}
        6. Bxf6 {The Moscow: hand over the bishop pair for a simple, healthy position and quick development.}
        Qxf6 7. e3 {Calm mobilising, supporting d4.}
        Nd7 8. Bd3 {The last minor piece marches out and points at Black's kingside.}
        dxc4 9. Bxc4 {Recapture, and the priest lands on an active diagonal road.}
        g6 10. O-O {Your King retreats into the castle. Black will play ...Bg7 and aim for ...e5; you keep a lead in development and plan e4 or a4-a5.}`,
    },
    {
      name: 'QGD: Cambridge Springs Defence, Bogoljubow Variation (7...Bb4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5
        Nbd7 {Looks harmless but hides a trap: 5.cxd5 exd5 6.Nxd5?? Nxd5! 7.Bxd8 Bb4+ and Black wins back the Queen with a piece extra (the Elephant Trap).}
        5. e3 {Calm mobilising, staying clear of any tricks on d5.}
        c6 6. Nf3 {Normal development: the rider watches e5.}
        Qa5 {The Cambridge Springs. The Black Queen pins the c3 rider and, after ...dxc4 or ...Ne4, also attacks the g5 priest.}
        7. Nd2 {Stops ...Ne4 and gets ready to meet ...dxc4 with Nxc4, hitting the Queen.}
        Bb4 {Black piles onto the pinned c3 rider.}
        8. Qc2 {Your Queen guards c3 a second time, so nothing there can be won.}
        O-O 9. Be2 {Finish mobilising and prepare to castle. Not 9.Bd3??, when 9...dxc4 10.Bxf6 cxd3! wins a piece for Black. Once your King is in the castle, the Black Queen on a5 can become a target.}`,
    },
    {
      name: 'QGD: Lasker Defence, Main Line (7...Ne4)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4
        Ne4 {The Lasker: Black trades minor pieces to free his cramped army.}
        8. Bxe7 {Trade priests before Black can take on h4.}
        Qxe7 9. cxd5 {Trade first, so after the rider swap Black must recapture on d5 with a soldier.}
        Nxc3 10. bxc3 {Recapture toward the heartland; this soldier can later march to c4.}
        exd5 11. Qb3 {Your Queen attacks the d5 soldier, which has no fellow soldier guarding it.}
        Rd8 {Black's tower defends d5.}
        12. c4 {Strike d5 again. After ...dxc4 Bxc4 you get quick development and pressure on f7 and the d-file.}`,
    },
    {
      name: 'Albin Countergambit: Fianchetto Variation, Be6 Line (5.g3)',
      pgn: `1. d4 d5 2. c4
        e5 {The Albin Countergambit: Black sacrifices a soldier for quick development and a cramping soldier on d4.}
        3. dxe5 {Take the soldier.}
        d4 {The soldier on d4 stops Nc3 and grabs land.}
        4. Nf3 {A rider comes out and guards e5. Avoid 4.e3?, when ...Bb4+ 5.Bd2 dxe3! 6.Bxb4?? exf2+ 7.Ke2 fxg1=N+ is the Lasker Trap.}
        Nc6 5. g3 {Prepares Bg2. The priest will aim at b7 and the queenside, where Black often castles.}
        Be6 6. Nbd2 {The rider goes to d2, not c3, where the d4 soldier could hit it. From d2 it can reach b3 to attack d4.}
        Qd7 7. Bg2 {The priest takes the long diagonal road.}
        O-O-O 8. O-O {You are a soldier up and will storm the Black King on the queenside with soldiers and pieces (b4, Qa4, Nb3).}`,
    },
    {
      name: 'Chigorin Defence: Main Line (3.Nf3 Bg4)',
      pgn: `1. d4 d5 2. c4
        Nc6 {The Chigorin: Black sends out pieces fast instead of backing d5 with a soldier.}
        3. Nf3 {A rider comes out and stops ...e5.}
        Bg4 {A pin on your rider, fighting for e5 and d4.}
        4. cxd5 {Take on d5 first, so Black has to win the soldier back with the Queen.}
        Bxf3 5. gxf3 {Recapture toward the heartland. You get the two priests and control of e4, at the cost of a slightly loose kingside.}
        Qxd5 6. e3 {Solidly guards d4.}
        e5 7. Nc3 {A rider comes out with tempo by attacking the Queen.}
        Bb4 8. Bd2 {Breaks the pin, so the c3 rider is defended.}
        Bxc3 9. bxc3 {You have two priests against two riders and a strong shield wall in the heartland. Open the land for the priests.}`,
    },
    {
      name: 'Slav: Chebanenko Variation, Advance System (5.c5)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3
        a6 {The Chebanenko: Black prepares ...b5, either to grab land or to win the c4 soldier after ...dxc4.}
        5. c5 {Grab queenside land and take the sting out of ...b5, because there is no soldier left on c4 to attack.}
        Bf5 6. Bf4 {The priest comes out and watches e5, making Black's freeing ...e5 harder.}
        Nbd7 7. e3 {Supports d4, the base of your shield wall. Next come Be2, O-O and b4 to lock in the queenside land.}`,
    },
    {
      name: 'Tarrasch Defence: Classical Variation, Carlsbad Variation (9.Bg5)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3
        c5 {The Tarrasch Defence: Black hits d4 at once and accepts an isolated d-pawn (a soldier with no comrades on the files beside it) in return for free piece play.}
        4. cxd5 {Trade so that Black must recapture with the e-pawn and is left with that isolated soldier on d5.}
        exd5 5. Nf3 {A rider comes out and adds pressure on d4 and e5.}
        Nc6 6. g3 {The Rubinstein System: the priest will go to g2, where it aims straight at the d5 soldier.}
        Nf6 7. Bg2 {The fianchetto priest now presses on d5 along the long diagonal road.}
        Be7 8. O-O {Your King retreats into the castle before the heartland opens.}
        O-O 9. Bg5 {A pin on the f6 rider, one of the main guards of d5.}
        cxd4 {The Black Kingdom clears the c-file road and hands its pieces the c5 and e5 squares.}
        10. Nxd4 {The rider recaptures and now stands right in front of the isolated soldier, blocking it.}
        h6 11. Be3 {The priest steps back to guard d4 and keep watch on the dark squares in front of d5. For the rest of the war, you play against the d5 soldier.}`,
    },
    {
      name: 'Marshall Defence (2...Nf6 3.cxd5 Nxd5 4.e4)',
      pgn: `1. d4 d5 2. c4
        Nf6 {The Marshall Defence: Black develops but leaves d5 with no soldier to back it.}
        3. cxd5 {Take the soldier, so Black must recapture with a piece.}
        Nxd5 4. e4 {Build a full shield wall in the heartland and kick the rider with gain of time.}
        Nf6 5. Nc3 {A rider comes out and guards e4.}
        e5 {Black's best try: strike the heartland before you finish mobilising.}
        6. Nf3 {A rider comes out and counterattacks e5. Avoid 6.dxe5 Qxd1+, which trades Queens and costs your King the right to castle.}
        exd4 7. Qxd4 {Your Queen recaptures and offers a Queen trade.}
        Qxd4 8. Nxd4 {You lead in development and keep the e4 soldier in the heartland, a pleasant endgame-type position.}`,
    },
    {
      name: 'QGD: Neo-Orthodox Variation, Main Line via 3...Be7 (Alatortsev)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3
        Be7 {The Alatortsev Variation: Black sends out the priest before the rider to keep options open.}
        4. Nf3 {A rider comes out and watches e5. After ...Nf6, the war returns to normal Queen's Gambit Declined lines.}
        Nf6 5. Bg5 {A pin on the f6 rider, just as in the main lines.}
        h6 6. Bh4 {Keep the pin.}
        O-O 7. e3 {Supports d4 and opens the f1 priest's road. This is exactly the position of the Tartakower and Lasker chapters, reached by a different move order.}`,
    },
  ],
}
