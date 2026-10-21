import type { Plans } from './types'

export const scotchPlans: Plans = {
  "scotch:0": {
    "plan": "In the Mieses Variation you traded on c6 and pushed e5 to kick Black's knight, then c4 drove it away from d5. Black has broken queenside pawns, and your e5 pawn gives you space. Finish development with Bb2, Nd2 and g3, Bg2, and later castle. Black aims for active play with ...O-O-O, ...g5 or ...f6 against your e5 pawn.",
    "remember": [
      "Nxc6 bxc6 damages Black's queenside pawns and clears the way for e5, which kicks the f6 knight.",
      "Qe2 defends e5 against ...Qe7 and blocks the e-file, so Black's queen cannot win the pawn.",
      "c4 kicks the d5 knight away, and b3 then supports c4 against the pin from ...Ba6."
    ]
  },
  "scotch:1": {
    "plan": "When Black recaptures on c6 with the d-pawn, you trade queens with check. Black loses the right to castle and has doubled c-pawns, but also the bishop pair. You have a healthy four-against-three kingside pawn majority, so develop calmly, keep e4 protected and later push f4 and e5. It is roughly level, but it is an easy endgame to play.",
    "remember": [
      "Qxd8+ costs Black the right to castle and leads to an endgame with a better pawn structure for you.",
      "Nc3 develops and defends e4, which Black's f6 knight attacks.",
      "Bd2 breaks the pin from ...Bb4, so e4 stays protected."
    ]
  },
  "scotch:2": {
    "plan": "Against ...Bc5 and ...Qf6, Black threatened mate on f2. You traded on c6, defended f2 with Qd2 and chased the bishop with Na4. Now develop with Bd3 and O-O, then play c3 to kick the d4 bishop. You aim for a calm position where your sound structure and possible bishop pair matter.",
    "remember": [
      "Nxc6 removes the d4 knight that Black's c5 bishop was attacking.",
      "Qd2 defends f2, because ...Qf6 together with the c5 bishop threatened ...Qxf2 mate.",
      "Na4 attacks the c5 bishop; after ...Bd4, Bd3 develops and c3 will chase the bishop later."
    ]
  },
  "scotch:3": {
    "plan": "When Black recaptures on c6 with the b-pawn, Black keeps a strong bishop on c5 and brings the queen to h4. You defend with Bd3 and Qe2, and h3 keeps the knight out of g4. Next you castle, play Nd2 and Nf3 to chase the queen, and later Be3 to trade the c5 bishop. Black's broken queenside pawns are a long-term target.",
    "remember": [
      "Nxc6 bxc6 leaves Black with doubled c-pawns and an isolated a-pawn.",
      "Qe2 defends both f2 and e4, which ...Qh4 and the c5 bishop were attacking.",
      "h3 stops ...Ng4, which would add a third attacker against f2."
    ]
  },
  "scotch:4": {
    "plan": "Against the Steinitz ...Qh4 you gave up the e4 pawn for a big lead in development, using Nb5 to attack c7. Black's king is now stuck on d8. Castle, then bring your rook to e1 and your bishops to f3 or d3 and f4 to open lines against the king. Black is a pawn up and hopes to untangle with ...Nf6, ...d6 and ...Re8.",
    "remember": [
      "Nc3 develops and defends e4, and Be2 gets ready to castle quickly once Black takes the pawn.",
      "Nb5 threatens Nxc7+, forking Black's king and rook, which forces ...Bxc3+ and ...Kd8.",
      "O-O completes your development while Black's king is stuck in the centre, and the e-file is yours to use."
    ]
  },
  "scotch:5": {
    "plan": "Black traded knights on d4 and then offered a queen trade with ...Qf6 and ...Qb6. You gained space with e5 and accepted the trade, which leaves Black with doubled b-pawns. Develop quickly with Nc3, Bd2 and O-O-O or Bd3, and use the e5 pawn to cramp Black's kingside. Black's open a-file is his main compensation.",
    "remember": [
      "Qxd4 recaptures with a centralised queen that Black cannot easily chase away.",
      "e5 kicks the f6 queen and gains space with tempo.",
      "Qxb6 axb6 doubles Black's b-pawns, and Nc3 continues your lead in development."
    ]
  },
  "scotch:6": {
    "plan": "Against ...Bb4+ you blocked with c3, and the bishop had to retreat. You traded on c6 to damage Black's pawns and develop with Bd3 and castling. You keep more space with your e4 pawn against Black's d6, and can follow with Nd2, f4 or c4.",
    "remember": [
      "c3 blocks the check and gains time, because the bishop has to retreat to e7.",
      "Nxc6 bxc6 leaves Black with doubled c-pawns and an isolated a-pawn.",
      "Bd3 develops and defends e4, so you can castle next."
    ]
  },
  "scotch:7": {
    "plan": "Against ...d6 you pinned the c6 knight with Bb5, reaching an Old Steinitz Ruy Lopez. Black gave up the centre with ...exd4, and you have a pleasant space advantage with e4 against d6. With more space, avoid unnecessary trades: Bf1, Bg5 or f4 are typical next steps, while Black hopes to free himself with ...Re8 and ...Bf8.",
    "remember": [
      "Bb5 pins the c6 knight, so it cannot hold e5 well and Black has to spend ...Bd7 to break the pin.",
      "Nc3 develops and defends e4, which Black will attack with ...Nf6.",
      "Re1 adds a second defender to e4, so your knight on d4 and bishop on b5 are free to act."
    ]
  },
}
