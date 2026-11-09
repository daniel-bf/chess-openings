import type { OpeningSource } from '../types'

export const alapinWhite: OpeningSource = {
  id: 'alapin-white',
  name: 'Alapin Sicilian (as White)',
  eco: 'B22',
  side: 'white',
  summary:
    "The Alapin Variation (1.e4 c5 2.c3) is a calm, principled answer to the Sicilian. You command the White Kingdom, and you refuse to walk into the enemy's favourite traps with 2.Nf3 and 3.d4. Instead your c-soldier steps to c3 first, so that d4 can be met by ...cxd4 cxd4, leaving two of your soldiers side by side in the heartland. The Black Kingdom's best replies, 2...d5 and 2...Nf6, attack e4 at once, and the war often leads to an isolated d-pawn (a d-soldier with no comrades of its own colour on the roads next to it), where your fast mustering and active pieces matter more than the soldier's weakness.",
  ideas: [
    'c3 prepares d4: when the enemy trades on d4 your c-soldier takes back, and you keep a soldier pair on d4 and e4.',
    'Against 2...d5 and 2...Nf6, muster fast with Nf3, Be2 or Bc4 and castle. Often Nc3 gains time by hitting a Black Queen on d5.',
    'If you end up with an isolated d-pawn, fight actively: riders on c3 and f3, towers to the centre, and use d4 to support a rider on e5.',
  ],
  lines: [
    {
      name: 'Barmen Defence: 4...Nf6 5.Nf3 e6 (6.Be2)',
      pgn: `1. e4 {A White soldier claims the heartland and opens roads for the Queen and the f1 priest.}
        c5 {The Sicilian Defence. The Black Kingdom fights for d4 from the flank with a wing soldier.}
        2. c3 {The Alapin. You prepare d4 so that after ...cxd4 a soldier can take back and you keep two soldiers in the heartland.}
        d5 {The most direct reply. The enemy strikes at e4 before you can play d4.}
        3. exd5 {Take. Guarding e4 with 3.e5 would give the enemy a good French-style camp.}
        Qxd5 {The Black Queen takes back herself. A Queen in the centre is usually a target, but your c3 soldier has stolen the best square from your Queen's rider, so you cannot hit her with Nc3 straight away.}
        4. d4 {Builds the heartland you wanted and opens the road for the c1 priest.}
        Nf6 {A Black rider develops and watches the centre.}
        5. Nf3 {Your rider develops and guards d4, which the Queen and the c5 soldier both attack.}
        e6 {A solid set-up. The enemy opens a diagonal road for the f8 priest.}
        6. Be2 {A modest but useful post. You plan to castle soon, and the priest keeps the e-file and the f3 rider protected.}
        Nc6 {More pressure on d4.}
        7. O-O {The King's safety first, before the heartland opens.}
        cxd4 {The enemy releases the tension and leaves you an isolated d-pawn.}
        8. cxd4 {Take back with the soldier. Now c3 is free for your rider.}
        Be7 {The Black King prepares to castle.}
        9. Nc3 {Develop with tempo: your rider hits the Queen on d5. Your lead in mustering makes up for the isolated soldier on d4.}`,
    },
    {
      name: 'Barmen Defence: Modern Line (5...Bg4)',
      pgn: `1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3
        Bg4 {The Modern Line. The Black priest pins your f3 rider to its Queen to add pressure on d4.}
        6. Be2 {Breaks the pin by placing your priest between the rider and your Queen.}
        e6 {The enemy opens the f8 priest's road and backs up the centre.}
        7. h3 {Asks the priest a question: give up the bishop pair with ...Bxf3, or retreat.}
        Bh5 8. O-O {Castle now that the priest has stepped back.}
        Nc6 {More pressure on d4.}
        9. Be3 {Your priest develops and adds a guard to d4.}
        cxd4 10. cxd4 {Take back with the soldier, freeing c3 for your rider.}
        Be7 11. Nc3 {Develops and gains time, since your rider attacks the Queen on d5.}`,
    },
    {
      name: 'Barmen Defence: 4...cxd4 5.cxd4 Nc6 6.Nf3 e5',
      pgn: `1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4
        cxd4 {The enemy trades at once.}
        5. cxd4 {You keep a soldier on d4, and c3 is free for your rider.}
        Nc6 {A Black rider develops and attacks d4.}
        6. Nf3 {Your rider guards d4 and develops.}
        e5 {The sharpest try: the enemy attacks d4 a third time and tries to dissolve your heartland.}
        7. Nc3 {Develop with tempo by hitting the Queen on d5.}
        Bb4 {The Black priest pins your rider to your King, so it cannot capture anything.}
        8. Bd2 {Breaks the pin and guards c3.}
        Bxc3 9. Bxc3 {Take back with the priest. It now gazes down the long road at the Black kingside.}
        exd4 10. Nxd4 {Take back with the rider. You own the bishop pair (two priests against priest and rider) and lead in mustering.}`,
    },
    {
      name: 'Stoltz Attack: 6...d5 (2...Nf6 3.e5 Nd5 4.Nf3)',
      pgn: `1. e4 c5 2. c3
        Nf6 {The enemy's other main reply: the Black rider attacks e4 at once.}
        3. e5 {Push the soldier and chase the rider. You gain land and time.}
        Nd5 {The rider finds a good central post, but it can be chased again.}
        4. Nf3 {Develop first and keep d4 in reserve.}
        Nc6 {A Black rider develops and watches e5 and d4.}
        5. Bc4 {The Stoltz Attack. Your priest hits the d5 rider.}
        Nb6 {The rider retreats and hits your priest.}
        6. Bb3 {Keep the priest on the a2-g8 road, aiming at f7.}
        d5 {The enemy strikes at your e5 soldier.}
        7. exd6 {Take en passant ("in passing"): your e5 soldier captures the d-soldier as if it had moved only one square.}
        c4 {The enemy gains time by chasing your priest.}
        8. Bc2 {Your priest falls back to a good road, pointing at h7.}
        Qxd6 {The Black Queen takes back the soldier.}
        9. O-O {Castle. Next come d4, Na3 or Re1 with an easy, active camp.}`,
    },
    {
      name: '2...Nf6 3.e5 Nd5 4.Nf3 e6 (9.Qe2)',
      pgn: `1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3
        e6 {A solid French-style wall.}
        5. d4 {Build the heartland now that the enemy has walled in the c8 priest.}
        cxd4 6. cxd4 {Take back with the soldier and keep the strong soldier on e5.}
        d6 {The enemy attacks your e5 soldier.}
        7. Bc4 {Your priest develops and hits the d5 rider. Your e5 soldier is indirectly protected for now.}
        Nc6 {The enemy develops and adds a third attacker on e5.}
        8. O-O {Castle. If ...dxe5 dxe5, the Queens may leave the field but your pieces stay more active.}
        Be7 {The Black King prepares to castle.}
        9. Qe2 {Your Queen guards e5 and backs up the priest on c4, and your tower can come to d1 next.}`,
    },
    {
      name: '2...e6: French Tarrasch transposition (10.Nb3)',
      pgn: `1. e4 c5 2. c3
        e6 {A solid reply. The enemy plans ...d5 with French-style play.}
        3. d4 {Seize the heartland. Now ...d5 leads to a French-type battlefield.}
        d5 {The enemy attacks e4.}
        4. exd5 {Trade to reach an open field where your mustering counts.}
        exd5 {A Black soldier takes back. Now the enemy may end up with an isolated d-pawn.}
        5. Nf3 {Your rider develops and watches d4 and e5.}
        Nc6 6. Bb5 {Your priest pins the c6 rider, which guards d4 and the c5 soldier.}
        Bd6 {The Black priest develops and guards c5 indirectly.}
        7. dxc5 {Take. The d5 soldier becomes isolated after the recapture.}
        Bxc5 8. O-O {King into the castle. Your plan is to blockade d5 by posting pieces on d4.}
        Nge7 9. Nbd2 {Your rider heads for b3, where it attacks the c5 priest and controls d4.}
        O-O 10. Nb3 {Hits the priest and covers d4, the square right in front of the isolated soldier.}`,
    },
    {
      name: '2...d6 3.d4 Nf6 4.Bd3',
      pgn: `1. e4 c5 2. c3
        d6 {The enemy prepares ...Nf6 without letting e5 gain a tempo on the rider.}
        3. d4 {Build the heartland you prepared with c3.}
        Nf6 {A Black rider develops and attacks e4.}
        4. Bd3 {Guard e4 calmly. You avoid the sharp gambit 4.dxc5 Nc6 and keep a big heartland with more land.}
        g6 {The enemy fianchettoes its priest (sends it to the long diagonal road through g7).}
        5. Nf3 {Your rider develops and guards d4.}
        Bg7 6. O-O {The King's safety first.}
        O-O 7. h3 {Takes g4 from the Black priest, so your f3 rider cannot be pinned. Next Re1 and Nbd2 complete a solid camp.}`,
    },
    {
      name: '2...g6 3.d4 cxd4 4.cxd4 d5 (5.Bb5+)',
      pgn: `1. e4 c5 2. c3
        g6 {The enemy wants a fianchetto, aiming at the heartland from g7.}
        3. d4 {Grab the heartland while the Black priest is not yet on g7.}
        cxd4 4. cxd4 {Take back with the soldier. You have the ideal heartland with soldiers on d4 and e4.}
        d5 {The enemy strikes at e4 at once.}
        5. Bb5+ {A useful check: it disturbs the enemy's mustering before you choose how to answer the attack on e4.}
        Bd7 {The enemy blocks the check and offers to trade priests.}
        6. Bxd7+ {Trade the priests. The Black light-road priest could have become a strong piece, and the enemy must take back.}
        Nxd7 {A Black rider takes back.}
        7. e5 {Gain land and keep the long road of the future g7 priest blocked by your shield wall d4-e5.}
        e6 {The enemy backs up d5 and prepares ...Ne7.}
        8. Nf3 {Your rider develops and guards e5.}
        Ne7 9. O-O {Castle. Keep e5 well guarded (Nc3, Re1) and the g7 priest will run into a wall.}`,
    },
    {
      name: '2...Nc6 3.d4 cxd4 4.cxd4 d5 (Central Exchange)',
      pgn: `1. e4 c5 2. c3
        Nc6 {A Black rider develops and waits to see your plan.}
        3. d4 {Seize the heartland as planned.}
        cxd4 4. cxd4 {Take back with the soldier and keep soldiers on d4 and e4.}
        d5 {The enemy attacks e4.}
        5. exd5 {Take. After ...Qxd5 you reach a Barmen Defence battlefield.}
        Qxd5 6. Nf3 {Your rider develops and guards d4, which the Queen and the c6 rider attack.}
        Bg4 {The Black priest pins your rider and adds pressure on d4.}
        7. Be2 {Your priest breaks the pin and the King prepares to castle.}
        e6 8. Nc3 {Develop with tempo by hitting the Queen. You have an isolated d-pawn but fast mustering.}`,
    },
    {
      name: '2...e5 3.Nf3 Nc6 4.Bc4',
      pgn: `1. e4 c5 2. c3
        e5 {The enemy makes your d4 advance hard, but leaves a hole on d5.}
        3. Nf3 {Your rider develops and attacks e5.}
        Nc6 {A Black rider guards e5.}
        4. Bc4 {Your priest takes its best road, aiming at f7 and the weak d5 square.}
        Nf6 {A Black rider develops and attacks e4.}
        5. d3 {Guard e4. You wage a calm Italian-style war: castle, Re1, Nbd2-f1, and later d4 when it is ready.}`,
    },
  ],
}
