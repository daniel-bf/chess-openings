import type { OpeningSource } from '../types'

export const scandinavian: OpeningSource = {
  id: "scandinavian",
  name: "Scandinavian Defense",
  eco: "B01",
  side: "black",
  summary:
    "You command the Black Kingdom, and you strike White's e4 soldier on move one with 1...d5. After 2.exd5 Qxd5 your Queen rides out early and is chased by Nc3, but she has a safe refuge on a5. Then you build a simple, sturdy camp: the light-road priest out to f5 or g4, soldiers on c6 and e6, and a quick retreat into the castle. The war plans are the same in almost every line, so this saga is easy to learn.",
  ideas: [
    "When 3.Nc3 attacks your Queen, send her to a5: she is safe there, she pins the c3 rider to the White King, and a later ...c6 gives her a retreat on c7.",
    "Bring out the light-road priest (the one on c8) to f5 or g4 BEFORE you play ...e6, or your own soldier walls it in.",
    "Build a shield wall with ...c6 and ...e6, like a Caro-Kann. ...c6 also stops White's riders leaping to b5 or d5 to hit your Queen.",
  ],
  lines: [
    {
      name: "Classical Variation (5...Bf5 6.Bc4)",
      pgn: `1. e4 d5 {Strike the e4 soldier at once. If White takes, you take back and get an open, easy heartland.}
        2. exd5 Qxd5 {Your Queen takes back. She rides out early, but White has no heartland soldier on e4 any more and your army can develop freely.}
        3. Nc3 {A White rider develops with gain of time: it attacks your Queen, so she must move again.}
        Qa5 {The main refuge. On a5 your Queen is out of your army's way, hard to attack, and pins the c3 rider to the White King: the rider cannot move without exposing e1.}
        4. d4 {White claims the heartland.}
        Nf6 {Your rider takes its best square, where it controls e4 and d5 and guards your King.}
        5. Nf3 Bf5 {Bring out the light-road priest now. Once you play ...e6 it would be stuck behind your own soldier.}
        6. Bc4 {The White priest aims at f7 and e6.}
        e6 {Opens the road for your f8 priest and blocks the c4 priest's road toward f7.}
        7. Bd2 {White unpins the rider and sets a trap: if the rider leaps to d5, the d2 priest suddenly attacks your Queen on a5.}
        c6 {Takes d5 and b5 from White's riders so those tricks fail, and gives your Queen a retreat on c7 or d8.}
        8. Qe2 {White prepares to castle on the queenside and to open roads with d5 or Nd5 while your King is still in the centre.}
        Bb4 {Your priest develops with a second attack on the c3 rider, the piece behind all of White's Nd5 and Ne4 ideas.}
        9. O-O-O Nbd7 {Your last minor piece develops and stays near your King. Short castling is next.}
        10. a3 {White asks your priest to take or retreat.}
        Bxc3 {Take the rider: it was White's most active piece and the one that could leap into d5 or e4.}
        11. Bxc3 Qc7 {The c3 priest now hits your Queen, so she steps to c7, a safe square that also watches e5. Then castle short.}`,
    },
    {
      name: "Classical Variation: 6.Bd2",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5
        6. Bd2 {White unpins the rider first. Beware: now Nd5 would unmask the d2 priest's attack on your Queen.}
        c6 {A soldier covers d5 at once, so the Nd5 trick never works.}
        7. Bc4 e6 {The same camp as the main line, reached by another road. Next come ...Bb4 or ...Be7, ...Nbd7 and castling.}`,
    },
    {
      name: "Main Line: 4.Nf3 and 5.Bc4",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5
        4. Nf3 {A White rider develops, and the d4 push is held in reserve.}
        Nf6 {Your rider takes its natural square, where it guards your King and eyes e4 and d5.}
        5. Bc4 {The White priest aims at f7.}
        c6 {Takes b5 and d5 from White's riders and gives your Queen a retreat on c7.}
        6. d3 {A modest camp: White guards c4 and e4 and plans Bd2 to unpin the rider.}
        Bg4 {With no White soldier on d4, your priest is best used pinning the f3 rider to the White Queen.}
        7. Bd2 {The c3 rider is now unpinned, so a rider leap would unmask the d2 priest's attack on your Queen.}
        Qc7 {Step off the a5-e1 diagonal before any discovered attack can happen. From c7 your Queen still watches e5.}
        8. h3 {White asks your priest to decide.}
        Bh5 {Your priest keeps the pin. Next come ...e6, ...Nbd7, ...Bd6 or ...Be7 and castling.}`,
    },
    {
      name: "Main Line: 4.Bc4",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5
        4. Bc4 {The White priest aims at f7, and d4 waits.}
        Nf6 {Your rider rides to its natural square, guarding your King and eyeing e4 and d5.}
        5. Nf3 c6 {Another road to the same battlefield as the 4.Nf3 line.}
        6. O-O {The White King castles quickly and keeps d3 or d4 in reserve.}
        Bg4 {Pin the f3 rider to the White Queen, so it cannot leap to e5 or g5 without losing her.}
        7. h3 Bh5 {Keep the pin. Trading priest for rider later is fine too, but there is no need yet.}
        8. d3 e6 {Opens the f8 priest's road and blocks the c4 priest's road to f7. Next come ...Nbd7, ...Be7 or ...Bd6, and short castling.}`,
    },
    {
      name: "Mieses-Kotroc Variation: 3.d4",
      pgn: `1. e4 d5 2. exd5 Qxd5
        3. d4 {White skips Nc3, so your Queen is not attacked yet.}
        Nf6 {Develop first: there is no need to move your Queen until she is attacked. If 4.Nc3 now, ...Qa5 leads back to the main line.}
        4. Nf3 Bf5 {Your priest rides out before ...e6, as always.}
        5. Be2 e6 {Frees the f8 priest and gives your Queen a stable heartland around her.}
        6. O-O Nc6 {Develops with pressure on d4: your Queen on d5 and this rider both attack it.}
        7. c4 {At last a White soldier hits your Queen.}
        Qd7 {Keep your Queen on the d-file, where she still eyes d4, and away from rider attacks. ...Rd8 or long castling (...O-O-O) can follow to keep pressing d4.}`,
    },
    {
      name: "Mieses-Kotroc Variation: 3.Nf3",
      pgn: `1. e4 d5 2. exd5 Qxd5
        3. Nf3 {Flexible: a White rider develops and the d4 push waits.}
        Nf6 {Same idea as against 3.d4: develop, and leave your Queen where she is until she is attacked.}
        4. Be2 Bf5 {Priest out before ...e6.}
        5. O-O e6 {Opens the f8 priest's road and keeps your camp compact.}
        6. d4 Nc6 {Now that d4 is played, your rider joins the Queen in attacking it.}
        7. c4 Qd7 {This is the same position as in the 3.d4 line, so the same war plan applies.}`,
    },
    {
      name: "Advance (2.e5)",
      pgn: `1. e4 d5
        2. e5 {White avoids the soldier trade and grabs land, like an Advance French.}
        c5 {Hit d4 at once. White wants a soldier on d4 to back up e5, and this makes that harder.}
        3. c3 {White prepares d4 with a soldier behind it.}
        Nc6 {Your rider develops and adds pressure on d4 and e5.}
        4. d4 Bf5 {The big difference from a French: your light-road priest escapes outside the shield wall before ...e6 locks it in. ...e6 comes next.}`,
    },
    {
      name: "2.Nc3 d4",
      pgn: `1. e4 d5
        2. Nc3 {White guards e4 instead of taking on d5.}
        d4 {Gain land with tempo: your soldier drives off the c3 rider.}
        3. Nce2 {The rider retreats and heads for g3.}
        e5 {Back up the d4 soldier with a comrade and claim the heartland.}
        4. Ng3 {The White rider eyes f5 and supports a later f4 or Bc4.}
        Be6 {Your priest develops and covers f5 and c4, squares White's army wants. Follow with ...Nc6, ...Nf6 and ...Bd6.}`,
    },
    {
      name: "Main Line, Mieses Variation: 5.Bc4",
      pgn: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6
        5. Bc4 {White develops the priest before the King's rider, aiming at f7.}
        c6 {Play this first: it takes d5 and b5 from White's riders and gives your Queen a retreat on c7.}
        6. Bd2 {Unpins the c3 rider. Nd5 would now unmask an attack on your Queen, but ...Qxd5 simply wins the rider because c6 also covers d5.}
        Bf5 {Your priest rides out before ...e6, as always.}
        7. Nge2 {The White rider heads for g3 to chase your priest.}
        e6 {Opens the f8 priest's road and backs up d5. Next ...Nbd7, ...Bb4 or ...Be7, and castling.}
        8. Ng3 {The rider attacks your f5 priest.}
        Bg6 {Keep the priest on its good road. If h4, answer ...h6 so the priest can drop back to h7.}`,
    },
    {
      name: "Blackmar-Diemer Gambit: Teichmann Defence (2.d4)",
      pgn: `1. e4 d5
        2. d4 {White offers a soldier: after ...dxe4 this is the Blackmar-Diemer Gambit.}
        dxe4 {Take the soldier: you are now facing a gambit.}
        3. Nc3 {A White rider attacks e4.}
        Nf6 {Your rider guards e4 as it develops.}
        4. f3 {The Blackmar-Diemer Gambit: White sacrifices a second soldier for open roads.}
        exf3 {Accept. White gets the f-file and fast mustering, but you have an extra soldier.}
        5. Nxf3 Bg4 {The Teichmann Defence: pin the f3 rider and plan to trade it off, so White's attack loses a key warrior.}
        6. h3 Bxf3 {Trade now. You give up your priest but remove an attacker and keep the extra soldier.}
        7. Qxf3 c6 {Blunts the White Queen's view of b7 and supports a later ...e6 and ...Nbd7. Your camp is very solid.}
        8. Be3 e6 {Builds the shield wall and frees the f8 priest. Next ...Nbd7, ...Bd6 or ...Bb4, and castling.}`,
    },
  ],
}
