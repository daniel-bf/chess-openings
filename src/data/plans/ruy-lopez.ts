import type { Plans } from './types'

export const ruyLopezPlans: Plans = {
  "ruy-lopez:0": {
    "plan": "This is the classic Closed Ruy Lopez, where you build slowly with Re1, c3 and h3 before striking with d4. Black gains queenside space with ...b5, ...Na5 and ...c5, and you keep your light-squared bishop on c2. The centre usually stays closed, so you play on the kingside while Black plays on the queenside.",
    "remember": [
      "Re1 defends e4, so Bxc6 followed by Nxe5 becomes a real threat; that is why Black spends a move on ...b5.",
      "h3 takes g4 away from Black's bishop and knight, so you can play d4 without a pin on your f3 knight.",
      "Bc2 answers ...Na5 by keeping your light-squared bishop on the b1-h7 diagonal, where it defends e4 and later aims at Black's king."
    ]
  },
  "ruy-lopez:1": {
    "plan": "In the Marshall Attack Black gives up the e5 pawn for a fast attack on your king. You accept the pawn, bring the rook back to e1 and blunt the attack with g3, then finish developing with moves like Be3 and Nd2. If you survive the pressure on the light squares around your king, your extra pawn counts in the endgame.",
    "remember": [
      "exd5 and Nxe5 accept the gambit: you win a pawn and Black gets fast development and attacking chances in return.",
      "Re1 pulls the rook back home after ...Bd6 attacks it on e5, and keeps it guarding your back rank and the e-file.",
      "g3 is forced after ...Qh4 because Black's queen and the d6 bishop both hit h2; it weakens the light squares, so after ...Qh3 you must keep f3 and the back rank covered."
    ]
  },
  "ruy-lopez:2": {
    "plan": "The Berlin quickly leads to a queenless middlegame after Bxc6, dxe5 and Qxd8+. Black has the bishop pair but doubled c-pawns and a king that can no longer castle. You have a healthy four against three pawn majority on the kingside and aim to use it, together with the cramping pawn on e5.",
    "remember": [
      "O-O ignores ...Nxe4 because d4 regains the pawn by hitting e5 and opening the e-file toward Black's king.",
      "Bxc6 and dxe5 drive Black's knight from d6 to f5 and leave you a pawn on e5 that takes squares away from Black's pieces.",
      "h3 keeps Black's pieces off g4 and prepares g4 to chase the f5 knight, which is why Black answers with ...h5."
    ]
  },
  "ruy-lopez:3": {
    "plan": "In the Open Ruy Lopez Black grabs your e4 pawn with the knight. You hit back at once with d4 and dxe5, which gives you a pawn wedge on e5, and then challenge the strong knight on e4. Your play usually comes on the kingside behind the e5 pawn, while Black relies on queenside space and active pieces.",
    "remember": [
      "d4 strikes at e5 immediately and opens the centre while Black's king is still uncastled and his knight sits on e4.",
      "c3 gives your bishop a retreat square on c2 and covers d4 and b4 from Black's pieces.",
      "Nbd2 and Bc2 both attack the e4 knight, forcing Black to decide whether to trade it or retreat."
    ]
  },
  "ruy-lopez:4": {
    "plan": "Against the Classical ...Bc5, you castle and use c3 and d4 to build a broad centre while hitting the bishop. Black's bishop drops to b6, where it keeps eyeing d4 and f2. You aim for a solid centre with e4 and d4, and gain space before Black can free his game.",
    "remember": [
      "c3 prepares d4, which attacks the c5 bishop and gains the centre with tempo.",
      "Re1 defends e4, which becomes loose once the centre opens and Black's f6 knight is attacking it.",
      "h3 stops ...Bg4, which would pin your f3 knight and add pressure to d4."
    ]
  },
  "ruy-lopez:5": {
    "plan": "Against the Schliemann gambit ...f5, you stay calm with d3 instead of grabbing material. After ...fxe4 dxe4 you simply develop, and Black's missing f-pawn leaves the a2-g8 diagonal and the e6 square weak. You aim your pieces at Black's loosened kingside.",
    "remember": [
      "d3 supports e4, so after ...fxe4 you recapture with dxe4 and keep a sound centre.",
      "Nc3 develops and adds a second defender to e4, which Black's f6 knight is attacking.",
      "Bc4 covers g8 on the open a2-g8 diagonal, so Black cannot castle kingside for now."
    ]
  },
  "ruy-lopez:6": {
    "plan": "In the Breyer Black reroutes the c6 knight via b8 to d7 to support e5 and free the c-pawn. You use the time to play d4 and then the classic Nbd2-f1-g3 manoeuvre. The centre stays tense and closed, and you look for play on the kingside or with a4 on the queenside.",
    "remember": [
      "d4 comes while the knight is on b8 and cannot add pressure to your centre.",
      "Nbd2-f1-g3 brings the queen's knight to the kingside, where it eyes f5 and h5 and frees your c1 bishop.",
      "Bc2 keeps the bishop on the b1-h7 diagonal to defend e4, which Black targets with ...Bb7 and ...Re8."
    ]
  },
  "ruy-lopez:7": {
    "plan": "In the Zaitsev Black piles up on e4 with ...Bb7, ...Re8 and ...Bf8. You keep e4 firmly protected and use a4 to question Black's b5 pawn. After ...exd4 cxd4 you have a classical pawn centre, and your bishop retreats to b1 to stay on its best diagonal.",
    "remember": [
      "a4 attacks b5 and can open the a-file for your rook, giving Black queenside problems.",
      "cxd4 gives you pawns on d4 and e4, but Black's bishop, rook and knight all hit e4, so keep it protected.",
      "Bb1 answers ...Nb4 by keeping your bishop on the b1-h7 diagonal instead of letting it be traded."
    ]
  },
  "ruy-lopez:8": {
    "plan": "Against the Modern Steinitz with ...d6, you build a big centre with c3 and d4 before castling. Black's position is solid but cramped. You complete development with Re1 and Nbd2, keep the centre and use your extra space.",
    "remember": [
      "c3 prepares d4 and gives your bishop a retreat square on c2.",
      "d4 builds a big centre and puts pressure on e5, which Black must hold with pieces.",
      "Re1 defends e4, and Nbd2 can head to f1 and g3 as in the Closed Ruy Lopez."
    ]
  },
  "ruy-lopez:9": {
    "plan": "Against the Old Steinitz ...d6, you open the centre with d4 at once while Black's c6 knight is pinned. Black usually has to give up the centre with ...exd4. You get a pawn on e4 against Black's pawn on d6, more space and freer pieces.",
    "remember": [
      "d4 hits e5 while Bb5 pins the c6 knight, so Black has trouble holding e5 and ends up playing ...exd4.",
      "Nc3 and Re1 defend e4 against Black's f6 knight.",
      "Nxd4 recaptures with a centralised knight, leaving you with e4 against d6 and a clear space advantage."
    ]
  },
}
