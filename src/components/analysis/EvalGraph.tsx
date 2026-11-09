import type { EngineLine } from '../../lib/engine'
import { QUALITY, type MoveQuality } from '../../lib/moveQuality'
import { whiteShare } from '../EvalBar'

interface Props {
  /** Evaluation of each position, index 0 = start. Missing entries are not analysed yet. */
  evals: (EngineLine | undefined)[]
  current: number
  onJump: (ply: number) => void
  /** Rated moves to flag on the graph (position index after the move). */
  marks?: { ply: number; quality: MoveQuality }[]
}

const W = 600
const H = 90

/** The evaluation over the whole game: white area above the line is White's share of the bar. */
export function EvalGraph({ evals, current, onJump, marks = [] }: Props) {
  const n = evals.length
  if (n < 2) return null
  const x = (i: number) => (i / (n - 1)) * W
  const y = (l: EngineLine) => H - (whiteShare(l) / 100) * H
  // Join only analysed points; unknown stretches are skipped until they arrive.
  let line = ''
  let area = ''
  let lastX = 0
  let open = false
  evals.forEach((l, i) => {
    if (!l) return
    const px = x(i).toFixed(1)
    const py = y(l).toFixed(1)
    if (!open) {
      line += `M${px},${py}`
      area += `M${px},${H} L${px},${py}`
      open = true
    } else {
      line += ` L${px},${py}`
      area += ` L${px},${py}`
    }
    lastX = x(i)
  })
  if (open) area += ` L${lastX.toFixed(1)},${H} Z`
  const done = evals.filter(Boolean).length

  function click(e: React.MouseEvent<SVGSVGElement>) {
    const box = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - box.left) / box.width
    onJump(Math.max(0, Math.min(n - 1, Math.round(ratio * (n - 1)))))
  }

  return (
    <figure className="evalgraph">
      <div className="evalgraph-plot">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Evaluation graph of the game. Click to jump to a move."
          onClick={click}
        >
          <rect x="0" y="0" width={W} height={H} className="evalgraph-pending" />
          {open && <rect x="0" y="0" width={lastX} height={H} className="evalgraph-black" />}
          <path d={area} className="evalgraph-white" />
          <line x1="0" x2={W} y1={H / 2} y2={H / 2} className="evalgraph-mid" />
          <path d={line} className="evalgraph-line" vectorEffect="non-scaling-stroke" />
          <line x1={x(current)} x2={x(current)} y1="0" y2={H} className="evalgraph-cursor" vectorEffect="non-scaling-stroke" />
        </svg>
        {marks.map((m) => {
          const l = evals[m.ply]
          if (!l) return null
          return (
            <button
              key={m.ply}
              type="button"
              className={`evalgraph-mark q-${QUALITY[m.quality].tone}`}
              style={{ left: `${(m.ply / (n - 1)) * 100}%`, top: `${100 - whiteShare(l)}%` }}
              title={`${QUALITY[m.quality].label}, move ${Math.ceil(m.ply / 2)}`}
              aria-label={`${QUALITY[m.quality].label} at move ${Math.ceil(m.ply / 2)}`}
              onClick={() => onJump(m.ply)}
            />
          )
        })}
      </div>
      <figcaption className="muted small">
        {done < n ? `Analysing the game… ${done}/${n} positions` : 'Evaluation through the game. Click to jump.'}
      </figcaption>
    </figure>
  )
}
