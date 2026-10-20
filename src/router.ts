import { useSyncExternalStore } from 'react'

// Routes live in memory and are mirrored to the URL hash when the host allows it,
// so deep links work on a normal static host and navigation still works inside
// sandboxed frames that ignore hash changes.
function readHash(): string {
  try {
    return window.location.hash.replace(/^#/, '') || '/'
  } catch {
    return '/'
  }
}

let current = readHash()
const listeners = new Set<() => void>()

function set(path: string) {
  if (path === current) return
  current = path
  listeners.forEach((l) => l())
}

window.addEventListener('hashchange', () => set(readHash()))

export interface Route {
  parts: string[]
  query: URLSearchParams
}

export function useRoute(): Route {
  const hash = useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => current,
  )
  const [path, search = ''] = hash.split('?')
  return { parts: path.split('/').filter(Boolean).map(decodeURIComponent), query: new URLSearchParams(search) }
}

export function go(path: string) {
  set(path)
  try {
    window.location.hash = path
    window.scrollTo(0, 0)
  } catch {
    // The route already changed in memory.
  }
}
