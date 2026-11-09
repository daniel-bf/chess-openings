import type { OpeningSource } from '../types'

export const pirc: OpeningSource = {
  id: "pirc",
  name: "Pirc Defense",
  eco: "B07–B09",
  side: "black",
  summary:
    "The White Kingdom opens with 1.e4, and you, ruler of the Black Kingdom, choose a flexible 'hypermodern' defence: instead of sending soldiers into the heartland at once, you let White build a big centre and plan to attack it later. You play ...d6, ...Nf6, ...g6 and ...Bg7 (a fianchetto: the priest stands on the long diagonal road behind the g6 soldier), retreat into the castle, and then strike back at White's centre with ...e5 or ...c5.",
  ideas: [
    "Build your camp with ...d6, ...Nf6, ...g6, ...Bg7 and ...O-O. The g7 priest gazes down the long diagonal road at d4 and b2, so keep it.",
    "Strike White's heartland with a soldier, usually ...e5 or ...c5, once your army is ready. Wait too long and White pushes e5 and cramps you.",
    "Against fierce set-ups (Be3, Qd2, f3, Bh6), do not retreat into the castle too early, right into the storm: grab queenside land with ...c6 and ...b5 first.",
  ],
  lines: [
    {
      name: "Austrian Attack: Weiss Variation (6.Bd3)",
      pgn: `1. e4 d6 {The Pirc begins quietly. Your d6 soldier watches e5, so after ...Nf6 White cannot easily drive off the rider with e5.}
        2. d4 Nf6 {Your rider develops and attacks e4, forcing White to defend it.}
        3. Nc3 {The natural way for White to guard e4.}
        g6 {This prepares ...Bg7, placing your priest on the long diagonal road aimed at White's heartland.}
        4. f4 {The Austrian Attack: White builds a huge wall of central soldiers and wants e5 to drive off your f6 rider.}
        Bg7 {Your priest takes the long diagonal road, pressing on d4 and e5.}
        5. Nf3 O-O {Get your King into the castle first; your counterattack in the heartland comes next.}
        6. Bd3 {The White priest supports e4 and aims at your King.}
        Na6 {Your rider is heading for c7, where it supports ...b5 and stays out of the way of ...c5.}
        7. O-O c5 {Strike d4 now that your King is safe. White's heartland has to commit.}
        8. d5 {White grabs land and partly blocks your g7 priest's road.}
        Nc7 {Your rider arrives on c7, supporting ...b5 and watching d5.}
        9. a4 {White bars the road to ...b5 for now.}
        b6 {This keeps the queenside solid and prepares ...a6, ...Rb8 and ...b5 anyway. Always watch for White's e5 push in the heartland.}`,
    },
    {
      name: "150 Attack (4.Be3 and 5.Qd2)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Be3 {The 150 Attack: White plans Qd2, Bh6 to trade off your g7 priest, then f3 and a soldier storm with h4-h5.}
        Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. Qd2 {The White Queen lines up Bh6.}
        c6 {This prepares ...b5. Your King stays in the centre for now, because castling would hand White's storm a target.}
        6. f3 {White props up e4 and prepares g4 and h4.}
        b5 {Grab queenside land and threaten ...b4, driving off the c3 rider that guards e4.}
        7. Nge2 Nbd7 {Your rider develops and supports a later ...e5 or ...c5.}
        8. Bh6 Bxh6 {Trade the priests yourself, so the White Queen must spend a move taking back.}
        9. Qxh6 Bb7 {Your last minor piece develops on the long light road toward e4. Next ...e5, ...Qb6 or ...a5 with play on the queenside; your King can stay in the centre or go queenside.}`,
    },
    {
      name: "Classical: Quiet System, Czech Defence (5.Be2 O-O 6.O-O c6)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Nf3 {The Classical system: a calm White muster with Be2 and short castling.}
        Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. Be2 O-O {Castle: your King is safe behind the g7 priest before you start the fight for the heartland.}
        6. O-O c6 {This soldier watches d5 and b5 and prepares ...b5, or ...Qc7 and ...e5.}
        7. a4 {White stops ...b5.}
        a5 {You stop White from pushing a5 and make b4 a safe post for your rider.}
        8. h3 {White stops ...Bg4 and ...Ng4.}
        Na6 {Your rider heads for b4, where no soldier can chase it away. Later ...e5 challenges the heartland.}`,
    },
    {
      name: "Byrne Variation (4.Bg5)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Bg5 {The Byrne Variation: White plans Qd2 and Bh6 to trade off your g7 priest.}
        Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. Qd2 {The White Queen prepares Bh6.}
        h6 {Make the White priest decide before Bh6 comes. Bxh6 does not win a soldier: your priest and the h8 tower both guard h6.}
        6. Bh4 g5 {Chase the priest again and grab kingside land. It has to flee to g3.}
        7. Bg3 Nh5 {Your rider attacks the priest: you trade the rider for it and win the bishop pair (two priests against priest and rider).}`,
    },
    {
      name: "Sveshnikov System (4.g3)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. g3 {White sends a priest to g2 too: a solid camp aiming for a small, safe edge.}
        Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. Bg2 O-O {Castle: your King is safe behind the g7 priest before you start the fight for the heartland.}
        6. Nge2 {The White rider goes to e2 so it does not block the g2 priest.}
        e5 {The classic Pirc break: your soldier challenges d4 straight away.}
        7. h3 {White prepares Be3 without allowing ...Ng4.}
        c6 {This soldier watches d5 and b5, gives your Queen c7 or b6, and prepares ...b5.}
        8. a4 {White stops ...b5.}
        Nbd7 {Your rider develops and supports e5, so you can keep the tension in the heartland.}`,
    },
    {
      name: "Kholmov System (4.Bc4)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Bc4 {The White priest aims at f7. White often follows with Qe2 and e5.}
        Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. Qe2 {White prepares e5, which would drive off your f6 rider.}
        c6 {Now after e5 dxe5 dxe5 your rider can leap to d5, guarded by the c6 soldier. ...b5 striking the c4 priest is also possible.}
        6. e5 dxe5 {Take back, so the heartland opens while the White King is not yet in the castle.}
        7. dxe5 Nd5 {Your rider lands in the heartland, blocks the c4 priest and attacks c3.}
        8. Bd2 O-O {Castle now. Your g7 priest will target the e5 soldier, and ...Bf5 or ...Nxc3 follow.}`,
    },
    {
      name: "3.Bd3",
      pgn: `1. e4 d6 2. d4 Nf6
        3. Bd3 {White guards e4 with the priest, keeping c3 free for a soldier.}
        g6 {Carry on building the normal Pirc camp.}
        4. Nf3 Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. O-O O-O {Castle: your King is safe behind the g7 priest before you start the fight for the heartland.}
        6. c3 {A solid White heartland: c3 props up d4 and blunts your g7 priest.}
        Nbd7 {Your rider develops and backs up ...e5, so that after dxe5 you can take back with rider or soldier and keep control of e5. ...e5 and ...Re8 come next.}`,
    },
    {
      name: "3.f3: King's Indian, Sämisch Variation",
      pgn: `1. e4 d6 2. d4 Nf6
        3. f3 {White props up e4 with a soldier and may follow with c4, reaching a King's Indian structure.}
        g6 {You prepare the fianchetto as usual.}
        4. c4 {Now the war is a King's Indian Defence, Sämisch Variation.}
        Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. Nc3 O-O {Castle: your King is safe behind the g7 priest before you start the fight for the heartland.}
        6. Be3 e5 {Strike d4 at once, a standard answer to this set-up.}
        7. d5 {White closes the heartland.}
        Nh5 {Your rider clears the f-soldier's path to f5 to strike e4, and eyes f4. Because f3 weakened White's dark squares, ...Qh4+ can also be an idea.}`,
    },
    {
      name: "Austrian Attack: Unzicker Attack (6.e5)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O
        6. e5 {The Unzicker Attack: White drives off your rider at once, hoping to push it back and cramp you.}
        dxe5 {Trade first, so the f-soldier must take back and White's heartland is less solid.}
        7. fxe5 Nd5 {Your rider leaps into the heartland instead of retreating.}
        8. Bc4 {The White priest attacks the d5 rider.}
        Nb6 {Retreat while gaining time on the c4 priest.}
        9. Bb3 Nc6 {Your rider develops and adds pressure on d4 and e5.}
        10. Be3 Bg4 {Your priest pins the f3 rider, a defender of d4 and e5. Next ...Na5 to trade off the b3 priest, or ...f6 to break up the heartland.}`,
    },
    {
      name: "Classical: Schlechter Variation (5.h3)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7
        5. h3 {The Schlechter Variation: h3 bars ...Bg4 and ...Ng4, so the White priest can go to e3 in peace.}
        O-O {Castle first; your King is safe behind the g7 priest.}
        6. Be3 {White plans Qd2 and perhaps a long castle on the queenside.}
        a6 {This prepares ...b5 to grab queenside land, the usual plan against Be3 and Qd2 set-ups.}
        7. a4 {White stops ...b5.}
        b6 {This prepares ...Bb7, aiming at e4, and keeps the queenside flexible. Next ...Bb7, ...Nbd7 and ...e5 or ...c5.}`,
    },
    {
      name: "Bayonet Attack (4.Be2 Bg7 5.h4)",
      pgn: `1. e4 d6 2. d4 Nf6 3. Nc3 g6
        4. Be2 {A flexible priest move that keeps the f-soldier free and prepares h4.}
        Bg7 {Your priest takes the long diagonal road, aiming at d4 and the heartland.}
        5. h4 {The Bayonet Attack: White wants h5 to open the h-road toward your King.}
        h5 {Stop h5 for good. White's storm has no h-road to use, so your King can castle short.}
        6. Nf3 O-O {Castle now that the h-road is shut. Next ...c6, ...Nbd7 and ...e5, or ...Bg4 to pin the f3 rider.}`,
    },
  ],
}
