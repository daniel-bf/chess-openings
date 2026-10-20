import { useEffect, useMemo, useRef, useState } from 'react'
import { Chessboard } from 'react-chessboard'
import { Chess, type Square } from 'chess.js'
import type { Side } from '../data/types'
import { play } from '../lib/sound'

export interface MoveInput {
  from: string
  to: string
  promotion?: string
}

export interface BoardArrow {
  from: string
  to: string
  color?: string
}

interface Props {
  fen: string
  orientation: Side
  /** Which side the user may move, or null when the board is read-only. */
  movable: Side | null
  onMove?: (move: MoveInput) => boolean
  arrows?: BoardArrow[]
  lastMove?: { from: string; to: string } | null
  /** Squares to tint, e.g. a wrong-move flash. */
  marks?: Record<string, string>
}

export const ARROW_HINT = 'rgba(46, 125, 230, 0.8)'
export const ARROW_NEXT = 'rgba(232, 160, 32, 0.85)'
export const ARROW_BEST = 'rgba(30, 140, 70, 0.85)'
export const ARROW_SECOND = 'rgba(46, 125, 230, 0.6)'

export function Board({ fen, orientation, movable, onMove, arrows = [], lastMove, marks = {} }: Props) {
  const [selection, setSelection] = useState<{ fen: string; square: string } | null>(null)
  const selected = selection?.fen === fen ? selection.square : null
  const setSelected = (square: string | null) => setSelection(square ? { fen, square } : null)
  const chess = useMemo(() => new Chess(fen), [fen])
  const turn: Side = chess.turn() === 'w' ? 'white' : 'black'
  const canMove = movable !== null && movable === turn && !chess.isGameOver()

  // Play a sound when the position changes by one move (forwards or backwards).
  const previous = useRef(fen)
  useEffect(() => {
    const before = previous.current
    previous.current = fen
    if (before === fen) return
    const pieces = (f: string) => f.split(' ')[0].replace(/[^a-zA-Z]/g, '').length
    const lost = pieces(before) - pieces(fen)
    if (Math.abs(lost) > 1) return
    const moved = lastMove ? chess.get(lastMove.to as Square) : undefined
    const castled = moved?.type === 'k' && lastMove && Math.abs(lastMove.from.charCodeAt(0) - lastMove.to.charCodeAt(0)) === 2
    play(chess.inCheck() ? 'check' : lost === 1 ? 'capture' : castled ? 'castle' : 'move')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen])

  const targets = useMemo(() => {
    if (!selected || !canMove) return []
    return chess.moves({ square: selected as Square, verbose: true }).map((m) => m.to)
  }, [chess, selected, canMove])

  function attempt(from: string, to: string): boolean {
    if (!canMove || !onMove) return false
    const legal = chess.moves({ square: from as Square, verbose: true }).find((m) => m.to === to)
    if (!legal) return false
    setSelected(null)
    const accepted = onMove({ from, to, promotion: legal.promotion ? 'q' : undefined })
    if (!accepted) play('wrong')
    return accepted
  }

  function ownPiece(square: string): boolean {
    const piece = chess.get(square as Square)
    return !!piece && piece.color === chess.turn()
  }

  const squareStyles: Record<string, React.CSSProperties> = {}
  if (lastMove) {
    squareStyles[lastMove.from] = { background: 'rgba(255, 214, 79, 0.42)' }
    squareStyles[lastMove.to] = { background: 'rgba(255, 214, 79, 0.55)' }
  }
  if (selected) squareStyles[selected] = { background: 'rgba(80, 160, 90, 0.55)' }
  for (const t of targets) {
    squareStyles[t] = {
      ...squareStyles[t],
      backgroundImage: chess.get(t as Square)
        ? 'radial-gradient(circle, transparent 58%, rgba(20, 60, 30, 0.45) 60%)'
        : 'radial-gradient(circle, rgba(20, 60, 30, 0.45) 18%, transparent 20%)',
    }
  }
  if (chess.inCheck()) {
    const king = chess.board().flat().find((p) => p && p.type === 'k' && p.color === chess.turn())
    if (king) squareStyles[king.square] = { background: 'radial-gradient(circle, rgba(230, 40, 40, 0.85) 25%, transparent 75%)' }
  }
  for (const [sq, color] of Object.entries(marks)) squareStyles[sq] = { background: color }

  return (
    <div className="board">
      <Chessboard
        options={{
          position: fen,
          boardOrientation: orientation,
          allowDrawingArrows: true,
          arrows: arrows.map((a) => ({ startSquare: a.from, endSquare: a.to, color: a.color ?? ARROW_HINT })),
          squareStyles,
          darkSquareStyle: { backgroundColor: '#b58863' },
          lightSquareStyle: { backgroundColor: '#f0d9b5' },
          animationDurationInMs: 220,
          canDragPiece: ({ piece }) => canMove && piece.pieceType[0] === chess.turn(),
          onPieceDrop: ({ sourceSquare, targetSquare }) => (targetSquare ? attempt(sourceSquare, targetSquare) : false),
          onSquareClick: ({ square }) => {
            if (!canMove) return
            if (selected && targets.includes(square as Square)) {
              attempt(selected, square)
            } else if (ownPiece(square)) {
              setSelected(square === selected ? null : square)
            } else {
              setSelected(null)
            }
          },
        }}
      />
    </div>
  )
}
