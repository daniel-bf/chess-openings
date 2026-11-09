import type { OpeningSource } from '../types'

export const slav: OpeningSource = {
  id: 'slav',
  name: 'Slav Defense',
  eco: 'D10–D19',
  side: 'black',
  summary:
    "The White Kingdom opens with the Queen's Gambit, and you, commander of the Black Kingdom, answer with a fortress: the Slav. Instead of guarding d5 with ...e6, which walls in your c8 priest, you send the c-pawn. The priest rides out to f5 or g4 first, and only then does ...e6 close the gate. Your army is sound with no useless pieces, and you can grab c4 and make the enemy work to win the soldier back.",
  ideas: [
    'Guard d5 with ...c6 and send the c8 priest out to f5 (or g4) before ...e6, so it is never trapped behind your own shield wall.',
    'When the enemy allows it, seize c4 with ...dxc4. White must spend moves (a4, e3, Bxc4) to win the soldier back, and you spend that time raising your army.',
    'Know the standard answers: ...Bg6 keeps your priest when Nh4 chases it, ...Qb6 meets Qb3, and ...e5 (or ...c5) is the break that frees your kingdom.',
  ],
  lines: [
    {
      name: 'Czech: Dutch Variation (9.Qe2)',
      pgn: `1. d4 d5 {Plant a soldier in the heartland so the White Kingdom cannot simply take it over with e4.}
        2. c4 {The Queen's Gambit: a White soldier attacks d5, hoping to lure your defender away from the heartland.}
        c6 {The Slav. The c-pawn guards d5, and unlike ...e6 it leaves the road open for your c8 priest.}
        3. Nf3 Nf6 {A rider rides out and becomes a second guard for d5. It also watches e4.}
        4. Nc3 dxc4 {Seize the soldier. You threaten ...b5 to keep it, so White must spend time winning it back, and you use that time to bring out the c8 priest.}
        5. a4 {Stops ...b5, so White can retake c4 later. The price: a move spent and a weak b4 square.}
        Bf5 {The key Slav move. Your priest leaves before ...e6 can lock it in, and it watches e4, the square White wants for a soldier.}
        6. e3 {The calm main line. White clears the road for the f1 priest so it can take back on c4.}
        e6 {Now ...e6 is fine, as the priest is already outside the shield wall. It also opens the road for the f8 priest.}
        7. Bxc4 Bb4 {Pin the c3 rider to its King. That rider supports e4, so the pin makes White's e4 push harder.}
        8. O-O Nbd7 {The last rider joins. From d7 it supports a later ...e5 or ...c5 and can jump to b6.}
        9. Qe2 {White prepares e4. The Queen backs up that march and steps off the d-file.}
        O-O {Get your King behind the castle walls before the heartland breaks open.}
        10. e4 {At last White plays e4, and the soldier attacks your f5 priest.}
        Bg6 {Step back but stay on the same diagonal road, so the priest still presses on e4.}
        11. Bd3 {The White priest guards e4 and points at your kingside.}
        Bh5 {Pin the f3 rider to the e2 Queen. That rider defends d4 and supports e5, so pinning it eases the pressure on you.}`,
    },
    {
      name: 'Geller Gambit (5.e4)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4
        5. e4 {The Geller Gambit. White abandons the c4 soldier and grabs the heartland, sacrificing a pawn for quick attacking chances.}
        b5 {Hold on to the captured c4 soldier. Your c6 pawn guards b5.}
        6. e5 {A White soldier drives your rider away from the kingside.}
        Nd5 {Leap into the heartland. No White soldier can attack a rider on d5.}
        7. a4 {White attacks b5 to undermine your c4 soldier.}
        e6 {Support the d5 rider and open the f8 priest's road. Don't worry about b5 yet.}
        8. axb5 Nxc3 {Trade riders first, so White's c3 rider cannot gallop to b5 or d5 when you recapture.}
        9. bxc3 cxb5 {Take back. You are still a soldier up, and the b5 and c4 pawns are hard for White to attack.}
        10. Ng5 {White charges at your King. The idea is Qh5, hitting f7 and h7.}
        Bb7 {Your priest takes the long diagonal road, where it covers d5 and will later aim at the White King.}
        11. Qh5 {The Queen threatens Qxf7+, a strike at your King. You must react.}
        g6 {Block the Queen's path to f7 and attack her, so she must move again.}
        12. Qg4 {The Queen keeps eyeing your weakened kingside and the e6 soldier.}
        Be7 {Develop, attack the g5 rider and get ready to castle. You stay a soldier up, and the worst of the assault is over.}`,
    },
    {
      name: 'Exchange Variation (3.cxd5)',
      pgn: `1. d4 d5 2. c4 c6
        3. cxd5 {The Exchange Variation. White makes the shield walls symmetrical and hopes the extra move gives a small, safe edge.}
        cxd5 {Retake with the soldier so you keep a pawn on d5. The c-file is now an open road for both kingdoms.}
        4. Nc3 Nf6 {A rider rides out and guards d5 again.}
        5. Bf4 Nc6 {Another rider joins and fights for the e5 and d4 squares.}
        6. e3 Bf5 {Mirror the enemy. Your priest leaves before ...e6, just as White's did before e3.}
        7. Nf3 e6 {Open the f8 priest's road and guard d5 a third time.}
        8. Bb5 {White pins the c6 rider and wants Ne5 to pile up on it.}
        Nd7 {The modern answer. This rider covers e5, so White's rider cannot settle there, and you can retake on c6 with the b-pawn if needed.}
        9. Qa4 {The White Queen adds a second attacker on the pinned c6 rider.}
        Rc8 {Defend the rider again with a tower on the open c-file.}
        10. O-O Be7 {Finish raising the army and castle next. The war is level, and later ...a6 asks the b5 priest to make up its mind.}`,
    },
    {
      name: 'Quiet Variation: Schallopp Defence (6.Nh4)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. e3 {The Slow Slav. White guards c4 calmly, but now the c1 priest is walled in behind e3.}
        Bf5 {Send the priest outside the shield wall before ...e6.}
        5. Nc3 e6 {Support d5 and open the f8 priest's road.}
        6. Nh4 {A White rider hunts your priest to win the bishop pair (two priests against priest and rider).}
        Bg6 {Stay on the same diagonal road. If White takes, you recapture with the h-pawn.}
        7. Nxg6 hxg6 {Retake towards the heartland. No soldier stands before your h8 tower now, so it already attacks down the h-file.}
        8. Bd3 {White's priest aims at your g6 soldier and develops.}
        Nbd7 {A rider joins the army, ready to support ...e5 later.}
        9. O-O Bd6 {Develop with a threat: ...Bxh2+, and the King cannot take back because your h8 tower guards the open h-file. White must spend a move on h3, g3 or f4.}`,
    },
    {
      name: 'Quiet Variation: Schallopp Defence (5.Bd3)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5
        5. Bd3 {White offers to trade the light-road priests.}
        Bxd3 {Accept. White's light-squared priest is one of its best attackers against your King, and the swap leaves your solid wall with no weak light squares.}
        6. Qxd3 e6 {Build the solid c6, d5, e6 shield wall and open the f8 priest's road.}
        7. O-O Nbd7 {A rider joins the army and backs the ...e5 break.}
        8. Nc3 Bd6 {Develop and back ...e5 even more. Next come ...O-O and ...e5 (often after ...dxc4) to free your kingdom.}`,
    },
    {
      name: '3.Nc3 Nf6 4.e3 Bf5 (5.Qb3)',
      pgn: `1. d4 d5 2. c4 c6
        3. Nc3 Nf6 {A rider rides out and guards d5 again.}
        4. e3 Bf5 {Get the priest out before ...e6, as in the other Slow Slav lines.}
        5. Qb3 {The White Queen attacks b7, which your priest no longer guards.}
        Qb6 {Your Queen blocks hers and defends b7. If White trades on b6, retake with the a-pawn and your a8 tower gets an open road.}
        6. c5 {White avoids the trade, gains land and drives your Queen back.}
        Qc7 {Keep the Queens on. From c7 she still guards b7, watches e5 and supports the ...e5 break. Taking on b3 would only help White expand on the queenside.}
        7. Nf3 Nbd7 {Prepare ...e5. That push hits d4, the base of White's c5 and d4 shield wall.}`,
    },
    {
      name: 'Modern Line (4.Qc2)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. Qc2 {The White Queen guards c4 herself and leaves the c1 priest free.}
        dxc4 {Take anyway. The Queen must spend another move retaking, and on c4 she can be chased.}
        5. Qxc4 Bf5 {Your priest reaches its best post, where it also stops e4.}
        6. g3 {White will "fianchetto" (place the priest on g2, on the long diagonal road).}
        e6 {Support the heartland and open the f8 priest's road.}
        7. Bg2 Nbd7 {Develop. This rider can jump to b6 to hit the Queen, and it supports ...c5 or ...e5.}
        8. O-O Be7 {Finish raising the army and castle next. Then free your kingdom with ...c5 or ...e5.}`,
    },
    {
      name: 'Quiet Variation: Schallopp Defence (via 3.e3)',
      pgn: `1. d4 d5 2. c4 c6
        3. e3 {A quiet march. White guards c4 straight away.}
        Nf6 {A rider rides out. You will follow with ...Bf5 and ...e6, just like against the Slow Slav.}
        4. Nc3 Bf5 5. Nf3 {The Slow Slav battlefield again, reached by a different road.}
        e6 6. Nh4 Bg6 7. Nxg6 hxg6`,
    },
    {
      name: 'Czech: Carlsbad Variation, Morozevich Line (6.Ne5)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5
        6. Ne5 {The Krause Attack. White wins c4 back with the rider and plans f3 and e4.}
        Nbd7 {Challenge the e5 rider straight away.}
        7. Nxc4 Qc7 {Your Queen joins the fight for e5 and prepares ...e5.}
        8. g3 {White prepares to fianchetto the priest on g2.}
        e5 {The freeing break. Strike at the heartland and open roads for your army.}
        9. dxe5 Nxe5 {Retake with the rider, which now stands on a strong central square and hits the c4 rider.}
        10. Bf4 {A White priest pins your e5 rider against the c7 Queen.}
        Nfd7 {Guard the pinned rider a second time.}
        11. Bg2 g5 {A sharp, well-known idea from theory. The soldier attacks the f4 priest to break the pin. Your kingside loosens, but your army gets very active.}`,
    },
    {
      name: 'Czech: Dutch Variation (9.Nh4)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7
        9. Nh4 {A White rider hunts your f5 priest to win the bishop pair.}
        O-O {Castle first. If the rider takes on f5, you retake with the e-pawn.}
        10. Nxf5 exf5 {Retake with the e-pawn. The f5 soldier stops e4, and the e-file opens for your tower.}
        11. Qc2 {The White Queen attacks the f5 soldier.}
        g6 {Guard f5 with a soldier. Your wall is solid, and the f5 pawn keeps White's priests quiet.}`,
    },
    {
      name: 'Alekhine Variation (5.e3)',
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4
        5. e3 {The Alekhine Variation. White plans to retake with Bxc4 without spending a move on a4.}
        b5 {With a4 not played, ...b5 is possible. It guards the c4 soldier.}
        6. a4 {White attacks b5 to break up your soldiers.}
        b4 {March on instead of trading. This drives the c3 rider away from the heartland.}
        7. Na2 {The rider flees to the edge, where it attacks b4.}
        e6 {Open the f8 priest's road. White will win c4 back, so quick development matters most.}
        8. Bxc4 Be7 {Develop. The priest also guards the b4 soldier that the a2 rider attacks.}
        9. O-O O-O {Castle. Your queenside land and White's stranded a2 rider give you a comfortable game.}`,
    },
    {
      name: "Czech: Bled Attack (6.Nh4)",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5
        6. Nh4 {The Bled Attack: a White rider chases your priest to win the bishop pair, or at least make it move again.}
        Bc8 {Go back home. It looks odd, but you keep both priests, and the rider on h4 is badly placed. ...e5 comes next.}
        7. e3 {White prepares Bxc4 to win back the soldier.}
        e5 {Strike the heartland at once. The h4 rider no longer covers e5.}
        8. Bxc4 exd4 {Open the e-file road before White can castle.}
        9. exd4 Be7 {Develop and get ready to castle. White is left with an isolated d-pawn (no soldiers beside it on the c- or e-files), a long-term target for your army.}`,
    },
    {
      name: "Modern Line (4.g3)",
      pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6
        4. g3 {White fianchettoes, Catalan-style: the g2 priest will press on d5 along the long diagonal road.}
        Bf5 {As always in the Slav, send the priest out before ...e6.}
        5. Bg2 e6 {Build the c6, d5, e6 shield wall, which blunts the g2 priest, and open your f8 priest's road.}
        6. O-O Be7 {The f8 priest steps out and the castle gate opens.}
        7. Nc3 O-O {Castle. Next ...Nbd7, then free your kingdom with ...dxc4 or ...Ne4 and ...c5 or ...e5.}`,
    },
  ],
}
