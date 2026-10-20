import { openingById } from '../data/openings'
import { formatDue, lineStatus, useProgress } from '../lib/progress'
import { go } from '../router'

export function OpeningPage({ id }: { id: string }) {
  const opening = openingById.get(id)
  const progress = useProgress()
  if (!opening) return <NotFound />

  return (
    <div className="page narrow">
      <button type="button" className="link" onClick={() => go('/')}>
        ← All openings
      </button>
      <header className="opening-head">
        <span className={`side-chip ${opening.side}`}>You play {opening.side}</span>
        <h1>{opening.name}</h1>
        <p className="lead">{opening.summary}</p>
        <ul className="ideas">
          {opening.ideas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
        <div className="row">
          <button type="button" className="primary" onClick={() => go(`/tree/${opening.id}`)}>
            Explore the opening
          </button>
          <button type="button" onClick={() => go(`/structure/${opening.id}`)}>
            See its structure
          </button>
          <button type="button" onClick={() => go(`/practice/${opening.id}`)}>
            Drill all {opening.lines.length} lines
          </button>
          <button type="button" onClick={() => go(`/play?openings=${opening.id}`)}>
            Play this opening
          </button>
        </div>
      </header>

      <ol className="lines">
        {opening.lines.map((line, i) => {
          const p = progress[line.id]
          const status = lineStatus(p)
          return (
            <li key={line.id}>
              <div className="line-info">
                <span className="line-num">{i + 1}</span>
                <div>
                  <h3>{line.name}</h3>
                  <p className="muted small">
                    {line.moves.length} half-moves ·{' '}
                    <span className={`status ${status}`}>{status === 'new' ? 'Not learned' : status === 'known' ? 'Known' : 'Learning'}</span>
                    {p && ` · review ${formatDue(p.due)}`}
                  </p>
                </div>
              </div>
              <div className="row">
                <button type="button" className={status === 'new' ? 'primary' : ''} onClick={() => go(`/learn/${line.id}`)}>
                  {status === 'new' ? 'Learn' : 'Study again'}
                </button>
                <button type="button" className="ghost" onClick={() => go(`/practice/${opening.id}/${i}`)}>
                  Drill
                </button>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export function NotFound() {
  return (
    <div className="page narrow">
      <p>That page does not exist.</p>
      <button type="button" onClick={() => go('/')}>
        Back to openings
      </button>
    </div>
  )
}
