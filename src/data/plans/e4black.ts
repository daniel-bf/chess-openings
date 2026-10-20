import type { Plans } from './types'
export const e4BlackFinal: Plans = {
  'sicilian:0': {
    plan: "White castles long and throws the kingside pawns at your king with f3, g4 and g5. You answer with ...e5 to gain space with tempo against the d4 knight, castle short and race on the queenside with ...b5-b4. The d5 square is the strategic heart of the position, but the game is usually decided by whose attack arrives first.",
    remember: [
      "...e5 kicks the d4 knight to b3 and gains central space, but it leaves a hole on d5, so ...Be6 and ...Nbd7 must keep watching that square.",
      "...b5 comes straight after g4, because in an opposite-side castling race every tempo counts.",
      "...b4 ignores the attack on your f6 knight after g5 and hits the c3 knight instead, the piece that guards e4 and d5.",
    ],
  },
  'sicilian:1': {
    plan: "The sharpest Najdorf. White pins your f6 knight, castles long and storms with f4 and g4-g5. You keep a solid ...e6 shell, break the pin with ...Be7, and counterattack on the queenside with ...Qc7, ...Nbd7 and ...b5, often leaving your king in the centre.",
    remember: [
      "...e6 controls d5 and f5 and opens the f8 bishop, so ...Be7 can break the pin on your f6 knight.",
      "After Bxf6 recapture with ...Nxf6 to keep your pawns intact; when g5 hits the knight, ...Nd7 is its natural retreat, heading for c5.",
      "...b5 starts your queenside play at once and threatens ...b4 against the c3 knight, which defends e4.",
    ],
  },
  'sicilian:2': {
    plan: "A calm positional system. White castles short and fights for the d5 square. You play ...e5, ...Be7, ...Be6 and castle, then use the half-open c-file; if you ever achieve ...d5 safely, you have fully equalised.",
    remember: [
      "...e5 gains space and drives the d4 knight to b3, at the cost of a backward d6 pawn and a hole on d5.",
      "...Be6 and ...Nbd7 guard d5; the knight can later go to b6 to add another defender.",
      "...Rc8 puts the rook on the half-open c-file against c2 and the c3 knight, now that a4 has stopped your ...b5.",
    ],
  },
  'sicilian:3': {
    plan: "White avoids the Open Sicilian with a bishop check and trades light-squared bishops. You develop easily with ...Nc6, ...Nf6 and ...e6, then meet d4 with ...cxd4 and ...d5. After e5 you reach a French-like structure without the French problem bishop, and your knight takes the e4 square.",
    remember: [
      "...Bd7 blocks the check and offers the trade; recapturing ...Qxd7 keeps the b8 knight free to go to c6.",
      "...d5 hits e4 once White has built a centre with c3 and d4, so White must either exchange or push e5.",
      "After e5, ...Ne4 jumps into a strong central post, and White no longer has a light-squared bishop to challenge it.",
    ],
  },
  'sicilian:4': {
    plan: "In the Alapin, White plays c3 to build a full pawn centre with d4. You attack e4 at once with ...Nf6, provoking e5, then undermine the centre with ...cxd4 and ...d6. After the exchanges on e5, White is left with an isolated d4 pawn and you have a solid ...e6 and ...Be7 setup to blockade and attack it.",
    remember: [
      "...Nf6 attacks e4 straight away; after e5 the knight goes to d5, and when Bc4 hits it, ...Nb6 attacks the bishop in return.",
      "...d6 challenges the e5 pawn before it can cramp your position.",
      "...Bd7 meets the pin from Bb5 on your c6 knight; after Nxd7 Qxd7 and ...e6, White's d4 pawn is isolated and you can blockade it on d5.",
    ],
  },
  'sicilian:5': {
    plan: "White gives a pawn for fast development and open c- and d-files. You accept with ...dxc3, then develop carefully with ...Nc6, ...d6, ...e6, ...Nf6 and ...Be7, aiming to castle and consolidate. If you get through the opening without accidents, you are simply a pawn up.",
    remember: [
      "...dxc3 takes the gambit pawn; after that do not grab more, just develop.",
      "...e6 blocks the c4 bishop's diagonal toward f7, which takes the sting out of Bxf7+ and Ng5 ideas.",
      "...e5 answers Rd1 by closing the d-file, so the rook no longer presses on your d6 pawn.",
    ],
  },
  'sicilian:6': {
    plan: "In the Sozin, the bishop on b3 aims at e6 and f7, and White looks for a quick kingside attack with Qf3-g3 or f4-f5. You blunt the bishop with ...e6, expand with ...b5 and castle, ready to defend g7 and then counterattack on the queenside.",
    remember: [
      "...e6 is essential: it blocks the b3 bishop's diagonal so it bites on a solid pawn instead of f7.",
      "...b5 gains queenside space and threatens ...b4, hitting the c3 knight that defends e4.",
      "...Ne8 adds a defender to g7 when Qg3 and Bh6 both attack it.",
    ],
  },
  'sicilian:7': {
    plan: "The same English Attack structure, reached with 6.f3 instead of 6.Be3. White builds f3, Be3, Qd2, O-O-O and g4 to storm your king, while you play ...e5, ...Be6, castle short and race with ...b5. Once you know the plans, White's move order does not matter.",
    remember: [
      "...e5 answers 6.f3 just as it answers 6.Be3, gaining space with tempo by kicking the d4 knight to b3.",
      "...Be6 guards the d5 hole, with ...Nbd7 adding a second piece that watches the centre.",
      "...b5 answers g4 at once: it threatens ...b4 against the c3 knight and starts your queenside race.",
    ],
  },
  'sicilian:8': {
    plan: "White plays h3 to prepare g4-g5 and kick your f6 knight. You answer with ...e5 and then ...h5, so the g4 push never comes. White switches to a slower g3 and Bg2 setup, and you get a comfortable Najdorf in which the fight revolves around d5.",
    remember: [
      "...e5 kicks the d4 knight, which retreats to e2 here instead of b3.",
      "...h5 stops g4 for good, taking the sting out of White's h3 plan.",
      "...Be6 and ...Nbd7 guard d5, the key square of this structure, and ...Be7 prepares short castling.",
    ],
  },
  'sicilian:9': {
    plan: "The Grand Prix aims at your king with f4, Bc4 and later Qe1-h4 and f4-f5. You fianchetto with ...g6 and ...Bg7, blunt the c4 bishop with ...e6 and develop the knight to e7. Then you castle and look for counterplay with ...d5 in the centre or ...b5 on the queenside.",
    remember: [
      "...e6 blocks the c4 bishop's diagonal and takes d5 and f5 away from White.",
      "...Nge7 instead of ...Nf6 supports a later ...d5 and covers f5 when White pushes f4-f5.",
      "...Bg7 puts the bishop on the long diagonal, where it eyes d4 and the c3 knight and also guards your castled king.",
    ],
  },
  'french:0': {
    plan: "In the Advance, White has a big pawn chain on d4 and e5. You attack its base with ...c5, ...Nc6 and ...Qb6. After 6.a3, which prepares b4, you close the queenside with ...c4 and aim your knight at the b3 hole, later breaking with ...f6 against e5.",
    remember: [
      "...Qb6 adds a third attacker on d4 and also hits b2.",
      "...c4 closes the queenside, takes the sting out of b4 and creates a hole on b3 for your pieces.",
      "...Na5 heads for b3, and ...Bd7 develops the light-squared bishop so it can later go to b5.",
    ],
  },
  'french:1': {
    plan: "White defends d4 simply with Be2 and plans to castle. You trade on d4 to open the c-file, pile up on d4 with ...Nh6-f5, and use a check on b4 to stop White from castling. With White's king stuck on f1, you play against d4 and on the queenside.",
    remember: [
      "...cxd4 opens the c-file and fixes White's d4 pawn as your target.",
      "...Nh6-f5 brings a third attacker to d4, alongside the queen on b6 and the knight on c6.",
      "...Bb4+ forces Kf1, so White cannot castle and the h1 rook is out of play for a while; then ...Be7 retreats with its job done.",
    ],
  },
  'french:2': {
    plan: "In the Milner-Barry Gambit, White sacrifices the d4 pawn for fast development and attacking chances. You prepare the capture with ...Bd7, take on d4 with the knight and then the queen, and keep the queen safe with ...a6. If you consolidate, you are a healthy pawn up.",
    remember: [
      "...Bd7 must come first: after 7...Nxd4? 8.Nxd4 Qxd4?? 9.Bb5+ White checks your king and wins your queen with Qxd4.",
      "...Nxd4 and ...Qxd4 grab the pawn once your bishop on d7 covers b5.",
      "...a6 stops Nb5, which would hit your queen on d4 and the c7 square.",
    ],
  },
  'french:3': {
    plan: "The Poisoned Pawn Winawer is one of the sharpest lines in the French. You give up your g7 and h7 pawns, and in return you smash White's centre with ...cxd4 and ...dxc3 and get open lines for your pieces. Your king often stays in the centre or goes to d8, and your rook uses the open g-file.",
    remember: [
      "...Qc7 answers Qg4 by hitting e5 and preparing ...cxd4, instead of defending g7.",
      "...Rg8 gains a tempo on the queen on g7 and puts your rook on the open g-file against g2.",
      "...cxd4 and ...dxc3 wreck White's pawn centre and leave you an advanced pawn on c3 that cramps White's queenside.",
    ],
  },
  'french:4': {
    plan: "The Exchange French gives a symmetrical structure with an open e-file. Your c8 bishop is no longer blocked, so you develop actively, castle early and fight for the e-file. The game is about piece activity rather than pawn breaks, and it is easy to play for a win as Black.",
    remember: [
      "...exd5 frees your c8 bishop, which is usually the problem piece in the French.",
      "...Bg4 mirrors Bg5 and pins the f3 knight against the queen, so White cannot easily play Ne5.",
      "...Nbd7 guards f6, so if Bxf6 you recapture with the knight and keep your pawns intact.",
    ],
  },
  'french:5': {
    plan: "Against the Tarrasch, you strike with ...c5 at once and recapture on d5 with the queen. This avoids an isolated d-pawn and gives a healthy, open position with quick development. White wins back the d4 pawn, and you aim for queenside play once your king is safe.",
    remember: [
      "...Qxd5 avoids the isolated d-pawn you would get after ...exd5.",
      "...Qd6 steps away from the c4 bishop's attack while keeping the queen central and watching d4.",
      "...a6 stops Nb5 and Bb5+ and prepares ...b5 with tempo on the c4 bishop.",
    ],
  },
  'french:6': {
    plan: "With 7.a4 White prepares Ba3 to use the dark-squared bishop. You develop with ...Nbc6 and ...Qa5 to pressure the doubled c-pawns and a4, then break with ...f6 against the e5 pawn. White has the bishop pair; you have the better pawn structure.",
    remember: [
      "...Qa5 hits the weak c3 pawn and the a4 pawn, which is why White must defend with Bd2.",
      "...Bd7 completes development and connects your pieces so the rooks can join the game.",
      "...f6 attacks the head of White's chain on e5 and prepares to open the f-file for your rook.",
    ],
  },
  'french:7': {
    plan: "White goes for an Exchange structure while your bishop is already on b4. You develop with ...Nc6, trade on c3 to double White's pawns, then play ...Nge7 and ...Bf5. The position is equal and easy to play, with White's doubled c-pawns as a long-term target.",
    remember: [
      "...Nc6 develops quickly and adds pressure on d4.",
      "...Bxc3+ after a3 gives up the bishop pair but leaves White with doubled c-pawns.",
      "...Bf5 offers to trade White's strong d3 bishop, and with the knight on e7 you can recapture ...Nxf5 if White exchanges.",
    ],
  },
  'french:8': {
    plan: "With 4.a3 White forces the bishop trade at once. You grab the e4 pawn and are happy to give up g7 for development and an open g-file. Material is level: you have pressure on the g-file and against White's doubled c-pawns, while White has the bishop pair.",
    remember: [
      "...dxe4 grabs a central pawn now that the c3 knight that defended e4 is gone.",
      "...Nf6 answers Qg4 by developing with an attack on the queen, instead of weakening yourself with ...g6.",
      "...Rg8 chases the queen from g7 and puts your rook on the open g-file aiming at g2.",
    ],
  },
  'french:9': {
    plan: "In the King's Indian Attack, White sets up d3, Nd2, g3, Bg2 and Re1, then pushes e5 and attacks your king. You take space with ...d5, ...c5 and ...Nc6, castle, and expand on the queenside with ...b5. It is a race: White attacks on the kingside, you on the queenside.",
    remember: [
      "...c5 and ...Nc6 claim the d4 square and prepare your queenside expansion.",
      "...Be7 lets you castle quickly; if White pushes e5, your f6 knight retreats to d7.",
      "...b5 grabs queenside space and prepares ...b4 and ...a5 to open lines there.",
    ],
  },
  'caro-kann:0': {
    plan: "In the Classical, your bishop comes out to f5 before ...e6 locks it in. White chases it with h4-h5, so you retreat it to h7 and trade it on d3, then set up a solid ...e6, ...Ngf6, ...Be7 position. White usually castles long with some kingside space, while you have no weaknesses and can castle on either side.",
    remember: [
      "...h6 answers h4 so the bishop can retreat to h7 when h5 comes; without it, h5 would trap the bishop on g6.",
      "...Nd7 covers e5, so the f3 knight cannot jump there to hit your bishop.",
      "...Bxd3 trades your bishop before it gets stuck on h7, and after Qxd3 you play ...e6 and ...Ngf6.",
    ],
  },
  'caro-kann:1': {
    plan: "In the Short system, White develops quietly with Nf3, Be2 and Be3. You develop the bishop to f5 before ...e6, then strike at d4 with ...c5. After the trade on d4 you bring knights to e7 and c6 to challenge White's centralised knight and the e5 pawn.",
    remember: [
      "...Bf5 gets the bishop outside the pawn chain before ...e6 shuts it in.",
      "...c5 attacks d4, the base of White's chain, even though it costs a second move with the c-pawn.",
      "...Ne7 and ...Nbc6 bring both knights to bear on d4 and e5.",
    ],
  },
  'caro-kann:2': {
    plan: "White offers to swap light-squared bishops at once. You accept, which leaves you a French-type structure without the French problem bishop. Then you attack d4 with ...Qb6 and ...c5 and play on the queenside.",
    remember: [
      "...Bxd3 trades the bishop that ...e6 would otherwise lock in for White's strong attacking bishop, which is good for you.",
      "...Qb6 eyes d4 and b2 and prepares ...c5 with extra pressure on d4.",
      "...c5 attacks the base of White's chain, and with your queen on b6 the d4 pawn is under real pressure.",
    ],
  },
  'caro-kann:3': {
    plan: "The Exchange Caro-Kann gives a symmetrical structure where you have the half-open c-file. You develop the bishop to g4 before ...e6, defend b7 against Qb3 with ...Qd7, and trade dark-squared bishops with ...Bd6. Later you can use a minority attack with ...b5-b4 against White's c3 pawn.",
    remember: [
      "...Bg4 develops the bishop outside the pawn chain before ...e6 and hits the queen on d1.",
      "...Qd7 answers Qb3 by defending b7 along the seventh rank.",
      "...Bd6 challenges White's active f4 bishop; after Bxd6 Qxd6 your queen is well placed and the dark squares are covered.",
    ],
  },
  'caro-kann:4': {
    plan: "In the Panov, White accepts an isolated d4 pawn in return for active pieces and kingside attacking chances. You blockade d5 with a knight, trade pieces and target the d4 pawn. The more pieces come off, the weaker the isolated pawn becomes.",
    remember: [
      "...e6 and ...Be7 give you a solid kingside, so after cxd5 you can recapture ...Nxd5.",
      "...Nxd5 puts a knight on the blockade square directly in front of the isolated pawn.",
      "...Nc6 and ...Bf6 pile up on d4, so White must tie pieces down to defend it.",
    ],
  },
  'caro-kann:5': {
    plan: "In the Two Knights, White delays d4 and keeps options with Nc3 and Nf3. You pin the f3 knight, give up the bishop for it and build a solid ...e6, ...Nf6, ...Nbd7, ...Bd6 setup. White has the bishop pair, but you have a firm centre and easy development.",
    remember: [
      "...Bg4 pins the f3 knight, and after h3 ...Bxf3 is the simple answer, since retreating would invite g4.",
      "...e6 and ...Nf6 build a solid centre, with your pawns on c6, d5 and e6 limiting White's bishops.",
      "...Bd6 develops toward the kingside so you can castle next, while ...Nbd7 keeps the f6 knight supported.",
    ],
  },
  'caro-kann:6': {
    plan: "This is the Classical Caro-Kann with Nf3 played before h4. The ideas are the same as in the main line: give the bishop the h7 square, stop Ne5 with ...Nd7, trade bishops on d3 and build your solid ...e6 setup.",
    remember: [
      "...Nd7 comes right after Nf3, because otherwise Ne5 would hit the g6 bishop.",
      "...h6 answers h4 so the bishop can drop back to h7 when h5 attacks it.",
      "...Bxd3 removes White's best attacking bishop, and ...e6 then completes the standard solid structure.",
    ],
  },
  'caro-kann:7': {
    plan: "White attacks b7 with 5.Nc5 instead of the usual Ng3. You defend with ...b6, which also drives the knight to b3, then develop normally with ...e6 and ...Nd7 and trade the light-squared bishops. Your c6 pawn is slightly weaker, but White's knight on b3 is badly placed.",
    remember: [
      "...b6 meets the attack on b7 and drives the knight to b3, where it does little.",
      "...Nd7 covers e5, so the f3 knight cannot jump there.",
      "...Bxd3 swaps bishops, and after Qxd3 ...Ngf6 completes the solid main-line setup.",
    ],
  },
  'caro-kann:8': {
    plan: "In the Fantasy, White supports e4 with f3. You play ...e6 and ...Bb4 to pressure e4 by pinning the c3 knight, and after e5 you reach a French-like position. Then ...c5 and ...Nc6 attack d4 against White's doubled c-pawns.",
    remember: [
      "...Bb4 pins the c3 knight, which defends e4, and ...Nf6 adds a second attacker on e4.",
      "After e5, ...Nfd7 retreats the knight and prepares ...c5 against White's chain.",
      "After ...Bxc3+ bxc3, ...c5 and ...Nc6 attack d4 and leave White with weak doubled c-pawns to look after.",
    ],
  },
  'caro-kann:9': {
    plan: "With 2.c4 White heads for a Panov-type position early. You win the pawn back with ...Nf6 and ...Nxd5, then develop with ...Nc6, ...e6, ...Be7 and castle. After d4, White has an isolated d-pawn and you have a solid position from which to blockade and attack it.",
    remember: [
      "...Nf6 is the right way to regain the d5 pawn: it develops instead of chasing the pawn with the queen.",
      "...e6 supports the d5 knight and opens the f8 bishop, so you can castle quickly despite the pin from Bb5.",
      "...O-O after d4 completes development, and your d5 knight blockades White's isolated d4 pawn.",
    ],
  },
  'scandinavian:0': {
    plan: "In the main line, your queen goes to a5 after Nc3 attacks it, the bishop comes out to f5 before ...e6, and ...c6 builds a solid structure with a retreat for the queen. White castles long; you add pressure with ...Bb4, give the bishop for the c3 knight when asked, and tuck the queen on c7. You get a solid Caro-Kann-like structure with easy development.",
    remember: [
      "...Qa5 escapes the c3 knight's attack and pins that knight against White's king.",
      "...c6 controls d5 and b5, so Nd5 and Nb5 tricks against your queen fail, and it gives the queen c7 to retreat to.",
      "...Bb4 adds a second attacker on the c3 knight; when a3 asks the question, ...Bxc3 and ...Qc7 put the queen on a safe square.",
    ],
  },
  'scandinavian:1': {
    plan: "Here White breaks the pin with an early Bd2, which sets up Nd5 tricks against your queen on a5. You answer with ...c6 to control d5, then complete the standard ...Bf5 and ...e6 setup. Keep the queen safe before anything else.",
    remember: [
      "...Bf5 develops the bishop outside the pawn chain before ...e6 shuts it in.",
      "...c6 stops Nd5, which would hit your queen and uncover the d2 bishop's attack on a5.",
      "...e6 opens the f8 bishop and blocks the c4 bishop's diagonal toward f7.",
    ],
  },
  'scandinavian:2': {
    plan: "White develops with Nf3 and Bc4 and plays a modest d3 instead of d4. You build the ...c6 shell, pin the f3 knight with ...Bg4 and move the queen to c7 once Bd2 unpins the c3 knight. The position is solid and you develop easily.",
    remember: [
      "...c6 covers d5 and b5, so White's knights cannot jump there with tempo on your queen.",
      "...Bg4 pins the f3 knight against the queen, and after h3 ...Bh5 keeps the pin.",
      "...Qc7 moves the queen off the d2 bishop's diagonal, so discovered attacks by the c3 knight are no longer possible.",
    ],
  },
  'scandinavian:3': {
    plan: "White develops quickly with Bc4 and Nf3 and castles. You build the same solid ...Nf6, ...c6, ...Bg4, ...e6 structure, pin the f3 knight, then finish development and castle. If White plays Bd2, watch for Nd5 or Nb5 tricks against your queen on a5.",
    remember: [
      "...c6 covers d5 and b5 and gives your queen a retreat on c7 if it is attacked.",
      "...Bg4 pins the f3 knight against the queen; after h3, ...Bh5 keeps the pin.",
      "...e6 frees the f8 bishop and blocks the c4 bishop's diagonal toward f7.",
    ],
  },
  'scandinavian:4': {
    plan: "Without Nc3, your queen can stay on d5 for now. You develop with ...Nf6, ...Bf5 and ...e6, then put pressure on d4 with ...Nc6. When c4 finally hits the queen it drops back to d7, and long castling with a rook on d8 against d4 is a natural plan.",
    remember: [
      "...Bf5 develops the bishop outside the pawn chain before ...e6.",
      "...Nc6 develops with pressure on d4, which your queen on d5 also attacks.",
      "...Qd7 answers c4 by keeping the queen on the d-file against d4, ready for ...O-O-O.",
    ],
  },
  'scandinavian:5': {
    plan: "This reaches the same position as the 3.d4 line by a different move order. Recognise it and play the same plan: develop with ...Nf6, ...Bf5, ...e6 and ...Nc6, pressure d4, and retreat the queen to d7 when c4 comes.",
    remember: [
      "...Bf5 develops the bishop actively before ...e6 locks it in.",
      "...Nc6 joins the queen on d5 in attacking d4 once White has played d4.",
      "...Qd7 meets c4 by staying on the d-file, so you can follow with ...O-O-O and ...Rd8 against d4.",
    ],
  },
  'scandinavian:6': {
    plan: "White avoids the exchange with 2.e5 and gets an Advance French-type structure. You play ...c5 and ...Nc6 against the base of the chain, but unlike in the French your light-squared bishop gets out to f5 before ...e6. Then you keep piling up on d4.",
    remember: [
      "...c5 attacks d4, the base of White's pawn chain, so White must spend a move on c3 to support it.",
      "...Nc6 adds pressure on d4 and e5.",
      "...Bf5 develops the bishop outside the chain before ...e6, the big improvement over a normal French.",
    ],
  },
  'scandinavian:7': {
    plan: "Against 2.Nc3, you push ...d4 to gain space with tempo and follow with ...e5, building a big centre. White's knight goes back to e2 and on to g3, and you develop with ...Be6, ...Nc6 and ...Nf6 behind your strong pawns.",
    remember: [
      "...d4 kicks the c3 knight and gains space in the centre.",
      "...e5 supports the d4 pawn and builds a broad pawn centre.",
      "...Be6 develops and controls f5 and c4, squares White's pieces would like to use.",
    ],
  },
  'pirc:0': {
    plan: "In the Austrian Attack, White builds a big centre with e4, d4 and f4 and wants e5. You castle first, then strike back with ...c5. After d5 the centre is closed and you play on the queenside, while always watching for White's e5 push against your f6 knight.",
    remember: [
      "...c5 hits the centre once your king is castled; after d5 the centre locks and your play shifts to the queenside.",
      "...Na6-c7 brings the knight to c7, where it covers b5 and eyes d5, preparing ...b5.",
      "...b6 answers a4 by supporting the c5 pawn, so your queenside stays solid.",
    ],
  },
  'pirc:1': {
    plan: "In the 150 Attack, White plays Be3, Qd2 and Bh6 to swap off your g7 bishop, then wants h4-h5 against your king. You keep your king in the centre for now, gain queenside space with ...c6 and ...b5, and develop with ...Nbd7 and ...Bb7.",
    remember: [
      "...c6 and ...b5 gain queenside space and threaten ...b4 against the c3 knight, which supports e4.",
      "Delaying ...O-O means White's Bh6 and kingside pawn storm have no castled king to aim at.",
      "...Bb7 completes development after Bxh6 Qxh6; with White's queen covering f8, your king stays in the centre for now.",
    ],
  },
  'pirc:2': {
    plan: "The Classical is calm: White develops naturally and keeps a strong centre. You castle, play ...c6 and ...a5, and bring the knight to a6 heading for b4. Later you look for the right moment for a central break with ...e5.",
    remember: [
      "...c6 controls d5 and b5 and prepares queenside play.",
      "...a5 answers a4 by stopping b4 and supporting a knight on b4.",
      "...Na6 heads for b4, from where it hits c2 and d3.",
    ],
  },
  'pirc:3': {
    plan: "White develops the bishop to g5 and plans Qd2 followed by Bh6 to trade your g7 bishop. You chase the bishop with ...h6 and ...g5, then trade it off with ...Nh5 to win the bishop pair. The price is a loosened kingside, so keep your king flexible.",
    remember: [
      "...h6 asks the bishop to decide before White can play Bh6; Bxh6 does not win a pawn because your bishop and rook defend h6.",
      "...g5 drives the bishop again and gains kingside space.",
      "...Nh5 attacks the g3 bishop, so you can take it and win the bishop pair.",
    ],
  },
  'pirc:4': {
    plan: "Against White's fianchetto, you castle and strike in the centre with ...e5, then back it up with ...c6 and ...Nbd7. The structure is solid and similar to a King's Indian, with play for you on both wings.",
    remember: [
      "...e5 challenges d4 straight away; it is the standard central break in the Pirc.",
      "...c6 controls d5 and b5, keeping White's knights out and preparing queenside play.",
      "...Nbd7 supports e5, so you can keep the tension in the centre.",
    ],
  },
  'pirc:5': {
    plan: "With Bc4 and Qe2 White prepares a quick e5. You play ...c6 so that after e5 dxe5 dxe5 your knight has a protected square on d5, then you castle quickly. The centre opens, and your d5 knight plus the g7 bishop aiming at e5 give you good play.",
    remember: [
      "...c6 means a knight on d5 will be protected, so e5 does not push your knight back passively.",
      "...dxe5 and ...Nd5 answer e5: the knight lands in the centre and blocks the c4 bishop.",
      "...O-O completes development, and your g7 bishop then aims at the e5 pawn.",
    ],
  },
  'pirc:6': {
    plan: "With 3.Bd3, White aims for a quiet setup with c3 and a solid centre. You fianchetto, castle and prepare ...e5 with ...Nc6. The position is calm and you develop simply and solidly.",
    remember: [
      "...g6 and ...Bg7 put the bishop on the long diagonal aiming at d4.",
      "...O-O gets your king safe before you start central play.",
      "...Nc6 develops and adds pressure on d4, preparing ...e5.",
    ],
  },
  'pirc:7': {
    plan: "With f3 and c4, White transposes to a Saemisch King's Indian structure. You castle, strike with ...e5, and after d5 closes the centre you play ...Nh5 to prepare ...f5. White plays on the queenside while you attack on the kingside.",
    remember: [
      "...O-O comes before ...e5, so your king is safe when the centre opens.",
      "...e5 challenges White's d4 pawn and claims central space; after d5 the centre is closed.",
      "...Nh5 clears the way for ...f5 and eyes the f4 square.",
    ],
  },
  'petroff:0': {
    plan: "The Classical Petrov. You kick the e5 knight with ...d6 before taking e4, then support your e4 knight with ...d5 and ...Nc6. White attacks it with c4 and Nc3; you answer by hitting the d3 bishop with ...Nb4.",
    remember: [
      "...d6 kicks the e5 knight first; taking 3...Nxe4 at once runs into 4.Qe2, which gives White the advantage.",
      "...d5, ...Nc6 and ...Bf5 support your e4 knight, which is your best piece.",
      "...Nb4 answers c4 by attacking the d3 bishop, forcing it off the b1-h7 diagonal that aims at your king.",
    ],
  },
  'petroff:1': {
    plan: "With 5.Nc3 White swaps knights and plans Be3, Qd2 and O-O-O with a kingside pawn storm. You castle short, regroup the knight to f6 and start your own queenside play with pawn advances.",
    remember: [
      "...Nxc3 swaps knights; after dxc3 White's queen and bishops come out fast, so ...Be7 and ...O-O get your king safe quickly.",
      "...Nd7-f6 reroutes the knight to its best square, where it guards h7 and your king.",
      "After O-O-O by White, the kings are on opposite sides, so counterattack on the queenside instead of only defending.",
    ],
  },
  'petroff:2': {
    plan: "With 5.Qe2 White pins your knight on the e-file. You block with ...Qe7, retreat the knight and trade queens. The ending is equal and very safe; this is a drawing line for White, which is fine for you.",
    remember: [
      "...Qe7 blocks the e-file: moving the e4 knight first would expose your king to a discovered check.",
      "...Nf6 retreats when d3 attacks the knight; with your queen on e7 it is no longer pinned.",
      "...Qxe2+ answers Bg5, which pins your f6 knight to the queen, by trading queens; then ...Be7 develops normally.",
    ],
  },
  'petroff:3': {
    plan: "With 5.c4 White discourages ...d5 and takes some central space. You develop with ...Nc6, swap knights on c3 and castle. White has a little more space, but you have no weaknesses and an easy, equal position.",
    remember: [
      "...Nc6 develops and eyes d4 and e5.",
      "...Nxc3 trades your e4 knight before Nc3 and Bd3 can harass it.",
      "...Be7 and ...O-O get your king safe, after which your c8 bishop and rooks come out.",
    ],
  },
  'petroff:4': {
    plan: "With 3.d4 White opens the centre. You take on e4, support the knight with ...d5, and challenge White's strong e5 knight with ...Nd7. After the trade you set up a solid centre with ...Bd6 and ...c6.",
    remember: [
      "...d5 supports the e4 knight, which the d3 bishop attacks.",
      "...Nd7 challenges White's best piece, the e5 knight, and after Nxd7 Bxd7 your bishop is developed.",
      "...c6 answers c4 by supporting d5, so your centre stays solid.",
    ],
  },
  'petroff:5': {
    plan: "In the Cochrane Gambit, White gives a knight for two pawns and a chase of your king. You take the knight, then fight for the centre with ...c5 and ...Nc6 before White's attack gets going. Once the light-squared bishops are traded, your king is reasonably safe and you are a piece for two pawns up.",
    remember: [
      "...Kxf7 accepts the sacrifice: you have a knight for two pawns.",
      "...c5 attacks d4 straight away, so White cannot easily support e5 against your f6 knight, and ...Nc6 develops with the same aim.",
      "...Be6 blocks the check, and after Bxe6+ Kxe6 White's most dangerous attacking piece is gone.",
    ],
  },
  'petroff:6': {
    plan: "In the Three Knights, White takes on e5 after your ...Bb4. You castle and use the e-file with ...Re8 to pressure e4, then trade on c3 and win the pawn back with ...Nxe4. Material is level and your pieces are active.",
    remember: [
      "...O-O after Nxe5 prepares ...Re8 to put pressure on e4 along the e-file.",
      "...Bxc3 removes the knight that defends e4, so ...Nxe4 regains the pawn.",
      "...d6 opens the c8 bishop's diagonal and takes e5 away from White's d3 knight.",
    ],
  },
  'petroff:7': {
    plan: "With 3.Bc4 White offers the e4 pawn for quick development. You take it, swap knights on c3 and hold your e5 pawn with ...f6. Your kingside is loosened, so cover the light squares around your king, but you are a pawn up.",
    remember: [
      "...f6 holds the e5 pawn, which the f3 knight attacked, so White has no target in the centre.",
      "...g6 answers Nh4 by stopping Qh5+, which is a real check now that your f-pawn has moved.",
      "...Qe7 defends e5 against f4 and covers f7 and the light squares around your king.",
    ],
  },
}
