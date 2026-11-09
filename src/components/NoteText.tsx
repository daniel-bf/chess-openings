import { NOTE_COLOR, NOTE_KINDS, noteSquares, parseNote, type NoteKind } from '../lib/squareNotes'

/** An explanation with the squares it talks about coloured by what the move does to them. */
export function NoteText({ text }: { text: string }) {
  return (
    <>
      {parseNote(text).map((s, i) =>
        s.kind ? (
          <span key={i} className={`sq-chip sq-${s.kind}`} title={NOTE_KINDS.find((k) => k.kind === s.kind)?.label}>
            {s.text}
          </span>
        ) : (
          s.text
        ),
      )}
    </>
  )
}

/** A small key for the square colours. Shows only the kinds this explanation uses, or all of them. */
export function NoteLegend({ text, kinds }: { text?: string | null; kinds?: NoteKind[] }) {
  const used = kinds ?? (text ? [...new Set(Object.values(noteSquares(text)))] : [])
  if (used.length === 0) return null
  return (
    <ul className="sq-legend" aria-label="Square colours">
      {NOTE_KINDS.filter((k) => used.includes(k.kind)).map((k) => (
        <li key={k.kind} title={k.hint}>
          <span className="sq-swatch" style={{ background: NOTE_COLOR[k.kind] }} />
          {k.label}
        </li>
      ))}
    </ul>
  )
}
