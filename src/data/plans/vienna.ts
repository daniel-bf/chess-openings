import type { Plans } from './types'

export const viennaPlans: Plans = {
  "vienna:0": {
    "plan": "Against ...d5 in the Vienna Gambit you took on e5 and built a centre with Nf3, d4 and Bd3. When Black supported the e4 knight with ...f5, you took en passant to open the f-file and castled. Your rook on f1 and your well-placed pieces give you good play on the kingside, while Black has an active knight on e4 and the bishop on f6 pressing against d4.",
    "remember": [
      "fxe5 gains space, and Nf3 then stops ...Qh4+ and prepares d4.",
      "Bd3 attacks the e4 knight; after ...f5, exf6 en passant opens the f-file.",
      "O-O puts your rook on the open f-file, ready to support an attack."
    ]
  },
  "vienna:1": {
    "plan": "Against ...Nc6 in the Vienna Gambit you pinned the knight with Bb5 and traded it off, leaving Black with doubled c-pawns. Then d3 kicked the strong e4 knight, and after ...Nxc3 bxc3 you castle. Use the f-file and your e5 pawn on the kingside, with ideas like d4, Qe1-g3 and Bf4, while Black's queenside pawns stay weak.",
    "remember": [
      "Bb5 pins the c6 knight, which was attacking your e5 pawn.",
      "Bxc6+ removes that knight and leaves Black with doubled c-pawns.",
      "d3 kicks the e4 knight out of the centre and opens your c1 bishop."
    ]
  },
  "vienna:2": {
    "plan": "Against ...exf4 you pushed e5 and drove Black's knight back to g8. Then d4, Qe2 and Bxf4 won back both pawns. Material is level and you have more active pieces; castle queenside or kingside and keep pressure on the e-file, while Black needs time to finish development.",
    "remember": [
      "e5 kicks the f6 knight back to g8, undoing Black's development.",
      "Qe2 attacks e5 along the e-file, where the pawn is pinned to Black's king, and Qxe5 wins it back.",
      "Bxf4 wins back the gambit pawn while developing the bishop."
    ]
  },
  "vienna:3": {
    "plan": "Against ...d6 you developed with Nf3 and Bb5 and played d3. After ...exf4 you won the pawn back with Bxf4. You get a solid position with active pieces and a half-open f-file. Castle next, then think about Qe1-g3 or d4 to increase pressure.",
    "remember": [
      "Nf3 develops and adds pressure on e5.",
      "Bb5 pins the c6 knight, which defends e5.",
      "d3 supports e4 and opens your c1 bishop, so Bxf4 can win back the pawn."
    ]
  },
  "vienna:4": {
    "plan": "The Hamppe-Allgaier Gambit is very sharp: you sacrificed the knight on f7 to drag Black's king into the open. Now build a big centre with d4 and bring everything into the attack: Bxf4, Bc4+ and O-O on the f-file. You are a piece down and engines prefer Black, so this is a practical weapon: keep up the pressure and do not let Black consolidate.",
    "remember": [
      "h4 attacks g5 and forces ...g4, breaking up Black's kingside pawns.",
      "Ng5 is the reply to ...g4; after ...h6 the knight has no safe square, so Nxf7 sacrifices it to expose Black's king.",
      "d4 builds a big centre and opens your c1 bishop to win back f4."
    ]
  },
  "vienna:5": {
    "plan": "Against ...Bc5 you developed with Nf3 and traded off Black's strong bishop with Na4 and Nxb6. Now you have the bishop pair and can castle safely. Continue with d3, Be2 or c3, O-O and later fxe5 or f5 to open the kingside.",
    "remember": [
      "Nf3 develops and covers h4, so ...Qh4+ never comes.",
      "Na4 attacks the c5 bishop, and Nxb6 trades it to give you the bishop pair.",
      "d3 supports e4 and opens your c1 bishop."
    ]
  },
  "vienna:6": {
    "plan": "Against an early ...Bc5 you developed with Nf3 and took the centre with d4. After ...exd4 Nxd4 you have a pawn on e4 against Black's on d6, so you have more space. Both sides have castled; continue with Be3 or Bg5, Qd2 and f4 to use your space.",
    "remember": [
      "Nf3 develops and attacks e5, preparing d4.",
      "d4 hits e5 and the c5 bishop; after ...exd4, Nxd4 recaptures with a central knight.",
      "Be2 develops solidly so you can castle next."
    ]
  },
  "vienna:7": {
    "plan": "Against ...d6 you played f4 and then d4 to build a big centre. After ...exf4 you won the pawn back with Bxf4. You have two central pawns against Black's d6 and a half-open f-file. Castle next, then Qd2 or Qe1-g3 with attacking chances.",
    "remember": [
      "f4 attacks e5 and opens the f-file.",
      "d4 builds a big centre once Black's e-pawn has gone to f4.",
      "Bxf4 wins back the gambit pawn, and Bd3 develops behind your e4 pawn."
    ]
  },
}
