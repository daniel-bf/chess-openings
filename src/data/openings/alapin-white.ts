import type { OpeningSource } from '../types'

export const alapinWhite: OpeningSource = {
  id: 'alapin-white',
  name: 'Alapin Sicilian (as White)',
  eco: 'B22',
  side: 'white',
  summary:
    "The Alapin Variation (1.e4 c5 2.c3) is a calm, principled answer to the Sicilian. Instead of opening the centre with 2.Nf3 and 3.d4 and walking into Black's favourite theory, you play c3 first so that d4 can be met by ...cxd4 cxd4, leaving you with two pawns side by side in the centre. Black's best replies, 2...d5 and 2...Nf6, attack e4 at once, and the games often lead to positions with an isolated d-pawn (a d-pawn with no pawns of its own colour on the files next to it), where your quick development and active pieces matter more than the pawn's weakness.",
  ideas: [
    'c3 prepares d4: when Black exchanges on d4 you recapture with the c-pawn and keep a pawn duo on d4 and e4.',
    'Against 2...d5 and 2...Nf6, develop quickly with Nf3, Be2 or Bc4 and castle. Often Nc3 gains time by hitting a queen on d5.',
    'If you end up with an isolated d-pawn, play actively: knights on c3 and f3, rooks to the centre, and use d4 to support a knight on e5.',
  ],
  lines: [
    {
      name: 'Barmen Defence: 4...Nf6 5.Nf3 e6 (6.Be2)',
      pgn: `1. e4 {Takes the centre and opens lines for the queen and the f1 bishop.}
        c5 {The Sicilian Defence. Black fights for d4 from the side with a wing pawn.}
        2. c3 {The Alapin. You prepare d4 so that after ...cxd4 you can recapture with a pawn and keep two pawns in the centre.}
        d5 {The most direct reply. Black strikes at e4 before you can play d4.}
        3. exd5 {Take. Defending e4 with 3.e5 would give Black a good French-type position.}
        Qxd5 {Black recaptures with the queen. Usually the queen in the centre is a liability, but here your c3 pawn has taken the best square away from your queen's knight, so you cannot hit it with Nc3 straight away.}
        4. d4 {Builds the centre you wanted and opens the c1 bishop.}
        Nf6 {Develops and keeps an eye on the centre.}
        5. Nf3 {Develops and protects d4, which the queen and the c5 pawn both attack.}
        e6 {A solid set-up. Black opens a diagonal for the f8 bishop.}
        6. Be2 {A modest but useful square. You plan to castle quickly, and the bishop keeps the e-file and the f3 knight protected.}
        Nc6 {Puts more pressure on d4.}
        7. O-O {King safety first, before the centre opens.}
        cxd4 {Black releases the tension and gives you an isolated d-pawn.}
        8. cxd4 {Recapture with the pawn. Now the c3 square is free for your knight.}
        Be7 {Black prepares to castle.}
        9. Nc3 {Develops with tempo: the knight hits the queen on d5. Your lead in development makes up for the isolated pawn on d4.}`,
    },
    {
      name: 'Barmen Defence: Modern Line (5...Bg4)',
      pgn: `1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3
        Bg4 {The Modern Line. Black pins your f3 knight to the queen to add pressure on d4.}
        6. Be2 {Breaks the pin by putting a piece between the knight and your queen.}
        e6 {Black opens the f8 bishop and supports the centre.}
        7. h3 {Asks the bishop a question: give up the bishop pair with ...Bxf3, or retreat.}
        Bh5 8. O-O {Castle now that the bishop has stepped back.}
        Nc6 {Increases the pressure on d4.}
        9. Be3 {Develops and adds a defender to d4.}
        cxd4 10. cxd4 {Recapture with the pawn, freeing c3 for the knight.}
        Be7 11. Nc3 {Develops with a gain of time, since the knight attacks the d5 queen.}`,
    },
    {
      name: 'Barmen Defence: 4...cxd4 5.cxd4 Nc6 6.Nf3 e5',
      pgn: `1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4
        cxd4 {Black exchanges at once.}
        5. cxd4 {You keep a pawn on d4, and c3 is free for the knight.}
        Nc6 {Develops and attacks d4.}
        6. Nf3 {Defends d4 and develops.}
        e5 {The sharpest try: Black attacks d4 a third time and tries to dissolve your centre.}
        7. Nc3 {Develops with tempo by hitting the queen on d5.}
        Bb4 {Pins your knight to your king so it cannot capture anything.}
        8. Bd2 {Breaks the pin and defends c3.}
        Bxc3 9. Bxc3 {Recapture with the bishop. It now points down the long diagonal at Black's kingside.}
        exd4 10. Nxd4 {Recapture with the knight. You have the bishop pair (both bishops against bishop and knight) and a lead in development.}`,
    },
    {
      name: 'Stoltz Attack: 6...d5 (2...Nf6 3.e5 Nd5 4.Nf3)',
      pgn: `1. e4 c5 2. c3
        Nf6 {Black's other main reply: the knight attacks e4 at once.}
        3. e5 {Push the pawn and chase the knight. You gain space and time.}
        Nd5 {The knight finds a good central square, but it can be chased again.}
        4. Nf3 {Develops first and keeps options for d4 later.}
        Nc6 {Develops and keeps an eye on e5 and d4.}
        5. Bc4 {The Stoltz Attack. The bishop hits the d5 knight.}
        Nb6 {The knight retreats and hits your bishop.}
        6. Bb3 {Keep the bishop on the a2-g8 diagonal, aiming at f7.}
        d5 {Black strikes at your e5 pawn.}
        7. exd6 {Take en passant ("in passing"): your e5 pawn captures the d-pawn as if it had moved only one square.}
        c4 {Black gains time by chasing your bishop.}
        8. Bc2 {The bishop retreats to a good diagonal, pointing at h7.}
        Qxd6 {Black recaptures the pawn.}
        9. O-O {Castle. Next come d4, Na3 or Re1 with an easy, active position.}`,
    },
    {
      name: '2...Nf6 3.e5 Nd5 4.Nf3 e6 (9.Qe2)',
      pgn: `1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3
        e6 {A solid French-style set-up.}
        5. d4 {Builds the centre now that Black has shut in the c8 bishop.}
        cxd4 6. cxd4 {Recapture with the pawn and keep the strong pawn on e5.}
        d6 {Black attacks your e5 pawn.}
        7. Bc4 {Develops and hits the d5 knight. Your e5 pawn is indirectly protected for now.}
        Nc6 {Black develops and adds a third attacker to e5.}
        8. O-O {Castle. If ...dxe5 dxe5, the queens may come off but your pieces stay more active.}
        Be7 {Black prepares to castle.}
        9. Qe2 {The queen protects e5 and supports the bishop on c4, and the rook can come to d1 next.}`,
    },
    {
      name: '2...e6: French Tarrasch transposition (10.Nb3)',
      pgn: `1. e4 c5 2. c3
        e6 {A solid reply. Black plans ...d5 with French-style play.}
        3. d4 {Takes the centre. Now ...d5 leads to a French-type structure.}
        d5 {Black attacks e4.}
        4. exd5 {Exchange to reach an open position where your development counts.}
        exd5 {Black recaptures with the pawn. Now Black may end up with an isolated d-pawn.}
        5. Nf3 {Develops and keeps an eye on d4 and e5.}
        Nc6 6. Bb5 {Pins the c6 knight, which defends d4 and the c5 pawn.}
        Bd6 {Develops and defends c5 indirectly.}
        7. dxc5 {Take. Black's d5 pawn becomes isolated after the recapture.}
        Bxc5 8. O-O {Castle. Your plan is to blockade d5 by putting pieces on d4.}
        Nge7 9. Nbd2 {The knight heads for b3, where it attacks the c5 bishop and controls d4.}
        O-O 10. Nb3 {Hits the bishop and covers d4, the square right in front of the isolated pawn.}`,
    },
    {
      name: '2...d6 3.d4 Nf6 4.Bd3',
      pgn: `1. e4 c5 2. c3
        d6 {Black prepares ...Nf6 without allowing e5 to gain a tempo on the knight.}
        3. d4 {Builds the centre you prepared with c3.}
        Nf6 {Develops and attacks e4.}
        4. Bd3 {Protects e4 calmly. You avoid the sharp gambit 4.dxc5 Nc6 and keep a big centre with more space.}
        g6 {Black fianchettoes the bishop (develops it on the long diagonal through g7).}
        5. Nf3 {Develops and protects d4.}
        Bg7 6. O-O {King safety first.}
        O-O 7. h3 {Takes g4 away from Black's bishop, so your f3 knight cannot be pinned. Next Re1 and Nbd2 complete a solid set-up.}`,
    },
    {
      name: '2...g6 3.d4 cxd4 4.cxd4 d5 (5.Bb5+)',
      pgn: `1. e4 c5 2. c3
        g6 {Black wants a fianchetto, aiming at the centre from g7.}
        3. d4 {Grab the centre while Black's bishop is not yet on g7.}
        cxd4 4. cxd4 {Recapture with the pawn. You have the ideal centre with pawns on d4 and e4.}
        d5 {Black strikes at e4 straight away.}
        5. Bb5+ {A useful check: it disturbs Black's development before you choose how to answer the attack on e4.}
        Bd7 {Black blocks the check and offers to exchange bishops.}
        6. Bxd7+ {Exchange the bishops. Black's light-squared bishop could have become a good piece, and Black must recapture.}
        Nxd7 {Black recaptures with the knight.}
        7. e5 {Gain space and keep the long diagonal of Black's future g7 bishop blocked by your pawn chain d4-e5.}
        e6 {Black supports d5 and prepares ...Ne7.}
        8. Nf3 {Develops and protects e5.}
        Ne7 9. O-O {Castle. Keep e5 well protected (Nc3, Re1) and Black's g7 bishop will hit a wall.}`,
    },
    {
      name: '2...Nc6 3.d4 cxd4 4.cxd4 d5 (Central Exchange)',
      pgn: `1. e4 c5 2. c3
        Nc6 {Black develops and waits to see how you set up.}
        3. d4 {Take the centre as planned.}
        cxd4 4. cxd4 {Recapture with the pawn and keep pawns on d4 and e4.}
        d5 {Black attacks e4.}
        5. exd5 {Take. After ...Qxd5 you reach a Barmen Defence structure.}
        Qxd5 6. Nf3 {Develops and protects d4, which the queen and the c6 knight attack.}
        Bg4 {Black pins the knight and adds pressure on d4.}
        7. Be2 {Breaks the pin and prepares to castle.}
        e6 8. Nc3 {Develops with tempo by hitting the queen. You have an isolated d-pawn but quick development.}`,
    },
    {
      name: '2...e5 3.Nf3 Nc6 4.Bc4',
      pgn: `1. e4 c5 2. c3
        e5 {Black makes your d4 advance hard to achieve, but leaves a hole on d5.}
        3. Nf3 {Develops and attacks e5.}
        Nc6 {Defends e5.}
        4. Bc4 {Puts the bishop on its best diagonal, aiming at f7 and the weak d5 square.}
        Nf6 {Develops and attacks e4.}
        5. d3 {Protects e4. You play a calm Italian-style game: castle, Re1, Nbd2-f1, and later d4 when it is ready.}`,
    },
  ],
}
