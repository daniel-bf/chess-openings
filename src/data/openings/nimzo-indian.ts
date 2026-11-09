import type { OpeningSource } from '../types'

export const nimzoIndian: OpeningSource = {
  id: "nimzo-indian",
  name: "Nimzo-Indian Defense",
  eco: "E20–E59",
  side: "black",
  summary:
    "One of the most respected defences to 1.d4. After 3.Nc3, you, commander of the Black Kingdom, pin the White rider with ...Bb4. That rider is White's main support for the e4 push, so the pin fights for the heartland with pieces instead of soldiers. You are often happy to trade your priest for the rider to give White doubled c-pawns, then lay siege to those weak soldiers or close the heartland so White's two priests have fewer open roads.",
  ideas: [
    "Pin the c3 rider with ...Bb4 so White cannot easily play e4. Fight for e4 with ...Nf6, ...d5 or ...b6 and ...Bb7.",
    "Take on c3 when it gives White doubled c-pawns, then attack the weak c4 soldier (...b6, ...Ba6, ...Nc6-a5) or lock the heartland so your riders beat White's priests.",
    "Against 3.Nf3, which avoids the pin, play the Queen's Indian. Send the priest to b7 or a6, again to control e4 and lean on c4.",
  ],
  lines: [
    {
      name: "Rubinstein: Normal Variation, Bernstein Defence (4.e3)",
      pgn: `1. d4 Nf6 {A rider comes out and watches e4, without committing your soldiers yet.}
        2. c4 e6 {Open the diagonal road for the f8 priest so it can reach b4.}
        3. Nc3 {The White Kingdom prepares e4 to build a big wall in the heartland.}
        Bb4 {The Nimzo-Indian. Pin the c3 rider to its King, so it cannot support e4. You are also ready to take it if that doubles White's soldiers.}
        4. e3 {The Rubinstein. Solid mobilising: White prepares Bd3 and Nf3 or Ne2.}
        O-O {Your King retreats into the castle first; keep your soldiers flexible until White commits.}
        5. Bd3 d5 {Claim your share of the heartland and stop e4 for good.}
        6. Nf3 c5 {Strike d4 a second time, so both your heartland soldiers press on White's wall.}
        7. O-O Nc6 {A rider comes out and adds more pressure on d4.}
        8. a3 {The White Kingdom asks your priest to decide.}
        Bxc3 {Give up the priest for the rider. White gets the two priests, but the c-pawns are doubled and stiff.}
        9. bxc3 dxc4 {Take on c4 so White's d3 priest has to move a second time.}
        10. Bxc4 Qc7 {The main line. Your Queen backs ...e5, which challenges White's heartland and opens the c8 priest's road.}`,
    },
    {
      name: "Classical: Keres Defence (4.Qc2)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qc2 {The Classical. If you take on c3, the White Queen recaptures and keeps healthy soldiers. She also watches e4.}
        O-O {Your King retreats into the castle while you wait to see White's plan.}
        5. a3 Bxc3+ {Take before you are forced to retreat. The White Queen recaptures, but White has spent two moves on a3 and Qc2.}
        6. Qxc3 b6 {Prepare ...Bb7, which fights for e4 from afar.}
        7. Bg5 {The White priest pins your f6 rider, which also guards e4.}
        Bb7 {Your priest joins the fight for e4.}
        8. f3 {White covers e4 with a soldier, but the move does nothing for mobilising, and the White King stays in the open heartland.}
        h6 {Ask the priest to make up its mind: keep the pin from h4 or trade on f6.}
        9. Bh4 d5 {Strike the heartland while the White King has not castled and White lags in development.}`,
    },
    {
      name: "Sämisch: Capablanca Variation (4.a3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. a3 {The Sämisch. The White Kingdom forces you to decide straight away.}
        Bxc3+ {Take. Your whole war plan is that the doubled c-pawns will become weak.}
        5. bxc3 {White gets the two priests and soldiers to support e4, but the c4 soldier becomes a target.}
        c5 {Plant a soldier on c5. White's c4 soldier can no longer advance, so it stays where you can besiege it, and you also hit d4.}
        6. e3 Nc6 {Lean on d4, and get ready for ...Na5 to attack c4.}
        7. Bd3 O-O {Your King retreats into the castle before the heartland gets busy.}
        8. Ne2 b6 {Prepare ...Ba6, so your priest attacks c4 as well.}
        9. e4 {White builds a big heartland and threatens e5 to kick your rider, or Bg5 to pin it.}
        Ne8 {Capablanca's idea. The rider steps away from e5 and Bg5 before they happen, and it frees the f-pawn for ...f5, which challenges e4.}`,
    },
    {
      name: "Leningrad: Benoni Defence (4.Bg5)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Bg5 {The Leningrad. The White priest pins your f6 rider to your Queen.}
        h6 {Ask the priest to decide straight away.}
        5. Bh4 c5 {Strike d4 and make White commit.}
        6. d5 {White's soldier pushes past, grabbing land.}
        d6 {Hold the heartland steady and get ready for ...e5.}
        7. e3 Bxc3+ {Double White's soldiers now, before White can recapture with a piece.}
        8. bxc3 e5 {Complete the c5, d6, e5 shield wall. The heartland is locked, which suits your riders, and White's dark-squared priest runs into your soldiers. If the pin on f6 gets annoying, ...g5 breaks it.}`,
    },
    {
      name: "Kmoch Variation (4.f3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. f3 {The Kmoch Variation. The White Kingdom prepares e4 with a soldier.}
        d5 {A soldier to d5 bars the road to e4 at once.}
        5. a3 Bxc3+ {Trade priest for rider and double White's c-pawns, as in the Sämisch.}
        6. bxc3 c5 {Strike d4 and fix the weak doubled soldiers in place.}
        7. cxd5 Nxd5 {Take back with the rider. It eyes the weak c3 soldier, and if e4 kicks it, it simply retreats.}
        8. dxc5 {The White Kingdom grabs a soldier and hopes to keep it.}
        Qa5 {Your Queen attacks c3 and c5 at once. You will win the soldier back.}
        9. e4 Nf6 {Drop back. The rider now attacks e4, so White has to keep guarding it.}
        10. Be3 O-O {Your King retreats into the castle. Next ...Nbd7 wins back c5, and White's c-pawns stay weak.}`,
    },
    {
      name: "Romanishin: English Hybrid (4.Nf3 c5 5.g3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Nf3 {A White rider comes out, a natural move.}
        c5 {Strike d4 straight away.}
        5. g3 {The Romanishin. White will fianchetto (put the priest on g2, on the long diagonal road).}
        cxd4 {Trade soldiers. White's rider has to recapture, and the c-file road opens.}
        6. Nxd4 O-O {Your King retreats into the castle before the heartland opens.}
        7. Bg2 d5 {Claim the heartland and block the g2 priest's long diagonal road.}
        8. cxd5 Nxd5 {Recapture with the rider. It stands in the heartland and hits c3 a second time.}
        9. Qb3 {The White Queen attacks your b4 priest and your d5 rider.}
        Qb6 {Guard the b4 priest, hit the d4 rider and offer a Queen trade into an equal position.}`,
    },
    {
      name: "Spielmann: Carlsbad Variation (4.Qb3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qb3 {The Spielmann. The White Queen attacks your b4 priest and is ready to retake on c3 without doubled soldiers.}
        c5 {Guard the priest and strike d4.}
        5. dxc5 Nc6 {A rider comes out and guards the b4 priest again. You will win back c5 later.}
        6. Nf3 Ne4 {Your rider leaps into e4, hitting c3, c5 and f2.}
        7. Bd2 Nxd2 {Take the priest. Now you have the two priests.}
        8. Nxd2 O-O {Your King retreats into the castle. Next ...Bxc5 wins back the soldier, and you are fully mobilised and equal.}`,
    },
    {
      name: "Queen's Indian: Fianchetto, Check Variation (3.Nf3)",
      pgn: `1. d4 Nf6 2. c4 e6
        3. Nf3 {The White Kingdom dodges the Nimzo pin by not playing Nc3 yet.}
        b6 {The Queen's Indian. Your priest will fight for e4 from b7, or attack c4 from a6.}
        4. g3 {White prepares Bg2, which would face down a priest on b7.}
        Ba6 {Attack c4 straight away, so White must spend a move guarding it.}
        5. b3 Bb4+ {Check, to lure White's priest to d2, the square the b1 rider wants.}
        6. Bd2 Be7 {Drop back. White's priest is now in the rider's way and will have to move again.}
        7. Bg2 c6 {Prepare ...d5 and blunt the g2 priest's long diagonal road.}
        8. Bc3 {The priest moves again to free d2 for the rider.}
        d5 {Claim the heartland. Your soldiers on c6 and d5 shut out the g2 priest.}
        9. Ne5 {The White rider lands on a strong square in the heartland.}
        Nfd7 {Challenge it at once, so you can trade off White's best piece.}`,
    },
    {
      name: "Reshevsky Variation (5.Ne2)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O
        5. Ne2 {The Reshevsky Variation: this rider can recapture on c3, so White avoids doubled soldiers.}
        d5 {Claim the heartland, just as against 5.Bd3.}
        6. a3 {The White Kingdom asks the priest to decide.}
        Be7 {Keep the priest. Taking on c3 would hand White the two priests with healthy soldiers, and White's Ne2 and a3 have not mobilised much.}
        7. cxd5 exd5 {Take back with the soldier: you keep a strong soldier on d5 and open the c8 priest's road.}
        8. g3 {The White Kingdom plans Bg2 to press on d5.}
        c6 {Back d5 with a soldier so the g2 priest bites on granite. Next ...Nbd7, ...Re8 and ...Bd6.}`,
    },
    {
      name: "Romanishin Variation (4.g3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. g3 {The Romanishin Variation (also called the Kasparov Variation): the White Kingdom fianchettoes and plans Nf3 and Bg2.}
        c5 {Strike d4 straight away, as against 4.Nf3.}
        5. Nf3 {A rider guards d4. This reaches the 4.Nf3 c5 5.g3 chapter by another road, so fight it the same way.}
        cxd4 6. Nxd4 O-O 7. Bg2 d5`,
    },
    {
      name: "Queen's Indian: Kasparov-Petrosian, Kasparov Attack (3.Nf3 b6 4.a3)",
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6
        4. a3 {The Petrosian Variation: the White Kingdom rules out ...Bb4 and prepares Nc3, then d5 or e4.}
        Bb7 {Control e4, the square White wants for a soldier.}
        5. Nc3 d5 {Plant a soldier on d5 so White cannot push d4-d5.}
        6. cxd5 Nxd5 {Take back with the rider, which now challenges the c3 rider.}
        7. Qc2 {The Kasparov Attack: the White Queen prepares e4.}
        Nxc3 {Trade riders before e4 kicks yours away.}
        8. bxc3 Be7 {The priest comes out and the King gets ready to castle. White has a big heartland, but the c3 soldier is a little weak.}
        9. e4 O-O {Your King retreats into the castle before the heartland opens.}
        10. Bd3 c5 {Strike d4: the standard way to pressure White's big heartland. ...Nc6 or ...Nd7 and ...Rc8 follow.}`,
    },
  ],
}
