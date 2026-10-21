import type { Plans } from './types'

export const londonPlans: Plans = {
  "london:0": {
    "plan": "This is the main-line London. White has the c3-d4-e3 triangle, a bishop on g3 that Black cannot easily trade, and a knight on e5. White plays Qf3 or f4 and castles, aiming at Black's kingside; if Black ever takes on g3, hxg3 gives the rook the h-file. Black's counterplay is on the queenside with ...Bb7, ...Rc8 and ...cxd4 or ...c4.",
    "remember": [
      "2.Bf4 comes before 3.e3, so the bishop is outside the pawn chain.",
      "7.Bg3 answers ...Bd6; if ...Bxg3, hxg3 opens the h-file.",
      "9.Ne5 puts the knight on its dream square, supported by d4, with Qf3 or f4 to follow.",
    ]
  },
  "london:1": {
    "plan": "Black's early ...c5 and ...Qb6 target b2, which lost its defender when the bishop left c1. Qb3 defends it and offers a trade; after ...c4 Qc2, the move ...Bf5? fails here because nothing protects f5 or d5. White ends up a piece and a pawn ahead; the king may have to walk to e2 after ...Qc1+, so finish development (Nf3, Nbd2) carefully.",
    "remember": [
      "5.Qb3 defends b2 and offers a queen trade; after ...c4, 6.Qc2 keeps guarding b2.",
      "After 6...Bf5?, 7.Qxf5 Qxb2 8.Qxd5 wins a piece, and 9.Qxc4 picks up another pawn.",
      "Only take on f5 if d5 falls too: with Nf3 and ...Nf6 already played, Qxf5?? Qxb2 loses for White.",
    ]
  },
  "london:2": {
    "plan": "Against a King's Indian setup, a bishop on d3 would have little to aim at, so White plays Be2, h3 and c3 and keeps everything solid. Black will choose between ...e5 (prepared with ...Nbd7 or ...Nc6 and ...Re8) and queenside play with ...c5, ...Qb6 or ...b5. White meets ...e5 with Bh2 or dxe5 and aims for e4 or a queenside space grab with a4.",
    "remember": [
      "5.Be2: against a fianchetto the bishop belongs on e2, not d3.",
      "6.h3 gives the bishop an escape square on h2 against ...Nh5 or ...e5.",
      "7.c3 keeps d4 supported by a pawn, then 8.O-O.",
    ]
  },
  "london:3": {
    "plan": "This 1...Nf6 move order reaches the main-line London. White keeps the bishop with Bg3 against ...Bd6, puts the bishop on d3 and aims for Ne5 with a kingside attack. Black plays on the queenside with ...b6, ...Bb7 and ...Rc8.",
    "remember": [
      "4.c3 holds d4 against ...c5.",
      "5.Nd2 first keeps the g1 knight flexible; it goes to f3 once Black plays ...d5.",
      "7.Bg3 and 8.Bd3, with Ne5 to follow, as in the main line.",
    ]
  },
  "london:4": {
    "plan": "Black copies with ...Bf5. White trades off that good bishop with Bd3, so Black is left with the less active pieces. Then comes the usual c3, Nbd2 and Bg3, castling, and later e4 (supported by Qd3 and the d2 knight) or Ne5.",
    "remember": [
      "5.Bd3 offers the bishop trade, and 6.Qxd3 develops the queen toward e4.",
      "7.c3 supports d4 against ...c5, so White can always recapture with a pawn.",
      "9.Bg3 answers ...Bd6; if ...Bxg3, hxg3 opens the h-file.",
    ]
  },
  "london:5": {
    "plan": "Once Black's bishop leaves c8, b7 is weak. White hits it with c4 and Qb3, gains time with c5, and after the queen trade the a-file and queenside space give White a comfortable endgame. White plans b4-b5 to open the queenside; Black wants ...e5 or ...b6 to free himself.",
    "remember": [
      "4.c4 attacks d5 and opens the way for the queen to b3.",
      "6.Qb3 hits b7, which the c8 bishop no longer guards.",
      "7.c5 gains time on the queen, and after ...Qxb3 8.axb3 the a-file opens.",
    ]
  },
  "london:6": {
    "plan": "Black's early ...c5 transposes to the main London. White builds with c3, Nd2 and Ngf3, keeps the bishop with Bg3 and plays Bd3, then aims for Ne5 and kingside play. Black looks for queenside counterplay with ...b6, ...Bb7 or ...Qb6.",
    "remember": [
      "4.c3 supports d4 against ...c5 and ...Nc6.",
      "5.Nd2 first, then 6.Ngf3 once Black has played ...e6.",
      "7.Bg3 against ...Bd6, and 8.Bd3 aims at h7.",
    ]
  },
  "london:7": {
    "plan": "Against the Dutch, the fight is about the e4 square, which Black controls with ...f5, ...Nf6 and ...Bb7. White keeps the London setup with h3, Nbd2, c3 and Bd3, and later breaks with e4 (after Qe2 or Qc2) or uses the hole on e5. Black hopes for ...Ne4 and a kingside attack.",
    "remember": [
      "5.h3 makes room on h2 for the bishop and keeps Black's pieces off g4.",
      "6.Nbd2 adds control of e4, the key square.",
      "8.Bd3 aims at f5 and supports a later e4 break.",
    ]
  },
  "london:8": {
    "plan": "Black challenges the bishop early with ...Bd6. White steps back to g3 so a trade would open the h-file, then builds the usual Nd2, c3, Bd3 and Ngf3. Ne5 and kingside play follow, while Black looks to the queenside.",
    "remember": [
      "4.Bg3 answers ...Bd6; if ...Bxg3, hxg3 opens the h-file.",
      "5.Nd2 and 6.c3 develop solidly and support d4 against ...c5.",
      "7.Bd3 aims at h7, and 8.Ngf3 completes development.",
    ]
  },
  "london:9": {
    "plan": "Black's ...c6 and ...Bf5 setup is very solid. White trades the f5 bishop with Bd3, castles and opens the centre with e4, backed by the queen on d3 and the d2 knight. After ...dxe4 Nxe4 White has more active pieces and a little more space.",
    "remember": [
      "5.Bd3 trades off Black's good light-squared bishop, and 6.Qxd3 brings the queen toward e4.",
      "7.O-O and 8.Nbd2 finish development and add support to e4.",
      "9.e4 opens the centre once White is fully developed.",
    ]
  },
  "london:10": {
    "plan": "Against ...d6 and ...g6, White uses the same setup as against the King's Indian: Nf3, Be2, h3, c3 and castling. Black prepares ...e5 or ...c5; White keeps d4 supported, retreats the bishop to h2 when needed, and looks for e4 or queenside space later.",
    "remember": [
      "4.Nf3 controls e5, making Black's ...e5 break harder.",
      "5.Be2: against a fianchetto, e2 is a better square than d3.",
      "6.h3 gives the bishop a retreat square on h2 if Black plays ...Nh5 or ...e5.",
    ]
  },
}
