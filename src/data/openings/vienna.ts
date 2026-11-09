import type { OpeningSource } from '../types'

export const vienna: OpeningSource = {
  id: "vienna",
  name: "Vienna Game",
  eco: "C25–C29",
  side: "white",
  summary:
    "In the Vienna Game (1.e4 e5 2.Nc3) you send the Queen's rider out first, which keeps your f-soldier free to march. Your main weapon is f4, the Vienna Gambit: like a King's Gambit, but with the rider already guarding e4 and watching d5. The Black Kingdom's best answers strike back in the heartland with ...d5; against quieter set-ups you get a big heartland and lively pieces.",
  ideas: [
    "2.Nc3 guards e4 and watches d5 while the f-soldier stays free to march.",
    "f4 attacks e5: if the enemy takes, you seize the heartland and win the soldier back; if not, fxe5 gains land and opens the f-file road.",
    "After the King goes into the castle, your tower uses the f-file road, and many lines end with your army aimed at f7 and the Black King.",
  ],
  lines: [
    {
      name: "Vienna Gambit: Breyer Variation (5...Be7)",
      pgn: `1. e4 {A White soldier plants a flag on e4 in the heartland and opens roads for the Queen and the f1 priest.}
        e5 {The Black Kingdom answers in kind and claims an equal share of the heartland.}
        2. Nc3 {The Vienna Game. Your rider guards e4 and leaves the f-soldier free to march.}
        Nf6 {A Black rider comes out and attacks e4.}
        3. f4 {The Vienna Gambit: your f-soldier hits e5, aiming for an open f-file road.}
        d5 {The enemy's best answer: strike back in the heartland instead of taking on f4.}
        4. fxe5 {Take on e5. The soldier gains land and steals the f6 square from the Black rider.}
        Nxe4 {The Black rider leaps to a strong heartland square.}
        5. Nf3 {Your rider comes out and stops ...Qh4+, a real danger now that your f-soldier has left.}
        Be7 {Solid development: the enemy prepares to castle.}
        6. d4 {A soldier backs up e5 and builds a big heartland.}
        O-O 7. Bd3 {Your priest attacks the e4 rider and readies the castle.}
        f5 {A Black soldier props up its rider.}
        8. exf6 {Capture "en passant" (a soldier that just moved two squares can be taken as if it had moved one). This opens the f-file road.}
        Bxf6 9. O-O {The King into the castle. Your tower now stands on the open f-file road and your army is very active.}`,
    },
    {
      name: "Vienna Gambit: Main Line (5...Nc6)",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3
        Nc6 {A Black rider comes out and attacks e5.}
        6. Bb5 {Your priest pins the c6 rider to the Black King (the d-soldier has left d7), so it can do little against e5.}
        a6 7. Bxc6+ {Take, leaving the enemy with doubled c-soldiers.}
        bxc6 8. d3 {Your soldier kicks the e4 rider out of the heartland and opens the c1 priest's road.}
        Nxc3 9. bxc3 {Retake toward the heartland. The b-file road is now half-open for your tower.}
        Be7 10. O-O {The King into the castle. Your tower uses the f-file road, and the e5 soldier cramps the enemy.}`,
    },
    {
      name: "Vienna Gambit: 3...exf4 (4.e5 Ng8)",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4
        exf4 {The enemy grabs the soldier, but this lets you gain land with tempo.}
        4. e5 {Your soldier kicks the f6 rider.}
        Ng8 {The only good square, but the rider is back home and the enemy's development is undone.}
        5. Nf3 {Your rider comes out and stops ...Qh4+.}
        d6 {A Black soldier attacks e5 at once.}
        6. d4 {Back up e5 and open the c1 priest's road so it can win back f4.}
        dxe5 7. Qe2 {Your Queen hits e5 down the e-file road. That soldier is pinned to the Black King, so it cannot step away.}
        Be7 {The Black priest blocks the e-file road to break the pin.}
        8. Qxe5 {One soldier won back.}
        Nf6 9. Bxf4 {And the second. The armies are level and you have the freer camp.}`,
    },
    {
      name: "Vienna Gambit: 3...d6",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4
        d6 {A Black soldier holds e5 and keeps things solid.}
        4. Nf3 {Your rider comes out and adds pressure on e5.}
        Nc6 5. Bb5 {Your priest pins the c6 rider to the Black King (the d-soldier has moved), and that rider is e5's key guard.}
        Bd7 6. d3 {A soldier backs up e4 and opens the c1 priest's road so it can retake on f4.}
        exf4 7. Bxf4 {Win the soldier back while developing. You have the half-open f-file road and easy play.}`,
    },
    {
      name: "Max Lange Defence: Hamppe-Allgaier Gambit (2...Nc6)",
      pgn: `1. e4 e5 2. Nc3
        Nc6 {A Black rider comes out and keeps an eye on d4.}
        3. f4 {The Vienna Gambit against ...Nc6: your f-soldier charges forward anyway.}
        exf4 4. Nf3 {Your rider comes out and stops ...Qh4+.}
        g5 {The enemy holds the extra soldier with ...g5, as in many King's Gambits.}
        5. h4 {Undermine the g5 soldier at once.}
        g4 6. Ng5 {The Hamppe-Allgaier Gambit: your rider has no safe retreat, and that is the point.}
        h6 7. Nxf7 {Sacrifice the rider to drag the Black King out into the open.}
        Kxf7 8. d4 {Build a big heartland and open the c1 priest's road to win back f4. This gambit is speculative (engines prefer Black), so keep attacking with Bxf4, Bc4 and O-O.}`,
    },
    {
      name: "Max Lange Defence: 3.f4 Bc5",
      pgn: `1. e4 e5 2. Nc3 Nc6 3. f4
        Bc5 {The enemy ignores the gambit. Its priest eyes g1, and after 4.fxe5? Black has ...Qh4+.}
        4. Nf3 {Your rider comes out and takes h4 away from the Black Queen.}
        d6 {A Black soldier props up e5.}
        5. Na4 {Your rider hunts the strong c5 priest to win the bishop pair.}
        Bb6 6. Nxb6 {Trade it off: the priest that kept your King from the castle is gone.}
        axb6 7. d3 {Back up e4 and open the c1 priest's road. The King can go into the castle next.}`,
    },
    {
      name: "Anderssen Defence (2...Bc5)",
      pgn: `1. e4 e5 2. Nc3
        Bc5 {The Black priest heads toward f2, skipping ...Nc6.}
        3. Nf3 {Your rider comes out and attacks e5.}
        d6 4. d4 {Strike in the heartland, hitting e5 and the c5 priest at once.}
        exd4 5. Nxd4 {Retake with a rider in the heartland.}
        Nf6 6. Be2 {Calm development; the castle comes next.}
        O-O 7. O-O {Both kingdoms are developed, and your e4 soldier against d6 gives you more land.}`,
    },
    {
      name: "Omaha Gambit (2...d6 3.f4)",
      pgn: `1. e4 e5 2. Nc3
        d6 {A quiet move: a Black soldier props up e5.}
        3. f4 {Hit e5 with the f-soldier while it is free.}
        Nf6 4. Nf3
        exf4 {The enemy takes on f4 and gives up the heartland.}
        5. d4 {Seize the heartland with two soldiers.}
        Be7 6. Bxf4 {Win the soldier back while developing.}
        O-O 7. Bd3 {Your priest comes out behind the e4 soldier, ready for the castle with a strong heartland.}`,
    },
    {
      name: "Vienna Gambit: 5...Bc5",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3
        Bc5 {Threatens ...Bf2+, because only your King now guards f2.}
        6. d4 {Your soldier blocks the priest's road with tempo and builds a big heartland.}
        Bb4 {The priest pins your c3 rider instead, adding a second attack on it.}
        7. Bd2 {Your priest breaks the pin and guards c3 a second time.}
        c5 {A Black soldier hits d4 to undermine your heartland.}
        8. Bd3 {Your priest develops and attacks the e4 rider, the heart of the enemy's play.}`,
    },
    {
      name: "Vienna Gambit: Kaufmann Variation (5...Bg4)",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3
        Bg4 {The Black priest pins your f3 rider to the Queen.}
        6. Qe2 {The Kaufmann Variation: your Queen steps out of the pin and hits the e4 rider down the e-file road.}
        Nxc3 7. dxc3 {Retake toward the heartland: the d-file road opens and the c1 priest is free.}
        Nc6 8. Bf4 {Your priest guards e5 and develops. Next comes O-O-O, with your towers on the open d-file road.}`,
    },
    {
      name: "Vienna Gambit: 3...exf4 (4.e5 Qe7)",
      pgn: `1. e4 e5 2. Nc3 Nf6 3. f4 exf4 4. e5
        Qe7 {The Black Queen pins your e5 soldier to your King, so it cannot take the f6 rider yet.}
        5. Qe2 {Your Queen breaks the pin, so exf6 is a real threat. The rider must go back to g8, and the Black Queen blocks its own f8 priest.}
        Ng8 6. Nf3 {Your rider comes out and stops ...Qh4+.}
        Nc6 7. d4 {Build the heartland and open the c1 priest's road to win back f4. You are well ahead in development.}`,
    },
  ],
}
