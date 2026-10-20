import { useSyncExternalStore } from 'react'

export interface LineProgress {
  /** Spaced repetition box: 1 = just learned, 5 = well known. */
  box: number
  due: number
  reps: number
  lapses: number
  lastMistakes: number
}

type Store = Record<string, LineProgress>

const KEY = 'chess-trainer:progress:v1'
const DAY = 24 * 60 * 60 * 1000
const INTERVALS = [0, 1, 3, 7, 16, 35].map((d) => d * DAY)

function read(): Store {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Store
  } catch {
    return {}
  }
}

let store: Store = read()
const listeners = new Set<() => void>()

function write(next: Store) {
  store = next
  try {
    localStorage.setItem(KEY, JSON.stringify(store))
  } catch {
    // Private mode or storage full: progress stays in memory for this visit.
  }
  listeners.forEach((l) => l())
}

export function recordResult(lineId: string, mistakes: number): LineProgress {
  const prev = store[lineId]
  const box = mistakes === 0 ? Math.min((prev?.box ?? 0) + 1, 5) : 1
  const entry: LineProgress = {
    box,
    due: Date.now() + INTERVALS[box],
    reps: (prev?.reps ?? 0) + 1,
    lapses: (prev?.lapses ?? 0) + (mistakes > 0 && prev ? 1 : 0),
    lastMistakes: mistakes,
  }
  write({ ...store, [lineId]: entry })
  return entry
}

export function resetProgress() {
  write({})
}

export function useProgress(): Store {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => store,
  )
}

export function isDue(p: LineProgress | undefined, now = Date.now()): boolean {
  return !!p && p.due <= now
}

export function formatDue(due: number): string {
  const days = Math.round((due - Date.now()) / DAY)
  if (days <= 0) return 'due now'
  if (days === 1) return 'in 1 day'
  return `in ${days} days`
}

export type LineStatus = 'new' | 'learning' | 'known'

export function lineStatus(p: LineProgress | undefined): LineStatus {
  if (!p) return 'new'
  return p.box >= 3 ? 'known' : 'learning'
}
