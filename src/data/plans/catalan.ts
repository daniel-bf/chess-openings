import type { Plans } from './types'

export const catalanPlans: Plans = {
  "catalan:0": {
    "plan": "In the Open Catalan Black takes the c4 pawn with ...dxc4. You win it back with Qc2 and a4, while your g2 bishop presses along the long diagonal toward the queenside. You get a lasting, low-risk edge with pressure on Black's queenside.",
    "remember": [
      "Qc2 attacks the c4 pawn so you can win it back.",
      "a4 stops ...b5, which would otherwise protect the extra pawn on c4.",
      "Qxc4 regains the pawn, and Bg5 then develops with pressure on the f6 knight, which shields Black's king."
    ]
  },
  "catalan:1": {
    "plan": "Against ...dxc4 with ...c5, you win the pawn back quickly with Qa4 and Qxc4. Black gains queenside space with ...b5 and ...c4 by chasing your queen. Those advanced pawns can become loose, and your queen and g2 bishop stay ready to target them.",
    "remember": [
      "Qa4 pins the c6 knight against Black's king and attacks c4.",
      "Qxc4 wins back the gambit pawn and keeps the queen on the c-file against Black's queenside.",
      "Qd3 and then Qc2 step away from ...b5 and ...c4 while keeping your queen active in the centre."
    ]
  },
  "catalan:2": {
    "plan": "Against ...dxc4 with ...Nc6, you pin the knight with Qa4 and aim to win back c4. After ...Bb4+ Bd2 the dark-squared bishops come off. You castle and then go after the c4 pawn and Black's queenside.",
    "remember": [
      "Qa4 pins the c6 knight against Black's king and attacks the c4 pawn.",
      "Bd2 blocks the check from ...Bb4+, and Bxb4 trades off Black's active bishop.",
      "O-O gets your king safe before you go after the weak c4 pawn."
    ]
  },
  "catalan:3": {
    "plan": "In the Closed Catalan Black keeps a pawn on d5 and builds a solid wall with ...c6 and ...b6. You prepare e4 with Qc2 and Nbd2 to take the centre. You get central space, and your g2 bishop gains strength as the centre opens.",
    "remember": [
      "Qc2 controls e4 and supports your c4 pawn, preparing the e4 break.",
      "Nbd2 adds support to e4 and can recapture on c4 if Black plays ...dxc4.",
      "e4 strikes in the centre once everything is ready, gaining space before Black finishes ...Bb7."
    ]
  },
  "catalan:4": {
    "plan": "Against ...Bb4+, you block with Bd2, and Black often drops the bishop back to e7. You continue with Nf3, castling and Qc2. You get the typical Catalan structure with pressure on the long diagonal and on c4 and e4.",
    "remember": [
      "Bd2 blocks the check, and after ...Be7 Black has spent two moves to put the bishop on e7.",
      "Nf3 and O-O complete your kingside development.",
      "Qc2 supports c4 and controls e4, which matters once Black plays ...b6 to pressure c4."
    ]
  },
  "catalan:5": {
    "plan": "Against an early ...Bb4+, you block with Bd2 before your bishop goes to g2. Black's bishop retreats to e7, and you develop with Bg2, Nf3 and castling. You reach a normal Catalan with pressure on the long diagonal.",
    "remember": [
      "Bd2 blocks the check, and ...Be7 means Black has spent an extra move on the bishop.",
      "Bg2 puts your bishop on the long diagonal, aimed at d5 and Black's queenside.",
      "O-O gets your king safe behind the fianchetto."
    ]
  },
  "catalan:6": {
    "plan": "Against ...c5, you push d5 and reach a Fianchetto Benoni after ...exd5 cxd5. You have a central pawn majority and a space wedge on d5, while Black has a queenside majority. Your g2 bishop supports d5, and you play in the centre against the d6 pawn.",
    "remember": [
      "d5 gains space and cramps Black's position.",
      "Nc3 develops and supports your d5 pawn.",
      "Bg2 supports d5 from the long diagonal, and O-O keeps your king safe behind it."
    ]
  },
  "catalan:7": {
    "plan": "Against ...g6, you play the Fianchetto King's Indian with g3, Bg2, Nc3, Nf3 and castling. When Black strikes with ...e5, you answer with e4 for a big centre. Your g2 bishop keeps your king safe while you play with your extra space.",
    "remember": [
      "g3 and Bg2 put your bishop on the long diagonal, opposing Black's g7 bishop and guarding your king.",
      "Nc3 and Nf3 control d5, e4 and e5.",
      "e4 answers ...e5 by taking more central space."
    ]
  },
}
