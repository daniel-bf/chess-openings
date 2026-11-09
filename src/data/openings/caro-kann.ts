import type { OpeningSource } from '../types'

export const caroKann: OpeningSource = {
  id: 'caro-kann',
  name: 'Caro-Kann Defense',
  eco: 'B10–B19',
  side: 'black',
  summary:
    'The White Kingdom opens with 1.e4, and you, commander of the Black Kingdom, answer with a fortress. You prepare ...d5 with the c-pawn instead of the e-pawn, so your light-squared priest can still march out to f5 or g4 before ...e6 closes the gate behind it. That fixes the main problem of the French, at the cost of a little time. You aim for a healthy shield wall with no weak spots, finish mobilising, and are often happy to reach an endgame where that sound wall wins the war.',
  ideas: [
    'Send the light-squared priest out to f5 or g4 first, then close the gate with ...e6 behind it.',
    'Keep your shield wall sound; trade pieces calmly and the better soldiers will tell in the endgame.',
    'Against the Advance, strike the base of the wall with ...c5, as in the French but with your priest already outside.',
  ],
  lines: [
    {
      name: 'Classical: Spassky Variation, Lobron System (6.h4)',
      pgn: `1. e4 c6 {The Caro-Kann. It prepares ...d5 while keeping the road open for the c8 priest.}
        2. d4 d5 {Challenge e4 at once, with the c6 soldier ready to back up d5.}
        3. Nc3 {A White rider guards e4.}
        dxe4 {Trade in the heartland; the White rider takes back.}
        4. Nxe4 Bf5 {The Classical: your priest marches out and attacks the rider.}
        5. Ng3 {The rider strikes back at your priest.}
        Bg6 {Keep the priest on its good diagonal road.}
        6. h4 {Threatens h5, which would trap your priest on g6.}
        h6 {Opens an escape hatch on h7 for the priest.}
        7. Nf3 {The rider wants Ne5 to hit the g6 priest.}
        Nd7 {Guards e5 so the rider cannot jump there.}
        8. h5 {Chases the priest and grabs kingside land.}
        Bh7 {The priest steps back but still stares at d3.}
        9. Bd3 Bxd3 {Trade priests: yours could get stuck on h7, and White's was a fierce attacker.}
        10. Qxd3 e6 {Now that the priest is out, ...e6 raises the solid shield wall.}
        11. Bd2 Ngf6 {A rider comes out and the King gets ready to castle.}
        12. O-O-O Be7 {Solid. Your King can castle short (the h5 soldier takes the sting out of g4-g5) or stay flexible.}`,
    },
    {
      name: 'Advance: Short Variation (4.Nf3 e6 5.Be2)',
      pgn: `1. e4 c6 2. d4 d5
        3. e5 {The Advance: the White Kingdom grabs land and cramps your kingside.}
        Bf5 {Send the priest out before ...e6 locks the gate.}
        4. Nf3 e6 {Raise the shield wall now that the priest is outside.}
        5. Be2 {The Short Variation: quiet mobilising, then castling.}
        c5 {The typical strike at d4, the base of White's shield wall.}
        6. Be3 cxd4 {Trade now, so White must take back with a piece.}
        7. Nxd4 Ne7 {Your rider heads for c6 or g6 to hit d4 and e5.}
        8. O-O Nbc6 {Both riders now challenge White's heartland, and your army mobilises easily.}`,
    },
    {
      name: 'Advance: 4.Bd3 (bishop swap)',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5
        4. Bd3 {The White Kingdom offers to trade priests.}
        Bxd3 {Take: White's priest was a good attacker, and you are glad to trade yours.}
        5. Qxd3 e6 {Raise the shield wall.}
        6. Nf3 Qb6 {Your Queen leans on d4 and b2, preparing ...c5.}
        7. O-O c5 {Strike the base of the wall. You have a French structure without the French problem priest.}`,
    },
    {
      name: 'Exchange Variation: Rubinstein Variation (6.Bf4)',
      pgn: `1. e4 c6 2. d4 d5
        3. exd5 {The Exchange: the heartland opens up.}
        cxd5 {Take back with the c-pawn: you get the half-open c-file road.}
        4. Bd3 Nc6 {A rider comes out and eyes d4.}
        5. c3 Nf6 {Another rider rides out toward the kingside.}
        6. Bf4 Bg4 {Send the priest out before ...e6, and it threatens the d1 Queen.}
        7. Qb3 {The White Queen attacks b7 and d5.}
        Qd7 {Guards b7 and keeps the Queens on the field.}
        8. Nd2 e6 {Solid: backs d5 and opens the f8 priest's road.}
        9. Ngf3 Bd6 {Challenge White's active f4 priest.}
        10. Bxd6 Qxd6 {Equal. Your plan is a minority attack: march ...b5-b4 against the c3 soldier.}`,
    },
    {
      name: 'Panov Attack (4.c4)',
      pgn: `1. e4 c6 2. d4 d5 3. exd5 cxd5
        4. c4 {The Panov: the White Kingdom will accept an isolated d-pawn in return for active pieces.}
        Nf6 {A rider comes out and adds pressure on d5.}
        5. Nc3 e6 {Solid: backs d5 and frees the f8 priest.}
        6. Nf3 Be7 {The King gets ready to castle.}
        7. cxd5 Nxd5 {Plant your rider on d5, the square right in front of White's isolated soldier (a blockade).}
        8. Bd3 Nc6 {The rider attacks d4.}
        9. O-O O-O {Your King retreats into the castle.}
        10. Re1 Bf6 {A third attacker on d4. The more pieces leave the field, the weaker that lonely soldier gets.}`,
    },
    {
      name: 'Two Knights Attack: Mindeno Variation, Exchange Line (3...Bg4)',
      pgn: `1. e4 c6
        2. Nc3 {The White Kingdom sends out a rider and keeps the d-pawn flexible.}
        d5 {Still you challenge the e4 soldier.}
        3. Nf3 {The Two Knights Variation: both White riders are in the saddle.}
        Bg4 {Pin the rider, which would like to go to e5.}
        4. h3 Bxf3 {Trade at once: retreating would invite g4 and your priest gets chased.}
        5. Qxf3 e6 {A solid heartland: c6, d5 and e6 hem in White's priests.}
        6. d3 Nf6 {A rider comes out.}
        7. Be2 Nbd7 {Backs up the f6 rider and guards e5.}
        8. O-O Bd6 {Mobilise and castle next. White has the two priests but nothing to attack.}`,
    },
    {
      name: 'Classical: Spassky Variation via 6.Nf3',
      pgn: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6
        6. Nf3 {The White Kingdom mobilises before pushing h4.}
        Nd7 {Stops Ne5, which would hit the g6 priest.}
        7. h4 h6 {The priest gets h7 as an escape hatch.}
        8. h5 Bh7 {Step back from the h5 soldier.}
        9. Bd3 Bxd3 {Trade priests as in the main chapter.}
        10. Qxd3 e6 {The same battlefield as the main line.}`,
    },
    {
      name: 'Classical: 5.Nc5',
      pgn: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5
        5. Nc5 {The White rider attacks b7.}
        b6 {Guards b7 by kicking the rider away.}
        6. Nb3 e6 {Now the shield wall goes up behind the priest.}
        7. Nf3 Nd7 {Guards e5 and c5.}
        8. Bd3 Bxd3 {Trade priests: White's was the dangerous one.}
        9. Qxd3 Ngf6 {A solid Classical camp. The White rider on b3 is a bit lost on the edge.}`,
    },
    {
      name: 'Maróczy (Fantasy) Variation (3.f3)',
      pgn: `1. e4 c6 2. d4 d5
        3. f3 {The Fantasy: the White Kingdom backs e4 with a soldier and dreams of a big heartland.}
        e6 {Hold d5 solidly; the f3 soldier blocks White's own rider from f3.}
        4. Nc3 Bb4 {Pin the rider that guards e4.}
        5. Bf4 Nf6 {A rider comes out as another attacker on e4.}
        6. e5 Nfd7 {The rider retreats and prepares ...c5 against White's shield wall.}
        7. a3 Bxc3+ {Trade: White is left with doubled c-pawns.}
        8. bxc3 c5 {Strike d4 as in a French.}
        9. Nh3 Nc6 {More pressure on d4. The f3 soldier leaves the e3 square and the White King a little weak.}`,
    },
    {
      name: 'Accelerated Panov Attack: Modern Variation (2.c4)',
      pgn: `1. e4 c6
        2. c4 {The White Kingdom plays c4 before d4.}
        d5 {Challenge the heartland anyway.}
        3. exd5 cxd5 {Take back with the c-pawn.}
        4. cxd5 Nf6 {Win the soldier back with a rider coming out, not with the Queen.}
        5. Nc3 Nxd5 {The soldier is won back and the rider stands in the heartland.}
        6. Nf3 Nc6 {Another rider comes out and eyes d4.}
        7. Bb5 e6 {Opens the f8 priest's road so you can castle.}
        8. O-O Be7 {The King gets ready to castle.}
        9. d4 O-O {Now White has an isolated d-pawn and your d5 rider blockades it.}`,
    },
    {
      name: 'Advance: Van der Wiel Attack (4.Nc3 e6 5.g4)',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5
        4. Nc3 {The Van der Wiel Attack (also called the Bayonet): the White Kingdom wants to chase your priest with g4.}
        e6 {Raise the shield wall now, so the priest can retreat to g6 and your f8 priest is free.}
        5. g4 {Attacks the priest and grabs kingside land.}
        Bg6 {Keep the priest on its good diagonal road.}
        6. Nge2 {Prepares h4-h5 or Nf4 to hunt the g6 priest.}
        c5 {Strike the heartland at once: when the enemy attacks on the wing, counter in the middle.}
        7. h4 {Threatens h5, trapping the priest.}
        h5 {Stop h5 and attack the g4 soldier at the same time.}
        8. Nf4 {The rider hits the priest again and eyes your h5 soldier.}
        Bh7 {The priest steps back but keeps its diagonal road.}
        9. Nxh5 {The White Kingdom wins the h5 soldier.}
        Nc6 {A rider comes out and adds pressure on d4 and e5. Your grip on the heartland and ...cxd4 or ...Qb6 give good play for the soldier.}`,
    },
    {
      name: 'Advance: Tal Variation (4.h4)',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5
        4. h4 {The Tal Variation: the White Kingdom wants h5 and g4 to trap or chase your priest.}
        h5 {Stop h5 for good. Now g4 can be met by ...Bxg4, because the h5 soldier guards that square.}
        5. c4 {The White Kingdom opens a second front in the heartland.}
        e6 {Backs d5 and opens the f8 priest's road.}
        6. Nc3 Ne7 {Your rider heads for g6 or f5 and does not block your f-pawn.}
        7. Nge2 {Prepares Ng3 to hit your f5 priest.}
        Nd7 {A rider comes out, ready to answer Ng3 with ...Bg6; later ...dxc4 and ...Nb6 or ...Nf5 hit d4.}`,
    },
    {
      name: 'Breyer Variation (2.d3)',
      pgn: `1. e4 c6
        2. d3 {The Breyer Variation: a King's Indian Attack camp with Nd2, Ngf3, g3 and Bg2.}
        d5 {Take the heartland anyway.}
        3. Nd2 {Backs e4 so White does not need to trade soldiers.}
        e5 {Build a full heartland wall: d5 and e5 side by side.}
        4. Ngf3 Bd6 {A priest guards e5 and the c8 priest's diagonal road stays open.}
        5. g3 Nf6 {A rider comes out and adds pressure on e4.}
        6. Bg2 O-O {Your King retreats into the castle.}
        7. O-O Re8 {The tower guards e5, so the d6 priest is free to move. Your big heartland gives you a comfortable war.}`,
    },
  ],
}
