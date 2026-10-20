import type { Plans } from './types'

export const whiteFinal: Plans = {
  'ruy-lopez:0': {
    plan: "This is the classic Closed Ruy Lopez, where you build slowly with Re1, c3 and h3 before striking with d4. Black gains queenside space with ...b5, ...Na5 and ...c5, and you keep your light-squared bishop on c2. The centre usually stays closed, so you play on the kingside while Black plays on the queenside.",
    remember: [
      "Re1 defends e4, so Bxc6 followed by Nxe5 becomes a real threat; that is why Black spends a move on ...b5.",
      "h3 takes g4 away from Black's bishop and knight, so you can play d4 without a pin on your f3 knight.",
      "Bc2 answers ...Na5 by keeping your light-squared bishop on the b1-h7 diagonal, where it defends e4 and later aims at Black's king.",
    ],
  },
  'ruy-lopez:1': {
    plan: "In the Marshall Attack Black gives up the e5 pawn for a fast attack on your king. You accept the pawn, bring the rook back to e1 and blunt the attack with g3, then finish developing with moves like Be3 and Nd2. If you survive the pressure on the light squares around your king, your extra pawn counts in the endgame.",
    remember: [
      "exd5 and Nxe5 accept the gambit: you win a pawn and Black gets fast development and attacking chances in return.",
      "Re1 pulls the rook back home after ...Bd6 attacks it on e5, and keeps it guarding your back rank and the e-file.",
      "g3 is forced after ...Qh4 because Black's queen and the d6 bishop both hit h2; it weakens the light squares, so after ...Qh3 you must keep f3 and the back rank covered.",
    ],
  },
  'ruy-lopez:2': {
    plan: "The Berlin quickly leads to a queenless middlegame after Bxc6, dxe5 and Qxd8+. Black has the bishop pair but doubled c-pawns and a king that can no longer castle. You have a healthy four against three pawn majority on the kingside and aim to use it, together with the cramping pawn on e5.",
    remember: [
      "O-O ignores ...Nxe4 because d4 regains the pawn by hitting e5 and opening the e-file toward Black's king.",
      "Bxc6 and dxe5 drive Black's knight from d6 to f5 and leave you a pawn on e5 that takes squares away from Black's pieces.",
      "h3 keeps Black's pieces off g4 and prepares g4 to chase the f5 knight, which is why Black answers with ...h5.",
    ],
  },
  'ruy-lopez:3': {
    plan: "In the Open Ruy Lopez Black grabs your e4 pawn with the knight. You hit back at once with d4 and dxe5, which gives you a pawn wedge on e5, and then challenge the strong knight on e4. Your play usually comes on the kingside behind the e5 pawn, while Black relies on queenside space and active pieces.",
    remember: [
      "d4 strikes at e5 immediately and opens the centre while Black's king is still uncastled and his knight sits on e4.",
      "c3 gives your bishop a retreat square on c2 and covers d4 and b4 from Black's pieces.",
      "Nbd2 and Bc2 both attack the e4 knight, forcing Black to decide whether to trade it or retreat.",
    ],
  },
  'ruy-lopez:4': {
    plan: "Against the Classical ...Bc5, you castle and use c3 and d4 to build a broad centre while hitting the bishop. Black's bishop drops to b6, where it keeps eyeing d4 and f2. You aim for a solid centre with e4 and d4, and gain space before Black can free his game.",
    remember: [
      "c3 prepares d4, which attacks the c5 bishop and gains the centre with tempo.",
      "Re1 defends e4, which becomes loose once the centre opens and Black's f6 knight is attacking it.",
      "h3 stops ...Bg4, which would pin your f3 knight and add pressure to d4.",
    ],
  },
  'ruy-lopez:5': {
    plan: "Against the Schliemann gambit ...f5, you stay calm with d3 instead of grabbing material. After ...fxe4 dxe4 you simply develop, and Black's missing f-pawn leaves the a2-g8 diagonal and the e6 square weak. You aim your pieces at Black's loosened kingside.",
    remember: [
      "d3 supports e4, so after ...fxe4 you recapture with dxe4 and keep a sound centre.",
      "Nc3 develops and adds a second defender to e4, which Black's f6 knight is attacking.",
      "Bc4 covers g8 on the open a2-g8 diagonal, so Black cannot castle kingside for now.",
    ],
  },
  'ruy-lopez:6': {
    plan: "In the Breyer Black reroutes the c6 knight via b8 to d7 to support e5 and free the c-pawn. You use the time to play d4 and then the classic Nbd2-f1-g3 manoeuvre. The centre stays tense and closed, and you look for play on the kingside or with a4 on the queenside.",
    remember: [
      "d4 comes while the knight is on b8 and cannot add pressure to your centre.",
      "Nbd2-f1-g3 brings the queen's knight to the kingside, where it eyes f5 and h5 and frees your c1 bishop.",
      "Bc2 keeps the bishop on the b1-h7 diagonal to defend e4, which Black targets with ...Bb7 and ...Re8.",
    ],
  },
  'ruy-lopez:7': {
    plan: "In the Zaitsev Black piles up on e4 with ...Bb7, ...Re8 and ...Bf8. You keep e4 firmly protected and use a4 to question Black's b5 pawn. After ...exd4 cxd4 you have a classical pawn centre, and your bishop retreats to b1 to stay on its best diagonal.",
    remember: [
      "a4 attacks b5 and can open the a-file for your rook, giving Black queenside problems.",
      "cxd4 gives you pawns on d4 and e4, but Black's bishop, rook and knight all hit e4, so keep it protected.",
      "Bb1 answers ...Nb4 by keeping your bishop on the b1-h7 diagonal instead of letting it be traded.",
    ],
  },
  'ruy-lopez:8': {
    plan: "Against the Modern Steinitz with ...d6, you build a big centre with c3 and d4 before castling. Black's position is solid but cramped. You complete development with Re1 and Nbd2, keep the centre and use your extra space.",
    remember: [
      "c3 prepares d4 and gives your bishop a retreat square on c2.",
      "d4 builds a big centre and puts pressure on e5, which Black must hold with pieces.",
      "Re1 defends e4, and Nbd2 can head to f1 and g3 as in the Closed Ruy Lopez.",
    ],
  },
  'ruy-lopez:9': {
    plan: "Against the Old Steinitz ...d6, you open the centre with d4 at once while Black's c6 knight is pinned. Black usually has to give up the centre with ...exd4. You get a pawn on e4 against Black's pawn on d6, more space and freer pieces.",
    remember: [
      "d4 hits e5 while Bb5 pins the c6 knight, so Black has trouble holding e5 and ends up playing ...exd4.",
      "Nc3 and Re1 defend e4 against Black's f6 knight.",
      "Nxd4 recaptures with a centralised knight, leaving you with e4 against d6 and a clear space advantage.",
    ],
  },
  'italian:0': {
    plan: "The Giuoco Pianissimo is a slow build-up: you play c3, d3, castle, a4, Re1, h3 and Nbd2. Your knight then usually travels via f1 to g3, and the central break d4 comes later when it is well prepared. The centre stays semi-closed and both sides manoeuvre, with chances on the kingside.",
    remember: [
      "c3 and d3 keep e4 solid and prepare a later d4.",
      "a4 stops ...b5 from gaining space with tempo on your c4 bishop, and gives the bishop a2 as a retreat.",
      "h3 stops ...Bg4 and ...Ng4, so your f3 knight and a later Be3 are safe.",
    ],
  },
  'italian:1': {
    plan: "Here Black breaks early with ...d5. You take with exd5, and with Black's d-pawn gone, Re1 puts pressure on e5. The position opens up, and you aim your pieces at e5 and the e4 square.",
    remember: [
      "exd5 followed by Re1 targets e5, which no longer has a d-pawn to support it.",
      "h3 puts the question to the g4 bishop that pins your f3 knight; after ...Bh5 the pin remains, so keep that in mind.",
      "Nbd2 develops and heads for e4, where the knight hits the c5 bishop.",
    ],
  },
  'italian:2': {
    plan: "Against the Two Knights with ...Be7, Black hits your c4 bishop with ...Na5. Like in the Ruy Lopez, you keep the bishop by moving it Bb5-a4-c2. The structure becomes Ruy-like, with central tension and a d4 break for you later.",
    remember: [
      "c3 prepares d4 and gives your bishop the c2 square to retreat to.",
      "Bb5 sidesteps ...Na5's attack and keeps your light-squared bishop from being traded.",
      "Bc2 ends the bishop's journey on the b1-h7 diagonal, where it supports e4 and later aims at Black's king.",
    ],
  },
  'italian:3': {
    plan: "This position transposes to the Giuoco Piano. You follow the same slow plan: c3, castle, Re1, a4 and h3. Later the knight goes Nbd2-f1-g3 and you prepare d4.",
    remember: [
      "c3 prepares d4, which can later hit the c5 bishop and gain space.",
      "a4 stops ...b5 and pushes Black's bishop back to a7.",
      "Re1 supports e4 and frees f1 for your knight's later Nbd2-f1-g3 route.",
    ],
  },
  'italian:4': {
    plan: "The Hungarian ...Be7 is passive, so you open the centre at once with d4. After ...exd4 Nxd4 you have a pawn on e4 against Black's pawn on d6. You enjoy more space and freer pieces, and play for central and kingside pressure.",
    remember: [
      "d4 strikes at e5 straight away, taking advantage of Black's passive bishop on e7.",
      "Nxd4 recaptures with a centralised knight, and Nc3 adds a defender to e4 against the f6 knight.",
      "h3 stops ...Bg4, which would hit your queen now that the f3 knight has left, and also stops ...Ng4.",
    ],
  },
  'italian:5': {
    plan: "This is the Blackburne Shilling trap with ...Nd4. You avoid the trap and simply take the knight with Nxd4, then grab f7 with Bxf7+ when Black plays ...Bc5. Black's king loses the right to castle and comes under fire along the open f-file.",
    remember: [
      "Nxd4 is the right capture; 4.Nxe5? is the trap, because ...Qg5 hits the knight and g2, and greedy play leads to a quick mate.",
      "Bxf7+ wins a pawn and Black's right to castle; if ...Kxf7, Qh5+ followed by Qxc5 wins the bishop back along the fifth rank.",
      "Qf3 lines up on the open f-file and pins Black's f6 knight against the king on f8.",
    ],
  },
  'italian:6': {
    plan: "Black guards e5 with ...Qe7 instead of developing the knight first. You continue with the slow Italian plan: d3, castle, Nbd2, a4 and Re1. The knight later goes to f1 and g3, and you prepare d4 when everything is ready.",
    remember: [
      "d3 keeps e4 solid, so you can build up calmly.",
      "a4 stops ...b5 and pushes Black's bishop back to a7.",
      "Re1 supports e4 and frees f1, so Nbd2 can continue to f1 and g3.",
    ],
  },
  'italian:7': {
    plan: "Against the Paris Defence ...d6, you open the centre with d4. After ...exd4 Nxd4 you have a pawn on e4 against a pawn on d6. You get the freer game, with more space and active pieces.",
    remember: [
      "d4 challenges e5 at once; after ...exd4, Nxd4 puts your knight on a strong central square.",
      "Nc3 develops and defends e4 against Black's f6 knight.",
      "h3 stops ...Bg4, which would hit your queen now that the f3 knight has moved, and also keeps ...Ng4 out.",
    ],
  },
  'italian:8': {
    plan: "Black spends time on ...h6 and ...g6 to put the bishop on g7. You castle, play c3 and Re1, and then break with d4 to take the centre. Your c4 bishop stays on the a2-g8 diagonal aiming at f7.",
    remember: [
      "c3 prepares d4 so you can recapture with a pawn and keep a broad centre.",
      "Re1 defends e4 before the centre opens.",
      "d4 strikes while Black has used time on ...h6 and ...g6, putting pressure on e5.",
    ],
  },
  'italian:9': {
    plan: "Here Black breaks with ...d5 in the Two Knights. You take with exd5, and your rook on e1 then pressures e5. Your knight heads via d2 to the strong e4 square.",
    remember: [
      "Re1 comes before ...d5, so after exd5 and ...Nxd5 your rook already bears down on e5.",
      "h3 puts the question to the g4 bishop that pins your f3 knight.",
      "Ne4 puts the knight on a strong central square where it eyes c5 and g5.",
    ],
  },
  'italian:10': {
    plan: "In the Pianissimo, Black reroutes the knight with ...Ne7 and ...Ng6 toward the kingside. That knight no longer guards d4 and e5, so you strike with d4. You then develop with Nbd2 and keep a strong central presence.",
    remember: [
      "a4 stops ...b5 and pushes Black's bishop to a7.",
      "d4 strikes as soon as ...Ne7 takes the knight away from the centre, putting pressure on e5.",
      "Nbd2 develops and supports e4, which Black's f6 knight attacks.",
    ],
  },
  'queens-gambit:0': {
    plan: "In the Orthodox Queen's Gambit Declined you pin with Bg5 and develop with e3, Nf3, Rc1 and Bd3. Black frees his cramped game with Capablanca's plan of ...dxc4, ...Nd5 and ...e5. The result is a simplified, open middlegame where you try to keep a small initiative.",
    remember: [
      "Bg5 pins the f6 knight, which defends d5.",
      "Rc1 puts the rook on the c-file, which opens after ...c6 and ...dxc4.",
      "Bxe7 and Rxc3 answer the trades from ...Nd5; Black then frees his position with ...e5, so expect that break.",
    ],
  },
  'queens-gambit:1': {
    plan: "Against the Tartakower with ...h6 and ...b6, you trade on f6 and d5 to fix Black's pawn on d5. You then gain queenside space with b4. The structure gives you long-term pressure on the queenside and on d5.",
    remember: [
      "Bh4 keeps the pin on f6 after ...h6.",
      "Bxf6 and cxd5 force Black to recapture on d5 with a pawn, which blocks the b7 bishop and gives you a fixed target.",
      "b4 stops Black's freeing ...c5 and gains queenside space; b5 can follow to fix Black's queenside pawns.",
    ],
  },
  'queens-gambit:2': {
    plan: "Against the Queen's Gambit Accepted with 3.e4 e5, you develop with Nf3, win back c4 with your bishop, and target Black's weak pawns with Qb3. After Bxe6 fxe6, Black's e-pawns are doubled. You end up with equal material and a better pawn structure, while Black has activity and a passed pawn on d4.",
    remember: [
      "Nf3 develops and attacks e5 instead of allowing a queen trade after dxe5 ...Qxd1+.",
      "Bxc4 wins the gambit pawn back, and Bxe6 fxe6 leaves Black with doubled e-pawns.",
      "Qb3 attacks b7 and e6 at once, and Qxb7 wins a pawn back to restore material balance.",
    ],
  },
  'queens-gambit:3': {
    plan: "Against 3.e4 Nf6, you kick the knight with e5 and win back c4 with the bishop. This gives you a space advantage with a French-like pawn on e5. You develop with Ne2 and Nbc3, castle, and play with your extra space.",
    remember: [
      "e5 kicks the f6 knight and gains space in the centre.",
      "Bxc4 regains the pawn and hits the d5 knight; after ...Nb6, Bb3 keeps the bishop on the a2-g8 diagonal.",
      "Ne2 supports d4 and keeps your f-pawn free to advance later to support e5.",
    ],
  },
  'queens-gambit:4': {
    plan: "Against the Slav with ...dxc4, you stop ...b5 with a4 and win the pawn back with e3 and Bxc4. Then you prepare e4, which takes the centre and hits Black's f5 bishop. You end up with a strong pawn centre and active pieces.",
    remember: [
      "a4 stops ...b5, which would hold on to the extra c4 pawn.",
      "e3 opens the f1 bishop so Bxc4 wins the pawn back.",
      "Qe2 prepares e4, which gains the centre with tempo on the f5 bishop.",
    ],
  },
  'queens-gambit:5': {
    plan: "In the Moscow Semi-Slav you give up your dark-squared bishop with Bxf6 for a lead in development and central control. Black gets the bishop pair and a solid position. You aim to use your development and a later e4 break.",
    remember: [
      "Bxf6 avoids the sharp lines after Bh4 and gives you a lead in development, at the cost of the bishop pair.",
      "e3 and Bd3 develop solidly; after ...dxc4, Bxc4 regains the pawn.",
      "O-O gets your king safe before you open the centre later with e4.",
    ],
  },
  'queens-gambit:6': {
    plan: "In the Cambridge Springs Black pins your c3 knight with ...Qa5 and ...Bb4 and hopes to win material. You meet the threats with Nd2 and Qc2, then finish development with Be2 and castling. If the pressure is neutralised, Black's queen on a5 can become a target.",
    remember: [
      "Bg5 seems to allow cxd5 exd5 Nxd5? winning a pawn, but ...Nxd5 Bxd8 Bb4+ wins the queen back and leaves Black a piece up (the Elephant Trap).",
      "Nd2 covers e4 against ...Ne4 and covers c4, so if ...dxc4 then Nxc4 hits the queen.",
      "Qc2 defends the c3 knight, which is pinned by ...Bb4 and attacked by ...Qa5.",
    ],
  },
  'queens-gambit:7': {
    plan: "In the Lasker Defence Black trades pieces with ...Ne4 to free his game. After the exchanges you have a pawn on c3 and Black has a pawn on d5. You keep pressure on d5 with Qb3 and attack it again with c4.",
    remember: [
      "Bxe7 and bxc3 come after the trades, and cxd5 first forces Black to recapture with ...exd5.",
      "Qb3 hits d5 and b7 at once, so Black must defend with ...Rd8.",
      "c4 attacks d5 again and opens lines for your pieces.",
    ],
  },
  'queens-gambit:8': {
    plan: "Against the Albin Countergambit you keep the extra e5 pawn and develop with Nf3, g3, Bg2 and Nbd2. Black usually castles queenside, so you castle short and attack on the queenside with your pawns and pieces. Black's d4 pawn is cramping but can become a target.",
    remember: [
      "Nf3 develops and defends e5; avoid e3?, which allows ...Bb4+ Bd2 dxe3 and the Lasker Trap with ...fxg1=N+.",
      "g3 and Bg2 put your bishop on the long diagonal, aimed at b7 and Black's queenside king.",
      "Nbd2 develops without letting the d4 pawn hit a knight on c3, and the knight can go to b3 to attack d4.",
    ],
  },
  'queens-gambit:9': {
    plan: "Against the Chigorin you take on d5 and recapture on f3 with the g-pawn. Black's queen comes out early, and after ...Bxc3 you have both bishops against two knights. You aim for a strong centre and use your bishops as the position opens.",
    remember: [
      "cxd5 comes first, so after ...Bxf3 Black has to recapture on d5 with the queen.",
      "gxf3 keeps control of e4 and gives you the bishop pair, plus a half-open g-file.",
      "Nc3 hits the queen with tempo, and after ...Bb4 Bd2 bxc3 you have two bishops and a solid centre.",
    ],
  },
  'queens-gambit:10': {
    plan: "Against the Chebanenko ...a6, you push c5 to stop Black from playing ...b5 against your c4 pawn. This gains queenside space and locks the queenside. You then develop with Bf4 and e3 and later play b4.",
    remember: [
      "c5 gains queenside space and stops ...dxc4 followed by ...b5.",
      "Bf4 controls e5 and makes Black's freeing ...e5 break harder.",
      "e3 supports d4, the base of your pawn chain.",
    ],
  },
  'english:0': {
    plan: "This is a Reversed Sicilian: you play Black's Sicilian setup with an extra tempo. You fianchetto, put pressure on the centre and expand on the queenside with a3 and b4. The middlegame features your long-diagonal bishop and queenside space against Black's centre.",
    remember: [
      "cxd5 invites ...Nxd5, and then Bg2 hits the knight on the long diagonal.",
      "O-O and d3 develop calmly while keeping e4 and c4 squares under control.",
      "a3 prepares b4, starting your queenside expansion.",
    ],
  },
  'english:1': {
    plan: "In the Closed English both sides fianchetto. You expand on the queenside with Rb1, a3 and b4, while Black looks for kingside play with ...f5. Opening the a- and b-files gives your rooks targets on the queenside.",
    remember: [
      "Rb1 supports the b4 push and takes the rook off the long diagonal of Black's g7 bishop.",
      "a3 prepares b4 even though Black played ...a5 to stop it, so the queenside still opens on your terms.",
      "b4 after ...axb4 axb4 opens the a-file for your rooks and prepares b5 against the c6 knight.",
    ],
  },
  'english:2': {
    plan: "In the Symmetrical English both sides copy each other at first. You break the symmetry with d4, and after the trades on d4 you have a small space edge with your c4 pawn against Black's d6 pawn. You play for queenside pressure and the long diagonal.",
    remember: [
      "d4 breaks the symmetry and opens the long diagonal for your g2 bishop.",
      "Qxd4 recaptures with a centralised queen after the knight trade.",
      "Qd3 steps off the long diagonal, so Black cannot win time by moving the f6 knight and uncovering the g7 bishop.",
    ],
  },
  'english:3': {
    plan: "The Mikenas Attack grabs the centre with e4 and kicks Black's knight with e5. After ...d4 exf6 dxc3 bxc3, the knights are traded and you have a strong pawn centre. You use your central pawns and the open b-file.",
    remember: [
      "e4 grabs the centre, and e5 kicks the f6 knight.",
      "exf6 takes the knight before recapturing on c3 with bxc3, which brings a pawn toward the centre and opens the b-file.",
      "d4 builds your centre and blocks the f6 queen's diagonal toward c3.",
    ],
  },
  'english:4': {
    plan: "Against a King's Indian setup, you take the centre with e4 and d4. You then use the Averbakh setup with Be2 and Bg5. This restrains Black's usual counterplay and gives you a big centre.",
    remember: [
      "e4 and d4 build a big pawn centre, transposing to the King's Indian.",
      "Be2 develops and covers g4, so Black's pieces cannot use that square.",
      "Bg5 puts pressure on the f6 knight and makes Black's usual ...e5 break harder to arrange.",
    ],
  },
  'english:5': {
    plan: "Against ...e6 and ...d5, you play d4 to transpose to the Queen's Gambit Declined. You then use the same plan as in your Queen's Gambit course: pin with Bg5 and develop with e3 and Nf3. You aim for central pressure and, later, the minority attack.",
    remember: [
      "d4 transposes to the Queen's Gambit Declined.",
      "Bg5 pins the f6 knight, which defends d5.",
      "e3 and Nf3 develop solidly and open the f1 bishop.",
    ],
  },
  'english:6': {
    plan: "Black pins your knight with ...Bb4 and pushes ...e4. You attack the e4 pawn with Ng5 and later open the centre with f3. After ...Bxc3 bxc3, the bishop pair is your trump.",
    remember: [
      "Ng5 attacks the e4 pawn right away.",
      "bxc3 gives you the bishop pair, and your doubled c-pawns control d4 and d5.",
      "f3 attacks e4 again and opens lines for your bishops.",
    ],
  },
  'english:7': {
    plan: "This position transposes to the Symmetrical English. You finish developing with g3, Bg2 and castling. Then you break with d4 for a small space edge.",
    remember: [
      "g3 and Bg2 put your bishop on the long diagonal, aiming at d5 and Black's queenside.",
      "O-O comes first, so your king is safe before you open the centre.",
      "d4 breaks the symmetry and opens your g2 bishop's diagonal.",
    ],
  },
  'english:8': {
    plan: "Against ...c6 you take the centre with e4, and after ...d5 exd5 cxd5 d4 you reach the Panov Attack. Usually you get an isolated d-pawn with active pieces. You play actively in the centre and on the kingside.",
    remember: [
      "e4 challenges Black's ...c6 setup, and after ...d5, exd5 opens the centre.",
      "d4 builds the Panov Attack structure, where you usually end up with an isolated d-pawn and free piece play.",
      "Nc3 adds a third attacker on d5 together with c4, so Black has to defend it carefully.",
    ],
  },
  'english:9': {
    plan: "Against ...g6 and ...c5, this transposes to the Symmetrical English. You finish your fianchetto, castle and then play d4. The result is a small space edge for you.",
    remember: [
      "g3 and Bg2 contest the long diagonal against Black's g7 bishop.",
      "Nc3 develops and controls d5 and e4, two key central squares in this structure.",
      "d4 breaks the symmetry once you have castled.",
    ],
  },
  'english:10': {
    plan: "Against ...Bb4, you jump to d5 to hit the bishop at once. Then you take the centre with d4 and e4. You get a big centre and a strong knight on d5.",
    remember: [
      "Nd5 attacks the bishop and avoids doubled pawns from ...Bxc3.",
      "d4 challenges e5 and gains central space.",
      "e4 supports the d5 knight and completes your big pawn centre.",
    ],
  },
  'london:0': {
    plan: "This is the London System main line: d4, Bf4, e3, Nf3, c3, Nbd2 and Bd3. You keep the bishop with Bg3 when Black offers a trade, then post a knight on e5. Your play is on the kingside, with ideas like Qf3 and attacking Black's king.",
    remember: [
      "Bf4 comes before e3, so your dark-squared bishop is outside the pawn chain.",
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens the h-file for your rook.",
      "Ne5 puts the knight on a strong square supported by d4, ready for kingside play.",
    ],
  },
  'london:1': {
    plan: "Black attacks your b2 pawn with ...Qb6. You offer a queen trade with Qb3, retreat to c2 after ...c4, and when Black plays ...Bf5 you take the unprotected bishop. The game turns tactical, and you must watch your a1 rook and b1 knight after ...Qxb2.",
    remember: [
      "Qb3 defends b2 and offers a queen trade.",
      "Qc2 steps away from ...c4 while still protecting b2.",
      "Qxf5 wins the bishop, which ...Bf5 left unprotected; then Qxd5 and Qxc4 collect pawns.",
    ],
  },
  'london:2': {
    plan: "Against a King's Indian setup, you play the London with h3 and c3. You keep your bishop and stay solid. The middlegame is calm, and you wait for Black's ...e5 or ...c5 breaks.",
    remember: [
      "h3 gives your bishop the h2 retreat square if Black plays ...Nh5 or ...e5.",
      "c3 supports d4 against ...c5 and ...Nc6.",
      "O-O completes your development, so you are ready for Black's breaks.",
    ],
  },
  'london:3': {
    plan: "Against ...Nf6 and ...e6, you reach the same London structure. You build with e3 and c3, put the knights on d2 and f3, keep the bishop with Bg3 and play Bd3. Then you aim for Ne5 and a kingside attack.",
    remember: [
      "c3 holds d4 against ...c5 and ...Nc6.",
      "Nd2 develops first and controls e4, while the g1 knight still waits.",
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens your h-file.",
    ],
  },
  'london:4': {
    plan: "Black copies your setup with ...Bf5. You offer to trade the light-squared bishops with Bd3, then play the usual c3, Nbd2 and Bg3. The game becomes a calm, solid London.",
    remember: [
      "Bd3 offers to trade Black's good light-squared bishop, and Qxd3 develops your queen.",
      "c3 supports d4 against ...c5 and ...Nc6, so you can recapture with a pawn if Black takes on d4.",
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens the h-file for your rook.",
    ],
  },
  'london:5': {
    plan: "When Black's bishop leaves c8, b7 is left without a defender. You hit it with c4 and Qb3, gain time with c5, and after the queen trade use the open a-file. The result is a queenless middlegame with your queenside space.",
    remember: [
      "c4 attacks d5 and opens b3 for your queen.",
      "Qb3 hits b7, which the c8 bishop no longer guards.",
      "c5 gains time on the queen, and after ...Qxb3, axb3 opens the a-file for your rook.",
    ],
  },
  'london:6': {
    plan: "Black plays ...c5 early. You build the London structure with c3, Nd2, Ngf3, Bg3 and Bd3. Then you aim for Ne5 and a kingside attack.",
    remember: [
      "c3 supports d4 against ...c5 and ...Nc6, keeping your centre solid.",
      "Nd2 and Ngf3 develop your knights and control e4 and e5.",
      "Bg3 answers ...Bd6 by keeping your bishop, and Bd3 aims at h7.",
    ],
  },
  'london:7': {
    plan: "Against the Dutch, you still play the London. You develop with e3 and Nf3, keep the bishop with h3, and aim Bd3 at Black's kingside. The fight is about the e4 square.",
    remember: [
      "h3 gives your bishop the h2 retreat square and keeps Black's knight off g4.",
      "Nbd2 controls e4, the square Black fights for with ...f5 and ...Bb7.",
      "Bd3 aims at e4 and f5 and Black's weakened kingside.",
    ],
  },
  'london:8': {
    plan: "Black challenges your bishop at once with ...Bd6. You keep it with Bg3, so if Black takes, hxg3 opens your h-file. You then build the usual London setup with Nd2, c3, Bd3 and Ngf3.",
    remember: [
      "Bg3 answers ...Bd6 by keeping your bishop; if Black takes, hxg3 opens the h-file.",
      "Nd2 and c3 develop solidly and support d4 against ...c5.",
      "Bd3 aims at h7, and Ngf3 completes development.",
    ],
  },
  'london:9': {
    plan: "Black plays ...c6 and ...Bf5. You offer to trade bishops with Bd3, castle and develop. Then you prepare a central break with e4 or c4.",
    remember: [
      "Bd3 trades off Black's good light-squared bishop.",
      "Qxd3 develops your queen, which also controls e4.",
      "Nbd2 develops and, together with Qd3, supports a later e4 break to open the centre.",
    ],
  },
  'london:10': {
    plan: "Against ...d6 and ...g6, you use the same plan as against the King's Indian setup: h3, Be2 and castle. You keep the bishop and stay solid. Then you wait for Black's breaks.",
    remember: [
      "Nf3 develops and controls e5, making Black's ...e5 break harder.",
      "h3 gives your bishop the h2 retreat square if Black plays ...Nh5.",
      "Be2 develops modestly, so you can castle next.",
    ],
  },
  'scotch:0': {
    plan: "The Scotch opens the centre at once with d4 and recaptures with the knight. In the Mieses Variation you trade on c6 and push e5 to kick Black's knight, gaining space. Black has doubled, isolated queenside pawns, and you keep a space edge in the centre while Black looks for piece activity.",
    remember: [
      "Nxc6 bxc6 damages Black's queenside pawns and clears the way for e5, which kicks the f6 knight.",
      "Qe2 defends e5 against ...Qe7 and blocks the e-file, so Black's queen cannot win the pawn.",
      "c4 kicks the d5 knight away, and b3 then supports c4 against the pin from ...Ba6 on your queen on e2.",
    ],
  },
  'scotch:1': {
    plan: "When Black recaptures on c6 with the d-pawn, you trade queens with check. Black loses the right to castle and has doubled c-pawns. You get a small but lasting endgame edge thanks to your healthy four against three kingside pawn majority.",
    remember: [
      "Qxd8+ costs Black the right to castle and leads to an endgame where your pawn structure is better.",
      "Nc3 develops and defends e4, which Black's f6 knight attacks now that the queens are gone.",
      "Bd2 breaks the pin from ...Bb4, so Black cannot double your pawns with ...Bxc3 on favourable terms.",
    ],
  },
  'scotch:2': {
    plan: "Against ...Bc5 with ...Qf6, Black threatens mate on f2. You trade on c6, defend f2 with Qd2, and then chase Black's bishop with Na4. You aim for a calm position where Black's doubled c-pawns and your sound structure matter.",
    remember: [
      "Nxc6 removes the d4 knight that Black's c5 bishop was attacking.",
      "Qd2 defends f2, because ...Qf6 together with the c5 bishop threatens ...Qxf2#.",
      "Na4 attacks the c5 bishop to take away Black's bishop pair; after ...Bd4, Bd3 develops and prepares to castle.",
    ],
  },
  'scotch:3': {
    plan: "When Black recaptures on c6 with the b-pawn, Black keeps a strong bishop on c5 and brings the queen to h4. You develop with Bd3 and Qe2 to defend e4 and f2, then castle. Black's damaged queenside pawns are a long-term target.",
    remember: [
      "Nxc6 bxc6 leaves Black with doubled c-pawns and an isolated a-pawn.",
      "Bd3 develops and defends e4, which Black's ...Qh4 is attacking.",
      "Qe2 defends both f2 and e4, which ...Qh4 and the c5 bishop were attacking.",
    ],
  },
  'scotch:4': {
    plan: "Against the Steinitz ...Qh4, Black grabs your e4 pawn. You give it up for a big lead in development, using Nb5 to attack c7. Black's king ends up stuck on d8, and you open lines against it.",
    remember: [
      "Nc3 develops and defends e4, and Be2 gets ready to castle quickly once Black takes the pawn.",
      "Nb5 threatens Nxc7+, forking Black's king and rook, which forces ...Bxc3+ and ...Kd8.",
      "O-O completes your development while Black's king is stuck in the centre, and the e-file is yours to use.",
    ],
  },
  'scotch:5': {
    plan: "Black trades knights on d4, which brings your queen to a strong central square. You add Bc4 and then threaten mate on f7 with Qd5. You keep a lead in development and pressure on f7.",
    remember: [
      "Qxd4 recaptures with a centralised queen that Black cannot easily chase away.",
      "Bc4 develops and aims at f7, Black's weakest point.",
      "Qd5 threatens Qxf7# together with the c4 bishop, which forces ...Qf6.",
    ],
  },
  'scotch:6': {
    plan: "Against ...Bb4+, you block with c3, and the bishop has to retreat. You trade on c6 to damage Black's pawns and develop with Bd3 and castling. You keep more space with your e4 pawn against Black's d6.",
    remember: [
      "c3 blocks the check and gains time, because the bishop has to retreat to e7.",
      "Nxc6 bxc6 leaves Black with doubled c-pawns and an isolated a-pawn.",
      "Bd3 develops and defends e4, so you can castle next.",
    ],
  },
  'scotch:7': {
    plan: "Against ...d6, you pin the c6 knight with Bb5 to add pressure on e5. Black gives up the centre with ...exd4, and you recapture with the knight. You get a pleasant space advantage with e4 against d6.",
    remember: [
      "Bb5 pins the c6 knight, so it cannot hold e5 well and Black has to spend ...Bd7 to break the pin.",
      "Nc3 develops and defends e4, which Black will attack with ...Nf6.",
      "Nxd4 recaptures with a centralised knight after ...exd4, leaving you with more space.",
    ],
  },
  'vienna:0': {
    plan: "The Vienna Gambit starts with Nc3 and then f4. Against ...d5 you take on e5 to gain space and build up with Nf3, d4 and Bd3. Your e5 pawn cramps Black, and after the f-file opens you attack on the kingside.",
    remember: [
      "f4 attacks e5 and prepares to open the f-file.",
      "fxe5 gains space, and Nf3 then defends e5 and prepares d4.",
      "Bd3 hits the e4 knight; after ...f5, exf6 en passant opens the f-file for your rook once you castle.",
    ],
  },
  'vienna:1': {
    plan: "Against ...Nc6 in the Vienna Gambit, you pin the knight with Bb5 and trade it off. Then d3 kicks the strong e4 knight. After ...Nxc3 bxc3 you castle and use the half-open f-file and your e5 pawn against Black's damaged pawns.",
    remember: [
      "Bb5 pins the c6 knight, which is attacking your e5 pawn.",
      "Bxc6+ removes the piece attacking e5 and leaves Black with doubled c-pawns.",
      "d3 kicks the e4 knight and opens your c1 bishop.",
    ],
  },
  'vienna:2': {
    plan: "Against ...exf4, you push e5 to drive Black's knight back to g8. Then d4, Qe2 and Bxf4 win back the pawns. You end up with equal material and a lead in development.",
    remember: [
      "e5 kicks the f6 knight back to g8, undoing Black's development.",
      "Qe2 pins Black's e5 pawn against the king on e8, and Qxe5 wins it back.",
      "Bxf4 wins back the gambit pawn while developing the bishop.",
    ],
  },
  'vienna:3': {
    plan: "Against ...d6, you develop with Nf3 and Bb5 and play d3. After ...exf4 you win the pawn back with Bxf4. You get a solid position with active pieces and a half-open f-file.",
    remember: [
      "Nf3 develops and adds pressure on e5.",
      "Bb5 pins the c6 knight, which defends e5.",
      "d3 supports e4 and opens your c1 bishop, so Bxf4 can win back the pawn.",
    ],
  },
  'vienna:4': {
    plan: "The Hamppe-Allgaier Gambit is very sharp: you sacrifice the knight on f7 to drag Black's king into the open. You then build a big centre with d4 and bring your pieces into the attack. You are down material, so you must keep up the pressure.",
    remember: [
      "h4 attacks g5 and forces ...g4, breaking up Black's kingside pawns.",
      "Ng5 is the reply to ...g4; after ...h6 the knight has no safe square, so Nxf7 sacrifices it to expose Black's king.",
      "d4 builds a big centre and opens your c1 bishop to attack f4.",
    ],
  },
  'vienna:5': {
    plan: "Against ...Bc5 in the Vienna with f4, you develop with Nf3 and then trade off Black's strong bishop with Na4. After Nxb6 axb6 you have the bishop pair. You continue with d3 and calm development.",
    remember: [
      "Nf3 develops and covers h4, so ...Qh4+ never comes.",
      "Na4 attacks the c5 bishop, and Nxb6 trades it to give you the bishop pair.",
      "d3 supports e4 and opens your c1 bishop.",
    ],
  },
  'vienna:6': {
    plan: "Against an early ...Bc5, you develop with Nf3 and take the centre with d4. After ...exd4 Nxd4 you have a pawn on e4 against Black's pawn on d6. You enjoy more space and castle into a comfortable middlegame.",
    remember: [
      "Nf3 develops and attacks e5, preparing d4.",
      "d4 takes the centre, and after ...exd4, Nxd4 recaptures with a central knight.",
      "Be2 develops solidly so you can castle next.",
    ],
  },
  'vienna:7': {
    plan: "Against ...d6, you play f4 and then d4 to build a big centre. After ...exf4 you win the pawn back with Bxf4. You get two central pawns against Black's d6 and a half-open f-file.",
    remember: [
      "f4 attacks e5 and opens the f-file.",
      "d4 builds a big centre while Black's e-pawn has gone to f4.",
      "Bxf4 wins back the gambit pawn, and Bd3 develops behind your e4 pawn.",
    ],
  },
  'kings-gambit:0': {
    plan: "In the Kieseritzky Gambit, h4 attacks Black's g-pawn and Ne5 puts the knight in the centre. Black's pawns become overextended, but Black grabs your e4 pawn. The game is very sharp, with both kings under fire.",
    remember: [
      "h4 attacks g5, forcing ...g4 before Black can support the pawn.",
      "Ne5 puts the knight in the centre, aiming at g4 and f7.",
      "Nd3 attacks the f4 pawn, and Bxf4 wins it back.",
    ],
  },
  'kings-gambit:1': {
    plan: "Against the Modern Defence ...d5, you take on d5 and develop with check. After the trades on c6 you play d4 and castle. The position is open, and you aim to win back the f4 pawn.",
    remember: [
      "exd5 takes Black's centre pawn and leaves the f4 pawn as Black's only extra material.",
      "Bb5+ develops with check, and after ...c6 dxc6 Nxc6 your bishop pins the c6 knight.",
      "Nbd2 heads for c4 to challenge the d6 bishop that defends f4.",
    ],
  },
  'kings-gambit:2': {
    plan: "Against the Fischer Defence, you develop with Bc4 and d4 and castle. Then you break up Black's pawn chain with g3. You get open lines and a lead in development.",
    remember: [
      "Bc4 develops and aims at f7, Black's weakest point after the f-pawn has gone.",
      "O-O puts your rook on the half-open f-file against the f4 pawn.",
      "g3 attacks f4 to break up Black's pawn chain.",
    ],
  },
  'kings-gambit:3': {
    plan: "Against the Schallopp ...Nf6, you push e5 to kick the knight to the edge of the board. You then play d4 and Qe2. You get space in the centre, and Black's knight on h5 is offside.",
    remember: [
      "e5 kicks the knight to h5, where it is offside.",
      "d4 supports e5 and opens your c1 bishop.",
      "Qe2 supports e5 and lines up on the e-file against Black's king, which is why Black plays ...Be7.",
    ],
  },
  'kings-gambit:4': {
    plan: "Against the Cunningham ...Be7, you develop with Bc4 and push e5 to kick the knight. Then d4 builds the centre. You aim to win the f4 pawn back.",
    remember: [
      "Bc4 develops and aims at f7, which is weak with your f-file about to open.",
      "e5 kicks the f6 knight to g4 and gains space, so Black loses time with his only developed knight.",
      "d4 supports e5 and opens your c1 bishop.",
    ],
  },
  'kings-gambit:5': {
    plan: "Against the Classical ...Bc5, you develop with Nf3, Nc3, Bc4 and d3. While Black's bishop controls g1, you cannot castle kingside. You pin the knight with Bb5 to stop ...Nd4.",
    remember: [
      "Nf3 develops and covers h4, so ...Qh4+ never comes.",
      "d3 supports e4 and opens your c1 bishop.",
      "Bb5 pins the c6 knight, so Black cannot play ...Nd4 and pile up on your f3 knight.",
    ],
  },
  'kings-gambit:6': {
    plan: "Against the Falkbeer Countergambit, you take on d5 and then hit Black's e4 pawn with d3. After ...Nxe4 you pin the knight with Qe2. You are a pawn up, and Black has active pieces.",
    remember: [
      "exd5 takes Black's d-pawn, and your extra pawn on d5 becomes a passed pawn.",
      "d3 attacks the e4 pawn at once, before Black can support it.",
      "Qe2 pins the e4 knight against Black's king and defends f2 against the c5 bishop.",
    ],
  },
  'kings-gambit:7': {
    plan: "Against ...Nc6 followed by ...exf4, you take the centre with d4 and then chase the knight with d5. Black counters with ...g5-g4 against your f3 knight, and both sides capture a knight. After Qxf3 you have open lines, a strong queen and the f4 pawn as a target.",
    remember: [
      "d4 takes the centre while Black's e-pawn has left for f4.",
      "d5 attacks the c6 knight, so Black must give it up and counterattack with ...g4.",
      "Qxf3 recaptures the piece and lines your queen up against the f4 pawn and the f7 square.",
    ],
  },
  'catalan:0': {
    plan: "In the Open Catalan Black takes the c4 pawn with ...dxc4. You win it back with Qc2 and a4, while your g2 bishop presses along the long diagonal toward the queenside. You get a lasting, low-risk edge with pressure on Black's queenside.",
    remember: [
      "Qc2 attacks the c4 pawn so you can win it back.",
      "a4 stops ...b5, which would otherwise protect the extra pawn on c4.",
      "Qxc4 regains the pawn, and Bg5 then develops with pressure on the f6 knight, which shields Black's king.",
    ],
  },
  'catalan:1': {
    plan: "Against ...dxc4 with ...c5, you win the pawn back quickly with Qa4 and Qxc4. Black gains queenside space with ...b5 and ...c4 by chasing your queen. Those advanced pawns can become loose, and your queen and g2 bishop stay ready to target them.",
    remember: [
      "Qa4 pins the c6 knight against Black's king and attacks c4.",
      "Qxc4 wins back the gambit pawn and keeps the queen on the c-file against Black's queenside.",
      "Qd3 and then Qc2 step away from ...b5 and ...c4 while keeping your queen active in the centre.",
    ],
  },
  'catalan:2': {
    plan: "Against ...dxc4 with ...Nc6, you pin the knight with Qa4 and aim to win back c4. After ...Bb4+ Bd2 the dark-squared bishops come off. You castle and then go after the c4 pawn and Black's queenside.",
    remember: [
      "Qa4 pins the c6 knight against Black's king and attacks the c4 pawn.",
      "Bd2 blocks the check from ...Bb4+, and Bxb4 trades off Black's active bishop.",
      "O-O gets your king safe before you go after the weak c4 pawn.",
    ],
  },
  'catalan:3': {
    plan: "In the Closed Catalan Black keeps a pawn on d5 and builds a solid wall with ...c6 and ...b6. You prepare e4 with Qc2 and Nbd2 to take the centre. You get central space, and your g2 bishop gains strength as the centre opens.",
    remember: [
      "Qc2 controls e4 and supports your c4 pawn, preparing the e4 break.",
      "Nbd2 adds support to e4 and can recapture on c4 if Black plays ...dxc4.",
      "e4 strikes in the centre once everything is ready, gaining space before Black finishes ...Bb7.",
    ],
  },
  'catalan:4': {
    plan: "Against ...Bb4+, you block with Bd2, and Black often drops the bishop back to e7. You continue with Nf3, castling and Qc2. You get the typical Catalan structure with pressure on the long diagonal and on c4 and e4.",
    remember: [
      "Bd2 blocks the check, and after ...Be7 Black has spent two moves to put the bishop on e7.",
      "Nf3 and O-O complete your kingside development.",
      "Qc2 supports c4 and controls e4, which matters once Black plays ...b6 to pressure c4.",
    ],
  },
  'catalan:5': {
    plan: "Against an early ...Bb4+, you block with Bd2 before your bishop goes to g2. Black's bishop retreats to e7, and you develop with Bg2, Nf3 and castling. You reach a normal Catalan with pressure on the long diagonal.",
    remember: [
      "Bd2 blocks the check, and ...Be7 means Black has spent an extra move on the bishop.",
      "Bg2 puts your bishop on the long diagonal, aimed at d5 and Black's queenside.",
      "O-O gets your king safe behind the fianchetto.",
    ],
  },
  'catalan:6': {
    plan: "Against ...c5, you push d5 and reach a Fianchetto Benoni after ...exd5 cxd5. You have a central pawn majority and a space wedge on d5, while Black has a queenside majority. Your g2 bishop supports d5, and you play in the centre against the d6 pawn.",
    remember: [
      "d5 gains space and cramps Black's position.",
      "Nc3 develops and supports your d5 pawn.",
      "Bg2 supports d5 from the long diagonal, and O-O keeps your king safe behind it.",
    ],
  },
  'catalan:7': {
    plan: "Against ...g6, you play the Fianchetto King's Indian with g3, Bg2, Nc3, Nf3 and castling. When Black strikes with ...e5, you answer with e4 for a big centre. Your g2 bishop keeps your king safe while you play with your extra space.",
    remember: [
      "g3 and Bg2 put your bishop on the long diagonal, opposing Black's g7 bishop and guarding your king.",
      "Nc3 and Nf3 control d5, e4 and e5.",
      "e4 answers ...e5 by taking more central space.",
    ],
  },
}
