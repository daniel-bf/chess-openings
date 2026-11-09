import { QUALITY, QUALITY_ORDER, type MoveQuality, type Rating, type SideSummary } from '../lib/moveQuality'

function tip(r: Rating): string {
  const label = QUALITY[r.quality].label
  if (r.quality === 'book' || r.quality === 'forced') return label
  return `${label} · lost ${r.loss.toFixed(1)}% win chance · accuracy ${r.accuracy.toFixed(0)}`
}

/** Small coloured symbol after a move (!!, !, ★, ?!, ?, ??). Renders nothing for moves without a symbol. */
export function MoveBadge({ rating }: { rating: Rating | null | undefined }) {
  if (!rating) return null
  const q = QUALITY[rating.quality]
  if (!q.symbol) return null
  return (
    <span className={`move-badge q-${q.tone}`} title={tip(rating)} aria-label={q.label}>
      {q.symbol}
    </span>
  )
}

/** "Brilliant", "Blunder", ... as a coloured chip, for reports and notes. */
export function QualityChip({ quality, count }: { quality: MoveQuality; count?: number }) {
  const q = QUALITY[quality]
  return (
    <span className={`quality-chip q-${q.tone}`}>
      {q.symbol && <span className="move-badge">{q.symbol}</span>}
      {q.label}
      {count !== undefined && <strong>{count}</strong>}
    </span>
  )
}

/** Accuracy and move-quality counts for both players. */
export function GameReview({ summary, names, pending }: { summary: [SideSummary, SideSummary]; names: [string, string]; pending: number }) {
  const shown = QUALITY_ORDER.filter((q) => summary.some((s) => s.counts[q]))
  return (
    <section className="review-summary">
      <h2>Move ratings</h2>
      <table>
        <thead>
          <tr>
            <th />
            <th>{names[0]}</th>
            <th>{names[1]}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="accuracy">
            <th>Accuracy</th>
            {summary.map((s, i) => (
              <td key={i}>{s.accuracy === null ? '–' : s.accuracy.toFixed(1)}</td>
            ))}
          </tr>
          {shown.map((q) => (
            <tr key={q}>
              <th>
                <QualityChip quality={q} />
              </th>
              {summary.map((s, i) => (
                <td key={i}>{s.counts[q] ?? 0}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pending > 0 && <p className="muted small">Rating {pending} more move{pending === 1 ? '' : 's'}…</p>}
    </section>
  )
}
