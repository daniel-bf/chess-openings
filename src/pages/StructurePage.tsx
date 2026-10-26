import { useEffect, useMemo, useState } from 'react'
import { openingById, openings } from '../data/openings'
import { START_FEN, type Line } from '../lib/repertoire'
import { differences, fenAt, journeys, pawns, typicalPosition, type Segment } from '../lib/structure'
import { Board, type BoardArrow } from '../components/Board'
import { Plan } from '../components/Plan'
import { go } from '../router'

const OPENING_KEY = 'chess-trainer:structure-opening:v1'
const MINE = (a: number) => `rgba(30, 140, 70, ${a})`
const THEIRS = (a: number) => `rgba(232, 160, 32, ${a})`

function readOpening(): string {
  try {
    const v = localStorage.getItem(OPENING_KEY)
    if (v && openingById.has(v)) return v
  } catch {
    // Use the first opening.
  }
  return openings[0].id
}

/** Piece routes shared by many lines, with how often each one is played. */
function commonRoutes(lines: Line[]): { seg: Segment; share: number }[] {
  const counts = new Map<string, { seg: Segment; n: number }>()
  for (const line of lines) {
    const seen = new Set<string>()
    for (const seg of journeys(line)) {
      const key = `${seg.color}${seg.from}${seg.to}`
      if (seen.has(key)) continue
      seen.add(key)
      const c = counts.get(key) ?? { seg, n: 0 }
      c.n++
      counts.set(key, c)
    }
  }
  return [...counts.values()].map(({ seg, n }) => ({ seg, share: n / lines.length }))
}

/** One board for one opening: where the pieces go, the pawn structure, and how each line differs from the usual shape. */
export function StructurePage({ openingId }: { openingId?: string }) {
  const [id, setId] = useState(openingId && openingById.has(openingId) ? openingId : readOpening)
  const opening = openingById.get(id)!
  const side = opening.side
  const mine = side === 'white' ? 'w' : 'b'
  const [lineId, setLineId] = useState<string | null>(null)
  const line = opening.lines.find((l) => l.id === lineId) ?? null
  const [step, setStep] = useState(0)
  const [showRoutes, setShowRoutes] = useState(true)
  const [onlyMine, setOnlyMine] = useState(false)
  const [showPawns, setShowPawns] = useState(true)

  const typical = useMemo(() => typicalPosition(opening.lines), [opening])
  const routes = useMemo(() => commonRoutes(opening.lines), [opening])

  function chooseOpening(next: string) {
    setId(next)
    setLineId(null)
    try {
      localStorage.setItem(OPENING_KEY, next)
    } catch {
      // Kept for this visit only.
    }
  }

  function chooseLine(next: Line | null) {
    setLineId(next?.id ?? null)
    setStep(next ? next.moves.length : 0)
  }

  // Arrow keys step through the chosen line.
  useEffect(() => {
    if (!line) return
    function onKey(e: KeyboardEvent) {
      if (!line) return
      if (e.key === 'ArrowLeft') setStep((s) => Math.max(0, s - 1))
      else if (e.key === 'ArrowRight') setStep((s) => Math.min(line.moves.length, s + 1))
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [line])

  const fen = line ? fenAt(line, step, START_FEN) : typical.fen
  const atEnd = !line || step === line.moves.length

  let arrows: BoardArrow[] = []
  if (showRoutes) {
    if (line) {
      arrows = journeys(line, step)
        .filter((s) => !onlyMine || s.color === mine)
        .map((s) => ({ from: s.from, to: s.to, color: s.color === mine ? MINE(0.8) : THEIRS(0.8) }))
    } else {
      arrows = routes
        .filter((r) => r.share >= 0.5 && (!onlyMine || r.seg.color === mine))
        .map((r) => ({ from: r.seg.from, to: r.seg.to, color: r.seg.color === mine ? MINE(0.35 + 0.5 * r.share) : THEIRS(0.35 + 0.5 * r.share) }))
    }
  }

  const marks: Record<string, string> = {}
  if (showPawns) {
    const p = pawns(fen)
    for (const sq of p[mine]) marks[sq] = 'rgba(30, 140, 70, 0.32)'
    for (const sq of p[mine === 'w' ? 'b' : 'w']) marks[sq] = 'rgba(232, 160, 32, 0.32)'
  }
  const diff = line && atEnd ? differences(typical.fen, fen) : []
  for (const sq of diff) marks[sq] = 'rgba(46, 125, 230, 0.45)'

  const white = openings.filter((o) => o.side === 'white')
  const black = openings.filter((o) => o.side === 'black')

  return (
    <div className="page structure">
      <header className="sx-head">
        <div>
          <h1>Structure</h1>
          <p className="muted small">Pick an opening to see where the pieces go and how its lines differ, all on one board.</p>
        </div>
        <select className="sx-opening" value={id} onChange={(e) => chooseOpening(e.target.value)} aria-label="Opening">
          <optgroup label="You play white">
            {white.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="You play black">
            {black.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name}
              </option>
            ))}
          </optgroup>
        </select>
      </header>

      <div className="sx-body">
        <div className="sx-board">
          <Board fen={fen} orientation={side} movable={null} arrows={arrows} marks={marks} lastMove={null} />
          {line && (
            <div className="sx-steps">
              <button type="button" onClick={() => setStep(0)} disabled={step === 0} aria-label="Start">
                ⏮
              </button>
              <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} aria-label="Previous move">
                ◀
              </button>
              <input type="range" min={0} max={line.moves.length} value={step} onChange={(e) => setStep(Number(e.target.value))} aria-label="Move" />
              <button type="button" onClick={() => setStep(Math.min(line.moves.length, step + 1))} disabled={atEnd} aria-label="Next move">
                ▶
              </button>
              <button type="button" onClick={() => setStep(line.moves.length)} disabled={atEnd} aria-label="End">
                ⏭
              </button>
            </div>
          )}
          <div className="sx-toggles">
            <label className="check small">
              <input type="checkbox" checked={showRoutes} onChange={(e) => setShowRoutes(e.target.checked)} /> Piece routes
            </label>
            <label className="check small">
              <input type="checkbox" checked={onlyMine} onChange={(e) => setOnlyMine(e.target.checked)} /> Only my pieces
            </label>
            <label className="check small">
              <input type="checkbox" checked={showPawns} onChange={(e) => setShowPawns(e.target.checked)} /> Pawn structure
            </label>
          </div>
        </div>

        <div className="sx-side">
          <div className="sx-lines" role="group" aria-label="Line">
            <button type="button" className={!line ? 'on' : ''} onClick={() => chooseLine(null)}>
              The usual shape
              <span>all {opening.lines.length} lines</span>
            </button>
            {opening.lines.map((l) => (
              <button key={l.id} type="button" className={l === line ? 'on' : ''} onClick={() => chooseLine(l)}>
                {l.name}
              </button>
            ))}
          </div>

          <div className="sx-explain">
            {!line ? (
              <p>
                The board shows the position most lines of the <strong>{opening.name}</strong> reach. Arrows are the piece moves that at least half the lines play,
                stronger when more lines play them. Pick a line to see its own moves and what is different.
              </p>
            ) : (
              <>
                <p className="sx-moves">
                  {line.moves.map((m, i) => (
                    <button key={i} type="button" className={`${i < step ? 'played' : ''}${i === step - 1 ? ' now' : ''}`} onClick={() => setStep(i + 1)}>
                      {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
                      {m.san}
                    </button>
                  ))}
                </p>
                {atEnd && (
                  <p className="small">
                    {diff.length ? (
                      <>
                        <span className="sx-key diff" /> {diff.length} squares are different from the usual shape.
                      </>
                    ) : (
                      'This line ends in the usual shape.'
                    )}
                  </p>
                )}
                <Plan lineId={line.id} compact />
                <button type="button" onClick={() => go(`/learn/${line.id}`)}>
                  Learn this line
                </button>
              </>
            )}
          </div>

          <p className="muted small sx-legend">
            <span>
              <span className="sx-key mine" /> your pieces and pawns
            </span>
            <span>
              <span className="sx-key theirs" /> your opponent's
            </span>
            <span>
              <span className="sx-key diff" /> different from the usual shape
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
