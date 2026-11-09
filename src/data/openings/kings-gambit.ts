import type { OpeningSource } from '../types'

export const kingsGambit: OpeningSource = {
  id: "kings-gambit",
  name: "King's Gambit",
  eco: "C30–C39",
  side: "white",
  summary:
    "The King's Gambit (1.e4 e5 2.f4) is the classic romantic war. You, commander of the White Kingdom, sacrifice the f-pawn to lure the Black e-pawn out of the heartland, then build a heartland with d4 and send your army up the half-open f-file against f7. Engines say the Black Kingdom is fine with exact play, but the fighting is sharp, Black must know a lot, and you usually either win the f4 soldier back or keep the initiative while it sits out of play.",
  ideas: [
    "2.f4 lures the e5 soldier away, so d4 can follow and you hold two soldiers in the heartland against none.",
    "After ...exf4, 3.Nf3 stops ...Qh4+, and the Black soldier on f4 becomes a target for Bxf4, g3 or the f1 tower.",
    "Speed wins wars: raise your army fast, castle, and use the f-file and a priest on c4 against f7 before Black settles down.",
  ],
  lines: [
    {
      name: "Kieseritzky Gambit: Berlin Defence, Rubinstein (6.d4)",
      pgn: `1. e4 {A White foot soldier plants a flag on e4 in the heartland. Behind it, roads open for the Queen and the f1 priest.}
        e5 {The Black Kingdom answers in kind and claims an equal share of the heartland.}
        2. f4 {The King's Gambit: sacrifice the f-pawn to pull the Black e-pawn out of the heartland.}
        exf4 {Black takes the bait and accepts the gambit.}
        3. Nf3 {A rider rides out and blocks the Queen's raid ...Qh4+.}
        g5 {Black guards the stolen f4 soldier with another soldier.}
        4. h4 {Strike g5 at once, before Black can prop it up with ...h6 and ...Bg7.}
        g4 5. Ne5 {The Kieseritzky Gambit: the rider leaps into the heartland, eyeing g4 and f7.}
        Nf6 {The Berlin Defence to the Kieseritzky: a Black rider counter-attacks e4.}
        6. d4 {Build a heartland and open the road for your c1 priest toward f4.}
        d6 7. Nd3 {The rider falls back, but now it attacks f4.}
        Nxe4 8. Bxf4 {Win the sacrificed soldier back.}
        Qe7 {The Black Queen lines up against your King: if the e4 rider moves, it unleashes a discovered check.}
        9. Qe2 {Your Queen blocks the e-file, so no discovered check. Sharp war follows, often with the Kings castled on opposite wings.}`,
    },
    {
      name: "Modern (Abbazia) Defence (3...d5)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        d5 {The Modern Defence: Black strikes back in the heartland instead of clinging to f4.}
        4. exd5 {Capture the soldier.}
        Nf6 {A Black rider rides out, ready to win d5 back.}
        5. Bb5+ {Your priest develops with check before Black can play ...Nxd5.}
        c6 6. dxc6 {Take: Black must spend a move recapturing.}
        Nxc6 {Black retakes while developing, but the rider is now pinned by your b5 priest.}
        7. d4 {Seize the heartland and open your c1 priest's road toward f4.}
        Bd6 {A Black priest guards the f4 soldier.}
        8. O-O {Your King retreats behind the castle walls, and the f1 tower joins the pressure on f4.}
        O-O 9. Nbd2 {The rider heads for c4 to challenge the d6 priest, the main guard of f4.}`,
    },
    {
      name: "Fischer Defence (3...d6)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        d6 {The Fischer Defence: it takes e5 from your rider, so ...g5 can follow safely.}
        4. Bc4 {Your priest takes the road to c4 and stares at f7.}
        h6 {Black readies ...g5 and bars your riders and priests from g5.}
        5. h4 {Stops ...g5: if 5...g5 6.hxg5 hxg5??, then 7.Rxh8 wins Black's tower.}
        Nf6 6. Nc3 {A rider rides out and guards e4.}
        Nc6 7. d4 {Seize the heartland. Next comes Bxf4 to win the soldier back.}`,
    },
    {
      name: "Schallopp Defence (3...Nf6)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        Nf6 {The Schallopp Defence: a Black rider develops and attacks e4.}
        4. e5 {Drive the rider to the edge of the land.}
        Nh5 {From h5 the rider still guards the f4 soldier.}
        5. d4 {Seize the heartland and open your c1 priest's road toward f4.}
        d5 {Black blocks the heartland.}
        6. Be2 {Your priest attacks the h5 rider, the piece holding f4.}
        g5 {Black guards f4 with a soldier instead.}
        7. O-O {Castle and add the f1 tower to the pressure on f4. You hold a big heartland, and the Black rider on h5 is out of the war.}`,
    },
    {
      name: "Cunningham Defence (3...Be7)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        Be7 {The Cunningham Defence: the Black priest threatens ...Bh4+, forcing your King to move.}
        4. Bc4 {Develop. If ...Bh4+, your King can step to f1 now that the priest has left it.}
        Nf6 {A Black rider attacks e4.}
        5. e5 {Drive the rider away.}
        Ng4 {The rider leaps forward, eyeing e3 and f2.}
        6. d4 {Seize the heartland and open your c1 priest's road.}
        d6 {A Black soldier strikes at e5.}
        7. exd6 {Take, opening the e-file road toward the Black King.}
        Bxd6 8. Qe2+ {Check from your Queen. Black must spend a move answering it (often ...Qe7 and a Queen trade), and Bxf4 will win the soldier back.}`,
    },
    {
      name: "Declined: Classical Variation (2...Bc5)",
      pgn: `1. e4 e5 2. f4
        Bc5 {Declined: the Black priest covers g1, so you cannot castle short for now. Never 3.fxe5?? Qh4+.}
        3. Nf3 {A rider rides out and stops ...Qh4+.}
        d6 {Black props up e5.}
        4. Nc3 {Another rider joins and guards e4.}
        Nf6 5. Bc4 {Your priest aims at f7.}
        Nc6 6. d3 {Support e4 and open your c1 priest's road.}
        Bg4 {A Black priest pins your f3 rider to the Queen.}
        7. Na4 {Hunt down the c5 priest and trade it, so your King can castle.}
        Bb6 8. Nxb6 {Capture it: your kingdom now owns the bishop pair.}
        axb6 9. O-O {Castle now that the c5 priest is gone. The f-file road will open soon.}`,
    },
    {
      name: "Falkbeer Countergambit (3...e4 4.d3)",
      pgn: `1. e4 e5 2. f4
        d5 {The Falkbeer Countergambit: Black strikes back in the heartland.}
        3. exd5 {Capture.}
        e4 {Black sacrifices a soldier for a wedge on e4 that cramps your army.}
        4. d3 {Attack the wedge at once, before Black can reinforce it.}
        Nf6 5. dxe4 {Take. You are a soldier up.}
        Nxe4 6. Nf3 {A rider rides out and stops ...Qh4+.}
        Bc5 {The Black priest aims at f2, with ideas like ...Nf2 or ...Bf2+.}
        7. Qe2 {Your Queen pins the e4 rider against the Black King and covers f2.}`,
    },
    {
      name: "MacLeod Defence (2...Nc6 3.Nf3 exf4)",
      pgn: `1. e4 e5 2. f4
        Nc6 {Black raises a rider before deciding what to do about f4.}
        3. Nf3 {Your rider rides out and stops ...Qh4+.}
        exf4 {Black takes the soldier after all.}
        4. d4 {Seize the heartland.}
        g5 {Holds f4 and threatens ...g4, driving off your f3 rider.}
        5. d5 {Strike the c6 rider first.}
        g4 {Black counter-attacks your f3 rider.}
        6. dxc6 {Capture the rider.}
        gxf3 7. Qxf3 {Take back. Forces are level; you hold open roads and the f4 soldier is a target. Beware ...Qh4+.}`,
    },
    {
      name: "Becker Defence (3...h6)",
      pgn: `1. e4 e5 2. f4 exf4 3. Nf3
        h6 {The Becker Defence: Black prepares ...g5, so your rider can never use g5 to attack the shield wall.}
        4. d4 {Seize the heartland and open the c1 priest's road toward f4.}
        g5 {Holds the f4 soldier.}
        5. h4 {Strike g5 at once, before Black's soldiers form a solid shield wall.}
        Bg7 {The Black priest develops and guards the h8 tower, so the h-file can be opened safely.}
        6. hxg5 {Open the h-file road.}
        hxg5 7. Rxh8 {Trade towers.}
        Bxh8 8. g3 {Strike the f4 soldier, held only by the g5 soldier. This is a gambit line: you are a soldier down but get open roads for your army.}`,
    },
    {
      name: "Falkbeer: Nimzowitsch-Marshall Countergambit (3...c6)",
      pgn: `1. e4 e5 2. f4 d5 3. exd5
        c6 {The Nimzowitsch-Marshall Countergambit: Black sacrifices another soldier for quick development.}
        4. Nc3 {The main line: a rider develops and guards your extra d5 soldier.}
        exf4 5. Nf3 {Another rider rides out and stops ...Qh4+.}
        Bd6 {The Black priest guards f4 and aims at h2.}
        6. d4 {Seize the heartland and open the c1 priest's road toward f4.}
        Ne7 7. dxc6 {Capture: the Black c-pawn is gone before ...cxd5 can happen.}
        Nbxc6 8. Ne4 {Attack the d6 priest, the main guard of f4. If it is traded, Bxf4 wins the soldier back.}`,
    },
    {
      name: "Declined: Petrov's Defence (2...Nf6)",
      pgn: `1. e4 e5 2. f4
        Nf6 {Black ignores the f4 soldier and attacks e4.}
        3. fxe5 {Take: the soldier drives the rider away.}
        Nxe4 4. Nf3 {A rider rides out and stops ...Qh4+.}
        Ng5 {Black wants to trade off your f3 rider.}
        5. d4 {Seize the heartland and open your c1 priest's road.}
        Nxf3+ 6. Qxf3 {Retake with the Queen, who stands active on f3.}
        Qh4+ 7. Qf2 {Block and offer a Queen trade.}
        Qxf2+ 8. Kxf2 {Take back. You hold more land and the e5 soldier, and with the Queens gone your King is safe in the middle.}`,
    },
  ],
}
