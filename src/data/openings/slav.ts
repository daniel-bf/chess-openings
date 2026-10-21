import type { OpeningSource } from '../types'

export const slav: OpeningSource = {
  id: 'slav',
  name: 'Slav Defense',
  eco: 'D10–D19',
  side: 'black',
  summary:
    "A rock-solid answer to the Queen's Gambit. Instead of defending d5 with ...e6, which locks in the c8 bishop, Black uses the c-pawn. The bishop can then come out to f5 or g4, and only after that does Black play ...e6. You get a sound position with no bad pieces, plus the option of taking on c4 and making White work to win the pawn back.",
  ideas: [
    'Defend d5 with ...c6 and get the c8 bishop out to f5 (or g4) before you play ...e6, so it never gets stuck behind your pawns.',
    'When White allows it, take on c4 with ...dxc4. White must spend moves (a4, e3, Bxc4) to win the pawn back, and you use that time to develop.',
    'Know the standard answers: ...Bg6 keeps your bishop when Nh4 chases it, ...Qb6 meets Qb3, and ...e5 (or ...c5) is the break that frees your game.',
  ],
  lines: [
    {
      name: 'Czech: Dutch Variation (9.Qe2)',
      pgn: `1. d4 d5 {Put a pawn in the centre so White cannot simply take it over with e4.}
        2. c4 {The Queen's Gambit: White attacks d5 and wants to lure the pawn away from the centre.}
        c6 {The Slav. The c-pawn protects d5, and unlike ...e6 it leaves the c8 bishop free to come out.}
        3. Nf3 Nf6 {Develop and add a second defender to d5. The knight also watches e4.}
        4. Nc3 dxc4 {Take the pawn. You threaten ...b5 to keep it, so White has to spend time winning it back, and you use that time to develop the c8 bishop.}
        5. a4 {Stops ...b5, so White can win back c4 later. The price is a move spent and a weak b4 square.}
        Bf5 {The key Slav move. The bishop comes out before ...e6 can shut it in, and it watches e4, the square White wants for a pawn.}
        6. e3 {The calm main line. White opens the f1 bishop's path so it can take back on c4.}
        e6 {Now ...e6 is fine because the bishop is already outside the pawn chain. It also opens the f8 bishop.}
        7. Bxc4 Bb4 {Pin the c3 knight to the king. That knight supports e4, so the pin makes White's e4 push harder.}
        8. O-O Nbd7 {Develop the last minor piece. From d7 the knight supports a later ...e5 or ...c5 and can jump to b6.}
        9. Qe2 {White prepares e4. The queen backs up that push and gets off the d-file.}
        O-O {Get your king safe before the centre opens.}
        10. e4 {White finally plays e4, and it attacks your f5 bishop.}
        Bg6 {Step back but stay on the same diagonal, so the bishop still presses on e4.}
        11. Bd3 {The bishop protects e4 and points at your kingside.}
        Bh5 {Pin the f3 knight to the e2 queen. That knight defends d4 and supports e5, so pinning it takes pressure off your position.}`,
    },
    {
      name: 'Geller Gambit (5.e4)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4
        5. e4 {The Geller Gambit. White leaves the c4 pawn and grabs the centre, offering a pawn for quick attacking chances.}
        b5 {Hold on to the c4 pawn. Your c6 pawn protects b5.}
        6. e5 {White kicks your knight away from the kingside.}
        Nd5 {Jump to the centre. No white pawn can attack the knight on d5.}
        7. a4 {White attacks b5 to undermine your c4 pawn.}
        e6 {Support the d5 knight and open the f8 bishop. Don't worry about b5 yet.}
        8. axb5 Nxc3 {Swap knights first, so White's c3 knight cannot jump to b5 or d5 when you recapture.}
        9. bxc3 cxb5 {Take back. You are still a pawn up, and the b5 and c4 pawns are hard for White to attack.}
        10. Ng5 {White goes for your king. The idea is Qh5, hitting f7 and h7.}
        Bb7 {Develop the bishop onto the long diagonal, where it covers d5 and will aim at White's king later.}
        11. Qh5 {The threat is Qxf7+, so you must react.}
        g6 {Block the queen's path to f7 and attack it, so it has to move again.}
        12. Qg4 {The queen keeps eyeing your weakened kingside and the e6 pawn.}
        Be7 {Develop, attack the g5 knight and get ready to castle. You stay a pawn up, and the worst of the attack is over.}`,
    },
    {
      name: 'Exchange Variation (3.cxd5)',
      pgn: `1. d4 d5 2. c4 c6
        3. cxd5 {The Exchange Variation. White makes the pawns symmetrical and hopes the extra move gives a small, safe edge.}
        cxd5 {Take back with the pawn so you keep a pawn on d5. The c-file is now open for both sides.}
        4. Nc3 Nf6 {Develop and protect d5 again.}
        5. Bf4 Nc6 {Develop and fight for the e5 and d4 squares.}
        6. e3 Bf5 {Copy White. Your bishop comes out before ...e6, just as White's did before e3.}
        7. Nf3 e6 {Open the f8 bishop and protect d5 a third time.}
        8. Bb5 {White pins the c6 knight and wants Ne5 to pile up on it.}
        Nd7 {The modern answer. The knight covers e5, so White's knight cannot settle there, and you are ready to retake on c6 with the b-pawn if needed.}
        9. Qa4 {White adds a second attacker on the pinned c6 knight.}
        Rc8 {Defend the knight again, with the rook on the open c-file.}
        10. O-O Be7 {Finish developing and castle next. The position is level, and later ...a6 asks the b5 bishop to make up its mind.}`,
    },
    {
      name: 'Quiet Variation: Schallopp Defence (6.Nh4)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. e3 {The Slow Slav. White protects c4 calmly, but now the c1 bishop is shut in behind e3.}
        Bf5 {Develop the bishop outside the pawn chain before ...e6.}
        5. Nc3 e6 {Support d5 and open the f8 bishop.}
        6. Nh4 {White chases your bishop to win the bishop pair (two bishops against bishop and knight).}
        Bg6 {Stay on the same diagonal. If White takes, you recapture with the h-pawn.}
        7. Nxg6 hxg6 {Take back towards the centre. Now there is no pawn in front of your h8 rook, so the rook already attacks down the h-file.}
        8. Bd3 {White aims at your g6 pawn and develops.}
        Nbd7 {Develop and get ready to support ...e5 later.}
        9. O-O Bd6 {Develop with a threat. You now threaten ...Bxh2+, and the king cannot take back because your h8 rook is on the open h-file. White must spend a move on h3, g3 or f4.}`,
    },
    {
      name: 'Quiet Variation: Schallopp Defence (5.Bd3)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5
        5. Bd3 {White offers to trade light-squared bishops.}
        Bxd3 {Accept. White's light-squared bishop is one of its best attackers against your king, and swapping it leaves your solid pawns with no weak light squares.}
        6. Qxd3 e6 {Build the solid c6, d5, e6 pawn chain and open the f8 bishop.}
        7. O-O Nbd7 {Develop and support the ...e5 break.}
        8. Nc3 Bd6 {Develop and add more support to ...e5. Next come ...O-O and ...e5 (often after ...dxc4) to free your game.}`,
    },
    {
      name: '3.Nc3 Nf6 4.e3 Bf5 (5.Qb3)',
      pgn: `1. d4 d5 2. c4 c6
        3. Nc3 Nf6 {Develop and protect d5 again.}
        4. e3 Bf5 {Get the bishop out before ...e6, just as in the other Slow Slav lines.}
        5. Qb3 {White attacks b7, which your bishop no longer guards.}
        Qb6 {Block the queen and defend b7. If White trades on b6, you take back with the a-pawn and your a8 rook gets an open file.}
        6. c5 {White avoids the trade, gains space and kicks your queen.}
        Qc7 {Keep the queens on. From c7 the queen still guards b7, watches e5 and supports the ...e5 break. Taking on b3 would only help White expand on the queenside.}
        7. Nf3 Nbd7 {Prepare ...e5. That push hits d4, the base of White's c5 and d4 pawn chain.}`,
    },
    {
      name: 'Modern Line (4.Qc2)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. Qc2 {White protects c4 with the queen and keeps the c1 bishop free.}
        dxc4 {Take anyway. The queen has to spend another move taking back, and on c4 it can be chased.}
        5. Qxc4 Bf5 {Develop the bishop to its best square, where it also stops e4.}
        6. g3 {White will "fianchetto" (develop the bishop on g2, on the long diagonal).}
        e6 {Support the centre and open the f8 bishop.}
        7. Bg2 Nbd7 {Develop. The knight can jump to b6 to hit the queen, and it supports ...c5 or ...e5.}
        8. O-O Be7 {Finish developing and castle next. Then free your game with ...c5 or ...e5.}`,
    },
    {
      name: 'Quiet Variation: Schallopp Defence (via 3.e3)',
      pgn: `1. d4 d5 2. c4 c6
        3. e3 {A quiet move order. White protects c4 straight away.}
        Nf6 {Develop. You will follow with ...Bf5 and ...e6, just like against the Slow Slav.}
        4. Nc3 Bf5 5. Nf3 {This is the Slow Slav position again, reached by a different route.}
        e6 6. Nh4 Bg6 7. Nxg6 hxg6`,
    },
    {
      name: 'Czech: Carlsbad Variation, Morozevich Line (6.Ne5)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5
        6. Ne5 {The Krause Attack. White wins c4 back with the knight and plans f3 and e4.}
        Nbd7 {Challenge the e5 knight straight away.}
        7. Nxc4 Qc7 {The queen joins the fight for e5 and prepares ...e5.}
        8. g3 {White prepares to fianchetto the bishop on g2.}
        e5 {The freeing break. You strike in the centre and open lines for your pieces.}
        9. dxe5 Nxe5 {Take back with the knight, which now sits on a strong central square and hits the c4 knight.}
        10. Bf4 {White pins your e5 knight against the c7 queen.}
        Nfd7 {Defend the pinned knight a second time.}
        11. Bg2 g5 {A sharp, well-known idea from theory. The pawn attacks the f4 bishop to break the pin. Your kingside loosens, but your pieces get very active.}`,
    },
    {
      name: 'Czech: Dutch Variation (9.Nh4)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7
        9. Nh4 {White goes after your f5 bishop to win the bishop pair.}
        O-O {Castle first. If the knight takes on f5, you will recapture with the e-pawn.}
        10. Nxf5 exf5 {Take back with the e-pawn. The f5 pawn stops e4, and the e-file opens for your rook.}
        11. Qc2 {The queen attacks the f5 pawn.}
        g6 {Protect f5 with a pawn. Your structure is solid, and the f5 pawn keeps White's bishops quiet.}`,
    },
    {
      name: 'Alekhine Variation (5.e3)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4
        5. e3 {The Alekhine Variation. White plans Bxc4 without spending a move on a4.}
        b5 {With a4 not played, ...b5 is possible. It protects the c4 pawn.}
        6. a4 {White attacks b5 to break up your pawns.}
        b4 {Push on instead of exchanging. This drives the c3 knight away from the centre.}
        7. Na2 {The knight goes to the edge, where it attacks b4.}
        e6 {Open the f8 bishop. White will get the c4 pawn back, so quick development matters most.}
        8. Bxc4 Be7 {Develop. The bishop also protects the b4 pawn that the a2 knight attacks.}
        9. O-O O-O {Castle. Your queenside space and White's badly placed a2 knight give you a comfortable game.}`,
    },
    {
      name: "Czech: Bled Attack (6.Nh4)",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5
        6. Nh4 {The Bled Attack: White chases your bishop to win the bishop pair, or at least make it move again.}
        Bc8 {Go back home. It looks odd, but you keep both bishops, and White's knight on h4 is badly placed. ...e5 comes next.}
        7. e3 {White prepares Bxc4 to win back the pawn.}
        e5 {Strike in the centre at once. The h4 knight no longer covers e5.}
        8. Bxc4 exd4 {Open the e-file before White can castle.}
        9. exd4 Be7 {Develop and get ready to castle. White is left with an isolated d-pawn (no pawns beside it on the c- or e-files), a long-term target for your pieces.}`,
    },
    {
      name: "Modern Line (4.g3)",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. g3 {White fianchettoes, Catalan-style: the g2 bishop will press on d5 along the long diagonal.}
        Bf5 {As always in the Slav, get the bishop out before ...e6.}
        5. Bg2 e6 {Build the c6, d5, e6 pawn wall, which blunts the g2 bishop, and open your f8 bishop.}
        6. O-O Be7 {Develop and get ready to castle.}
        7. Nc3 O-O {Castle. Next ...Nbd7, then free your game with ...dxc4 or ...Ne4 and ...c5 or ...e5.}`,
    },
  ],
}
