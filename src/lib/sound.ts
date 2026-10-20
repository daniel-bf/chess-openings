import { useSyncExternalStore } from 'react'

/** Board sounds. Each set is a folder under public/sound; see public/sound/README.md for credits. */
export type Sound = 'move' | 'capture' | 'castle' | 'check' | 'wrong' | 'success'

export interface SoundSet {
  id: string
  name: string
  description: string
  credit: string
  /** The sounds this set has its own file for. Missing ones fall back as described in `fileFor`. */
  files: Sound[]
}

export const SOUND_SETS: SoundSet[] = [
  {
    id: 'sfx',
    name: 'Lichess SFX',
    description: 'The effects set from Lichess.',
    credit: 'Enigmahack for Lichess, AGPLv3+',
    files: ['move', 'capture', 'check', 'success'],
  },
  {
    id: 'pychess',
    name: 'PyChess',
    description: 'Very short clicks, from the PyChess desktop app.',
    credit: 'PyChess, GPLv3',
    files: ['move', 'capture', 'castle', 'check', 'wrong', 'success'],
  },
  {
    id: 'piano',
    name: 'Lichess Piano',
    description: 'Piano notes, from Lichess.',
    credit: 'Enigmahack for Lichess, AGPLv3+',
    files: ['move', 'capture', 'check', 'success'],
  },
  {
    id: 'nes',
    name: 'Lichess NES',
    description: 'Retro 8-bit game sounds, from Lichess.',
    credit: 'Enigmahack for Lichess, AGPLv3+',
    files: ['move', 'capture', 'check', 'success'],
  },
  {
    id: 'futuristic',
    name: 'Lichess Futuristic',
    description: 'Sci-fi style sounds, from Lichess.',
    credit: 'Enigmahack for Lichess, AGPLv3+',
    files: ['move', 'capture', 'check', 'success'],
  },
  {
    id: 'lisp',
    name: 'Lichess Lisp',
    description: 'A community set from Lichess. Free for non-commercial use only.',
    credit: 'EdinburghCollective for Lichess, CC BY-NC-SA 4.0',
    files: ['move', 'capture', 'castle', 'check', 'wrong', 'success'],
  },
  {
    id: 'synth',
    name: 'Simple',
    description: 'Wooden knocks made in the browser, no sound files.',
    credit: 'Made for this app',
    files: [],
  },
]

const SET_KEY = 'chess-trainer:sound-set:v1'
const ON_KEY = 'chess-trainer:sound:v1'

function readSet(): string {
  try {
    const v = localStorage.getItem(SET_KEY)
    if (v && SOUND_SETS.some((s) => s.id === v)) return v
  } catch {
    // Use the default.
  }
  return 'sfx'
}

function readOn(): boolean {
  try {
    return localStorage.getItem(ON_KEY) !== 'off'
  } catch {
    return true
  }
}

let state = { on: readOn(), set: readSet() }
const listeners = new Set<() => void>()

function update(next: Partial<typeof state>) {
  state = { ...state, ...next }
  try {
    localStorage.setItem(ON_KEY, state.on ? 'on' : 'off')
    localStorage.setItem(SET_KEY, state.set)
  } catch {
    // Kept in memory only.
  }
  listeners.forEach((l) => l())
}

export function setSoundOn(on: boolean) {
  update({ on })
  if (on) play('move')
}

export function setSoundSet(set: string) {
  update({ set, on: true })
  play('move')
}

export function useSound(): { on: boolean; set: string } {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => state,
  )
}

let ctx: AudioContext | null = null

function context(): AudioContext | null {
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    ctx = new Ctor()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

// Browsers only allow audio after a user gesture, so wake the context on the first tap or key.
if (typeof window !== 'undefined') {
  const unlock = () => {
    const ac = context()
    if (ac) preload(ac, state.set)
    window.removeEventListener('pointerdown', unlock)
    window.removeEventListener('keydown', unlock)
  }
  window.addEventListener('pointerdown', unlock)
  window.addEventListener('keydown', unlock)
}

/** The file to play, or null to synthesise. Castling falls back to the move sound. */
function fileFor(set: SoundSet, sound: Sound): string | null {
  if (set.files.includes(sound)) return `${set.id}/${sound}.mp3`
  if (sound === 'castle' && set.files.includes('move')) return `${set.id}/move.mp3`
  return null
}

const buffers = new Map<string, Promise<AudioBuffer | null>>()

function load(ac: AudioContext, file: string): Promise<AudioBuffer | null> {
  let buffer = buffers.get(file)
  if (!buffer) {
    buffer = fetch(`${import.meta.env.BASE_URL}sound/${file}`)
      .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.statusText))))
      .then((data) => ac.decodeAudioData(data))
      .catch(() => null)
    buffers.set(file, buffer)
  }
  return buffer
}

function preload(ac: AudioContext, setId: string) {
  const set = SOUND_SETS.find((s) => s.id === setId)
  if (set) for (const sound of set.files) void load(ac, `${set.id}/${sound}.mp3`)
}

/** A short wooden knock: filtered noise plus a low thump. */
function knock(ac: AudioContext, at: number, volume: number, pitch: number) {
  const length = Math.floor(ac.sampleRate * 0.06)
  const buffer = ac.createBuffer(1, length, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 4)
  const noise = ac.createBufferSource()
  noise.buffer = buffer
  const filter = ac.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = pitch * 6
  filter.Q.value = 1.2
  const noiseGain = ac.createGain()
  noiseGain.gain.value = volume
  noise.connect(filter).connect(noiseGain).connect(ac.destination)
  noise.start(at)

  const thump = ac.createOscillator()
  thump.type = 'sine'
  thump.frequency.setValueAtTime(pitch, at)
  thump.frequency.exponentialRampToValueAtTime(pitch * 0.6, at + 0.08)
  const thumpGain = ac.createGain()
  thumpGain.gain.setValueAtTime(volume * 0.9, at)
  thumpGain.gain.exponentialRampToValueAtTime(0.001, at + 0.1)
  thump.connect(thumpGain).connect(ac.destination)
  thump.start(at)
  thump.stop(at + 0.12)
}

function tone(ac: AudioContext, at: number, freq: number, duration: number, volume: number, type: OscillatorType = 'sine') {
  const osc = ac.createOscillator()
  osc.type = type
  osc.frequency.setValueAtTime(freq, at)
  const gain = ac.createGain()
  gain.gain.setValueAtTime(0.0001, at)
  gain.gain.exponentialRampToValueAtTime(volume, at + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration)
  osc.connect(gain).connect(ac.destination)
  osc.start(at)
  osc.stop(at + duration + 0.02)
}

function synthesise(ac: AudioContext, sound: Sound) {
  const t = ac.currentTime + 0.01
  switch (sound) {
    case 'move':
      knock(ac, t, 0.5, 180)
      break
    case 'capture':
      knock(ac, t, 0.8, 140)
      knock(ac, t + 0.05, 0.6, 220)
      break
    case 'castle':
      knock(ac, t, 0.5, 180)
      knock(ac, t + 0.11, 0.5, 160)
      break
    case 'check':
      knock(ac, t, 0.5, 180)
      tone(ac, t + 0.02, 880, 0.18, 0.12, 'triangle')
      tone(ac, t + 0.1, 1175, 0.22, 0.1, 'triangle')
      break
    case 'wrong':
      tone(ac, t, 200, 0.2, 0.2, 'triangle')
      break
    case 'success':
      tone(ac, t, 660, 0.18, 0.12)
      tone(ac, t + 0.12, 880, 0.18, 0.12)
      tone(ac, t + 0.24, 1320, 0.3, 0.12)
      break
  }
}

/** Plays a sound from the chosen set, or from `setId` when previewing another set. */
export function play(sound: Sound, setId?: string) {
  if (!state.on && !setId) return
  const ac = context()
  if (!ac) return
  const set = SOUND_SETS.find((s) => s.id === (setId ?? state.set)) ?? SOUND_SETS[0]
  const file = fileFor(set, sound)
  if (!file) {
    synthesise(ac, sound)
    return
  }
  void load(ac, file).then((buffer) => {
    if (!buffer) return synthesise(ac, sound)
    const source = ac.createBufferSource()
    source.buffer = buffer
    source.connect(ac.destination)
    source.start()
  })
}
