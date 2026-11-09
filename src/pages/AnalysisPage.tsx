import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import { Board, ARROW_BEST, ARROW_SECOND, type MoveInput } from '../components/Board'
import { EvalBar, formatScore } from '../components/EvalBar'
import { EvalGraph } from '../components/analysis/EvalGraph'
import { GameList, GameLoader, type LoadRequest } from '../components/analysis/GameLoader'
import type { Side } from '../data/types'
import { getEngine, type EngineLine } from '../lib/engine'
import { rateGame, summarise, type GameMove, type Rating } from '../lib/moveQuality'
import { GameReview, MoveBadge, QualityChip } from '../components/MoveBadge'
import { mastersGames, mastersPgn, type GameSummary } from '../lib/gameSources'
import { ANALYSE_HANDOFF_KEY, gameSubtitle, gameTitle, moveNumberLabel, parsePgn, uciToSan, type GamePly, type LoadedGame } from '../lib/pgn'

const SAVE_KEY = 'chess-trainer:analysis:v1'

const ARROW_THIRD = 'rgba(150, 90, 200, 0.55)'
const LINE_COUNT = 3
// A quick pass for the bar, then a deeper one if the user stays on the position.
const QUICK_MS = 700
const DEEP_MS = 2500
const GRAPH_MS = 180

interface Saved {
  pgn: string
  link?: string
  ply: number
  orientation: Side
}

function readSaved(): Saved | null {
  try {
    const handoff = sessionStorage.getItem(ANALYSE_HANDOFF_KEY)
    if (handoff) {
      // Removed after mount (not here), so StrictMode's double render still sees it.
      const { pgn, orientation } = JSON.parse(handoff) as { pgn: string; orientation?: Side }
      return { pgn, ply: 0, orientation: orientation ?? 'white' }
    }
  } catch {
    // Storage is unavailable; fall through.
  }
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    return raw ? (JSON.parse(raw) as Saved) : null
  } catch {
    return null
  }
}

function initial(): { game: LoadedGame; pgn: string; ply: number; orientation: Side } | null {
  const saved = readSaved()
  if (!saved) return null
  try {
    const game = parsePgn(saved.pgn)
    return { game: { ...game, link: saved.link }, pgn: saved.pgn, ply: Math.min(saved.ply, game.moves.length), orientation: saved.orientation }
  } catch {
    return null
  }
}

const terminalCache = new Map<string, { line: EngineLine; text: string } | null>()

/** A finished position has no engine lines; describe it directly. */
function terminal(fen: string): { line: EngineLine; text: string } | null {
  if (!terminalCache.has(fen)) terminalCache.set(fen, findTerminal(fen))
  return terminalCache.get(fen)!
}

function findTerminal(fen: string): { line: EngineLine; text: string } | null {
  const chess = new Chess(fen)
  if (chess.isCheckmate()) {
    const whiteWins = chess.turn() === 'b'
    return { line: { uci: '', mate: whiteWins ? 1 : -1 }, text: `Checkmate. ${whiteWins ? 'White' : 'Black'} wins` }
  }
  if (chess.isDraw()) return { line: { uci: '', cp: 0 }, text: chess.isStalemate() ? 'Stalemate. Draw' : 'Draw' }
  return null
}

function makePly(fen: string, input: MoveInput): GamePly | null {
  const chess = new Chess(fen)
  try {
    const mv = chess.move({ from: input.from, to: input.to, promotion: input.promotion })
    return { san: mv.san, uci: mv.from + mv.to + (mv.promotion ?? ''), from: mv.from, to: mv.to, fenBefore: fen, fenAfter: chess.fen() }
  } catch {
    return null
  }
}

/** "+0.3 → −1.2": how the last move moved the bar. */
function shiftText(before: EngineLine | undefined, after: EngineLine | undefined, end: { line: EngineLine; text: string } | null): string | null {
  if (!before || (!after && !end)) return null
  const result = end ? (end.line.mate ? (end.line.mate > 0 ? '1-0' : '0-1') : '½-½') : formatScore(after!)
  return `${formatScore(before)} → ${result}`
}

const toGameMoves = (list: GamePly[]): GameMove[] => list.map((m) => ({ fenBefore: m.fenBefore, uci: m.uci }))

/** Ratings worth marking on the eval graph. */
const GRAPH_MARKS = new Set(['brilliant', 'mistake', 'miss', 'blunder'])

interface Variation {
  /** Main-line position index the variation branches from. */
  from: number
  moves: GamePly[]
}

interface Analysis {
  fen: string
  lines: EngineLine[]
  deep: boolean
}

export function AnalysisPage() {
  const [start] = useState(initial)
  const [game, setGame] = useState<LoadedGame | null>(start?.game ?? null)
  const [pgn, setPgn] = useState(start?.pgn ?? '')
  const [ply, setPly] = useState(start?.ply ?? 0)
  const [variation, setVariation] = useState<Variation | null>(null)
  const [varPly, setVarPly] = useState(0)
  const [orientation, setOrientation] = useState<Side>(start?.orientation ?? 'white')
  const [choosing, setChoosing] = useState(!start)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  // Engine lines for every position looked at so far, by FEN (best first). Feeds the bar, graph and move ratings.
  const [analyses, setAnalyses] = useState<Record<string, EngineLine[]>>({})
  const evals = useMemo(() => {
    const out: Record<string, EngineLine> = {}
    for (const [f, ls] of Object.entries(analyses)) if (ls[0]) out[f] = ls[0]
    return out
  }, [analyses])
  const [showArrows, setShowArrows] = useState(true)
  const [masters, setMasters] = useState<{ fen: string; state: 'loading' | 'done' | 'error'; total?: number; games?: GameSummary[]; error?: string } | null>(null)

  const moves = useMemo(() => game?.moves ?? [], [game])

  // ---- Move ratings (brilliant … blunder), from the cached analyses. ----
  const ratingInput = useMemo(() => {
    const m = new Map(Object.entries(analyses))
    for (const mv of [...moves, ...(variation?.moves ?? [])]) {
      const t = terminal(mv.fenAfter)
      if (t && !m.has(mv.fenAfter)) m.set(mv.fenAfter, [t.line])
    }
    return m
  }, [analyses, moves, variation])
  const mainMoves = useMemo(() => toGameMoves(moves), [moves])
  const ratings = useMemo(() => rateGame(mainMoves, ratingInput), [mainMoves, ratingInput])
  const varRatings = useMemo(() => (variation ? rateGame(toGameMoves(variation.moves), ratingInput) : []), [variation, ratingInput])
  const mainFen = useCallback((i: number) => (i === 0 ? game!.startFen : moves[i - 1].fenAfter), [game, moves])
  const inVariation = !!variation && varPly > 0
  const fen = !game ? '' : inVariation ? variation!.moves[varPly - 1].fenAfter : mainFen(ply)
  const lastMove = inVariation ? variation!.moves[varPly - 1] : ply > 0 ? moves[ply - 1] : null
  const end = useMemo(() => (fen ? terminal(fen) : null), [fen])

  useEffect(() => {
    try {
      sessionStorage.removeItem(ANALYSE_HANDOFF_KEY)
    } catch {
      // Nothing to clear.
    }
  }, [])

  // Remember the game and position.
  useEffect(() => {
    if (!game) return
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ pgn, link: game.link, ply, orientation } satisfies Saved))
    } catch {
      // Not saved; fine.
    }
  }, [game, pgn, ply, orientation])

  function onLoad(r: LoadRequest) {
    setGame(r.game)
    setPgn(r.pgn)
    setPly(0)
    setVariation(null)
    setVarPly(0)
    setOrientation(r.orientation ?? 'white')
    setAnalysis(null)
    setAnalyses({})
    setMasters(null)
    setChoosing(false)
  }

  // ---- Engine: analyse the position on the board (quick pass, then a deeper one). ----
  const fenRef = useRef(fen)
  useEffect(() => {
    fenRef.current = fen
  }, [fen])
  useEffect(() => {
    if (!fen || end) return
    let live = true
    const stale = () => !live || fenRef.current !== fen
    const engine = getEngine()
    const t = setTimeout(() => {
      engine
        .analyse(fen, LINE_COUNT, QUICK_MS, stale)
        .then((lines) => {
          if (stale() || !lines.length) return
          setAnalysis({ fen, lines, deep: false })
          setAnalyses((a) => ({ ...a, [fen]: lines }))
          return engine.analyse(fen, LINE_COUNT, DEEP_MS, stale)
        })
        .then((lines) => {
          if (!lines || stale() || !lines.length) return
          setAnalysis({ fen, lines, deep: true })
          setAnalyses((a) => ({ ...a, [fen]: lines }))
        })
        .catch(() => {})
    }, 120)
    return () => {
      live = false
      clearTimeout(t)
    }
  }, [fen, end])

  // ---- Engine: a fast pass over every main-line position for the graph. ----
  const analysesRef = useRef(analyses)
  useEffect(() => {
    analysesRef.current = analyses
  }, [analyses])
  useEffect(() => {
    if (!game) return
    let live = true
    // Your own line first (so its moves get rated quickly), then the whole game.
    const fens = [...(variation?.moves.map((m) => m.fenAfter) ?? []), game.startFen, ...game.moves.map((m) => m.fenAfter)]
    ;(async () => {
      for (const f of fens) {
        if (!live) return
        if (analysesRef.current[f]) continue
        const t = terminal(f)
        if (t) {
          setAnalyses((a) => ({ ...a, [f]: [t.line] }))
          continue
        }
        try {
          // Two lines, so the move ratings can tell an only move ("great") from an ordinary best move.
          const lines = await getEngine().analyse(f, 2, GRAPH_MS, () => !live)
          if (live && lines[0]) setAnalyses((a) => (a[f] ? a : { ...a, [f]: lines }))
        } catch {
          return
        }
      }
    })()
    return () => {
      live = false
    }
  }, [game, variation])

  // ---- Moving around ----
  const goMain = useCallback(
    (i: number) => {
      setPly(Math.max(0, Math.min(moves.length, i)))
      setVariation(null)
      setVarPly(0)
    },
    [moves.length],
  )

  const back = useCallback(() => {
    if (inVariation) setVarPly((v) => v - 1)
    else goMain(ply - 1)
  }, [inVariation, goMain, ply])

  const forward = useCallback(() => {
    if (inVariation && varPly < variation!.moves.length) setVarPly((v) => v + 1)
    else if (!inVariation) goMain(ply + 1)
  }, [inVariation, varPly, variation, goMain, ply])

  useEffect(() => {
    if (choosing) return
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') return
      if (e.key === 'ArrowLeft') back()
      else if (e.key === 'ArrowRight') forward()
      else if (e.key === 'Home') goMain(0)
      else if (e.key === 'End') goMain(moves.length)
      else if (e.key === 'f') setOrientation((o) => (o === 'white' ? 'black' : 'white'))
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [choosing, back, forward, goMain, moves.length])

  /** Adds moves to the board from the current position: follows the game if they match it, else starts or extends your own line. */
  function playMoves(seq: GamePly[]) {
    if (!seq.length) return
    let mainIdx = inVariation ? -1 : ply
    let k = 0
    // Follow the game for as long as the moves match it.
    if (mainIdx >= 0) {
      while (k < seq.length && moves[mainIdx]?.uci === seq[k].uci) {
        mainIdx++
        k++
      }
      if (k === seq.length) {
        goMain(mainIdx)
        return
      }
    }
    if (mainIdx >= 0) {
      setPly(mainIdx)
      setVariation({ from: mainIdx, moves: seq.slice(k) })
      setVarPly(seq.length - k)
      return
    }
    const base = variation!.moves.slice(0, varPly)
    const existing = variation!.moves
    // Keep the rest of your line if the moves match it.
    let same = true
    seq.forEach((m, i) => {
      if (existing[varPly + i]?.uci !== m.uci) same = false
    })
    setVariation({ from: variation!.from, moves: same ? existing : [...base, ...seq] })
    setVarPly(varPly + seq.length)
  }

  function onMove(input: MoveInput): boolean {
    const p = makePly(fen, input)
    if (!p) return false
    playMoves([p])
    return true
  }

  /** Plays the first `count` moves of an engine line on the board. */
  function playLine(line: EngineLine, count: number) {
    const seq: GamePly[] = []
    let f = fen
    for (const uci of (line.pv ?? [line.uci]).slice(0, count)) {
      const p = makePly(f, { from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
      if (!p) break
      seq.push(p)
      f = p.fenAfter
    }
    playMoves(seq)
  }

  async function findMasters() {
    const at = fen
    setMasters({ fen: at, state: 'loading' })
    try {
      const r = await mastersGames(at)
      setMasters({ fen: at, state: 'done', total: r.total, games: r.games })
    } catch (e) {
      setMasters({ fen: at, state: 'error', error: (e as Error).message })
    }
  }

  async function openMaster(g: GameSummary) {
    try {
      const text = await mastersPgn(g.id)
      const loaded = parsePgn(text)
      // Open the master game at the position you were looking at.
      const target = masters?.fen.split(' ').slice(0, 4).join(' ')
      const idx = [loaded.startFen, ...loaded.moves.map((m) => m.fenAfter)].findIndex((f) => f.split(' ').slice(0, 4).join(' ') === target)
      onLoad({ game: { ...loaded, link: g.link }, pgn: text, orientation })
      if (idx > 0) setPly(idx)
    } catch (e) {
      setMasters((m) => m && { ...m, state: 'error', error: (e as Error).message })
    }
  }

  if (choosing || !game) return <GameLoader onLoad={onLoad} onCancel={game ? () => setChoosing(false) : undefined} />

  const shown = analysis?.fen === fen ? analysis : null
  const lines = shown?.lines ?? []
  const barLine = end?.line ?? lines[0] ?? evals[fen] ?? null
  const graphEvals = [game.startFen, ...moves.map((m) => m.fenAfter)].map((f) => evals[f])
  const beforeFen = lastMove?.fenBefore
  const shift = lastMove ? shiftText(beforeFen ? evals[beforeFen] : undefined, evals[fen], end) : null
  const lastRating: Rating | null = inVariation ? varRatings[varPly - 1] ?? null : ply > 0 ? ratings[ply - 1] : null
  const lastBest = lastRating && lastMove && lastRating.best !== lastMove.uci && lastRating.loss >= 2 ? uciToSan(lastMove.fenBefore, [lastRating.best])[0] : null
  const graphMarks = ratings.flatMap((r, i) => (r && GRAPH_MARKS.has(r.quality) ? [{ ply: i + 1, quality: r.quality }] : []))
  const arrows = showArrows && !end ? lines.map((l, i) => ({ from: l.uci.slice(0, 2), to: l.uci.slice(2, 4), color: [ARROW_BEST, ARROW_SECOND, ARROW_THIRD][i] })) : []
  const gameMoveHere = !inVariation ? moves[ply] : undefined
  const h = game.headers

  return (
    <div className="page">
      <div className="session analysis">
        <div className="board-col">
          <EvalBar line={barLine} orientation={orientation} text={end?.text} />
          <Board fen={fen} orientation={orientation} movable={end ? null : fen.split(' ')[1] === 'w' ? 'white' : 'black'} onMove={onMove} arrows={arrows} lastMove={lastMove} />
          <div className="nav">
            <button type="button" onClick={() => goMain(0)} disabled={ply === 0 && !inVariation} aria-label="Start of the game">
              ⏮
            </button>
            <button type="button" onClick={back} disabled={ply === 0 && !inVariation} aria-label="Previous move">
              ◀
            </button>
            <button type="button" onClick={forward} disabled={inVariation ? varPly >= variation!.moves.length : ply >= moves.length} aria-label="Next move">
              ▶
            </button>
            <button type="button" onClick={() => goMain(moves.length)} disabled={ply >= moves.length && !inVariation} aria-label="End of the game">
              ⏭
            </button>
            <button type="button" className="ghost" onClick={() => setOrientation((o) => (o === 'white' ? 'black' : 'white'))} aria-label="Flip board" title="Flip board (F)">
              ⇅
            </button>
          </div>
          <EvalGraph evals={graphEvals} marks={graphMarks} current={inVariation ? variation!.from : ply} onJump={goMain} />
        </div>

        <aside className="panel">
          <div className="session-head">
            <button type="button" className="link" onClick={() => setChoosing(true)}>
              ← Load another game
            </button>
            <h1>{gameTitle(h)}</h1>
            <p className="muted small">
              {gameSubtitle(h)}
              {game.link && (
                <>
                  {' · '}
                  <a href={game.link} target="_blank" rel="noreferrer">
                    Original
                  </a>
                </>
              )}
            </p>
          </div>

          <section className="analysis-now">
            <p className="small">
              {lastMove ? (
                <>
                  <span className="muted">{inVariation ? 'Your line: ' : 'Game move: '}</span>
                  <strong>
                    {moveNumberLabel(lastMove.fenBefore)} {lastMove.san}
                  </strong>
                  {shift && <span className="muted"> · bar {shift}</span>}
                  {lastRating && (
                    <span className="last-rating">
                      <QualityChip quality={lastRating.quality} />
                      {lastBest && <span className="muted"> · best was {lastBest}</span>}
                    </span>
                  )}
                </>
              ) : (
                <span className="muted">Starting position. Use ◀ ▶ or the arrow keys to step through, or play any move on the board.</span>
              )}
            </p>
            {gameMoveHere && (
              <p className="small">
                <span className="muted">Next in the game: </span>
                <button type="button" className="link" onClick={forward}>
                  {moveNumberLabel(gameMoveHere.fenBefore)} {gameMoveHere.san}
                </button>
              </p>
            )}
            {inVariation && (
              <div className="variation-box">
                <p className="small">
                  <span className="muted">Exploring from the game at </span>
                  {variation!.from === 0 ? 'the start' : `${moveNumberLabel(moves[variation!.from - 1].fenBefore)} ${moves[variation!.from - 1].san}`}
                </p>
                <ol className="movelist">
                  {variation!.moves.map((m, i) => (
                    <li key={i} className={i === varPly - 1 ? 'current' : i >= varPly ? 'future' : ''}>
                      {(i === 0 || m.fenBefore.split(' ')[1] === 'w') && <span className="num">{moveNumberLabel(m.fenBefore)}</span>}
                      <button type="button" onClick={() => setVarPly(i + 1)}>
                        {m.san}
                        <MoveBadge rating={varRatings[i]} />
                      </button>
                    </li>
                  ))}
                </ol>
                <button type="button" className="primary" onClick={() => goMain(variation!.from)}>
                  Back to the game
                </button>
              </div>
            )}
          </section>

          <section className="engine-lines">
            <div className="engine-head">
              <h2>Stockfish</h2>
              <span className="muted small">{end ? '' : shown ? (shown.deep ? `depth ${lines[0]?.depth ?? ''}` : 'thinking deeper…') : 'analysing…'}</span>
              <label className="check small">
                <input type="checkbox" checked={showArrows} onChange={(e) => setShowArrows(e.target.checked)} /> Arrows
              </label>
            </div>
            {end ? (
              <p className="small">{end.text}.</p>
            ) : lines.length === 0 ? (
              <p className="muted small">Analysing this position…</p>
            ) : (
              <ol className="pv-list">
                {lines.map((l, i) => {
                  const sans = uciToSan(fen, l.pv ?? [l.uci], 10)
                  const isGameMove = gameMoveHere?.uci === l.uci
                  return (
                    <li key={i}>
                      <span className={`pv-score ${(l.mate ?? l.cp ?? 0) >= 0 ? 'w' : 'b'}`}>{formatScore(l)}</span>
                      <span className="pv-moves">
                        {sans.map((s, j) => (
                          <button key={j} type="button" className={j === 0 ? 'first' : ''} onClick={() => playLine(l, j + 1)} title="Play up to this move">
                            {j === 0 ? `${moveNumberLabel(fen)} ` : ''}
                            {s}
                          </button>
                        ))}
                      </span>
                      {isGameMove && <span className="tag small">game move</span>}
                    </li>
                  )
                })}
              </ol>
            )}
            <p className="muted small">Click a move in a line to play it out on the board, or drag any piece to try your own idea.</p>
          </section>

          <h2>Moves</h2>
          <ol className="movelist analysis-moves">
            {moves.map((m, i) => {
              const ev = evals[m.fenAfter]
              return (
                <li key={i} className={i === ply - 1 && !inVariation ? 'current' : i === ply - 1 ? 'branch' : ''}>
                  {(i === 0 || m.fenBefore.split(' ')[1] === 'w') && <span className="num">{moveNumberLabel(m.fenBefore)}</span>}
                  <button type="button" onClick={() => goMain(i + 1)}>
                    {m.san}
                    <MoveBadge rating={ratings[i]} />
                    {ev && <span className="move-eval">{formatScore(ev)}</span>}
                  </button>
                </li>
              )
            })}
            {h.Result && h.Result !== '*' && <li className="muted">{h.Result}</li>}
          </ol>

          <GameReview
            summary={summarise(mainMoves, ratings)}
            names={[h.White && h.White !== '?' ? h.White : 'White', h.Black && h.Black !== '?' ? h.Black : 'Black']}
            pending={ratings.filter((r) => !r).length}
          />

          <section className="masters">
            <h2>Master games from here</h2>
            {masters?.fen === fen ? (
              masters.state === 'loading' ? (
                <p className="muted small">Searching the Lichess masters database…</p>
              ) : masters.state === 'error' ? (
                <p className="small feedback bad">{masters.error}</p>
              ) : masters.games!.length === 0 ? (
                <p className="muted small">No master games reached this position.</p>
              ) : (
                <>
                  <p className="muted small">
                    {masters.total!.toLocaleString()} master game{masters.total === 1 ? '' : 's'} reached this position. Notable ones:
                  </p>
                  <GameList games={masters.games!} onPick={openMaster} />
                </>
              )
            ) : (
              <button type="button" onClick={findMasters}>
                Find master games with this position
              </button>
            )}
          </section>
        </aside>
      </div>
    </div>
  )
}
