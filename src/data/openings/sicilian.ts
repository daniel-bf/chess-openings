import type { OpeningSource } from '../types'

export const sicilian: OpeningSource = {
  id: 'sicilian',
  name: 'Sicilian Defense (Najdorf)',
  eco: 'B20–B99',
  side: 'black',
  summary:
    'The most popular and most warlike answer to 1.e4. You command the Black Kingdom, and you refuse to copy White with ...e5. Instead your c-soldier fights for d4 from the flank. When White opens the heartland with d4, you trade your c-soldier for White\'s d-soldier: you keep an extra soldier in the heartland and gain the half-open c-file (a road with no black soldier on it, so your towers and Queen can use it). The Najdorf, 5...a6, is a patient waiting move that keeps White\'s riders and priests off b5 and prepares ...e5 or ...b5. White usually storms your kingside; you strike back on the queenside.',
  ideas: [
    'Trade your c-soldier for White\'s d-soldier: you hold two heartland soldiers (d and e) against one, and the c-file becomes an open road for your towers.',
    '...a6 keeps riders and priests off b5 and prepares ...b5, ...b4 to drive off the c3 rider that guards e4.',
    'When the rulers hide on opposite wings, the war is a race: answer White\'s kingside storm with your own on the queenside, and never stop watching the d5 square.',
  ],
  lines: [
    {
      name: 'Najdorf: English Attack (6.Be3)',
      pgn: `1. e4 {A White soldier marches to e4 and claims the heartland, opening roads for the Queen and the f1 priest.}
        c5 {The Sicilian. Your c-soldier watches d4 from the flank, and the war is lopsided from the very first move.}
        2. Nf3 {A White rider gallops out and prepares d4.}
        d6 {Keeps the White rider out of e5 and opens the road for your c8 priest. With ...d6 and later ...a6 you march toward the Najdorf.}
        3. d4 {White throws open the heartland. This is the Open Sicilian, the main battlefield.}
        cxd4 {Trade your c-soldier for White's d-soldier. You now have two heartland soldiers (d6 and e7) against White's one.}
        4. Nxd4 Nf6 {Your rider rides out and attacks e4, so White must spend a move guarding it.}
        5. Nc3 {A second White rider defends e4.}
        a6 {The Najdorf. This scout stops Nb5 and Bb5 and prepares ...e5 or ...b5 without showing your plan yet.}
        6. Be3 {The English Attack. White wants f3, Qd2, the King hiding on the long side, then g4-g5 to storm your castle.}
        e5 {Grabs land and drives off the d4 rider. It leaves a hole on d5, so from now on your army keeps an eye on that square.}
        7. Nb3 Be6 {Your priest steps out and guards d5, the key square of this battlefield.}
        8. f3 {Stops ...Ng4, which would hit the e3 priest, and prepares g4.}
        Be7 {Simple development so your King can retreat into the castle next move.}
        9. Qd2 O-O {Castle short now, before White's foot soldiers arrive.}
        10. O-O-O {The rulers hide on opposite wings: now it is a race of pawn storms.}
        Nbd7 {This rider covers e5 and f6 and can travel to b6 to guard d5.}
        11. g4 {White's storm begins: g5 will drive away your f6 rider.}
        b5 {Launch your own storm at once. In this race a single move can decide the war.}
        12. g5 {The soldier attacks your f6 rider.}
        b4 {Don't move the rider: hit the c3 rider first, because it guards d5 and e4.}`,
    },
    {
      name: 'Najdorf: Main Line (6.Bg5 e6 7.f4 Be7)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Bg5 {The sharpest assault. The White priest pins your f6 rider to its Queen, and White plans f4, Qf3 and long castling.}
        e6 {A solid wall: it covers d5 and f5 and frees the f8 priest so ...Be7 can break the pin.}
        7. f4 {White prepares e5 or f5 to smash open your camp.}
        Be7 {Breaks the pin: if Bxf6 now, your priest takes back and your soldiers stay in good order.}
        8. Qf3 {The White Queen backs up e4 and readies long castling and g4.}
        Qc7 {Your Queen guards e5, making White's e5 push harder, and eyes the c-file toward c3.}
        9. O-O-O Nbd7 {A second guard for f6 that also keeps e5 covered. ...b5 comes next.}
        10. g4 {White's soldiers charge at your f6 rider.}
        b5 {The race begins: ...b4 next will hit the c3 rider, the guardian of e4.}
        11. Bxf6 {White sacrifices the priest to clear the road for g5.}
        Nxf6 {Take back with the rider so your soldiers stay unbroken.}
        12. g5 {The soldier attacks the rider again.}
        Nd7 {The rider falls back but is not idle: it can go to c5 or b6 to join your queenside attack.}`,
    },
    {
      name: 'Najdorf: Opocensky Variation, Traditional Line (6.Be2)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Be2 {A calm, patient campaign: White castles short and fights for the d5 square instead of charging.}
        e5 {Gains land and drives the d4 rider back with tempo.}
        7. Nb3 Be7 {Quiet development, getting ready to castle.}
        8. O-O O-O {Both Kings are safe in their castles, so this is a slow war of strategy.}
        9. Be3 Be6 {Your priest guards d5, the square White's army wants most.}
        10. Qd2 Nbd7 {Another piece watching d5 and e5; this rider may later go to b6.}
        11. a4 {White blocks your ...b5 advance.}
        Rc8 {With ...b5 blocked, your tower takes the half-open c-file and presses on c2 and the c3 rider.}`,
    },
    {
      name: 'Moscow Variation: Main Line (3.Bb5+ Bd7)',
      pgn: `1. e4 c5 2. Nf3 d6
        3. Bb5+ {White avoids the Open Sicilian with a check and is happy to trade the light-road priest.}
        Bd7 {The simplest shield: offer the priest trade and get a very solid camp.}
        4. Bxd7+ Qxd7 {Your Queen takes back so the b8 rider can still reach c6, its best square.}
        5. O-O Nc6 {Your rider develops and adds control over d4.}
        6. c3 {White prepares d4, so a soldier can take back and keep a big heartland.}
        Nf6 {Your rider rides out and attacks e4.}
        7. Re1 {The White tower guards e4.}
        e6 {Opens the road for the f8 priest and prepares ...d5 with a soldier behind it.}
        8. d4 cxd4 {Release the tension; White must take back with a soldier.}
        9. cxd4 d5 {Strike at e4 now, before White's soldiers can play d5 or e5 on good terms.}
        10. e5 Ne4 {Your rider leaps to a great heartland post, and White has no light-road priest left to chase it away.}`,
    },
    {
      name: 'Alapin Variation (2.c3 Nf6)',
      pgn: `1. e4 c5
        2. c3 {The Alapin. White wants d4 next, so that c3xd4 keeps two soldiers in the heartland.}
        Nf6 {Attack e4 at once, before d4 arrives. The c3 soldier has taken the White rider's natural square, so White usually pushes e5.}
        3. e5 Nd5 {Your rider is safe and central on d5.}
        4. d4 cxd4 {Trade soldiers so White cannot keep one on d4 backed by c3.}
        5. cxd4 d6 {Challenge the e5 soldier before it cramps your camp.}
        6. Nf3 Nc6 {Your rider develops and adds pressure on d4 and e5.}
        7. Bc4 {The White priest attacks your d5 rider.}
        Nb6 {Retreat with tempo: now your rider attacks the c4 priest.}
        8. Bb5 {The priest pins your c6 rider.}
        dxe5 {Open the land while White's King is still in the centre.}
        9. Nxe5 Bd7 {Breaks the pin and offers trades, which helps you against the isolated d-pawn.}
        10. Nxd7 Qxd7 {Your Queen takes back and links up with your towers.}
        11. Nc3 e6 {A solid wall: it blocks the d4 soldier and opens your f8 priest.}
        12. O-O Be7 {Castle next. White's d4 soldier has no comrades on the c or e roads (an isolated pawn), and you aim to blockade it on d5.}`,
    },
    {
      name: 'Smith-Morra Gambit Accepted: Scheveningen Formation',
      pgn: `1. e4 c5
        2. d4 {White offers a soldier: this starts the Smith-Morra Gambit.}
        cxd4 {Take, as in every Sicilian.}
        3. c3 {White sacrifices a soldier to buy fast development and open c- and d-roads.}
        dxc3 {Accept the gambit: you keep a clear extra soldier if you develop with care.}
        4. Nxc3 Nc6 {Your rider develops and controls d4 and e5.}
        5. Nf3 d6 {Keeps White's army out of e5 and opens the road for your c8 priest.}
        6. Bc4 {The White priest aims at f7, your weakest point.}
        e6 {Blocks the priest's diagonal road so f7 is safe, and frees your f8 priest.}
        7. O-O Nf6 {Your rider develops and your King gets ready to castle.}
        8. Qe2 {White plans Rd1 to press against your d6 soldier.}
        Be7 {Your priest steps out so the King can castle next.}
        9. Rd1 {The White tower lines up against d6.}
        e5 {Closes the d-file and takes the heartland. You are a solid soldier up; castle next.}`,
    },
    {
      name: 'Najdorf: Lipnitsky (Fischer-Sozin) Attack (6.Bc4)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. Bc4 {Fischer's favourite: the priest aims at f7 and e6, ready for sacrifices there.}
        e6 {Blunts the priest: it now bites on a soldier guarded by f7.}
        7. Bb3 {The priest steps out of reach of ...b5 and ...d5 tricks.}
        b5 {Gains land and threatens ...b4, hitting the c3 rider that guards e4.}
        8. O-O Be7 {Your priest steps out so your King can castle.}
        9. Qf3 {The White Queen eyes the long diagonal road (if e5 opens it, your a8 tower hangs) and heads for g3.}
        Qc7 {Your Queen watches e5, so the e5 trick fails, and eyes the c-file.}
        10. Qg3 {Now the White Queen aims at g7.}
        O-O {Castle: your King is safe enough because e7 and f6 guard the kingside.}
        11. Bh6 {Threatens Bxg7, since your f6 rider cannot guard g7.}
        Ne8 {The rider protects g7. Next come ...Bb7 and ...Nd7 to finish mustering your army.}`,
    },
    {
      name: 'Najdorf: English Attack via 6.f3',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. f3 {White plays f3 first to rule out ...Ng4, then heads for the English Attack.}
        e5 {Same answer as against 6.Be3: land with tempo on the d4 rider.}
        7. Nb3 Be6 {Guard d5 straight away with your priest.}
        8. Be3 {Now it is the English Attack by another road.}
        Be7 {Your priest develops and the King gets ready for the castle.}
        9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 {Same war plan as in the 6.Be3 line: start the queenside race at once.}`,
    },
    {
      name: 'Najdorf: Adams Attack (6.h3)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. h3 {The Adams Attack. White prepares g4-g5 to chase your f6 rider.}
        e5 {Grabs land and drives off the rider.}
        7. Nde2 {This time the rider retreats to e2, ready for g3 or Ng3.}
        h5 {Stops g4 for good. The soldier looks lonely, but it makes h3 pointless.}
        8. g3 {White changes course to a slower campaign with Bg2.}
        Be6 {Your priest develops and watches d5.}
        9. Bg2 Nbd7 {Another of your pieces standing guard over d5 and e5.}
        10. a4 {A White soldier blocks your ...b5 advance.}
        Be7 {Develop and castle short next. Your camp is a comfortable Najdorf.}`,
    },
    {
      name: 'Closed: Grand Prix Attack (2.Nc3 d6 3.f4)',
      pgn: `1. e4 c5
        2. Nc3 {White holds d4 back for now; this is a Closed Sicilian set-up.}
        d6 {Your usual move: this soldier controls e5.}
        3. f4 {The Grand Prix: White wants f5 and a direct assault on your King.}
        Nc6 {Your rider develops and watches d4.}
        4. Nf3 g6 {You fianchetto: your priest will stand on g7, on the long diagonal road.}
        5. Bc4 {The White priest aims at f7.}
        Bg7 {Your priest gazes down the long road toward d4 and b2 and shields your King.}
        6. O-O e6 {Blocks the c4 priest and keeps White's army out of d5 and f5.}
        7. d3 Nge7 {The rider goes to e7, not f6, so it supports ...d5 and covers f5 if White pushes f4-f5.}
        8. Qe1 {White wants Qh4 to attack your King.}
        O-O {Your King is safe; next comes ...d5 in the heartland or ...b5 on the queenside.}`,
    },
    {
      name: 'Closed: Fianchetto Variation (2.Nc3 d6 3.g3)',
      pgn: `1. e4 c5 2. Nc3 d6
        3. g3 {The true Closed Sicilian: White fianchettoes the King's priest, keeps the d-soldier back and later storms the kingside with f4-f5.}
        Nc6 {Your rider develops and controls d4, the square White has left alone.}
        4. Bg2 g6 {Answer the fianchetto with your own: a priest on g7 will sweep the long road toward b2.}
        5. d3 Bg7 {Your priest eyes d4 and b2 and guards your King.}
        6. f4 {White grabs kingside land and prepares f5 or e5.}
        e6 {Takes d5 and f5 from White's army, so the f4-f5 push is harder.}
        7. Nf3 Nge7 {The rider goes to e7, not f6: it does not block your priest's road, cannot be kicked by e5, and supports ...d5 later.}
        8. O-O O-O {Castle. Your queenside campaign with ...Rb8 and ...b5 comes next.}
        9. Be3 {The White priest eyes c5 and fights for d4.}
        Nd4 {Ride into the hole on d4: White can only remove the rider by giving up a minor piece, and then your c-soldier or priest takes back.}`,
    },
    {
      name: 'Chekhover Variation (4.Qxd4)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4
        4. Qxd4 {The Chekhover: the White Queen takes back herself to avoid the Open Sicilian main lines, planning quick development and long castling.}
        Nc6 {Develop with tempo: your rider attacks the Queen.}
        5. Bb5 {The priest pins your rider so the Queen can stay on d4.}
        Bd7 {Breaks the pin, ready to take back on c6 with your priest.}
        6. Bxc6 Bxc6 {Take back with the priest: it now aims at White's e4 soldier down the long road, and you own the bishop pair.}
        7. Nc3 Nf6 {Your rider joins in as a second attacker on e4.}
        8. Bg5 {The priest pins your rider and prepares long castling.}
        e6 {Opens the f8 priest's road so ...Be7 can break the pin.}
        9. O-O-O Be7 {Breaks the pin: if Bxf6, your priest takes back and the d6 soldier stays covered.}
        10. Rhe1 O-O {King into the castle. With the bishop pair and play on the c-file your kingdom stands well.}`,
    },
    {
      name: 'Najdorf: Amsterdam Variation (6.f4)',
      pgn: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
        6. f4 {The Amsterdam Variation: White wants e5 or f5 and a kingside assault.}
        e5 {Hit the f4 soldier and the d4 rider at once and fight for the e5 square.}
        7. Nf3 {The rider keeps watch on e5.}
        Nbd7 {Backs up e5, so fxe5 can be met by taking back with rider or soldier.}
        8. a4 {A White soldier blocks ...b5.}
        Be7 {Your priest develops and the King prepares to castle.}
        9. Bd3 O-O {King into the castle. Next comes ...exf4 to win the e5 square for a rider, or ...Nc5 and ...b6.}`,
    },
  ],
}
