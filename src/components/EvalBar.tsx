import type { Side } from '../data/types'
import type { EngineLine } from '../lib/engine'

/** "+0.4", "-1.2", "#3" (White mates) or "#-2" (Black mates). */
export function formatScore(line: EngineLine): string {
  if (line.mate !== undefined) return `#${line.mate}`
  const pawns = (line.cp ?? 0) / 100
  return `${pawns > 0 ? '+' : ''}${pawns.toFixed(1)}`
}

/** White's share of the bar, 0 to 100, using Lichess's win-chance curve. */
function whiteShare(line: EngineLine): number {
  if (line.mate !== undefined) return line.mate > 0 ? 100 : 0
  const cp = Math.max(-1000, Math.min(1000, line.cp ?? 0))
  return 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * cp)) - 1)
}

function verdict(line: EngineLine): string {
  if (line.mate !== undefined) return line.mate > 0 ? 'White has a forced mate' : 'Black has a forced mate'
  const cp = line.cp ?? 0
  const who = cp > 0 ? 'White' : 'Black'
  const abs = Math.abs(cp)
  if (abs < 40) return 'About equal'
  if (abs < 120) return `${who} is slightly better`
  if (abs < 300) return `${who} is better`
  return `${who} is winning`
}

export function EvalBar({ line, orientation }: { line: EngineLine | null; orientation: Side }) {
  const share = line ? whiteShare(line) : 50
  return (
    <div className={`evalbar ${orientation}`} title="Stockfish evaluation">
      <div className="evalbar-track" aria-hidden="true">
        <div className="evalbar-white" style={{ width: `${share}%` }} />
      </div>
      <p className="evalbar-text small">
        {line ? (
          <>
            <strong>{formatScore(line)}</strong> {verdict(line)}
          </>
        ) : (
          <span className="muted">Evaluating…</span>
        )}
      </p>
    </div>
  )
}
