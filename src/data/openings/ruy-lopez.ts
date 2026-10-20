import type { OpeningSource } from '../types'

export const ruyLopez: OpeningSource = {
  id: 'ruy-lopez',
  name: 'Ruy Lopez',
  eco: 'C60–C99',
  side: 'white',
  summary:
    'The "Spanish Game", one of the oldest and richest openings. White puts pressure on the e5 pawn by attacking its defender, the c6 knight, and aims for a slow build-up with c3 and d4.',
  ideas: [
    'Pressure e5 indirectly by hitting the c6 knight.',
    'Castle, play Re1 and c3, then break with d4.',
    'Keep the light-squared bishop (it retreats to c2) aimed at Black\'s king.',
  ],
  lines: [
    {
      name: 'Closed: Chigorin main line',
      pgn: `1. e4 {Claims the centre and frees the bishop and queen.}
        e5 2. Nf3 {Attacks e5 at once.}
        Nc6 3. Bb5 {The Ruy Lopez. The bishop attacks the defender of e5.}
        a6 {The Morphy Defence: Black asks the bishop what it intends.}
        4. Ba4 {Keep the pin. Bxc6 is the Exchange Variation, a different plan.}
        Nf6 5. O-O {e4 hangs only in appearance: if ...Nxe4, Re1 or d4 wins it back.}
        Be7 6. Re1 {Now e4 is really defended, and Bxc6 followed by Nxe5 is a threat.}
        b5 7. Bb3 {The bishop lands on the a2-g8 diagonal, eyeing f7.}
        d6 8. c3 {Prepares d4 and gives the bishop a retreat square on c2.}
        O-O 9. h3 {Stops ...Bg4 pinning the f3 knight, so d4 can come safely.}
        Na5 {Chases the bishop away from its best diagonal.}
        10. Bc2 c5 11. d4 {The thematic central break, supported by c3 and the f3 knight.}
        Qc7 {Black holds e5 firmly. A long manoeuvring game lies ahead, often with Nbd2-f1-g3.}`,
    },
    {
      name: 'Marshall Attack',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3
        O-O 8. c3 d5 {The Marshall Attack: Black gambits a pawn for a fierce kingside attack.}
        9. exd5 {Accept the gambit. Declining is possible, but taking is the test.}
        Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 {Supports the d5 knight and prepares ...Bd6.}
        12. d4 {Opens the c1 bishop and controls e5.}
        Bd6 13. Re1 {Retreat the rook before ...Bxe5 or ...Qh4 ideas hit it.}
        Qh4 14. g3 {Forced: blocks the mate threat on h2.}
        Qh3 {The queen sits next to the king. White must defend with Be3, Qd3 and Re4.}`,
    },
    {
      name: 'Berlin Defence',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        Nf6 {The Berlin: Black counterattacks e4 immediately.}
        4. O-O {Ignore the threat. e4 can be recovered.}
        Nxe4 5. d4 {Open the centre while Black's king is still in the middle.}
        Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 {The Berlin endgame. Black has lost castling rights but has the bishop pair.}
        9. Nc3 {Develop quickly. White's plan is the kingside pawn majority.}
        Ke8 10. h3 {Stops ...Ng4 and ...Bg4, and prepares g4 to kick the f5 knight.}
        h5 {Stops g4. A strategic endgame lies ahead where White pushes the kingside majority.}`,
    },
    {
      name: 'Open Variation',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O
        Nxe4 {The Open Ruy Lopez: Black takes the pawn and plays actively.}
        6. d4 {Open lines at once. White targets the knight on e4 and the e5 pawn.}
        b5 7. Bb3 d5 {Black gives back material to keep the knight on e4.}
        8. dxe5 Be6 9. c3 {Gives the bishop a retreat on c2 and protects d4.}
        Bc5 10. Nbd2 {Challenges the e4 knight.}
        O-O 11. Bc2 {The bishop joins the fight against e4. White has the e5 pawn wedge.}`,
    },
    {
      name: 'Classical Defence (3...Bc5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        Bc5 {The Classical: the bishop takes its most active diagonal.}
        4. O-O Nf6 5. c3 {Preparing d4 to gain the centre with tempo on the bishop.}
        O-O 6. d4 Bb6 7. Re1 {Protects e4 and adds pressure on the e-file.}
        d6 8. h3 {Takes g4 away from the bishop. White keeps a broad centre.}`,
    },
    {
      name: 'Schliemann Gambit (3...f5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        f5 {The Schliemann: a sharp gambit striking at e4.}
        4. d3 {A calm and safe answer. White keeps e4 and develops.}
        fxe4 5. dxe4 Nf6 6. O-O d6 7. Nc3 Be7
        8. Bc4 {The bishop now eyes g8 and stops Black from castling. Black's weakened kingside will be a lasting problem.}`,
    },
    {
      name: "Closed: Breyer Variation (9...Nb8)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3
        Nb8 {The Breyer: the knight re-routes to d7 to support e5 and free the c-pawn.}
        10. d4 {Take the centre while the knight is away.}
        Nbd7 11. Nbd2 {The knight starts its classic trip to f1 and g3.}
        Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6 {Both sides are set up. White can play a4 or b3 and Bg5 next.}`,
    },
    {
      name: "Closed: Zaitsev Variation (9...Bb7)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3
        Bb7 {The Zaitsev: Black piles up on e4.}
        10. d4 Re8 11. Nbd2 Bf8 12. a4 {Pressure on b5 is White's main weapon against this setup.}
        h6 13. Bc2 exd4 14. cxd4 Nb4 15. Bb1 {Keep the bishop. White has a big centre; Black has active pieces.}`,
    },
    {
      name: "Steinitz Deferred (4...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4
        d6 {The Modern Steinitz: Black keeps e5 firmly protected.}
        5. c3 {Prepares d4 and keeps the bishop safe from ...b5 and ...Nxa4 later.}
        Bd7 6. d4 Nf6 7. O-O Be7 8. Re1 O-O 9. Nbd2 {White has more space and will play Nf1-g3.}`,
    },
    {
      name: "Old Steinitz Defence (3...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        d6 {The old Steinitz: solid but passive.}
        4. d4 {Hit the centre at once.}
        Bd7 5. Nc3 Nf6 6. O-O Be7 7. Re1 {Protect e4 so that d4xe5 becomes a threat.}
        exd4 8. Nxd4 O-O {Black has given up the centre. White has more space and freer pieces.}`,
    },
  ],
}
