import type { OpeningSource } from '../types'

export const openGamesBlack: OpeningSource = {
  id: 'open-games-black',
  name: '1.e4 e5 for Black',
  eco: 'C20–C67',
  side: 'black',
  summary:
    'A complete answer to 1.e4 with 1...e5. After 2.Nf3 Nc6 you meet the Ruy Lopez with the solid Berlin Defence (3...Nf6), the Italian with the Two Knights Defence (also 3...Nf6), and the Scotch and Four Knights with quick development and ...Bb4 or ...Nf6 pressure on e4. Against the Vienna, King\'s Gambit, Bishop\'s Opening, Ponziani and Centre Game you strike back in the centre with ...Nf6 and ...d5 instead of just defending.',
  ideas: [
    "Attack the e4 pawn. ...Nf6 hits it in almost every line, and often you can take it (the Berlin, the Vienna 3.Bc4 Nxe4, the Ponziani 4...Nxe4) because you get it back or keep it safely.",
    'Hit back in the centre with ...d5. It frees your pieces, blunts a bishop on c4 and is the best answer to most early White gambits (Two Knights 4.Ng5, Vienna 3.f4, King\'s Gambit).',
    'Develop with gain of time: ...Bb4 pins a knight on c3, ...Nf6 and ...Nc6 hit pawns, and the bishop on c5 or b4 gets out before ...d6 closes it in.',
  ],
  lines: [
    {
      name: 'Ruy Lopez: Berlin Wall Endgame (9.Nc3 Bd7)',
      pgn: `1. e4 e5 {Take your share of the centre and open lines for the queen and the f8 bishop.}
        2. Nf3 {Attacks the e5 pawn.}
        Nc6 {Defend e5 while developing.}
        3. Bb5 {The Ruy Lopez: the bishop attacks the knight that defends e5.}
        Nf6 {The Berlin Defence: counterattack the e4 pawn instead of defending.}
        4. O-O {White leaves e4 hanging, planning Re1 or d4 to get it back.}
        Nxe4 {Take it. White will regain the pawn, but you get easy development.}
        5. d4 {Opens the e-file and threatens d5 or dxe5.}
        Nd6 {The knight hits the b5 bishop and guards against tricks along the e-file.}
        6. Bxc6 dxc6 {Recapture away from the centre: this opens the d-file and the c8 bishop's diagonal, so your two bishops come to life.}
        7. dxe5 Nf5 {The only good square; from f5 the knight watches d4, e7 and h4.}
        8. Qxd8+ Kxd8 {The Berlin endgame. You can no longer castle, but with queens off your king is safe and you own the two bishops.}
        9. Nc3 Bd7 {Connect the rooks and prepare ...Kc8.}
        10. h3 h6 {Takes g5 away from White's knight and bishop, a typical Berlin move.}
        11. b3 Kc8 {The king walks to the queenside, where it is safe and guards your pawns.}
        12. Bb2 b6 {Makes room for ...Kb7 and prepares ...c5, using your extra queenside pawn.}`,
    },
    {
      name: 'Ruy Lopez: Berlin, Anti-Berlin (4.d3 Bc5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6
        4. d3 {The Anti-Berlin: White simply guards e4 and keeps the queens on.}
        Bc5 {The active square: the bishop aims at f2 and gets out before ...d6.}
        5. c3 {Prepares d4 and gives the bishop a retreat.}
        O-O {Castle early; your king is safe and the rook can come to e8.}
        6. O-O d5 {Strike in the centre while White is still slow.}
        7. exd5 Qxd5 {Recapture with the queen, which now attacks the b5 bishop.}
        8. Bc4 {The bishop retreats with an attack on your queen.}
        Qd6 {A safe square where the queen guards e5 and eyes h2.}`,
    },
    {
      name: 'Two Knights: Polerio Defence (4.Ng5 d5 5.exd5 Na5)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. Bc4 {The Italian: the bishop aims at f7, the weakest point near your king.}
        Nf6 {The Two Knights Defence: develop and attack e4 at once.}
        4. Ng5 {White attacks f7 a second time.}
        d5 {Block the bishop's line to f7. It is the main move.}
        5. exd5 Na5 {Do NOT retake with the knight (that allows the dangerous Fried Liver sacrifice on f7). Instead hit the c4 bishop.}
        6. Bb5+ c6 {Block the check with gain of time: the pawn attacks d5.}
        7. dxc6 bxc6 {You are a pawn down, but you gain lots of time chasing White's pieces. This is a well-known gambit.}
        8. Be2 h6 {Kick the knight from g5.}
        9. Nf3 e4 {Kick the knight again.}
        10. Ne5 Bd6 {Develop and attack the e5 knight.}
        11. d4 exd3 {Take en passant (the pawn on e4 takes the d-pawn as if it had moved one square).}
        12. Nxd3 Qc7 {The queen hits h2 and connects your pieces. After ...O-O your active pieces make up for the pawn.}`,
    },
    {
      name: 'Two Knights: 4.d3 into the Giuoco Pianissimo Main Line',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6
        4. d3 {The quiet main line: White guards e4 and plays slowly (the Giuoco Pianissimo).}
        Bc5 {The most common reply: an active bishop aimed at f2.}
        5. c3 d6 {Firmly support e5.}
        6. O-O O-O {Castle.}
        7. Re1 a6 {Gives the bishop a retreat on a7, so White's b4 or d4 will not come with gain of time.}
        8. Bb3 Ba7 {The bishop keeps aiming at f2 from a safe square.}
        9. h3 h6 {Stops Ng5 and Bg5. Both sides manoeuvre before ...Re8, ...Be6 or ...d5.}`,
    },
    {
      name: 'Scotch Gambit: Max Lange Attack (4.d4 exd4 5.e5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6
        4. d4 {White opens the centre at once.}
        exd4 {Take the pawn.}
        5. e5 {White kicks the knight.}
        d5 {Counterattack the c4 bishop rather than retreat the knight.}
        6. Bb5 Ne4 {The knight goes to a strong central square.}
        7. Nxd4 Bd7 {Break the pin on the c6 knight.}
        8. Bxc6 bxc6 {Recapture; the b-pawn now supports d5.}
        9. O-O Bc5 {Develop and hit the d4 knight. (Against 5.O-O, take with 5...Nxe4.)}
        10. f3 Ng5 {Step back from f3's attack; the knight heads for e6 to challenge d4.}`,
    },
    {
      name: 'Scotch: Mieses Variation (4...Nf6)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. d4 {The Scotch: White opens the centre straight away.}
        exd4 {Take the pawn; you cannot hold e5 comfortably.}
        4. Nxd4 Nf6 {Develop and attack e4. (After 5.Nc3, play 5...Bb4 as in the Scotch Four Knights.)}
        5. Nxc6 bxc6 {Recapture towards the centre; the b-pawn supports ...d5.}
        6. e5 {Kicks the f6 knight.}
        Qe7 {Pin the e5 pawn to White's king on e1: it cannot take your knight, and the queen attacks it, so White must defend it.}
        7. Qe2 Nd5 {The knight goes to a strong central square.}
        8. c4 Ba6 {Pin the c4 pawn to White's queen on e2, so the d5 knight is not chased away for free.}
        9. b3 g6 {Prepare ...Bg7 to attack e5 again, then castle.}`,
    },
    {
      name: 'Four Knights: Spanish, Metger Unpin (4.Bb5 Bb4)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. Nc3 {The Four Knights Game.}
        Nf6 {Develop and hit e4.}
        4. Bb5 {The Spanish Four Knights.}
        Bb4 {Copy White: pin the c3 knight.}
        5. O-O O-O {Castle, like White.}
        6. d3 d6 {Solid: guard e5 and open the c8 bishop.}
        7. Bg5 {Pin the f6 knight.}
        Bxc3 {Take the knight first: White gets doubled c-pawns.}
        8. bxc3 Qe7 {The Metger unpin: the queen gets off the d8-h4 line so the pin on f6 is harmless.}
        9. Re1 Nd8 {The knight heads for e6 to hit the g5 bishop.}
        10. d4 Ne6 {Attack the bishop on g5 and watch d4, f4 and g5.}`,
    },
    {
      name: 'Four Knights: Scotch Variation, Main Line (4.d4)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6
        4. d4 {The Scotch Four Knights.}
        exd4 {Take the pawn; it opens the e-file and your bishops.}
        5. Nxd4 Bb4 {Pin the c3 knight, which threatens ...Nxe4.}
        6. Nxc6 bxc6 {Recapture towards the centre; the b-pawn now supports ...d5.}
        7. Bd3 {Protects e4.}
        d5 {Strike at e4: it is now attacked three times.}
        8. exd5 O-O {Castle first; the d5 pawn will not run away.}
        9. O-O cxd5 {Win the pawn back and get a strong pawn on d5.}
        10. Bg5 c6 {Support the d5 pawn. Next ...h6 or ...Be7 deals with the pin.}`,
    },
    {
      name: 'Vienna Gambit: Breyer Variation (3.f4 d5)',
      pgn: `1. e4 e5
        2. Nc3 {The Vienna Game.}
        Nf6 {Develop and attack e4. (If 3.Nf3, play 3...Nc6, the Four Knights.)}
        3. f4 {The Vienna Gambit, attacking e5.}
        d5 {Hit back in the centre; this is the main move.}
        4. fxe5 Nxe4 {The knight lands on a great central square and hits c3.}
        5. Nf3 Be7 {Quiet development, getting ready to castle. (Against 5.Qf3, play 5...Nc6 or 5...f5; against 5.d3, 5...Nxc3 6.bxc3 d4.)}
        6. d4 O-O {Castle before opening any lines.}
        7. Bd3 f5 {Support the e4 knight, your best piece.}
        8. exf6 Bxf6 {White took en passant; recapture with the bishop. The f-file is open for your rook and the bishop hits d4.}`,
    },
    {
      name: 'Vienna: Stanley Variation (3.Bc4 Nxe4)',
      pgn: `1. e4 e5 2. Nc3 Nf6
        3. Bc4 {The bishop aims at f7.}
        Nxe4 {Take the pawn. If 4.Nxe4, ...d5 forks bishop and knight and wins the piece back.}
        4. Qh5 {Threatens Qxf7 mate.}
        Nd6 {Blocks the bishop's attack on f7 and hits the c4 bishop.}
        5. Bb3 Be7 {Calm development, avoiding the wild lines after 5...Nc6.}
        6. Nf3 Nc6 {Defend e5.}
        7. Nxe5 O-O {Castle: now f7 is guarded by the rook too.}
        8. O-O Nd4 {Attack the b3 bishop and head for the centre.}`,
    },
    {
      name: "King's Gambit Accepted: Abbazia (Modern) Defence (3...d5)",
      pgn: `1. e4 e5
        2. f4 {The King's Gambit: White offers a pawn to open the f-file.}
        exf4 {Accept the pawn.}
        3. Nf3 {Develops and stops ...Qh4+.}
        d5 {The Modern Defence: give back a central pawn to open lines for your pieces.}
        4. exd5 Nf6 {Develop and attack d5. (Against 5.Bc4 take with 5...Nxd5.)}
        5. Bb5+ c6 {Block the check by offering another pawn; it gains time for your development.}
        6. dxc6 Nxc6 {You develop with gain of time.}
        7. d4 Bd6 {Develop and protect the f4 pawn.}
        8. O-O O-O {Castle; now you are ready to pin the f3 knight.}
        9. Nbd2 Bg4 {Pin the knight and press on d4.}
        10. c3 Bc7 {Keep guarding f4 from a safe square where the bishop cannot be hit by Nc4.}`,
    },
    {
      name: "Bishop's Opening: Paulsen Defence (3.d3 c6)",
      pgn: `1. e4 e5
        2. Bc4 {The Bishop's Opening: the bishop aims at f7.}
        Nf6 {Develop and hit e4. (After 3.Nc3, play 3...Nxe4 as in the Vienna.)}
        3. d3 {Guard e4.}
        c6 {Prepare ...d5 to take the centre and blunt the c4 bishop.}
        4. Nf3 d5 {Take the centre and attack e4.}
        5. Bb3 Bd6 {Protect e5 and develop.}
        6. O-O O-O {Castle; then ...Re8 or ...Nbd7 with a nice centre.}`,
    },
    {
      name: 'Ponziani: Jaenisch Counterattack (3...Nf6)',
      pgn: `1. e4 e5 2. Nf3 Nc6
        3. c3 {The Ponziani: White prepares d4.}
        Nf6 {The safest reply: hit e4 at once.}
        4. d4 Nxe4 {Take the pawn.}
        5. d5 {Kicks the c6 knight.}
        Ne7 {The usual retreat; the knight heads for g6.}
        6. Nxe5 Ng6 {Challenge the strong e5 knight.}
        7. Nxg6 hxg6 {Take back towards the centre; your rook on h8 now has the open h-file.}
        8. Qe2 {Pins the e4 knight against your king.}
        Qe7 {Block the e-file and guard the knight.}
        9. Bf4 d6 {Guard the c7 and e5 squares and open the c8 bishop, which will support the knight from f5.}`,
    },
    {
      name: 'Centre Game: Berger Variation (4.Qe3 Nf6)',
      pgn: `1. e4 e5
        2. d4 {The Centre Game.}
        exd4 {Take the pawn: White has to recapture with the queen.}
        3. Qxd4 {White's queen comes out early.}
        Nc6 {Develop with an attack on the queen.}
        4. Qe3 Nf6 {Develop and attack e4.}
        5. Nc3 Bb4 {Pin the c3 knight, which guards e4.}
        6. Bd2 O-O {Castle, ready to put the rook on the open e-file.}
        7. O-O-O Re8 {Attack e4. The pawn is pinned to White's queen on e3, so it is hard to defend.}`,
    },
  ],
}
