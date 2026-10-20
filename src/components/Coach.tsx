import { PACE_LABEL, setPace, usePace, type Pace } from '../lib/settings'

export interface CoachEntry {
  who: 'you' | 'opponent' | 'note'
  label?: string
  text: string
  auto?: boolean
  tone?: 'good' | 'bad' | 'info'
}

/** Every explanation so far, newest first, so nothing disappears before you have read it. */
export function CoachLog({ entries }: { entries: CoachEntry[] }) {
  return (
    <ol className="coach" aria-live="polite">
      {[...entries].reverse().map((e, i) => (
        <li key={entries.length - i} className={`${e.who} ${e.tone ?? ''} ${i === 0 ? 'latest' : ''}`}>
          {e.label && <span className="who">{e.label}</span>}
          <span className={e.auto ? 'auto' : ''}>{e.text}</span>
        </li>
      ))}
    </ol>
  )
}

export function PaceControl() {
  const pace = usePace()
  return (
    <div className="pace" role="group" aria-label="Opponent's reply speed">
      <span className="muted small">Opponent replies:</span>
      {(Object.keys(PACE_LABEL) as Pace[]).map((p) => (
        <button key={p} type="button" className={pace === p ? 'on' : ''} aria-pressed={pace === p} onClick={() => setPace(p)}>
          {PACE_LABEL[p]}
        </button>
      ))}
    </div>
  )
}
