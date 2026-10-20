import { useState } from 'react'
import { openings } from '../data/openings'
import type { Side } from '../data/types'
import { isDue, lineStatus, useProgress } from '../lib/progress'
import { go } from '../router'

export function Home() {
  const progress = useProgress()
  const due = openings.flatMap((o) => o.lines).filter((l) => isDue(progress[l.id]))
  const [filter, setFilter] = useState<Side | 'all'>('all')
  const totalLines = openings.reduce((n, o) => n + o.lines.length, 0)
  const shown = openings.filter((o) => filter === 'all' || o.side === filter)

  return (
    <div className="page">
      <section className="hero">
        <div>
          <h1>Learn {openings.length} popular chess openings</h1>
          <p className="lead">
            {totalLines} lines to learn. Watch each line with explanations, then play it yourself. Lines you know come back for review on a spaced schedule,
            and Play mode tests you against a chosen set of openings.
          </p>
        </div>
        <div className="hero-actions">
          <button type="button" className="primary" disabled={due.length === 0} onClick={() => go('/review')}>
            {due.length ? `Review ${due.length} due line${due.length > 1 ? 's' : ''}` : 'No reviews due'}
          </button>
          <button type="button" onClick={() => go('/play')}>
            Play mode
          </button>
        </div>
      </section>

      <div className="filters" role="group" aria-label="Show openings">
        {(['all', 'white', 'black'] as const).map((f) => (
          <button key={f} type="button" className={filter === f ? 'on' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === 'all' ? 'All openings' : `As ${f}`}
          </button>
        ))}
      </div>

      <div className="grid">
        {shown.map((o) => {
          const known = o.lines.filter((l) => lineStatus(progress[l.id]) !== 'new').length
          const dueHere = o.lines.filter((l) => isDue(progress[l.id])).length
          return (
            <button type="button" key={o.id} className="card" onClick={() => go(`/opening/${o.id}`)}>
              <div className="card-top">
                <span className={`side-chip ${o.side}`}>You play {o.side}</span>
                <span className="eco">{o.eco}</span>
              </div>
              <h2>{o.name}</h2>
              <p>{o.summary.split('. ')[0]}.</p>
              <div className="meter" aria-label={`${known} of ${o.lines.length} lines learned`}>
                <div style={{ width: `${(known / o.lines.length) * 100}%` }} />
              </div>
              <div className="card-foot">
                <span>
                  {known}/{o.lines.length} lines learned
                </span>
                {dueHere > 0 && <span className="due">{dueHere} due</span>}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
