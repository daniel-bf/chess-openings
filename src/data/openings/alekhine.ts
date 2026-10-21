import type { OpeningSource } from '../types'

export const alekhine: OpeningSource = {
  id: 'alekhine',
  name: "Alekhine's Defense",
  eco: 'B02–B05',
  side: 'black',
  summary:
    "Black attacks the e4 pawn with 1...Nf6 and invites White to chase the knight with pawns. White gains space, but every pawn that goes forward can become a target. Once the knight has settled (usually on d5 or b6), you hit the advanced e5 pawn with ...d6, develop quickly and attack White's big centre with pieces and pawn breaks such as ...dxe5, ...c5 or ...f6.",
  ideas: [
    'Let White chase the knight, then strike back: ...d6 at once attacks the e5 pawn, the spearhead of White\'s centre.',
    'Put pressure on d4 and e5 with pieces: ...Bg4 pins the f3 knight that guards them, and ...Nc6 hits d4 directly.',
    'The knight is happy on b6 when White has played c4: from there it watches c4 and d5, and can jump into c4 if that square is left unguarded.',
  ],
  lines: [
    {
      name: 'Modern: Main Line (4...Bg4 5.Be2)',
      pgn: `1. e4 Nf6 {Attack the e4 pawn straight away. White will usually chase the knight with pawns, and those pawns can later become targets.}
        2. e5 {White gains space and attacks the knight.}
        Nd5 {The best square: central, and no pawn can kick it at once.}
        3. d4 {White builds a broad centre.}
        d6 {Hit the e5 pawn immediately. You want to undermine White's centre before it gets support.}
        4. Nf3 {The Modern Variation: White simply defends e5 and develops.}
        Bg4 {Pin the f3 knight to the queen. That knight is the main defender of e5 and d4, so the pin adds pressure on both.}
        5. Be2 {Breaks the pin, the usual move.}
        e6 {A solid set-up: opens the way for the f8 bishop and gives the d5 knight a pawn behind it.}
        6. O-O Be7 {Develop and get ready to castle.}
        7. c4 {White kicks the knight away from the centre.}
        Nb6 {From b6 the knight eyes c4 and d5.}
        8. h3 {White asks the bishop to decide.}
        Bh5 {Keep the pin. Giving up the bishop for nothing would just hand White the two bishops.}
        9. Nc3 O-O {Castle; your king is safe and the rooks can join in.}
        10. Be3 {White guards d4 and covers the c5 square.}
        d5 {Fix the centre and hit c4. If White takes or pushes, your knights get good squares.}
        11. c5 {White gains space and kicks the b6 knight.}
        Bxf3 {Swap the knight first: after Bxf3 White's bishop leaves e2, so it no longer guards c4.}
        12. Bxf3 Nc4 {The knight lands on the hole on c4, hitting the e3 bishop and the b2 pawn.}
        13. b3 Nxe3 {Take White's good dark-squared bishop. After fxe3 White has doubled e-pawns and you can attack with ...b6 and ...Nc6.}`,
    },
    {
      name: 'Modern: Panov Variation (5.h3)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4
        5. h3 {White asks the question at once, ready to answer ...Bh5 with g4.}
        Bxf3 {Give up the bishop for the knight, the main defender of e5.}
        6. Qxf3 dxe5 {Now the e5 pawn has lost its knight, so take it.}
        7. dxe5 e6 {Solid: the d5 knight is supported and the f8 bishop can come out. Next ...Nc6 or ...Nd7 attacks the e5 pawn again.}`,
    },
    {
      name: 'Four Pawns Attack: Main Line (7.Be3)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6
        4. c4 {White chases the knight again.}
        Nb6 {The standard retreat, eyeing c4.}
        5. f4 {The Four Pawns Attack: White builds the biggest possible centre with pawns on c4, d4, e5 and f4.}
        dxe5 {Exchange first, so White has to recapture with the f-pawn.}
        6. fxe5 Nc6 {Now d4 is hit by the knight. White's centre is big but must be defended.}
        7. Be3 {Protects d4.}
        Bf5 {Develop the bishop outside the pawn chain, where it also covers d3 and b1.}
        8. Nc3 e6 {Opens the way for the f8 bishop and stops the e5 pawn from advancing to e6.}
        9. Nf3 Be7 {Develop and prepare to castle.}
        10. Be2 O-O {King to safety before opening the f-file.}
        11. O-O f6 {The key break: attack the e5 pawn and open the f-file for your rook.}
        12. exf6 Bxf6 {Recapture with the bishop: it now hits d4 together with the c6 knight.}
        13. Qd2 Qe7 {Connect the rooks. Next ...Rad8 piles up on d4, and ...e5 can open the centre.}`,
    },
    {
      name: 'Four Pawns Attack: Ilyin-Zhenevsky (7.Nf3 Bg4 8.e6)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6
        7. Nf3 {White develops, but leaves the knight open to a pin.}
        Bg4 {Pin the knight that defends d4. Now d4 is under real pressure.}
        8. e6 {White gives a pawn to break up your pawns.}
        fxe6 {Take it: you are a pawn up, and the f-file is open for your rook.}
        9. c5 {White kicks the b6 knight.}
        Nd5 {The knight goes back to the centre, where no White pawn can chase it any more.}`,
    },
    {
      name: 'Exchange Variation: Voronezh (5.exd6 cxd6)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6
        5. exd6 {The Exchange Variation: White releases the tension and keeps a space edge with c4 and d4.}
        cxd6 {Recapture towards the centre. You keep two central pawns and get a half-open c-file.}
        6. Nc3 g6 {Fianchetto: on g7 the bishop puts pressure on d4.}
        7. Be3 Bg7 {The bishop eyes d4 and the long diagonal.}
        8. Rc1 O-O {Castle; the g7 bishop guards your king.}
        9. b3 e5 {Strike at the centre straight away before White finishes developing.}
        10. dxe5 dxe5 {Recapture: you now have a central pawn on e5 and an open d-file.}
        11. Qxd8 Rxd8 {The queens are gone and your rook owns the open d-file.}
        12. c5 {White kicks the knight.}
        N6d7 {The safe retreat. From d7 the knight can hit c5 again or come back to f6.}`,
    },
    {
      name: 'Two Pawns Attack: Mikenas Variation (4.c5)',
      pgn: `1. e4 Nf6 2. e5 Nd5
        3. c4 {The Chase Variation: White hunts the knight with pawns.}
        Nb6 {Retreat; from b6 the knight still watches c4 and d5.}
        4. c5 {Again!}
        Nd5 {Back to d5, a great square now that White's c-pawn has gone past it.}
        5. Bc4 {Attacks the knight.}
        e6 {Support the knight with a pawn.}
        6. Nc3 d6 {Attack the pawn chain at once: c5 and e5 have run far ahead and are hard to defend.}
        7. cxd6 cxd6 {Recapture towards the centre. Next ...Nc6 and ...dxe5. (If White plays 7.Nxd5 exd5 8.Bxd5, take back on e5 with ...dxe5.)}`,
    },
    {
      name: 'Balogh Variation (4.Bc4)',
      pgn: `1. e4 Nf6 2. e5 Nd5 3. d4 d6
        4. Bc4 {The bishop attacks the d5 knight and aims at f7.}
        Nb6 {Hit the bishop. Careful: 4...dxe5 5.dxe5 Nb6?? loses to 6.Bxf7+.}
        5. Bb3 dxe5 {Take a central pawn.}
        6. Qh5 {Threatens mate with Qxf7.}
        e6 {Blocks the bishop's line to f7, so the threat is gone.}
        7. dxe5 a5 {Threatens ...a4, chasing the b3 bishop off its good diagonal, and gains queenside space.}`,
    },
    {
      name: 'Sämisch Attack (3.Nc3)',
      pgn: `1. e4 Nf6 2. e5 Nd5
        3. Nc3 {White develops and offers a knight swap.}
        Nxc3 {Swap: it stops the knight being kicked around again.}
        4. dxc3 {White opens lines for the bishop and queen.}
        d6 {Attack the e5 pawn, as always.}
        5. Nf3 Nc6 {Another attacker on e5. Next ...dxe5 or ...Bg4 to remove its defender.}`,
    },
    {
      name: 'Scandinavian Variation (2.Nc3 d5 3.exd5)',
      pgn: `1. e4 Nf6
        2. Nc3 {White simply defends e4 and avoids the main lines.}
        d5 {Grab your share of the centre and attack e4 again.}
        3. exd5 Nxd5 {Recapture; the knight is centralised.}
        4. Bc4 {The bishop attacks the knight.}
        Nb6 {Hit the bishop and keep the knight out of the way of trades.}
        5. Bb3 Nc6 {Develop. Next ...e5 or ...Bf5 gives you a comfortable game.}`,
    },
    {
      name: 'Scandinavian Variation: 3.e5 d4',
      pgn: `1. e4 Nf6 2. Nc3 d5
        3. e5 {White kicks the knight.}
        d4 {Counterattack: hit the c3 knight instead of retreating.}
        4. exf6 dxc3 {Take the knight back.}
        5. fxg7 cxd2+ {Check first, regaining material.}
        6. Bxd2 Bxg7 {Material is level and your bishop is strong on the long diagonal. (If 4.Nce2, play 4...Ng4.)}`,
    },
  ],
}
