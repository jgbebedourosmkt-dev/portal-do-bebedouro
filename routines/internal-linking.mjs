#!/usr/bin/env node
/**
 * Sugere links internos após publicar um conteúdo novo.
 * Varre todos os MDX existentes e indica quais mencionam termos
 * relacionados ao novo slug mas ainda não linkam para ele.
 *
 * Uso:
 *   node routines/internal-linking.mjs --slug "bebedouro-industrial-inox"
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'content', 'posts')
const KEYWORDS_PATH = path.join(ROOT, 'data', 'keywords.json')

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseArgs() {
  const idx = process.argv.indexOf('--slug')
  if (idx !== -1 && process.argv[idx + 1]) {
    return process.argv[idx + 1]
  }
  return null
}

function readKeywords() {
  return JSON.parse(fs.readFileSync(KEYWORDS_PATH, 'utf8'))
}

function getAllMdxFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const fm = {}
  match[1].split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':')
    if (key && rest.length) fm[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '')
  })
  return fm
}

function extractTermsFromSlug(slug) {
  return slug
    .split('-')
    .filter((t) => t.length > 3)
    .map((t) => t.toLowerCase())
}

// ── Pillar pages para varrer também ──────────────────────────────────────────

const PILLAR_PAGES = [
  { slug: 'bebedouro-industrial', path: 'app/bebedouro-industrial/page.tsx' },
  { slug: 'tipos-de-bebedouro', path: 'app/tipos-de-bebedouro/page.tsx' },
  { slug: 'bebedouro-para-empresa', path: 'app/bebedouro-para-empresa/page.tsx' },
]

// ── Main ──────────────────────────────────────────────────────────────────────

const targetSlug = parseArgs()
if (!targetSlug) {
  console.error('❌  Informe o slug: node routines/internal-linking.mjs --slug "meu-slug"')
  process.exit(1)
}

const keywords = readKeywords()
const kwEntry = keywords.find((k) => k.slug === targetSlug)
const targetKeyword = kwEntry?.keyword ?? targetSlug.replace(/-/g, ' ')
const targetTerms = extractTermsFromSlug(targetSlug)

console.log(`\n🔍  Analisando oportunidades de link interno para: /${targetSlug}`)
console.log(`    Keyword alvo: "${targetKeyword}"`)
console.log(`    Termos de busca: ${targetTerms.join(', ')}\n`)

const suggestions = []

// Varre posts MDX
const files = getAllMdxFiles()
for (const file of files) {
  const fileSlug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx$/, '')
  if (fileSlug === targetSlug) continue

  const content = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  const fm = extractFrontmatter(content)
  const body = content.toLowerCase()

  const alreadyLinks =
    body.includes(`/${targetSlug}`) ||
    body.includes(`"${targetSlug}"`) ||
    body.includes(`'${targetSlug}'`)

  if (alreadyLinks) continue

  const matchedTerms = targetTerms.filter((term) => body.includes(term))
  const mentionsKeyword = body.includes(targetKeyword.toLowerCase())

  if (mentionsKeyword || matchedTerms.length >= 2) {
    const relevance = mentionsKeyword ? 'alta' : matchedTerms.length >= 3 ? 'média-alta' : 'média'
    suggestions.push({
      type: 'post',
      file,
      slug: fileSlug,
      title: fm.title ?? fileSlug,
      url: `/artigo/${fileSlug}`,
      relevance,
      matchedTerms,
      mentionsKeyword,
    })
  }
}

// Varre páginas pilar
for (const pillar of PILLAR_PAGES) {
  if (pillar.slug === targetSlug) continue
  const filePath = path.join(ROOT, pillar.path)
  if (!fs.existsSync(filePath)) continue

  const content = fs.readFileSync(filePath, 'utf8').toLowerCase()
  const alreadyLinks = content.includes(`/${targetSlug}`)
  if (alreadyLinks) continue

  const matchedTerms = targetTerms.filter((term) => content.includes(term))
  const mentionsKeyword = content.includes(targetKeyword.toLowerCase())

  if (mentionsKeyword || matchedTerms.length >= 2) {
    suggestions.push({
      type: 'pilar',
      file: pillar.path,
      slug: pillar.slug,
      title: `Pilar: /${pillar.slug}`,
      url: `/${pillar.slug}`,
      relevance: mentionsKeyword ? 'alta' : 'média',
      matchedTerms,
      mentionsKeyword,
    })
  }
}

// ── Exibe resultado ───────────────────────────────────────────────────────────

if (suggestions.length === 0) {
  console.log('ℹ️  Nenhuma página encontrada com potencial de link para este slug.')
  console.log('   Considere adicionar o link manualmente nas páginas pilar.\n')
  process.exit(0)
}

const sorted = suggestions.sort((a, b) => {
  const order = { alta: 0, 'média-alta': 1, média: 2 }
  return (order[a.relevance] ?? 3) - (order[b.relevance] ?? 3)
})

console.log(`📌  ${sorted.length} página(s) devem receber um link para /${targetSlug}:\n`)

for (const s of sorted) {
  const icon = s.type === 'pilar' ? '🏛️ ' : '📄'
  console.log(`${icon}  [${s.relevance.toUpperCase()}] ${s.title}`)
  console.log(`      URL destino: ${s.url}`)
  console.log(`      Arquivo: ${s.file}`)
  if (s.mentionsKeyword) {
    console.log(`      ✓ Menciona explicitamente "${targetKeyword}"`)
  }
  if (s.matchedTerms.length) {
    console.log(`      ✓ Termos em comum: ${s.matchedTerms.join(', ')}`)
  }
  console.log()
}

console.log('─────────────────────────────────────────────────────')
console.log(`Texto âncora sugerido: "${targetKeyword}"`)
console.log(`Href: /${targetSlug}\n`)

// Atualiza status no keywords.json se estava em_producao
if (kwEntry && kwEntry.status === 'em_producao') {
  console.log('💡  Lembre de marcar a keyword como "publicado" no data/keywords.json após publicar.')
}
