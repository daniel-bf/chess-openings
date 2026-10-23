# Chess Opening Trainer

A free, client-side trainer for 20 popular chess openings: 185 lines with move-by-move explanations.

## What it does

- **Learn**: each line opens with its plan and three key points. Step through the moves with explanations (arrow keys work), then play it yourself. A wrong move is rejected, and after two misses an arrow shows the right one.
- **Pace**: the opponent pauses before each reply, longer when the note to read is longer. A thin bar shows the time left. Choose Slow (the default), Normal or Fast. Every note stays in a running log, and opponent moves that attack one of your pieces are called out.
- **Review**: lines you have learned come back on a spaced-repetition schedule (1, 3, 7, 16, 35 days). A mistake resets a line to the start of the schedule.
- **Drill**: quiz yourself on every line of one opening in random order.
- **Play mode**: choose a set of openings. The computer plays random branches from them and you must answer with your prepared moves. When the line ends you can keep playing against Stockfish at one of 8 levels, which you can change during the game. A bar above the board shows Stockfish's evaluation, and "Show best moves" draws the engine's top two moves with their scores.

Progress is stored in the browser (localStorage). There is no server or account.

- **Sound**: the speaker button in the top bar opens the Sounds page, where you can listen to seven sound sets and pick one, or turn sound off. Six are free sets from Lichess and PyChess, credited in `public/sound/README.md`, and one is generated in the browser. Lichess's classic "standard" sounds and chess.com's sounds are not freely licensed, so they are not included.

## Openings

| Opening | You play | Lines |
|---|---|---|
| Sicilian Defense (Najdorf) | Black | 10 |
| French Defense | Black | 10 |
| Caro-Kann Defense | Black | 10 |
| King's Indian Defense | Black | 10 |
| Slav Defense | Black | 11 |
| Scandinavian Defense | Black | 8 |
| Pirc Defense | Black | 8 |
| Petrov's Defense | Black | 8 |
| Nimzo-Indian Defense (+ Queen's Indian) | Black | 8 |
| Grünfeld Defense | Black | 8 |
| Dutch Defense (Leningrad) | Black | 8 |
| Ruy Lopez | White | 10 |
| Italian Game | White | 11 |
| Queen's Gambit | White | 11 |
| English Opening | White | 11 |
| London System | White | 11 |
| Scotch Game | White | 8 |
| Vienna Game | White | 8 |
| King's Gambit | White | 8 |
| Catalan Opening | White | 8 |

## Stack

Vite + React + TypeScript, [chess.js](https://github.com/jhlywa/chess.js) for the rules, [react-chessboard](https://github.com/Clariity/react-chessboard) for the board, and the lite single-threaded [Stockfish.js](https://github.com/nmrugg/stockfish.js) build (in `public/engine`) for play after the opening. Everything is static, so it can be hosted for free (GitHub Pages, Netlify, Cloudflare Pages).

## Run it

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/
npm run validate   # checks every line is legal and has no conflicting moves
npx tsx scripts/engine-check.ts   # flags prepared moves Stockfish thinks are mistakes
```

## Plans

Each line's plan and key points live in `src/data/plans/`, keyed by line id (`opening:index`). `npx tsx scripts/dump-plans.ts` prints every line next to its plan and reports any line without one.

## Adding or editing lines

Each opening is a file in `src/data/openings/`. A line is PGN movetext; a `{comment}` after a move is its explanation:

```ts
{
  name: 'Advance: 6.Be2',
  pgn: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6
    6. Be2 {Solid. White simply defends d4 and castles.}
    cxd4 7. cxd4 Nh6 {The knight heads for f5 to add a fourth attacker on d4.}`,
}
```

Moves shared with an earlier line only need their comment once. Moves without a comment get a short generated description. Run `npm run validate` after editing: it fails if a move is illegal or if your side has two different moves in the same position.

## Deploy to your own server

On the server (any Linux box; Docker is installed for you if missing):

```sh
git clone https://github.com/daniel-bf/chess-openings.git
cd chess-openings
cp .env.example .env   # set DOMAIN, or leave it empty to use the server's IP
./deploy.sh
```

To update later: `git pull && ./deploy.sh`.
