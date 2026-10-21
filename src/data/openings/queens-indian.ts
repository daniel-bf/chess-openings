import type { OpeningSource } from '../types'

export const queensIndian: OpeningSource = {
  id: 'queens-indian',
  name: "Queen's Indian Defence",
  eco: 'E12–E19',
  side: 'black',
  summary:
    "A solid, flexible defence for Black after 1.d4 Nf6 2.c4 e6 3.Nf3, when White has avoided the Nimzo-Indian pin. Black plays ...b6 and puts the queen's bishop on b7 or a6. From b7 it controls the key e4 square from a distance; from a6 it attacks White's c4 pawn. Black keeps the pawns flexible and chooses between ...d5 and ...c5 depending on how White sets up.",
  ideas: [
    'Control e4 with pieces: ...Nf6, ...Bb7 and sometimes ...Ne4 or ...Bb4. If White cannot play e4, White\'s centre stays modest.',
    "Against the fianchetto (g3 and Bg2), play ...Ba6 to attack c4. After 5.b3, the check ...Bb4+ and retreat to e7 means White's bishop on d2 is misplaced, and later ...c6 and ...d5 give you a sturdy centre.",
    "Against the Petrosian (4.a3) and other quiet set-ups, strike with ...d5 and ...c5. If White builds a big centre with e4, attack it with ...c5 and the b7 bishop.",
  ],
  lines: [
    {
      name: 'Fianchetto: Check Variation, Intermezzo Line (9.Ne5)',
      pgn: `1. d4 Nf6 {Develop and control e4 without committing your pawns yet.}
        2. c4 e6 {Open the f8 bishop's diagonal and prepare ...d5 or ...b6.}
        3. Nf3 {White avoids the Nimzo-Indian pin (3.Nc3 Bb4).}
        b6 {The Queen's Indian. Prepare to put the bishop on b7 or a6, where it fights for the light squares.}
        4. g3 {The main line. White's bishop goes to g2 to fight your bishop on the long diagonal.}
        Ba6 {The modern choice. The bishop attacks c4. White can't defend it with e3 comfortably, because the f1 bishop is heading to g2.}
        5. b3 {White's most common reply: protect c4 with a pawn.}
        Bb4+ {A check that gains something: if White blocks with the bishop, it stands awkwardly on d2 and later goes to c3 where your pawns can hit it.}
        6. Bd2 Be7 {Retreat. White's bishop on d2 now blocks the d-file and the queen's defence of d4, and the b3 pawn has weakened c3.}
        7. Bg2 c6 {Prepare ...d5 for a sturdy centre. The pawn on c6 also blunts White's g2 bishop.}
        8. Bc3 {White improves the bishop to the long diagonal.}
        d5 {Now claim the centre. Your pawns on c6 and d5 shut out the g2 bishop.}
        9. Ne5 {White's knight jumps into the centre, looking at c6 and f7.}
        Nfd7 {Challenge the strong knight at once so White has to swap it.}
        10. Nxd7 Nxd7 {Recapture and keep developing.}
        11. Nd2 O-O {Castle. Your king is safe and your rooks will be connected.}
        12. O-O Rc8 {The main line. The rook supports the ...c5 break, which opens the position for your pieces. Theory rates this as equal.}`,
    },
    {
      name: 'Fianchetto: Check Variation, Intermezzo Line (9.Nbd2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Be7 7. Bg2 c6 8. Bc3 d5
        9. Nbd2 {A calmer move. The knight supports c4 and e4.}
        Nbd7 {Develop and get ready to support ...c5.}
        10. O-O O-O {Castle; your king is safe and the rooks can come to c8 and d8.}
        11. Re1 {White prepares e4 to open the centre.}
        c5 {Strike before White plays e4. You hit d4, and your a6 bishop still presses on c4.}`,
    },
    {
      name: 'Fianchetto: Nimzowitsch Attack (5.Qa4)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6
        5. Qa4 {White defends c4 with the queen and also eyes your a6 bishop, but the queen no longer guards d4.}
        c5 {With White's queen away from d4, ...c5 is the most effective answer.}
        6. Bg2 Bb7 {The bishop returns to the long diagonal, now that White's queen has left the centre.}
        7. dxc5 {White takes to open lines for the g2 bishop.}
        bxc5 {Recapture towards the centre. Your c5 pawn controls d4.}
        8. O-O Be7 {Develop quickly and get castled.}
        9. Nc3 O-O {Castle. You are fully developed and the position is level.}`,
    },
    {
      name: 'Fianchetto: Nimzowitsch Variation (5.Qc2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6
        5. Qc2 {Another way to defend c4, but again the queen stops watching d4.}
        Bb7 {c4 is now well defended, so the bishop goes back to the long diagonal, where it fights for e4 and faces White's g2 bishop.}
        6. Bg2 c5 {Hit d4 now that White's queen is not guarding it.}
        7. d5 {White gives up a pawn to open lines for the g2 bishop.}
        exd5 {Accept the pawn.}
        8. cxd5 Nxd5 {Take a second pawn back in the centre. Your knight on d5 is protected by the b7 bishop.}
        9. O-O Be7 {Develop and castle quickly. White has activity for the pawn, so get your king to safety first.}`,
    },
    {
      name: 'Kasparov-Petrosian: Kasparov Attack (7.Qc2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6
        4. a3 {The Petrosian. White stops ...Bb4 so that Nc3 and later e4 cannot be prevented by a pin.}
        Bb7 {Develop to the long diagonal and control e4 at once.}
        5. Nc3 d5 {Block the e4 square directly with a pawn.}
        6. cxd5 Nxd5 {Recapture with the knight so your b7 bishop's diagonal stays open.}
        7. Qc2 {White aims for e4, gaining space with tempo.}
        Nxc3 {Swap before White can play e4 with tempo on your knight.}
        8. bxc3 Be7 {Develop and prepare to castle.}
        9. e4 O-O {Castle. White has a big centre, and you will attack it.}
        10. Bd3 c5 {The key counter-attack. You hit d4, and the b7 bishop already presses on e4.}`,
    },
    {
      name: 'Kasparov-Petrosian: Petrosian Attack (7.e3)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5
        7. e3 {A quieter way: White develops the bishop first.}
        Be7 {Develop and prepare to castle.}
        8. Bb5+ {White checks to provoke ...c6, which blocks your b7 bishop.}
        c6 {Block. The bishop will be rerouted, and the c-pawn will go on to c5.}
        9. Bd3 c5 {Now that White's bishop has retreated, play ...c5 in one move, hitting d4.}`,
    },
    {
      name: 'Kasparov Variation (4.Nc3 Bb4 5.Bg5)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6
        4. Nc3 {White allows the pin.}
        Bb4 {Pin the knight, as in the Nimzo-Indian, so that White cannot easily play e4.}
        5. Bg5 {White pins your f6 knight too.}
        h6 {Ask the bishop to decide.}
        6. Bh4 Bb7 {Develop and add to your control of e4.}
        7. e3 g5 {Break the pin. Your kingside pawns are loose, but your knight is free to jump to e4.}
        8. Bg3 Ne4 {The knight lands on e4, where it is supported by the b7 bishop.}
        9. Qc2 {White challenges the e4 knight.}
        Bxc3+ {Give up the bishop to double White's c-pawns.}
        10. bxc3 d6 {Support the knight from a distance and keep White's bishop on g3 shut out. Your knight on e4 is a strong piece.}`,
    },
    {
      name: 'Spassky System (4.e3)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6
        4. e3 {A quiet system. White develops the bishop to d3 and keeps a solid centre.}
        Bb7 {Develop to the long diagonal and control e4.}
        5. Bd3 Be7 {Calm development. Keep options with ...d5 or ...c5 open.}
        6. O-O O-O {Castle and wait to see where White's pieces go.}
        7. Nc3 {White prepares e4.}
        d5 {Stop e4 directly.}
        8. b3 c5 {Strike at d4. The position is level and both sides develop freely.}`,
    },
    {
      name: 'Nimzo-Indian: Normal Variation (3.Nc3 Bb4 4.e3)',
      pgn: `1. d4 Nf6 2. c4 e6
        3. Nc3 {White chooses the knight instead of 3.Nf3. Now the Nimzo-Indian is possible.}
        Bb4 {The Nimzo-Indian. Pin the knight so it cannot support e4.}
        4. e3 {The Rubinstein: solid development.}
        O-O {Castle first and keep your pawns flexible.}
        5. Bd3 d5 {Claim your share of the centre and stop e4.}
        6. Nf3 c5 {Hit d4 with a second pawn. This is the Nimzo-Indian main line; see that opening for more.}`,
    },
    {
      name: 'Nimzo-Indian: Classical, Keres Defence (4.Qc2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qc2 {The Classical: White can recapture on c3 with the queen and keep healthy pawns.}
        O-O {Castle and wait for White to commit.}
        5. a3 Bxc3+ {Take before you are forced to retreat. White has spent moves on a3 and Qc2.}
        6. Qxc3 b6 {Prepare ...Bb7 to fight for e4. You reach a Queen's Indian-style position with the bishop on b7.}`,
    },
  ],
}
