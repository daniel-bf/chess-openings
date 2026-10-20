/** One analysed move. Scores are from White's point of view; `mate` counts moves to mate. */
export interface EngineLine {
  uci: string
  cp?: number
  mate?: number
}

/** A small wrapper around the Stockfish web worker (UCI over postMessage). */
export class Engine {
  private worker: Worker
  private ready: Promise<void>
  private failed: Promise<never>
  private listeners = new Set<(line: string) => void>()
  // Searches run one at a time so their output never mixes.
  private queue: Promise<unknown> = Promise.resolve()

  constructor() {
    this.worker = new Worker(`${import.meta.env.BASE_URL}engine/stockfish-19-lite-single.js`)
    this.worker.onmessage = (e: MessageEvent<string>) => this.listeners.forEach((l) => l(String(e.data)))
    this.failed = new Promise((_, reject) => {
      this.worker.onerror = () => reject(new Error('Engine failed to load'))
    })
    this.failed.catch(() => {})
    this.ready = this.waitFor('uciok', 'uci')
      .then(() => this.waitFor('readyok', 'isready'))
      .then(() => undefined)
  }

  private waitFor(token: string, command: string, timeoutMs = 20000): Promise<string> {
    const answer = new Promise<string>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.listeners.delete(listener)
        reject(new Error(`Engine did not answer "${command}"`))
      }, timeoutMs)
      const listener = (line: string) => {
        if (line.startsWith(token)) {
          clearTimeout(timer)
          this.listeners.delete(listener)
          resolve(line)
        }
      }
      this.listeners.add(listener)
      this.worker.postMessage(command)
    })
    return Promise.race([answer, this.failed])
  }

  private enqueue<T>(task: () => Promise<T>): Promise<T> {
    const run = this.queue.then(task, task)
    this.queue = run.catch(() => {})
    return run
  }

  /** Returns the engine's move in UCI form, e.g. "e2e4" or "e7e8q". */
  bestMove(fen: string, skill: number, movetime = 600): Promise<string> {
    return this.enqueue(async () => {
      await this.ready
      this.worker.postMessage('setoption name MultiPV value 1')
      this.worker.postMessage(`setoption name Skill Level value ${skill}`)
      this.worker.postMessage(`position fen ${fen}`)
      const line = await this.waitFor('bestmove', `go movetime ${movetime}`)
      return line.split(' ')[1]
    })
  }

  /** Full-strength analysis: the top `count` moves with scores from White's point of view. */
  analyse(fen: string, count = 2, movetime = 700): Promise<EngineLine[]> {
    return this.enqueue(async () => {
      await this.ready
      const whiteToMove = fen.split(' ')[1] === 'w'
      const found = new Map<number, EngineLine>()
      const collect = (line: string) => {
        if (!line.startsWith('info') || !line.includes(' pv ')) return
        const rank = Number(/ multipv (\d+)/.exec(line)?.[1] ?? 1)
        const cp = / score cp (-?\d+)/.exec(line)
        const mate = / score mate (-?\d+)/.exec(line)
        const uci = / pv (\S+)/.exec(line)![1]
        const sign = whiteToMove ? 1 : -1
        found.set(rank, {
          uci,
          cp: cp ? sign * Number(cp[1]) : undefined,
          mate: mate ? sign * Number(mate[1]) : undefined,
        })
      }
      this.listeners.add(collect)
      try {
        this.worker.postMessage('setoption name Skill Level value 20')
        this.worker.postMessage(`setoption name MultiPV value ${count}`)
        this.worker.postMessage(`position fen ${fen}`)
        await this.waitFor('bestmove', `go movetime ${movetime}`)
      } finally {
        this.listeners.delete(collect)
      }
      return [...found.entries()].sort((a, b) => a[0] - b[0]).map(([, l]) => l)
    })
  }

  stop() {
    this.worker.terminate()
  }
}

let shared: Engine | null = null
export function getEngine(): Engine {
  shared ??= new Engine()
  return shared
}
