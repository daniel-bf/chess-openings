import type { OpeningSource } from '../types'

export const scotch: OpeningSource = {
  id: "scotch",
  name: "Scotch Game",
  eco: "C44–C45",
  side: "white",
  summary:
    "In the Scotch (1.e4 e5 2.Nf3 Nc6 3.d4) you storm the heartland on move three instead of building slowly. After 3...exd4 4.Nxd4 your rider holds a fine heartland square and your soldier stands on e4, while the Black Kingdom has no soldier in the heartland at all. Kasparov brought it back to the top: the battlefields are open and clear, and you fight with quick development and pressure along the d- and e-file roads.",
  ideas: [
    "Trade your d-soldier for the enemy's e-soldier: you keep the e4 soldier in the heartland, the Black Kingdom does not.",
    "Nxc6 is often the key decision: after ...bxc6 the enemy's shield wall is broken, after ...dxc6 the Queens often leave the field.",
    "Guard f2 and e4: the enemy's counterattack usually comes from ...Bc5, ...Qf6 or ...Qh4 aimed at those points.",
  ],
  lines: [
    {
      name: "Schmidt: Mieses Variation (8...Ba6 9.b3)",
      pgn: `1. e4 {A White soldier plants a flag on e4 in the heartland and opens roads for the Queen and the f1 priest.}
        e5 {The Black Kingdom answers in kind and claims an equal share of the heartland.}
        2. Nf3 {A White rider gallops out to f3, and the e5 soldier is already under threat.}
        Nc6 {A Black rider rushes to guard e5.}
        3. d4 {The Scotch Game: you storm the heartland at once.}
        exd4 {The enemy takes, since e5 was attacked twice and guarded only once.}
        4. Nxd4 {Your rider retakes. It stands strong on d4, and your e4 soldier is free to march.}
        Nf6 {The Schmidt Variation: a Black rider comes out and attacks e4.}
        5. Nxc6 {Trade riders first, so the enemy's shield wall gets damaged.}
        bxc6 6. e5 {Your soldier kicks the f6 rider off its good square.}
        Qe7 {The Black Queen attacks e5 and pins it to your King on the e-file road.}
        7. Qe2 {Your Queen blocks the e-file road and guards e5.}
        Nd5 8. c4 {Kick the rider off its heartland square.}
        Ba6 {The Black priest pins your c4 soldier to your Queen on e2.}
        9. b3 {A soldier backs up c4, so the pin costs nothing. This is the Mieses main line: you hold the land, the enemy has active pieces.}`,
    },
    {
      name: "Schmidt Variation (5...dxc6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6
        dxc6 {The enemy opens roads for its priests and threatens ...Qxd1+ followed by ...Nxe4.}
        6. Qxd8+ {The Queens leave the field with check: the Black King loses the right to castle.}
        Kxd8 7. Nc3 {Your rider comes out and guards e4.}
        Bb4 {The Black priest pins your rider to your King, so e4 is under attack again.}
        8. Bd2 {Your priest breaks the pin. You have an easy endgame to play, with a healthy kingside pawn majority.}`,
    },
    {
      name: "Classical: Intermezzo Variation (6...dxc6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Bc5 {The Classical Variation: the Black priest attacks the d4 rider.}
        5. Nxc6 {Trade the attacked rider off.}
        Qf6 {Threatens ...Qxf2 mate: the Black Queen and the c5 priest both hit f2.}
        6. Qd2 {Your Queen guards f2. It looks clumsy, but she will move again soon.}
        dxc6 7. Nc3 {Your rider comes out and guards e4.}
        Be6 8. Na4 {Your rider hunts the c5 priest to win the bishop pair.}
        Bd4 {The priest sidesteps to a strong heartland square, guarded by its Queen.}
        9. Bd3 {Your priest comes out and the King gets ready for the castle. Later c3 will chase the d4 priest away.}`,
    },
    {
      name: "Classical Variation (5.Nxc6 bxc6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6
        bxc6 {The enemy retakes toward the heartland.}
        6. Bd3 {Your priest comes out and guards e4.}
        Qh4 {The Black Queen hits f2 together with the c5 priest, and also eyes e4.}
        7. Qe2 {Your Queen guards both f2 and e4.}
        Nf6 8. h3 {Stops ...Ng4, which would hit f2 and h2 again, and readies the castle. The enemy's broken queenside soldiers are a long-term target.}`,
    },
    {
      name: "Steinitz Variation (4...Qh4)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Qh4 {The Steinitz Variation: the Black Queen charges at e4 straight away.}
        5. Nc3 {Your rider comes out and guards e4.}
        Bb4 {The Black priest pins your rider, so e4 hangs again.}
        6. Be2 {A soldier sacrificed to buy time: you develop and prepare the castle instead of guarding e4.}
        Qxe4 7. Nb5 {Threatens Nxc7+, a fork of the King and tower.}
        Bxc3+ 8. bxc3 {Retake. Your doubled c-soldiers matter less than the open b-file road and your lead in development.}
        Kd8 {The only safe way to cover c7, but the Black King is stuck in the middle.}
        9. O-O {The King into the castle. Your army will use the open e-file road and the diagonal roads against the Black King on d8.}`,
    },
    {
      name: "Lolli Variation (4...Nxd4 5.Qxd4)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Nxd4 {The enemy trades riders, but this brings your Queen to a great heartland square.}
        5. Qxd4 {Your Queen is safe here: the enemy has no easy way to chase her.}
        Qf6 {The Black Queen offers a trade to take the sting out of your lead in development.}
        6. e5 {Your soldier gains land with tempo by kicking the Queen.}
        Qb6 {The enemy still wants the trade.}
        7. Qxb6 {Trade: the enemy must retake with the a-soldier and gets doubled b-soldiers.}
        axb6 8. Nc3 {Your rider comes out. You hold more land thanks to the e5 soldier and lead in development.}`,
    },
    {
      name: "Malaniuk Variation (4...Bb4+)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Bb4+ {A check from the Black priest that mainly wants to provoke c3.}
        5. c3 {Block with a soldier. This gains time, because the priest must move again.}
        Be7 6. Nxc6 {Trade to damage the enemy's shield wall.}
        bxc6 7. Bd3 {Your priest comes out and guards e4.}
        d6 8. O-O {The King into the castle. You hold more land and develop more easily.}`,
    },
    {
      name: "3...d6: Steinitz Defence (4.Bb5)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4
        d6 {A Philidor-style defence: a Black soldier holds e5 instead of giving up the heartland.}
        4. Bb5 {With the d-soldier gone from d7, your priest pins the c6 rider to the Black King and adds pressure on e5. It is the Old Steinitz Ruy Lopez by another move order.}
        Bd7 {The Black priest breaks the pin.}
        5. Nc3 {Your rider comes out and guards e4.}
        exd4 {The enemy gives up the heartland after all.}
        6. Nxd4 {Your rider retakes.}
        Nf6 7. O-O {The King into the castle.}
        Be7 8. Re1 {Your tower guards e4, so the d4 rider and b5 priest are free to act. You keep more land with e4 against d6.}`,
    },
    {
      name: "Schmidt: Mieses Variation (8...Nb6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. e5 Qe7 7. Qe2 Nd5 8. c4
        Nb6 {The other main retreat: the Black rider leaves the heartland but eyes c4 and d5.}
        9. Nc3 {Your rider comes out and watches d5, so the enemy's freeing ...d5 is harder to arrange.}
        Qe6 {The Black Queen steps off the e-file road and attacks c4.}
        10. Qe4 {Your Queen guards both c4 and e5 at once. This is the main line: you keep your land, the enemy has the bishop pair to come.}`,
    },
    {
      name: "Classical: Intermezzo Variation (6...bxc6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6 Qf6 6. Qd2
        bxc6 {The enemy retakes toward the heartland and keeps the d-soldier ready for ...d5.}
        7. Bd3 {Your priest comes out and guards e4, so your Queen is free to move again.}
        Ne7 {The Black rider heads for g6 and keeps the f-file road free for its Queen.}
        8. O-O {The King into the castle. Next come Nc3 and Na4 or Qf4; the enemy's split queenside soldiers are a long-term target.}`,
    },
    {
      name: "4...Qf6 (5.Be3 Bc5)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
        Qf6 {The Black Queen attacks your d4 rider a second time, together with the c6 rider.}
        5. Be3 {Your priest comes out and guards the rider.}
        Bc5 {The Black priest joins in: a third attack on d4.}
        6. c3 {A third guard: the rider is solid, and the soldier also takes b4 and d4 away from enemy pieces.}
        Nge7 7. Bc4 {Your priest aims at f7 and the King gets ready for the castle. This is the main line of the Classical Variation (4...Bc5 5.Be3 Qf6), reached by another move order.}`,
    },
  ],
}
