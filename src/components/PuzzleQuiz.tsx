import { useEffect, useMemo, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import { replyDelay, usePace } from '../lib/settings'
import { play } from '../lib/sound'
import { moveLabel, playSans, type Puzzle } from '../lib/puzzles'
import { Board, ARROW_HINT, type MoveInput } from './Board'
import { CoachLog, PaceControl, type CoachEntry } from './Coach'

interface Props {
  puzzle: Puzzle
  onComplete: (mistakes: number) => void
  header?: React.ReactNode
}

/**
 * The opponent leaves the line with a mistake and you have to punish it.
 * The setup moves are shown instantly; the mistake is played after a short pause.
 */
export function PuzzleQuiz({ puzzle, onComplete, header }: Props) {
  const pace = usePace()
  const setup = useMemo(() => playSans(puzzle.setup), [puzzle])
  const startFen = setup.length ? setup[setup.length - 1].fenAfter : undefined
  // Mistake plus the solution. `alt` replaces the solution when you find another good first move.
  const [alt, setAlt] = useState<string | null>(null)
  const after = useMemo(() => {
    const seq = [puzzle.mistake, ...(alt ? [alt] : puzzle.solution)]
    return playSans(seq, startFen)
  }, [puzzle, startFen, alt])
  // How many moves after the setup are on the board (0 = before the mistake).
  const [played, setPlayed] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [misses, setMisses] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [flash, setFlash] = useState<Record<string, string>>({})
  const [log, setLog] = useState<CoachEntry[]>([
    {
      who: 'note',
      tone: 'info',
      text: puzzle.bookSan
        ? `You know this line. Watch what your opponent plays instead of ${puzzle.bookSan}.`
        : 'Your opponent is about to make a mistake. Find the move that punishes it.',
    },
  ])
  const all = [...setup, ...after]
  const finished = played >= after.length
  const next = after[played]
  const userToMove = !finished && played % 2 === 1
  const fen = played === 0 ? (startFen ?? all[0].fenBefore) : after[played - 1].fenAfter
  const last = played === 0 ? setup[setup.length - 1] : after[played - 1]
  const delay = played === 0 ? 1100 : replyDelay(pace, log[log.length - 1]?.text)

  const completeRef = useRef(onComplete)
  useEffect(() => {
    completeRef.current = onComplete
  })

  // The opponent's moves: first the mistake, then the defences in the solution.
  useEffect(() => {
    if (finished || userToMove) return
    const t = setTimeout(() => {
      const mv = after[played]
      const text =
        played === 0
          ? `${puzzle.bookSan ? `Out of the book! Instead of ${puzzle.bookSan}, your opponent plays ${mv.san}.` : `Your opponent plays ${mv.san}.`} It is a mistake. How do you punish it?`
          : `Your opponent replies ${mv.san}. Keep going.`
      setLog((l) => [...l, { who: 'opponent', label: moveLabel(mv.fenBefore, mv.san), text, tone: played === 0 ? 'bad' : undefined }])
      setPlayed((p) => p + 1)
    }, delay)
    return () => clearTimeout(t)
  }, [played, finished, userToMove, after, delay, puzzle.bookSan])

  useEffect(() => {
    if (!finished) return
    setLog((l) => [...l, { who: 'note', tone: mistakes === 0 ? 'good' : 'info', text: puzzle.note }])
    if (mistakes === 0) setTimeout(() => play('success'), 250)
    // Leave the final position on the board for a moment.
    const t = setTimeout(() => completeRef.current(mistakes), 1600)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished])

  useEffect(() => {
    if (Object.keys(flash).length === 0) return
    const t = setTimeout(() => setFlash({}), 600)
    return () => clearTimeout(t)
  }, [flash])

  function onMove(input: MoveInput): boolean {
    if (!userToMove) return false
    const san = sanOf(fen, input)
    const good = san === next.san || (played === 1 && puzzle.acceptFirst.includes(san ?? ''))
    if (good && san) {
      if (san !== next.san) {
        // Another strong first move: the prepared continuation no longer applies.
        setAlt(san)
        setLog((l) => [...l, { who: 'you', tone: 'good', label: moveLabel(fen, san), text: `That works too. The engine's main line was ${puzzle.solution.join(' ')}.` }])
      } else {
        setLog((l) => [...l, { who: 'you', tone: 'good', label: moveLabel(fen, san), text: played === 1 ? 'That punishes it.' : 'Correct.' }])
      }
      setPlayed(played + 1)
      setMisses(0)
      setRevealed(false)
      return true
    }
    if (misses === 0 && !revealed) setMistakes((m) => m + 1)
    setMisses((n) => n + 1)
    setFlash({ [input.to]: 'rgba(220, 50, 50, 0.6)' })
    setLog((l) => [
      ...l,
      { who: 'note', tone: 'bad', text: misses >= 1 ? 'Still not it. The arrow shows the punishment.' : 'That lets your opponent off the hook. Try again.' },
    ])
    return false
  }

  function reveal() {
    if (!revealed && misses === 0) setMistakes((m) => m + 1)
    setRevealed(true)
    setLog((l) => [...l, { who: 'note', tone: 'info', text: `The move is ${next.san}. Play it on the board.` }])
  }

  const showArrow = userToMove && (revealed || misses >= 2)

  return (
    <div className="session">
      <div className="board-col">
        <Board
          fen={fen}
          orientation={puzzle.side}
          movable={userToMove ? puzzle.side : null}
          onMove={onMove}
          lastMove={last ? { from: last.from, to: last.to } : null}
          arrows={showArrow ? [{ from: next.from, to: next.to, color: ARROW_HINT }] : []}
          marks={flash}
        />
        <div className="nav">
          {userToMove && (
            <button type="button" className="ghost" onClick={reveal} disabled={revealed}>
              Show me the move
            </button>
          )}
        </div>
      </div>
      <aside className="panel">
        {header}
        <PaceControl />
        <p className="muted small status-line">
          {finished ? 'Punished.' : userToMove ? 'Your move.' : 'Opponent is about to move…'} Mistakes: {mistakes}
        </p>
        {!userToMove && !finished && <div className="countdown" key={played} style={{ animationDuration: `${delay}ms` }} />}
        <CoachLog entries={log} />
        <ol className="movelist">
          {all.slice(0, setup.length + played).map((m, i) => (
            <li key={i} className={i === setup.length + played - 1 ? 'current' : ''}>
              {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
              <button type="button" disabled className={i < setup.length ? 'book' : ''}>
                {m.san}
              </button>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  )
}

function sanOf(fen: string, input: MoveInput): string | null {
  try {
    return new Chess(fen).move(input).san
  } catch {
    return null
  }
}
