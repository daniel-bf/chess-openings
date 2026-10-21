import type { Plans } from './types'

export const englishPlans: Plans = {
  "english:0": {
    "plan": "This is a Reversed Sicilian: White plays Black's Dragon-style setup with an extra move. White expands on the queenside with b4 and b5 to push away the c6 knight, and the g2 bishop presses on the long diagonal. Black has more central space (e5 pawn) and aims for ...f5 and ...Be6.",
    "remember": [
      "5.cxd5 and 6.Bg2: the bishop hits the d5 knight.",
      "7.O-O and 8.d3 develop calmly, controlling e4 and c4.",
      "9.a3 prepares b4, starting the queenside expansion.",
    ]
  },
  "english:1": {
    "plan": "In the Closed English both sides fianchetto. White plays on the queenside with Rb1, a3 and b4-b5, using the open a-file and the b-pawn to kick the c6 knight. Black attacks on the kingside with ...f5, ...Nf6, ...O-O and sometimes ...f4. White develops with Nf3 or e3 and Nge2 and castles.",
    "remember": [
      "6.Rb1 supports b4 and takes the rook off the g7 bishop's diagonal.",
      "7.a3 makes b4 possible even after ...a5.",
      "8.b4 and 9.axb4 open the a-file, and 10.b5 kicks the c6 knight.",
    ]
  },
  "english:2": {
    "plan": "After d4 and the trades on d4, White has a small space edge thanks to the c4 pawn against Black's d6. White uses the long diagonal and the c- and d-files, often with Bd2, Rac1 and b3. Black plays ...a6, ...Rb8 and ...b5, or ...Bf5 and ...Be6, to fight for the light squares.",
    "remember": [
      "7.d4 breaks the symmetry and opens the long diagonal for the g2 bishop.",
      "8.Nxd4 and 9.Qxd4 recapture; the queen is centralised.",
      "10.Qd3 steps off the long diagonal of Black's g7 bishop.",
    ]
  },
  "english:3": {
    "plan": "In the Mikenas Attack the knights were traded and White has a broad centre (c4, c3 and d4) and the open b-file. White develops with Nf3, Bd3 and O-O and uses the central pawns. Black attacks the centre with ...c5 and ...e5 and tries to show the c-pawns are weak.",
    "remember": [
      "3.e4 grabs the centre, and 4.e5 kicks the f6 knight.",
      "5.exf6 takes the knight first, then 6.bxc3 recaptures toward the centre.",
      "7.d4 builds the centre and shuts the queen out of c3.",
    ]
  },
  "english:4": {
    "plan": "Against a King's Indian setup White takes the centre with e4 and d4 and uses the Averbakh setup (Be2 and Bg5). This makes Black's usual ...e5 harder; Black often plays ...c5 or ...h6 and ...e5 instead. White aims for Qd2, d5 and queenside play.",
    "remember": [
      "3.e4 and 4.d4 build a big pawn centre.",
      "5.Be2 develops and covers g4.",
      "6.Bg5 pins the f6 knight and slows down ...e5.",
    ]
  },
  "english:5": {
    "plan": "Against ...e6 and ...d5, d4 transposes to the Queen's Gambit Declined. White pins with Bg5 and develops with e3 and Nf3, keeping central pressure and often aiming for the minority attack (b4-b5) after cxd5.",
    "remember": [
      "3.d4 transposes to the Queen's Gambit Declined.",
      "4.Bg5 pins the f6 knight, which defends d5.",
      "5.e3 and 6.Nf3 develop solidly and open the f1 bishop.",
    ]
  },
  "english:6": {
    "plan": "Black pins with ...Bb4 and pushes ...e4. White attacks the e4 pawn with Ng5 and f3 and, after ...Bxc3 bxc3, has the bishop pair. Once the centre opens, those bishops are White's trump; Black wants to keep things closed with ...d5 or ...e3.",
    "remember": [
      "7.Ng5 attacks the e4 pawn instead of retreating.",
      "8.bxc3 gives White the bishop pair; the c-pawns control d4 and d5.",
      "9.f3 attacks e4 again and opens lines for the bishops.",
    ]
  },
  "english:7": {
    "plan": "This move order transposes to the Symmetrical English. White finishes with g3, Bg2 and castling, then breaks with d4 to get a small space edge.",
    "remember": [
      "3.Nf3 develops and prepares d4.",
      "6.O-O comes first, so the king is safe before the centre opens.",
      "7.d4 breaks the symmetry and opens the g2 bishop's diagonal.",
    ]
  },
  "english:8": {
    "plan": "After 2.e4 d5 exd5 cxd5 d4 this is the Panov Attack against the Caro-Kann. White usually ends up with an isolated d-pawn but active pieces. White plays for Nf3, Bd3 or Bg5 and a kingside attack, or c5 to gain queenside space. Black blockades d4 and aims for an endgame against the weak pawn.",
    "remember": [
      "2.e4 takes the centre against ...c6.",
      "4.d4 makes it a Panov Attack.",
      "5.Nc3 develops and adds a second attacker on d5, together with the c4 pawn.",
    ]
  },
  "english:9": {
    "plan": "Against ...g6 and ...c5, this transposes to the Symmetrical English. White finishes the fianchetto, castles and plays d4 for a small space edge.",
    "remember": [
      "2.Nc3 develops and controls d5.",
      "3.g3 and 4.Bg2 contest the long diagonal against Black's g7 bishop.",
      "7.d4 breaks the symmetry once White has castled.",
    ]
  },
  "english:10": {
    "plan": "Against ...Bb4, White jumps to d5 to avoid doubled pawns, then takes the centre with d4 and e4. White is comfortable: the d5 knight can take on e7 when useful, and White develops with Bd3 or f3 and Nge2. Black plays ...Nf6, ...O-O and ...c6 to kick the knight.",
    "remember": [
      "3.Nd5 attacks the bishop and avoids ...Bxc3.",
      "4.d4 challenges e5 and gains central space.",
      "5.e4 completes the big pawn centre and supports the d5 knight.",
    ]
  },
}
