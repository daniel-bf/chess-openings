import { useRoute, go } from './router'
import { Home } from './pages/Home'
import { NotFound, OpeningPage } from './pages/OpeningPage'
import { LearnPage } from './pages/LearnPage'
import { DrillPage } from './pages/DrillPage'
import { PlayPage } from './pages/PlayPage'
import { useSound } from './lib/sound'
import { SoundsPage } from './pages/SoundsPage'

export default function App() {
  const { parts, query } = useRoute()
  const [page, a, b] = parts
  const { on: soundOn } = useSound()

  let content: React.ReactNode
  if (!page) content = <Home />
  else if (page === 'opening' && a) content = <OpeningPage id={a} />
  else if (page === 'learn' && a) content = <LearnPage key={a} lineId={a} />
  else if (page === 'review') content = <DrillPage key="review" mode="review" />
  else if (page === 'practice' && a)
    content = <DrillPage key={`${a}-${b}`} mode="practice" openingId={a} lineIndex={b === undefined ? undefined : Number(b)} />
  else if (page === 'play') content = <PlayPage preselect={query.get('openings')} />
  else if (page === 'sounds') content = <SoundsPage />
  else content = <NotFound />

  return (
    <>
      <nav className="topbar">
        <button type="button" className="brand" aria-label="Opening Trainer home" onClick={() => go('/')}>
          <span aria-hidden>♞</span>
          <span className="brand-name"> Opening Trainer</span>
        </button>
        <div className="topnav">
          <button type="button" className={!page || page === 'opening' || page === 'learn' ? 'on' : ''} onClick={() => go('/')}>
            Learn
          </button>
          <button type="button" className={page === 'review' ? 'on' : ''} onClick={() => go('/review')}>
            Review
          </button>
          <button type="button" className={page === 'play' ? 'on' : ''} onClick={() => go('/play')}>
            Play
          </button>
          <button
            type="button"
            className={`sound-toggle${page === 'sounds' ? ' on' : ''}`}
            aria-label="Sound settings"
            title="Sound settings"
            onClick={() => go('/sounds')}
          >
            {soundOn ? '🔊' : '🔇'}
          </button>
        </div>
      </nav>
      <main>{content}</main>
    </>
  )
}
