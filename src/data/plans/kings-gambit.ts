import type { Plans } from './types'

export const kingsGambitPlans: Plans = {
  "kings-gambit:0": {
    "plan": "In the Kieseritzky Gambit, h4 attacks Black's g-pawn and Ne5 puts the knight in the centre. Black's pawns become overextended, but Black grabs your e4 pawn. The game is very sharp, with both kings under fire.",
    "remember": [
      "h4 attacks g5, forcing ...g4 before Black can support the pawn.",
      "Ne5 puts the knight in the centre, aiming at g4 and f7.",
      "Nd3 attacks the f4 pawn, and Bxf4 wins it back."
    ]
  },
  "kings-gambit:1": {
    "plan": "Against the Modern Defence ...d5, you take on d5 and develop with check. After the trades on c6 you play d4 and castle. The position is open, and you aim to win back the f4 pawn.",
    "remember": [
      "exd5 takes Black's centre pawn and leaves the f4 pawn as Black's only extra material.",
      "Bb5+ develops with check, and after ...c6 dxc6 Nxc6 your bishop pins the c6 knight.",
      "Nbd2 heads for c4 to challenge the d6 bishop that defends f4."
    ]
  },
  "kings-gambit:2": {
    "plan": "Against the Fischer Defence, you develop with Bc4 and d4 and castle. Then you break up Black's pawn chain with g3. You get open lines and a lead in development.",
    "remember": [
      "Bc4 develops and aims at f7, Black's weakest point after the f-pawn has gone.",
      "O-O puts your rook on the half-open f-file against the f4 pawn.",
      "g3 attacks f4 to break up Black's pawn chain."
    ]
  },
  "kings-gambit:3": {
    "plan": "Against the Schallopp ...Nf6, you push e5 to kick the knight to the edge of the board. You then play d4 and Qe2. You get space in the centre, and Black's knight on h5 is offside.",
    "remember": [
      "e5 kicks the knight to h5, where it is offside.",
      "d4 supports e5 and opens your c1 bishop.",
      "Qe2 supports e5 and lines up on the e-file against Black's king, which is why Black plays ...Be7."
    ]
  },
  "kings-gambit:4": {
    "plan": "Against the Cunningham ...Be7, you develop with Bc4 and push e5 to kick the knight. Then d4 builds the centre. You aim to win the f4 pawn back.",
    "remember": [
      "Bc4 develops and aims at f7, which is weak with your f-file about to open.",
      "e5 kicks the f6 knight to g4 and gains space, so Black loses time with his only developed knight.",
      "d4 supports e5 and opens your c1 bishop."
    ]
  },
  "kings-gambit:5": {
    "plan": "Against the Classical ...Bc5, you develop with Nf3, Nc3, Bc4 and d3. While Black's bishop controls g1, you cannot castle kingside. You pin the knight with Bb5 to stop ...Nd4.",
    "remember": [
      "Nf3 develops and covers h4, so ...Qh4+ never comes.",
      "d3 supports e4 and opens your c1 bishop.",
      "Bb5 pins the c6 knight, so Black cannot play ...Nd4 and pile up on your f3 knight."
    ]
  },
  "kings-gambit:6": {
    "plan": "Against the Falkbeer Countergambit, you take on d5 and then hit Black's e4 pawn with d3. After ...Nxe4 you pin the knight with Qe2. You are a pawn up, and Black has active pieces.",
    "remember": [
      "exd5 takes Black's d-pawn, and your extra pawn on d5 becomes a passed pawn.",
      "d3 attacks the e4 pawn at once, before Black can support it.",
      "Qe2 pins the e4 knight against Black's king and defends f2 against the c5 bishop."
    ]
  },
  "kings-gambit:7": {
    "plan": "Against ...Nc6 followed by ...exf4, you take the centre with d4 and then chase the knight with d5. Black counters with ...g5-g4 against your f3 knight, and both sides capture a knight. After Qxf3 you have open lines, a strong queen and the f4 pawn as a target.",
    "remember": [
      "d4 takes the centre while Black's e-pawn has left for f4.",
      "d5 attacks the c6 knight, so Black must give it up and counterattack with ...g4.",
      "Qxf3 recaptures the piece and lines your queen up against the f4 pawn and the f7 square."
    ]
  },
}
