import type { OpeningSource } from '../types'

export const italian: OpeningSource = {
  id: 'italian',
  name: 'Italian Game',
  eco: 'C50–C59',
  side: 'white',
  summary:
    "The Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4) puts the bishop on its most natural square, aimed at f7: early in the game only Black's king defends that pawn. Today White rarely attacks straight away. Instead you play the slow Giuoco Pianissimo (\"very quiet game\"): c3, d3, castle, Re1 and h3, bring the queen's knight round to g3, and break with d4 only when everything is ready.",
  ideas: [
    'The c4 bishop eyes f7, the weakest point in Black\'s camp, so tactics with Ng5 and Bxf7+ are always in the air.',
    'Build a small, solid centre with c3 and d3 first. c3 also prepares the d4 break and gives the bishop a retreat.',
    'Manoeuvre before you strike: Re1, h3 and the knight trip Nbd2-f1-g3, then choose between d4 in the centre and a4 or b4 on the queenside.',
  ],
  lines: [
    {
      name: 'Giuoco Pianissimo: main line',
      pgn: `1. e4 {Takes a central square and opens lines for the queen and the f1 bishop.}
        e5 {Black claims an equal share of the centre.}
        2. Nf3 {Develops with a threat: the e5 pawn is attacked.}
        Nc6 {The most natural way to defend e5.}
        3. Bc4 {The Italian Game. The bishop aims at f7, a pawn that only Black's king protects.}
        Bc5 {The Giuoco Piano ("quiet game"). Black copies White and points the bishop at f2.}
        4. c3 {Prepares d4 to build a big centre, and gives the bishop a retreat square on c2 later.}
        Nf6 {Develops and attacks e4.}
        5. d3 {The Giuoco Pianissimo. You protect e4 calmly and keep d4 for later, when it is well prepared.}
        d6 {Black supports e5 too. Neither side is in a hurry.}
        6. O-O {King safety first, before the centre opens.}
        a6 {Makes room for ...Ba7, where the bishop keeps aiming at f2 but cannot be hit by b4 or d4.}
        7. a4 {Stops ...b5, which would gain space and chase your bishop, and frees a2 as a retreat square for it.}
        Ba7 {The bishop steps back to safety, still pointing at f2.}
        8. Re1 {The rook backs up e4 and frees f1, so the queen's knight can travel d2-f1-g3.}
        O-O
        9. h3 {Takes g4 away from Black's bishop and knight: no annoying pin on your f3 knight and no ...Ng4 hitting f2.}
        h6 {Black does the same thing and keeps your pieces off g5.}
        10. Nbd2 {The knight starts its classic journey: d2, then f1, then g3.}
        Re8 {Black adds a rook to the defence of e5.}
        11. Nf1 {The second step. After Ng3 the knight eyes f5 and h5 near Black's king, and you can choose between d4, b4 or Be3.}`,
    },
    {
      name: 'Giuoco Piano: 6...d5 break',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3
        O-O {Black castles first and keeps the ...d5 break in reserve.}
        6. O-O {Castle as well. Your king is safe before Black opens the centre.}
        d5 {Black strikes in the centre straight away, before you are ready for d4.}
        7. exd5 {Take. This removes Black's central pawn and opens the e-file.}
        Nxd5 8. Re1 {Now e5 is the target: the rook attacks it, and with Black's d-pawn gone only the c6 knight defends it.}
        Bg4 {Pins your f3 knight to the queen, so it cannot capture on e5.}
        9. h3 {Asks the bishop to decide: give up the bishop pair with ...Bxf3, or keep the pin with ...Bh5.}
        Bh5 10. Nbd2 {Develops and heads for e4, where the knight hits the c5 bishop. Your rook, knight and bishop all keep an eye on e5.}`,
    },
    {
      name: 'Two Knights: 4.d3 main line',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Nf6 {The Two Knights Defence. Instead of copying with ...Bc5, Black develops and attacks e4.}
        4. d3 {Protects e4 calmly. You avoid the sharp 4.Ng5 lines and go for the same slow build-up as in the Giuoco Piano.}
        Be7 {A modest but solid square. Black plans ...O-O and ...d6.}
        5. O-O {King safety first.}
        O-O 6. Re1 {Backs up e4 and puts the rook on the same file as e5, which matters as soon as the centre opens.}
        d6 {The correct way to hold e5 (see the 6...d5 line for what goes wrong otherwise).}
        7. c3 {Prepares d4 and gives your bishop the c2 square.}
        Na5 {Attacks the c4 bishop: Black wants to trade off your best minor piece.}
        8. Bb5 {Sidestep the trade. The bishop will go a4 and then c2, just like in the Ruy Lopez.}
        a6 9. Ba4 {Stay on the diagonal. If ...b5, the bishop simply drops back to c2.}
        b5 10. Bc2 {The bishop ends up on c2, where it defends e4 and points at Black's kingside.}
        c5 {Black gains queenside space. The position now looks just like a Closed Ruy Lopez.}
        11. Nbd2 {Same plan as in the Ruy Lopez: the knight heads for f1 and g3, and d4 comes later.}`,
    },
    {
      name: 'Two Knights: 4...Bc5',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3
        Bc5 {Transposes to the Giuoco Piano: the same set-up reached by a different move order.}
        5. c3 {Back in the Giuoco Pianissimo: c3 prepares d4 and gives the bishop a retreat.}
        d6 6. O-O O-O {Black castles before playing ...a6 this time.}
        7. Re1 {Backs up e4 and frees f1 for the knight's trip to g3.}
        a6 8. a4 {Stops ...b5 and keeps a2 free as a retreat for your bishop.}
        Ba7 9. h3 {The same position as the main line by a different order. h3 stops ...Bg4 and ...Ng4.}`,
    },
    {
      name: 'Hungarian Defence (3...Be7)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Be7 {The Hungarian Defence: very solid but passive, because the bishop does nothing against your position.}
        4. d4 {Against a passive set-up, open the centre at once and use your faster development.}
        exd4 {Black gives up the centre.}
        5. Nxd4 {Take back with the knight, which stands well on d4.}
        d6 6. O-O {Castle. Black has not developed the g8 knight yet, so e4 is not under attack.}
        Nf6 {Now Black attacks e4.}
        7. Nc3 {Develops and defends e4.}
        O-O 8. h3 {With your knight gone from f3, ...Bg4 would attack your queen and ...Ng4 could jump in. h3 stops both. You have more space and freer pieces.}`,
    },
    {
      name: 'Blackburne Shilling Gambit (3...Nd4)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Nd4 {The Blackburne Shilling Gambit, a cheap trap that leaves e5 hanging on purpose.}
        4. Nxd4 {Just take the knight. Not 4.Nxe5? Qg5!, hitting the knight and g2: after 5.Nxf7? Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3 is mate.}
        exd4 5. O-O {Castle. You are ahead in development and Black's pawn on d4 is cut off from its friends.}
        Bc5 {A natural move, but it walks into a tactic.}
        6. Bxf7+ {Wins a pawn. If 6...Kxf7, 7.Qh5+ gives check and then takes the loose bishop on c5.}
        Kf8 {Black avoids the fork but can no longer castle.}
        7. d3 {Opens the c1 bishop. The bishop on f7 is still safe: 7...Kxf7 runs into 8.Qh5+ and 9.Qxc5.}
        Nf6 8. Bb3 {Now the bishop retreats to safety, still aiming at g8 and Black's king.}
        d6 9. Nd2 {Develops the last minor piece. Next comes f4 to open the f-file against Black's king on f8. You are a pawn up with the safer king.}`,
    },
    {
      name: "Giuoco Piano: 4...Qe7",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3
        Qe7 {The queen guards e5 in advance, so that your d4 does not simply win the centre.}
        5. d4 {Take the centre anyway. The e5 pawn is attacked again and Black has to give ground.}
        Bb6 {The bishop steps back but keeps aiming at d4 and f2.}
        6. O-O {Castle. d4 is well supported by c3 and the f3 knight, so there is no hurry.}
        d6 7. a4 {Threatens a5, chasing the b6 bishop off its good diagonal.}
        a6 {Gives the bishop a7 as an escape square.}
        8. h3 {Stops ...Bg4, which would pin the f3 knight, an important defender of d4. Next you can choose between Re1, d5 or a5.}`,
    },
    {
      name: "Paris Defence (3...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        d6 {Solid but passive: the pawn on d6 shuts in the f8 bishop.}
        4. d4 {Against a passive set-up, open the centre at once.}
        exd4 5. Nxd4 {Take back with the knight, a strong central piece.}
        Nf6 6. Nc3 {Develops and defends e4, which the f6 knight attacks.}
        Be7 7. O-O {Castle. This is the same position as in the Hungarian Defence, and you are freer there.}
        O-O 8. h3`,
    },
    {
      name: "Two Knights: 4...h6 with ...g6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3
        h6 {Keeps your knight and bishop off g5 and prepares ...g6 and ...Bg7 (a "fianchetto": the bishop goes on the long diagonal).}
        5. O-O {Castle, as usual.}
        d6 6. c3 {Prepares d4.}
        g6 7. Re1 {Backs up e4 so it does not hang once the centre opens.}
        Bg7 8. d4 {With c3 and Re1 in place, strike now. You gain central space and the g7 bishop runs into a solid pawn chain.}`,
    },
    {
      name: "Two Knights: 6...d5 drops e5",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Be7 5. O-O O-O 6. Re1
        d5 {Looks natural, but with your rook already on e1 it loses a pawn.}
        7. exd5 {Take first. After ...Nxd5, the e5 pawn has lost its d-pawn support.}
        Nxd5 8. Nxe5 {Wins a pawn: if 8...Nxe5, 9.Rxe5 and the rook is safe.}
        Nxe5 9. Rxe5 {The rook takes back. The d5 knight is now attacked twice, by the rook and the c4 bishop.}
        c6 {Black defends the d5 knight a second time.}
        10. Re1 {Bring the rook home before ...Bd6 or ...Bf6 hits it. You are a clean pawn up: finish development with Nd2 and Nf3.}`,
    },
    {
      name: "Giuoco Pianissimo: 9...Ne7",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. a4 Ba7 8. Re1 O-O 9. h3
        Ne7 {The knight heads for g6 and the kingside, but it no longer guards d4 and e5.}
        10. d4 {Strike now. With the c6 knight gone, d4 hits e5 and Black cannot easily pressure your centre.}
        Ng6 11. Nbd2 {Develops and supports e4. The knight can still go to f1 and g3 later, and you keep a strong centre.}`,
    },
  ],
}
