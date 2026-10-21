import type { OpeningSource } from '../types'

export const queensGambit: OpeningSource = {
  id: 'queens-gambit',
  name: "Queen's Gambit",
  eco: 'D06–D69',
  side: 'white',
  summary:
    "After 1.d4 d5, White plays 2.c4 to attack Black's centre pawn from the side. If Black takes on c4, White gets a free hand in the centre and almost always wins the pawn back, so it is not a real sacrifice. If Black holds d5 instead, White develops quickly, keeps more space and looks for long-term pressure on Black's position.",
  ideas: [
    "Hit d5 with c4, Nc3 and often Bg5 (pinning the f6 knight that defends d5), so Black is always busy holding the centre.",
    "If Black takes on c4, do not chase the pawn at once: build the centre with e3 or e4, develop, and win it back with Bxc4.",
    "In the middlegame use the c-file and queenside space (Rc1, b4-b5) or the e3-e4 central push, depending on how Black has set up.",
  ],
  lines: [
    {
      name: 'QGD Orthodox: Capablanca freeing manoeuvre',
      pgn: `1. d4 {Puts a pawn in the centre, already protected by the queen, and opens the c1 bishop.}
        d5 2. c4 {The Queen's Gambit: the c-pawn attacks d5 from the side. If Black takes, White will win the pawn back and own the centre.}
        e6 {The Queen's Gambit Declined. Black props up d5 with the e-pawn, very solid, but the c8 bishop is now shut in behind e6.}
        3. Nc3 {Adds a second attacker on d5 and develops.}
        Nf6 4. Bg5 {Pins the f6 knight: it cannot move without the queen on d8 being exposed, and that knight is a key defender of d5.}
        Be7 {Unpins, so Black no longer has to worry about Bxf6.}
        5. e3 {Supports d4 and opens the way for the f1 bishop.}
        O-O 6. Nf3 {Develops and controls e5, so Black cannot easily break with ...e5.}
        Nbd7 7. Rc1 {The rook goes to the c-file now, because that file usually opens once pawns are exchanged on c4 or d5.}
        c6 8. Bd3 {Develops the last minor piece. It aims at h7, but Black will make it move again by taking on c4.}
        dxc4 {Black gives up the centre on purpose, gaining a tempo because the bishop has to recapture.}
        9. Bxc4 {Recaptures and keeps the bishop on a good diagonal toward f7.}
        Nd5 {Capablanca's freeing idea: trade some pieces so Black's cramped position gets more room.}
        10. Bxe7 {Takes before Black trades on g5. Moving away would just lose time.}
        Qxe7 11. O-O {Gets the king safe before the position opens.}
        Nxc3 12. Rxc3 {Recaptures with the rook, which stays active on the third rank and the c-file.}
        e5 {The freeing push: it opens the c8 bishop at last.}
        13. Bb3 {Moves the bishop out of reach of ...exd4 and ...b5 ideas while it keeps aiming at f7. White keeps a small but comfortable edge.}`,
    },
    {
      name: 'QGD Tartakower (6...h6 7.Bh4 b6)',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3
        h6 {Asks the bishop: keep the pin with Bh4, or give it up on f6?}
        7. Bh4 {Keeps the pin, so the f6 knight stays tied down.}
        b6 {The Tartakower: Black's problem bishop on c8 comes out via b7 instead.}
        8. Be2 {A quiet, safe square. White will castle next.}
        Bb7 9. Bxf6 {Gives up the bishop to force a pawn structure that suits White.}
        Bxf6 10. cxd5 {Now Black must recapture with the e-pawn, which blocks the b7 bishop behind d5.}
        exd5 11. b4 {Starts a queenside pawn advance. It stops Black's freeing ...c5 and prepares b5 to weaken c6 and d5.}`,
    },
    {
      name: 'QGA: Central Variation 3.e4 e5',
      pgn: `1. d4 d5 2. c4
        dxc4 {The Queen's Gambit Accepted. Black takes the pawn but usually does not try to keep it.}
        3. e4 {Grabs the whole centre at once. The c4 pawn is not going anywhere, so White can win it back later.}
        e5 {Black hits back in the centre immediately, before White consolidates.}
        4. Nf3 {Develops and defends d4 indirectly by attacking e5. Avoid 4.dxe5, which allows a queen trade and kills White's lead in development.}
        exd4 5. Bxc4 {Wins the gambit pawn back and develops with an eye on f7.}
        Nc6 {Defends the d4 pawn, which Black is keeping for now.}
        6. O-O {Castles before going after the d4 pawn. White's lead in development counts for more than one pawn.}
        Be6 {Offers to trade off White's strong c4 bishop.}
        7. Bxe6 {Takes, so Black must recapture with the f-pawn and get doubled e-pawns.}
        fxe6 8. Qb3 {Attacks two weak pawns at once: b7 and e6.}
        Qd7 9. Qxb7 {Takes the b7 pawn, which restores equal material.}
        Rb8 10. Qa6 {The queen escapes the open b-file and keeps an eye on a7 and e6.}
        Nf6 11. Nbd2 {Develops and heads for b3 or c4 to win the d4 pawn. White has the better pawn structure; Black has open files for his rooks.}`,
    },
    {
      name: 'QGA: Central Variation 3.e4 Nf6',
      pgn: `1. d4 d5 2. c4 dxc4 3. e4
        Nf6 {Attacks e4 at once.}
        4. e5 {Gains space and kicks the knight away from the centre.}
        Nd5 5. Bxc4 {Wins the pawn back and attacks the d5 knight.}
        Nb6 6. Bb3 {Keeps the bishop on the a2-g8 diagonal, aimed at f7.}
        Nc6 {Attacks d4.}
        7. Ne2 {Guards d4 from e2 and keeps the f-pawn free to advance to f4, supporting e5.}
        Bf5 8. Nbc3 {Develops and controls the e4 square.}
        e6 9. O-O {King to safety. White has more space thanks to the e5 pawn; Black will try to undermine it with ...f6 or ...Na5.}`,
    },
    {
      name: 'Slav: Czech Variation (4...dxc4 5.a4 Bf5)',
      pgn: `1. d4 d5 2. c4
        c6 {The Slav: Black supports d5 with the c-pawn, so the c8 bishop is not shut in like after ...e6.}
        3. Nf3 {Develops and keeps control of e5.}
        Nf6 4. Nc3 {Adds a third piece aimed at d5.}
        dxc4 {Black takes the pawn and hopes to keep it with ...b5.}
        5. a4 {Stops ...b5, so Black cannot hold on to the c4 pawn.}
        Bf5 {The Czech Variation: the bishop comes out before Black plays ...e6.}
        6. e3 {Opens the f1 bishop so it can recapture on c4.}
        e6 7. Bxc4 {The pawn is back and the bishop is well placed.}
        Bb4 {Pins the c3 knight, which slows down White's e4 push.}
        8. O-O {King to safety; it also breaks any future pin on the e1-a5 diagonal.}
        Nbd7 9. Qe2 {Supports e4, the move White wants to play.}
        O-O 10. e4 {Takes the centre and attacks the f5 bishop, gaining a tempo.}
        Bg6 11. Bd3 {Supports e4 and prepares e5 to push the f6 knight away. White has more space; Black is solid.}`,
    },
    {
      name: 'Semi-Slav: Moscow Variation (5.Bg5 h6 6.Bxf6)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3
        e6 {The Semi-Slav: Black props up d5 with both the c- and e-pawns.}
        5. Bg5 {Pins the knight and adds pressure on d5.}
        h6 {Asks the bishop to decide. 6.Bh4 leads to very sharp, theory-heavy lines.}
        6. Bxf6 {The Moscow: give up the bishop pair for a simple, healthy position and quick development.}
        Qxf6 7. e3 {Calm development, supporting d4.}
        Nd7 8. Bd3 {Develops the last minor piece and points at Black's kingside.}
        dxc4 9. Bxc4 {Recaptures, so the bishop lands on an active diagonal.}
        g6 10. O-O {King to safety. Black will play ...Bg7 and aim for ...e5; White keeps a lead in development and plans e4 or a4-a5.}`,
    },
    {
      name: 'QGD: Cambridge Springs Defence',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5
        Nbd7 {Looks harmless but hides a trap: 5.cxd5 exd5 6.Nxd5?? Nxd5! 7.Bxd8 Bb4+ and Black wins back the queen with a piece more (the Elephant Trap).}
        5. e3 {Calm development, avoiding any tricks on d5.}
        c6 6. Nf3 {Normal development, controlling e5.}
        Qa5 {The Cambridge Springs. The queen pins the c3 knight and, after ...dxc4 or ...Ne4, also attacks the g5 bishop.}
        7. Nd2 {Stops ...Ne4 and gets ready to meet ...dxc4 with Nxc4, hitting the queen.}
        Bb4 {Piles up on the pinned c3 knight.}
        8. Qc2 {Defends c3 a second time, so nothing there can be won.}
        O-O 9. Be2 {Finishes development and prepares to castle. Once White is castled, Black's queen on a5 can become a target.}`,
    },
    {
      name: 'QGD: Lasker Defence',
      pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4
        Ne4 {The Lasker: Black trades minor pieces to free his cramped position.}
        8. Bxe7 {Trades the bishops before Black can take on h4.}
        Qxe7 9. cxd5 {Exchanges first, so after the knight trade Black must recapture on d5 with a pawn.}
        Nxc3 10. bxc3 {Recaptures toward the centre; the c-pawn can later go to c4.}
        exd5 11. Qb3 {Attacks the d5 pawn, which has no pawn protecting it.}
        Rd8 {Defends d5 with the rook.}
        12. c4 {Attacks d5 again. After ...dxc4 Bxc4 White has quick development and pressure on f7 and the d-file.}`,
    },
    {
      name: 'Albin Countergambit',
      pgn: `1. d4 d5 2. c4
        e5 {The Albin Countergambit: Black gives a pawn for quick development and a cramping pawn on d4.}
        3. dxe5 {Takes the pawn.}
        d4 {The pawn on d4 stops Nc3 and takes space.}
        4. Nf3 {Develops and defends e5. Avoid 4.e3?, when ...Bb4+ 5.Bd2 dxe3! 6.Bxb4?? exf2+ 7.Ke2 fxg1=N+ is the Lasker Trap.}
        Nc6 5. g3 {Prepares Bg2. The bishop will aim at b7 and the queenside, where Black often castles.}
        Be6 6. Nbd2 {Develops to d2, not c3, where the d4 pawn could hit it. From d2 the knight can go to b3 to attack d4.}
        Qd7 7. Bg2 {Bishop on the long diagonal.}
        O-O-O 8. O-O {White is a pawn up and will attack Black's king with pawns and pieces on the queenside (b4, Qa4, Nb3).}`,
    },
    {
      name: 'Chigorin Defence',
      pgn: `1. d4 d5 2. c4
        Nc6 {The Chigorin: Black develops pieces quickly instead of supporting d5 with a pawn.}
        3. Nf3 {Develops and stops ...e5.}
        Bg4 {Pins the knight and fights for the e5 and d4 squares.}
        4. cxd5 {Takes on d5 first, so Black has to win the pawn back with the queen.}
        Bxf3 5. gxf3 {Recaptures toward the centre. White gets the two bishops and controls e4, at the cost of a slightly loose kingside.}
        Qxd5 6. e3 {Solidly protects d4.}
        e5 7. Nc3 {Develops with tempo by attacking the queen.}
        Bb4 8. Bd2 {Breaks the pin so the c3 knight is defended.}
        Bxc3 9. bxc3 {White has two bishops against two knights and a strong pawn centre. Open the position for the bishops.}`,
    },
    {
      name: 'Slav: Chebanenko (4...a6)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3
        a6 {The Chebanenko: Black prepares ...b5, either to grab space or to win the c4 pawn after ...dxc4.}
        5. c5 {Gains queenside space and takes the sting out of ...b5, because there is no longer a pawn on c4 to attack.}
        Bf5 6. Bf4 {Develops and controls e5, which makes Black's freeing ...e5 harder.}
        Nbd7 7. e3 {Supports d4, the base of White's pawn chain. Next come Be2, O-O and b4 to lock in the queenside space.}`,
    },
  ],
}
