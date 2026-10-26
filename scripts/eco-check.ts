// Matches every line against the Lichess chess-openings list (the ECO classification,
// https://github.com/lichess-org/chess-openings, CC0) and prints the official name and code
// of the deepest named position each line reaches. Set OPENINGS=a,b to limit the output.
import { readFileSync, readdirSync } from 'node:fs'
import { Chess } from 'chess.js'
import { openingSources } from '../src/data/index'
import { buildOpening, fenKey } from '../src/lib/repertoire'

export interface EcoEntry {
  eco: string
  name: string
  pgn: string
  plies: number
}

const dir = new URL('./eco/', import.meta.url)
export const ecoByPosition = new Map<string, EcoEntry>()
for (const file of readdirSync(dir).filter((f) => f.endsWith('.tsv'))) {
  for (const row of readFileSync(new URL(file, dir), 'utf8').trim().split('\n').slice(1)) {
    const [eco, name, pgn] = row.split('\t')
    const chess = new Chess()
    chess.loadPgn(pgn)
    const key = fenKey(chess.fen())
    const entry = { eco, name, pgn, plies: chess.history().length }
    if (!ecoByPosition.has(key)) ecoByPosition.set(key, entry)
  }
}

const only = process.env.OPENINGS?.split(',')
if (import.meta.url === `file://${process.argv[1]}`) {
  for (const src of openingSources.filter((s) => !only || only.includes(s.id))) {
    const opening = buildOpening(src)
    console.log(`\n## ${opening.name} (${src.id})`)
    opening.lines.forEach((line, i) => {
      let deepest: EcoEntry | null = null
      let at = 0
      line.moves.forEach((m, ply) => {
        const e = ecoByPosition.get(fenKey(m.fenAfter))
        if (e) [deepest, at] = [e, ply + 1]
      })
      const d = deepest as EcoEntry | null
      console.log(`${i}. "${line.name}" -> ${d ? `${d.eco} ${d.name} (named at ply ${at} of ${line.moves.length})` : 'NO ECO MATCH'}`)
    })
  }
}
