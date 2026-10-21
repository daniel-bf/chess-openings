import type { Plans } from './types'

export const queensGambitPlans: Plans = {
  "queens-gambit:0": {
    "plan": "In the Orthodox Queen's Gambit Declined you pin with Bg5 and develop with e3, Nf3, Rc1 and Bd3. Black frees his cramped game with Capablanca's plan of ...dxc4, ...Nd5 and ...e5. The result is a simplified, open middlegame where you try to keep a small initiative.",
    "remember": [
      "Bg5 pins the f6 knight, which defends d5.",
      "Rc1 puts the rook on the c-file, which opens after ...c6 and ...dxc4.",
      "Bxe7 and Rxc3 answer the trades from ...Nd5; Black then frees his position with ...e5, so expect that break."
    ]
  },
  "queens-gambit:1": {
    "plan": "Against the Tartakower with ...h6 and ...b6, you trade on f6 and d5 to fix Black's pawn on d5. You then gain queenside space with b4. The structure gives you long-term pressure on the queenside and on d5.",
    "remember": [
      "Bh4 keeps the pin on f6 after ...h6.",
      "Bxf6 and cxd5 force Black to recapture on d5 with a pawn, which blocks the b7 bishop and gives you a fixed target.",
      "b4 stops Black's freeing ...c5 and gains queenside space; b5 can follow to fix Black's queenside pawns."
    ]
  },
  "queens-gambit:2": {
    "plan": "Against the Queen's Gambit Accepted with 3.e4 e5, you develop with Nf3, win back c4 with your bishop, and target Black's weak pawns with Qb3. After Bxe6 fxe6, Black's e-pawns are doubled. You end up with equal material and a better pawn structure, while Black has activity and a passed pawn on d4.",
    "remember": [
      "Nf3 develops and attacks e5 instead of allowing a queen trade after dxe5 ...Qxd1+.",
      "Bxc4 wins the gambit pawn back, and Bxe6 fxe6 leaves Black with doubled e-pawns.",
      "Qb3 attacks b7 and e6 at once, and Qxb7 wins a pawn back to restore material balance."
    ]
  },
  "queens-gambit:3": {
    "plan": "Against 3.e4 Nf6, you kick the knight with e5 and win back c4 with the bishop. This gives you a space advantage with a French-like pawn on e5. You develop with Ne2 and Nbc3, castle, and play with your extra space.",
    "remember": [
      "e5 kicks the f6 knight and gains space in the centre.",
      "Bxc4 regains the pawn and hits the d5 knight; after ...Nb6, Bb3 keeps the bishop on the a2-g8 diagonal.",
      "Ne2 supports d4 and keeps your f-pawn free to advance later to support e5."
    ]
  },
  "queens-gambit:4": {
    "plan": "Against the Slav with ...dxc4, you stop ...b5 with a4 and win the pawn back with e3 and Bxc4. Then you prepare e4, which takes the centre and hits Black's f5 bishop. You end up with a strong pawn centre and active pieces.",
    "remember": [
      "a4 stops ...b5, which would hold on to the extra c4 pawn.",
      "e3 opens the f1 bishop so Bxc4 wins the pawn back.",
      "Qe2 prepares e4, which gains the centre with tempo on the f5 bishop."
    ]
  },
  "queens-gambit:5": {
    "plan": "In the Moscow Semi-Slav you give up your dark-squared bishop with Bxf6 for a lead in development and central control. Black gets the bishop pair and a solid position. You aim to use your development and a later e4 break.",
    "remember": [
      "Bxf6 avoids the sharp lines after Bh4 and gives you a lead in development, at the cost of the bishop pair.",
      "e3 and Bd3 develop solidly; after ...dxc4, Bxc4 regains the pawn.",
      "O-O gets your king safe before you open the centre later with e4."
    ]
  },
  "queens-gambit:6": {
    "plan": "In the Cambridge Springs Black pins your c3 knight with ...Qa5 and ...Bb4 and hopes to win material. You meet the threats with Nd2 and Qc2, then finish development with Be2 and castling. If the pressure is neutralised, Black's queen on a5 can become a target.",
    "remember": [
      "Bg5 seems to allow cxd5 exd5 Nxd5? winning a pawn, but ...Nxd5 Bxd8 Bb4+ wins the queen back and leaves Black a piece up (the Elephant Trap).",
      "Nd2 covers e4 against ...Ne4 and covers c4, so if ...dxc4 then Nxc4 hits the queen.",
      "Qc2 defends the c3 knight, which is pinned by ...Bb4 and attacked by ...Qa5."
    ]
  },
  "queens-gambit:7": {
    "plan": "In the Lasker Defence Black trades pieces with ...Ne4 to free his game. After the exchanges you have a pawn on c3 and Black has a pawn on d5. You keep pressure on d5 with Qb3 and attack it again with c4.",
    "remember": [
      "Bxe7 and bxc3 come after the trades, and cxd5 first forces Black to recapture with ...exd5.",
      "Qb3 hits d5 and b7 at once, so Black must defend with ...Rd8.",
      "c4 attacks d5 again and opens lines for your pieces."
    ]
  },
  "queens-gambit:8": {
    "plan": "Against the Albin Countergambit you keep the extra e5 pawn and develop with Nf3, g3, Bg2 and Nbd2. Black usually castles queenside, so you castle short and attack on the queenside with your pawns and pieces. Black's d4 pawn is cramping but can become a target.",
    "remember": [
      "Nf3 develops and defends e5; avoid e3?, which allows ...Bb4+ Bd2 dxe3 and the Lasker Trap with ...fxg1=N+.",
      "g3 and Bg2 put your bishop on the long diagonal, aimed at b7 and Black's queenside king.",
      "Nbd2 develops without letting the d4 pawn hit a knight on c3, and the knight can go to b3 to attack d4."
    ]
  },
  "queens-gambit:9": {
    "plan": "Against the Chigorin you take on d5 and recapture on f3 with the g-pawn. Black's queen comes out early, and after ...Bxc3 you have both bishops against two knights. You aim for a strong centre and use your bishops as the position opens.",
    "remember": [
      "cxd5 comes first, so after ...Bxf3 Black has to recapture on d5 with the queen.",
      "gxf3 keeps control of e4 and gives you the bishop pair, plus a half-open g-file.",
      "Nc3 hits the queen with tempo, and after ...Bb4 Bd2 bxc3 you have two bishops and a solid centre."
    ]
  },
  "queens-gambit:10": {
    "plan": "Against the Chebanenko ...a6, you push c5 to stop Black from playing ...b5 against your c4 pawn. This gains queenside space and locks the queenside. You then develop with Bf4 and e3 and later play b4.",
    "remember": [
      "c5 gains queenside space and stops ...dxc4 followed by ...b5.",
      "Bf4 controls e5 and makes Black's freeing ...e5 break harder.",
      "e3 supports d4, the base of your pawn chain."
    ]
  },
}
