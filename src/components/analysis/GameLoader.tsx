import { useState } from 'react'
import { famousGames } from '../../data/famousGames'
import { chessComGames, lichessGames, randomGame, suggestedPlayers, type GameSummary, type Platform } from '../../lib/gameSources'
import { parsePgn, splitPgns, type LoadedGame } from '../../lib/pgn'
import type { Side } from '../../data/types'

type Tab = 'famous' | 'player' | 'random' | 'pgn'

export interface LoadRequest {
  game: LoadedGame
  /** The PGN as loaded, kept so the game survives a page reload. */
  pgn: string
  /** The side to show at the bottom, e.g. the searched player's colour. */
  orientation?: Side
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'famous', label: 'Famous games' },
  { id: 'player', label: 'Player games' },
  { id: 'random', label: 'Random game' },
  { id: 'pgn', label: 'Paste PGN' },
]

const PLATFORM_LABEL: Record<Platform, string> = { lichess: 'Lichess', chesscom: 'Chess.com' }

function load(pgn: string, link?: string, orientation?: Side): LoadRequest {
  const game = parsePgn(pgn)
  return { game: { ...game, link: link ?? game.headers.Link ?? (game.headers.Site?.startsWith('http') ? game.headers.Site : undefined) }, pgn, orientation }
}

/** Opens a game from a summary row (fetching nothing; the PGN came with the list). */
function loadSummary(g: GameSummary, player?: string): LoadRequest {
  if (!g.pgn) throw new Error('This game has no moves to show.')
  const p = player?.toLowerCase()
  const orientation: Side | undefined = p && g.black.toLowerCase().endsWith(p) ? 'black' : undefined
  return load(g.pgn, g.link, orientation)
}

export function GameList({ games, player, onPick }: { games: GameSummary[]; player?: string; onPick: (g: GameSummary) => void }) {
  return (
    <ul className="game-list">
      {games.map((g) => (
        <li key={g.id}>
          <button type="button" onClick={() => onPick(g)}>
            <span className="game-players">
              <span className={g.white.toLowerCase().endsWith(player?.toLowerCase() ?? '\0') ? 'me' : ''}>
                {g.white}
                {g.whiteRating ? <span className="muted"> ({g.whiteRating})</span> : null}
              </span>
              <span className="muted"> vs </span>
              <span className={g.black.toLowerCase().endsWith(player?.toLowerCase() ?? '\0') ? 'me' : ''}>
                {g.black}
                {g.blackRating ? <span className="muted"> ({g.blackRating})</span> : null}
              </span>
            </span>
            <span className="game-meta small muted">
              <strong className="game-result-tag">{g.result}</strong>
              {[g.speed, g.date, g.opening].filter(Boolean).join(' · ')}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export function GameLoader({ onLoad, onCancel }: { onLoad: (r: LoadRequest) => void; onCancel?: () => void }) {
  const [tab, setTab] = useState<Tab>('famous')
  const [platform, setPlatform] = useState<Platform>('chesscom')
  const [username, setUsername] = useState('')
  const [games, setGames] = useState<{ player: string; platform: Platform; list: GameSummary[] } | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pgnText, setPgnText] = useState('')

  function open(make: () => LoadRequest) {
    try {
      setError(null)
      onLoad(make())
    } catch (e) {
      setError((e as Error).message)
    }
  }

  async function search(p: Platform, user: string) {
    const name = user.trim()
    if (!name) return
    setPlatform(p)
    setUsername(name)
    setBusy(`Loading ${name}'s games from ${PLATFORM_LABEL[p]}…`)
    setError(null)
    setGames(null)
    try {
      const list = p === 'lichess' ? await lichessGames(name) : await chessComGames(name)
      if (!list.length) throw new Error(`${name} has no recent standard games on ${PLATFORM_LABEL[p]}.`)
      setGames({ player: name, platform: p, list })
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusy(null)
    }
  }

  async function random(p: Platform) {
    setError(null)
    setBusy('Finding a game…')
    try {
      const g = await randomGame(p, setBusy)
      open(() => loadSummary(g))
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="narrow loader">
      <div className="session-head">
        {onCancel && (
          <button type="button" className="link" onClick={onCancel}>
            ← Back to the game
          </button>
        )}
        <h1>Analyse a game</h1>
        <p className="lead">
          Open a famous game, a recent game by any Lichess or Chess.com player, or paste a PGN. Then step through it with Stockfish: watch the evaluation bar move, see
          the engine's best lines, and play your own moves to see where they lead.
        </p>
      </div>

      <div className="filters" role="tablist" aria-label="Where the game comes from">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? 'on' : ''}
            onClick={() => {
              setTab(t.id)
              setError(null)
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && (
        <p className="feedback bad" role="alert">
          {error}
        </p>
      )}
      {busy && (
        <p className="muted" role="status">
          {busy}
        </p>
      )}

      {tab === 'famous' && (
        <ul className="famous-list">
          {famousGames.map((g) => {
            const h = parsePgn(g.pgn).headers
            return (
              <li key={g.id}>
                <button type="button" onClick={() => open(() => load(g.pgn))}>
                  <strong>{g.name}</strong>
                  <span className="small">
                    {h.White} – {h.Black}, {h.Site} {h.Date?.slice(0, 4)}
                  </span>
                  <span className="small muted">{g.blurb}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}

      {tab === 'player' && (
        <section>
          <form
            className="player-search"
            onSubmit={(e) => {
              e.preventDefault()
              search(platform, username)
            }}
          >
            <div className="segmented" role="group" aria-label="Site">
              {(['chesscom', 'lichess'] as const).map((p) => (
                <button key={p} type="button" className={platform === p ? 'on' : ''} aria-pressed={platform === p} onClick={() => setPlatform(p)}>
                  {PLATFORM_LABEL[p]}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={`${PLATFORM_LABEL[platform]} username`}
              aria-label="Username"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <button type="submit" className="primary" disabled={!username.trim() || !!busy}>
              Find games
            </button>
          </form>
          <p className="small muted">Try a top player:</p>
          <div className="row">
            {suggestedPlayers.map((s) => (
              <button key={s.platform + s.username} type="button" className="chip" disabled={!!busy} onClick={() => search(s.platform, s.username)}>
                {s.label}
              </button>
            ))}
          </div>
          {games && (
            <>
              <h2>
                Recent games by {games.player} <span className="muted small">on {PLATFORM_LABEL[games.platform]}</span>
              </h2>
              <GameList games={games.list} player={games.player} onPick={(g) => open(() => loadSummary(g, games.player))} />
            </>
          )}
        </section>
      )}

      {tab === 'random' && (
        <section className="random-pick">
          <p>Pick a random recent game by a strong player.</p>
          <div className="row">
            <button type="button" className="primary" disabled={!!busy} onClick={() => random('chesscom')}>
              Random grandmaster game (Chess.com)
            </button>
            <button type="button" disabled={!!busy} onClick={() => random('lichess')}>
              Random top-player game (Lichess)
            </button>
          </div>
          <p className="small muted">
            Chess.com picks any account with the GM title. Lichess picks someone from the top 100 of a random leaderboard (bullet, blitz, rapid or classical).
          </p>
        </section>
      )}

      {tab === 'pgn' && (
        <section>
          <textarea
            className="pgn-input"
            value={pgnText}
            onChange={(e) => setPgnText(e.target.value)}
            rows={10}
            placeholder={'[White "..."]\n[Black "..."]\n\n1. e4 e5 2. Nf3 Nc6 ...'}
            aria-label="PGN"
            spellCheck={false}
          />
          <div className="row">
            <button type="button" className="primary" disabled={!pgnText.trim()} onClick={() => open(() => load(splitPgns(pgnText)[0] ?? pgnText))}>
              Analyse
            </button>
          </div>
          <p className="small muted">Comments and side variations are ignored. If the text holds several games, the first one opens.</p>
        </section>
      )}
    </div>
  )
}
