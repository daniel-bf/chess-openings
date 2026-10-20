import type { LineMove } from '../lib/repertoire'

interface Props {
  moves: LineMove[]
  /** Number of moves played so far; moves after it are hidden or dimmed. */
  played: number
  hideFuture?: boolean
  onJump?: (played: number) => void
}

function moveNumber(move: LineMove): string {
  const [, turn, , , , full] = move.fenBefore.split(' ')
  return turn === 'w' ? `${full}.` : `${full}…`
}

export function MoveList({ moves, played, hideFuture, onJump }: Props) {
  const shown = hideFuture ? moves.slice(0, played) : moves
  return (
    <ol className="movelist">
      {shown.map((m, i) => {
        const showNumber = i === 0 || m.fenBefore.split(' ')[1] === 'w'
        return (
          <li key={i} className={i === played - 1 ? 'current' : i >= played ? 'future' : ''}>
            {showNumber && <span className="num">{moveNumber(m)}</span>}
            <button type="button" disabled={!onJump} onClick={() => onJump?.(i + 1)} className={m.isTrainee ? 'yours' : ''}>
              {m.san}
            </button>
          </li>
        )
      })}
      {hideFuture && played < moves.length && <li className="future">…</li>}
    </ol>
  )
}
