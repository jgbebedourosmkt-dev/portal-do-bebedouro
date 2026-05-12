#!/usr/bin/env node
/**
 * Sugere e adiciona links internos após publicar uma nova página.
 * Varre app/*\/page.tsx (pilares e subpilares) e content/posts/*.mdx.
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
const APP_DIR = path.join(ROOT, 'app')
const CONTENT_DIR = path.join(ROOT, 'content', 'posts')

// Páginas fixas que não são subpilares gerados pela routine
const EXCLUDED_APP_DIRS = new Set([
  'artigo', 'admin', 'api', 'local', '[categoria]',
])

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseArgs() {
  const idx = process.argv.indexOf('--slug')
  if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1]
  return null
}

function readKeywords() {
  return JSON.parse(fs.readFileSync(KEYWORDS_PATH, 'utf8'))
}

function extractTermsFromSlug(slug) {
  return slug.split('-').filter((t) => t.length > 3).map((t) => t.toLowerCase())
}

function getAppPages() {
  if (!fs.existsSync(APP_DIR)) return []
  return fs.readdirSync(APP_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !EXCLUDED_APP_DIRS.has(d.name))
    .map((d) => ({
      slug: d.name,
      filePath: path.join(APP_DIR, d.name, 'page.tsx'),
    }))
    .filter((p) => fs.existsSync(p.filePath))
}

function getMdxFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({
      file: f,
      slug: f.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx$/, ''),
      filePath: path.join(CONTENT_DIR, f),
    }))
}

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

console.log(`\n🔍  Links internos para: /${targetSlug}`)
console.log(`    Keyword: "${targetKeyword}"`)
console.log(`    Termos:  ${targetTerms.join(', ')}\n`)

const suggestions = []

// ── Varre páginas TSX em app/ ─────────────────────────────────────────────────

for (const page of getAppPages()) {
  if (page.slug === targetSlug) continue
  const content = fs.readFileSync(page.filePath, 'utf8')
  const lower = content.toLowerCase()

  const alreadyLinks = lower.includes(`href="/${targetSlug}"`) || lower.includes(`href='/${targetSlug}'`)
  if (alreadyLinks) continue

  const matchedTerms = targetTerms.filter((t) => lower.includes(t))
  const mentionsKeyword = lower.includes(targetKeyword.toLowerCase())

  if (mentionsKeyword || matchedTerms.length >= 2) {
    suggestions.push({
      type: 'tsx',
      label: `app/${page.slug}/page.tsx`,
      filePath: page.filePath,
      url: `/${page.slug}`,
      relevance: mentionsKeyword ? 'alta' : matchedTerms.length >= 3 ? 'média-alta' : 'média',
      matchedTerms,
      mentionsKeyword,
    })
  }
}

// ── Varre MDX em content/posts/ ───────────────────────────────────────────────

for (const mdx of getMdxFiles()) {
  if (mdx.slug === targetSlug) continue
  const content = fs.readFileSync(mdx.filePath, 'utf8')
  const lower = content.toLowerCase()

  const alreadyLinks = lower.includes(`(/${targetSlug})`) || lower.includes(`/${targetSlug}`)
  if (alreadyLinks) continue

  const matchedTerms = targetTerms.filter((t) => lower.includes(t))
  const mentionsKeyword = lower.includes(targetKeyword.toLowerCase())

  if (mentionsKeyword || matchedTerms.length >= 2) {
    suggestions.push({
      type: 'mdx',
      label: `content/posts/${mdx.file}`,
      filePath: mdx.filePath,
      url: `/artigo/${mdx.slug}`,
      relevance: mentionsKeyword ? 'alta' : 'média',
      matchedTerms,
      mentionsKeyword,
    })
  }
}

// ── Exibe e aplica sugestões ──────────────────────────────────────────────────

if (suggestions.length === 0) {
  console.log('ℹ️  Nenhuma página encontrada com potencial de link para este slug.\n')
  process.exit(0)
}

const sorted = suggestions.sort((a, b) => {
  const order = { alta: 0, 'média-alta': 1, média: 2 }
  return (order[a.relevance] ?? 3) - (order[b.relevance] ?? 3)
})

console.log(`📌  ${sorted.length} página(s) elegíveis para receber link → /${targetSlug}:\n`)

let applied = 0

for (const s of sorted.slice(0, 5)) {
  const icon = s.type === 'tsx' ? '📄' : '📝'
  console.log(`${icon}  [${s.relevance.toUpperCase()}] ${s.label}`)
  if (s.mentionsKeyword) console.log(`      ✓ Menciona "${targetKeyword}"`)
  if (s.matchedTerms.length) console.log(`      ✓ Termos: ${s.matchedTerms.join(', ')}`)

  const content = fs.readFileSync(s.filePath, 'utf8')

  if (s.type === 'tsx') {
    // Insere na seção "Continue lendo"
    const anchor = `            <li>→ <a href="/${targetSlug}" className="text-az hover:underline">${targetKeyword}</a></li>`
    const marker = 'Continue lendo'
    if (content.includes(marker)) {
      const insertAfter = '</h2>\n          <ul'
      const newContent = content.replace(
        insertAfter,
        `${insertAfter.split('\n')[0]}\n${anchor}\n          <ul`
      )
      if (newContent !== content) {
        fs.writeFileSync(s.filePath, newContent)
        console.log(`      ✅  Link adicionado na seção "Continue lendo"`)
        applied++
      } else {
        console.log(`      ⚠️  Não foi possível inserir automaticamente — adicione manualmente.`)
      }
    } else {
      console.log(`      ⚠️  Seção "Continue lendo" não encontrada — adicione manualmente.`)
    }
  } else {
    // Insere inline no MDX após a primeira menção da keyword
    const keywordRegex = new RegExp(`\\b${targetKeyword.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\b`, 'i')
    const match = content.match(keywordRegex)
    if (match && !content.slice(0, content.search(keywordRegex)).includes(`(/${targetSlug})`)) {
      const newContent = content.replace(keywordRegex, `[${match[0]}](/${targetSlug})`)
      if (newContent !== content) {
        fs.writeFileSync(s.filePath, newContent)
        console.log(`      ✅  Link inline adicionado`)
        applied++
      }
    } else {
      console.log(`      ⚠️  Não foi possível inserir automaticamente — adicione manualmente.`)
    }
  }

  console.log()
}

console.log('─────────────────────────────────────────────────────')
console.log(`Total: ${applied} link(s) adicionado(s) automaticamente.`)
console.log(`Texto âncora: "${targetKeyword}"  |  href: /${targetSlug}\n`)
