import type { OpeningSource } from '../types'

export const caroKann: OpeningSource = {
  id: 'caro-kann',
  name: 'Caro-Kann Defense',
  eco: 'B10–B19',
  side: 'black',
  summary:
    'A rock-solid reply to 1.e4. Black prepares ...d5 with the c-pawn instead of the e-pawn, so the light-squared bishop can still come out to f5 or g4 before ...e6 closes its path. That fixes the main problem of the French, at the cost of a little time. Black aims for a healthy pawn structure with no weaknesses, completes development, and is often happy to reach an endgame where that sound structure counts.',
  ideas: [
    'Get the light-squared bishop out to f5 or g4 first, then play ...e6 behind it.',
    'Keep a sound pawn structure; swap pieces calmly and the better pawns will tell in the endgame.',
    'Against the Advance, hit the base of the chain with ...c5, as in the French but with your bishop already outside.',
  ],
  lines: [
    {
      name: 'Classical: 4...Bf5',
      pgn: `1. e4 c6 {The Caro-Kann. It prepares ...d5 while keeping the c8 bishop's path open.}
        2. d4 d5 {Challenge e4 at once, with the c6 pawn ready to support d5.}
        3. Nc3 {Defends e4.}
        dxe4 {Swap in the centre; White's knight takes back.}
        4. Nxe4 Bf5 {The Classical: develop the bishop with an attack on the knight.}
        5. Ng3 {Attacks the bishop.}
        Bg6 {Keep the bishop on its good diagonal.}
        6. h4 {Threatens h5, which would trap the bishop on g6.}
        h6 {Gives the bishop the h7 square to escape to.}
        7. Nf3 {The knight wants Ne5 to hit the g6 bishop.}
        Nd7 {Covers e5 so the knight cannot jump there.}
        8. h5 {Chases the bishop and grabs kingside space.}
        Bh7 {The bishop steps back but keeps looking at d3.}
        9. Bd3 Bxd3 {Swap bishops: yours could get stuck on h7, and White's was a strong attacker.}
        10. Qxd3 e6 {Now that the bishop is out, ...e6 builds the solid pawn wall.}
        11. Bd2 Ngf6 {Develops and gets ready to castle.}
        12. O-O-O Be7 {Solid. You can castle short (the h5 pawn takes the sting out of g4-g5) or keep the king flexible.}`,
    },
    {
      name: 'Advance: Short Variation (4.Nf3 e6 5.Be2)',
      pgn: `1. e4 c6 2. d4 d5
        3. e5 {The Advance: White gains space and cramps your kingside.}
        Bf5 {Develop the bishop before ...e6 locks it in.}
        4. Nf3 e6 {Builds the pawn wall now that the bishop is outside.}
        5. Be2 {The Short Variation: quiet development, then castling.}
        c5 {The typical break against d4, the base of White's chain.}
        6. Be3 cxd4 {Swap now, so White must take back with a piece.}
        7. Nxd4 Ne7 {The knight heads for c6 or g6 to hit d4 and e5.}
        8. O-O Nbc6 {Both knights now challenge White's centre, and your development is easy.}`,
    },
    {
      name: 'Advance: 4.Bd3',
      pgn: `1. e4 c6 2. d4 d5 3. e5 Bf5
        4. Bd3 {White offers to swap bishops.}
        Bxd3 {Take: White's bishop was a good attacker, and you are glad to swap yours.}
        5. Qxd3 e6 {Builds the pawn wall.}
        6. Nf3 Qb6 {Pressure on d4 and b2, preparing ...c5.}
        7. O-O c5 {Hit the base of the chain. You have a French structure without the French problem bishop.}`,
    },
    {
      name: 'Exchange Variation',
      pgn: `1. e4 c6 2. d4 d5
        3. exd5 {The Exchange: the centre opens up.}
        cxd5 {Take back with the c-pawn: you get the half-open c-file.}
        4. Bd3 Nc6 {Develops and eyes d4.}
        5. c3 Nf6 {Develop towards the kingside.}
        6. Bf4 Bg4 {Develop the bishop before ...e6, and it hits the d1 queen.}
        7. Qb3 {Attacks b7 and d5.}
        Qd7 {Defends b7 and keeps the queens on.}
        8. Nd2 e6 {Solid: supports d5 and opens the f8 bishop.}
        9. Ngf3 Bd6 {Challenge White's active f4 bishop.}
        10. Bxd6 Qxd6 {Equal. Your plan is a minority attack: push ...b5-b4 against White's c3 pawn.}`,
    },
    {
      name: 'Panov-Botvinnik Attack',
      pgn: `1. e4 c6 2. d4 d5 3. exd5 cxd5
        4. c4 {The Panov: White is willing to get an isolated d-pawn for active pieces.}
        Nf6 {Develop and add pressure on d5.}
        5. Nc3 e6 {Solid: supports d5 and frees the f8 bishop.}
        6. Nf3 Be7 {Get ready to castle.}
        7. cxd5 Nxd5 {Put the knight on d5, the square right in front of White's isolated pawn (a blockade).}
        8. Bd3 Nc6 {Attacks d4.}
        9. O-O O-O {King to safety.}
        10. Re1 Bf6 {A third attacker on d4. The more pieces come off, the weaker that pawn gets.}`,
    },
    {
      name: 'Two Knights (2.Nc3 d5 3.Nf3)',
      pgn: `1. e4 c6
        2. Nc3 {White develops and keeps the d-pawn flexible.}
        d5 {Still challenge e4.}
        3. Nf3 {The Two Knights Variation.}
        Bg4 {Pin the knight, which would like to go to e5.}
        4. h3 Bxf3 {Swap at once: retreating would invite g4 and the bishop gets chased.}
        5. Qxf3 e6 {Solid centre: c6, d5 and e6 limit White's bishops.}
        6. d3 Nf6 {Develops.}
        7. Be2 Nbd7 {Supports the f6 knight and covers e5.}
        8. O-O Bd6 {Develop and castle next. White has the two bishops but nothing to attack.}`,
    },
    {
      name: 'Classical: 6.Nf3 move order',
      pgn: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6
        6. Nf3 {White develops before pushing h4.}
        Nd7 {Stops Ne5, which would hit the g6 bishop.}
        7. h4 h6 {The bishop gets h7 as a retreat square.}
        8. h5 Bh7 {Step back from the h5 pawn.}
        9. Bd3 Bxd3 {Swap bishops as in the main line.}
        10. Qxd3 e6 {The same position as the main line.}`,
    },
    {
      name: 'Classical: 5.Nc5',
      pgn: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5
        5. Nc5 {The knight attacks b7.}
        b6 {Defends b7 by kicking the knight away.}
        6. Nb3 e6 {Now the pawn wall goes up behind the bishop.}
        7. Nf3 Nd7 {Covers e5 and c5.}
        8. Bd3 Bxd3 {Swap bishops: White's was the dangerous one.}
        9. Qxd3 Ngf6 {A solid Classical set-up. White's knight on b3 is a bit offside.}`,
    },
    {
      name: 'Fantasy Variation (3.f3)',
      pgn: `1. e4 c6 2. d4 d5
        3. f3 {The Fantasy: White supports e4 with a pawn and wants a big centre.}
        e6 {Hold d5 solidly; the f3 pawn blocks White's own knight from f3.}
        4. Nc3 Bb4 {Pin the knight that defends e4.}
        5. Bf4 Nf6 {Another attacker on e4.}
        6. e5 Nfd7 {The knight retreats and prepares ...c5 against White's chain.}
        7. a3 Bxc3+ {Swap: White gets doubled c-pawns.}
        8. bxc3 c5 {Hit d4 as in a French.}
        9. Nh3 Nc6 {More pressure on d4. White's f3 pawn leaves the e3 square and the king a little weak.}`,
    },
    {
      name: 'Accelerated Panov (2.c4)',
      pgn: `1. e4 c6
        2. c4 {White plays c4 before d4.}
        d5 {Challenge the centre anyway.}
        3. exd5 cxd5 {Take back.}
        4. cxd5 Nf6 {Win the pawn back with a developing move instead of the queen.}
        5. Nc3 Nxd5 {The pawn is regained and the knight is central.}
        6. Nf3 Nc6 {Develops and eyes d4.}
        7. Bb5 e6 {Opens the f8 bishop so you can castle.}
        8. O-O Be7 {Get ready to castle.}
        9. d4 O-O {Now White has an isolated d-pawn and your d5 knight blockades it.}`,
    },
  ],
}
