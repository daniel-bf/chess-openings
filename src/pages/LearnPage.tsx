import { useCallback, useEffect, useState } from 'react'
import { lineById, openingById } from '../data/openings'
import { START_FEN } from '../lib/repertoire'
import { explain } from '../lib/describe'
import { formatDue, recordResult, type LineProgress } from '../lib/progress'
import { Board, ARROW_NEXT } from '../components/Board'
import { MoveList } from '../components/MoveList'
import { LineQuiz } from '../components/LineQuiz'
import { go } from '../router'
import { NotFound } from './OpeningPage'
import { Plan } from '../components/Plan'

type Phase = 'watch' | 'try' | 'done'

export function LearnPage({ lineId }: { lineId: string }) {
  const line = lineById.get(lineId)
  const opening = line && openingById.get(line.openingId)
  const [phase, setPhase] = useState<Phase>('watch')
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState<{ mistakes: number; progress: LineProgress } | null>(null)

  const onComplete = useCallback(
    (mistakes: number) => {
      setResult({ mistakes, progress: recordResult(lineId, mistakes) })
      setPhase('done')
    },
    [lineId],
  )

  if (!line || !opening) return <NotFound />
  const index = opening.lines.indexOf(line)
  const nextLine = opening.lines[index + 1]

  const header = (
    <div className="session-head">
      <button type="button" className="link" onClick={() => go(`/opening/${opening.id}`)}>
        ← {opening.name}
      </button>
      <h1>{line.name}</h1>
      <div className="steps">
        <span className={phase === 'watch' ? 'on' : 'past'}>1. Watch and read</span>
        <span className={phase === 'try' ? 'on' : phase === 'done' ? 'past' : ''}>2. Play it yourself</span>
      </div>
    </div>
  )

  if (phase === 'watch') {
    return <Watch key={lineId} lineId={lineId} header={header} onReady={() => setPhase('try')} />
  }

  if (phase === 'try') {
    return (
      <div className="page">
        <LineQuiz key={`${lineId}-${attempt}`} line={line} side={opening.side} explainMoves onComplete={onComplete} header={<>{header}<Plan lineId={lineId} compact /></>} />
      </div>
    )
  }

  const clean = result?.mistakes === 0
  return (
    <div className="page narrow">
      {header}
      <div className={`result ${clean ? 'good' : 'bad'}`}>
        <h2>{clean ? 'Perfect. Line learned!' : `Done with ${result?.mistakes} mistake${result?.mistakes === 1 ? '' : 's'}`}</h2>
        <p>
          {clean
            ? 'This line will come back for review'
            : 'Mistakes reset the review schedule, so this line will come back soon. Next review'}{' '}
          {result && formatDue(result.progress.due)}.
        </p>
      </div>
      <Plan lineId={lineId} title="Why this line works" />
      <div className="row">
        <button
          type="button"
          onClick={() => {
            setAttempt((a) => a + 1)
            setPhase('try')
          }}
        >
          Play it again
        </button>
        <button type="button" className="ghost" onClick={() => setPhase('watch')}>
          Watch again
        </button>
        {nextLine ? (
          <button type="button" className="primary" onClick={() => go(`/learn/${nextLine.id}`)}>
            Next line: {nextLine.name}
          </button>
        ) : (
          <button type="button" className="primary" onClick={() => go(`/opening/${opening.id}`)}>
            Back to {opening.name}
          </button>
        )}
      </div>
    </div>
  )
}

function Watch({ lineId, header, onReady }: { lineId: string; header: React.ReactNode; onReady: () => void }) {
  const line = lineById.get(lineId)!
  const opening = openingById.get(line.openingId)!
  const [played, setPlayed] = useState(0)
  const total = line.moves.length

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') setPlayed((p) => Math.min(p + 1, total))
      if (e.key === 'ArrowLeft') setPlayed((p) => Math.max(p - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  const fen = played === 0 ? START_FEN : line.moves[played - 1].fenAfter
  const last = played > 0 ? line.moves[played - 1] : null
  const next = line.moves[played]
  const note = last ? explain(line.moves, played - 1) : null

  return (
    <div className="page">
      <div className="session">
        <div className="board-col">
          <Board
            fen={fen}
            orientation={opening.side}
            movable={null}
            lastMove={last ? { from: last.from, to: last.to } : null}
            arrows={next ? [{ from: next.from, to: next.to, color: ARROW_NEXT }] : []}
          />
          <div className="nav">
            <button type="button" onClick={() => setPlayed(0)} disabled={played === 0} aria-label="Start">
              ⏮
            </button>
            <button type="button" onClick={() => setPlayed(played - 1)} disabled={played === 0} aria-label="Previous move">
              ◀
            </button>
            <button type="button" className="primary" onClick={() => setPlayed(played + 1)} disabled={played === total} aria-label="Next move">
              ▶ Next
            </button>
            <button type="button" onClick={() => setPlayed(total)} disabled={played === total} aria-label="End">
              ⏭
            </button>
          </div>
        </div>
        <aside className="panel">
          {header}
          <div className="feedback info">
            {note && last ? (
              <p className={note.auto ? 'auto' : ''}>
                <strong>{last.san}</strong> {note.text}
              </p>
            ) : (
              <>
              <Plan lineId={lineId} />
              <p>
                Step through the line with <strong>Next</strong> or the arrow keys. The orange arrow shows the coming move. You play{' '}
                <strong>{opening.side}</strong>.
              </p>
              </>
            )}
          </div>
          <MoveList moves={line.moves} played={played} onJump={setPlayed} />
          <button type="button" className={played === total ? 'primary wide' : 'wide'} onClick={onReady}>
            {played === total ? "I've got it, let me try" : 'Skip to playing it myself'}
          </button>
        </aside>
      </div>
    </div>
  )
}
