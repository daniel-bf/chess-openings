import type { OpeningSource } from '../types'

export const benko: OpeningSource = {
  id: 'benko',
  name: 'Benko Gambit',
  eco: 'A57–A59',
  side: 'black',
  summary:
    "You command the Black Kingdom in a bold gambit against 1.d4. After 1.d4 Nf6 2.c4 c5 3.d5, you sacrifice your b-soldier with 3...b5. If the White Kingdom takes everything, you win two half-open roads (the a- and b-files) for your towers and a long diagonal road for a fianchettoed priest on g7. The pressure on the enemy's queenside lasts deep into the endgame, which is why strong commanders happily stay a soldier down. Theory sees the gambit as sound but slightly risky.",
  ideas: [
    "After 4.cxb5 a6 5.bxa6 Bxa6, build the standard formation: ...d6, ...g6, ...Bg7, ...O-O, ...Nbd7, ...Qa5 and ...Rfb8. Every piece then aims at the White queenside, above all the a2 and b2 soldiers.",
    "If the White Kingdom plays e4, trade the light-road priests with ...Bxf1. The White King loses the right to castle and must trudge to g2, and your riders win the light squares (c4, b3).",
    "When the enemy declines the gambit (4.Nf3, 4.a4, 5.e3, 5.f3, 5.b6), keep the same idea: open the a- and b-files, fianchetto on g7 and press the queenside with ...Ba6, ...Qa5 or ...Qb6.",
  ],
  lines: [
    {
      name: 'Fully Accepted: Fianchetto Variation (8.g3)',
      pgn: `1. d4 Nf6 {Your rider rides out and watches e4.}
        2. c4 c5 {A soldier challenges d4 at once and tempts the White soldier to push to d5.}
        3. d5 {The White Kingdom grabs ground. Taking on c5 with 3.dxc5 would be harmless.}
        b5 {The Benko Gambit. You offer the b-soldier to undermine the c4 soldier that props up d5, and to open queenside roads for your towers.}
        4. cxb5 {The enemy takes the soldier.}
        a6 {Offer a second soldier. If White takes it, your a- and b-files both lie open.}
        5. bxa6 {The fully accepted line. The White Kingdom is a soldier up.}
        Bxa6 {Your priest recaptures. From a6 it stares at f1, so the White kingside priest struggles to come out and the White King struggles to castle.}
        6. Nc3 d6 {A soldier covers e5 and c5 and prepares ...g6 and ...Bg7.}
        7. Nf3 g6 {Prepare the fianchetto: your priest on g7 will rule the long diagonal road down to a1.}
        8. g3 {The White Kingdom fianchettoes too, so its King can castle once the priest reaches g2.}
        Bg7 {The priest on the long diagonal road is the heart of the Benko. It aims at c3, b2 and a1.}
        9. Bg2 O-O {Your King retreats into the castle, and the f8 tower will head for b8.}
        10. O-O Nbd7 {Your rider heads for b6, e5 or c5 and clears the Queen's path.}
        11. Qc2 {The White Queen guards the queenside and makes way for the c1 priest.}
        Qa5 {Your Queen joins the siege of the queenside, eyeing a2 and c3.}
        12. Rd1 Rfb8 {The classic set-up: both towers on the open a- and b-files. White is a soldier up but finds it hard to untangle the queenside.}`,
    },
    {
      name: 'Fully Accepted: King Walk (7.e4 Bxf1 8.Kxf1)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6
        7. e4 {The White Kingdom builds a big heartland. But now the f1 priest blocks its King's path.}
        Bxf1 {Trade priests. White must take with the King and loses the right to castle.}
        8. Kxf1 g6 {Fianchetto as usual. Your priest on g7 is now your finest minor piece.}
        9. Nf3 Bg7 {Your priest lands on the long diagonal road, aimed at the White queenside.}
        10. g3 O-O {Into the castle. The White King will have to walk to g2 on foot.}
        11. Kg2 {The "King Walk": the White King reaches safety in two moves instead of castling.}
        Nbd7 {Your rider comes out. It can go to b6, e5 or c5.}
        12. h3 {Gives the King a bolt-hole and stops ...Ng4.}
        Qa5 {Your Queen heads off to join the queenside siege.}
        13. Re1 {The White Kingdom prepares e5 to break open the heartland.}
        Rfb8 {Towers to the open roads: the classic Benko set-up, with pressure on b2 and a2.}`,
    },
    {
      name: 'Fully Accepted: Nd2 Variation (8.Nd2)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. Nf3 g6
        8. Nd2 {The White rider heads for c4, where it blocks the c-file and attacks d6 and b6.}
        Bg7 {Fianchetto first; your priest's diagonal road is the key.}
        9. e4 Bxf1 {Trade priests so the White King loses the right to castle.}
        10. Kxf1 O-O {Into the castle. The White King will need g3 and Kg2, and your towers and Queen will turn to the queenside.}`,
    },
    {
      name: 'Accepted: Modern Variation (5.e3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. e3 {The enemy does not take on a6. The e3 step opens the road for the f1 priest to recapture on b5 later.}
        d6 {Develop calmly. You will win back the soldier on b5 once White has committed.}
        6. Nc3 g6 {Fianchetto, as in every Benko line.}
        7. Nf3 Bg7 {Your priest takes up the long diagonal road towards b2.}
        8. Be2 O-O {Into the castle before you open the queenside.}
        9. O-O axb5 {Now take the soldier. The a-file opens for your tower.}
        10. Bxb5 Ba6 {Offer a priest trade: the White priest on b5 is a fine guard of the queenside.}
        11. Bxa6 Nxa6 {Your rider recaptures. Next ...Qb6 and ...Rfb8 press on b2, and the rider can go to c7 or b4.}`,
    },
    {
      name: 'Accepted: Dlugy Variation (5.f3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. f3 {The White Kingdom props up e4 and keeps your rider off g4.}
        d6 {Develop solidly and leave the a6 soldier where it is for now. Taking on b5 at once is also possible.}
        6. e4 g6 {A soldier steps aside so your priest can fianchetto.}
        7. Nc3 Bg7 {Your priest on the long diagonal road aims at c3 and b2.}
        8. Bd3 O-O {Into the castle before you open the queenside.}
        9. Nge2 Nbd7 {Your rider comes out and heads for e5.}
        10. O-O Ne5 {The rider strikes the d3 priest, the enemy's best guardian of the light squares.}
        11. Be3 Nxd3 {Take the priest. You win the two bishops, and White has fewer troops to guard b5 and the light squares.}
        12. Qxd3 axb5 {Now throw open the a-file for your tower.}
        13. Nxb5 Ba6 {Your priest pins the b5 rider to its Queen. Your troops are lively on the queenside, and the missing soldier is back.}`,
    },
    {
      name: 'Accepted: Pawn Return Variation (5.b6)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. b6 {The White Kingdom hands the soldier back to keep the queenside closed and avoid your open roads.}
        Qxb6 {Your Queen takes back the soldier. Armies are level, and she stands active on b6.}
        6. Nc3 d6 {A soldier covers e5 and c5 and opens the road for the c8 priest.}
        7. e4 g6 {Clear the way for the fianchetto.}
        8. Nf3 Bg7 {The usual fianchetto: your priest aims at b2.}
        9. Be2 O-O {Into the castle; now your troops turn to the queenside.}
        10. O-O a5 {Move the a-soldier aside so your priest can go to a6 and trade off the enemy's good priest.}`,
    },
    {
      name: 'Zaitsev System (5.Nc3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
        5. Nc3 {The White Kingdom develops and hopes its rider can help keep the b5 soldier.}
        axb5 {Take the soldier back at once.}
        6. e4 {White gives up the soldier to build a heartland and play Nb5.}
        b4 {Gain time by striking the c3 rider.}
        7. Nb5 d6 {Keep the rider from leaping to c7 or d6, and open the c8 priest's road.}
        8. Bd3 g6 {Fianchetto. The rider on b5 can be hit later by ...Ba6.}
        9. Nf3 Bg7 {Your priest eyes the long diagonal road.}
        10. O-O O-O {Into the castle. Your soldier on b4 cramps the enemy and your play is easy.}`,
    },
    {
      name: 'Declined: Main Line (4.Nf3)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5
        4. Nf3 {The simplest refusal: the White rider comes out and lets you take on c4.}
        bxc4 {Take the soldier. White will win it back, but your b-file opens.}
        5. Nc3 d6 {A soldier covers e5 and c5 and prepares ...g6.}
        6. e4 g6 {Ready the g7 square for your priest.}
        7. Bxc4 Bg7 {The enemy has won back the soldier, but your priest on g7 is strong and the b-file is yours.}
        8. O-O O-O {Into the castle. You get a Benoni-style war with lively play on the b-file.}`,
    },
    {
      name: 'Declined: Sosonko Variation (4.a4)',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 b5
        4. a4 {The White Kingdom strikes b5 to keep the queenside roads shut.}
        bxc4 {Take on c4. White will spend time winning the soldier back.}
        5. Nc3 d6 {Cover e5 and c5 so the enemy heartland cannot advance with gain of time.}
        6. e4 g6 {Prepare the fianchetto. Sending the priest to a6 to hold the c4 soldier is a sharper option.}
        7. Bxc4 Bg7 {Fianchetto. The a4 soldier has weakened b4 and b3 for your troops.}
        8. Nf3 O-O {Into the castle. Plans include ...Nbd7, ...Nb6 and ...Ba6 to trade the White priest on c4.}`,
    },
  ],
}
