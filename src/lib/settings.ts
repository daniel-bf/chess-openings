import { useSyncExternalStore } from 'react'

/** How long the opponent pauses before replying, so there is time to read the latest note. */
export type Pace = 'slow' | 'normal' | 'fast'

export const PACE_LABEL: Record<Pace, string> = { slow: 'Slow', normal: 'Normal', fast: 'Fast' }

// Base pause, extra time per character of the note just shown, and a cap (ms).
const TIMING: Record<Pace, [number, number, number]> = {
  slow: [2000, 60, 10000],
  normal: [1200, 35, 6000],
  fast: [700, 0, 700],
}

/** The pause before the opponent's reply, longer when the note to read is longer. */
export function replyDelay(pace: Pace, noteText = ''): number {
  const [base, perChar, cap] = TIMING[pace]
  return Math.min(cap, base + perChar * noteText.length)
}

const KEY = 'chess-trainer:pace:v2'

function read(): Pace {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'slow' || v === 'normal' || v === 'fast') return v
  } catch {
    // Use the default.
  }
  return 'slow'
}

let pace: Pace = read()
const listeners = new Set<() => void>()

export function setPace(next: Pace) {
  pace = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    // Kept in memory only.
  }
  listeners.forEach((l) => l())
}

export function usePace(): Pace {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => pace,
  )
}
