// Free, keyless sources of real games, all called straight from the browser (they allow CORS):
// - Lichess: a player's recent games, the leaderboards, and the masters opening explorer.
// - Chess.com: a player's monthly game archives and the list of titled players.

export type Platform = 'lichess' | 'chesscom'

/** A game in a list, before it is opened. */
export interface GameSummary {
  id: string
  platform: Platform | 'masters'
  white: string
  black: string
  whiteRating?: number
  blackRating?: number
  result: string
  date?: string
  speed?: string
  opening?: string
  link?: string
  /** The full PGN when the source already sent it. */
  pgn?: string
}

async function getJson<T>(url: string, accept = 'application/json'): Promise<T> {
  let res: Response
  try {
    res = await fetch(url, { headers: { Accept: accept } })
  } catch {
    throw new Error('Could not reach the server. Check your connection.')
  }
  if (res.status === 404) throw new Error('Player not found.')
  if (res.status === 429) throw new Error('Too many requests. Wait a minute and try again.')
  if (res.status === 401 || res.status === 403) throw new Error('This source refused the request.')
  if (!res.ok) throw new Error(`The server answered ${res.status}.`)
  return res.json() as Promise<T>
}

function isoDate(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10)
}

// ---- Lichess ----

interface LichessPlayer {
  user?: { name: string; title?: string }
  rating?: number
  aiLevel?: number
}

interface LichessGame {
  id: string
  speed?: string
  variant?: string
  createdAt: number
  status: string
  winner?: 'white' | 'black'
  players: { white: LichessPlayer; black: LichessPlayer }
  opening?: { name: string }
  pgn?: string
}

function lichessName(p: LichessPlayer): string {
  if (p.aiLevel) return `Stockfish level ${p.aiLevel}`
  if (!p.user) return 'Anonymous'
  return p.user.title ? `${p.user.title} ${p.user.name}` : p.user.name
}

function lichessResult(g: LichessGame): string {
  if (g.winner) return g.winner === 'white' ? '1-0' : '0-1'
  return ['draw', 'stalemate'].includes(g.status) ? '½-½' : '*'
}

/** The player's most recent standard games on Lichess, newest first. */
export async function lichessGames(username: string, max = 25): Promise<GameSummary[]> {
  const url = `https://lichess.org/api/games/user/${encodeURIComponent(username)}?max=${max}&pgnInJson=true&opening=true&clocks=false&evals=false&perfType=ultraBullet,bullet,blitz,rapid,classical,correspondence`
  let res: Response
  try {
    res = await fetch(url, { headers: { Accept: 'application/x-ndjson' } })
  } catch {
    throw new Error('Could not reach Lichess. Check your connection.')
  }
  if (res.status === 404) throw new Error(`No Lichess player called "${username}".`)
  if (res.status === 429) throw new Error('Lichess asks us to slow down. Wait a minute and try again.')
  if (!res.ok) throw new Error(`Lichess answered ${res.status}.`)
  const text = await res.text()
  const games = text
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l) as LichessGame)
    .filter((g) => !g.variant || g.variant === 'standard')
  return games.map((g) => ({
    id: g.id,
    platform: 'lichess',
    white: lichessName(g.players.white),
    black: lichessName(g.players.black),
    whiteRating: g.players.white.rating,
    blackRating: g.players.black.rating,
    result: lichessResult(g),
    date: isoDate(g.createdAt),
    speed: g.speed,
    opening: g.opening?.name,
    link: `https://lichess.org/${g.id}`,
    pgn: g.pgn,
  }))
}

/** Usernames from a Lichess leaderboard (top players of one speed). */
export async function lichessTopPlayers(perf: 'bullet' | 'blitz' | 'rapid' | 'classical' = 'blitz', count = 50): Promise<string[]> {
  const data = await getJson<{ users: { username: string }[] }>(`https://lichess.org/api/player/top/${count}/${perf}`, 'application/vnd.lichess.v3+json')
  return data.users.map((u) => u.username)
}

// ---- Chess.com ----

interface ChessComSide {
  username: string
  rating?: number
  result: string
}

interface ChessComGame {
  url: string
  pgn?: string
  time_class?: string
  rules?: string
  end_time?: number
  white: ChessComSide
  black: ChessComSide
  eco?: string
}

function chessComResult(g: ChessComGame): string {
  if (g.white.result === 'win') return '1-0'
  if (g.black.result === 'win') return '0-1'
  return '½-½'
}

function chessComOpening(g: ChessComGame): string | undefined {
  // "https://www.chess.com/openings/Sicilian-Defense-Najdorf-Variation-6.Bg5" -> "Sicilian Defense Najdorf Variation"
  const slug = g.eco?.split('/openings/')[1]
  if (!slug) return undefined
  return decodeURIComponent(slug)
    .replace(/-\d.*$/, '')
    .replace(/-/g, ' ')
}

/** The player's most recent standard games on Chess.com, newest first. */
export async function chessComGames(username: string, max = 25): Promise<GameSummary[]> {
  const user = encodeURIComponent(username.toLowerCase())
  let archives: string[]
  try {
    archives = (await getJson<{ archives: string[] }>(`https://api.chess.com/pub/player/${user}/games/archives`)).archives
  } catch (e) {
    if ((e as Error).message === 'Player not found.') throw new Error(`No Chess.com player called "${username}".`)
    throw e
  }
  const out: GameSummary[] = []
  // Walk back month by month until there are enough games (at most six months).
  for (const month of archives.slice(-6).reverse()) {
    const { games } = await getJson<{ games: ChessComGame[] }>(month)
    const standard = games.filter((g) => (!g.rules || g.rules === 'chess') && g.pgn).reverse()
    for (const g of standard) {
      out.push({
        id: g.url,
        platform: 'chesscom',
        white: g.white.username,
        black: g.black.username,
        whiteRating: g.white.rating,
        blackRating: g.black.rating,
        result: chessComResult(g),
        date: g.end_time ? isoDate(g.end_time * 1000) : undefined,
        speed: g.time_class,
        opening: chessComOpening(g),
        link: g.url,
        pgn: g.pgn,
      })
    }
    if (out.length >= max) break
  }
  return out.slice(0, max)
}

/** Every Chess.com account with a title, e.g. "GM". */
export async function chessComTitled(title: 'GM' | 'IM' = 'GM'): Promise<string[]> {
  return (await getJson<{ players: string[] }>(`https://api.chess.com/pub/titled/${title}`)).players
}

// ---- Lichess masters explorer ----

interface MastersPlayer {
  name: string
  rating?: number
}

interface MastersGame {
  id: string
  winner: 'white' | 'black' | null
  white: MastersPlayer
  black: MastersPlayer
  year?: number
  month?: string
}

/** Over-the-board master games that reached this position (from the Lichess masters database). */
export async function mastersGames(fen: string): Promise<{ total: number; games: GameSummary[] }> {
  const data = await getJson<{ white: number; draws: number; black: number; topGames?: MastersGame[]; recentGames?: MastersGame[] }>(
    `https://explorer.lichess.ovh/masters?fen=${encodeURIComponent(fen)}&moves=0&topGames=15`,
  )
  const seen = new Set<string>()
  const games = [...(data.topGames ?? []), ...(data.recentGames ?? [])].filter((g) => !seen.has(g.id) && seen.add(g.id))
  return {
    total: data.white + data.draws + data.black,
    games: games.map((g) => ({
      id: g.id,
      platform: 'masters',
      white: g.white.name,
      black: g.black.name,
      whiteRating: g.white.rating,
      blackRating: g.black.rating,
      result: g.winner === 'white' ? '1-0' : g.winner === 'black' ? '0-1' : '½-½',
      date: g.month ?? (g.year ? String(g.year) : undefined),
      link: `https://lichess.org/${g.id}`,
    })),
  }
}

/** The PGN of one masters game. */
export async function mastersPgn(id: string): Promise<string> {
  let res: Response
  try {
    res = await fetch(`https://explorer.lichess.ovh/masters/pgn/${encodeURIComponent(id)}`)
  } catch {
    throw new Error('Could not reach the Lichess masters database.')
  }
  if (!res.ok) throw new Error(`The masters database answered ${res.status}.`)
  return res.text()
}

// ---- Random games ----

function pick<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)]
}

/** A random recent game by a random top Lichess player or a random Chess.com grandmaster. */
export async function randomGame(source: Platform, onStatus?: (text: string) => void): Promise<GameSummary> {
  if (source === 'lichess') {
    const perf = pick(['bullet', 'blitz', 'rapid', 'classical'] as const)
    onStatus?.(`Picking a player from the Lichess ${perf} leaderboard…`)
    const players = await lichessTopPlayers(perf, 100)
    for (let tries = 0; tries < 4; tries++) {
      const user = pick(players)
      onStatus?.(`Loading games by ${user}…`)
      const games = await lichessGames(user, 15)
      if (games.length) return pick(games)
    }
    throw new Error('Could not find a recent game. Try again.')
  }
  onStatus?.('Picking a grandmaster on Chess.com…')
  const gms = await chessComTitled('GM')
  for (let tries = 0; tries < 6; tries++) {
    const user = pick(gms)
    onStatus?.(`Loading games by GM ${user}…`)
    try {
      const games = await chessComGames(user, 20)
      if (games.length) return pick(games)
    } catch {
      // Many accounts have no games; try someone else.
    }
  }
  throw new Error('The grandmasters picked had no recent games. Try again.')
}

/** Well-known online accounts, offered as one-click suggestions. */
export const suggestedPlayers: { platform: Platform; username: string; label: string }[] = [
  { platform: 'chesscom', username: 'MagnusCarlsen', label: 'Magnus Carlsen' },
  { platform: 'chesscom', username: 'Hikaru', label: 'Hikaru Nakamura' },
  { platform: 'chesscom', username: 'FabianoCaruana', label: 'Fabiano Caruana' },
  { platform: 'chesscom', username: 'Firouzja2003', label: 'Alireza Firouzja' },
  { platform: 'chesscom', username: 'AnishGiri', label: 'Anish Giri' },
  { platform: 'chesscom', username: 'GothamChess', label: 'Levy Rozman (IM)' },
  { platform: 'lichess', username: 'DrNykterstein', label: 'Magnus Carlsen (Lichess)' },
  { platform: 'lichess', username: 'penguingim1', label: 'Andrew Tang (Lichess)' },
]
