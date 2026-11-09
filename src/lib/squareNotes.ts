import type { CoachEntry } from '../components/Coach'

/**
 * Finds the squares a move explanation talks about ("to protect e4", "attacks f7", "stops ...b5")
 * and what the move does to each one, so the board can colour them.
 */

export type NoteKind = 'attack' | 'protect' | 'prevent' | 'control' | 'plan'

export const NOTE_KINDS: { kind: NoteKind; label: string; hint: string }[] = [
  { kind: 'attack', label: 'Attack', hint: 'attacks, hits, pins or takes' },
  { kind: 'protect', label: 'Protect', hint: 'protects, defends or supports' },
  { kind: 'prevent', label: 'Prevent', hint: 'stops, prevents or keeps pieces off' },
  { kind: 'control', label: 'Control', hint: 'controls, covers or fights for' },
  { kind: 'plan', label: 'Heads for', hint: 'prepares, heads for or makes room for' },
]

/** Solid colour per kind (text chips, legend, square outline). */
export const NOTE_COLOR: Record<NoteKind, string> = {
  attack: 'rgb(214, 48, 49)',
  protect: 'rgb(34, 150, 74)',
  prevent: 'rgb(142, 68, 200)',
  control: 'rgb(36, 110, 220)',
  plan: 'rgb(230, 126, 14)',
}

/** Translucent fill for the square itself, so the piece on it stays easy to see. */
export const NOTE_FILL: Record<NoteKind, string> = {
  attack: 'rgba(214, 48, 49, 0.38)',
  protect: 'rgba(34, 150, 74, 0.38)',
  prevent: 'rgba(142, 68, 200, 0.38)',
  control: 'rgba(36, 110, 220, 0.34)',
  plan: 'rgba(230, 126, 14, 0.38)',
}

// Word stems that start a phrase. Longer phrases are tried first.
const PHRASES: [string, NoteKind][] = (
  [
    // attack
    ['attack', 'attack'], ['attacks', 'attack'], ['attacking', 'attack'], ['attacked', 'attack'],
    ['hit', 'attack'], ['hits', 'attack'], ['hitting', 'attack'],
    ['eye', 'attack'], ['eyes', 'attack'], ['eyeing', 'attack'],
    ['aim at', 'attack'], ['aims at', 'attack'], ['aimed at', 'attack'], ['aiming at', 'attack'],
    ['aim', 'attack'], ['aims', 'attack'], ['aimed', 'attack'], ['aiming', 'attack'],
    ['point', 'attack'], ['points', 'attack'], ['pointed', 'attack'], ['pointing', 'attack'],
    ['point at', 'attack'], ['points at', 'attack'], ['pointing at', 'attack'],
    ['target', 'attack'], ['targets', 'attack'], ['targeting', 'attack'],
    ['threaten', 'attack'], ['threatens', 'attack'], ['threatening', 'attack'], ['threat to', 'attack'],
    ['pressure', 'attack'], ['press', 'attack'], ['presses', 'attack'], ['pressing', 'attack'],
    ['pin', 'attack'], ['pins', 'attack'], ['pinning', 'attack'],
    ['kick', 'attack'], ['kicks', 'attack'], ['chase', 'attack'], ['chases', 'attack'],
    ['challenge', 'attack'], ['challenges', 'attack'], ['challenging', 'attack'],
    ['strike at', 'attack'], ['strikes at', 'attack'], ['against', 'attack'],
    ['take', 'attack'], ['takes', 'attack'], ['taking', 'attack'],
    ['capture', 'attack'], ['captures', 'attack'], ['capturing', 'attack'],
    ['recapture', 'attack'], ['recaptures', 'attack'], ['recapturing', 'attack'],
    ['attacker to', 'attack'], ['attacker on', 'attack'], ['attackers on', 'attack'], ['attackers to', 'attack'],
    ['win', 'attack'], ['wins', 'attack'], ['winning', 'attack'],
    // protect
    ['protect', 'protect'], ['protects', 'protect'], ['protecting', 'protect'], ['protected', 'protect'],
    ['defend', 'protect'], ['defends', 'protect'], ['defending', 'protect'], ['defended', 'protect'],
    ['support', 'protect'], ['supports', 'protect'], ['supporting', 'protect'], ['supported', 'protect'],
    ['guard', 'protect'], ['guards', 'protect'], ['guarding', 'protect'],
    ['hold', 'protect'], ['holds', 'protect'], ['holding', 'protect'],
    ['back up', 'protect'], ['backs up', 'protect'], ['backing up', 'protect'],
    ['reinforce', 'protect'], ['reinforces', 'protect'], ['overprotect', 'protect'], ['overprotects', 'protect'],
    ['defender to', 'protect'], ['defender of', 'protect'], ['defenders to', 'protect'], ['defenders of', 'protect'],
    ['hang on to', 'protect'], ['hangs on to', 'protect'], ['hold on to', 'protect'], ['holds on to', 'protect'],
    ['shore up', 'protect'], ['shores up', 'protect'],
    // prevent
    ['prevent', 'prevent'], ['prevents', 'prevent'], ['preventing', 'prevent'],
    ['stop', 'prevent'], ['stops', 'prevent'], ['stopping', 'prevent'],
    ['rule out', 'prevent'], ['rules out', 'prevent'],
    ['deny', 'prevent'], ['denies', 'prevent'], ['avoid', 'prevent'], ['avoids', 'prevent'],
    ['block', 'prevent'], ['blocks', 'prevent'], ['blocking', 'prevent'],
    ['blockade', 'prevent'], ['blockades', 'prevent'],
    ['discourage', 'prevent'], ['discourages', 'prevent'],
    ['trade off', 'attack'], ['trades off', 'attack'], ['swap off', 'attack'], ['swaps off', 'attack'],
    ['off', 'prevent'], ['away from', 'prevent'], ['guard against', 'prevent'], ['guards against', 'prevent'],
    ['takes away', 'prevent'], ['take away', 'prevent'],
    // control
    ['control', 'control'], ['controls', 'control'], ['controlling', 'control'],
    ['cover', 'control'], ['covers', 'control'], ['covering', 'control'],
    ['watch', 'control'], ['watches', 'control'], ['watching', 'control'],
    ['occupy', 'control'], ['occupies', 'control'], ['occupying', 'control'],
    ['claim', 'control'], ['claims', 'control'], ['claiming', 'control'],
    ['fight for', 'control'], ['fights for', 'control'], ['fighting for', 'control'], ['fight over', 'control'],
    ['grip on', 'control'], ['hold on', 'control'], ['outpost on', 'control'], ['outpost', 'control'],
    ['towards', 'control'], ['toward', 'control'], ['contest', 'control'], ['contests', 'control'],
    // plan
    ['prepare', 'plan'], ['prepares', 'plan'], ['preparing', 'plan'],
    ['head for', 'plan'], ['heads for', 'plan'], ['heading for', 'plan'],
    ['aim for', 'plan'], ['aims for', 'plan'], ['ready for', 'plan'],
    ['make room for', 'plan'], ['makes room for', 'plan'], ['making room for', 'plan'],
    ['free', 'plan'], ['frees', 'plan'], ['freeing', 'plan'],
    ['route', 'plan'], ['journey', 'plan'], ['via', 'plan'], ['reach', 'plan'], ['reaches', 'plan'],
    ['retreat to', 'plan'], ['retreat square', 'plan'], ['retreat on', 'plan'],
    ['jump to', 'plan'], ['jumps to', 'plan'], ['heads to', 'plan'], ['head to', 'plan'],
  ] as [string, NoteKind][]
).sort((a, b) => b[0].split(' ').length - a[0].split(' ').length)

/** Words after which a square names who does something, not what is affected ("hit by b4"). */
const RESET = new Set(['by', 'after', 'if', 'unless', 'before', 'when', 'than', 'but', 'while', 'so', 'which', 'where', 'that', 'with'])

const NEGATION = new Set(['no', 'without', 'cannot', "can't", 'never'])

/** After "and"/"or" these words keep the list going ("attacks the knight on c6 and the bishop on c5"). */
const LIST_GOES_ON = new Set(['the', 'your', 'its', 'his', 'a', 'an', 'also', 'then', 'on'])

/** How many words may sit between the verb and the square ("attacks the knight on c6" is 3). */
const REACH = 5

function startsPhrase(words: string[], i: number): [string, NoteKind] | undefined {
  return PHRASES.find(([p]) => p.split(' ').every((w, k) => words[i + k] === w))
}

export interface NoteSegment {
  text: string
  square?: string
  kind?: NoteKind
}

const TOKEN = /(\.\.\.)?\b([a-h][1-8])\b|\.\.\.|[A-Za-z']+|[.;:!?(),]|[^\sA-Za-z.;:!?(),]+/g

/** Splits an explanation into plain text and square names, tagging each square with what the move does to it. */
export function parseNote(text: string): NoteSegment[] {
  const tokens: { text: string; start: number; square?: string }[] = []
  for (const m of text.matchAll(TOKEN)) {
    const start = m.index!
    const prevChar = text[start - 1] ?? ''
    // "Nf6", "exd5" and "Bxf7+" are moves, not plain squares.
    const square = m[2] && !/[A-Za-z0-9]/.test(prevChar) ? m[2] : undefined
    tokens.push({ text: m[0], start, square })
  }

  const words = tokens.map((t) => t.text.toLowerCase())
  const kinds = new Map<number, NoteKind>()
  let current: NoteKind | null = null
  let gap = 0
  // "no ...Ng4 hitting f2" or "without allowing ...b5": the move takes that action away, so it prevents it.
  let negated = false
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]
    if (t.square) {
      // "the e1-a5 diagonal" names a line, not a square.
      const onDiagonal = (tokens[i + 1]?.text === '-' && words[i + 3] === 'diagonal') || (tokens[i - 1]?.text === '-' && words[i + 1] === 'diagonal')
      if (current && gap <= REACH && !onDiagonal) {
        // "takes g4 away from ..." means the square is denied, not captured.
        const after = words[i + 1]
        kinds.set(i, negated || (current === 'attack' && after === 'away') ? 'prevent' : current)
        gap = 0 // allow lists: "attacks e4 and d5"
      } else gap++
      continue
    }
    if (/^[.;:!?]$/.test(t.text)) {
      current = null
      negated = false
      continue
    }
    // A comma ends the action unless a list of squares follows ("attacks e4, d5 and f7").
    if (t.text === ',' && !tokens[i + 1]?.square) {
      current = null
      continue
    }
    if (!/^[a-z']+$/.test(words[i])) continue
    if (RESET.has(words[i])) {
      current = null
      negated = false
      continue
    }
    if (NEGATION.has(words[i])) {
      negated = true
      gap++
      continue
    }
    // "protect e4 calmly and keep d4": a new verb after "and" starts a new action.
    if ((words[i] === 'and' || words[i] === 'or') && current) {
      const nextTok = tokens[i + 1]
      const continues = !nextTok || nextTok.square || LIST_GOES_ON.has(words[i + 1]) || startsPhrase(words, i + 1)
      if (!continues) current = null
      gap++
      continue
    }
    const match = startsPhrase(words, i)
    if (match) {
      current = match[1]
      gap = 0
      i += match[0].split(' ').length - 1
    } else gap++
  }

  const out: NoteSegment[] = []
  let pos = 0
  tokens.forEach((t, i) => {
    const kind = kinds.get(i)
    if (!kind) return
    const at = t.start + (t.text.length - t.square!.length)
    if (at > pos) out.push({ text: text.slice(pos, at) })
    out.push({ text: t.square!, square: t.square, kind })
    pos = at + t.square!.length
  })
  if (pos < text.length) out.push({ text: text.slice(pos) })
  return out
}

/** The squares to colour on the board for one explanation. The first verb wins if a square is mentioned twice. */
export function noteSquares(text: string | null | undefined): Record<string, NoteKind> {
  const out: Record<string, NoteKind> = {}
  if (!text) return out
  for (const s of parseNote(text)) if (s.square && s.kind && !out[s.square]) out[s.square] = s.kind
  return out
}

/** The explanation of the most recent move in the log, whose squares the board colours. */
export function latestMoveNote(entries: CoachEntry[], ply?: number): string | null {
  for (let i = entries.length - 1; i >= 0; i--) {
    const e = entries[i]
    if (e.who === 'note') continue
    return ply === undefined || e.ply === ply ? e.text : null
  }
  return null
}
