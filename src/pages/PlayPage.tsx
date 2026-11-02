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

interface GameProps {
  side: Side
  openingIds: string[]
  skill: number
  continueWithEngine: boolean
  onSkill: (skill: number) => void
  onNew: () => void
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

function Game({ side, openingIds, skill, continueWithEngine, onSkill, onNew, onSetup }: GameProps) {
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

  const fen = moves.length ? moves[moves.length - 1].fen : START_FEN
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
    }
  }, [over])

  // When it's the user's turn in book but the repertoire has nothing here, the book is over.
  useEffect(() => {
    if (phase === 'book' && userTurn && moves.length > 0 && candidates.length === 0) leaveBook('you')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen, phase])

  // Analyse every position for the evaluation bar and the best-move hint.
  useEffect(() => {
    let live = true
    const t = setTimeout(() => {
      getEngine()
        .analyse(fen, 2)
        .then((lines) => live && setAnalysis({ fen, lines }))
        .catch(() => {})
    }, 250)
    return () => {
      live = false
      clearTimeout(t)
    }
  }, [fen])

  const current = analysis?.fen === fen ? analysis.lines : null
  const bestShown = showBest === fen && current

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
        if (misses === 0 && !revealed) setMistakes((n) => n + 1)
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

  function reveal() {
    if (!revealed && misses === 0) setMistakes((n) => n + 1)
    setRevealed(true)
    add({ who: 'note', tone: 'info', text: `Your prepared move${candidates.length > 1 ? 's are' : ' is'} ${candidates.map((c) => c.san).join(' or ')}.` })
  }

  const showHint = phase === 'book' && userTurn && (revealed || misses >= 2)
  const last = moves[moves.length - 1]

  return (
    <div className="page">
      <div className="session">
        <div className="board-col">
          <EvalBar line={current?.[0] ?? null} orientation={side} />
          <Board
            fen={fen}
            orientation={side}
            movable={phase !== 'over' && userTurn && !thinking ? side : null}
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
            {phase === 'book' && userTurn && candidates.length > 0 && (
              <button type="button" className="ghost" onClick={reveal} disabled={revealed}>
                Show my move
              </button>
            )}
            {userTurn && phase !== 'over' && (
              <button type="button" className="ghost" onClick={showBestMoves} disabled={!current?.length || showBest === fen}>
                {current ? 'Show best moves' : 'Analysing…'}
              </button>
            )}
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
          <CoachLog entries={log} />
          <ol className="movelist">
            {moves.map((m, i) => (
              <li key={i} className={i === moves.length - 1 ? 'current' : ''}>
                {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
                <button type="button" disabled className={m.inBook ? 'book' : ''}>
                  {m.san}
                </button>
              </li>
            ))}
          </ol>
          <div className="row">
            <button type="button" className="primary" onClick={onNew}>
              New game
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
