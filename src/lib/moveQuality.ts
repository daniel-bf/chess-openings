import { Chess, type Square } from 'chess.js'
import type { EngineLine } from './engine'

/**
 * Move quality labels, in the spirit of chess.com's and Lichess's game review.
 *
 * Everything is measured in win chance (0 to 100) from the mover's point of view, using the same
 * Lichess curve as the evaluation bar. A move's "loss" is the win chance of the engine's best move
 * minus the win chance after the move that was played. Working in win chance rather than centipawns
 * means dropping 200cp at +9 (still winning) costs almost nothing, while dropping 200cp at 0.0 is a
 * real mistake, which matches how players feel about it.
 */
export type MoveQuality =
  | 'brilliant'
  | 'great'
  | 'best'
  | 'excellent'
  | 'good'
  | 'book'
  | 'forced'
  | 'inaccuracy'
  | 'mistake'
  | 'miss'
  | 'blunder'

export interface QualityInfo {
  label: string
  /** Short symbol shown next to the move, or '' for none. */
  symbol: string
  /** CSS class suffix for the colour. */
  tone: string
}

export const QUALITY: Record<MoveQuality, QualityInfo> = {
  brilliant: { label: 'Brilliant', symbol: '!!', tone: 'brilliant' },
  great: { label: 'Great', symbol: '!', tone: 'great' },
  best: { label: 'Best', symbol: '★', tone: 'best' },
  excellent: { label: 'Excellent', symbol: '✓', tone: 'excellent' },
  good: { label: 'Good', symbol: '', tone: 'good' },
  book: { label: 'Book', symbol: '', tone: 'book' },
  forced: { label: 'Forced', symbol: '', tone: 'forced' },
  inaccuracy: { label: 'Inaccuracy', symbol: '?!', tone: 'inaccuracy' },
  mistake: { label: 'Mistake', symbol: '?', tone: 'mistake' },
  miss: { label: 'Miss', symbol: '×', tone: 'miss' },
  blunder: { label: 'Blunder', symbol: '??', tone: 'blunder' },
}

/** Display order for summaries. */
export const QUALITY_ORDER: MoveQuality[] = [
  'brilliant',
  'great',
  'best',
  'excellent',
  'good',
  'book',
  'forced',
  'inaccuracy',
  'mistake',
  'miss',
  'blunder',
]

/** Win-chance loss limits (0-100 scale). Tunable; see the notes in the PR. */
export const THRESHOLDS = {
  excellent: 2,
  good: 5,
  inaccuracy: 10,
  mistake: 20,
  /** "Great": the best move when the second-best move is at least this much worse. */
  onlyMoveGap: 10,
  /** ...and the second-best move no longer keeps a clearly winning position (so mating a lost opponent is not "great"). */
  onlyMoveMaxSecond: 80,
  /** "Brilliant": a sound sacrifice that loses at most this much... */
  brilliantMaxLoss: 2,
  /** ...and leaves the mover at or above this win chance... */
  brilliantMinAfter: 45,
  /** ...when they were not already completely winning. */
  brilliantMaxBefore: 95,
}

/** White's win chance, 0 to 100, from an engine score. Same curve as the evaluation bar. */
export function whiteWinChance(line: Pick<EngineLine, 'cp' | 'mate'>): number {
  if (line.mate !== undefined) return line.mate > 0 ? 100 : line.mate < 0 ? 0 : 50
  const cp = Math.max(-1000, Math.min(1000, line.cp ?? 0))
  return 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * cp)) - 1)
}

function moverWinChance(line: Pick<EngineLine, 'cp' | 'mate'>, moverIsWhite: boolean): number {
  const w = whiteWinChance(line)
  return moverIsWhite ? w : 100 - w
}

/** Lichess's per-move accuracy from the win-chance drop: 100 for a perfect move, about 0 for a huge blunder. */
export function moveAccuracy(loss: number): number {
  const a = 103.1668 * Math.exp(-0.04354 * Math.max(0, loss)) - 3.1669
  return Math.max(0, Math.min(100, a))
}

const VALUE: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 }

/**
 * Pieces (knight or bigger) of `color` that the other side can win: attacked and undefended, or
 * attacked by a cheaper piece. A rough static-exchange check, good enough to spot sacrifices.
 */
function hangingPieces(chess: Chess, color: 'w' | 'b'): Map<Square, number> {
  const enemy = color === 'w' ? 'b' : 'w'
  const out = new Map<Square, number>()
  for (const row of chess.board()) {
    for (const p of row) {
      if (!p || p.color !== color || VALUE[p.type] < 3) continue
      const attackers = chess.attackers(p.square, enemy)
      if (!attackers.length) continue
      const defended = chess.attackers(p.square, color).length > 0
      const cheapest = Math.min(...attackers.map((sq) => VALUE[chess.get(sq)!.type] || 100))
      if (!defended || cheapest < VALUE[p.type]) out.set(p.square, VALUE[p.type])
    }
  }
  return out
}

/**
 * True when the move gives up material the opponent can take: the moved piece or another piece is
 * newly left en prise, worth more than whatever the move itself captured.
 */
export function isSacrifice(fenBefore: string, uci: string): boolean {
  const chess = new Chess(fenBefore)
  const color = chess.turn()
  const before = hangingPieces(chess, color)
  let move
  try {
    move = chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
  } catch {
    return false
  }
  const captured = move.captured ? VALUE[move.captured] : 0
  const after = hangingPieces(chess, color)
  let given = 0
  for (const [sq, v] of after) if (!before.has(sq) || sq === move.to) given = Math.max(given, v)
  return given > captured
}

export interface RateInput {
  /** Position before the move. */
  fenBefore: string
  /** The move played, in UCI form. */
  uci: string
  /** Engine lines for `fenBefore`, best first (MultiPV 2 or more lets us find "great" moves). */
  before: EngineLine[]
  /** Best engine line for the position after the move, used when the move is not among `before`. */
  after?: EngineLine | null
  /** The move is in the user's prepared repertoire. */
  inBook?: boolean
  /** Square the previous move landed on, to skip "great" for obvious recaptures. */
  prevTo?: string
  /** The opponent's previous move was a mistake or blunder (turns a failure to punish it into a "miss"). */
  opponentErred?: boolean
}

export interface Rating {
  quality: MoveQuality
  /** Win chance lost against the best move, 0-100 scale. */
  loss: number
  accuracy: number
  /** Mover's win chance after the move, 0-100. */
  winAfter: number
  /** Engine's best move in UCI form. */
  best: string
}

/** Rates one move, or returns null while the engine data it needs is missing. */
export function rateMove(input: RateInput): Rating | null {
  const { fenBefore, uci, before, inBook, prevTo, opponentErred } = input
  const top = before[0]
  if (!top) return null
  const moverIsWhite = fenBefore.split(' ')[1] === 'w'
  const winBest = moverWinChance(top, moverIsWhite)
  // Prefer the score from the same search when the played move is one of the engine's lines.
  const own = before.find((l) => l.uci === uci)
  const afterLine = own ?? input.after
  if (!afterLine) return null
  const winAfter = moverWinChance(afterLine, moverIsWhite)
  const loss = Math.max(0, winBest - winAfter)
  const base = { loss, accuracy: moveAccuracy(loss), winAfter, best: top.uci }

  if (inBook) return { ...base, quality: 'book' }
  const chess = new Chess(fenBefore)
  if (chess.moves().length === 1) return { ...base, quality: 'forced' }

  const isBest = uci === top.uci || loss < 0.5
  if (
    loss <= THRESHOLDS.brilliantMaxLoss &&
    winAfter >= THRESHOLDS.brilliantMinAfter &&
    winBest <= THRESHOLDS.brilliantMaxBefore &&
    isSacrifice(fenBefore, uci)
  )
    return { ...base, quality: 'brilliant' }

  if (isBest) {
    const second = before[1]
    const recapture = prevTo !== undefined && uci.slice(2, 4) === prevTo && !!chess.get(prevTo as Square)
    const winSecond = second ? moverWinChance(second, moverIsWhite) : 100
    if (second && !recapture && winBest - winSecond >= THRESHOLDS.onlyMoveGap && winSecond <= THRESHOLDS.onlyMoveMaxSecond)
      return { ...base, quality: 'great' }
    return { ...base, quality: 'best' }
  }
  if (loss <= THRESHOLDS.excellent) return { ...base, quality: 'excellent' }
  if (loss <= THRESHOLDS.good) return { ...base, quality: 'good' }
  if (opponentErred && loss >= THRESHOLDS.inaccuracy && winAfter >= 40) return { ...base, quality: 'miss' }
  if (loss <= THRESHOLDS.inaccuracy) return { ...base, quality: 'inaccuracy' }
  if (loss <= THRESHOLDS.mistake) return { ...base, quality: 'mistake' }
  return { ...base, quality: 'blunder' }
}

export interface GameMove {
  fenBefore: string
  uci: string
  inBook?: boolean
}

/**
 * Rates every move of a game from cached engine analyses (keyed by FEN). Moves whose positions have
 * not been analysed yet come back as null, so the caller can fill them in as results arrive.
 */
export function rateGame(moves: GameMove[], analyses: Map<string, EngineLine[]>): (Rating | null)[] {
  const out: (Rating | null)[] = []
  for (let i = 0; i < moves.length; i++) {
    const m = moves[i]
    const fenAfter = moves[i + 1]?.fenBefore ?? afterFen(m)
    const prev = out[i - 1]
    out.push(
      rateMove({
        fenBefore: m.fenBefore,
        uci: m.uci,
        before: analyses.get(m.fenBefore) ?? [],
        after: analyses.get(fenAfter)?.[0] ?? null,
        inBook: m.inBook,
        prevTo: i > 0 ? moves[i - 1].uci.slice(2, 4) : undefined,
        opponentErred: !!prev && (prev.quality === 'mistake' || prev.quality === 'blunder' || prev.quality === 'miss'),
      }),
    )
  }
  return out
}

function afterFen(m: GameMove): string {
  const chess = new Chess(m.fenBefore)
  chess.move({ from: m.uci.slice(0, 2), to: m.uci.slice(2, 4), promotion: m.uci[4] })
  return chess.fen()
}

export interface SideSummary {
  counts: Partial<Record<MoveQuality, number>>
  /** Average accuracy over rated moves (book moves excluded), or null when none are rated. */
  accuracy: number | null
  rated: number
}

/** Per-side counts and accuracy. Index 0 is White, 1 is Black. */
export function summarise(moves: GameMove[], ratings: (Rating | null)[]): [SideSummary, SideSummary] {
  const sides: [SideSummary, SideSummary] = [
    { counts: {}, accuracy: null, rated: 0 },
    { counts: {}, accuracy: null, rated: 0 },
  ]
  const sums = [0, 0]
  ratings.forEach((r, i) => {
    if (!r) return
    const s = moves[i].fenBefore.split(' ')[1] === 'w' ? 0 : 1
    sides[s].counts[r.quality] = (sides[s].counts[r.quality] ?? 0) + 1
    if (r.quality === 'book' || r.quality === 'forced') return
    sides[s].rated++
    sums[s] += r.accuracy
  })
  sides.forEach((s, i) => (s.accuracy = s.rated ? sums[i] / s.rated : null))
  return sides
}
