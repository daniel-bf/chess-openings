import type { Plans } from './types'

export const ruyLopezPlans: Plans = {
  "ruy-lopez:0": {
    "plan": "This is the classic Closed Ruy Lopez. You built slowly with Re1, c3 and h3 before striking with d4, and Black answered with queenside space: ...b5, ...Na5 and ...c5. Now your knight goes Nbd2-f1-g3 toward the kingside, and you may close the centre with d5 to attack on the kingside. Black plays on the queenside, often with ...cxd4 and pressure on the c-file.",
    "remember": [
      "Re1 defends e4, so Bxc6 followed by Nxe5 becomes a real threat; that is why Black spends a move on ...b5.",
      "h3 takes g4 away from Black's bishop and knight, so you can play d4 without a pin on your f3 knight.",
      "Bc2 answers ...Na5 by keeping your light-squared bishop on the b1-h7 diagonal, where it defends e4 and aims at Black's king."
    ]
  },
  "ruy-lopez:1": {
    "plan": "In the Marshall Attack Black gave up a pawn for a fast attack on your king. You accepted, brought the rook back to e1 and blocked the h2 threat with g3. Now finish development with Be3, Qd3 and Nd2, and use Re4 or f3 when needed to push the black pieces back. If you survive the pressure on the light squares around your king, the extra pawn counts in the endgame.",
    "remember": [
      "exd5 and Nxe5 accept the gambit: you win a pawn, and Black gets fast development and attacking chances in return.",
      "g3 is the answer to ...Qh4: it blocks the d6 bishop's diagonal so h2 is safe.",
      "Be3 develops and covers the dark squares; Qd3 and Nd2 follow to keep the back rank and f3 protected."
    ]
  },
  "ruy-lopez:2": {
    "plan": "The Berlin leads to a queenless middlegame after Bxc6, dxe5 and Qxd8+. Black has the bishop pair but doubled c-pawns and a king that can no longer castle. You have a healthy four-against-three pawn majority on the kingside and the pawn on e5, which takes squares away from Black's pieces. Develop with Bf4, Rad1 and Rfe1, and later push your kingside pawns.",
    "remember": [
      "O-O ignores ...Nxe4 because d4 regains the pawn by hitting e5 and opening the centre.",
      "Bxc6 and dxe5 drive Black's knight from d6 to f5 and leave you a pawn on e5.",
      "h3 keeps Black's pieces off g4 and prepares g4 to chase the f5 knight, which is why Black answers ...h5."
    ]
  },
  "ruy-lopez:3": {
    "plan": "In the Open Ruy Lopez Black grabbed your e4 pawn with the knight. You hit back with d4 and dxe5, which gives you a pawn on e5, and now you challenge the strong knight on e4 with Nbd2 and Bc2. Your play usually comes on the kingside behind the e5 pawn, while Black relies on queenside space and active pieces. Watch out for the sacrifice ...Nxf2.",
    "remember": [
      "d4 strikes at e5 immediately and opens the centre while Black's king is still uncastled.",
      "c3 gives your bishop a retreat square on c2 and covers d4 and b4.",
      "Nbd2 and Bc2 both attack the e4 knight, forcing Black to trade it, retreat it or sacrifice."
    ]
  },
  "ruy-lopez:4": {
    "plan": "Against the Classical ...Bc5 you castled and used c3 and d4 to build a broad centre while hitting the bishop. Black's bishop dropped to b6, where it keeps eyeing d4 and f2. Keep the centre solid with Re1 and h3, then develop with Nbd2 or Bg5. Black wants to undermine d4, so watch for ...exd4 and ...Bg4 ideas.",
    "remember": [
      "c3 prepares d4, which attacks the c5 bishop and gains the centre with tempo.",
      "Re1 defends e4, which becomes loose once the centre opens and Black's f6 knight is attacking it.",
      "h3 stops ...Bg4, which would pin your f3 knight and add pressure to d4."
    ]
  },
  "ruy-lopez:5": {
    "plan": "Against the Schliemann gambit ...f5 you stayed calm with d3. After ...fxe4 dxe4 you simply develop, and Black's missing f-pawn leaves the a2-g8 diagonal and the e6 square weak. Your bishop returns to c4 to stop Black castling kingside, and your pieces aim at Black's loosened kingside. Black has the half-open f-file in return.",
    "remember": [
      "d3 supports e4, so after ...fxe4 you recapture with dxe4 and keep a sound centre.",
      "Nc3 develops and adds a defender to e4, which Black's f6 knight is attacking.",
      "Bc4 covers g8 on the open a2-g8 diagonal, so Black cannot castle kingside for now."
    ]
  },
  "ruy-lopez:6": {
    "plan": "In the Breyer Black reroutes the c6 knight via b8 to d7 to support e5 and free the c-pawn. You used the time to play d4 and the classic Nbd2-f1-g3 manoeuvre. Now a4 opens a second front against b5, while the knight on g3 can jump to f5 or h5. The centre stays tense; Black often answers with ...c5 and ...Bg7.",
    "remember": [
      "d4 comes while the knight is on b8 and cannot add pressure to your centre.",
      "Nbd2-f1-g3 brings the queen's knight to the kingside, where it eyes f5 and h5.",
      "a4 attacks b5 and can open the a-file, so Black has to deal with problems on both wings."
    ]
  },
  "ruy-lopez:7": {
    "plan": "In the Zaitsev Black piles up on e4 with ...Bb7, ...Re8 and ...Bf8. You keep e4 protected and use a4 to question the b5 pawn. After ...exd4 cxd4 you have the classic d4-e4 centre, and the bishop retreats to b1 to stay on its best diagonal. Next comes Ra3, swinging the rook along the third rank to help in the centre or on the kingside.",
    "remember": [
      "a4 attacks b5 and can open the a-file for your rook, giving Black queenside problems.",
      "cxd4 gives you pawns on d4 and e4, but Black's bishop, rook and knight all hit e4, so keep it protected.",
      "Bb1 answers ...Nb4 by keeping your bishop on the b1-h7 diagonal instead of letting it be traded."
    ]
  },
  "ruy-lopez:8": {
    "plan": "Against the Steinitz Deferred ...d6 you built a big centre with c3 and d4. Black's position is solid but cramped. You complete development with Re1 and Nbd2, then Nf1-g3 and Bc2, keeping the centre and using your extra space. Black usually waits with ...Re8 and ...Bf8 and hopes to free himself with ...exd4 or ...d5.",
    "remember": [
      "c3 prepares d4 and gives your bishop a retreat square on c2, so it cannot be trapped by ...b5 and ...c4.",
      "d4 builds a big centre and puts pressure on e5, which Black must hold with pieces.",
      "Re1 defends e4, and Nbd2 can head to f1 and g3 as in the Closed Ruy Lopez."
    ]
  },
  "ruy-lopez:9": {
    "plan": "Against the Old Steinitz ...d6 you opened the centre with d4 while the c6 knight was pinned. Black had to give up the centre with ...exd4, so you have a pawn on e4 against d6 and more space. With more space you avoid trades: Bf1 keeps the bishop, and plans like f4 or Bg5 and Qd2 follow. Black wants to free himself with ...Re8, ...Bf8 and ...g6.",
    "remember": [
      "d4 hits e5 while Bb5 pins the c6 knight, so Black cannot hold e5 comfortably.",
      "Re1 defends e4 and sets the Tarrasch Trap: 7...O-O? 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 and 11.Nxe5 wins material.",
      "Bf1 avoids exchanges, because the side with more space wants to keep pieces on the board."
    ]
  },
}
