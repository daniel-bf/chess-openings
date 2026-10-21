import type { Plans } from './types'

export const italianPlans: Plans = {
  "italian:0": {
    "plan": "This is the Giuoco Pianissimo: a slow build-up where neither side has weaknesses yet. You have played c3, d3, castled, a4, Re1 and h3, and your knight is on its way via f1 to g3. From there you choose a plan: d4 to grab the centre, b4 to gain queenside space, or Be3 to trade off Black's strong a7 bishop. Black usually answers with ...Be6 to trade your c4 bishop and later ...d5.",
    "remember": [
      "a4 stops ...b5 from gaining space and chasing your c4 bishop, and gives the bishop a2 as a retreat.",
      "h3 stops ...Bg4 and ...Ng4, so your f3 knight cannot be pinned and f2 stays safe.",
      "Nbd2-f1-g3 is the key manoeuvre: the knight joins the kingside and eyes f5 and h5."
    ]
  },
  "italian:1": {
    "plan": "Black broke early with ...d5, so the centre is open. After exd5 Nxd5, the e5 pawn has lost its d-pawn support and becomes your main target: Re1 attacks it, and Black has to keep the c6 knight and the g4 pin to hold it. Your knight comes to e4 via d2 to hit the c5 bishop, while Black hopes for activity with ...Nb6 and ...Bxf3.",
    "remember": [
      "exd5 followed by Re1 puts pressure on e5, which only the c6 knight defends.",
      "h3 asks the g4 bishop to decide: ...Bxf3 gives you the bishop pair, ...Bh5 keeps the pin.",
      "Nbd2 heads for e4, where the knight hits the c5 bishop and supports the attack on e5."
    ]
  },
  "italian:2": {
    "plan": "Black used ...Na5 to go after your c4 bishop, so you sent it on the Ruy Lopez route Bb5-a4-c2. The structure is now like a Closed Ruy Lopez: the centre is tense, Black has queenside space with ...b5 and ...c5, and you play on the kingside. Your knight goes d2-f1-g3, and later d4 or a4 can open the position.",
    "remember": [
      "c3 prepares d4 and gives your bishop the c2 square to retreat to.",
      "Bb5 sidesteps ...Na5 so your light-squared bishop is not traded.",
      "Bc2 ends the bishop's trip on the b1-h7 diagonal, where it defends e4 and later aims at Black's king."
    ]
  },
  "italian:3": {
    "plan": "This is the Giuoco Pianissimo reached through the Two Knights move order. Nothing changes in your plan: c3, castle, Re1, a4 and h3, then the knight goes Nbd2-f1-g3 and d4 comes when it is well prepared. Black usually plays ...h6, ...Re8 and ...Be6 to trade your c4 bishop.",
    "remember": [
      "c3 prepares d4, which can later hit Black's bishop and gain space.",
      "a4 stops ...b5 and pushes Black's bishop back to a7.",
      "Re1 supports e4 and frees f1 for your knight's Nbd2-f1-g3 route."
    ]
  },
  "italian:4": {
    "plan": "The Hungarian ...Be7 is passive, so you opened the centre at once with d4. After ...exd4 Nxd4 you have a pawn on e4 against Black's pawn on d6, which means more space and freer pieces. Typical plans are f4 and Qf3 for a kingside attack, or Be3 and Qd2 with a solid set-up. Black wants to free himself with ...Re8, ...Bf8 and maybe ...d5.",
    "remember": [
      "d4 strikes at e5 straight away, taking advantage of Black's passive bishop on e7.",
      "Nxd4 recaptures with a central knight, and Nc3 adds a defender to e4 against the f6 knight.",
      "h3 stops ...Bg4, which would hit your queen now that the f3 knight has left, and also stops ...Ng4."
    ]
  },
  "italian:5": {
    "plan": "You avoided the Blackburne Shilling trap by taking the d4 knight, then punished ...Bc5 with Bxf7+. You are a pawn up and Black's king on f8 cannot castle. Bring the last pieces out with Nd2, then play f4 to open the f-file against the king. Black's pawn on d4 is cut off and can become a target later.",
    "remember": [
      "Nxd4 is the right capture; 4.Nxe5? Qg5! is the trap, with ideas like ...Qxg2 and ...Nf3 mate.",
      "Bxf7+ wins a pawn and Black's right to castle; if ...Kxf7, Qh5+ followed by Qxc5 wins the bishop back.",
      "After Bb3 and Nd2, f4 opens the f-file toward Black's king on f8."
    ]
  },
  "italian:6": {
    "plan": "Black's ...Qe7 guards e5 in advance, but it does not stop you from taking the centre with d4. After ...Bb6 you have a broad centre with pawns on d4 and e4. You can gain space with d5 or a5, or keep the tension with Re1 and Nbd2. Black wants to keep pressure on d4 and break with ...exd4 or ...f5 later.",
    "remember": [
      "d4 builds the big centre anyway; c3 and the f3 knight support it.",
      "a4 threatens a5, which would push Black's bishop off the a7-g1 diagonal, so Black spends a move on ...a6.",
      "h3 stops ...Bg4, which would pin the f3 knight that defends d4."
    ]
  },
  "italian:7": {
    "plan": "Against the Paris Defence ...d6 you opened the centre with d4. After ...exd4 Nxd4, you have a pawn on e4 against Black's on d6, and the position is the same as in the Hungarian Defence line. You have more space and freer pieces; plans with f4 or Be3 and Qd2 are typical, while Black looks for ...Re8 and ...Bf8.",
    "remember": [
      "d4 challenges e5 at once; after ...exd4, Nxd4 puts your knight on a strong central square.",
      "Nc3 develops and defends e4 against Black's f6 knight.",
      "h3 stops ...Bg4, which would hit your queen now that the f3 knight has moved, and also keeps ...Ng4 out."
    ]
  },
  "italian:8": {
    "plan": "Black spent time on ...h6 and ...g6 to put the bishop on g7. You castled and played c3 and Re1, so d4 can now come with full support. After d4 you have a broad centre, and the g7 bishop runs into your pawns. If Black takes on d4, you take back with the c-pawn and keep two central pawns.",
    "remember": [
      "c3 prepares d4 so you can recapture with a pawn and keep a broad centre.",
      "Re1 defends e4 before the centre opens.",
      "d4 strikes while Black has used time on ...h6 and ...g6, putting pressure on e5."
    ]
  },
  "italian:9": {
    "plan": "With your rook already on e1, Black's ...d5 is a mistake. After exd5 Nxd5 you win the e5 pawn with Nxe5, because the rook takes back safely on e5. Then retreat the rook to e1 and finish development with Nd2 and Nf3. You are simply a pawn up; Black will try to use the bishop pair and active pieces, so keep everything protected.",
    "remember": [
      "Re1 before ...d5 is what makes the trick work: e5 is attacked by the rook as soon as it loses its d-pawn support.",
      "Nxe5 Nxe5 Rxe5 wins a clean pawn, and the rook on e5 attacks the d5 knight.",
      "Re1 brings the rook home before ...Bd6 or ...Bf6 can chase it with tempo."
    ]
  },
  "italian:10": {
    "plan": "In the Pianissimo, Black reroutes the knight with ...Ne7 and ...Ng6 toward the kingside. That knight no longer guards d4 and e5, so you strike with d4 at once. You then develop with Nbd2 and keep a strong centre. Black will play ...c6 and ...Re8 and try to hold e5.",
    "remember": [
      "a4 stops ...b5 and pushes Black's bishop to a7.",
      "d4 strikes as soon as ...Ne7 takes the knight away from the centre, putting pressure on e5.",
      "Nbd2 develops and supports e4, which Black's f6 knight attacks."
    ]
  },
}
