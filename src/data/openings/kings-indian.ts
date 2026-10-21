import type { OpeningSource } from '../types'

export const kingsIndian: OpeningSource = {
  id: 'kings-indian',
  name: "King's Indian Defense",
  eco: 'E60–E99',
  side: 'black',
  summary:
    "A fighting 'hypermodern' defence to 1.d4. You let White build a big pawn centre with c4, d4 and e4, put your bishop on g7 behind the g6 pawn (a fianchetto) and castle, then hit back with ...e5 (or sometimes ...c5). When White closes the centre with d5, the game becomes a race: White attacks on the queenside, you throw your f- and g-pawns at White's king.",
  ideas: [
    "Set up quickly with ...Nf6, ...g6, ...Bg7, ...d6 and ...O-O. The g7 bishop is your best piece, so avoid trading it.",
    "Challenge the centre with ...e5. Against set-ups that make ...e5 awkward (Bg5 pins, or a huge centre with f4), use ...c5 instead.",
    "Attack where your pawns point: once d5 closes the centre, move your knights out of the way and push ...f5, ...f4 and ...g5-g4 against White's king.",
  ],
  lines: [
    {
      name: 'Classical: Mar del Plata (9.Ne1)',
      pgn: `1. d4 Nf6 {Develops and stops White from playing e4 for now.}
        2. c4 g6 {Prepares ...Bg7, the King's Indian bishop.}
        3. Nc3 {Prepares e4.}
        Bg7 {The bishop goes to the long diagonal, where it presses on d4 and the whole centre.}
        4. e4 d6 {Let White have the centre for now. ...d6 stops e5 and prepares your own ...e5.}
        5. Nf3 O-O {King safety first; the counterattack comes next.}
        6. Be2 e5 {The key break: challenge d4 and claim your share of the centre. It is not a pawn loss: 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nxe5? Nxe4 wins it back.}
        7. O-O Nc6 {Adds pressure on d4 and asks White to decide.}
        8. d5 {White closes the centre and gains space.}
        Ne7 {The knight steps back towards the kingside, where your play will be, and clears the way for the f-pawn.}
        9. Ne1 {The Mar del Plata main line: the knight heads to d3 to support c5, and f3 will defend e4.}
        Nd7 {Clears f6 so the f-pawn can advance, and watches c5 for a while.}
        10. Nd3 f5 {The thematic kingside break: attack e4 and gain space.}
        11. Bd2 {White prepares f3 and the queenside push.}
        Nf6 {The knight returns to f6, pressing on e4 now that the f-pawn is out of the way.}
        12. f3 f4 {Locks the kingside. Next ...g5-g4 with ...Rf7, ...Bf8 and ...Ng6 to attack White's king, while White races with c5 on the other wing.}`,
    },
    {
      name: 'Classical: Bayonet Attack (9.b4)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7
        9. b4 {The Bayonet Attack: White starts the queenside expansion at once, aiming for c5.}
        Nh5 {Clears the f-pawn and eyes f4, so ...f5 can come straight away.}
        10. Re1 {The rook guards e4 in case the centre opens, and Bf1 can follow to protect the king.}
        f5 {Hit e4 at once and open the f-file.}
        11. Ng5 {The knight eyes e6, a square weakened by ...f5, and adds pressure on e4.}
        Nf6 {The knight comes back to the centre to fight for e4. Next ...h6 kicks the g5 knight.}`,
    },
    {
      name: 'Classical: Petrosian (7.d5)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. d5 {The Petrosian System: White locks the centre at once.}
        a5 {Slows down White's b4 push and secures c5 for a knight.}
        8. Bg5 {Pins your f6 knight to your queen, making ...Nd7 and ...f5 harder.}
        h6 {Ask the bishop to decide.}
        9. Bh4 Na6 {The knight heads for c5, a great square where no pawn can attack it once b4 is stopped.}`,
    },
    {
      name: 'Sämisch Variation (5.f3)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. f3 {The Sämisch: f3 makes e4 rock solid and prepares Be3, Qd2 and a kingside pawn storm.}
        O-O {Castle first: your king is safe before you open the centre.}
        6. Be3 e5 {Strike at d4 at once.}
        7. d5 Nh5 {Clears the f-pawn for ...f5 and eyes f4. Because f3 weakened White's dark squares, ...Qh4+ is also an idea.}
        8. Qd2 f5 {Attack e4 and open the f-file.}
        9. O-O-O {White castles queenside: kings on opposite wings, so both sides attack.}
        Nd7 {Develops the last knight; it can go to f6 or c5, and ...a6 with ...b5 can open lines at White's king.}`,
    },
    {
      name: 'Four Pawns Attack (5.f4)',
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. f4 {The Four Pawns Attack: four pawns in the centre, aiming for e5.}
        O-O {Castle first: your king is safe before you open the centre.}
        6. Nf3 c5 {Hit the centre before White finishes developing; such a big pawn front is hard to support.}
        7. d5 e6 {Attack d5 again to open the e-file towards White's uncastled king.}
        8. Be2 exd5 {Open the e-file.}
        9. cxd5 Re8 {The rook goes to the open e-file, putting pressure on e4 and the e2 bishop.}
        10. e5 {White pushes forward with tempo on your knight.}
        dxe5 {Take: opening lines suits you while White's king is still in the centre.}
        11. fxe5 Ng4 {Attack the e5 pawn again with the knight.}
        12. Bg5 {Hits your queen.}
        Qb6 {The queen steps away with an attack on b2, and e5 is still under fire. Sharp tactics follow.}`,
    },
    {
      name: 'Fianchetto Variation (3.Nf3 4.g3)',
      pgn: `1. d4 Nf6 2. c4 g6
        3. Nf3 Bg7 {The bishop goes to the long diagonal, as always in the King's Indian.}
        4. g3 {White puts a bishop on g2 as well: a quieter, very solid approach.}
        O-O {Castle before choosing a central plan.}
        5. Bg2 d6 {The usual King's Indian set-up.}
        6. O-O Nbd7 {Supports the coming ...e5 and keeps c6 free for a pawn.}
        7. Nc3 e5 {The usual ...e5 break.}
        8. e4 c6 {Controls d5 and b5 and frees b6 for your queen.}
        9. h3 Qb6 {Presses on d4 along the diagonal and on b2 down the b-file, so White must keep defending.}`,
    },
    {
      name: "Classical: Gligoric (7.Be3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. Be3 {The Gligoric System: White keeps the central tension.}
        Ng4 {Hit the bishop, the piece guarding d4.}
        8. Bg5 {The bishop moves with tempo on your queen.}
        f6 {Blocks the bishop's attack on your queen and supports e5.}
        9. Bh4 Nc6 {Pressure on d4 forces White to decide.}
        10. d5 Ne7 {The knight heads for the kingside. Next ...Nh6, ...f5 and a kingside attack.}`,
    },
    {
      name: "Classical: Exchange (7.dxe5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
        7. dxe5 {The Exchange Variation: White trades in the centre to take the sting out of your attack.}
        dxe5 {Recapture; the d-file opens.}
        8. Qxd8 Rxd8 {Queens are off, but your rook owns the d-file. Black is fine.}
        9. Bg5 {Pins your f6 knight to the d8 rook.}
        Re8 {Step out of the pin and keep e5 defended.}
        10. Nd5 {Threatens Nxf6+ and Nxc7, forking your rooks.}
        Nxd5 {Remove the dangerous knight.}
        11. cxd5 c6 {Attack the d5 pawn at once to break up White's centre. Equal.}`,
    },
    {
      name: "Makogonov (5.h3)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. h3 {The Makogonov: stops ...Ng4 and ...Bg4, and prepares Be3 and g4.}
        O-O {Castle first: your king is safe before you open the centre.}
        6. Be3 e5 {Hit d4: with ...Ng4 unavailable, this is the direct approach.}
        7. d5 a5 {Stops b4, so a knight on c5 cannot be kicked.}
        8. g4 {Grabs kingside space to slow down your ...f5.}
        Na6 {Heads for c5, where the knight attacks e4.}`,
    },
    {
      name: "Averbakh (5.Be2 and 6.Bg5)",
      pgn: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
        5. Be2 O-O {Castle first: your king is safe before you open the centre.}
        6. Bg5 {The Averbakh: the bishop pins your knight and makes ...e5 awkward (6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 hits f6 and c7).}
        c5 {Hit the centre from the other side.}
        7. d5 e6 {Undermine d5 and open the e-file.}
        8. Qd2 exd5 {Open the e-file.}
        9. exd5 Re8 {Pin the e2 bishop to White's king along the open e-file.}
        10. Nf3 Bg4 {Develops and pins the f3 knight to the e2 bishop. Next ...Nbd7, ...a6 and ...b5 or ...Ne4 ideas.}`,
    },
  ],
}
