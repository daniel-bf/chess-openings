import type { Plans } from './types'

export const scandinavianPlans: Plans = {
  "scandinavian:0": {
    "plan": "In the main line, your queen goes to a5 after Nc3 attacks it, the bishop comes out to f5 before ...e6, and ...c6 builds a solid structure with a retreat for the queen. White castles long; you add pressure with ...Bb4, give the bishop for the c3 knight when asked, and tuck the queen on c7. You get a solid Caro-Kann-like structure with easy development.",
    "remember": [
      "...Qa5 escapes the c3 knight's attack and pins that knight against White's king.",
      "...c6 controls d5 and b5, so Nd5 and Nb5 tricks against your queen fail, and it gives the queen c7 to retreat to.",
      "...Bb4 adds a second attacker on the c3 knight; when a3 asks the question, ...Bxc3 and ...Qc7 put the queen on a safe square."
    ]
  },
  "scandinavian:1": {
    "plan": "Here White breaks the pin with an early Bd2, which sets up Nd5 tricks against your queen on a5. You answer with ...c6 to control d5, then complete the standard ...Bf5 and ...e6 setup. Keep the queen safe before anything else.",
    "remember": [
      "...Bf5 develops the bishop outside the pawn chain before ...e6 shuts it in.",
      "...c6 stops Nd5, which would hit your queen and uncover the d2 bishop's attack on a5.",
      "...e6 opens the f8 bishop and blocks the c4 bishop's diagonal toward f7."
    ]
  },
  "scandinavian:2": {
    "plan": "White develops with Nf3 and Bc4 and plays a modest d3 instead of d4. You build the ...c6 shell, pin the f3 knight with ...Bg4 and move the queen to c7 once Bd2 unpins the c3 knight. The position is solid and you develop easily.",
    "remember": [
      "...c6 covers d5 and b5, so White's knights cannot jump there with tempo on your queen.",
      "...Bg4 pins the f3 knight against the queen, and after h3 ...Bh5 keeps the pin.",
      "...Qc7 moves the queen off the d2 bishop's diagonal, so discovered attacks by the c3 knight are no longer possible."
    ]
  },
  "scandinavian:3": {
    "plan": "White develops quickly with Bc4 and Nf3 and castles. You build the same solid ...Nf6, ...c6, ...Bg4, ...e6 structure, pin the f3 knight, then finish development and castle. If White plays Bd2, watch for Nd5 or Nb5 tricks against your queen on a5.",
    "remember": [
      "...c6 covers d5 and b5 and gives your queen a retreat on c7 if it is attacked.",
      "...Bg4 pins the f3 knight against the queen; after h3, ...Bh5 keeps the pin.",
      "...e6 frees the f8 bishop and blocks the c4 bishop's diagonal toward f7."
    ]
  },
  "scandinavian:4": {
    "plan": "Without Nc3, your queen can stay on d5 for now. You develop with ...Nf6, ...Bf5 and ...e6, then put pressure on d4 with ...Nc6. When c4 finally hits the queen it drops back to d7, and long castling with a rook on d8 against d4 is a natural plan.",
    "remember": [
      "...Bf5 develops the bishop outside the pawn chain before ...e6.",
      "...Nc6 develops with pressure on d4, which your queen on d5 also attacks.",
      "...Qd7 answers c4 by keeping the queen on the d-file against d4, ready for ...O-O-O."
    ]
  },
  "scandinavian:5": {
    "plan": "This reaches the same position as the 3.d4 line by a different move order. Recognise it and play the same plan: develop with ...Nf6, ...Bf5, ...e6 and ...Nc6, pressure d4, and retreat the queen to d7 when c4 comes.",
    "remember": [
      "...Bf5 develops the bishop actively before ...e6 locks it in.",
      "...Nc6 joins the queen on d5 in attacking d4 once White has played d4.",
      "...Qd7 meets c4 by staying on the d-file, so you can follow with ...O-O-O and ...Rd8 against d4."
    ]
  },
  "scandinavian:6": {
    "plan": "White avoids the exchange with 2.e5 and gets an Advance French-type structure. You play ...c5 and ...Nc6 against the base of the chain, but unlike in the French your light-squared bishop gets out to f5 before ...e6. Then you keep piling up on d4.",
    "remember": [
      "...c5 attacks d4, the base of White's pawn chain, so White must spend a move on c3 to support it.",
      "...Nc6 adds pressure on d4 and e5.",
      "...Bf5 develops the bishop outside the chain before ...e6, the big improvement over a normal French."
    ]
  },
  "scandinavian:7": {
    "plan": "Against 2.Nc3, you push ...d4 to gain space with tempo and follow with ...e5, building a big centre. White's knight goes back to e2 and on to g3, and you develop with ...Be6, ...Nc6 and ...Nf6 behind your strong pawns.",
    "remember": [
      "...d4 kicks the c3 knight and gains space in the centre.",
      "...e5 supports the d4 pawn and builds a broad pawn centre.",
      "...Be6 develops and controls f5 and c4, squares White's pieces would like to use."
    ]
  },
}
