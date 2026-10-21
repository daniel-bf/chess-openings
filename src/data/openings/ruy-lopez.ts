import type { OpeningSource } from '../types'

export const ruyLopez: OpeningSource = {
  id: 'ruy-lopez',
  name: 'Ruy Lopez',
  eco: 'C60–C99',
  side: 'white',
  summary:
    "The Ruy Lopez, or Spanish Game (1.e4 e5 2.Nf3 Nc6 3.Bb5), is one of the oldest and most respected openings. The bishop attacks the c6 knight, the piece that defends e5, so Black's centre is under long-term pressure. Play is usually slow and strategic: you castle, play Re1, c3 and h3, break with d4, and keep your light-squared bishop on the a4-b3-c2 route, aimed at Black's king.",
  ideas: [
    'Bb5 does not win e5 at once, but it keeps pressure on Black\'s centre for the whole game.',
    'Build up before you strike: Re1, c3 and h3 all prepare the d4 break, so you can recapture with a pawn and keep a big centre.',
    'Keep your light-squared bishop (it retreats a4-b3-c2 rather than being traded), and bring the queen\'s knight round via d2-f1-g3 toward Black\'s king.',
  ],
  lines: [
    {
      name: 'Closed: Chigorin main line',
      pgn: `1. e4 {Takes a central square and opens lines for the queen and the f1 bishop.}
        e5 {Black claims an equal share of the centre.}
        2. Nf3 {Develops with a threat: the e5 pawn is attacked.}
        Nc6 {Defends e5.}
        3. Bb5 {The Ruy Lopez. The bishop attacks the c6 knight, the main defender of e5.}
        a6 {The Morphy Defence, Black's most popular reply: the bishop must decide straight away.}
        4. Ba4 {Keep the bishop and the pressure. Taking on c6 is the Exchange Variation, a different plan.}
        Nf6 {Develops and attacks e4.}
        5. O-O {Castle and let e4 go for now: after 5...Nxe4, 6.d4 or 6.Re1 wins the pawn back with good play.}
        Be7 {The Closed Ruy Lopez: Black develops calmly instead of taking on e4.}
        6. Re1 {Defends e4. Now Bxc6 followed by Nxe5 is a real threat, because e4 no longer hangs afterwards.}
        b5 {Black ends that threat by chasing your bishop away from the c6 knight.}
        7. Bb3 {The bishop lands on a fine diagonal, aimed at f7.}
        d6 {Supports e5 with a pawn and opens the c8 bishop.}
        8. c3 {Prepares d4 and gives the bishop a future home on c2.}
        O-O 9. h3 {A key "prophylactic" move (one that stops the opponent's idea): it prevents ...Bg4, which would pin the f3 knight and weaken d4.}
        Na5 {The Chigorin Variation: the knight chases your b3 bishop.}
        10. Bc2 {The bishop drops back to c2, where it still defends e4 and points at Black's king.}
        c5 {Black grabs queenside space and adds pressure on d4.}
        11. d4 {The thematic central break, supported by c3 and the f3 knight.}
        Qc7 {Black holds e5 firmly and gets ready to bring the a5 knight back via c6.}
        12. Nbd2 {The famous knight trip begins: d2, then f1, then g3 or e3, while the centre stays tense.}`,
    },
    {
      name: 'Marshall Attack',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3
        O-O {Black castles first and keeps ...d5 in reserve.}
        8. c3 {Prepares d4 and gives the bishop the c2 square.}
        d5 {The Marshall Attack: Black sacrifices the e5 pawn to open lines and attack your king.}
        9. exd5 {Accept the gambit. This is the main test: Black gets fast development, but you get a pawn to keep.}
        Nxd5 10. Nxe5 {Take the second pawn as well; this is the main line.}
        Nxe5 11. Rxe5 {The rook takes back and you are a pawn up.}
        c6 {Supports the d5 knight and prepares ...Bd6, hitting the rook and aiming at h2.}
        12. d4 {Opens the c1 bishop for defence and keeps Black's pieces off e5.}
        Bd6 {Attacks the rook and lines up on h2.}
        13. Re1 {The rook goes home to guard the back rank and the e-file.}
        Qh4 {Threatens ...Qxh2+ with a mating attack.}
        14. g3 {The standard defence: the pawn blocks the d6 bishop's diagonal, so h2 is safe.}
        Qh3 {The queen sits right next to your king, eyeing g2 and the light squares.}
        15. Be3 {Develops and covers the dark squares. Next come Qd3, Nd2 and Re4 to beat off the attack and keep the extra pawn.}`,
    },
    {
      name: 'Berlin Defence',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        Nf6 {The Berlin Defence: Black skips ...a6 and attacks e4 straight away.}
        4. O-O {Castle and offer e4: you win it back by opening the centre.}
        Nxe4 5. d4 {Hits e5 and opens lines toward Black's king, which is still in the centre.}
        Nd6 {The knight retreats and attacks your b5 bishop.}
        6. Bxc6 {Trade now rather than lose time retreating.}
        dxc6 7. dxe5 {Wins the pawn back and kicks the d6 knight.}
        Nf5 8. Qxd8+ {Trade queens. This is the famous Berlin endgame.}
        Kxd8 {Black has the two bishops but doubled c-pawns, and the king can no longer castle.}
        9. Nc3 {Develop quickly. Your long-term trump is the four-against-three pawn majority on the kingside; Black's doubled c-pawns make his queenside majority hard to use.}
        Ke8 {The king walks back toward the kingside.}
        10. h3 {Keeps Black's pieces off g4 and prepares g4 to chase the f5 knight.}
        h5 {Stops g4 for good.}
        11. Bf4 {Develops and protects the e5 pawn. Next come Rad1 and Rfe1 to take the open d-file.}`,
    },
    {
      name: 'Open Variation',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O
        Nxe4 {The Open Ruy Lopez: Black takes the pawn and goes for active piece play.}
        6. d4 {Open lines at once, while Black's king is still in the centre.}
        b5 7. Bb3 {Retreat to the a2-g8 diagonal, where the bishop will press on d5.}
        d5 {Black supports the e4 knight with a pawn.}
        8. dxe5 {Win the pawn back. The pawn on e5 cramps Black's kingside.}
        Be6 {Protects d5, so the e4 knight stays firmly placed.}
        9. c3 {Gives your bishop a retreat square on c2 and covers d4 and b4.}
        Bc5 {Black's most active set-up, with the bishop aimed at f2.}
        10. Nbd2 {Challenges the strong e4 knight.}
        O-O 11. Bc2 {A second attacker on e4. Black must decide: trade it, retreat it, or sacrifice with 11...Nxf2 (the Dilworth Attack).}`,
    },
    {
      name: 'Classical Defence (3...Bc5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        Bc5 {The Classical Defence: the bishop takes its most active diagonal, aimed at f2.}
        4. O-O {Castle first, so your king is safe from the c5 bishop.}
        Nf6 5. c3 {Prepares d4, which will hit the c5 bishop and take the centre.}
        O-O 6. d4 {Strike: both e5 and the c5 bishop are attacked.}
        Bb6 {The bishop retreats but keeps pressure on d4.}
        7. Re1 {Defends e4, which the f6 knight attacks now that the centre is opening.}
        d6 8. h3 {Stops ...Bg4, which would pin the f3 knight, the main defender of d4. You keep a broad centre.}`,
    },
    {
      name: 'Schliemann Gambit (3...f5)',
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        f5 {The Schliemann (or Jaenisch) Gambit: Black hits e4 with the f-pawn to open the f-file.}
        4. d3 {A calm and safe answer. You support e4 and avoid the sharp main lines.}
        fxe4 5. dxe4 {Take back. Your centre is sound, while Black's king has lost the f-pawn that shielded it.}
        Nf6 6. O-O {Castle and get your rook ready.}
        d6 7. Nc3 {Develops and defends e4, which the f6 knight attacks.}
        Be7 8. Bc4 {The bishop switches to the open a2-g8 diagonal. It covers g8, so Black cannot castle kingside for now, and it eyes the weak e6 square.}`,
    },
    {
      name: "Closed: Breyer Variation (9...Nb8)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3
        Nb8 {The Breyer Variation: the knight goes back to re-route via d7, where it supports e5 and frees the c-pawn and the b7 bishop.}
        10. d4 {Take the centre while the knight is on b8 and not pressing on d4.}
        Nbd7 11. Nbd2 {The knight starts its classic trip to f1 and g3.}
        Bb7 12. Bc2 {The bishop adds a defender to e4, which Black's b7 bishop and f6 knight are eyeing.}
        Re8 13. Nf1 {The journey continues. e4 is safely guarded by the bishop and the rook.}
        Bf8 14. Ng3 {The knight is now on the kingside, eyeing f5 and h5.}
        g6 {Black takes f5 away from the knight and prepares ...Bg7.}
        15. a4 {Open a second front: a4 attacks b5 and can open the a-file for your rook.}`,
    },
    {
      name: "Closed: Zaitsev Variation (9...Bb7)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3
        Bb7 {The Zaitsev Variation: the bishop joins the pressure on e4.}
        10. d4 {Take the centre.}
        Re8 {More pressure on e4.}
        11. Nbd2 {Defends e4 a second time and prepares Nf1.}
        Bf8 12. a4 {The best way to meet this set-up: you attack b5 and get play on the queenside.}
        h6 {Keeps your knight and bishop off g5.}
        13. Bc2 {The bishop drops back to defend e4 and aim at Black's kingside.}
        exd4 14. cxd4 {Take back toward the centre: you now have the classic pawn pair on d4 and e4.}
        Nb4 {The knight jumps in and attacks your c2 bishop.}
        15. Bb1 {Keep the bishop. On b1 it still guards e4. Next comes Ra3, swinging the rook along the third rank.}`,
    },
    {
      name: "Steinitz Deferred (4...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4
        d6 {The Steinitz Deferred: Black supports e5 with a pawn before developing the kingside.}
        5. c3 {Prepares d4 and gives the bishop the c2 square, so it cannot be trapped by ...b5 and ...c5-c4 later.}
        Bd7 {Breaks the pin on the c6 knight.}
        6. d4 {Build a big centre.}
        Nf6 7. O-O {Castle and get ready for Re1.}
        Be7 8. Re1 {Defends e4.}
        O-O 9. Nbd2 {Develops. The knight can go to f1 and g3 as in the Closed Ruy Lopez, and you keep more space.}`,
    },
    {
      name: "Old Steinitz Defence (3...d6)",
      pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5
        d6 {The Old Steinitz Defence: very solid, but it shuts in the f8 bishop and gives up space.}
        4. d4 {Hit the centre at once. With the d-pawn gone from d7, the c6 knight is pinned to Black's king and cannot help much.}
        Bd7 {Breaks the pin.}
        5. Nc3 {Develops and defends e4.}
        Nf6 6. O-O {Castle.}
        Be7 7. Re1 {Defends e4. This also sets the Tarrasch Trap: if 7...O-O?, then 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 Raxd8 11.Nxe5 wins material.}
        exd4 {The correct move: Black gives up the centre.}
        8. Nxd4 {Take back with a central knight. You have more space with e4 against d6.}
        O-O
        9. Bf1 {Avoid trades: the side with more space wants to keep pieces on. The bishop guards your king and Black stays cramped.}`,
    },
  ],
}
