import { openingSources } from './index'
import { buildOpening, type Line, type Opening } from '../lib/repertoire'

export const openings: Opening[] = openingSources.map(buildOpening)

export const openingById = new Map(openings.map((o) => [o.id, o]))

export const lineById = new Map<string, Line>(openings.flatMap((o) => o.lines.map((l) => [l.id, l] as const)))
