// Turns dist/index.html into a body-only page for hosts that wrap pages in
// their own document skeleton (such as a claude.ai Artifact).
import { readFileSync, writeFileSync } from 'node:fs'

const html = readFileSync('dist/index.html', 'utf8')
const head = html.match(/<head>([\s\S]*)<\/head>/)[1]
const body = html.match(/<body>([\s\S]*)<\/body>/)[1]
const keep = head
  .split('\n')
  .filter((l) => !/<meta charset|<meta name="viewport"/.test(l))
  .join('\n')
writeFileSync('dist/artifact.html', `<meta name="claude:viewport-fit-sides" content="cover" />\n${keep.trim()}\n${body.trim()}\n`)
console.log('wrote dist/artifact.html')
