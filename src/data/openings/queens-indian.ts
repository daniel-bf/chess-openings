import type { OpeningSource } from '../types'

export const queensIndian: OpeningSource = {
  id: 'queens-indian',
  name: "Queen's Indian Defence",
  eco: 'E12–E19',
  side: 'black',
  summary:
    "You command the Black Kingdom, and this is a patient, flexible defence. After 1.d4 Nf6 2.c4 e6 3.Nf3 the White Kingdom has dodged the Nimzo-Indian pin. You answer with ...b6 and send your queen's priest to b7 or a6. From b7 it guards the key e4 square from afar; from a6 it attacks the White soldier on c4. Your foot soldiers stay flexible, and you choose between ...d5 and ...c5 depending on how the enemy sets up.",
  ideas: [
    'Hold e4 with your pieces: ...Nf6, ...Bb7 and sometimes ...Ne4 or ...Bb4. If the White Kingdom cannot march a soldier to e4, its heartland stays modest.',
    "Against the fianchetto (g3 and Bg2), send your priest to a6 to attack c4. After 5.b3, the check ...Bb4+ and the retreat to e7 leave the White priest on d2 misplaced, and later ...c6 and ...d5 build you a sturdy shield wall.",
    "Against the Petrosian (4.a3) and other quiet set-ups, strike with ...d5 and ...c5. If the White Kingdom builds a big heartland with e4, assault it with ...c5 and the b7 priest.",
  ],
  lines: [
    {
      name: 'Fianchetto: Check Variation, Intermezzo Line (9.Ne5)',
      pgn: `1. d4 Nf6 {Your rider rides out and watches e4, while your foot soldiers keep their options open.}
        2. c4 e6 {A soldier steps to e6, opening the road for the f8 priest and preparing ...d5 or ...b6.}
        3. Nf3 {The White Kingdom sidesteps the Nimzo-Indian pin (3.Nc3 Bb4).}
        b6 {The Queen's Indian. You clear a path so your priest can go to b7 or a6 and fight for the light squares.}
        4. g3 {The main line. The White priest heads for g2 to duel your priest on the long diagonal road.}
        Ba6 {The modern choice. Your priest attacks c4. White cannot guard it comfortably with e3, because the f1 priest is bound for g2.}
        5. b3 {The enemy's most common reply: a foot soldier props up c4.}
        Bb4+ {A check with a purpose: if the White priest blocks, it stands awkwardly on d2 and later goes to c3, where your soldiers can strike it.}
        6. Bd2 Be7 {Your priest withdraws. The White priest on d2 now blocks the d-file and the Queen's guard of d4, and the b3 soldier has weakened c3.}
        7. Bg2 c6 {You prepare ...d5 for a sturdy centre. The soldier on c6 also dulls the White priest on g2.}
        8. Bc3 {The White priest moves up to the long diagonal road.}
        d5 {Now you claim the heartland. Your soldiers on c6 and d5 shut out the g2 priest.}
        9. Ne5 {A White rider leaps into the heartland, eyeing c6 and f7.}
        Nfd7 {Challenge the bold rider at once so the enemy must trade it.}
        10. Nxd7 Nxd7 {You recapture and keep bringing troops forward.}
        11. Nd2 O-O {Your King retreats into the castle. He is safe and your towers will be connected.}
        12. O-O Rc8 {The main line. Your tower backs the ...c5 break, which opens the land for your pieces. Theory calls the war even.}`,
    },
    {
      name: 'Fianchetto: Check Variation, Intermezzo Line (9.Nbd2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Be7 7. Bg2 c6 8. Bc3 d5
        9. Nbd2 {A calmer move. The White rider supports c4 and e4.}
        Nbd7 {Your rider comes out, ready to back ...c5.}
        10. O-O O-O {Into the castle. Your King is safe and your towers can come to c8 and d8.}
        11. Re1 {The White Kingdom prepares e4 to break open the heartland.}
        c5 {Strike before e4 arrives. You hit d4, and your a6 priest still presses on c4.}`,
    },
    {
      name: 'Fianchetto: Nimzowitsch Attack (5.Qa4)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6
        5. Qa4 {The White Queen rides out to guard c4 and eye your a6 priest, but she no longer guards d4.}
        c5 {With the enemy Queen away from d4, ...c5 is your strongest answer.}
        6. Bg2 Bb7 {Your priest returns to the long diagonal road, now that the White Queen has left the heartland.}
        7. dxc5 {The enemy captures to open roads for the g2 priest.}
        bxc5 {Recapture towards the heartland. Your soldier on c5 controls d4.}
        8. O-O Be7 {Bring out your troops quickly and head for the castle.}
        9. Nc3 O-O {Your King is in the castle. Your army is fully out and the war is level.}`,
    },
    {
      name: 'Fianchetto: Nimzowitsch Variation (5.Qc2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6
        5. Qc2 {Another way to guard c4, but again the White Queen stops watching d4.}
        Bb7 {c4 is now well guarded, so your priest goes back to the long diagonal road, where it fights for e4 and faces the g2 priest.}
        6. Bg2 c5 {Hit d4 now that the White Queen is not guarding it.}
        7. d5 {The White Kingdom sacrifices a soldier to open roads for the g2 priest.}
        exd5 {Take the soldier.}
        8. cxd5 Nxd5 {Your rider takes a second soldier back in the heartland. The b7 priest protects it on d5.}
        9. O-O Be7 {Develop and castle fast. The enemy has activity for the soldier, so get your King to safety first.}`,
    },
    {
      name: 'Kasparov-Petrosian: Kasparov Attack (7.Qc2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6
        4. a3 {The Petrosian. White bars ...Bb4 so that no pin can stop Nc3 and, later, e4.}
        Bb7 {Your priest takes the long diagonal road and controls e4 at once.}
        5. Nc3 d5 {A soldier blocks the e4 square directly.}
        6. cxd5 Nxd5 {Recapture with the rider so your b7 priest's road stays open.}
        7. Qc2 {The White Kingdom aims for e4, gaining ground and time.}
        Nxc3 {Trade riders before e4 can arrive with a threat to yours.}
        8. bxc3 Be7 {Bring out your priest and prepare to castle.}
        9. e4 O-O {Into the castle. The enemy has a big heartland, and you will storm it.}
        10. Bd3 c5 {The key counter-attack. You hit d4, and the b7 priest already presses on e4.}`,
    },
    {
      name: 'Kasparov-Petrosian: Petrosian Attack (7.e3)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5
        7. e3 {A quieter way: the White Kingdom brings out its priest first.}
        Be7 {Bring out your priest and prepare to castle.}
        8. Bb5+ {The White priest checks to provoke ...c6, which blocks your b7 priest.}
        c6 {Block. The priest will find another road, and the c-soldier will march on to c5.}
        9. Bd3 c5 {Now that the White priest has stepped back, play ...c5 in one move, hitting d4.}`,
    },
    {
      name: 'Kasparov Variation (4.Nc3 Bb4 5.Bg5)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6
        4. Nc3 {The White Kingdom allows the pin.}
        Bb4 {Pin the rider, as in the Nimzo-Indian, so the enemy cannot easily play e4.}
        5. Bg5 {The White priest pins your f6 rider too.}
        h6 {Ask the priest to make up its mind.}
        6. Bh4 Bb7 {Your priest comes out and adds to your grip on e4.}
        7. e3 g5 {Break the pin. Your kingside soldiers are loose, but your rider is free to leap to e4.}
        8. Bg3 Ne4 {Your rider lands on e4, backed by the b7 priest.}
        9. Qc2 {The White Queen challenges the e4 rider.}
        Bxc3+ {Give up your priest to double the enemy's c-pawns.}
        10. bxc3 d6 {Support the rider from a distance and keep the White priest on g3 locked out. Your rider on e4 is a mighty piece.}`,
    },
    {
      name: 'Spassky System (4.e3)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 b6
        4. e3 {A quiet system. The White priest heads for d3 behind a solid shield wall.}
        Bb7 {Your priest takes the long diagonal road and controls e4.}
        5. Bd3 Be7 {Calm development. Keep both ...d5 and ...c5 in reserve.}
        6. O-O O-O {Into the castle, and wait to see where the enemy's pieces go.}
        7. Nc3 {The White Kingdom prepares e4.}
        d5 {A soldier bars the road to e4 directly.}
        8. b3 c5 {Strike at d4. The war is level and both armies develop freely.}`,
    },
    {
      name: 'Nimzo-Indian: Normal Variation (3.Nc3 Bb4 4.e3)',
      pgn: `1. d4 Nf6 2. c4 e6
        3. Nc3 {The White rider goes to c3 instead of 3.Nf3. Now the Nimzo-Indian is possible.}
        Bb4 {The Nimzo-Indian. Pin the rider so it cannot support e4.}
        4. e3 {The Rubinstein: the White Kingdom builds slowly and solidly.}
        O-O {Castle first and keep your foot soldiers flexible.}
        5. Bd3 d5 {Claim your share of the heartland and stop e4.}
        6. Nf3 c5 {A second soldier hits d4. This is the Nimzo-Indian main line; see that opening for more.}`,
    },
    {
      name: 'Nimzo-Indian: Classical, Keres Defence (4.Qc2)',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
        4. Qc2 {The Classical: the White Queen can recapture on c3 and keep the shield wall healthy.}
        O-O {Into the castle, and wait for the enemy to commit.}
        5. a3 Bxc3+ {Take before you are forced to retreat. The White Kingdom has spent moves on a3 and Qc2.}
        6. Qxc3 b6 {Prepare ...Bb7 to fight for e4. You reach a Queen's Indian-style camp with your priest on b7.}`,
    },
  ],
}
