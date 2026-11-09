import type { OpeningSource } from '../types'

export const petroff: OpeningSource = {
  id: "petroff",
  name: "Petrov's Defense",
  eco: "C42–C43",
  side: "black",
  summary:
    "Petrov's Defence (also called the Russian Game) answers 1.e4 e5 2.Nf3 with 2...Nf6: instead of guarding your soldier on e5, your rider strikes back at the White soldier on e4. It is one of the sturdiest fortresses in chess. The two kingdoms often mirror each other and many warriors are traded, but you must know one key trick: after 3.Nxe5, play 3...d6 first and only then take on e4.",
  ideas: [
    "After 3.Nxe5, chase the raider away with 3...d6 before taking e4. 3...Nxe4? walks into 4.Qe2!, when your rider is stuck on the e-file in front of your King (4...Nf6?? 5.Nc6+ wins your Queen).",
    "Your rider on e4 is a proud outpost: back it with a soldier on ...d5 and build your army around it. If White attacks it with Nc3, simply trade it off.",
    "Muster fast, retreat the King into the castle on the short side and aim for a sound, equal peace. The Petrov is about safety first, so do not chase risky adventures.",
  ],
  lines: [
    {
      name: "Classical Attack: Chigorin Variation, Main Line (8.c4 Nb4)",
      pgn: `1. e4 e5 {Your foot soldier claims its share of the heartland.}
        2. Nf3 {A White rider rides out and threatens e5.}
        Nf6 {Petrov's Defence: rather than guarding e5, your rider strikes back at e4.}
        3. Nxe5 {The White rider grabs the soldier first.}
        d6 {Chase the raider before taking back. 3...Nxe4? 4.Qe2! is bad: your e4 rider cannot move without unmasking a discovered check from the e5 rider (4...Nf6?? 5.Nc6+ wins your Queen).}
        4. Nf3 {The raider gallops home.}
        Nxe4 {Now take the soldier. Armies are level, and with the White rider gone from e5 the e-file tricks no longer work.}
        5. d4 {The main road: White seizes the heartland and plans Bd3 to challenge your rider.}
        d5 {A soldier stands behind your rider: it now holds e4 firmly in the middle of the land.}
        6. Bd3 {The White priest attacks the rider a second time and eyes your King.}
        Nc6 {Another rider joins and presses on d4.}
        7. O-O Be7 {Calm mustering: your priest steps out, the castle gate is ready.}
        8. c4 {A White soldier attacks d5, the guard who props up your rider.}
        Nb4 {Your rider hits the d3 priest, the one attacking your e4 rider and eyeing your King. White must move it or allow ...Nxd3.}
        9. Be2 O-O {Your King is safe in the castle; now finish mustering.}
        10. Nc3 {A third attacker closes in on your e4 rider.}
        Bf5 {Your priest steps out and guards the e4 rider once more.}
        11. a3 {A White soldier chases your b4 rider.}
        Nxc3 {Trade the e4 rider before it is surrounded, so you have time to save the b4 rider.}
        12. bxc3 Nc6 {The rider rides back to safety and presses on d4. The war is roughly even.}`,
    },
    {
      name: "Nimzowitsch Attack (5.Nc3)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Nc3 {White challenges your rider and plans fast mustering with a castle on the long side.}
        Nxc3 {Trade riders: the simplest answer to the attack on e4.}
        6. dxc3 {Taking towards the heartland opens the d-file road and paths for White's priests.}
        Be7 {Your priest steps out, the castle gate is ready.}
        7. Be3 O-O {The King's safety comes first.}
        8. Qd2 Nd7 {The rider heads for f6, its best post, where it guards your King.}
        9. O-O-O {The Kings live in opposite castles: White may march g4-g5 at your King.}
        Nf6 {The rider is in place. Now open your own front on the queenside with ...Be6, ...Qa5 or soldier marches like ...c5 and ...b5.}`,
    },
    {
      name: "Cozio Attack (5.Qe2)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Qe2 {The White Queen pins your e4 rider to your King along the open e-file and threatens d3 to win it.}
        Qe7 {Your own Queen steps in front, so the pin is blocked and the rider is free to retreat.}
        6. d3 {A soldier attacks the rider.}
        Nf6 {Retreat. Your Queen on e7 still guards the e-file road.}
        7. Bg5 {The priest pins your f6 rider to your Queen and threatens Bxf6 to wreck your soldiers.}
        Qxe2+ {Trade Queens: the pin ends and a calm, equal endgame follows.}
        8. Bxe2 Be7 {Your priest steps out, frees the rider for good, and the castle comes next.}`,
    },
    {
      name: "Kaufmann Attack (5.c4)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. c4 {A White soldier guards d5, so ...d5 to support your rider is not possible right away.}
        Nc6 {Another rider joins and watches d4 and e5.}
        6. Nc3 {White challenges your e4 rider.}
        Nxc3 {Trade riders, the simplest answer.}
        7. dxc3 Be7 {Your priest steps out, the castle gate is ready.}
        8. Bd3 O-O {The King's safety comes first.}
        9. O-O Ne5 {Offer a rider trade with tempo: your rider hits the d3 priest.}
        10. Nxe5 dxe5 {The soldiers now stand in mirror image and neither wall has a crack. The war is even.}`,
    },
    {
      name: "Modern Attack: Centre Variation (3.d4 Nxe4 4.Bd3)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. d4 {White storms the heartland at once instead of taking on e5.}
        Nxe4 {Take the soldier: this is the main road. Your e5 soldier is attacked, but White's e4 soldier is gone too.}
        4. Bd3 {The White priest attacks your rider.}
        d5 {A soldier steps up to back the rider and seize space in the heartland.}
        5. Nxe5 {The White rider sits proudly on e5.}
        Nd7 {Challenge the e5 rider, White's best warrior, with one of your own.}
        6. Nxd7 Bxd7 {Taking back brings your priest into the war.}
        7. O-O Bd6 {Your priest steps out, aims at h2 and opens the castle gate.}
        8. c4 {A White soldier attacks d5, the guard who props up your e4 rider.}
        c6 {Back up d5 with another soldier. A solid wall and an even war.}`,
    },
    {
      name: "Cochrane Gambit: Centre Variation (5.d4)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6
        4. Nxf7 {The Cochrane Gambit: White throws away a rider for two soldiers and hopes your King will be left in the open.}
        Kxf7 {Take it. You are a warrior for two soldiers up; the King will find shelter.}
        5. d4 {White builds a big shield wall in the heartland and wants e5 to chase your f6 rider. (5...Nxe4? 6.Qh5+ is bad for you.)}
        c5 {Strike the heartland at once, before White's soldiers can roll forward.}
        6. dxc5 {White grabs a third soldier.}
        d5 {Strike back in the heartland and open roads: your f8 priest can retake on c5 later.}
        7. e5 {A soldier chases your rider. (7.exd5 Bxc5 is great for you.)}
        Ne4 {The rider leaps to a strong central post, where no soldier can chase it, and eyes the c5 soldier and f2.}
        8. Bd3 {The White priest attacks the e4 rider.}
        Nxc5 {Win a soldier back with tempo on the d3 priest: you are a warrior for two soldiers up, with a big soldier on d5.}`,
    },
    {
      name: "Three Knights Game (3.Nc3 Bb4)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. Nc3 {A White rider guards e4.}
        Bb4 {Pin the rider, the only guard of e4. (3...Nc6 leads to the Four Knights instead.)}
        4. Nxe5 {White grabs the soldier.}
        O-O {Into the castle, and get ready for ...Re8: pressure on the e-file road wins the soldier back.}
        5. Be2 Re8 {Your tower rolls onto the e-file, hitting e4 and the e5 rider.}
        6. Nd3 {The rider retreats and attacks your priest.}
        Bxc3 {Strike down the rider who guards e4.}
        7. dxc3 Nxe4 {The soldier is won back: the armies are level.}
        8. O-O d6 {Takes e5 away from White's rider and opens the road for the c8 priest. An even war with lively warriors.}`,
    },
    {
      name: "Italian Variation: Boden-Kieseritzky Gambit (3.Bc4)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. Bc4 {White ignores the attack on e4 and sends out a priest.}
        Nxe4 {Take the soldier: it is a real gain, and White's payment is not enough if you defend with care.}
        4. Nc3 {The Boden-Kieseritzky Gambit: White challenges your rider and hopes for fast mustering.}
        Nxc3 {Trade riders.}
        5. dxc3 {White opens roads for the priest and the Queen.}
        f6 {Hold the e5 soldier, which the f3 rider attacks. It weakens your King's walls, so the next moves must cover the light squares.}
        6. Nh4 {The rider heads for f5 and frees the Queen for Qh5+.}
        g6 {Stops Qh5+ and takes f5 away from the rider.}
        7. f4 {A soldier attacks e5 again.}
        Qe7 {Your Queen guards e5 and covers f7 and the light squares around your King. Next ...d6, ...c6 and ...Be6 to trade off the c4 priest.}`,
    },
    {
      name: "Classical Attack: Berger Variation (8.Re1 Bg4 9.c3 f5)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7
        8. Re1 {The Chigorin Variation: the White tower joins the attack on your e4 rider along the e-file.}
        Bg4 {Your priest pins the f3 rider to its Queen and adds pressure on d4.}
        9. c3 {A soldier props up d4.}
        f5 {Back up the e4 rider with a soldier, so it cannot be driven away easily.}
        10. Nbd2 O-O {The King retreats into the castle. Your rider on e4 is firmly held by soldiers on d5 and f5.}`,
    },
    {
      name: "French Attack (5.d3)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. d3 {The French Attack: a White soldier simply chases your rider back.}
        Nf6 {Retreat to the rider's best post, where it guards your King.}
        6. d4 {White claims the heartland after all.}
        d5 {Claim your share of the heartland and open the road for the c8 priest.}
        7. Bd3 Bd6 {Mirror White's mustering and ready the castle gate.}
        8. O-O O-O {Two mirror-image kingdoms, an even war. Continue with ...Bg4 or ...Re8 and ...c6.}`,
    },
    {
      name: "Millennium Attack (5.Bd3)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Bd3 {The Millennium Attack: the White priest attacks your rider, and White plans O-O, Re1 and c3 with Bc2.}
        Nf6 {Retreat to f6, where the rider guards your King.}
        6. O-O Be7 {Your priest steps out, the castle gate is ready.}
        7. h3 {A soldier guards g4 and stops ...Bg4.}
        O-O {The King retreats into the castle.}
        8. c3 Re8 {Seize the open e-file road before White's tower gets there. Next ...Bf8, ...c6 or ...Nbd7.}`,
    },
  ],
}
