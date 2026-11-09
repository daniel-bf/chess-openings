import type { OpeningSource } from '../types'

export const english: OpeningSource = {
  id: 'english',
  name: 'English Opening',
  eco: 'A10–A39',
  side: 'white',
  summary:
    "With 1.c4 you, ruler of the White Kingdom, fight for the heartland from the flank: the c-soldier watches d5 without standing there yet. You usually fianchetto your king's priest (g3 and Bg2) so it sweeps the long diagonal road toward d5 and b7. Against 1...e5 the English is a Sicilian with colours reversed, and you have an extra move; against other replies it is flexible and can turn into a d4 opening.",
  ideas: [
    "Rule the light squares of the heartland, above all d5, with c4, Nc3 and the priest on g2.",
    "Fianchetto (g3 and Bg2): the priest on the long diagonal road presses on d5 and b7 and guards your King's castle.",
    "Fight on the queenside: Rb1, a3, b4 and b5 grab land there, usually while the Black Kingdom tries to storm your kingside.",
  ],
  lines: [
    {
      name: "King's English: Four Knights, Fianchetto Line with ...Nb6 (4...d5)",
      pgn: `1. c4 {The English: your c-soldier watches d5 from the flank.}
        e5 {The Black Kingdom claims the heartland. This is a Sicilian with colours reversed, and you have an extra move.}
        2. Nc3 {Your rider develops and adds control of d5.}
        Nf6 3. Nf3 {Your second rider develops and attacks the e5 soldier.}
        Nc6 {Black guards e5. This is the Four Knights English: four riders on the field.}
        4. g3 {This prepares Bg2, a priest that will aim down the long diagonal road at d5 and b7.}
        d5 {Black grabs the heartland, like White in an Open Sicilian.}
        5. cxd5 {You trade off Black's central soldier.}
        Nxd5 6. Bg2 {Your priest strikes the d5 rider at once.}
        Nb6 {The Black rider retreats off the long diagonal road.}
        7. O-O {Your King retreats into the castle.}
        Be7 8. d3 {This soldier watches e4 and c4 and opens the road for the c1 priest.}
        O-O 9. a3 {This prepares b4 to grab queenside land and later drive off the c6 rider with b5.}`,
    },
    {
      name: "King's English: Closed System, Full Symmetry (6.Rb1)",
      pgn: `1. c4 e5 2. Nc3
        Nc6 3. g3 {This prepares a priest on g2.}
        g6 {Black fianchettoes too. With both kingdoms holding their central soldiers back, this is the Closed English.}
        4. Bg2 {Your priest takes the long diagonal road, aimed at d5 and b7.}
        Bg7 5. d3 {This soldier watches e4 and opens the road for the c1 priest.}
        d6 6. Rb1 {Your tower prepares b4-b5 and steps off the long diagonal road of Black's g7 priest.}
        a5 {Black tries to stop b4.}
        7. a3 {You back up b4 anyway.}
        f5 {The Black Kingdom begins its kingside campaign.}
        8. b4 {Your queenside charge goes ahead.}
        axb4 9. axb4 {Take back and open the a-road for your towers.}
        Nf6 10. b5 {Your soldier drives the c6 rider away from d4 and grabs more queenside land.}`,
    },
    {
      name: 'Symmetrical: Mecking Variation (7.d4)',
      pgn: `1. c4
        c5 {The Symmetrical English: the Black Kingdom copies you.}
        2. Nf3 {Your rider develops and prepares a later d4.}
        Nc6 3. Nc3 {Your second rider develops and watches d5.}
        g6 4. g3 {This prepares the fianchetto.}
        Bg7 5. Bg2 {Your priest takes the long diagonal road.}
        Nf6 6. O-O {Your King retreats into the castle.}
        O-O 7. d4 {You break the symmetry and open the heartland, which helps the better-developed army.}
        cxd4 8. Nxd4 {Your rider takes back and stands in the centre.}
        Nxd4 9. Qxd4 {Your Queen takes back and stands well in the centre for now.}
        d6 10. Qd3 {Your Queen steps off the long diagonal road, so Black cannot win time with ...Ng4 or ...Nd5 uncovering the g7 priest. You keep a little more land thanks to the c4 soldier.}`,
    },
    {
      name: 'Mikenas-Carls Variation: Flohr line (3...d5 4.e5)',
      pgn: `1. c4 Nf6 2. Nc3 {Your rider develops and watches d5 and e4.}
        e6 3. e4 {The Mikenas Attack: you seize the heartland at once.}
        d5 {Black strikes the e4 soldier.}
        4. e5 {Your soldier grabs land and drives off the rider.}
        d4 {A Black counterstrike against the c3 rider.}
        5. exf6 {You take the rider first.}
        dxc3 6. bxc3 {Take back toward the centre, opening the b-road for a tower.}
        Qxf6 7. d4 {You build a strong heartland and shut the Black Queen out of c3. You have more central soldiers and a quick muster.}`,
    },
    {
      name: "King's Indian: Averbakh Variation (3.e4, 6.Bg5)",
      pgn: `1. c4 Nf6 2. Nc3
        g6 3. e4 {You take the heartland with soldiers: this will become a King's Indian.}
        d6 4. d4 {A mighty wall of central soldiers.}
        Bg7 5. Be2 {Your priest develops, covers g4 and prepares castling.}
        O-O 6. Bg5 {The Averbakh setup: your priest pins the f6 rider and makes Black's usual ...e5 break harder to prepare.}`,
    },
    {
      name: "QGD: Modern Variation, Normal Line (1...e6 2...d5 3.d4)",
      pgn: `1. c4
        e6 2. Nc3 {Your rider develops and watches d5.}
        d5 3. d4 {The war turns into the Queen's Gambit Declined.}
        Nf6 4. Bg5 {Your priest pins the rider that guards d5, as in the Queen's Gambit course.}
        Be7 5. e3 {This soldier supports d4 and opens the road for the f1 priest.}
        O-O 6. Nf3 {The same QGD fortress as in the Queen's Gambit course.}`,
    },
    {
      name: "King's English: Four Knights, Fianchetto Line (4...Bb4)",
      pgn: `1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3
        Bb4 {The Black priest pins the c3 rider to fight for the d5 and e4 squares.}
        5. Bg2 {Your priest takes the long diagonal road.}
        O-O 6. O-O {Your King retreats into the castle.}
        e4 {Black drives off the f3 rider and grabs land.}
        7. Ng5 {Your rider attacks the e4 soldier instead of retreating.}
        Bxc3 8. bxc3 {Take back toward the centre; the soldiers on c3 and c4 watch d4 and d5.}
        Re8 {The Black tower guards e4.}
        9. f3 {You strike e4 again to open the heartland. Then your priests get open roads.}`,
    },
    {
      name: 'Symmetrical: Mecking Variation via 1...Nf6 2...c5',
      pgn: `1. c4 Nf6 2. Nc3
        c5 3. Nf3 {Your rider develops and prepares d4.}
        Nc6 4. g3 {This prepares the fianchetto.}
        g6 5. Bg2 {Your priest takes the long diagonal road, aimed at d5 and b7.}
        Bg7 6. O-O O-O 7. d4 {Another road to the same battlefield: the Symmetrical main line again.}`,
    },
    {
      name: 'Caro-Kann: Panov Attack via 1...c6 2.e4',
      pgn: `1. c4
        c6 {The Black Kingdom readies ...d5, as in the Caro-Kann.}
        2. e4 {You take the heartland and stop ...d5 from coming comfortably.}
        d5 3. exd5 {You open the heartland.}
        cxd5 4. d4 {The war becomes the Panov Attack against the Caro-Kann: you usually get an isolated d-soldier but a very active army.}
        Nf6 5. Nc3 {Your rider develops as a second attacker on d5, beside the c4 soldier.}`,
    },
    {
      name: 'Symmetrical: Mecking Variation via 1...g6',
      pgn: `1. c4
        g6 {The Black Kingdom readies its priest for ...Bg7 first.}
        2. Nc3 {Your rider develops and watches d5.}
        Bg7 3. g3 {You fianchetto too.}
        c5 4. Bg2 {The fianchetto is complete.}
        Nc6 5. Nf3 {Your rider develops and prepares castling and d4.}
        Nf6 6. O-O O-O 7. d4 {The same battlefield: the Symmetrical main line.}`,
    },
    {
      name: "King's English: Kramnik-Shirov Counterattack (2...Bb4 3.Nd5)",
      pgn: `1. c4 e5 2. Nc3
        Bb4 {The Black priest pins your rider, threatening ...Bxc3 to double your soldiers.}
        3. Nd5 {Your rider attacks the priest and avoids doubled soldiers. It is strong on d5.}
        Be7 {The Black priest retreats.}
        4. d4 {Your soldier strikes e5 and grabs central land.}
        d6 5. e4 {A mighty central wall. Your camp is comfortable, and you can trade the rider for the e7 priest when it suits you.}`,
    },
    {
      name: "Anglo-Indian: Anglo-Grünfeld Variation (4.g3 g6 5.Bg2 Nxc3)",
      pgn: `1. c4 Nf6 2. Nc3
        d5 {The Anglo-Grünfeld: Black strikes the heartland at once, as in the Grünfeld Defence.}
        3. cxd5 {You trade the c-soldier for Black's central soldier.}
        Nxd5 4. g3 {Botvinnik's move: the priest will go to g2 and strike the d5 rider along the long diagonal road.}
        g6 5. Bg2 {Now the rider on d5 is attacked by your priest as well as the c3 rider.}
        Nxc3 {Black trades riders so his own rider is not chased around.}
        6. bxc3 {Take back toward the centre, opening the b-road for a tower.}
        Bg7 7. Rb1 {Your tower uses the half-open b-road to attack b7, where the g2 priest is also aiming.}`,
    },
    {
      name: "Symmetrical: Rubinstein Variation (3...d5 4.cxd5 Nxd5 5.g3)",
      pgn: `1. c4 Nf6 2. Nc3 c5 3. Nf3
        d5 {Black opens the heartland straight away.}
        4. cxd5 {You trade, so Black has to take back with the rider.}
        Nxd5 5. g3 {This prepares Bg2, a priest that will strike the d5 rider along the long diagonal road.}
        Nc6 6. Bg2 {Your priest harasses the d5 rider, which has to move again.}
        Nc7 {The Rubinstein System: the rider retreats to c7 to support ...e5, building a reversed Maróczy Bind (soldiers on c5 and e5 that clamp the d4 square).}
        7. O-O {Your King retreats into the castle before the heartland opens.}
        e5 8. d3 {This soldier watches e4 and c4 and opens the road for the c1 priest. You plan Nd2-c4, a3 and b4 to break Black's clamp on the queenside.}`,
    },
    {
      name: "King's English: Four Knights, Fianchetto Line with ...d6 (4...Bc5)",
      pgn: `1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3
        Bc5 {The Black priest aims at f2, a natural developing move.}
        5. Bg2 {Your priest takes the long diagonal road.}
        d6 6. O-O {Your King retreats into the castle.}
        O-O 7. d3 {This soldier watches e4 and opens the road for the c1 priest.}
        h6 {Black stops Bg5 and Ng5.}
        8. a3 {This prepares b4, which would grab queenside land and gain time by attacking the c5 priest.}`,
    },
  ],
}
