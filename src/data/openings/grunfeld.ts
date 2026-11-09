import type { OpeningSource } from '../types'

export const grunfeld: OpeningSource = {
  id: "grunfeld",
  name: "Grünfeld Defense",
  eco: "D70–D99",
  side: "black",
  summary:
    "A war of counter-attack. You, commander of the Black Kingdom, strike the heartland at once with ...d5, often trade it off, and let the White Kingdom build a great wall of soldiers on e4 and d4. You do not try to block that wall. Instead you besiege it from the flank with the g7 priest, ...c5, ...Nc6 and ...Bg4, so the big heartland becomes a target rather than a strength.",
  ideas: [
    "Post your priest on g7 (a fianchetto: placing a priest on the long diagonal road after ...g6). From there it presses on d4 and c3 from afar.",
    "Trade your d-pawn for White's c-pawn, then besiege the d4 soldier with ...c5, ...Nc6 and ...Bg4 (which removes or pins a defender).",
    "Look for bold Queen raids such as ...Qa5, and remember that ...cxd4 at the right moment opens the c-file and the long diagonal road.",
  ],
  lines: [
    {
      name: "Exchange: Modern Exchange Variation (7.Nf3, 8.Rb1)",
      pgn: `1. d4 Nf6 {A rider rides out and watches e4, without committing your soldiers yet.}
        2. c4 g6 {Clear the way for ...Bg7, which puts your priest on the long diagonal road towards d4.}
        3. Nc3 d5 {The Grünfeld. Strike the heartland at once, before White can play e4.}
        4. cxd5 Nxd5 {Retake with the rider. White will gain time by attacking it, but your plan is to undermine the White heartland.}
        5. e4 Nxc3 {Trade riders before e4 can chase yours around. After bxc3, White's heartland is big but the c3 and d4 soldiers become targets.}
        6. bxc3 Bg7 {Your priest takes the long diagonal road, aiming at d4 and c3.}
        7. Nf3 {The modern setup. The White rider guards d4 and e5.}
        c5 {Hit d4 a second time. This is the classic Grünfeld strike.}
        8. Rb1 {White moves the tower off the long diagonal, away from your g7 priest, and onto the b-file to hit b7.}
        O-O {Castle. Speed matters more than the b7 soldier.}
        9. Be2 cxd4 {Release the tension now, so the Queen's check on a5 works.}
        10. cxd4 Qa5+ {Check from your Queen. White must block, and she can then take on a2.}
        11. Bd2 Qxa2 {Win a soldier. Your a-pawn is now a passed pawn: no White soldier can stop it.}
        12. O-O {White has given a soldier for active pieces, the open b-file and the d4-d5 push.}
        Bg4 {Develop with pressure. The priest hits the f3 rider, which defends d4 and the e5 square.}`,
    },
    {
      name: "Exchange: Spassky Variation (7.Bc4)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7
        7. Bc4 {The Classical Exchange. The White priest is active on c4, and the rider will go to e2 so ...Bg4 cannot pin it to the Queen.}
        c5 {Strike d4.}
        8. Ne2 Nc6 {Your rider piles more pressure on d4.}
        9. Be3 O-O {Castle. Your King is safe behind the g7 priest.}
        10. O-O Bg4 {Hit the e2 rider. The idea is to provoke f3, which weakens the squares around the White King.}
        11. f3 Na5 {Attack the c4 priest, White's best attacker.}
        12. Bd3 {The priest retreats. The sharp alternative 12.Bxf7+ is the Seville Variation.}
        cxd4 {Trade on d4 to open the c-file road.}
        13. cxd4 Be6 {Your priest takes control of d5 and eyes the a2 soldier. Watch for White's d4-d5 push. In theory Black often answers with ...Bxa1, giving up the priest for the tower.}`,
    },
    {
      name: "Russian Variation: Hungarian Variation (7...a6)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Nf3 Bg7 {Your priest takes the long diagonal road.}
        5. Qb3 {The Russian System. The White Queen attacks d5.}
        dxc4 {Give up d5 for White's c-pawn. The Queen must spend a move recapturing.}
        6. Qxc4 O-O {Castle. The White Queen is exposed on c4, and you will strike her soon.}
        7. e4 {White has the big heartland.}
        a6 {The Hungarian Variation. Prepare ...b5, which gains land with tempo on the Queen.}
        8. Be2 b5 {Chase the Queen and grab queenside land.}
        9. Qb3 c5 {A soldier strikes d4 at once. Next the priest comes to b7 with ...Bb7 to hit e4.}`,
    },
    {
      name: "Brinckmann Attack (4.Bf4)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Bf4 {White sends the priest out before e3 and aims at c7.}
        Bg7 {Your priest takes the long diagonal road.}
        5. e3 c5 {Strike d4 before White finishes raising the army.}
        6. dxc5 Qa5 {Pin the c3 rider to its King, and prepare to win back c5.}
        7. Rc1 dxc4 {Take on c4. Both soldiers will come back.}
        8. Bxc4 O-O {Castle before collecting the soldier.}
        9. Nf3 Qxc5 {Forces are level again, and your Queen hits the c4 priest.}
        10. Bb3 Nc6 {Develop. Your army has good posts, and ...Qa5, ...Bf5 or ...Rd8 can follow.}`,
    },
    {
      name: "Stockholm Variation (4.Bg5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5
        4. Bg5 {White threatens Bxf6 and then cxd5, winning the d5 soldier.}
        Ne4 {Your rider attacks the priest and the c3 rider at the same time.}
        5. Bh4 Nxc3 {Trade riders to give White doubled c-pawns.}
        6. bxc3 dxc4 {Grab a soldier while White's shield wall is broken.}
        7. e3 Be6 {Guard the c4 soldier. You are a soldier up, and White has the heartland and quick development in return.}`,
    },
    {
      name: "Three Knights: Burille Variation (5.e3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7
        5. e3 {The Slow System. White guards d4 solidly but walls in the c1 priest.}
        O-O {Castle first and watch how White sets up.}
        6. Be2 c5 {Strike d4, backed by your g7 priest on the long diagonal.}
        7. O-O cxd4 {Trade on d4, so White must recapture with a soldier.}
        8. exd4 Nc6 {Pile up on d4 with the rider and the g7 priest. ...Bg4 can follow to pin the f3 rider that defends it.}`,
    },
    {
      name: "Neo-Grünfeld: with g3 (3.g3)",
      pgn: `1. d4 Nf6 2. c4 g6
        3. g3 {White also fianchettoes, and the g2 priest aims at d5 and b7.}
        Bg7 {Your priest takes the long road; the castle awaits soon.}
        4. Bg2 d5 {The Grünfeld strike at the heartland, this time against a fianchetto.}
        5. cxd5 Nxd5 {Retake with the rider, aiming at the White heartland.}
        6. e4 {White gains a tempo by chasing your rider.}
        Nb6 {Fall back to b6, where the rider watches d5 and c4.}
        7. Ne2 c5 {Strike d4, which your g7 priest also attacks.}
        8. d5 {White marches past to keep the long diagonal road closed.}
        e6 {Undermine the d5 soldier straight away.}
        9. O-O O-O {Castle. Next ...exd5 opens the heartland, and ...Na6 heads for b4 or c7 to attack d5.}`,
    },
    {
      name: "Neo-Grünfeld: Goglidze Attack (3.f3)",
      pgn: `1. d4 Nf6 2. c4 g6
        3. f3 {White prepares e4 with full soldier support, as in the Sämisch King's Indian.}
        d5 {Strike the heartland at once, before White can play e4.}
        4. cxd5 Nxd5 {Retake with the rider.}
        5. e4 Nb6 {Fall back to b6. From there the rider hits c4 and d5.}
        6. Nc3 Bg7 {Your priest takes the long diagonal road and aims at d4.}
        7. Be3 O-O {Castle. White is preparing to castle long, so get your King safe first.}
        8. Qd2 {White plans to castle long and storm with h4-h5.}
        Nc6 {A rider joins the war and presses on d4.}
        9. O-O-O e5 {Strike the heartland. With the White King on the queenside, opening roads in the middle favours you.}
        10. d5 Nd4 {Your rider lands on a strong central square. If White takes it with the priest, ...exd4 hits the c3 rider and opens the e-file.}`,
    },
    {
      name: "Exchange Variation (7.Be3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7
        7. Be3 {White guards d4 with the priest and plans Qd2 and Rc1, keeping the g1 rider flexible.}
        c5 {Strike d4, as always in the Grünfeld.}
        8. Qd2 {White adds another guard to c3 and d4.}
        Qa5 {Press on c3 and a2. The c3 soldier is now pinned to the White Queen, so it cannot move.}
        9. Rc1 {The tower guards c3 a second time.}
        cxd4 {Release the tension now, so the Queen trade comes with check.}
        10. cxd4 Qxd2+ {Trade Queens. Without them, White's big heartland is easier to besiege and your King is safe.}
        11. Kxd2 O-O {Castle. Next ...Rd8 and ...Nc6 besiege d4, and ...Bd7 or ...e6 completes your army.}`,
    },
    {
      name: "Three Knights: Petrosian System (5.Bg5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7
        5. Bg5 {The White priest hopes for Bxf6 and cxd5, winning control of d5.}
        Ne4 {Hit the priest and the c3 rider, just as against 4.Bg5.}
        6. cxd5 {White grabs the heartland soldier and leaves the priest to its fate.}
        Nxg5 {Capture the priest: you win the bishop pair.}
        7. Nxg5 e6 {Hit d5 again; you will win the soldier back.}
        8. Nf3 exd5 {Soldiers are level and you hold the two priests. Next ...O-O and ...c6, with a solid game.}`,
    },
    {
      name: "Three Knights: Hungarian Variation (5.Bf4)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7
        5. Bf4 {White sends the priest to the active f4 square, aiming at c7.}
        O-O {King behind the walls first; the ...c5 strike comes next.}
        6. e3 c5 {Strike d4 now, as in the 4.Bf4 line.}
        7. dxc5 Qa5 {Pin the c3 rider and get ready to win back c5.}
        8. Rc1 dxc4 {Take on c4 too: both soldiers will come back.}
        9. Bxc4 Qxc5 10. Bb3 Nc6 {Develop. This is the same battlefield as in the 4.Bf4 line, reached by another road.}`,
    },
  ],
}
