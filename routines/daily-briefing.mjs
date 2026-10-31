#!/usr/bin/env node
/**
 * Rotina diária — cria o rascunho de uma página pilar/subpilar a partir do keywords.json
 * em content/pilares/<slug>.json (servida em /<slug>).
 *
 * Uso:
 *   node routines/daily-briefing.mjs
 *   node routines/daily-briefing.mjs --kw "bebedouro industrial inox"
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const KEYWORDS_PATH = path.join(ROOT, 'data', 'keywords.json')
const PILARES_DIR = path.join(ROOT, 'content', 'pilares')
const BASE = 'https://portaldobebedouro.com.br'

// ── Helpers ──────────────────────────────────────────────────────────────────

function readKeywords() {
  return JSON.parse(fs.readFileSync(KEYWORDS_PATH, 'utf8'))
}

function writeKeywords(data) {
  fs.writeFileSync(KEYWORDS_PATH, JSON.stringify(data, null, 2) + '\n')
}

function parseArgs() {
  const idx = process.argv.indexOf('--kw')
  if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1]
  return null
}

function pilarTitle(pilar) {
  if (!pilar) return null
  return pilar
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// ── Seleciona keyword ────────────────────────────────────────────────────────

function selectKeyword(keywords, kwOverride) {
  if (kwOverride) {
    const found = keywords.find((k) => k.keyword === kwOverride)
    if (!found) {
      console.error(`❌  Keyword "${kwOverride}" não encontrada no keywords.json`)
      process.exit(1)
    }
    return found
  }

  const pendentes = keywords.filter((k) => k.status === 'pendente').sort((a, b) => a.prioridade - b.prioridade)

  if (pendentes.length === 0) {
    console.log('✅  Nenhuma keyword pendente. Todas já foram publicadas.')
    process.exit(0)
  }
  return pendentes[0]
}

// ── Gera o JSON ──────────────────────────────────────────────────────────────

function buildPilarJson(kw) {
  const { slug, keyword } = kw
  const pilar = kw.pilar ?? null
  const keywordCap = keyword.charAt(0).toUpperCase() + keyword.slice(1)

  const faqs = [1, 2, 3, 4].map((n) => ({
    question: `[PREENCHER] Pergunta frequente ${n} sobre ${keyword}?`,
    answer: '[PREENCHER] Resposta direta de 2-4 frases.',
  }))

  const breadcrumb = [
    { name: 'Home', item: `${BASE}/` },
    pilar ? { name: pilarTitle(pilar), item: `${BASE}/${pilar}` } : null,
    { name: keywordCap },
  ].filter(Boolean)

  const secoes = [
    ['o-que-e', `[PREENCHER] O que é ${keyword}`, 'Definição técnica. Normas aplicáveis. Contexto de mercado.'],
    ['tipos', '[PREENCHER] Tipos / Modelos / Como funciona', 'Variações, capacidades (L/h) e onde cada uma se aplica.'],
    ['como-escolher', `[PREENCHER] Como escolher ${keyword}`, 'Critérios práticos: número de pessoas, ambiente, normas.'],
    ['preco', `[PREENCHER] Preço de ${keyword}`, 'Faixas de preço reais e custo total de propriedade.'],
  ]

  return {
    slug,
    metaTitle: `[PREENCHER] Título com "${keyword}" — máx 60 chars`,
    metaDescription: '[PREENCHER] 120–155 chars, keyword nos primeiros 60 chars.',
    badge: 'Guia Completo',
    title: `[PREENCHER] H1 com "${keyword}" no início`,
    excerpt: `[PREENCHER] Parágrafo de abertura — "${keyword}" deve aparecer nos primeiros 100 chars. 2-3 frases.`,
    breadcrumbLabel: keywordCap,
    finalCtaTitle: `Precisa de ${keyword}?`,
    finalCtaDesc: 'A JG Bebedouros oferece venda e manutenção com atendimento em todo o Brasil.',
    tocItems: secoes.map(([id, titulo]) => ({ href: `#${id}`, label: titulo.replace('[PREENCHER] ', '') })),
    stats: [{ valor: '[PREENCHER]', label: 'Dado numérico real do setor (L/h, R$, prazo, norma)' }],
    faqs,
    internalLinks: [
      ...(pilar ? [{ href: `/${pilar}`, label: `${pilarTitle(pilar)}: Guia Completo` }] : []),
      { href: '/tipos-de-bebedouro', label: 'Todos os tipos de bebedouro' },
      { href: '/bebedouro-para-empresa', label: 'Bebedouro para empresa' },
    ],
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((b, i) => ({ '@type': 'ListItem', position: i + 1, ...b })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
    // HTML simples: <section id> + <h2> + parágrafos/listas/tabelas. Estilo vem do design system.
    html: secoes.map(([id, titulo, dica]) => `<section id="${id}"><h2>${titulo}</h2><p>[PREENCHER] ${dica}</p></section>`).join(''),
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

const keywords = readKeywords()
const selected = selectKeyword(keywords, parseArgs())

if (selected.tipo === 'local') {
  console.log(`ℹ️  Keyword "${selected.keyword}" é do tipo local — página já existe em /local/${selected.slug}`)
  writeKeywords(keywords.map((k) => (k.id === selected.id ? { ...k, status: 'publicado' } : k)))
  console.log('✅  Status atualizado para "publicado" no keywords.json.')
  process.exit(0)
}

const destino = path.join(PILARES_DIR, `${selected.slug}.json`)
if (fs.existsSync(destino)) {
  console.log(`⚠️  Página já existe: content/pilares/${selected.slug}.json`)
  console.log('   Apague o arquivo manualmente antes de gerar novamente.')
  process.exit(0)
}

fs.mkdirSync(PILARES_DIR, { recursive: true })
fs.writeFileSync(destino, JSON.stringify(buildPilarJson(selected), null, 2) + '\n')
writeKeywords(keywords.map((k) => (k.id === selected.id ? { ...k, status: 'em_producao' } : k)))

console.log(`\n✅  Rascunho criado: content/pilares/${selected.slug}.json`)
console.log(`🌐  URL pública:     ${BASE}/${selected.slug}`)
console.log(`📌  Keyword: "${selected.keyword}" (prioridade ${selected.prioridade})`)
console.log(`\n📝  Preencha os [PREENCHER] no arquivo (confira no npm run dev), depois:`)
console.log(`    1. Altere o status para "publicado" no data/keywords.json`)
console.log(`    2. git add . && git commit -m "feat: /${selected.slug}" && git push\n`)
