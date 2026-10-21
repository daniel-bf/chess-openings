import type { Plans } from './types'

export const kingsGambitPlans: Plans = {
  "kings-gambit:0": {
    "plan": "In the Kieseritzky Gambit, h4 broke up Black's pawn chain and Ne5 centralised the knight. Black counter-attacked with ...Nf6 and took e4, you won back f4, and ...Qe7 forced Qe2. The game is very sharp: both sides often castle queenside, and you want to trade the e4 knight and use your lead in development while Black's kingside pawns are loose.",
    "remember": [
      "h4 attacks g5, forcing ...g4 before Black can support the pawn.",
      "Nd3 attacks the f4 pawn, and Bxf4 wins it back.",
      "Qe2 blocks the e-file after ...Qe7, so the e4 knight cannot give a discovered check."
    ]
  },
  "kings-gambit:1": {
    "plan": "Against the Modern Defence ...d5 you took on d5 and developed with check. After the trades on c6 you played d4 and castled. Now Nbd2-c4 challenges the d6 bishop that guards f4; once it goes, the f4 pawn falls. Black has active pieces and pressure on d4, so keep your centre protected.",
    "remember": [
      "exd5 takes Black's centre pawn and leaves the f4 pawn as Black's only extra material.",
      "Bb5+ develops with check, and after ...c6 dxc6 Nxc6 your bishop pins the c6 knight.",
      "Nbd2 heads for c4 to challenge the d6 bishop that defends f4."
    ]
  },
  "kings-gambit:2": {
    "plan": "Against the Fischer Defence you developed with Bc4 and stopped ...g5 with h4. Black cannot hold the f4 pawn with pawns any more, so after Nc3 and d4 you aim to win it back with Bxf4 and castle. Your pieces are active and you have a strong centre, while Black hopes for ...Nh5 or ...Bg4 to pressure d4.",
    "remember": [
      "Bc4 develops and aims at f7, Black's weakest point after the f-pawn has gone.",
      "h4 stops ...g5, because 5...g5 6.hxg5 hxg5?? 7.Rxh8 wins Black's rook.",
      "d4 takes the centre and opens your c1 bishop to win back f4."
    ]
  },
  "kings-gambit:3": {
    "plan": "Against the Schallopp ...Nf6 you kicked the knight to h5 with e5, built a centre with d4 and attacked the knight with Be2. Black protected f4 with ...g5. Now castle and add the f1 rook to the pressure on f4, then undermine Black's pawns with Ne1-d3, g3 or c4. Black's knight on h5 is out of play.",
    "remember": [
      "e5 kicks the knight to h5, where it is offside.",
      "d4 supports e5 and opens your c1 bishop toward f4.",
      "Be2 attacks the h5 knight, the piece holding f4, so Black has to defend with ...g5."
    ]
  },
  "kings-gambit:4": {
    "plan": "Against the Cunningham ...Be7 you developed with Bc4 and kicked the knight with e5. After d4 and ...d6, exd6 opened the e-file, and Qe2+ forces Black to spend a move. Then win back the f4 pawn with Bxf4 and castle. You have easy development, while Black's knight on g4 can be chased with h3.",
    "remember": [
      "Bc4 develops and frees f1, so ...Bh4+ can be met by Kf1.",
      "e5 kicks the f6 knight and gains space.",
      "Qe2+ after exd6 Bxd6 forces Black to block or trade queens, and Bxf4 then regains the pawn."
    ]
  },
  "kings-gambit:5": {
    "plan": "Against the Classical Declined ...Bc5 you developed with Nf3, Nc3, Bc4 and d3. While Black's bishop covered g1 you could not castle, so Na4 and Nxb6 removed it. Now castle, and later open the f-file with fxe5 or f5 and use the bishop pair. Black's ...Bg4 pin means you may need h3 to break it.",
    "remember": [
      "Nf3 develops and covers h4, so ...Qh4+ never comes.",
      "Na4 chases the c5 bishop, and Nxb6 trades it to give you the bishop pair.",
      "O-O comes as soon as the c5 bishop has gone and g1 is safe."
    ]
  },
  "kings-gambit:6": {
    "plan": "Against the Falkbeer Countergambit you took on d5 and attacked Black's e4 wedge with d3. After ...Nxe4 you pinned the knight with Qe2. You are a pawn up; finish development with Nc3, Be3 and castling queenside, and keep the d5 pawn. Black has active pieces and tries to keep the initiative.",
    "remember": [
      "exd5 takes Black's d-pawn, and your extra pawn on d5 can become a passed pawn.",
      "d3 attacks the e4 pawn at once, before Black can support it.",
      "Qe2 pins the e4 knight against Black's king and defends f2 against the c5 bishop."
    ]
  },
  "kings-gambit:7": {
    "plan": "Against ...Nc6 followed by ...exf4 you took the centre with d4 and chased the knight with d5. Black countered with ...g5-g4 against your f3 knight, and both sides captured a knight. After Qxf3 you have open lines and a strong queen, and the f4 pawn is a target for Bxf4. Watch for ...Qh4+, which you can meet with g3 or Kd1.",
    "remember": [
      "d4 takes the centre once Black's e-pawn has left for f4.",
      "d5 attacks the c6 knight, so Black must give it up and counter-attack with ...g4.",
      "Qxf3 recaptures the piece and lines your queen up against the f4 pawn and the f7 square."
    ]
  },
}
