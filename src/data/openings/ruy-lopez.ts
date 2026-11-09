import type { OpeningSource } from '../types'

export const ruyLopez: OpeningSource = {
  id: 'ruy-lopez',
  name: 'Ruy Lopez',
  eco: 'C60–C99',
  side: 'white',
  summary:
    "The Ruy Lopez, or Spanish Game (1.e4 e5 2.Nf3 Nc6 3.Bb5), is one of the oldest and most honoured war plans. You command the White Kingdom. Your priest rides to b5 and threatens the c6 rider, the guard of e5, so the Black heartland lives under a long siege. The war is usually slow and patient: you castle, play Re1, c3 and h3, break with d4, and keep your light-road priest on the a4-b3-c2 road, aimed at the Black King.",
  ideas: [
    'Bb5 does not win e5 at once, but it keeps the Black heartland under siege for the whole war.',
    'Build before you strike: Re1, c3 and h3 all prepare the d4 break, so a soldier can take back and your heartland stays big.',
    'Keep your light-road priest (it retreats a4-b3-c2 instead of being traded), and send the Queen\'s rider on the long ride d2-f1-g3 toward the Black King.',
  ],
  lines: [
    {
      name: 'Closed: Chigorin Defence (9...Na5)',
      pgn: `1. e4 {A White soldier plants a flag on e4 in the heartland and opens roads for the Queen and the f1 priest.}
        e5 {The Black Kingdom claims an equal share of the heartland.}
        2. Nf3 {Your rider gallops out with a threat: the e5 soldier is attacked.}
        Nc6 {A Black rider guards e5.}
        3. Bb5 {The Ruy Lopez. Your priest threatens the c6 rider, the main guard of e5.}
        a6 {The Morphy Defence, the Black Kingdom's favourite reply: your priest must decide at once.}
        4. Ba4 {Keep the priest and the pressure. Taking on c6 is the Exchange Variation, a different war plan.}
        Nf6 {A Black rider develops and attacks e4.}
        5. O-O {Castle and let e4 go for now: after 5...Nxe4, 6.d4 or 6.Re1 wins the soldier back with good play.}
        Be7 {The Closed Ruy Lopez: the Black Kingdom develops calmly instead of taking on e4.}
        6. Re1 {Your tower guards e4. Now Bxc6 followed by Nxe5 is a real threat, because e4 no longer hangs afterwards.}
        b5 {The enemy ends that threat by chasing your priest away from the c6 rider.}
        7. Bb3 {Your priest lands on a fine diagonal road, aimed at f7.}
        d6 {A Black soldier backs up e5 and opens the road for the c8 priest.}
        8. c3 {Prepares d4 and gives your priest a future home on c2.}
        O-O 9. h3 {A key "prophylactic" move (one that stops the enemy's idea): it prevents ...Bg4, which would pin the f3 rider and weaken d4.}
        Na5 {The Chigorin Variation: the Black rider hunts your b3 priest.}
        10. Bc2 {Your priest falls back to c2, where it still guards e4 and points at the Black King.}
        c5 {The enemy grabs queenside land and adds pressure on d4.}
        11. d4 {The classic heartland break, backed by c3 and the f3 rider.}
        Qc7 {The Black Queen holds e5 firmly and gets ready to bring the a5 rider home via c6.}
        12. Nbd2 {The famous rider's journey begins: d2, then f1, then g3 or e3, while the heartland stays tense.}`,
    },
    {
      name: 'Marshall Attack: Modern Main Line (8...d5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3
        O-O {The Black King castles first and keeps ...d5 in reserve.}
        8. c3 {Prepares d4 and gives your priest the c2 square.}
        d5 {The Marshall Attack: the Black Kingdom sacrifices the e5 soldier to open roads and storm your King.}
        9. exd5 {Accept the gambit. This is the main test: the enemy gets fast development, but you get a soldier to keep.}
        Nxd5 10. Nxe5 {Take the second soldier too; this is the main line.}
        Nxe5 11. Rxe5 {Your tower takes back and you are a soldier up.}
        c6 {Backs up the d5 rider and prepares ...Bd6, hitting your tower and aiming at h2.}
        12. d4 {Opens the c1 priest's road for defence and keeps Black's army off e5.}
        Bd6 {The Black priest attacks your tower and lines up on h2.}
        13. Re1 {Your tower goes home to guard the back row and the e-file.}
        Qh4 {The Black Queen threatens ...Qxh2+ with a mating attack.}
        14. g3 {The standard defence: the soldier blocks the d6 priest's diagonal road, so h2 is safe.}
        Qh3 {The Black Queen camps right next to your King, eyeing g2 and the light squares.}
        15. Be3 {Your priest develops and covers the dark squares. Next come Qd3, Nd2 and Re4 to beat off the siege and keep the extra soldier.}`,
    },
    {
      name: 'Berlin Defence: Berlin Wall (4...Nxe4)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        Nf6 {The Berlin Defence: the Black Kingdom skips ...a6 and attacks e4 at once.}
        4. O-O {Castle and offer e4: you win it back by opening the heartland.}
        Nxe4 5. d4 {Hits e5 and opens roads toward the Black King, still standing in the centre.}
        Nd6 {The Black rider falls back and attacks your b5 priest.}
        6. Bxc6 {Trade now rather than waste time retreating.}
        dxc6 7. dxe5 {Wins the soldier back and drives off the d6 rider.}
        Nf5 8. Qxd8+ {Trade Queens. This is the famous Berlin endgame.}
        Kxd8 {The enemy keeps the bishop pair but has doubled c-pawns, and its King can no longer castle.}
        9. Nc3 {Muster quickly. Your long-term trump is the four-against-three soldier majority on the kingside; Black's doubled c-pawns make his queenside majority hard to use.}
        Ke8 {The Black King walks back toward the kingside.}
        10. h3 {Keeps Black's army off g4 and prepares g4 to chase the f5 rider.}
        h5 {A Black soldier stops g4 for good.}
        11. Bf4 {Your priest develops and guards the e5 soldier. Next come Rad1 and Rfe1 to seize the open d-file.}`,
    },
    {
      name: 'Open: St. Petersburg Variation (5...Nxe4)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O
        Nxe4 {The Open Ruy Lopez: the Black rider grabs the soldier and the enemy goes for active play.}
        6. d4 {Open the roads at once, while the Black King is still in the centre.}
        b5 7. Bb3 {Retreat to the a2-g8 diagonal road, where your priest will press on d5.}
        d5 {A Black soldier backs up the e4 rider.}
        8. dxe5 {Win the soldier back. Your soldier on e5 cramps Black's kingside.}
        Be6 {Guards d5, so the e4 rider stays firmly planted.}
        9. c3 {Gives your priest a retreat on c2 and covers d4 and b4.}
        Bc5 {The enemy's most active set-up, with the priest aimed at f2.}
        10. Nbd2 {Your rider challenges the strong e4 rider.}
        O-O 11. Bc2 {A second attacker on e4. The enemy must decide: trade it, retreat it, or sacrifice with 11...Nxf2 (the Dilworth Attack).}`,
    },
    {
      name: 'Classical Defence: Benelux Variation (3...Bc5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        Bc5 {The Classical Defence: the Black priest takes its most active diagonal road, aimed at f2.}
        4. O-O {Castle first, so your King is safe from the c5 priest.}
        Nf6 5. c3 {Prepares d4, which will hit the c5 priest and take the heartland.}
        O-O 6. d4 {Strike: both e5 and the c5 priest are attacked.}
        Bb6 {The priest retreats but keeps pressure on d4.}
        7. Re1 {Your tower guards e4, which the f6 rider attacks now that the heartland is opening.}
        d6 8. h3 {Stops ...Bg4, which would pin the f3 rider, the main guard of d4. You keep a broad heartland.}`,
    },
    {
      name: 'Schliemann Defence (3...f5 4.d3)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        f5 {The Schliemann (or Jaenisch) Gambit: the Black f-soldier hits e4 to open the f-file.}
        4. d3 {A calm, safe answer. You back up e4 and avoid the wild main lines.}
        fxe4 5. dxe4 {Take back. Your heartland is sound, while the Black King has lost the f-soldier that shielded him.}
        Nf6 6. O-O {Castle and get your tower ready.}
        d6 7. Nc3 {Your rider develops and guards e4, which the f6 rider attacks.}
        Be7 8. Bc4 {Your priest switches to the open a2-g8 road. It covers g8, so the Black King cannot castle kingside for now, and it eyes the weak e6 square.}`,
    },
    {
      name: "Closed: Breyer Defence (9...Nb8)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3
        Nb8 {The Breyer Variation: the Black rider rides home to travel via d7, where it backs up e5 and frees the c-soldier and the b7 priest.}
        10. d4 {Take the heartland while the rider sits on b8 and cannot press on d4.}
        Nbd7 11. Nbd2 {Your rider begins its classic journey to f1 and g3.}
        Bb7 12. Bc2 {Your priest adds a guard to e4, which the b7 priest and f6 rider are eyeing.}
        Re8 13. Nf1 {The journey goes on. e4 is safely guarded by your priest and tower.}
        Bf8 14. Ng3 {Your rider has reached the kingside, eyeing f5 and h5.}
        g6 {The enemy takes f5 away from your rider and prepares ...Bg7.}
        15. a4 {Open a second front: a4 attacks b5 and can open the a-file for your tower.}`,
    },
    {
      name: "Closed: Flohr-Zaitsev System (9...Bb7)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3
        Bb7 {The Zaitsev Variation: the Black priest joins the siege of e4.}
        10. d4 {Seize the heartland.}
        Re8 {A Black tower adds more pressure on e4.}
        11. Nbd2 {Guards e4 a second time and prepares Nf1.}
        Bf8 12. a4 {The best answer to this set-up: you attack b5 and open a queenside front.}
        h6 {Keeps your rider and priest off g5.}
        13. Bc2 {Your priest falls back to guard e4 and aim at the Black kingside.}
        exd4 14. cxd4 {Take back toward the centre: you now have the classic soldier pair on d4 and e4.}
        Nb4 {The Black rider leaps in and attacks your c2 priest.}
        15. Bb1 {Keep the priest. On b1 it still guards e4. Next comes Ra3, swinging your tower along the third row.}`,
    },
    {
      name: "Morphy Defence: Modern Steinitz (4...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4
        d6 {The Steinitz Deferred: a Black soldier backs up e5 before the kingside develops.}
        5. c3 {Prepares d4 and gives your priest the c2 square, so it cannot be trapped by ...b5 and ...c5-c4 later.}
        Bd7 {The Black priest breaks the pin on the c6 rider.}
        6. d4 {Build a big heartland.}
        Nf6 7. O-O {Your King retreats into the castle and the tower gets ready for Re1.}
        Be7 8. Re1 {Your tower guards e4.}
        O-O 9. Nbd2 {Your rider develops. It can ride to f1 and g3 as in the Closed Ruy Lopez, and you keep more land.}`,
    },
    {
      name: "Steinitz Defence (3...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        d6 {The Old Steinitz Defence: very solid, but it walls in the f8 priest and gives up land.}
        4. d4 {Hit the heartland at once. With the d-soldier gone from d7, the c6 rider is pinned to its King and can do little.}
        Bd7 {The Black priest breaks the pin.}
        5. Nc3 {Your rider develops and guards e4.}
        Nf6 6. O-O {King into the castle.}
        Be7 7. Re1 {Your tower guards e4. This also sets the Tarrasch Trap: if 7...O-O?, then 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 Raxd8 11.Nxe5 wins material.}
        exd4 {The right move: the Black Kingdom gives up the heartland.}
        8. Nxd4 {Take back with a central rider. You hold more land with e4 against d6.}
        O-O
        9. Bf1 {Avoid trades: the side with more land wants to keep pieces on. Your priest guards your King and the enemy stays cramped.}`,
    },
    {
      name: "Morphy Defence: Arkhangelsk Variation (5...b5)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O
        b5 {The Arkhangelsk: the enemy chases your priest at once and plans ...Bb7 and ...Bc5, aiming both priests at your kingside.}
        6. Bb3 {Your priest retreats to its best road, aimed at f7.}
        Bb7 {The Black priest joins the pressure on e4.}
        7. Re1 {Your tower guards e4, which both the f6 rider and the b7 priest attack.}
        Bc5 {The other Black priest takes its most active square, aimed at f2.}
        8. c3 {Prepares d4, which will hit e5 and block the c5 priest.}
        d6 9. d4 {Strike in the heartland while the Black King is still uncastled.}
        Bb6 {The priest steps back and keeps pressing on d4.}
        10. Bg5 {Your priest develops with a pin: the f6 rider cannot take on e4 or help in the centre without losing its Queen.}`,
    },
    {
      name: "Morphy Defence: Møller Defence (5...Bc5)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O
        Bc5 {The Møller Defence: the Black priest takes its most active road before ...b5.}
        6. c3 {Prepares d4, which will hit e5 and the c5 priest together.}
        b5 7. Bb3 {Back to the a2-g8 road, aimed at f7.}
        d6 {A Black soldier backs up e5, so d4 does not simply win it.}
        8. d4 {Seize the heartland now: the c5 priest must move again.}
        Bb6 9. a4 {Attack the b5 soldier. The a-file can open for your tower, and the Black queenside soldiers become targets.}`,
    },
    {
      name: "Bird Variation (3...Nd4)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        Nd4 {Bird's Defence: the enemy trades off your f3 rider and gets a soldier wedge on d4.}
        4. Nxd4 {Take. The soldier that arrives on d4 cramps you a little, but it is cut off from its comrades.}
        exd4 5. O-O {Castle quickly. Your plan is d3, Nd2 and f4, using your extra heartland soldier.}
        c6 {A Black soldier chases the b5 priest.}
        6. Bc4 {Your priest takes its best road, aimed at f7.}
        Nf6 7. Re1 {Your tower guards e4, which the f6 rider attacks.}
        d6 8. d3 {Backs up e4 and opens the road for your c1 priest. Next come Nd2-f3 or f4, and later c3 to break up the d4 wedge.}`,
    },
  ],
}
