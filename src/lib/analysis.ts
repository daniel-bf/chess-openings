import { Chess } from 'chess.js'
import type { Side } from '../data/types'
import type { EngineLine } from './engine'
import { fenKey } from './repertoire'

/** One engine line: SAN moves and a score from White's point of view (centipawns, or "#n" for mate). */
export interface AnalysedLine {
  m: string
  s: number | string
}

/** Stockfish's top lines for one position, written by scripts/analyse-lines.ts. */
export interface AnalysedPosition {
  d: number
  l: AnalysedLine[]
}

export type Analysis = Record<string, AnalysedPosition>

const files = import.meta.glob<{ default: Analysis }>('../data/analysis/*.json')

/** The precomputed analysis of one opening's positions, keyed by fenKey. Empty if none was generated. */
export async function loadAnalysis(openingId: string): Promise<Analysis> {
  const file = files[`../data/analysis/${openingId}.json`]
  return file ? (await file()).default : {}
}

export function lookup(analysis: Analysis, fen: string): AnalysedPosition | undefined {
  return analysis[fenKey(fen)]
}

/** Score in centipawns from White's point of view; mates become ±10000 minus the distance. */
export function whiteCp(s: number | string): number {
  if (typeof s === 'number') return s
  const n = Number(s.slice(1))
  return Math.sign(n) * (10000 - Math.abs(n))
}

export function sideCp(s: number | string, side: Side): number {
  return side === 'white' ? whiteCp(s) : -whiteCp(s)
}

export function toEngineLine(l: AnalysedLine): EngineLine {
  return typeof l.s === 'number' ? { uci: '', cp: l.s } : { uci: '', mate: Number(l.s.slice(1)) }
}

/** "+0.4", "-1.2" or "#3", from White's point of view. */
export function formatS(s: number | string): string {
  if (typeof s === 'string') return s
  return `${s > 0 ? '+' : ''}${(s / 100).toFixed(1)}`
}

export interface PvMove {
  san: string
  from: string
  to: string
  fen: string
  /** "12." or "12…" before the move. */
  num: string
}

/** Plays SAN (or UCI) moves from a position, stopping at the first one that does not fit. */
export function playMoves(fen: string, moves: string[]): PvMove[] {
  const chess = new Chess(fen)
  const out: PvMove[] = []
  for (const m of moves) {
    const n = Number(chess.fen().split(' ')[5])
    const white = chess.turn() === 'w'
    try {
      const mv = /^[a-h][1-8][a-h][1-8][qrbn]?$/.test(m) ? chess.move({ from: m.slice(0, 2), to: m.slice(2, 4), promotion: m[4] }) : chess.move(m)
      out.push({ san: mv.san, from: mv.from, to: mv.to, fen: chess.fen(), num: white ? `${n}.` : `${n}…` })
    } catch {
      break
    }
  }
  return out
}

/** Move text with numbers, e.g. "9. f4 Nd7 10. Qf3" or "9… Nd7 10. Qf3". */
export function numbered(moves: PvMove[]): string {
  return moves.map((m, i) => (m.num.endsWith('.') || i === 0 ? `${m.num} ${m.san}` : m.san)).join(' ')
}

/** Piece moves and black pawn moves named in a plan text, as "N@f5" or "P@f6" keys. */
export function planTargets(text: string): Map<string, string> {
  const found = new Map<string, string>()
  // Piece moves and routes: Nf5, ...Nh6-f5, Bxd4, Qb6.
  for (const m of text.matchAll(/(?:\.\.\.)?([KQRBN])[a-h]?[1-8]?x?([a-h][1-8])(?:-([a-h][1-8]))?/g)) {
    const dest = m[3] ?? m[2]
    found.set(`${m[1]}@${dest}`, m[0])
  }
  // Pawn moves written with "...": ...f6, ...c4, ...cxd4.
  for (const m of text.matchAll(/\.\.\.([a-h])(?:x([a-h][1-8])|([1-8]))/g)) {
    const dest = m[2] ?? `${m[1]}${m[3]}`
    found.set(`P@${dest}`, m[0])
  }
  // White pawn pushes named as a break or push: "f4", "e4 break", "push b4", "with c5".
  for (const m of text.matchAll(/\b(?:break with|push(?:es)?|plays?|with|then|and) ([a-h][1-8])\b/g)) found.set(`P@${m[1]}`, m[1])
  if (/castl|O-O/.test(text)) found.set('K@castle', 'castling')
  return found
}

/** The plan ideas a continuation carries out (only moves by `side`). */
export function planHits(moves: PvMove[], targets: Map<string, string>, side: Side): string[] {
  const hits: string[] = []
  const colorIsWhite = side === 'white'
  for (const m of moves) {
    if (m.num.endsWith('.') !== colorIsWhite) continue
    const piece = /^[KQRBN]/.test(m.san) ? m.san[0] : m.san.startsWith('O-O') ? 'K' : 'P'
    const key = m.san.startsWith('O-O') ? 'K@castle' : `${piece}@${m.to}`
    const hit = targets.get(key)
    if (hit && !hits.includes(hit)) hits.push(hit)
  }
  return hits
}
