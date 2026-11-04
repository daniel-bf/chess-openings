import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import { openings, openingById, lineById } from '../data/openings'
import type { Side } from '../data/types'
import { bookMoves, buildBook, START_FEN, type Book, type BookMove } from '../lib/repertoire'
import { getEngine, type EngineLine } from '../lib/engine'
import { explainOpponent } from '../lib/describe'
import { replyDelay, usePace } from '../lib/settings'
import { CoachLog, PaceControl, type CoachEntry } from '../components/Coach'
import { Board, ARROW_HINT, ARROW_BEST, ARROW_SECOND, type MoveInput } from '../components/Board'
import { go } from '../router'
import { EvalBar, formatScore } from '../components/EvalBar'
import { recordResult } from '../lib/progress'
import { play } from '../lib/sound'

const SETTINGS_KEY = 'chess-trainer:play:v1'

// Stockfish "Skill Level" values (0 to 20) behind each level.
const LEVELS = [
  { skill: 0, label: 'Level 1: Beginner' },
  { skill: 3, label: 'Level 2: Novice' },
  { skill: 6, label: 'Level 3: Casual' },
  { skill: 9, label: 'Level 4: Club' },
  { skill: 12, label: 'Level 5: Strong club' },
  { skill: 15, label: 'Level 6: Expert' },
  { skill: 18, label: 'Level 7: Master' },
  { skill: 20, label: 'Level 8: Maximum' },
]

/** The level closest to a saved skill value (older versions used other steps). */
function nearestSkill(skill: number): number {
  return LEVELS.reduce((best, l) => (Math.abs(l.skill - skill) < Math.abs(best - skill) ? l.skill : best), LEVELS[0].skill)
}

function LevelSelect({ value, onChange }: { value: number; onChange: (skill: number) => void }) {
  return (
    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
      {LEVELS.map((l) => (
        <option key={l.skill} value={l.skill}>
          {l.label}
        </option>
      ))}
    </select>
  )
}

interface Settings {
  selected: string[]
  color: Side | 'random'
  skill: number
  continueWithEngine: boolean
}

function loadSettings(preselect: string | null): Settings {
  let saved: Partial<Settings> = {}
  try {
    saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? '{}')
  } catch {
    // Use defaults.
  }
  const settings: Settings = {
    selected: saved.selected ?? openings.map((o) => o.id),
    color: saved.color ?? 'random',
    skill: nearestSkill(saved.skill ?? 6),
    continueWithEngine: saved.continueWithEngine ?? true,
  }
  if (preselect) {
    const ids = preselect.split(',').filter((id) => openingById.has(id))
    if (ids.length) {
      settings.selected = ids
      settings.color = openingById.get(ids[0])!.side
    }
  }
  return settings
}

export function PlayPage({ preselect }: { preselect: string | null }) {
  const [settings, setSettings] = useState<Settings>(() => loadSettings(preselect))
  const [game, setGame] = useState<{ side: Side; key: number } | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
    } catch {
      // Not critical.
    }
  }, [settings])

  const sidesAvailable = (['white', 'black'] as Side[]).filter((s) =>
    settings.selected.some((id) => openingById.get(id)?.side === s),
  )

  function start() {
    let side: Side
    if (settings.color === 'random' || !sidesAvailable.includes(settings.color)) {
      side = sidesAvailable[Math.floor(Math.random() * sidesAvailable.length)]
    } else side = settings.color
    setGame({ side, key: Date.now() })
  }

  if (game) {
    return (
      <Game
        key={game.key}
        side={game.side}
        openingIds={settings.selected.filter((id) => openingById.get(id)?.side === game.side)}
        skill={settings.skill}
        continueWithEngine={settings.continueWithEngine}
        onSkill={(skill) => setSettings((s) => ({ ...s, skill }))}
        onNew={start}
        onReset={() => setGame({ side: game.side, key: Date.now() })}
        onSetup={() => setGame(null)}
      />
    )
  }

  const toggle = (id: string) =>
    setSettings((s) => ({ ...s, selected: s.selected.includes(id) ? s.selected.filter((x) => x !== id) : [...s.selected, id] }))

  return (
    <div className="page narrow">
      <button type="button" className="link" onClick={() => go('/')}>
        ← All openings
      </button>
      <h1>Play mode</h1>
      <p className="lead">
        Pick the openings you want to be tested on. The computer plays random branches from your chosen lines, and you have to answer
        with the prepared moves. When the prepared line ends you can keep playing against Stockfish.
      </p>

      {(['white', 'black'] as Side[]).map((side) => (
        <fieldset key={side} className="pick">
          <legend>
            Openings as {side}
            <button
              type="button"
              className="link small"
              onClick={() =>
                setSettings((s) => {
                  const ids = openings.filter((o) => o.side === side).map((o) => o.id)
                  const all = ids.every((id) => s.selected.includes(id))
                  return { ...s, selected: all ? s.selected.filter((id) => !ids.includes(id)) : [...new Set([...s.selected, ...ids])] }
                })
              }
            >
              all / none
            </button>
          </legend>
          {openings
            .filter((o) => o.side === side)
            .map((o) => (
              <label key={o.id} className="check">
                <input type="checkbox" checked={settings.selected.includes(o.id)} onChange={() => toggle(o.id)} />
                {o.name} <span className="muted small">({o.lines.length} lines)</span>
              </label>
            ))}
        </fieldset>
      ))}

      <div className="options">
        <label>
          Play as
          <select value={settings.color} onChange={(e) => setSettings({ ...settings, color: e.target.value as Settings['color'] })}>
            <option value="random">Random</option>
            <option value="white" disabled={!sidesAvailable.includes('white')}>
              White
            </option>
            <option value="black" disabled={!sidesAvailable.includes('black')}>
              Black
            </option>
          </select>
        </label>
        <label>
          Computer strength after the opening
          <LevelSelect value={settings.skill} onChange={(skill) => setSettings({ ...settings, skill })} />
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={settings.continueWithEngine}
            onChange={(e) => setSettings({ ...settings, continueWithEngine: e.target.checked })}
          />
          Keep playing against the computer when the prepared line ends
        </label>
      </div>

      <button type="button" className="primary big" disabled={sidesAvailable.length === 0} onClick={start}>
        Start game
      </button>
    </div>
  )
}

interface PlayedMove {
  san: string
  from: string
  to: string
  fen: string
  inBook: boolean
  comment?: string
  lineIds?: string[]
}

type Phase = 'book' | 'engine' | 'over'

/** A position in the opening phase where the user did not find a prepared move first time. */
interface OpeningMistake {
  ply: number
  /** The wrong move tried first, or null when the user asked to see the move. */
  played: string | null
  expected: string[]
  lineIds: string[]
}

function buildPgn(moves: PlayedMove[], side: Side, result: string): string {
  const chess = new Chess()
  const today = new Date()
  const date = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`
  chess.setHeader('Event', 'Opening Trainer: Play mode')
  chess.setHeader('Date', date)
  chess.setHeader('White', side === 'white' ? 'You' : 'Computer')
  chess.setHeader('Black', side === 'black' ? 'You' : 'Computer')
  chess.setHeader('Result', result)
  for (const m of moves) chess.move(m.san)
  return chess.pgn()
}

/** PGN result tag for a finished (or abandoned) game. */
function resultTag(chess: Chess, side: Side, resigned: boolean): string {
  if (resigned) return side === 'white' ? '0-1' : '1-0'
  if (chess.isCheckmate()) return chess.turn() === 'w' ? '0-1' : '1-0'
  if (chess.isDraw()) return '1/2-1/2'
  return '*'
}

interface GameProps {
  side: Side
  openingIds: string[]
  skill: number
  continueWithEngine: boolean
  onSkill: (skill: number) => void
  onNew: () => void
  onReset: () => void
  onSetup: () => void
}

function pickWeighted(moves: BookMove[]): BookMove {
  const total = moves.reduce((n, m) => n + m.lineIds.length, 0)
  let r = Math.random() * total
  for (const m of moves) {
    r -= m.lineIds.length
    if (r < 0) return m
  }
  return moves[moves.length - 1]
}

function gameOverText(chess: Chess, side: Side): string | null {
  if (chess.isCheckmate()) return (chess.turn() === 'w') === (side === 'white') ? 'Checkmate. The computer wins.' : 'Checkmate. You win!'
  if (chess.isStalemate()) return 'Stalemate. Draw.'
  if (chess.isThreefoldRepetition()) return 'Draw by repetition.'
  if (chess.isInsufficientMaterial()) return 'Draw: not enough material to mate.'
  if (chess.isDraw()) return 'Draw.'
  return null
}

function Game({ side, openingIds, skill, continueWithEngine, onSkill, onNew, onReset, onSetup }: GameProps) {
  const pace = usePace()
  const book: Book = useMemo(() => buildBook(openingIds.flatMap((id) => openingById.get(id)!.lines)), [openingIds])
  const [moves, setMoves] = useState<PlayedMove[]>([])
  const [phase, setPhase] = useState<Phase>('book')
  const [log, setLog] = useState<CoachEntry[]>([
    {
      who: 'note',
      tone: 'info',
      text: side === 'white' ? 'You have White. Play the first move of one of your openings.' : 'You have Black. The computer opens.',
    },
  ])
  const [misses, setMisses] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [mistakes, setMistakes] = useState(0)
  const [flash, setFlash] = useState<Record<string, string>>({})
  const [thinking, setThinking] = useState(false)
  const busy = useRef(false)
  const [analysis, setAnalysis] = useState<{ fen: string; lines: EngineLine[] } | null>(null)
  const [showBest, setShowBest] = useState<string | null>(null)
  const [openingMistakes, setOpeningMistakes] = useState<OpeningMistake[]>([])
  const [resigned, setResigned] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [copied, setCopied] = useState(false)
  // Number of moves shown on the board while looking back at the game; null follows the game.
  const [view, setView] = useState<number | null>(null)
  const recorded = useRef(false)
  const [rescheduled, setRescheduled] = useState<string[]>([])

  const fen = moves.length ? moves[moves.length - 1].fen : START_FEN
  const viewing = view !== null && view < moves.length
  const shown = viewing ? view : moves.length
  const boardFen = shown === 0 ? START_FEN : moves[shown - 1].fen
  const orientation: Side = flipped ? (side === 'white' ? 'black' : 'white') : side
  const chess = useMemo(() => new Chess(fen), [fen])
  const turn: Side = chess.turn() === 'w' ? 'white' : 'black'
  const userTurn = turn === side
  const candidates = bookMoves(book, fen)
  const lastBook = [...moves].reverse().find((m) => m.inBook)
  const lineNames = (lastBook?.lineIds ?? []).map((id) => lineById.get(id)!.name)
  const over = gameOverText(chess, side)
  const computerBookTurn = phase === 'book' && !userTurn && !over && candidates.length > 0
  const delay = moves.length === 0 ? 500 : replyDelay(pace, log[log.length - 1]?.text)
  const add = (e: CoachEntry) => setLog((l) => [...l, e])
  const label = (ply: number, san: string) => (ply % 2 === 0 ? `${ply / 2 + 1}. ${san}` : `${(ply + 1) / 2}… ${san}`)

  function push(m: Omit<PlayedMove, 'fen'>, after: Chess) {
    setMoves((ms) => [...ms, { ...m, fen: after.fen() }])
  }

  function leaveBook(who: 'you' | 'computer') {
    const reason = who === 'computer' ? 'Your prepared line ends here.' : 'You reached the end of your prepared moves.'
    const summary = `${reason} Opening phase done with ${mistakes} mistake${mistakes === 1 ? '' : 's'}.`
    if (continueWithEngine) {
      setPhase('engine')
      add({ who: 'note', tone: 'good', text: `${summary} Now play on against the computer.` })
    } else {
      setPhase('over')
      add({ who: 'note', tone: 'good', text: summary })
    }
  }

  const playBookMove = useCallback(() => {
    if (!computerBookTurn) return
    const pick = pickWeighted(candidates)
    const after = new Chess(fen)
    const prev = moves[moves.length - 1]
    after.move(pick.san)
    const note = explainOpponent({ fenBefore: fen, from: pick.from, to: pick.to, san: pick.san, comment: pick.comment }, prev)
    add({ who: 'opponent', label: label(moves.length, pick.san), text: note.text, auto: note.auto })
    push({ san: pick.san, from: pick.from, to: pick.to, inBook: true, comment: pick.comment, lineIds: pick.lineIds }, after)
    if (bookMoves(book, after.fen()).length === 0) leaveBook('computer')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerBookTurn, fen])

  // Computer's move.
  useEffect(() => {
    if (phase === 'over' || userTurn || busy.current || over) return
    if (phase === 'book') {
      if (candidates.length === 0) {
        leaveBook('computer')
        return
      }
      const t = setTimeout(playBookMove, delay)
      return () => clearTimeout(t)
    }
    busy.current = true
    setThinking(true)
    getEngine()
      .bestMove(fen, skill)
      .then((uci) => {
        const after = new Chess(fen)
        const mv = after.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
        push({ san: mv.san, from: mv.from, to: mv.to, inBook: false }, after)
      })
      .catch(() => add({ who: 'note', tone: 'bad', text: 'The computer engine failed to load.' }))
      .finally(() => {
        busy.current = false
        setThinking(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen, phase, userTurn, delay])


  // Game end.
  useEffect(() => {
    if (over) {
      setPhase('over')
      add({ who: 'note', tone: 'info', text: over })
      if (over.endsWith('You win!')) setTimeout(() => play('success'), 300)
    }
  }, [over])

  // When it's the user's turn in book but the repertoire has nothing here, the book is over.
  useEffect(() => {
    if (phase === 'book' && userTurn && moves.length > 0 && candidates.length === 0) leaveBook('you')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen, phase])

  // Analyse the position on the board for the evaluation bar and the best-move hint.
  useEffect(() => {
    let live = true
    const t = setTimeout(() => {
      getEngine()
        .analyse(boardFen, 2)
        .then((lines) => live && setAnalysis({ fen: boardFen, lines }))
        .catch(() => {})
    }, 250)
    return () => {
      live = false
      clearTimeout(t)
    }
  }, [boardFen])

  const shownAnalysis = analysis?.fen === boardFen ? analysis.lines : null
  const current = !viewing ? shownAnalysis : null
  const bestShown = !viewing && showBest === fen && current

  // Once the opening phase is over, missed lines go back to the start of the review schedule.
  useEffect(() => {
    if (phase === 'book' || recorded.current) return
    recorded.current = true
    const ids = new Set<string>()
    for (const m of openingMistakes) for (const id of mistakeLines(m, moves, lastBook?.lineIds)) ids.add(id)
    for (const id of ids) recordResult(id, 1)
    setRescheduled([...ids])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  // Arrow keys step through the game.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA')) return
      if (e.key === 'ArrowLeft') setView((v) => Math.max(0, (v ?? moves.length) - 1))
      else if (e.key === 'ArrowRight') setView((v) => (v === null || v + 1 >= moves.length ? null : v + 1))
      else if (e.key === 'ArrowUp') setView(0)
      else if (e.key === 'ArrowDown') setView(null)
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [moves.length])

  function sanOf(uci: string): string {
    try {
      return new Chess(fen).move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] }).san
    } catch {
      return uci
    }
  }

  function showBestMoves() {
    if (!current?.length) return
    setShowBest(fen)
    const [first, second] = current
    const text = `Stockfish's best move is ${sanOf(first.uci)} (${formatScore(first)})${second ? `, then ${sanOf(second.uci)} (${formatScore(second)})` : ''}.`
    add({ who: 'note', tone: 'info', text })
  }

  useEffect(() => {
    if (Object.keys(flash).length === 0) return
    const t = setTimeout(() => setFlash({}), 600)
    return () => clearTimeout(t)
  }, [flash])

  function onMove(input: MoveInput): boolean {
    const after = new Chess(fen)
    if (phase === 'book') {
      const hit = candidates.find((c) => c.from === input.from && c.to === input.to)
      if (!hit) {
        if (misses === 0 && !revealed) {
          setMistakes((n) => n + 1)
          let played: string | null = null
          try {
            played = new Chess(fen).move(input).san
          } catch {
            // Keep it unnamed.
          }
          noteMistake(played)
        }
        setMisses((n) => n + 1)
        setFlash({ [input.to]: 'rgba(220, 50, 50, 0.6)' })
        add({
          who: 'note',
          tone: 'bad',
          text: misses >= 1 ? 'Still not your prepared move. Follow the arrow.' : 'That move is not in your chosen openings. Try again.',
        })
        return false
      }
      const note = explainOpponent({ fenBefore: fen, from: hit.from, to: hit.to, san: hit.san, comment: hit.comment }, moves[moves.length - 1])
      after.move(hit.san)
      add({ who: 'you', tone: 'good', label: label(moves.length, hit.san), text: note.text.replace('It attacks your', 'It attacks the').replace(' and your ', ' and the '), auto: note.auto })
      push({ san: hit.san, from: hit.from, to: hit.to, inBook: true, comment: hit.comment, lineIds: hit.lineIds }, after)
      setMisses(0)
      setRevealed(false)
      return true
    }
    if (phase === 'engine') {
      try {
        const mv = after.move(input)
        push({ san: mv.san, from: mv.from, to: mv.to, inBook: false }, after)
        return true
      } catch {
        return false
      }
    }
    return false
  }

  function noteMistake(played: string | null) {
    const lineIds = [...new Set(candidates.flatMap((c) => c.lineIds))]
    setOpeningMistakes((ms) => [...ms, { ply: moves.length, played, expected: candidates.map((c) => c.san), lineIds }])
  }

  function reveal() {
    if (!revealed && misses === 0) {
      setMistakes((n) => n + 1)
      noteMistake(null)
    }
    setRevealed(true)
    add({ who: 'note', tone: 'info', text: `Your prepared move${candidates.length > 1 ? 's are' : ' is'} ${candidates.map((c) => c.san).join(' or ')}.` })
  }

  // Take back the last move pair. Only moves played against the computer can be taken back.
  const takebackCount = (() => {
    if (thinking || resigned || moves.length === 0) return 0
    if (phase !== 'engine' && !(phase === 'over' && over && !moves[moves.length - 1].inBook)) return 0
    const lastSide: Side = new Chess(moves[moves.length - 1].fen).turn() === 'w' ? 'black' : 'white'
    const n = lastSide === side ? 1 : 2
    if (moves.length < n || moves.slice(-n).some((m) => m.inBook)) return 0
    return n
  })()

  function takeback() {
    if (!takebackCount) return
    setMoves((ms) => ms.slice(0, ms.length - takebackCount))
    setView(null)
    setPhase('engine')
    add({ who: 'note', tone: 'info', text: 'Move taken back.' })
  }

  function resign() {
    setResigned(true)
    setPhase('over')
    setView(null)
    add({ who: 'note', tone: 'bad', text: 'You resigned.' })
  }

  const pgn = () => buildPgn(moves, side, resultTag(chess, side, resigned))

  function copyPgn() {
    const text = pgn()
    const done = () => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
    try {
      navigator.clipboard.writeText(text).then(done, () => window.prompt('Copy the PGN:', text))
    } catch {
      window.prompt('Copy the PGN:', text)
    }
  }

  const showHint = !viewing && phase === 'book' && userTurn && (revealed || misses >= 2)
  const last = moves[shown - 1]
  const resultText = resigned ? 'You resigned.' : over ?? (phase === 'over' ? 'Opening finished.' : null)
  const outcome: 'win' | 'loss' | 'draw' | null = resigned
    ? 'loss'
    : chess.isCheckmate()
      ? (chess.turn() === 'w') === (side === 'white')
        ? 'loss'
        : 'win'
      : chess.isDraw()
        ? 'draw'
        : null
  const banner = outcome && {
    title: resigned
      ? 'You resigned'
      : chess.isCheckmate()
        ? outcome === 'win'
          ? 'Checkmate! You win'
          : 'Checkmate. The computer wins'
        : 'Draw',
    detail: resigned ? 'The computer wins.' : chess.isCheckmate() ? `${last?.san ?? ''} ends the game.` : (over ?? '').replace(/^Draw[.:]?\s*/, ''),
  }

  return (
    <div className="page">
      <div className="session">
        <div className="board-col">
          <EvalBar line={shownAnalysis?.[0] ?? null} orientation={orientation} />
          {banner && !viewing && (
            <div className={`game-result ${outcome}`} role="status">
              <strong>{banner.title}</strong>
              {banner.detail && <span>{banner.detail}</span>}
            </div>
          )}
          <Board
            fen={boardFen}
            orientation={orientation}
            movable={phase !== 'over' && userTurn && !thinking && !viewing ? side : null}
            onMove={onMove}
            lastMove={last ? { from: last.from, to: last.to } : null}
            arrows={[
              ...(showHint ? candidates.map((c) => ({ from: c.from, to: c.to, color: ARROW_HINT })) : []),
              ...(bestShown
                ? current.slice(0, 2).map((l, i) => ({ from: l.uci.slice(0, 2), to: l.uci.slice(2, 4), color: i === 0 ? ARROW_BEST : ARROW_SECOND }))
                : []),
            ]}
            marks={flash}
          />
          <div className="nav">
            <button type="button" onClick={() => setView(0)} disabled={shown === 0} aria-label="Start of the game">
              ⏮
            </button>
            <button type="button" onClick={() => setView(Math.max(0, shown - 1))} disabled={shown === 0} aria-label="Previous move">
              ◀
            </button>
            <button type="button" onClick={() => setView(shown + 1 >= moves.length ? null : shown + 1)} disabled={!viewing} aria-label="Next move">
              ▶
            </button>
            <button type="button" onClick={() => setView(null)} disabled={!viewing} aria-label="Current position">
              ⏭
            </button>
            <button type="button" className="ghost" onClick={() => setFlipped((f) => !f)} aria-label="Flip board" title="Flip board">
              ⇅
            </button>
          </div>
          <div className="nav">
            {viewing && (
              <button type="button" className="primary" onClick={() => setView(null)}>
                Back to the game
              </button>
            )}
            {!viewing && phase === 'book' && userTurn && candidates.length > 0 && (
              <button type="button" className="ghost" onClick={reveal} disabled={revealed}>
                Show my move
              </button>
            )}
            {!viewing && userTurn && phase !== 'over' && (
              <button type="button" className="ghost" onClick={showBestMoves} disabled={!current?.length || showBest === fen}>
                {current ? 'Show best moves' : 'Analysing…'}
              </button>
            )}
          </div>
          <div className="nav game-actions">
            <button type="button" className="primary" onClick={onNew}>
              New game
            </button>
            <button type="button" onClick={onReset} disabled={moves.length === 0} title="Start this game again from the first move">
              Reset
            </button>
            <button type="button" onClick={takeback} disabled={takebackCount === 0} title="Take back your last move against the computer">
              Take back
            </button>
            <button type="button" onClick={resign} disabled={phase !== 'engine' || !!over}>
              Resign
            </button>
            <button type="button" className="ghost" onClick={copyPgn} disabled={moves.length === 0}>
              {copied ? 'Copied' : 'Copy PGN'}
            </button>
          </div>
        </div>
        <aside className="panel">
          <div className="session-head">
            <button type="button" className="link" onClick={onSetup}>
              ← Choose openings
            </button>
            <h1>Play mode</h1>
            <p className="muted">
              You play {side} ·{' '}
              {phase === 'book' ? 'Opening phase' : phase === 'engine' ? 'Playing on against the computer' : 'Game finished'}
            </p>
            {viewing && (
              <p className="small viewing-note">
                Looking at the position after move {Math.ceil(shown / 2) || 0}
                {shown === 0 ? ' (start)' : shown % 2 === 1 ? ' (White)' : ' (Black)'}.
              </p>
            )}
            {lineNames.length > 0 && (
              <p className="small">
                <span className="muted">{lineNames.length === 1 ? 'Line: ' : 'Possible lines: '}</span>
                {lineNames.slice(0, 4).join(' · ')}
                {lineNames.length > 4 && ` +${lineNames.length - 4} more`}
              </p>
            )}
          </div>
          <PaceControl />
          <label className="level small">
            Computer level after the opening{' '}
            <LevelSelect value={skill} onChange={onSkill} />
          </label>
          <p className="muted small status-line">
            {thinking ? 'Computer is thinking…' : computerBookTurn ? 'The computer is about to reply…' : userTurn && phase !== 'over' ? 'Your move.' : ''} Opening mistakes: {mistakes}
          </p>
          {computerBookTurn && moves.length > 0 && <div className="countdown" key={moves.length} style={{ animationDuration: `${delay}ms` }} />}
          {phase === 'over' && (
            <OpeningReport
              result={resultText}
              mistakes={openingMistakes}
              moves={moves}
              reached={lastBook?.lineIds}
              rescheduled={rescheduled}
              onView={(ply) => setView(ply)}
            />
          )}
          <CoachLog entries={log} />
          <ol className="movelist">
            {moves.map((m, i) => (
              <li key={i} className={i === shown - 1 ? 'current' : ''}>
                {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
                <button
                  type="button"
                  className={m.inBook ? 'book' : ''}
                  onClick={() => setView(i + 1 >= moves.length ? null : i + 1)}
                  title={m.inBook ? 'Prepared move' : undefined}
                >
                  {m.san}
                </button>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  )
}

/** The lines a mistake belongs to: those through the move finally played there, narrowed to the lines the game reached. */
function mistakeLines(m: OpeningMistake, moves: PlayedMove[], reached: string[] = []): string[] {
  const followed = moves[m.ply]?.lineIds ?? m.lineIds
  const narrowed = followed.filter((id) => reached.includes(id))
  return narrowed.length ? narrowed : followed
}

function moveLabel(ply: number): string {
  return ply % 2 === 0 ? `${ply / 2 + 1}.` : `${(ply + 1) / 2}…`
}

interface ReportProps {
  result: string | null
  mistakes: OpeningMistake[]
  moves: PlayedMove[]
  reached?: string[]
  rescheduled: string[]
  onView: (ply: number) => void
}

/** End-of-game summary of the opening phase: each miss, the prepared move and the line to study. */
function OpeningReport({ result, mistakes, moves, reached, rescheduled, onView }: ReportProps) {
  const bookPlies = moves.filter((m) => m.inBook).length
  const clean = mistakes.length === 0
  return (
    <section className={`report ${clean ? 'good' : 'bad'}`}>
      {result && <p className="report-result">{result}</p>}
      <h2>Opening report</h2>
      {clean ? (
        <p>
          No opening mistakes. You found every prepared move{bookPlies ? ` across ${bookPlies} moves of theory` : ''}.
        </p>
      ) : (
        <>
          <p>
            {mistakes.length} opening mistake{mistakes.length === 1 ? '' : 's'}:
          </p>
          <ul className="report-list">
            {mistakes.map((m, i) => {
              const ids = mistakeLines(m, moves, reached)
              const names = [...new Set(ids.map((id) => lineById.get(id)!.name))]
              // Name the line only when it changes from the item above.
              const sameAsAbove = i > 0 && mistakeLines(mistakes[i - 1], moves, reached).join() === ids.join()
              const learnId = sameAsAbove ? undefined : ids[0]
              return (
                <li key={m.ply}>
                  <button type="button" className="link" onClick={() => onView(m.ply)}>
                    {moveLabel(m.ply)}
                  </button>{' '}
                  {m.played ? (
                    <>
                      You played <strong>{m.played}</strong>, prepared {m.expected.length > 1 ? 'moves are' : 'move is'}{' '}
                    </>
                  ) : (
                    <>You asked for the move: </>
                  )}
                  <strong>{m.expected.join(' or ')}</strong>.
                  {!sameAsAbove && (
                    <span className="muted small">
                      {' '}
                      {names.slice(0, 2).join(' · ')}
                      {names.length > 2 && ` +${names.length - 2} more`}
                    </span>
                  )}{' '}
                  {learnId && (
                    <button type="button" className="link small" onClick={() => go(`/learn/${learnId}`)}>
                      Learn this line
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
          {rescheduled.length > 0 && (
            <p className="small">
              {rescheduled.length === 1 ? 'This line is' : `These ${rescheduled.length} lines are`} back in your Review queue for tomorrow.
            </p>
          )}
        </>
      )}
    </section>
  )
}
