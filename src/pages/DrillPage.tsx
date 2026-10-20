import { useCallback, useState } from 'react'
import { lineById, openingById, openings } from '../data/openings'
import type { Line } from '../lib/repertoire'
import { isDue, recordResult, useProgress } from '../lib/progress'
import { LineQuiz } from '../components/LineQuiz'
import { go } from '../router'
import { Plan } from '../components/Plan'

function shuffle<T>(items: T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface Props {
  mode: 'review' | 'practice'
  openingId?: string
  lineIndex?: number
}

export function DrillPage(props: Props) {
  const progress = useProgress()
  // The queue is fixed when the session starts.
  const [queue] = useState<Line[]>(() => {
    if (props.mode === 'review') return shuffle(openings.flatMap((o) => o.lines).filter((l) => isDue(progress[l.id])))
    const opening = openingById.get(props.openingId ?? '')
    if (!opening) return []
    if (props.lineIndex !== undefined) return opening.lines.slice(props.lineIndex, props.lineIndex + 1)
    return shuffle(opening.lines)
  })
  const [pos, setPos] = useState(0)
  const [results, setResults] = useState<number[]>([])
  const [between, setBetween] = useState(false)

  const onComplete = useCallback(
    (mistakes: number) => {
      recordResult(queue[pos].id, mistakes)
      setResults((r) => [...r, mistakes])
      setBetween(true)
    },
    [queue, pos],
  )

  const back = props.openingId ? `/opening/${props.openingId}` : '/'
  const title = props.mode === 'review' ? 'Review' : `Drill: ${openingById.get(props.openingId ?? '')?.name ?? ''}`

  if (queue.length === 0) {
    return (
      <div className="page narrow">
        <h1>{title}</h1>
        <p>Nothing to drill right now. Learn a few lines first, and they will come back here when they are due.</p>
        <button type="button" onClick={() => go(back)}>
          Back
        </button>
      </div>
    )
  }

  const line = queue[pos]
  const opening = openingById.get(line.openingId)!
  const doneAll = between && pos === queue.length - 1

  if (doneAll) {
    const clean = results.filter((r) => r === 0).length
    return (
      <div className="page narrow">
        <h1>{title}</h1>
        <div className={`result ${clean === results.length ? 'good' : 'bad'}`}>
          <h2>
            {clean} of {results.length} line{results.length === 1 ? '' : 's'} without a mistake
          </h2>
          <ul className="plain">
            {queue.map((l, i) => (
              <li key={l.id}>
                {results[i] === 0 ? '✓' : '✗'} {l.name}
                {results[i] > 0 && <span className="muted"> ({results[i]} mistakes)</span>}
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="primary" onClick={() => go(back)}>
          Done
        </button>
      </div>
    )
  }

  const header = (
    <div className="session-head">
      <button type="button" className="link" onClick={() => go(back)}>
        ← Stop
      </button>
      <h1>{title}</h1>
      <p className="muted">
        Line {pos + 1} of {queue.length} · {opening.name}
      </p>
      <h3>{line.name}</h3>
    </div>
  )

  return (
    <div className="page">
      {between ? (
        <div className="narrow">
          {header}
          <div className={`result ${results[pos] === 0 ? 'good' : 'bad'}`}>
            <h2>{results[pos] === 0 ? 'Clean!' : `${results[pos]} mistake${results[pos] === 1 ? '' : 's'}`}</h2>
          </div>
          <Plan lineId={line.id} title="The idea of this line" />
          <div className="row">
            <button type="button" className="ghost" onClick={() => go(`/learn/${line.id}`)}>
              Study this line
            </button>
            <button
              type="button"
              className="primary"
              onClick={() => {
                setPos(pos + 1)
                setBetween(false)
              }}
            >
              Next line
            </button>
          </div>
        </div>
      ) : (
        <LineQuiz key={line.id} line={lineById.get(line.id)!} side={opening.side} explainMoves={false} onComplete={onComplete} header={header} />
      )}
    </div>
  )
}
