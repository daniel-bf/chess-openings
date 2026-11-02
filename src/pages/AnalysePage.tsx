import { useEffect, useMemo, useState } from 'react'
import { Chess } from 'chess.js'
import { lineById, openingById } from '../data/openings'
import { planFor } from '../data/plans'
import type { Side } from '../data/types'
import type { Line } from '../lib/repertoire'
import {
  formatS,
  loadAnalysis,
  lookup,
  numbered,
  planHits,
  planTargets,
  playMoves,
  sideCp,
  toEngineLine,
  whiteCp,
  type Analysis,
  type PvMove,
} from '../lib/analysis'
import { getEngine, type EngineLine } from '../lib/engine'
import { Board, ARROW_BEST, ARROW_HINT, ARROW_NEXT, ARROW_SECOND, type BoardArrow, type MoveInput } from '../components/Board'
import { EvalBar, formatScore } from '../components/EvalBar'
import { Plan } from '../components/Plan'
import { NotFound } from './OpeningPage'
import { go } from '../router'

const MODES = [
  { id: 'report', label: 'Report' },
  { id: 'board', label: 'Board' },
  { id: 'candidates', label: 'Candidates' },
  { id: 'annotated', label: 'Annotated' },
] as const
type Mode = (typeof MODES)[number]['id']

const ARROW_COLORS = [ARROW_BEST, ARROW_SECOND, 'rgba(232, 160, 32, 0.6)']

interface Ctx {
  line: Line
  side: Side
  analysis: Analysis
  /** Opens the free board on a position. */
  explore: (fen: string, label: string) => void
}

export function AnalysePage({ lineId, mode }: { lineId: string; mode?: string }) {
  const line = lineById.get(lineId)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [boardStart, setBoardStart] = useState<{ fen: string; label: string } | null>(null)
  useEffect(() => {
    if (!line) return
    let live = true
    loadAnalysis(line.openingId).then((a) => live && setAnalysis(a))
    return () => {
      live = false
    }
  }, [line])
  if (!line) return <NotFound />
  const opening = openingById.get(line.openingId)!
  const current: Mode = MODES.some((m) => m.id === mode) ? (mode as Mode) : 'report'
  const ctx: Ctx = {
    line,
    side: opening.side,
    analysis: analysis ?? {},
    explore: (fen, label) => {
      setBoardStart({ fen, label })
      go(`/analyse/${lineId}/board`)
    },
  }

  return (
    <div className="page analyse">
      <header className="an-head">
        <div>
          <button type="button" className="link" onClick={() => go(`/opening/${opening.id}`)}>
            ← {opening.name}
          </button>
          <h1>{line.name}</h1>
          <p className="muted small">
            Analyse the line · you play {opening.side} ·{' '}
            <button type="button" className="link" onClick={() => go(`/learn/${line.id}`)}>
              learn it
            </button>
          </p>
        </div>
        <div className="segmented" role="tablist">
          {MODES.map((m) => (
            <button key={m.id} type="button" role="tab" aria-selected={m.id === current} className={m.id === current ? 'on' : ''} onClick={() => go(`/analyse/${lineId}/${m.id}`)}>
              {m.label}
            </button>
          ))}
        </div>
      </header>
      {!analysis ? (
        <p className="muted">Loading the analysis…</p>
      ) : (
        <>
          {current === 'report' && <Report {...ctx} />}
          {current === 'board' && <FreeBoard key={boardStart?.fen ?? 'end'} {...ctx} start={boardStart} />}
          {current === 'candidates' && <Candidates {...ctx} />}
          {current === 'annotated' && <Annotated {...ctx} />}
        </>
      )}
    </div>
  )
}

function endFen(line: Line): string {
  return line.moves[line.moves.length - 1].fenAfter
}

function toMove(fen: string): Side {
  return fen.split(' ')[1] === 'w' ? 'white' : 'black'
}

function arrowOf(m: PvMove, color: string): BoardArrow {
  return { from: m.from, to: m.to, color }
}

/** "White is better" style phrase for a score, from the trainee's side. */
function forYou(cp: number): string {
  const a = Math.abs(cp)
  if (a < 40) return 'about equal'
  const who = cp > 0 ? 'you are' : 'your opponent is'
  if (a < 120) return `${who} slightly better`
  if (a < 300) return `${who} better`
  return `${who} winning`
}

/* ---------- 1. Report: Stockfish's best continuations, linked to the plan ---------- */

function Report({ line, side, analysis, explore }: Ctx) {
  const fen = endFen(line)
  const pos = lookup(analysis, fen)
  const plan = planFor(line.id)
  const targets = useMemo(() => planTargets(plan ? `${plan.plan} ${plan.remember.join(' ')}` : ''), [plan])
  const conts = useMemo(() => (pos?.l ?? []).map((l) => ({ l, moves: playMoves(fen, l.m.split(' ')) })), [pos, fen])
  const [pick, setPick] = useState(0)
  const [step, setStep] = useState(0)
  const chosen = conts[pick]
  const shownFen = chosen && step > 0 ? chosen.moves[step - 1].fen : fen

  if (!pos) return <p className="muted">There is no analysis for this line yet. Run scripts/analyse-lines.ts.</p>

  const arrows: BoardArrow[] = step === 0 ? conts.map((c, i) => arrowOf(c.moves[0], ARROW_COLORS[i])).filter((a) => a.from) : chosen && step < chosen.moves.length ? [arrowOf(chosen.moves[step], ARROW_NEXT)] : []
  const best = pos.l[0]

  return (
    <div className="session">
      <div className="board-col">
        {best && <EvalBar line={toEngineLine(best)} orientation={side} />}
        <Board fen={shownFen} orientation={side} movable={null} arrows={arrows} lastMove={chosen && step > 0 ? chosen.moves[step - 1] : null} />
        {chosen && (
          <div className="nav">
            <button type="button" onClick={() => setStep(0)} disabled={step === 0} aria-label="Back to the line's end">
              ⏮
            </button>
            <button type="button" onClick={() => setStep(step - 1)} disabled={step === 0} aria-label="Previous move">
              ◀
            </button>
            <button type="button" className="primary" onClick={() => setStep(step + 1)} disabled={step >= chosen.moves.length} aria-label="Next move">
              ▶
            </button>
            <button type="button" className="ghost" onClick={() => explore(shownFen, step === 0 ? 'End of the line' : `After ${numbered(chosen.moves.slice(0, step))}`)}>
              Explore from here
            </button>
          </div>
        )}
      </div>
      <aside className="panel">
        <h2 className="an-title">Where this line leads</h2>
        {best && (
          <p>
            At the end of the line it is {toMove(fen)} to move, and Stockfish says {forYou(sideCp(best.s, side))} ({formatS(best.s)}, depth {pos.d}). Its best
            continuations:
          </p>
        )}
        <div className="an-cards">
          {conts.map((c, i) => {
            const hits = planHits(c.moves, targets, side)
            return (
              <button
                key={i}
                type="button"
                className={`an-card${i === pick ? ' on' : ''}`}
                style={{ borderLeftColor: ARROW_COLORS[i] }}
                onClick={() => {
                  setPick(i)
                  setStep(i === pick ? Math.min(step + 1, c.moves.length) : 1)
                }}
              >
                <span className="an-score">{formatS(c.l.s)}</span>
                <span className="an-moves">{numbered(c.moves)}</span>
                {hits.length > 0 ? (
                  <span className="an-hits">Fits the plan: {hits.join(', ')}</span>
                ) : (
                  <span className="an-hits none">No move from the plan in this line</span>
                )}
              </button>
            )
          })}
        </div>
        <p className="muted small">Tap a line to play it through on the board. Green, blue and orange arrows are the first moves of the three lines.</p>
        <Plan lineId={line.id} title="The plan" />
      </aside>
    </div>
  )
}

/* ---------- 2. Free board with live Stockfish ---------- */

interface VarMove {
  san: string
  from: string
  to: string
  fen: string
}

function FreeBoard({ line, side, analysis, start }: Ctx & { start: { fen: string; label: string } | null }) {
  // The base is any position of the line, or a position sent from another mode.
  const [base, setBase] = useState<{ fen: string; label: string; ply: number | null }>(
    start ? { ...start, ply: null } : { fen: endFen(line), label: 'End of the line', ply: line.moves.length },
  )
  const [vars, setVars] = useState<VarMove[]>([])
  const fen = vars.length ? vars[vars.length - 1].fen : base.fen
  const [live, setLive] = useState<{ fen: string; lines: EngineLine[] } | null>(null)
  const chess = useMemo(() => new Chess(fen), [fen])
  const pre = lookup(analysis, fen)

  useEffect(() => {
    let alive = true
    const t = setTimeout(() => {
      getEngine()
        .analyse(fen, 3, 1200)
        .then((lines) => alive && setLive({ fen, lines }))
        .catch(() => {})
    }, 200)
    return () => {
      alive = false
      clearTimeout(t)
    }
  }, [fen])

  const lines: { score: string; moves: PvMove[]; eval: EngineLine }[] =
    live?.fen === fen
      ? live.lines.map((l) => ({ score: formatScore(l), moves: playMoves(fen, (l.pv ?? [l.uci]).slice(0, 10)), eval: l }))
      : (pre?.l ?? []).map((l) => ({ score: formatS(l.s), moves: playMoves(fen, l.m.split(' ').slice(0, 10)), eval: toEngineLine(l) }))

  function onMove(input: MoveInput): boolean {
    const after = new Chess(fen)
    try {
      const mv = after.move(input)
      setVars((v) => [...v, { san: mv.san, from: mv.from, to: mv.to, fen: after.fen() }])
      return true
    } catch {
      return false
    }
  }

  function play(m: PvMove) {
    setVars((v) => [...v, { san: m.san, from: m.from, to: m.to, fen: m.fen }])
  }

  function chooseBase(ply: number) {
    setBase({ fen: ply === 0 ? line.moves[0].fenBefore : line.moves[ply - 1].fenAfter, label: ply === 0 ? 'Start' : `After ${line.moves[ply - 1].san}`, ply })
    setVars([])
  }

  const last = vars[vars.length - 1] ?? (base.ply ? line.moves[base.ply - 1] : null)
  const turn: Side = chess.turn() === 'w' ? 'white' : 'black'

  return (
    <div className="session">
      <div className="board-col">
        <EvalBar line={lines[0]?.eval ?? null} orientation={side} />
        <Board
          fen={fen}
          orientation={side}
          movable={chess.isGameOver() ? null : turn}
          onMove={onMove}
          lastMove={last ? { from: last.from, to: last.to } : null}
          arrows={lines.slice(0, 3).map((l, i) => (l.moves[0] ? arrowOf(l.moves[0], ARROW_COLORS[i]) : null)).filter((a): a is BoardArrow => !!a)}
        />
        <div className="nav">
          <button type="button" onClick={() => setVars((v) => v.slice(0, -1))} disabled={vars.length === 0}>
            ◀ Take back
          </button>
          <button type="button" className="ghost" onClick={() => setVars([])} disabled={vars.length === 0}>
            Back to {base.label.toLowerCase()}
          </button>
        </div>
      </div>
      <aside className="panel">
        <h2 className="an-title">Analysis board</h2>
        <p className="muted small">
          Move pieces for both sides to try your own ideas. Stockfish follows every position. {turn === 'white' ? 'White' : 'Black'} to move.
        </p>
        <h3>Start from a move of the line</h3>
        <p className="sx-moves">
          {line.moves.map((m, i) => (
            <button key={i} type="button" className={`${base.ply !== null && i < base.ply ? 'played' : ''}${base.ply === i + 1 ? ' now' : ''}`} onClick={() => chooseBase(i + 1)}>
              {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
              {m.san}
            </button>
          ))}
        </p>
        {vars.length > 0 && (
          <p className="small">
            <span className="muted">Your moves: </span>
            {numbered(playMoves(base.fen, vars.map((v) => v.san)))}
          </p>
        )}
        <h3>Stockfish</h3>
        {lines.length === 0 ? (
          <p className="muted small">{chess.isGameOver() ? 'The game is over.' : 'Thinking…'}</p>
        ) : (
          <div className="an-cards">
            {lines.map((l, i) => (
              <button key={i} type="button" className="an-card" style={{ borderLeftColor: ARROW_COLORS[i] }} onClick={() => l.moves[0] && play(l.moves[0])}>
                <span className="an-score">{l.score}</span>
                <span className="an-moves">{numbered(l.moves)}</span>
              </button>
            ))}
          </div>
        )}
        <p className="muted small">Tap an engine line to play its first move.</p>
      </aside>
    </div>
  )
}

/* ---------- 3. Candidate moves: you choose, Stockfish judges ---------- */

interface Candidate {
  san: string
  from: string
  to: string
  fen: string
}

interface Judged extends Candidate {
  cp: number
  line: string
}

function Candidates({ line, side, analysis }: Ctx) {
  const end = endFen(line)
  // When the line ends with your move, play the opponent's most likely reply first.
  const reply = useMemo(() => {
    if (toMove(end) === side) return null
    const first = lookup(analysis, end)?.l[0]?.m.split(' ')[0]
    return first ? playMoves(end, [first])[0] ?? null : null
  }, [analysis, end, side])
  const fen = reply ? reply.fen : end
  const [cands, setCands] = useState<Candidate[]>([])
  const [guess, setGuess] = useState<number | null>(null)
  const [result, setResult] = useState<{ judged: Judged[]; best: { san: string; cp: number; line: string } | null } | null>(null)
  const [busy, setBusy] = useState(false)
  const stage = result ? 'done' : cands.length > 0 && guess !== null ? 'check' : 'pick'

  function onMove(input: MoveInput): boolean {
    if (result || cands.length >= 3) return false
    const after = new Chess(fen)
    try {
      const mv = after.move(input)
      if (!cands.some((c) => c.san === mv.san)) setCands((c) => [...c, { san: mv.san, from: mv.from, to: mv.to, fen: after.fen() }])
    } catch {
      return false
    }
    return true
  }

  async function check() {
    setBusy(true)
    const engine = getEngine()
    try {
      const judged: Judged[] = []
      for (const c of cands) {
        const [l] = await engine.analyse(c.fen, 1, 1500)
        const cp = l ? (side === 'white' ? 1 : -1) * (l.mate !== undefined ? Math.sign(l.mate) * (10000 - Math.abs(l.mate)) : l.cp ?? 0) : 0
        judged.push({ ...c, cp, line: l ? numbered(playMoves(fen, [c.san, ...(l.pv ?? []).slice(0, 7)])) : c.san })
      }
      const [top] = await engine.analyse(fen, 1, 2000)
      let best: { san: string; cp: number; line: string } | null = null
      if (top) {
        const moves = playMoves(fen, (top.pv ?? [top.uci]).slice(0, 8))
        const cp = (side === 'white' ? 1 : -1) * (top.mate !== undefined ? Math.sign(top.mate) * (10000 - Math.abs(top.mate)) : top.cp ?? 0)
        if (moves[0]) best = { san: moves[0].san, cp, line: numbered(moves) }
      }
      setResult({ judged: judged.sort((a, b) => b.cp - a.cp), best })
    } finally {
      setBusy(false)
    }
  }

  function reset() {
    setCands([])
    setGuess(null)
    setResult(null)
  }

  const guessed = guess !== null ? cands[guess] : null
  const topCand = result?.judged[0]
  const pawns = (cp: number) => (Math.abs(cp) >= 9000 ? 'a forced mate' : `${(Math.abs(cp) / 100).toFixed(1)} pawns`)

  return (
    <div className="session">
      <div className="board-col">
        <Board
          fen={fen}
          orientation={side}
          movable={stage === 'pick' && cands.length < 3 ? side : null}
          onMove={onMove}
          lastMove={reply ? { from: reply.from, to: reply.to } : null}
          arrows={[
            ...cands.map((c, i) => ({ from: c.from, to: c.to, color: result && topCand?.san === c.san ? ARROW_BEST : i === guess ? ARROW_NEXT : ARROW_HINT })),
            ...(result?.best && !cands.some((c) => c.san === result.best!.san) ? [arrowOf(playMoves(fen, [result.best.san])[0], ARROW_BEST)] : []),
          ]}
        />
      </div>
      <aside className="panel">
        <h2 className="an-title">Find the best move</h2>
        <p>
          {reply ? (
            <>
              After the line, your opponent's most likely reply is <strong>{reply.san}</strong>. Now it is your move.
            </>
          ) : (
            'The line ends with your opponent\'s move. Now it is your move.'
          )}
        </p>
        <ol className="an-steps">
          <li className={stage === 'pick' ? 'on' : 'past'}>Make up to 3 moves you would consider on the board. They are not played, just listed.</li>
          <li className={stage === 'check' || (stage === 'pick' && cands.length > 0) ? 'on' : stage === 'done' ? 'past' : ''}>Pick the one you think is best.</li>
          <li className={stage === 'done' ? 'on' : ''}>Stockfish checks them all.</li>
        </ol>
        {cands.length > 0 && (
          <div className="an-cards">
            {cands.map((c, i) => (
              <div key={c.san} className={`an-card${guess === i ? ' on' : ''}`}>
                <span className="an-score">{c.san}</span>
                <span className="row">
                  {!result && (
                    <>
                      <button type="button" className={guess === i ? 'primary' : ''} onClick={() => setGuess(i)}>
                        {guess === i ? 'My pick' : 'Pick as best'}
                      </button>
                      <button type="button" className="ghost" onClick={() => { setCands((cs) => cs.filter((x) => x !== c)); setGuess(null) }}>
                        Remove
                      </button>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        )}
        {!result && (
          <button type="button" className="primary" disabled={guess === null || busy} onClick={check}>
            {busy ? 'Stockfish is checking…' : 'Check my moves'}
          </button>
        )}
        {result && topCand && guessed && (
          <>
            <div className={`feedback ${topCand.san === guessed.san ? 'good' : 'bad'}`}>
              <p>
                {topCand.san === guessed.san
                  ? `Right: ${guessed.san} is the best of your moves.`
                  : `${topCand.san} was better than your pick ${guessed.san}, by ${pawns(topCand.cp - (result.judged.find((j) => j.san === guessed.san)?.cp ?? 0))}.`}{' '}
                {result.best &&
                  (cands.some((c) => c.san === result.best!.san)
                    ? 'It is also Stockfish\'s first choice.'
                    : `Stockfish's own choice is ${result.best.san}, which you did not list (${forYou(result.best.cp)}).`)}
              </p>
            </div>
            <table className="an-table">
              <tbody>
                {result.judged.map((j) => (
                  <tr key={j.san}>
                    <th>{j.san}</th>
                    <td>{forYou(j.cp)}</td>
                    <td className="muted small">{j.line}</td>
                  </tr>
                ))}
                {result.best && !cands.some((c) => c.san === result.best!.san) && (
                  <tr className="best">
                    <th>{result.best.san}</th>
                    <td>{forYou(result.best.cp)}</td>
                    <td className="muted small">{result.best.line}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <button type="button" className="primary" onClick={reset}>
              Try again
            </button>
          </>
        )}
      </aside>
    </div>
  )
}

/* ---------- 4. Annotated line: Stockfish on every move ---------- */

interface Note {
  /** Score after the move, from your side's point of view. */
  after: number
  /** How much the move lost for the side that played it, in centipawns. */
  loss: number
  best: string | null
  alternatives: { san: string; s: number | string }[]
  tag: '' | 'best' | '?!' | '?'
}

function annotate(line: Line, side: Side, analysis: Analysis): (Note | null)[] {
  return line.moves.map((m) => {
    const before = lookup(analysis, m.fenBefore)
    const after = lookup(analysis, m.fenAfter)
    if (!before?.l.length || !after?.l.length) return null
    const mover: Side = toMove(m.fenBefore)
    const loss = Math.max(0, sideCp(before.l[0].s, mover) - sideCp(after.l[0].s, mover))
    const alternatives = before.l.map((l) => ({ san: l.m.split(' ')[0], s: l.s }))
    const best = alternatives[0]?.san ?? null
    const tag: Note['tag'] = best === m.san ? 'best' : loss >= 100 ? '?' : loss >= 50 ? '?!' : ''
    return { after: sideCp(after.l[0].s, side), loss, best, alternatives, tag }
  })
}

function EvalGraph({ notes, selected, onSelect, side }: { notes: (Note | null)[]; selected: number; onSelect: (i: number) => void; side: Side }) {
  const W = 600
  const H = 90
  const clamp = (cp: number) => Math.max(-300, Math.min(300, cp))
  const x = (i: number) => (notes.length < 2 ? W / 2 : (i / (notes.length - 1)) * W)
  const y = (cp: number) => H / 2 - (clamp(cp) / 300) * (H / 2 - 4)
  const pts = notes.map((n, i) => (n ? `${x(i)},${y(n.after)}` : null)).filter(Boolean)
  return (
    <svg className="an-graph" viewBox={`-6 0 ${W + 12} ${H}`} role="img" aria-label={`Evaluation after each move, from ${side}'s side`}>
      <rect x={-6} y={0} width={W + 12} height={H / 2} className="an-graph-up" />
      <line x1={-6} x2={W + 6} y1={H / 2} y2={H / 2} className="an-graph-axis" />
      <polyline points={pts.join(' ')} className="an-graph-line" />
      {notes.map((n, i) =>
        n ? (
          <circle
            key={i}
            cx={x(i)}
            cy={y(n.after)}
            r={i === selected ? 6 : n.tag === '?' || n.tag === '?!' ? 4.5 : 3}
            className={`an-dot${n.tag === '?' ? ' bad' : n.tag === '?!' ? ' dubious' : ''}${i === selected ? ' on' : ''}`}
            onClick={() => onSelect(i)}
          />
        ) : null,
      )}
    </svg>
  )
}

function Annotated({ line, side, analysis, explore }: Ctx) {
  const notes = useMemo(() => annotate(line, side, analysis), [line, side, analysis])
  const [sel, setSel] = useState(line.moves.length - 1)
  const move = line.moves[sel]
  const note = notes[sel]
  const mine = move.isTrainee
  const bestMove = note?.best && note.best !== move.san ? playMoves(move.fenBefore, [note.best])[0] : null
  const yourSlips = notes.filter((n, i) => n && line.moves[i].isTrainee && (n.tag === '?' || n.tag === '?!')).length
  const theirSlips = notes.filter((n, i) => n && !line.moves[i].isTrainee && (n.tag === '?' || n.tag === '?!')).length

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setSel((s) => Math.max(0, s - 1))
      if (e.key === 'ArrowRight') setSel((s) => Math.min(line.moves.length - 1, s + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [line])

  return (
    <div className="session">
      <div className="board-col">
        <Board
          fen={move.fenAfter}
          orientation={side}
          movable={null}
          lastMove={{ from: move.from, to: move.to }}
          arrows={bestMove ? [arrowOf(bestMove, ARROW_BEST)] : []}
        />
        <div className="nav">
          <button type="button" onClick={() => setSel(Math.max(0, sel - 1))} disabled={sel === 0} aria-label="Previous move">
            ◀
          </button>
          <button type="button" onClick={() => setSel(Math.min(line.moves.length - 1, sel + 1))} disabled={sel === line.moves.length - 1} aria-label="Next move">
            ▶
          </button>
          <button type="button" className="ghost" onClick={() => explore(move.fenAfter, `After ${move.san}`)}>
            Explore from here
          </button>
        </div>
      </div>
      <aside className="panel">
        <h2 className="an-title">Every move checked</h2>
        <p className="muted small">
          The graph is Stockfish's evaluation after each move, from your side: above the line is good for you. {yourSlips === 0 ? 'None of your moves loses more than half a pawn.' : `${yourSlips} of your moves lose half a pawn or more.`}{' '}
          {theirSlips > 0 && `Your opponent goes wrong ${theirSlips} time${theirSlips === 1 ? '' : 's'}: those are the moments to punish.`}
        </p>
        <EvalGraph notes={notes} selected={sel} onSelect={setSel} side={side} />
        <p className="sx-moves an-movelist">
          {line.moves.map((m, i) => (
            <button key={i} type="button" className={`${i <= sel ? 'played' : ''}${i === sel ? ' now' : ''}`} onClick={() => setSel(i)}>
              {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
              {m.san}
              {notes[i]?.tag && notes[i]!.tag !== 'best' && <span className={`an-tag ${notes[i]!.tag === '?' ? 'bad' : 'dubious'}`}>{notes[i]!.tag}</span>}
            </button>
          ))}
        </p>
        <div className="sx-explain">
          <p>
            <strong>
              {Math.floor(sel / 2) + 1}
              {sel % 2 === 0 ? '.' : '…'} {move.san}
            </strong>{' '}
            <span className="muted small">{mine ? 'your move' : "your opponent's move"}</span>
          </p>
          {move.comment && <p>{move.comment}</p>}
          {!note ? (
            <p className="muted small">No engine data for this position.</p>
          ) : (
            <>
              <p>
                {note.tag === 'best'
                  ? "This is Stockfish's first choice."
                  : note.loss < 50
                    ? `Stockfish slightly prefers ${note.best}, but ${move.san} is just as good in practice.`
                    : mine
                      ? `Stockfish prefers ${note.best}: ${move.san} gives up about ${(note.loss / 100).toFixed(1)} pawns. Worth knowing why the line chooses it.`
                      : `An inaccuracy by your opponent: ${note.best} was better by about ${(note.loss / 100).toFixed(1)} pawns. Make sure you know how to use it.`}{' '}
                After the move, {forYou(note.after)}.
              </p>
              <h3>{mine ? 'Why not something else?' : 'What else your opponent can play'}</h3>
              <table className="an-table">
                <tbody>
                  {note.alternatives.map((a) => (
                    <tr key={a.san} className={a.san === move.san ? 'best' : ''}>
                      <th>{a.san}</th>
                      <td>{formatS(a.s)}</td>
                      <td className="muted small">
                        {a.san === move.san
                          ? 'the move in the line'
                          : a === note.alternatives[0]
                            ? "Stockfish's choice"
                            : `${(Math.abs(whiteCp(note.alternatives[0].s) - whiteCp(a.s)) / 100).toFixed(1)} behind the best`}
                      </td>
                    </tr>
                  ))}
                  {!note.alternatives.some((a) => a.san === move.san) && (
                    <tr className="best">
                      <th>{move.san}</th>
                      <td>not in Stockfish's top 3</td>
                      <td className="muted small">the move in the line</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
      </aside>
    </div>
  )
}
