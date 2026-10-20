import { useCallback, useEffect, useRef, useState } from 'react'
import type { Line } from '../lib/repertoire'
import { START_FEN } from '../lib/repertoire'
import { explain, explainOpponent } from '../lib/describe'
import { replyDelay, usePace } from '../lib/settings'
import { play } from '../lib/sound'
import type { Side } from '../data/types'
import { Board, ARROW_HINT, type MoveInput } from './Board'
import { MoveList } from './MoveList'
import { CoachLog, PaceControl, type CoachEntry } from './Coach'

interface Props {
  line: Line
  side: Side
  /** Show the explanation of each move (learn mode). */
  explainMoves: boolean
  onComplete: (mistakes: number) => void
  header?: React.ReactNode
}

function moveLabel(line: Line, index: number): string {
  const m = line.moves[index]
  const [, turn, , , , full] = m.fenBefore.split(' ')
  return turn === 'w' ? `${full}. ${m.san}` : `${full}… ${m.san}`
}

export function LineQuiz({ line, side, explainMoves, onComplete, header }: Props) {
  const pace = usePace()
  const [played, setPlayed] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [missesHere, setMissesHere] = useState(0)
  const [log, setLog] = useState<CoachEntry[]>([
    { who: 'note', text: 'Play the moves of the line. Your opponent pauses after each move so you can read the note. Change the speed above.', tone: 'info' },
  ])
  const [flash, setFlash] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState(false)
  const finished = played >= line.moves.length
  const completeRef = useRef(onComplete)
  useEffect(() => {
    completeRef.current = onComplete
  })

  const fen = played === 0 ? START_FEN : line.moves[played - 1].fenAfter
  const next = line.moves[played]
  const last = played > 0 ? line.moves[played - 1] : null
  const opponentToMove = !finished && !next.isTrainee
  // The very first move of the line (White's, when you are Black) needs only a short pause.
  const delay = opponentToMove ? (played === 0 ? 500 : replyDelay(pace, log[log.length - 1]?.text)) : 0

  const playOpponent = useCallback(() => {
    if (finished || next.isTrainee) return
    const note = explainOpponent(next, last ?? undefined)
    if (explainMoves) setLog((l) => [...l, { who: 'opponent', label: moveLabel(line, played), text: note.text, auto: note.auto }])
    setPlayed((p) => p + 1)
  }, [finished, next, last, explainMoves, line, played])

  useEffect(() => {
    if (!opponentToMove) return
    const t = setTimeout(playOpponent, delay)
    return () => clearTimeout(t)
  }, [opponentToMove, playOpponent, delay])

  useEffect(() => {
    if (!finished) return
    if (mistakes === 0) setTimeout(() => play('success'), 250)
    completeRef.current(mistakes)
  }, [finished, mistakes])

  useEffect(() => {
    if (Object.keys(flash).length === 0) return
    const t = setTimeout(() => setFlash({}), 600)
    return () => clearTimeout(t)
  }, [flash])

  function onMove(move: MoveInput): boolean {
    if (!next?.isTrainee) return false
    if (move.from === next.from && move.to === next.to) {
      const { text, auto } = explain(line.moves, played)
      setLog((l) => [
        ...l,
        explainMoves
          ? { who: 'you', label: moveLabel(line, played), text, auto, tone: 'good' }
          : { who: 'you', label: moveLabel(line, played), text: 'Correct.', tone: 'good' },
      ])
      setPlayed(played + 1)
      setMissesHere(0)
      setRevealed(false)
      return true
    }
    if (missesHere === 0 && !revealed) setMistakes((m) => m + 1)
    setMissesHere((n) => n + 1)
    setFlash({ [move.to]: 'rgba(220, 50, 50, 0.6)' })
    setLog((l) => [
      ...l,
      {
        who: 'note',
        tone: 'bad',
        text: missesHere >= 1 ? 'Still not it. The arrow shows the move from the line.' : 'That is not the move in this line. Try again.',
      },
    ])
    return false
  }

  function reveal() {
    if (!revealed && missesHere === 0) setMistakes((m) => m + 1)
    setRevealed(true)
    setLog((l) => [...l, { who: 'note', tone: 'info', text: `The move is ${next.san}. Play it on the board.` }])
  }

  const showArrow = !finished && next.isTrainee && (revealed || missesHere >= 2)

  return (
    <div className="session">
      <div className="board-col">
        <Board
          fen={fen}
          orientation={side}
          movable={!finished && next.isTrainee ? side : null}
          onMove={onMove}
          lastMove={last ? { from: last.from, to: last.to } : null}
          arrows={showArrow ? [{ from: next.from, to: next.to, color: ARROW_HINT }] : []}
          marks={flash}
        />
        <div className="nav">
          {!finished && next.isTrainee && (
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
          {finished ? 'Line complete.' : next.isTrainee ? 'Your move.' : 'Opponent is about to reply…'}
          {' '}Mistakes: {mistakes}
        </p>
        {opponentToMove && played > 0 && <div className="countdown" key={played} style={{ animationDuration: `${delay}ms` }} />}
        <CoachLog entries={log} />
        <MoveList moves={line.moves} played={played} hideFuture />
      </aside>
    </div>
  )
}
