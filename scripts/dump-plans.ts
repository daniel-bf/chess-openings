import { openings } from '../src/data/openings'
import { plans } from '../src/data/plans'
let missing = 0
for (const o of openings) {
  for (const l of o.lines) {
    const p = plans[l.id]
    if (!p) { missing++; console.error('MISSING', l.id) }
    const sans = l.moves.map((m, i) => (i % 2 === 0 ? `${i / 2 + 1}.` : '') + m.san).join(' ')
    console.log(`## ${l.id} (${o.side}) ${o.name}: ${l.name}\n${sans}`)
    if (p) console.log(`plan: ${p.plan}\n- ${p.remember.join('\n- ')}`)
    console.log()
  }
}
const ids = new Set(openings.flatMap(o => o.lines.map(l => l.id)))
for (const k of Object.keys(plans)) if (!ids.has(k)) console.error('EXTRA', k)
console.error('missing', missing)
