import type { Plans } from './types'

export const petroffPlans: Plans = {
  "petroff:0": {
    "plan": "The Classical Petrov. You kick the e5 knight with ...d6 before taking e4, then support your e4 knight with ...d5 and ...Nc6. White attacks it with c4 and Nc3; you answer by hitting the d3 bishop with ...Nb4.",
    "remember": [
      "...d6 kicks the e5 knight first; taking 3...Nxe4 at once runs into 4.Qe2, which gives White the advantage.",
      "...d5, ...Nc6 and ...Bf5 support your e4 knight, which is your best piece.",
      "...Nb4 answers c4 by attacking the d3 bishop, forcing it off the b1-h7 diagonal that aims at your king."
    ]
  },
  "petroff:1": {
    "plan": "With 5.Nc3 White swaps knights and plans Be3, Qd2 and O-O-O with a kingside pawn storm. You castle short, regroup the knight to f6 and start your own queenside play with pawn advances.",
    "remember": [
      "...Nxc3 swaps knights; after dxc3 White's queen and bishops come out fast, so ...Be7 and ...O-O get your king safe quickly.",
      "...Nd7-f6 reroutes the knight to its best square, where it guards h7 and your king.",
      "After O-O-O by White, the kings are on opposite sides, so counterattack on the queenside instead of only defending."
    ]
  },
  "petroff:2": {
    "plan": "With 5.Qe2 White pins your knight on the e-file. You block with ...Qe7, retreat the knight and trade queens. The ending is equal and very safe; this is a drawing line for White, which is fine for you.",
    "remember": [
      "...Qe7 blocks the e-file: moving the e4 knight first would expose your king to a discovered check.",
      "...Nf6 retreats when d3 attacks the knight; with your queen on e7 it is no longer pinned.",
      "...Qxe2+ answers Bg5, which pins your f6 knight to the queen, by trading queens; then ...Be7 develops normally."
    ]
  },
  "petroff:3": {
    "plan": "With 5.c4 White discourages ...d5 and takes some central space. You develop with ...Nc6, swap knights on c3 and castle. White has a little more space, but you have no weaknesses and an easy, equal position.",
    "remember": [
      "...Nc6 develops and eyes d4 and e5.",
      "...Nxc3 trades your e4 knight before Nc3 and Bd3 can harass it.",
      "...Be7 and ...O-O get your king safe, after which your c8 bishop and rooks come out."
    ]
  },
  "petroff:4": {
    "plan": "With 3.d4 White opens the centre. You take on e4, support the knight with ...d5, and challenge White's strong e5 knight with ...Nd7. After the trade you set up a solid centre with ...Bd6 and ...c6.",
    "remember": [
      "...d5 supports the e4 knight, which the d3 bishop attacks.",
      "...Nd7 challenges White's best piece, the e5 knight, and after Nxd7 Bxd7 your bishop is developed.",
      "...c6 answers c4 by supporting d5, so your centre stays solid."
    ]
  },
  "petroff:5": {
    "plan": "In the Cochrane Gambit, White gives a knight for two pawns and a chase of your king. You take the knight, then fight for the centre with ...c5 and ...Nc6 before White's attack gets going. Once the light-squared bishops are traded, your king is reasonably safe and you are a piece for two pawns up.",
    "remember": [
      "...Kxf7 accepts the sacrifice: you have a knight for two pawns.",
      "...c5 attacks d4 straight away, so White cannot easily support e5 against your f6 knight, and ...Nc6 develops with the same aim.",
      "...Be6 blocks the check, and after Bxe6+ Kxe6 White's most dangerous attacking piece is gone."
    ]
  },
  "petroff:6": {
    "plan": "In the Three Knights, White takes on e5 after your ...Bb4. You castle and use the e-file with ...Re8 to pressure e4, then trade on c3 and win the pawn back with ...Nxe4. Material is level and your pieces are active.",
    "remember": [
      "...O-O after Nxe5 prepares ...Re8 to put pressure on e4 along the e-file.",
      "...Bxc3 removes the knight that defends e4, so ...Nxe4 regains the pawn.",
      "...d6 opens the c8 bishop's diagonal and takes e5 away from White's d3 knight."
    ]
  },
  "petroff:7": {
    "plan": "With 3.Bc4 White offers the e4 pawn for quick development. You take it, swap knights on c3 and hold your e5 pawn with ...f6. Your kingside is loosened, so cover the light squares around your king, but you are a pawn up.",
    "remember": [
      "...f6 holds the e5 pawn, which the f3 knight attacked, so White has no target in the centre.",
      "...g6 answers Nh4 by stopping Qh5+, which is a real check now that your f-pawn has moved.",
      "...Qe7 defends e5 against f4 and covers f7 and the light squares around your king."
    ]
  },
}
