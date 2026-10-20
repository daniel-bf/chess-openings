import { planFor } from '../data/plans'

export function Plan({ lineId, title = 'The plan', compact = false }: { lineId: string; title?: string; compact?: boolean }) {
  const plan = planFor(lineId)
  if (!plan) return null
  return (
    <section className={`plan${compact ? ' compact' : ''}`}>
      <h3>{title}</h3>
      <p>{plan.plan}</p>
      {!compact && (
        <>
          <h3>Remember</h3>
          <ul>
            {plan.remember.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
