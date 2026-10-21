import type { Plans } from './types'

export const nimzoIndianPlans: Plans = {
  "nimzo-indian:0": {
    "plan": "In the Rubinstein main line, White develops solidly with e3, Bd3 and Nf3. You castle, strike with ...d5 and ...c5, and swap on c3 when White plays a3, which leaves White with doubled c-pawns. After ...dxc4 Bxc4, the queen on c7 prepares ...e5 to challenge the centre. White hopes the two bishops and a later e4 will give attacking chances. You want to open lines while White's c-pawns are weak.",
    "remember": [
      "5...d5 and 6...c5 hit White's centre with both pawns before White is fully set up.",
      "8...Bxc3 after a3 doubles White's c-pawns, and 9...dxc4 makes the d3 bishop move a second time.",
      "10...Qc7 supports ...e5, which opens the c8 bishop and challenges d4."
    ]
  },
  "nimzo-indian:1": {
    "plan": "With 4.Qc2, White recaptures on c3 with the queen to keep healthy pawns, but that costs time. You castle, swap on c3 and fight for e4 with ...b6 and ...Bb7. When White spends a move on f3, White's king is still in the centre, so you hit back with ...h6 and ...d5 to open the game. White's trumps are the two bishops. Yours are a lead in development and active pieces.",
    "remember": [
      "5...Bxc3+ gives up the bishop pair, but White's queen and a-pawn have used up two moves.",
      "6...b6 and 7...Bb7 aim at e4, which is why White needs f3 to control it.",
      "8...h6 asks the bishop to decide, and 9...d5 strikes while White's king is uncastled."
    ]
  },
  "nimzo-indian:2": {
    "plan": "In the Sämisch, White gets the two bishops but has doubled c-pawns. You fix them with ...c5, then attack the c4 pawn with ...b6, ...Ba6 and ...Na5, and later ...Rc8. When White builds a big centre with e4, ...Ne8 (Capablanca's idea) stops e5 and Bg5 from gaining time and prepares ...f5 to challenge e4. White's plan is a kingside attack with f4-f5, so meet it in the centre.",
    "remember": [
      "4...Bxc3+ and 5...c5 fix White's doubled pawns, and the c4 pawn becomes your long-term target.",
      "8...b6 prepares ...Ba6, and ...Nc6-a5 adds a second attacker on c4.",
      "9...Ne8 sidesteps e5 and Bg5 and gets ready for ...f5 against e4."
    ]
  },
  "nimzo-indian:3": {
    "plan": "In the Leningrad, Bg5 pins your f6 knight. You ask the bishop to decide with ...h6, hit d4 with ...c5, and after d5 build a pawn wall on dark squares with ...d6 and ...e5. The centre is closed, which suits your knights, and White's doubled c-pawns are hard to use. White may try e4 and f4 or a kingside attack, and you can break the pin with ...g5 when needed.",
    "remember": [
      "4...h6 and 5...c5 make White decide early, and 6...d6 keeps the centre stable.",
      "7...Bxc3+ doubles White's c-pawns before a piece can recapture.",
      "8...e5 completes the c5, d6, e5 chain, so White's dark-squared bishop has few targets. ...g5 can break the pin."
    ]
  },
  "nimzo-indian:4": {
    "plan": "With 4.f3, White aims to play e4. You stop it with ...d5, then double White's pawns with ...Bxc3+ and hit d4 with ...c5. After cxd5 Nxd5 dxc5, ...Qa5 attacks c3 and c5 and wins the pawn back, and your knight drops to f6 to hit e4. White's f3 pawn has used a move and taken the best square from the g1 knight, so play quickly and target the weak c-pawns.",
    "remember": [
      "4...d5 stops e4, and 5...Bxc3+ 6.bxc3 c5 hits White's centre and the doubled pawns.",
      "8...Qa5 attacks c3 and c5, so you regain the pawn.",
      "9...Nf6 hits e4, 10...O-O gets your king safe, and ...Nbd7 wins back c5."
    ]
  },
  "nimzo-indian:5": {
    "plan": "In the Romanishin, White fianchettoes the bishop on g2 so it aims down the long diagonal. You swap on d4, castle and strike with ...d5, getting quick development. When the queen comes to b3 and attacks your bishop and knight, ...Qb6 defends and offers a queen trade into an equal position. Later ...Nc6 and ...Rd8 put pressure on the d-file.",
    "remember": [
      "5...cxd4 opens the c-file, and 6...O-O gets your king safe.",
      "7...d5 blocks the g2 bishop, and after 8.cxd5 the knight recaptures to a central square.",
      "9...Qb6 defends the b4 bishop, hits the d4 knight and offers a queen trade."
    ]
  },
  "nimzo-indian:6": {
    "plan": "In the Spielmann, Qb3 attacks your b4 bishop and lets White take back on c3 with the queen. You defend with ...c5 and ...Nc6 and jump to e4, hitting c3, c5 and f2. After Bd2, ...Nxd2 gives you the two bishops. Then you castle and win back the c5 pawn with ...Bxc5, with quick development and a comfortable game.",
    "remember": [
      "4...c5 defends the b4 bishop and hits d4.",
      "5...Nc6 develops and adds a second defender of the b4 bishop.",
      "6...Ne4 hits c3, c5 and f2. After 7.Bd2, 7...Nxd2 wins the bishop pair, and ...Bxc5 regains the pawn later."
    ]
  },
  "nimzo-indian:7": {
    "plan": "Against 3.Nf3 you play the Queen's Indian. With ...Ba6 you attack c4 at once. ...Bb4+ lures White's bishop to d2, the square its knight wants, before you drop back to e7. Then ...c6 and ...d5 build a solid centre that blunts the g2 bishop. When White's knight lands on e5, challenge it with ...Nfd7. Later you castle and free your game with ...c5 or ...b5.",
    "remember": [
      "4...Ba6 attacks c4, so White has to spend a move on b3.",
      "5...Bb4+ lures the bishop to d2, where it blocks the b1 knight, before 6...Be7 drops back.",
      "7...c6 and 8...d5 shut out the g2 bishop. Against 9.Ne5, 9...Nfd7 challenges the strong knight."
    ]
  },
}
