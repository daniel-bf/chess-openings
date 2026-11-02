import { useEffect, useMemo, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import { lineById, openingById } from '../data/openings'
import type { Side } from '../data/types'
import { modelGames, planQuestions, playoutPlans, structures, type ModelGame, type PlanGoal } from '../data/middlegame'
import { pawns } from '../lib/structure'
import { parseMovetext } from '../lib/repertoire'
import { getEngine, type EngineLine } from '../lib/engine'
import { Board, ARROW_BEST, ARROW_HINT, ARROW_NEXT, type BoardArrow, type MoveInput } from '../components/Board'
import { EvalBar } from '../components/EvalBar'
import { LevelSelect } from './PlayPage'
import { go } from '../router'

const TABS = [
  { id: 'structures', label: 'Structures' },
  { id: 'quiz', label: 'Plan quiz' },
  { id: 'playout', label: 'Play the plan' },
  { id: 'games', label: 'Model games' },
] as const
type Tab = (typeof TABS)[number]['id']

const MINE = 'rgba(30, 140, 70, 0.32)'
const THEIRS = 'rgba(232, 160, 32, 0.32)'
const WRONG = 'rgba(220, 50, 50, 0.6)'

function sideOfLine(lineId: string): Side {
  return openingById.get(lineById.get(lineId)!.openingId)!.side
}

function endFen(lineId: string): string {
  const line = lineById.get(lineId)!
  return line.moves[line.moves.length - 1].fenAfter
}

function lineTitle(lineId: string): string {
  const line = lineById.get(lineId)!
  return `${openingById.get(line.openingId)!.name}: ${line.name}`
}

function pawnMarks(fen: string, side: Side): Record<string, string> {
  const p = pawns(fen)
  const marks: Record<string, string> = {}
  for (const sq of p[side === 'white' ? 'w' : 'b']) marks[sq] = MINE
  for (const sq of p[side === 'white' ? 'b' : 'w']) marks[sq] = THEIRS
  return marks
}

export function MiddlegamePage({ tab }: { tab?: string }) {
  const current: Tab = TABS.some((t) => t.id === tab) ? (tab as Tab) : 'structures'
  return (
    <div className="page structure middlegame">
      <header className="sx-head">
        <div>
          <h1>Middlegame</h1>
          <p className="muted small">
            Prototype: four ways to train what comes after the opening, for the French, the King's Indian and the London.
          </p>
        </div>
        <div className="segmented" role="tablist">
          {TABS.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={t.id === current} className={t.id === current ? 'on' : ''} onClick={() => go(`/middlegame/${t.id}`)}>
              {t.label}
            </button>
          ))}
        </div>
      </header>
      {current === 'structures' && <Structures />}
      {current === 'quiz' && <Quiz />}
      {current === 'playout' && <Playout />}
      {current === 'games' && <ModelGames />}
    </div>
  )
}

/* ---------- A: structure lessons ---------- */

function Structures() {
  const [id, setId] = useState(structures[0].id)
  const s = structures.find((x) => x.id === id)!
  const side = sideOfLine(s.exampleLineId)
  const fen = endFen(s.exampleLineId)
  return (
    <div className="sx-body">
      <div className="sx-board">
        <Board fen={fen} orientation={side} movable={null} marks={pawnMarks(fen, side)} arrows={s.arrows.map((a) => ({ ...a, color: ARROW_BEST }))} />
        <p className="muted small">
          Position after {lineTitle(s.exampleLineId)}. Arrows show your key breaks and routes.
        </p>
      </div>
      <div className="sx-side">
        <div className="sx-lines" role="group" aria-label="Structure">
          {structures.map((x) => (
            <button key={x.id} type="button" className={x.id === id ? 'on' : ''} onClick={() => setId(x.id)}>
              {x.name.split(' (')[0]}
              <span>You play {sideOfLine(x.exampleLineId)}</span>
            </button>
          ))}
        </div>
        <div className="sx-explain">
          <h2 className="mg-title">{s.name}</h2>
          <p>{s.summary}</p>
          <h3>Your plans</h3>
          <ul>
            {s.yourPlans.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h3>Your opponent's plans</h3>
          <ul>
            {s.theirPlans.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h3>Trades</h3>
          <p>{s.trades}</p>
          <h3>Lines that reach it</h3>
          <div className="mg-links">
            {s.lineIds.map((l) => (
              <button key={l} type="button" className="link" onClick={() => go(`/learn/${l}`)}>
                {lineById.get(l)!.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- B: plan quiz ---------- */

function Quiz() {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [hover, setHover] = useState<number | null>(null)
  const [score, setScore] = useState({ right: 0, done: 0 })
  const q = planQuestions[index]
  const side = sideOfLine(q.lineId)
  const fen = endFen(q.lineId)
  const shown = picked ?? hover
  const answered = picked !== null
  const correctIndex = q.options.findIndex((o) => o.correct)
  const finished = score.done === planQuestions.length

  function pick(i: number) {
    if (answered) return
    setPicked(i)
    setScore((s) => ({ right: s.right + (q.options[i].correct ? 1 : 0), done: s.done + 1 }))
  }

  function next() {
    setIndex((i) => (i + 1) % planQuestions.length)
    setPicked(null)
    setHover(null)
    if (finished) setScore({ right: 0, done: 0 })
  }

  const arrows: BoardArrow[] =
    shown === null
      ? []
      : [
          ...q.options[shown].arrows.map((a) => ({ ...a, color: answered ? (q.options[shown].correct ? ARROW_BEST : 'rgba(220, 50, 50, 0.75)') : ARROW_HINT })),
          ...(answered && !q.options[shown].correct ? q.options[correctIndex].arrows.map((a) => ({ ...a, color: ARROW_BEST })) : []),
        ]

  return (
    <div className="session">
      <div className="board-col">
        <Board fen={fen} orientation={side} movable={null} arrows={arrows} marks={pawnMarks(fen, side)} />
      </div>
      <aside className="panel">
        <p className="muted small">
          Question {index + 1} of {planQuestions.length} · Score {score.right}/{score.done}
        </p>
        <p className="small">
          <strong>{lineTitle(q.lineId)}</strong> · you play {side}
        </p>
        <h2 className="mg-title">{q.question}</h2>
        <div className="mg-options">
          {q.options.map((o, i) => (
            <button
              key={i}
              type="button"
              className={`mg-option${answered && o.correct ? ' good' : ''}${picked === i && !o.correct ? ' bad' : ''}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onClick={() => pick(i)}
              disabled={answered && picked !== i && !o.correct}
            >
              {o.text}
            </button>
          ))}
        </div>
        {answered && (
          <div className={`feedback ${q.options[picked].correct ? 'good' : 'bad'}`}>
            <p>{q.options[picked].why}</p>
            {!q.options[picked].correct && (
              <p className="small">
                <strong>Better:</strong> {q.options[correctIndex].text}
              </p>
            )}
          </div>
        )}
        {answered && (
          <div className="row">
            <button type="button" className="primary" onClick={next}>
              {finished ? `Done: ${score.right}/${score.done}. Start again` : 'Next question'}
            </button>
            <button type="button" className="ghost" onClick={() => go(`/learn/${q.lineId}`)}>
              Review this line
            </button>
          </div>
        )}
        <p className="muted small">Hover an answer to see it on the board. Green pawns are yours.</p>
      </aside>
    </div>
  )
}

/* ---------- C: play the plan ---------- */

const PLAYOUT_MOVES = 15
const SKILL_KEY = 'chess-trainer:middlegame-skill:v1'

/** Score in centipawns from one side's point of view, mates clamped. */
function forSide(line: EngineLine, side: Side): number {
  const white = line.mate !== undefined ? Math.sign(line.mate) * 1000 : Math.max(-1000, Math.min(1000, line.cp ?? 0))
  return side === 'white' ? white : -white
}

function goalMet(goal: PlanGoal, fen: string, side: Side): boolean {
  const chess = new Chess(fen)
  return goal.squares.some((sq) => {
    const p = chess.get(sq as never)
    return !!p && p.color === (side === 'white' ? 'w' : 'b') && goal.pieces.includes(p.type)
  })
}

interface Ply {
  san: string
  from: string
  to: string
  fen: string
  mine: boolean
}

function Playout() {
  const [lineId, setLineId] = useState<string | null>(null)
  const [skill, setSkill] = useState(() => {
    try {
      return Number(localStorage.getItem(SKILL_KEY) ?? 6)
    } catch {
      return 6
    }
  })
  function changeSkill(s: number) {
    setSkill(s)
    try {
      localStorage.setItem(SKILL_KEY, String(s))
    } catch {
      // Keep it for this visit only.
    }
  }
  if (lineId) return <PlayoutGame key={lineId} lineId={lineId} skill={skill} onSkill={changeSkill} onBack={() => setLineId(null)} />
  return (
    <div className="narrow">
      <p className="lead">
        Start from the last position of a line and play {PLAYOUT_MOVES} more moves against Stockfish. Your plan is a checklist: each goal ticks off when you
        reach it, and at the end you see whether you kept the evaluation.
      </p>
      <label className="level small">
        Computer level <LevelSelect value={skill} onChange={changeSkill} />
      </label>
      <div className="mg-options">
        {playoutPlans.map((p) => (
          <button key={p.lineId} type="button" className="mg-option" onClick={() => setLineId(p.lineId)}>
            <strong>{lineTitle(p.lineId)}</strong>
            <span className="muted small"> · you play {sideOfLine(p.lineId)}</span>
            <br />
            <span className="small">{p.goals.map((g) => g.label).join(' · ')}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function PlayoutGame({ lineId, skill, onSkill, onBack }: { lineId: string; skill: number; onSkill: (s: number) => void; onBack: () => void }) {
  const side = sideOfLine(lineId)
  const plan = playoutPlans.find((p) => p.lineId === lineId)!
  const start = endFen(lineId)
  const [plies, setPlies] = useState<Ply[]>([])
  const [evals, setEvals] = useState<Record<string, EngineLine>>({})
  const [metAt, setMetAt] = useState<Record<number, number>>({})
  const [thinking, setThinking] = useState(false)
  const busy = useRef(false)

  const fen = plies.length ? plies[plies.length - 1].fen : start
  const chess = useMemo(() => new Chess(fen), [fen])
  const userTurn = (chess.turn() === 'w') === (side === 'white')
  const myMoves = plies.filter((p) => p.mine).length
  const over = chess.isGameOver() || (myMoves >= PLAYOUT_MOVES && userTurn)

  // Evaluate every position once; the engine runs searches one at a time.
  useEffect(() => {
    if (evals[fen]) return
    let live = true
    getEngine()
      .analyse(fen, 1, 400)
      .then((lines) => live && lines[0] && setEvals((e) => ({ ...e, [fen]: lines[0] })))
      .catch(() => {})
    return () => {
      live = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen])

  // The computer replies.
  useEffect(() => {
    if (userTurn || over || busy.current) return
    busy.current = true
    setThinking(true)
    const t = setTimeout(() => {
      getEngine()
        .bestMove(fen, skill, 500)
        .then((uci) => {
          const after = new Chess(fen)
          const mv = after.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
          setPlies((ps) => [...ps, { san: mv.san, from: mv.from, to: mv.to, fen: after.fen(), mine: false }])
        })
        .catch(() => {})
        .finally(() => {
          busy.current = false
          setThinking(false)
        })
    }, 300)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen, userTurn, over])

  function onMove(input: MoveInput): boolean {
    const after = new Chess(fen)
    try {
      const mv = after.move(input)
      const nextFen = after.fen()
      setPlies((ps) => [...ps, { san: mv.san, from: mv.from, to: mv.to, fen: nextFen, mine: true }])
      setMetAt((m) => {
        const copy = { ...m }
        plan.goals.forEach((g, i) => {
          if (copy[i] === undefined && goalMet(g, nextFen, side)) copy[i] = myMoves + 1
        })
        return copy
      })
      return true
    } catch {
      return false
    }
  }

  // Your moves with how much each one cost, once both positions are evaluated.
  const costs = plies
    .map((p, i) => ({ p, before: evals[i === 0 ? start : plies[i - 1].fen], after: evals[p.fen], n: plies.slice(0, i + 1).filter((x) => x.mine).length }))
    .filter((x) => x.p.mine && x.before && x.after)
    .map((x) => ({ san: x.p.san, n: x.n, cost: forSide(x.before!, side) - forSide(x.after!, side) }))
  const worst = [...costs].sort((a, b) => b.cost - a.cost).filter((c) => c.cost >= 50).slice(0, 3)
  const startEval = evals[start]
  const nowEval = evals[fen]
  const goalsMet = Object.keys(metAt).length
  const last = plies[plies.length - 1]

  return (
    <div className="session">
      <div className="board-col">
        <EvalBar line={nowEval ?? null} orientation={side} />
        <Board fen={fen} orientation={side} movable={!over && userTurn && !thinking ? side : null} onMove={onMove} lastMove={last ? { from: last.from, to: last.to } : null} />
      </div>
      <aside className="panel">
        <div className="session-head">
          <button type="button" className="link" onClick={onBack}>
            ← Choose a line
          </button>
          <h1>Play the plan</h1>
          <p className="muted small">
            {lineTitle(lineId)} · you play {side} · move {Math.min(myMoves + (userTurn && !over ? 1 : 0), PLAYOUT_MOVES)} of {PLAYOUT_MOVES}
          </p>
        </div>
        <h3>Your plan</h3>
        <ul className="plain mg-goals">
          {plan.goals.map((g, i) => (
            <li key={g.label} className={metAt[i] !== undefined ? 'met' : ''}>
              {metAt[i] !== undefined ? '✓' : '○'} {g.label}
              {metAt[i] !== undefined && <span className="muted small"> (move {metAt[i]})</span>}
            </li>
          ))}
        </ul>
        <label className="level small">
          Computer level <LevelSelect value={skill} onChange={onSkill} />
        </label>
        <p className="muted small status-line">{over ? 'Play-out finished.' : thinking ? 'Computer is thinking…' : userTurn ? 'Your move.' : ''}</p>
        {over && (
          <div className={`result ${goalsMet === plan.goals.length && (!startEval || !nowEval || forSide(nowEval, side) >= forSide(startEval, side) - 50) ? 'good' : 'bad'}`}>
            <p>
              <strong>
                Goals reached: {goalsMet} of {plan.goals.length}
              </strong>
            </p>
            {startEval && nowEval && (
              <p>
                Evaluation for you: {(forSide(startEval, side) / 100).toFixed(1)} at the start, {(forSide(nowEval, side) / 100).toFixed(1)} now.
              </p>
            )}
            {worst.length > 0 ? (
              <p>Costliest moves: {worst.map((w) => `move ${w.n} ${w.san} (−${(w.cost / 100).toFixed(1)})`).join(', ')}.</p>
            ) : (
              <p>No move of yours lost more than half a pawn.</p>
            )}
          </div>
        )}
        <ol className="movelist">
          {plies.map((p, i) => (
            <li key={i}>
              <button type="button" disabled className={p.mine ? 'book' : ''}>
                {p.san}
              </button>
            </li>
          ))}
        </ol>
        <div className="row">
          <button type="button" className="primary" onClick={() => { setPlies([]); setMetAt({}) }}>
            Start again
          </button>
        </div>
      </aside>
    </div>
  )
}

/* ---------- D: model games ---------- */

interface GamePly {
  san: string
  from: string
  to: string
  fenBefore: string
  fenAfter: string
}

function gamePlies(game: ModelGame): GamePly[] {
  const chess = new Chess()
  return parseMovetext(game.moves).map((t) => {
    const fenBefore = chess.fen()
    const mv = chess.move(t.san)
    return { san: mv.san, from: mv.from, to: mv.to, fenBefore, fenAfter: chess.fen() }
  })
}

function ModelGames() {
  const [id, setId] = useState<string | null>(null)
  const game = modelGames.find((g) => g.id === id)
  if (game) return <GuessGame key={game.id} game={game} onBack={() => setId(null)} />
  return (
    <div className="narrow">
      <p className="lead">
        Play through a master game in your opening and guess each of your side's moves after the opening. Key moves come with a short note. Only one game so far,
        as a sample.
      </p>
      <div className="mg-options">
        {modelGames.map((g) => (
          <button key={g.id} type="button" className="mg-option" onClick={() => setId(g.id)}>
            <strong>
              {g.white} – {g.black}
            </strong>
            <span className="muted small">
              {' '}
              · {g.event} · {g.result}
            </span>
            <br />
            <span className="small">
              {openingById.get(g.openingId)!.name} · you guess {g.side}'s moves
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

type Feedback = { tone: 'good' | 'bad' | 'info'; text: string }

function GuessGame({ game, onBack }: { game: ModelGame; onBack: () => void }) {
  const plies = useMemo(() => gamePlies(game), [game])
  const mineParity = game.side === 'white' ? 0 : 1
  const [ply, setPly] = useState(game.startPly)
  const [right, setRight] = useState(0)
  const [tried, setTried] = useState(0)
  const [missed, setMissed] = useState(false)
  const [flash, setFlash] = useState<Record<string, string>>({})
  const [feedback, setFeedback] = useState<Feedback>({ tone: 'info', text: game.intro })
  const done = ply >= plies.length
  const fen = done ? plies[plies.length - 1].fenAfter : plies[ply].fenBefore
  const yourTurn = !done && ply % 2 === mineParity
  const player = game.side === 'white' ? game.white : game.black
  const total = plies.filter((_, i) => i >= game.startPly && i % 2 === mineParity).length

  // The opponent's moves play themselves.
  useEffect(() => {
    if (done || yourTurn) return
    const t = setTimeout(() => setPly((p) => p + 1), 700)
    return () => clearTimeout(t)
  }, [ply, done, yourTurn])

  useEffect(() => {
    if (Object.keys(flash).length === 0) return
    const t = setTimeout(() => setFlash({}), 600)
    return () => clearTimeout(t)
  }, [flash])

  function moveNote(i: number): string {
    return game.notes[i] ? ` ${game.notes[i]}` : ''
  }

  function onMove(input: MoveInput): boolean {
    const target = plies[ply]
    if (input.from === target.from && input.to === target.to) {
      if (!missed) setRight((r) => r + 1)
      setTried((t) => t + 1)
      setFeedback({ tone: 'good', text: `${missed ? 'Yes, ' : 'Correct: '}${player} played ${target.san}.${moveNote(ply)}` })
      setMissed(false)
      setPly((p) => p + 1)
      return true
    }
    if (!missed) {
      setMissed(true)
      setFlash({ [input.to]: WRONG })
      setFeedback({ tone: 'bad', text: `${player} played something else. Try once more, or show the move.` })
    } else {
      reveal()
    }
    return false
  }

  function reveal() {
    const target = plies[ply]
    setTried((t) => t + 1)
    setFeedback({ tone: 'info', text: `${player} played ${target.san}.${moveNote(ply)}` })
    setMissed(false)
    setPly((p) => p + 1)
  }

  const last = ply > 0 ? plies[Math.min(ply, plies.length) - 1] : null
  const arrows: BoardArrow[] = feedback.tone !== 'bad' && last && ply - 1 >= game.startPly && (ply - 1) % 2 === mineParity ? [{ from: last.from, to: last.to, color: ARROW_NEXT }] : []

  return (
    <div className="session">
      <div className="board-col">
        <Board fen={fen} orientation={game.side} movable={yourTurn ? game.side : null} onMove={onMove} lastMove={last ? { from: last.from, to: last.to } : null} marks={flash} arrows={arrows} />
        <div className="nav">
          {yourTurn && (
            <button type="button" className="ghost" onClick={reveal}>
              Show the move
            </button>
          )}
        </div>
      </div>
      <aside className="panel">
        <div className="session-head">
          <button type="button" className="link" onClick={onBack}>
            ← Choose a game
          </button>
          <h1>
            {game.white} – {game.black}
          </h1>
          <p className="muted small">
            {game.event} · {game.result} · you guess {game.side}'s moves
          </p>
        </div>
        <p className="muted small status-line">
          Guessed {right} of {tried} · {total} moves to guess
        </p>
        <div className={`feedback ${feedback.tone}`}>
          <p>{feedback.text}</p>
        </div>
        {done && (
          <div className={`result ${right / Math.max(1, tried) >= 0.5 ? 'good' : 'bad'}`}>
            <p>
              <strong>
                Game over: you found {right} of {tried} moves.
              </strong>
            </p>
          </div>
        )}
        <ol className="movelist">
          {plies.slice(0, ply).map((p, i) => (
            <li key={i} className={i === ply - 1 ? 'current' : ''}>
              {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
              <button type="button" disabled className={i < game.startPly ? 'book' : ''}>
                {p.san}
              </button>
            </li>
          ))}
        </ol>
        <p className="muted small">{game.source}</p>
      </aside>
    </div>
  )
}
