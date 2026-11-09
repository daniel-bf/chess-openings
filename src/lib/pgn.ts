import { Chess } from 'chess.js'
import { START_FEN } from './repertoire'

/** Play mode hands a finished game to the Analysis page through this sessionStorage key. */
export const ANALYSE_HANDOFF_KEY = 'chess-trainer:analyse-pgn'

/** One half-move of a loaded game. */
export interface GamePly {
  san: string
  uci: string
  from: string
  to: string
  fenBefore: string
  fenAfter: string
}

export interface LoadedGame {
  headers: Record<string, string>
  startFen: string
  moves: GamePly[]
  /** Where the game came from, e.g. a Lichess or Chess.com link. */
  link?: string
}

/** Drops comments, variations, NAGs and move-number noise that trip up strict PGN readers. */
function cleanMovetext(movetext: string): string {
  let out = ''
  let depth = 0
  let inBrace = false
  for (let i = 0; i < movetext.length; i++) {
    const c = movetext[i]
    if (inBrace) {
      if (c === '}') inBrace = false
      continue
    }
    if (c === '{') {
      inBrace = true
      continue
    }
    if (c === ';') {
      while (i < movetext.length && movetext[i] !== '\n') i++
      continue
    }
    if (c === '(') {
      depth++
      continue
    }
    if (c === ')') {
      depth = Math.max(0, depth - 1)
      continue
    }
    if (depth === 0) out += c
  }
  return out
    .replace(/\$\d+/g, ' ')
    .replace(/[?!]+/g, '')
    .replace(/\d+\.(\.\.)?/g, ' ')
    .replace(/…/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Reads one PGN game (headers optional). Throws with a readable message when a move is illegal. */
export function parsePgn(text: string): LoadedGame {
  const headers: Record<string, string> = {}
  const headerRe = /^\s*\[(\w+)\s+"((?:[^"\\]|\\.)*)"\]\s*$/gm
  let m: RegExpExecArray | null
  while ((m = headerRe.exec(text))) headers[m[1]] = m[2].replace(/\\"/g, '"')
  const movetext = text.replace(/^\s*\[[^\]]*\]\s*$/gm, '')
  const startFen = headers.FEN && headers.SetUp !== '0' ? headers.FEN : START_FEN
  let chess: Chess
  try {
    chess = new Chess(startFen)
  } catch {
    throw new Error('The starting position (FEN header) is not valid.')
  }
  const tokens = cleanMovetext(movetext)
    .split(' ')
    .filter((t) => t && !/^(1-0|0-1|1\/2-1\/2|\*)$/.test(t))
  const moves: GamePly[] = []
  for (const token of tokens) {
    const fenBefore = chess.fen()
    let move
    try {
      // Accept "0-0" as well as "O-O".
      move = chess.move(token.replace(/0/g, 'O'))
    } catch {
      const n = Math.floor(moves.length / 2) + 1
      throw new Error(`Move ${n}${moves.length % 2 ? '…' : '.'} ${token} is not legal here.`)
    }
    moves.push({
      san: move.san,
      uci: move.from + move.to + (move.promotion ?? ''),
      from: move.from,
      to: move.to,
      fenBefore,
      fenAfter: chess.fen(),
    })
  }
  if (moves.length === 0) throw new Error('No moves found in this PGN.')
  return { headers, startFen, moves }
}

/** Splits a file with several games into one PGN string per game. */
export function splitPgns(text: string): string[] {
  const parts = text.split(/\n\s*\n(?=\s*\[Event )/)
  return parts.map((p) => p.trim()).filter(Boolean)
}

/** Plays a list of UCI moves from a position and returns them in SAN (stops at the first illegal one). */
export function uciToSan(fen: string, ucis: string[], limit = ucis.length): string[] {
  const chess = new Chess(fen)
  const out: string[] = []
  for (const uci of ucis.slice(0, limit)) {
    try {
      const mv = chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
      out.push(mv.san)
    } catch {
      break
    }
  }
  return out
}

/** Move number prefix for the half-move played from `fen`: "12." or "12…". */
export function moveNumberLabel(fen: string): string {
  const [, turn, , , , full] = fen.split(' ')
  return turn === 'w' ? `${full}.` : `${full}…`
}

/** "Carlsen – Nepomniachtchi", falling back to "White – Black". */
export function gameTitle(h: Record<string, string>): string {
  const name = (s: string | undefined, fallback: string) => (s && s !== '?' ? s : fallback)
  return `${name(h.White, 'White')} – ${name(h.Black, 'Black')}`
}

/** "World Championship · 2021 · 1-0". */
export function gameSubtitle(h: Record<string, string>): string {
  const bits = [h.Event, h.Site && !/^https?:/.test(h.Site) ? h.Site : undefined, h.Date?.replace(/\.\?\?/g, '')?.replace(/\./g, '-'), h.Result]
  return bits.filter((b) => b && b !== '?' && b !== '*' && b !== '????-??-??').join(' · ')
}
