import type { OpeningSource } from '../types'

export const italian: OpeningSource = {
  id: 'italian',
  name: 'Italian Game',
  eco: 'C50–C59',
  side: 'white',
  summary:
    'A classical 1.e4 e5 opening where White\'s bishop goes to c4 to aim at f7. The modern approach is the slow "Giuoco Pianissimo" with c3 and d3, building up before breaking in the centre.',
  ideas: [
    'Bishop to c4 targets f7, the weakest point in Black\'s camp.',
    'c3 and d3 build a solid centre, then d4 later.',
    'Manoeuvre the queen\'s knight via d2-f1-g3 toward the kingside.',
  ],
  lines: [
    {
      name: 'Giuoco Pianissimo: main line',
      pgn: `1. e4 {Claims the centre.}
        e5 2. Nf3 {Attacks e5.}
        Nc6 3. Bc4 {The Italian Game. The bishop aims at f7.}
        Bc5 {The Giuoco Piano: Black copies and aims at f2.}
        4. c3 {Prepares d4 and gives the bishop a retreat on b3 or c2 later.}
        Nf6 5. d3 {The Pianissimo. White keeps e4 protected and plays slowly.}
        d6 6. O-O a6 {Gives the bishop a retreat on a7 so it is not traded by ...Na5.}
        7. a4 {Gains queenside space and gives the c4 bishop the a2 square.}
        Ba7 8. Re1 O-O 9. h3 {Stops ...Bg4 and ...Ng4.}
        h6 10. Nbd2 {The knight starts its trip to f1 and g3.}
        Re8 {Both sides have finished development. White plans Nf1-g3 and d4 or b4.}`,
    },
    {
      name: 'Giuoco Piano: 6...d5 break',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3
        O-O 6. O-O d5 {Black breaks in the centre straight away.}
        7. exd5 {Take, opening the e-file for the rook.}
        Nxd5 8. Re1 {Puts pressure on e5.}
        Bg4 {Pins the f3 knight to protect e5 indirectly.}
        9. h3 Bh5 10. Nbd2 {Prepares Ne4 or Nf1 and keeps everything protected.}`,
    },
    {
      name: 'Two Knights: 4.d3 main line',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Nf6 {The Two Knights Defence, attacking e4.}
        4. d3 {Defends e4 calmly and avoids sharp tactics.}
        Be7 5. O-O O-O 6. Re1 d6 7. c3 {Prepares d4 and Bc2.}
        Na5 {Black wants to trade the strong c4 bishop.}
        8. Bb5 {Keep the bishop. It will drop back to a4 and c2.}
        a6 9. Ba4 b5 10. Bc2 c5 {A Ruy Lopez-type position where White's bishop stays on the b1-h7 diagonal.}`,
    },
    {
      name: 'Two Knights: 4...Bc5',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3
        Bc5 {Transposes to the Giuoco Piano.}
        5. c3 d6 6. O-O O-O 7. Re1 a6 8. a4 {Space on the queenside and the a2 retreat for the bishop.}
        Ba7 9. h3 {Same plan as the main line: no ...Bg4 or ...Ng4 ideas.}`,
    },
    {
      name: 'Hungarian Defence (3...Be7)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Be7 {The Hungarian: a passive but solid choice.}
        4. d4 {Against a passive setup, open the centre at once.}
        exd4 5. Nxd4 d6 6. O-O Nf6 7. Nc3 O-O 8. h3 {White has more space and a freer game.}`,
    },
    {
      name: 'Blackburne Shilling Trap (3...Nd4)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        Nd4 {A trap. If 4.Nxe5? Qg5! and Black wins material after 5.Nxf7 Qxg2.}
        4. Nxd4 {The simple refutation: take the knight.}
        exd4 5. O-O Bc5 {Natural, but it loses material.}
        6. Bxf7+ {A tactic to remember: after 6...Kxf7 7.Qh5+ the queen picks up the c5 bishop.}
        Kf8 7. d3 Nf6 8. Bb3 d6 9. Qf3 {White is a pawn up and Black's king cannot castle.}`,
    },
    {
      name: "Giuoco Piano: 4...Qe7",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3
        Qe7 {The queen guards e5, so d4 is less effective.}
        5. d3 {Stick to the slow plan.}
        d6 6. O-O Nf6 7. Nbd2 a6 8. a4 Ba7 9. Re1 {The usual set-up. Nf1-g3 comes next.}`,
    },
    {
      name: "Paris Defence (3...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4
        d6 {Solid but a little passive.}
        4. d4 {Against a passive setup, open the centre.}
        exd4 5. Nxd4 Nf6 6. Nc3 Be7 7. O-O O-O 8. h3 {The same structure as the Hungarian Defence. White is freer.}`,
    },
    {
      name: "Two Knights: 4...h6 with ...g6",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3
        h6 {Black prepares a kingside fianchetto without allowing Ng5 or Bg5.}
        5. O-O d6 6. c3 g6 7. Re1 Bg7 8. d4 {With Re1 and c3 in place, d4 is the natural break.}`,
    },
    {
      name: "Two Knights: 6...d5 break",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Be7 5. O-O O-O 6. Re1
        d5 {Black frees the position at once.}
        7. exd5 Nxd5 8. Nbd2 {Prepares Ne4 or Nf1 while keeping e5 under pressure.}
        Bg4 9. h3 Bh5 10. Ne4 {The knight sits on e4, eyeing c5 and g5.}`,
    },
    {
      name: "Giuoco Pianissimo: 9...Ne7",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. a4 Ba7 8. Re1 O-O 9. h3
        Ne7 {The knight heads for g6.}
        10. d4 {With the knight gone from c6, d4 is strong.}
        Ng6 11. Nbd2 {White keeps the centre and heads for f1 and g3.}`,
    },
  ],
}
