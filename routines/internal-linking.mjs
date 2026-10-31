#!/usr/bin/env node
/**
 * Sugere e adiciona links internos após publicar uma nova página.
 * Varre content/pilares/*.json (pilares e subpilares) e content/posts/*.json (artigos).
 *
 * Uso:
 *   node routines/internal-linking.mjs --slug "bebedouro-industrial-inox"
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const KEYWORDS_PATH = path.join(ROOT, 'data', 'keywords.json')
const PILARES_DIR = path.join(ROOT, 'content', 'pilares')
const POSTS_DIR = path.join(ROOT, 'content', 'posts')

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseArgs() {
  const idx = process.argv.indexOf('--slug')
  if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1]
  return null
}

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'))
const writeJson = (p, d) => fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n')

function extractTermsFromSlug(slug) {
  return slug.split('-').filter((t) => t.length > 3).map((t) => t.toLowerCase())
}

function listJson(dir, campoHtml, urlDe) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const filePath = path.join(dir, f)
      const data = readJson(filePath)
      const slug = data.slug ?? f.replace(/\.json$/, '')
      return { slug, filePath, data, campoHtml, url: urlDe(slug), label: path.relative(ROOT, filePath).replaceAll('\\', '/') }
    })
}

/** Envolve a primeira menção da keyword (fora de links e tags) com <a href>. */
function linkarPrimeiraMencao(html, keyword, href) {
  const re = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i')
  let dentroDeLink = 0
  // separa em tags e texto; só substitui em texto fora de <a>
  const partes = html.split(/(<[^>]+>)/)
  for (let i = 0; i < partes.length; i++) {
    const p = partes[i]
    if (p.startsWith('<')) {
      if (/^<a[\s>]/i.test(p)) dentroDeLink++
      else if (/^<\/a>/i.test(p)) dentroDeLink--
      continue
    }
    if (dentroDeLink === 0 && re.test(p)) {
      partes[i] = p.replace(re, `<a href="${href}">$1</a>`)
      return partes.join('')
    }
  }
  return null
}

// ── Main ─────────────────────────────────────────────────────────────────────

const targetSlug = parseArgs()
if (!targetSlug) {
  console.error('❌  Informe o slug: node routines/internal-linking.mjs --slug "meu-slug"')
  process.exit(1)
}

const keywords = readJson(KEYWORDS_PATH)
const kwEntry = keywords.find((k) => k.slug === targetSlug)
const targetKeyword = kwEntry?.keyword ?? targetSlug.replace(/-/g, ' ')
const targetTerms = extractTermsFromSlug(targetSlug)
const href = `/${targetSlug}`

console.log(`\n🔍  Links internos para: ${href}`)
console.log(`    Keyword: "${targetKeyword}"`)
console.log(`    Termos:  ${targetTerms.join(', ')}\n`)

const candidatos = [
  ...listJson(PILARES_DIR, 'html', (s) => `/${s}`).map((c) => ({ ...c, type: 'pilar' })),
  ...listJson(POSTS_DIR, 'content', (s) => `/artigo/${s}`).map((c) => ({ ...c, type: 'post' })),
]

const suggestions = []
for (const c of candidatos) {
  if (c.slug === targetSlug) continue
  const html = c.data[c.campoHtml] ?? ''
  const lower = html.toLowerCase()
  const jaLinka = lower.includes(`href="${href}"`) || (c.data.internalLinks ?? []).some((l) => l.href === href)
  if (jaLinka) continue

  const matchedTerms = targetTerms.filter((t) => lower.includes(t))
  const mentionsKeyword = lower.includes(targetKeyword.toLowerCase())
  if (mentionsKeyword || matchedTerms.length >= 2) {
    suggestions.push({
      ...c,
      relevance: mentionsKeyword ? 'alta' : matchedTerms.length >= 3 ? 'média-alta' : 'média',
      matchedTerms,
      mentionsKeyword,
    })
  }
}

if (suggestions.length === 0) {
  console.log('ℹ️  Nenhuma página encontrada com potencial de link para este slug.\n')
  process.exit(0)
}

const order = { alta: 0, 'média-alta': 1, média: 2 }
suggestions.sort((a, b) => order[a.relevance] - order[b.relevance])

console.log(`📌  ${suggestions.length} página(s) elegíveis para receber link → ${href}:\n`)

let applied = 0
for (const s of suggestions.slice(0, 5)) {
  console.log(`${s.type === 'pilar' ? '📄' : '📝'}  [${s.relevance.toUpperCase()}] ${s.label}`)
  if (s.mentionsKeyword) console.log(`      ✓ Menciona "${targetKeyword}"`)
  if (s.matchedTerms.length) console.log(`      ✓ Termos: ${s.matchedTerms.join(', ')}`)

  // 1) link inline na primeira menção da keyword
  const novoHtml = s.mentionsKeyword ? linkarPrimeiraMencao(s.data[s.campoHtml], targetKeyword, href) : null
  if (novoHtml) {
    s.data[s.campoHtml] = novoHtml
    writeJson(s.filePath, s.data)
    console.log('      ✅  Link inline adicionado no texto')
    applied++
  } else if (s.type === 'pilar') {
    // 2) senão, entra no bloco "Leia também" da página pilar
    s.data.internalLinks = [...(s.data.internalLinks ?? []), { href, label: targetKeyword }]
    writeJson(s.filePath, s.data)
    console.log('      ✅  Link adicionado em "Leia também"')
    applied++
  } else {
    console.log('      ⚠️  Não foi possível inserir automaticamente — adicione manualmente.')
  }
  console.log()
}

console.log('─────────────────────────────────────────────────────')
console.log(`Total: ${applied} link(s) adicionado(s) automaticamente.`)
console.log(`Texto âncora: "${targetKeyword}"  |  href: ${href}\n`)
