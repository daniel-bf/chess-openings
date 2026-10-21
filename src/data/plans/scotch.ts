import type { Plans } from './types'

export const scotchPlans: Plans = {
  "scotch:0": {
    "plan": "The Scotch opens the centre at once with d4 and recaptures with the knight. In the Mieses Variation you trade on c6 and push e5 to kick Black's knight, gaining space. Black has doubled, isolated queenside pawns, and you keep a space edge in the centre while Black looks for piece activity.",
    "remember": [
      "Nxc6 bxc6 damages Black's queenside pawns and clears the way for e5, which kicks the f6 knight.",
      "Qe2 defends e5 against ...Qe7 and blocks the e-file, so Black's queen cannot win the pawn.",
      "c4 kicks the d5 knight away, and b3 then supports c4 against the pin from ...Ba6 on your queen on e2."
    ]
  },
  "scotch:1": {
    "plan": "When Black recaptures on c6 with the d-pawn, you trade queens with check. Black loses the right to castle and has doubled c-pawns. You get a small but lasting endgame edge thanks to your healthy four against three kingside pawn majority.",
    "remember": [
      "Qxd8+ costs Black the right to castle and leads to an endgame where your pawn structure is better.",
      "Nc3 develops and defends e4, which Black's f6 knight attacks now that the queens are gone.",
      "Bd2 breaks the pin from ...Bb4, so Black cannot double your pawns with ...Bxc3 on favourable terms."
    ]
  },
  "scotch:2": {
    "plan": "Against ...Bc5 with ...Qf6, Black threatens mate on f2. You trade on c6, defend f2 with Qd2, and then chase Black's bishop with Na4. You aim for a calm position where Black's doubled c-pawns and your sound structure matter.",
    "remember": [
      "Nxc6 removes the d4 knight that Black's c5 bishop was attacking.",
      "Qd2 defends f2, because ...Qf6 together with the c5 bishop threatens ...Qxf2#.",
      "Na4 attacks the c5 bishop to take away Black's bishop pair; after ...Bd4, Bd3 develops and prepares to castle."
    ]
  },
  "scotch:3": {
    "plan": "When Black recaptures on c6 with the b-pawn, Black keeps a strong bishop on c5 and brings the queen to h4. You develop with Bd3 and Qe2 to defend e4 and f2, then castle. Black's damaged queenside pawns are a long-term target.",
    "remember": [
      "Nxc6 bxc6 leaves Black with doubled c-pawns and an isolated a-pawn.",
      "Bd3 develops and defends e4, which Black's ...Qh4 is attacking.",
      "Qe2 defends both f2 and e4, which ...Qh4 and the c5 bishop were attacking."
    ]
  },
  "scotch:4": {
    "plan": "Against the Steinitz ...Qh4, Black grabs your e4 pawn. You give it up for a big lead in development, using Nb5 to attack c7. Black's king ends up stuck on d8, and you open lines against it.",
    "remember": [
      "Nc3 develops and defends e4, and Be2 gets ready to castle quickly once Black takes the pawn.",
      "Nb5 threatens Nxc7+, forking Black's king and rook, which forces ...Bxc3+ and ...Kd8.",
      "O-O completes your development while Black's king is stuck in the centre, and the e-file is yours to use."
    ]
  },
  "scotch:5": {
    "plan": "Black trades knights on d4, which brings your queen to a strong central square. You add Bc4 and then threaten mate on f7 with Qd5. You keep a lead in development and pressure on f7.",
    "remember": [
      "Qxd4 recaptures with a centralised queen that Black cannot easily chase away.",
      "Bc4 develops and aims at f7, Black's weakest point.",
      "Qd5 threatens Qxf7# together with the c4 bishop, which forces ...Qf6."
    ]
  },
  "scotch:6": {
    "plan": "Against ...Bb4+, you block with c3, and the bishop has to retreat. You trade on c6 to damage Black's pawns and develop with Bd3 and castling. You keep more space with your e4 pawn against Black's d6.",
    "remember": [
      "c3 blocks the check and gains time, because the bishop has to retreat to e7.",
      "Nxc6 bxc6 leaves Black with doubled c-pawns and an isolated a-pawn.",
      "Bd3 develops and defends e4, so you can castle next."
    ]
  },
  "scotch:7": {
    "plan": "Against ...d6, you pin the c6 knight with Bb5 to add pressure on e5. Black gives up the centre with ...exd4, and you recapture with the knight. You get a pleasant space advantage with e4 against d6.",
    "remember": [
      "Bb5 pins the c6 knight, so it cannot hold e5 well and Black has to spend ...Bd7 to break the pin.",
      "Nc3 develops and defends e4, which Black will attack with ...Nf6.",
      "Nxd4 recaptures with a centralised knight after ...exd4, leaving you with more space."
    ]
  },
}
