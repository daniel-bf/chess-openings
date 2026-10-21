import type { Plans } from './types'

export const queensGambitPlans: Plans = {
  "queens-gambit:0": {
    "plan": "Black has freed his position with Capablanca's ...dxc4, ...Nd5 and ...e5, and after 13.dxe5 and the knight trade the centre is open. White keeps a small initiative: f4 gains space and kicks the queen, the c4 bishop and the f-file aim at f7, and the c3 rook can swing to the kingside or the d-file. Black wants ...Bf5 or ...Bg4 and to trade more pieces to reach a level endgame.",
    "remember": [
      "4.Bg5 pins the f6 knight, one of the two defenders of d5.",
      "7.Rc1 goes to the c-file before it opens; after ...dxc4 Bxc4 and ...Nd5, trade with 10.Bxe7 and 12.Rxc3.",
      "After Black's freeing ...e5, 13.dxe5 and 14.Nxe5 bring the queen to e5, and 15.f4 chases it with gain of time.",
    ]
  },
  "queens-gambit:1": {
    "plan": "After the early cxd5 and two trades, Black's pawn on d5 blocks his own b7-a8 diagonal, so the Tartakower bishop ends up on e6. Black's usual plan is ...c5, accepting 'hanging pawns' on c5 and d5 (two side-by-side pawns with no pawn support from the sides). White piles up on them with Qa3, Rc1 and Bb5 or Be2, and waits for a pawn to become weak.",
    "remember": [
      "7.Bh4 keeps the pin after ...h6.",
      "8.cxd5 and 10.Nxd5 force ...exd5, so the d5 pawn blocks Black's long diagonal.",
      "11.Rc1 and 12.Qa4 (Fischer's idea) aim at c5 and a7; if ...c5, Qa3 hits c5 again.",
    ]
  },
  "queens-gambit:2": {
    "plan": "Material is level. Black has doubled e-pawns and a passed but exposed pawn on d4; White has the healthier pawn structure. White wins or blockades the d4 pawn with Nbd2-b3 and Rd1, and keeps the queen active. Black uses the open b- and f-files and quick development for counterplay, so do not get greedy with the queen.",
    "remember": [
      "4.Nf3 attacks e5; avoid 4.dxe5 and the queen trade.",
      "5.Bxc4 regains the pawn, and 7.Bxe6 fxe6 gives Black doubled e-pawns.",
      "8.Qb3 hits b7 and e6; after 9.Qxb7 Rb8 10.Qa6, play 11.Nbd2 to go after d4.",
    ]
  },
  "queens-gambit:3": {
    "plan": "White's pawn on e5 gives a French-style space advantage, and the knights on e2 and c3 support d4. White plans Nf4 or Ng3, f4-f5 when possible, and a kingside attack. Black attacks the centre from the sides with ...Na5 (to trade the b3 bishop), ...f6 or ...c5.",
    "remember": [
      "4.e5 gains space and kicks the knight from f6.",
      "5.Bxc4 regains the pawn; after ...Nb6, 6.Bb3 keeps the bishop on the a2-g8 diagonal.",
      "7.Ne2 guards d4 and keeps the f-pawn free to advance and support e5.",
    ]
  },
  "queens-gambit:4": {
    "plan": "White has regained the pawn and built the e4-d4 centre. The plan is e5 to drive the f6 knight away, then use the space for a kingside attack, often with Nh4 to chase the g6 bishop. Black wants to hit the centre with ...c5 or ...e5, or blockade on d5 after e5.",
    "remember": [
      "5.a4 stops ...b5, so Black cannot keep the c4 pawn.",
      "6.e3 and 7.Bxc4 regain the pawn; 9.Qe2 prepares 10.e4 with tempo on the f5 bishop.",
      "11.Bd3 supports e4 and prepares e5.",
    ]
  },
  "queens-gambit:5": {
    "plan": "White has given up the dark-squared bishop for a lead in development and a simple position. Black has the bishop pair and will play ...Bg7, ...O-O and the freeing ...e5. White aims for e4 and d5 to keep Black cramped, or a4-a5 and pressure on the queenside, and tries to strike before Black's bishops come alive.",
    "remember": [
      "6.Bxf6 avoids the sharp 6.Bh4 lines and gives you quick development instead of the bishop pair.",
      "7.e3 and 8.Bd3 develop; after ...dxc4, 9.Bxc4 regains the pawn.",
      "10.O-O gets the king safe before White opens the centre with e4.",
    ]
  },
  "queens-gambit:6": {
    "plan": "In the Cambridge Springs Black uses ...Qa5 and ...Bb4 to pile up on the pinned c3 knight. White parries with Nd2 and Qc2, then castles and finishes development. Once White's king is safe, the queen on a5 can be chased with Nb3 or a3, and Black must still solve the problem of the c8 bishop, usually with ...e5 or ...c5.",
    "remember": [
      "After 4...Nbd7, do not grab 5.cxd5 exd5 6.Nxd5??: Nxd5 7.Bxd8 Bb4+ wins back the queen with a piece more (the Elephant Trap).",
      "7.Nd2 stops ...Ne4 and meets ...dxc4 with Nxc4, hitting the queen.",
      "8.Qc2 defends the pinned c3 knight a second time; 9.Be2 prepares castling.",
    ]
  },
  "queens-gambit:7": {
    "plan": "After the Lasker trades, White has a pawn on c3 and Black a d5 pawn that no other pawn can defend. White attacks d5 with Qb3 and c4, and after ...dxc4 Bxc4 gets fast development and play on the d- and b-files. Black wants ...Nc6, ...Be6 and to complete development without losing a pawn.",
    "remember": [
      "8.Bxe7 and 9.cxd5 come first, so after ...Nxc3 10.bxc3 Black must recapture on d5 with a pawn.",
      "11.Qb3 attacks the d5 pawn, and Black usually defends with ...Rd8.",
      "12.c4 attacks d5 again and opens lines for White's pieces.",
    ]
  },
  "queens-gambit:8": {
    "plan": "White keeps the extra e5 pawn and develops with Nf3, g3, Bg2 and Nbd2. Black castles queenside and often attacks with ...h5-h4 or ...Bh3. White castles kingside and attacks Black's king with b4-b5, Qa4 and Nb3, while the d4 pawn can become a target.",
    "remember": [
      "4.Nf3 defends e5; 4.e3? walks into ...Bb4+ and the Lasker Trap.",
      "5.g3 and 7.Bg2 aim the bishop at b7 and Black's queenside king.",
      "6.Nbd2 develops away from the d4 pawn, ready to go to b3 and attack it.",
    ]
  },
  "queens-gambit:9": {
    "plan": "White has the two bishops and a strong pawn centre; Black has knights and will try to keep the position closed. White wants to open lines, often with d4-d5 or c3-c4, and use the half-open g-file. Black plays ...exd4 and ...Nf6, castles and attacks White's centre and loose kingside.",
    "remember": [
      "4.cxd5 comes first, so after ...Bxf3 Black must win the pawn back with the queen.",
      "5.gxf3 gives White the bishop pair and control of e4.",
      "7.Nc3 hits the queen; after ...Bb4, 8.Bd2 and 9.bxc3 keep both bishops and a big centre.",
    ]
  },
  "queens-gambit:10": {
    "plan": "With c5, White has locked the queenside and gained space there. White plays Be2, O-O and b4-b5 to open the queenside where he has more space. Black's main counter is the central ...e5 break, which Bf4 makes harder, or a later ...b6 to chip at c5.",
    "remember": [
      "5.c5 gains space and makes ...b5 pointless, since there is no c4 pawn to attack.",
      "6.Bf4 controls e5 and makes Black's ...e5 break harder.",
      "7.e3 supports d4; then Be2, O-O and b4 follow.",
    ]
  },
  "queens-gambit:11": {
    "plan": "Black has an isolated pawn on d5. White blockades the square in front of it (d4) with a knight, presses on it with the g2 bishop, the rooks on the c- and d-files and the queen, and is happy to trade pieces, because the weak pawn gets weaker in an endgame. Black wants active piece play: ...Re8, ...Bg4 or ...Be6, and the ...d4 break when it works.",
    "remember": [
      "4.cxd5 forces ...exd5 and leaves Black with an isolated d-pawn.",
      "6.g3 and 7.Bg2 aim the bishop straight at d5.",
      "After 9...cxd4 10.Nxd4 h6, 11.Be3 keeps the bishop guarding d4, the square in front of the pawn.",
    ]
  },
  "queens-gambit:12": {
    "plan": "White has a big centre with the e4 pawn and quicker development, and the queens are already off. White develops with Bb5+ or Bc4, Be3, O-O-O or Ke2, and uses the half-open d-file and the extra central space. Black aims to finish development with ...Bc5 or ...Bb4 and ...Nc6 and to target the e4 pawn.",
    "remember": [
      "3.cxd5 and 4.e4 grab the centre and kick the d5 knight.",
      "Against ...e5 play 6.Nf3, not 6.dxe5 Qxd1+.",
      "7.Qxd4 and 8.Nxd4 leave White with a centralised knight and a lead in development.",
    ]
  },
  "queens-gambit:13": {
    "plan": "This is just a move-order trick: after 3...Be7 4.Nf3 Nf6 5.Bg5 h6 6.Bh4 O-O 7.e3 the position is the same as in the Tartakower and Lasker lines. Black chooses between ...b6 (meet it with cxd5), ...Ne4 (trade bishops on e7 and play cxd5), and ...Nbd7. White's plans are the same: c-file pressure, a later Rc1 and Bd3.",
    "remember": [
      "4.Nf3 controls e5 and keeps the normal QGD set-up.",
      "5.Bg5 pins the f6 knight once it arrives.",
      "7.e3 reaches the main-line position after 6...O-O.",
    ]
  },
}
