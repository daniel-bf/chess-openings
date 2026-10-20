import { play, setSoundOn, setSoundSet, SOUND_SETS, useSound, type Sound } from '../lib/sound'

const PREVIEW: { sound: Sound; label: string }[] = [
  { sound: 'move', label: 'Move' },
  { sound: 'capture', label: 'Capture' },
  { sound: 'castle', label: 'Castle' },
  { sound: 'check', label: 'Check' },
  { sound: 'wrong', label: 'Wrong move' },
  { sound: 'success', label: 'Line done' },
]

export function SoundsPage() {
  const { on, set } = useSound()
  return (
    <div className="page narrow">
      <h1>Sounds</h1>
      <p className="muted">Tap the buttons to hear each set, then choose the one you like.</p>
      <label className="check">
        <input type="checkbox" checked={on} onChange={(e) => setSoundOn(e.target.checked)} /> Sound on
      </label>
      <ul className="sound-sets">
        {SOUND_SETS.map((s) => {
          const chosen = s.id === set
          return (
            <li key={s.id} className={chosen ? 'chosen' : ''}>
              <div className="sound-head">
                <div>
                  <h3>{s.name}</h3>
                  <p className="small">{s.description}</p>
                  <p className="small muted">{s.credit}</p>
                </div>
                <button type="button" className={chosen ? 'primary' : ''} aria-pressed={chosen} onClick={() => setSoundSet(s.id)}>
                  {chosen ? 'Chosen' : 'Use this'}
                </button>
              </div>
              <div className="sound-preview">
                {PREVIEW.map((p) => (
                  <button key={p.sound} type="button" className="ghost" onClick={() => play(p.sound, s.id)}>
                    ▶ {p.label}
                  </button>
                ))}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
