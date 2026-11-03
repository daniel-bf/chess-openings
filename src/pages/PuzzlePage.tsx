import { useCallback, useState } from 'react'
import { openingById, openings } from '../data/openings'
import { deviationsForLine, deviationsForOpening } from '../lib/deviations'
import { deviationPuzzle, trapPuzzle, type Puzzle } from '../lib/puzzles'
import { traps, trapsForOpening } from '../data/traps'
import { PuzzleQuiz } from '../components/PuzzleQuiz'
import { go } from '../router'

const SESSION_SIZE = 10

function shuffle<T>(items: T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Props =
  | { mode: 'punish'; openingId: string; lineIndex?: number }
  | { mode: 'traps'; openingId?: string; trapId?: string }

function buildQueue(props: Props): Puzzle[] {
  if (props.mode === 'punish') {
    const opening = openingById.get(props.openingId)
    if (!opening) return []
    if (props.lineIndex !== undefined) {
      const line = opening.lines[props.lineIndex]
      if (!line) return []
      return shuffle(deviationsForLine(line.id).flatMap((d) => deviationPuzzle(d, line.id) ?? [])).slice(0, SESSION_SIZE)
    }
    return shuffle(deviationsForOpening(opening.id).flatMap((d) => deviationPuzzle(d) ?? [])).slice(0, SESSION_SIZE)
  }
  if (props.trapId) return traps.filter((t) => t.id === props.trapId).map(trapPuzzle)
  return shuffle((props.openingId ? trapsForOpening(props.openingId) : traps).map(trapPuzzle))
}

export function PuzzlePage(props: Props) {
  const [queue] = useState<Puzzle[]>(() => buildQueue(props))
  const [pos, setPos] = useState(0)
  const [results, setResults] = useState<number[]>([])
  const [between, setBetween] = useState(false)

  const onComplete = useCallback((mistakes: number) => {
    setResults((r) => [...r, mistakes])
    setBetween(true)
  }, [])

  const opening = props.openingId ? openingById.get(props.openingId) : undefined
  const back = props.mode === 'traps' ? '/traps' : `/opening/${props.openingId}`
  const title =
    props.mode === 'punish'
      ? `Punish mistakes: ${opening?.name ?? ''}${props.lineIndex !== undefined ? ` · ${opening?.lines[props.lineIndex]?.name ?? ''}` : ''}`
      : `Traps${opening ? `: ${opening.name}` : ''}`

  if (queue.length === 0) {
    return (
      <div className="page narrow">
        <h1>{title}</h1>
        <p>No opponent mistakes found here yet.</p>
        <button type="button" onClick={() => go(back)}>
          Back
        </button>
      </div>
    )
  }

  const puzzle = queue[pos]
  if (between && pos === queue.length - 1) {
    const clean = results.filter((r) => r === 0).length
    return (
      <div className="page narrow">
        <h1>{title}</h1>
        <div className={`result ${clean === results.length ? 'good' : 'bad'}`}>
          <h2>
            {clean} of {results.length} punished without a mistake
          </h2>
          <ul className="plain">
            {queue.map((p, i) => (
              <li key={p.id}>
                {results[i] === 0 ? '✓' : '✗'} {p.title} <span className="muted">({p.subtitle})</span>
              </li>
            ))}
          </ul>
          {queue.length === 1 && <p>{puzzle.note}</p>}
        </div>
        <div className="row">
          <button type="button" className="primary" onClick={() => go(back)}>
            Done
          </button>
        </div>
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
        {queue.length > 1 && `Position ${pos + 1} of ${queue.length} · `}
        {puzzle.subtitle}
      </p>
      <h3>{props.mode === 'traps' ? puzzle.title : 'Find the punishment'}</h3>
    </div>
  )

  return (
    <div className="page">
      {between ? (
        <div className="narrow">
          {header}
          <div className={`result ${results[pos] === 0 ? 'good' : 'bad'}`}>
            <h2>{results[pos] === 0 ? 'Punished!' : `${results[pos]} mistake${results[pos] === 1 ? '' : 's'}`}</h2>
            <p>{puzzle.note}</p>
          </div>
          <div className="row">
            <button
              type="button"
              className="primary"
              onClick={() => {
                setPos(pos + 1)
                setBetween(false)
              }}
            >
              Next position
            </button>
          </div>
        </div>
      ) : (
        <PuzzleQuiz key={puzzle.id} puzzle={puzzle} onComplete={onComplete} header={header} />
      )}
    </div>
  )
}

/** Every named trap, grouped by opening. */
export function TrapsPage() {
  const groups = openings.map((o) => ({ opening: o, list: trapsForOpening(o.id) })).filter((g) => g.list.length)
  return (
    <div className="page narrow">
      <button type="button" className="link" onClick={() => go('/')}>
        ← All openings
      </button>
      <h1>Traps</h1>
      <p className="lead">
        Classic mistakes your opponents fall into in your openings. The opponent plays the mistake, and you have to find the
        punishment and follow it through.
      </p>
      <div className="row">
        <button type="button" className="primary" onClick={() => go('/traps/all')}>
          Try all {traps.length} traps
        </button>
      </div>
      {groups.map(({ opening, list }) => (
        <section key={opening.id} className="trap-group">
          <h2>
            {opening.name} <span className={`side-chip ${opening.side}`}>as {opening.side}</span>
          </h2>
          <ol className="lines">
            {list.map((t) => (
              <li key={t.id}>
                <div className="line-info">
                  <div>
                    <h3>{t.name}</h3>
                    <p className="muted small">{t.moves}</p>
                  </div>
                </div>
                <div className="row">
                  <button type="button" onClick={() => go(`/trap/${t.id}`)}>
                    Try it
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}
