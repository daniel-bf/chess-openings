import type { OpeningSource } from '../types'

export const petroff: OpeningSource = {
  id: "petroff",
  name: "Petrov's Defense",
  eco: "C42–C43",
  side: "black",
  summary:
    "Petrov's Defence (also called the Russian Game) answers 1.e4 e5 2.Nf3 with 2...Nf6: instead of defending your e5 pawn, you attack White's e4 pawn. It is one of the most solid defences in chess. Positions are often symmetrical and pieces get traded, but you must know one key trick: after 3.Nxe5, play 3...d6 first and only then take on e4.",
  ideas: [
    "After 3.Nxe5, kick the knight with 3...d6 before taking e4. 3...Nxe4? runs into 4.Qe2!, when your knight is stuck on the e-file in front of your king (4...Nf6?? 5.Nc6+ wins your queen).",
    "Your knight on e4 is a strong piece: support it with ...d5 and develop around it. If White attacks it with Nc3, simply swap it off.",
    "Develop fast, castle short and aim for a sound, equal position. The Petrov is about safety first, so do not chase risky complications.",
  ],
  lines: [
    {
      name: "Classical Attack: Chigorin Variation, Main Line (8.c4 Nb4)",
      pgn: `1. e4 e5 {Claim your share of the centre.}
        2. Nf3 {Attacks e5.}
        Nf6 {Petrov's Defence: rather than defending e5, attack e4 back.}
        3. Nxe5 {White takes the pawn first.}
        d6 {Kick the knight before taking back. 3...Nxe4? 4.Qe2! is bad: your e4 knight cannot move without a discovered check from the e5 knight (4...Nf6?? 5.Nc6+ wins your queen).}
        4. Nf3 {The knight retreats.}
        Nxe4 {Now take the pawn. Material is level, and with White's knight gone from e5 the e-file tricks no longer work.}
        5. d4 {The main line: White takes the centre and plans Bd3 to challenge your knight.}
        d5 {Support your knight with a pawn: it now sits firmly on e4 in the middle of the board.}
        6. Bd3 {Attacks the knight a second time and aims at your king.}
        Nc6 {Develops and adds pressure on d4.}
        7. O-O Be7 {Calm development, ready to castle.}
        8. c4 {Attacks d5, the pawn that supports your knight.}
        Nb4 {Hits the d3 bishop, which attacks your knight and aims at your king. White must move it or allow ...Nxd3.}
        9. Be2 O-O {Your king is safe; now finish development.}
        10. Nc3 {A third attack on your e4 knight.}
        Bf5 {Develops and defends the e4 knight once more.}
        11. a3 {Kicks your b4 knight.}
        Nxc3 {Swap the e4 knight before it gets surrounded, so you have time to save the b4 knight.}
        12. bxc3 Nc6 {The knight returns to safety and presses on d4. The position is roughly equal.}`,
    },
    {
      name: "Nimzowitsch Attack (5.Nc3)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Nc3 {White challenges your knight and plans fast development with long castling.}
        Nxc3 {Swap knights: the simplest answer to the attack on e4.}
        6. dxc3 {Taking towards the centre opens the d-file and lines for White's bishops.}
        Be7 {Develop and prepare to castle.}
        7. Be3 O-O {King safety first.}
        8. Qd2 Nd7 {The knight heads for f6, its best square, where it guards your king.}
        9. O-O-O {Kings on opposite sides: White may push g4-g5 at your king.}
        Nf6 {The knight is in place. Now start your own play on the queenside with ...Be6, ...Qa5 or pawn moves like ...c5 and ...b5.}`,
    },
    {
      name: "Cozio Attack (5.Qe2)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Qe2 {White pins your e4 knight to your king along the open e-file and threatens d3 to win it.}
        Qe7 {Block the pin with your own queen, so the knight is free to retreat.}
        6. d3 {Attacks the knight.}
        Nf6 {Retreat. Your queen on e7 still covers the e-file.}
        7. Bg5 {Pins your f6 knight to your queen and threatens Bxf6 to damage your pawns.}
        Qxe2+ {Trade queens: this ends the pin and leads to a calm, equal endgame.}
        8. Bxe2 Be7 {Develop, unpin the knight for good, and castle next.}`,
    },
    {
      name: "Kaufmann Attack (5.c4)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. c4 {White controls d5, so ...d5 to support your knight is not possible right away.}
        Nc6 {Develop and keep an eye on d4 and e5.}
        6. Nc3 {Challenges your e4 knight.}
        Nxc3 {Swap knights, the simplest answer.}
        7. dxc3 Be7 {Develop and get ready to castle.}
        8. Bd3 O-O {King safety first.}
        9. O-O Ne5 {Offer a knight trade with tempo: the knight hits the d3 bishop.}
        10. Nxe5 dxe5 {The pawns are now mirrored and there are no weaknesses. The position is equal.}`,
    },
    {
      name: "Modern Attack: Centre Variation (3.d4 Nxe4 4.Bd3)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. d4 {White opens the centre at once instead of taking on e5.}
        Nxe4 {Take the pawn: this is the main line. Your e5 pawn is attacked, but White's e4 pawn is gone too.}
        4. Bd3 {Attacks your knight.}
        d5 {Support the knight and grab central space.}
        5. Nxe5 {White's knight sits strongly on e5.}
        Nd7 {Challenge the e5 knight, White's best piece, with one of yours.}
        6. Nxd7 Bxd7 {Recapturing develops your bishop.}
        7. O-O Bd6 {Develops, aims at h2 and prepares castling.}
        8. c4 {Attacks d5, the pawn that supports your e4 knight.}
        c6 {Back up d5 with another pawn. Solid and equal.}`,
    },
    {
      name: "Cochrane Gambit: Centre Variation (5.d4)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6
        4. Nxf7 {The Cochrane Gambit: White gives up the knight for two pawns and hopes your king will be exposed.}
        Kxf7 {Take it. You are a piece for two pawns up; the king will find safety.}
        5. d4 {White builds a big centre and wants e5 to kick your f6 knight. (5...Nxe4? 6.Qh5+ is bad for you.)}
        c5 {Hit the centre at once, before White's pawns can roll forward.}
        6. dxc5 {White grabs a third pawn.}
        d5 {Strike back in the centre and open lines: your f8 bishop can recapture on c5 later.}
        7. e5 {Kicks your knight. (7.exd5 Bxc5 is great for you.)}
        Ne4 {The knight jumps to a strong central square, where no pawn can chase it, and eyes the c5 pawn and f2.}
        8. Bd3 {Attacks the e4 knight.}
        Nxc5 {Win a pawn back with tempo on the d3 bishop: you are a piece for two pawns up, with a big centre pawn on d5.}`,
    },
    {
      name: "Three Knights Game (3.Nc3 Bb4)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. Nc3 {White defends e4 with the knight.}
        Bb4 {Pin the knight, the only defender of e4. (3...Nc6 leads to the Four Knights instead.)}
        4. Nxe5 {White grabs the pawn.}
        O-O {Castle and get ready for ...Re8: pressure on the e-file wins the pawn back.}
        5. Be2 Re8 {The rook joins the e-file, hitting e4 and the e5 knight.}
        6. Nd3 {The knight retreats and attacks your bishop.}
        Bxc3 {Remove the knight that defends e4.}
        7. dxc3 Nxe4 {Pawn back: material is level.}
        8. O-O d6 {Takes e5 away from White's knight and opens the c8 bishop. An equal game with active pieces.}`,
    },
    {
      name: "Italian Variation: Boden-Kieseritzky Gambit (3.Bc4)",
      pgn: `1. e4 e5 2. Nf3 Nf6
        3. Bc4 {White ignores the attack on e4 and develops.}
        Nxe4 {Take the pawn: it is a real gain, and White's compensation is not enough if you defend carefully.}
        4. Nc3 {The Boden-Kieseritzky Gambit: White challenges your knight and hopes for fast development.}
        Nxc3 {Swap knights.}
        5. dxc3 {White opens lines for the bishop and queen.}
        f6 {Hold the e5 pawn, which the f3 knight attacks. It weakens your king, so the next moves must cover the light squares.}
        6. Nh4 {Heads for f5 and frees the queen for Qh5+.}
        g6 {Stops Qh5+ and takes f5 away from the knight.}
        7. f4 {Attacks e5 again.}
        Qe7 {Defends e5 and covers f7 and the light squares around your king. Next ...d6, ...c6 and ...Be6 to swap off the c4 bishop.}`,
    },
    {
      name: "Classical Attack: Berger Variation (8.Re1 Bg4 9.c3 f5)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7
        8. Re1 {The Chigorin Variation: the rook joins the attack on your e4 knight along the e-file.}
        Bg4 {Pins the f3 knight to the queen and adds pressure on d4.}
        9. c3 {Supports d4.}
        f5 {Back up the e4 knight with a pawn, so it cannot be driven away easily.}
        10. Nbd2 O-O {King to safety. Your knight on e4 is firmly supported by d5 and f5.}`,
    },
    {
      name: "French Attack (5.d3)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. d3 {The French Attack: White simply kicks your knight back.}
        Nf6 {Retreat to the knight's best square, where it guards your king.}
        6. d4 {White takes the centre after all.}
        d5 {Claim your share of the centre and open the c8 bishop.}
        7. Bd3 Bd6 {Mirror White's development and get ready to castle.}
        8. O-O O-O {A symmetrical, equal position. Continue with ...Bg4 or ...Re8 and ...c6.}`,
    },
    {
      name: "Millennium Attack (5.Bd3)",
      pgn: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
        5. Bd3 {The Millennium Attack: White attacks the knight with the bishop and plans O-O, Re1 and c3 with Bc2.}
        Nf6 {Retreat to f6, where the knight guards your king.}
        6. O-O Be7 {Develops and prepares castling.}
        7. h3 {Stops ...Bg4.}
        O-O {King to safety.}
        8. c3 Re8 {Take the open e-file before White's rook gets there. Next ...Bf8, ...c6 or ...Nbd7.}`,
    },
  ],
}
