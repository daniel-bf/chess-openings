import type { OpeningSource } from '../types'

export const nimzoIndian: OpeningSource = {
  id: "nimzo-indian",
  name: "Nimzo-Indian Defense",
  eco: "E20–E59",
  side: "black",
  summary:
    "One of the most respected defences to 1.d4. After 3.Nc3, Black pins the knight with ...Bb4. That knight is White's main support for the e4 push, so the pin fights for the centre with pieces instead of pawns. Black is often happy to swap the bishop for the knight to give White doubled c-pawns, then aims at those weak pawns or closes the centre so White's two bishops have less scope.",
  ideas: [
    "Pin the c3 knight with ...Bb4 so White cannot easily play e4. Fight for e4 with ...Nf6, ...d5 or ...b6 and ...Bb7.",
    "Take on c3 when it gives White doubled c-pawns, then attack the weak c4 pawn (...b6, ...Ba6, ...Nc6-a5) or lock the centre so your knights beat White's bishops.",
    "Against 3.Nf3, which avoids the pin, play the Queen's Indian. Develop the bishop to b7 or a6, again to control e4 and pressure c4.",
  ],
  lines: [
    {
      name: "Rubinstein (4.e3): main line",
      pgn: `1. d4 Nf6 {Develop and control e4 without committing your pawns yet.}
        2. c4 e6 {Open the f8 bishop's diagonal so it can come to b4.}
        3. Nc3 {White prepares e4 to build a big pawn centre.}
        Bb4 {The Nimzo-Indian. Pin the c3 knight to the king, so it cannot support e4. You are also ready to take it if that doubles White's pawns.}
        4. e3 {The Rubinstein. Solid development: White prepares Bd3 and Nf3 or Ne2.}
        O-O {Castle first and keep your pawn moves flexible until White commits.}
        5. Bd3 d5 {Claim your share of the centre and stop e4 for good.}
        6. Nf3 c5 {Hit d4 a second time, so both your centre pawns press on White's centre.}
        7. O-O Nc6 {Develop and add more pressure on d4.}
        8. a3 {White asks your bishop to decide.}
        Bxc3 {Give up the bishop for the knight. White gets the two bishops, but the c-pawns are doubled and stiff.}
        9. bxc3 dxc4 {Take on c4 so White's d3 bishop has to move a second time.}
        10. Bxc4 Qc7 {The main line. The queen supports ...e5, which challenges White's centre and opens the c8 bishop.}`,
    },
    {
      name: "Classical (4.Qc2)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qc2 {The Classical. If you take on c3, White recaptures with the queen and keeps healthy pawns. The queen also watches e4.}
        O-O {Castle and wait to see White's plan.}
        5. a3 Bxc3+ {Take before you are forced to retreat. White's queen recaptures, but White has spent two moves on a3 and Qc2.}
        6. Qxc3 b6 {Prepare ...Bb7, which fights for e4 from far away.}
        7. Bg5 {White pins your f6 knight, which also guards e4.}
        Bb7 {The bishop joins the fight for e4.}
        8. f3 {White covers e4 with a pawn, but the move does nothing for development, and White's king stays in the centre.}
        h6 {Ask the bishop to make up its mind: keep the pin from h4 or swap on f6.}
        9. Bh4 d5 {Strike in the centre while White's king is still uncastled and White is behind in development.}`,
    },
    {
      name: "Sämisch (4.a3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. a3 {The Sämisch. White forces you to decide straight away.}
        Bxc3+ {Take. Your whole plan is that the doubled c-pawns will become weak.}
        5. bxc3 {White gets the two bishops and pawns to support e4, but the c4 pawn becomes a target.}
        c5 {Put a pawn on c5. White's c4 pawn can no longer advance, so it stays where you can attack it, and you also hit d4.}
        6. e3 Nc6 {Pressure d4, and get ready for ...Na5 to attack c4.}
        7. Bd3 O-O {Castle. Keep your king safe before the centre gets busy.}
        8. Ne2 b6 {Prepare ...Ba6, so your bishop attacks c4 as well.}
        9. e4 {White builds a big centre and threatens e5 to kick your knight, or Bg5 to pin it.}
        Ne8 {Capablanca's idea. The knight steps away from e5 and Bg5 before they happen, and it frees the f-pawn for ...f5, which challenges e4.}`,
    },
    {
      name: "Leningrad (4.Bg5)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Bg5 {The Leningrad. White pins your f6 knight to the queen.}
        h6 {Ask the bishop to decide straight away.}
        5. Bh4 c5 {Hit d4 and make White commit.}
        6. d5 {White pushes past, gaining space.}
        d6 {Hold the centre steady and get ready for ...e5.}
        7. e3 Bxc3+ {Double White's pawns now, before White can recapture with a piece.}
        8. bxc3 e5 {Complete the c5, d6, e5 pawn chain. The centre is locked, which suits your knights, and White's dark-squared bishop runs into your pawns. If the pin on f6 gets annoying, ...g5 breaks it.}`,
    },
    {
      name: "Kmoch (4.f3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. f3 {The Kmoch Variation. White prepares e4 with a pawn.}
        d5 {Stop e4 at once.}
        5. a3 Bxc3+ {Double White's c-pawns, as in the Sämisch.}
        6. bxc3 c5 {Hit d4 and fix the weak doubled pawns.}
        7. cxd5 Nxd5 {Take back with the knight. It eyes the weak c3 pawn, and if e4 kicks it, it simply retreats.}
        8. dxc5 {White grabs a pawn and hopes to keep it.}
        Qa5 {Attack c3 and c5 at once. You will win the pawn back.}
        9. e4 Nf6 {Drop back. The knight now attacks e4, so White has to keep defending it.}
        10. Be3 O-O {Castle. Next ...Nbd7 wins back c5, and White's c-pawns stay weak.}`,
    },
    {
      name: "Romanishin (4.Nf3 c5 5.g3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Nf3 {A natural developing move.}
        c5 {Hit d4 straight away.}
        5. g3 {The Romanishin. White will fianchetto (put the bishop on g2, on the long diagonal).}
        cxd4 {Swap pawns. White's knight has to recapture, and the c-file opens.}
        6. Nxd4 O-O {Castle before the centre opens.}
        7. Bg2 d5 {Claim the centre and block the g2 bishop's long diagonal.}
        8. cxd5 Nxd5 {Recapture with the knight. It sits in the centre and hits c3 a second time.}
        9. Qb3 {The queen attacks your b4 bishop and your d5 knight.}
        Qb6 {Defend the b4 bishop, hit the d4 knight and offer a queen trade into an equal position.}`,
    },
    {
      name: "Spielmann (4.Qb3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qb3 {The Spielmann. The queen attacks your b4 bishop and is ready to retake on c3 without doubled pawns.}
        c5 {Defend the bishop and hit d4.}
        5. dxc5 Nc6 {Develop and defend the b4 bishop again. You will win back c5 later.}
        6. Nf3 Ne4 {Jump into e4. The knight hits c3, c5 and f2.}
        7. Bd2 Nxd2 {Take the bishop. Now you have the two bishops.}
        8. Nxd2 O-O {Castle. Next ...Bxc5 regains the pawn, and you are fully developed and equal.}`,
    },
    {
      name: "Queen's Indian (3.Nf3 b6 4.g3 Ba6)",
      pgn: `1. d4 Nf6 2. c4 e6
        3. Nf3 {White avoids the Nimzo pin by not playing Nc3 yet.}
        b6 {The Queen's Indian. Your bishop will fight for e4 from b7, or attack c4 from a6.}
        4. g3 {White prepares Bg2, which would oppose a bishop on b7.}
        Ba6 {Attack c4 straight away, so White must spend a move defending it.}
        5. b3 Bb4+ {Check to lure White's bishop to d2, the square White's b1 knight wants.}
        6. Bd2 Be7 {Drop back. White's bishop is now in the knight's way and will have to move again.}
        7. Bg2 c6 {Prepare ...d5 and blunt the g2 bishop's long diagonal.}
        8. Bc3 {The bishop moves again to free d2 for the knight.}
        d5 {Claim the centre. Your pawns on c6 and d5 shut out the g2 bishop.}
        9. Ne5 {The knight lands on a strong central square.}
        Nfd7 {Challenge it at once, so you can swap off White's best piece.}`,
    },
  ],
}
