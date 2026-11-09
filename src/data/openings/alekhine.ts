import type { OpeningSource } from '../types'

export const alekhine: OpeningSource = {
  id: 'alekhine',
  name: "Alekhine's Defense",
  eco: 'B02–B05',
  side: 'black',
  summary:
    "You, commander of the Black Kingdom, send a rider at the e4 soldier with 1...Nf6 and dare the White Kingdom to chase it with foot soldiers. White gains land, but every soldier that marches forward can become a target. Once your rider has settled (usually on d5 or b6), you strike the advanced e5 soldier with ...d6, mobilise quickly and attack White's big heartland with pieces and soldier breaks such as ...dxe5, ...c5 or ...f6.",
  ideas: [
    'Let the White soldiers chase your rider, then strike back: ...d6 at once attacks the e5 soldier, the spearhead of White\'s heartland.',
    'Lean on d4 and e5 with pieces: ...Bg4 pins the f3 rider that guards them, and ...Nc6 hits d4 directly.',
    'Your rider is happy on b6 when White has played c4: from there it watches c4 and d5, and can leap into c4 if that square is left unguarded.',
  ],
  lines: [
    {
      name: 'Modern: Main Line (4...Bg4 5.Be2)',
      pgn: `1. e4 Nf6 {Your rider attacks the e4 soldier straight away. White will usually chase it with soldiers, and those soldiers can later become targets.}
        2. e5 {The White soldier grabs land and attacks your rider.}
        Nd5 {The best square: in the heartland, and no soldier can kick it at once.}
        3. d4 {The White Kingdom builds a broad heartland.}
        d6 {Strike the e5 soldier at once. You want to undermine White's heartland before it gets support.}
        4. Nf3 {The Modern Variation: a White rider simply guards e5 and comes out.}
        Bg4 {Pin the f3 rider to its Queen. That rider is the main guard of e5 and d4, so the pin adds pressure on both.}
        5. Be2 {The White priest breaks the pin, the usual move.}
        e6 {A solid camp: opens the road for the f8 priest and puts a soldier behind the d5 rider.}
        6. O-O Be7 {The priest comes out and your King gets ready to castle.}
        7. c4 {A White soldier kicks your rider out of the heartland.}
        Nb6 {From b6 the rider eyes c4 and d5.}
        8. h3 {The White Kingdom asks your priest to decide.}
        Bh5 {Keep the pin. Giving up the priest for nothing would just hand White the two priests.}
        9. Nc3 O-O {Your King retreats into the castle and the towers can join the war.}
        10. Be3 {The White priest guards d4 and covers the c5 square.}
        d5 {Fix the heartland and hit c4. If White takes or pushes, your riders get good squares.}
        11. c5 {White's soldier grabs land and kicks the b6 rider.}
        Bxf3 {Trade off the rider first: after Bxf3 White's priest leaves e2, so it no longer guards c4.}
        12. Bxf3 Nc4 {Your rider lands in the hole on c4, hitting the e3 priest and the b2 soldier.}
        13. b3 Nxe3 {Take White's good dark-squared priest. After fxe3 White has doubled e-pawns and you can attack with ...b6 and ...Nc6.}`,
    },
    {
      name: 'Modern: Panov Variation (5.h3)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4
        5. h3 {The White Kingdom asks the question at once, ready to answer ...Bh5 with g4.}
        Bxf3 {Give up your priest for the rider, the main guard of e5.}
        6. Qxf3 dxe5 {Now the e5 soldier has lost its rider guard, so take it.}
        7. dxe5 e6 {Solid: the d5 rider is supported and the f8 priest can come out. Next ...Nc6 or ...Nd7 attacks the e5 soldier again.}`,
    },
    {
      name: 'Four Pawns Attack: Main Line (7.Be3)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6
        4. c4 {The White soldiers chase your rider again.}
        Nb6 {The rider takes its standard retreat to b6, eyeing c4.}
        5. f4 {The Four Pawns Attack: the White Kingdom builds the biggest possible heartland wall with soldiers on c4, d4, e5 and f4.}
        dxe5 {Trade first, so White has to recapture with the f-pawn.}
        6. fxe5 Nc6 {Now your rider hits d4. White's wall is big but must be defended.}
        7. Be3 {The White priest guards d4.}
        Bf5 {Send the priest out beyond your shield wall, where it also covers d3 and b1.}
        8. Nc3 e6 {Opens the road for the f8 priest and stops the e5 soldier from marching on to e6.}
        9. Nf3 Be7 {The priest comes out and the King prepares to castle.}
        10. Be2 O-O {Your King retreats into the castle before the f-file road opens.}
        11. O-O f6 {The key break: attack the e5 soldier and open the f-file road for your tower.}
        12. exf6 Bxf6 {Recapture with the priest: it now hits d4 together with the c6 rider.}
        13. Qd2 Qe7 {Connect the towers. Next ...Rad8 piles up on d4, and ...e5 can open the heartland.}`,
    },
    {
      name: 'Four Pawns Attack: Ilyin-Zhenevsky (7.Nf3 Bg4 8.e6)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6
        7. Nf3 {The White rider comes out, but walks into a pin.}
        Bg4 {Pin the rider that guards d4. Now d4 is under real pressure.}
        8. e6 {The White Kingdom sacrifices a soldier to break up your shield wall.}
        fxe6 {Take it: you are a soldier up, and the f-file road is open for your tower.}
        9. c5 {A White soldier kicks the b6 rider.}
        Nd5 {Your rider returns to the heartland, where no White soldier can chase it any more.}`,
    },
    {
      name: 'Exchange Variation: Voronezh (5.exd6 cxd6)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6
        5. exd6 {The Exchange Variation: the White Kingdom releases the tension and keeps a land edge with c4 and d4.}
        cxd6 {Recapture toward the heartland. You keep two heartland soldiers and get a half-open c-file road.}
        6. Nc3 g6 {Fianchetto: from g7 the priest will lean on d4.}
        7. Be3 Bg7 {The priest eyes d4 and the long diagonal road.}
        8. Rc1 O-O {Your King retreats into the castle; the g7 priest guards him.}
        9. b3 e5 {Strike the heartland at once before White finishes mobilising.}
        10. dxe5 dxe5 {Recapture: you now have a heartland soldier on e5 and an open d-file road.}
        11. Qxd8 Rxd8 {The Queens have left the field and your tower owns the open d-file.}
        12. c5 {A White soldier kicks your rider.}
        N6d7 {The safe retreat. From d7 the rider can hit c5 again or return to f6.}`,
    },
    {
      name: 'Two Pawns Attack: Mikenas Variation (4.c5)',
      pgn: `1. e4 Nf6 2. e5 Nd5
        3. c4 {The Chase Variation: the White soldiers hunt your rider.}
        Nb6 {Retreat; from b6 the rider still watches c4 and d5.}
        4. c5 {Again the soldier charges!}
        Nd5 {Back to d5, a great square now that White's c-pawn has marched past it.}
        5. Bc4 {The White priest attacks the rider.}
        e6 {Back the rider with a soldier.}
        6. Nc3 d6 {Attack the shield wall at once: c5 and e5 have run far ahead of their army and are hard to defend.}
        7. cxd6 cxd6 {Recapture toward the heartland. Next ...Nc6 and ...dxe5. (If White plays 7.Nxd5 exd5 8.Bxd5, take back on e5 with ...dxe5.)}`,
    },
    {
      name: 'Balogh Variation (4.Bc4)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6
        4. Bc4 {The White priest attacks the d5 rider and aims at f7.}
        Nb6 {Hit the priest. Careful: 4...dxe5 5.dxe5 Nb6?? loses to 6.Bxf7+.}
        5. Bb3 dxe5 {Take a heartland soldier.}
        6. Qh5 {The White Queen threatens mate with Qxf7.}
        e6 {Blocks the priest's road to f7, so the threat is gone.}
        7. dxe5 a5 {Threatens ...a4, chasing the b3 priest off its good diagonal road, and grabs queenside land.}`,
    },
    {
      name: 'Sämisch Attack (3.Nc3)',
      pgn: `1. e4 Nf6 2. e5 Nd5
        3. Nc3 {The White Kingdom sends out a rider and offers a rider trade.}
        Nxc3 {Trade: your rider will not be kicked around again.}
        4. dxc3 {White opens roads for the priest and Queen.}
        d6 {Attack the e5 soldier, as always.}
        5. Nf3 Nc6 {Another attacker on e5. Next ...dxe5 or ...Bg4 to remove its guard.}`,
    },
    {
      name: 'Scandinavian Variation (2.Nc3 d5 3.exd5)',
      pgn: `1. e4 Nf6
        2. Nc3 {A White rider simply guards e4 and dodges the main lines.}
        d5 {Grab your share of the heartland and attack e4 again.}
        3. exd5 Nxd5 {Recapture; your rider stands in the heartland.}
        4. Bc4 {The White priest attacks the rider.}
        Nb6 {Hit the priest and keep the rider away from trades.}
        5. Bb3 Nc6 {Another rider comes out. Next ...e5 or ...Bf5 gives you a comfortable war.}`,
    },
    {
      name: 'Scandinavian Variation: 3.e5 d4',
      pgn: `1. e4 Nf6 2. Nc3 d5
        3. e5 {A White soldier kicks your rider.}
        d4 {Counterattack: hit the c3 rider instead of retreating.}
        4. exf6 dxc3 {Take the rider back.}
        5. fxg7 cxd2+ {Check first, winning back material.}
        6. Bxd2 Bxg7 {Material is level and your priest is strong on the long diagonal road. (If 4.Nce2, play 4...Ng4.)}`,
    },
  ],
}
