#!/usr/bin/env node
/**
 * Rotina diÃ¡ria â€” gera pÃ¡gina TSX com URL limpa a partir do keywords.json
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

// â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

function toPascalCase(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}

function pilarTitle(pilar) {
  if (!pilar) return null
  return pilar
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// â”€â”€ Seleciona keyword â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function selectKeyword(keywords, kwOverride) {
  if (kwOverride) {
    const found = keywords.find((k) => k.keyword === kwOverride)
    if (!found) {
      console.error(`âŒ  Keyword "${kwOverride}" nÃ£o encontrada no keywords.json`)
      process.exit(1)
    }
    return found
  }
  const pendentes = keywords
    .filter((k) => k.status === 'pendente')
    .sort((a, b) => a.prioridade - b.prioridade)
  if (pendentes.length === 0) {
    console.log('âœ…  Nenhuma keyword pendente. Todas jÃ¡ foram publicadas.')
    process.exit(0)
  }
  return pendentes[0]
}

// â”€â”€ Gera o TSX â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function buildPageTsx(kw) {
  const slug = kw.slug
  const keyword = kw.keyword
  const pilar = kw.pilar ?? null
  const pTitle = pilarTitle(pilar)
  const fnName = toPascalCase(slug) + 'Page'
  const keywordCap = keyword.charAt(0).toUpperCase() + keyword.slice(1)

  const breadcrumbItems = [
    `{ name: 'Home', slug: '' }`,
    pilar ? `{ name: '${pTitle}', slug: '${pilar}' }` : null,
    `{ name: '${keywordCap}' }`,
  ]
    .filter(Boolean)
    .join(',\n            ')

  const breadcrumbLinks = pilar
    ? `          <a href="/" className="hover:text-az">Home</a>
          <span className="mx-2">/</span>
          <a href="/${pilar}" className="hover:text-az">${pTitle}</a>
          <span className="mx-2">/</span>
          <span className="text-txt">${keywordCap}</span>`
    : `          <a href="/" className="hover:text-az">Home</a>
          <span className="mx-2">/</span>
          <span className="text-txt">${keywordCap}</span>`

  const pilarLink = pilar
    ? `            <li>â†’ <a href="/${pilar}" className="text-az hover:underline">${pTitle}: Guia Completo</a></li>`
    : ''

  return `import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata = buildMetadata({
  title: '[PREENCHER] TÃ­tulo com "${keyword}" â€” mÃ¡x 60 chars',
  description: '[PREENCHER] 120â€“155 chars, keyword nos primeiros 60 chars.',
  slug: '${slug}',
})

const faqs = [
  {
    question: '[PREENCHER] Pergunta frequente 1 sobre ${keyword}?',
    answer: '[PREENCHER] Resposta direta de 2-4 frases.',
  },
  {
    question: '[PREENCHER] Pergunta frequente 2 sobre ${keyword}?',
    answer: '[PREENCHER] Resposta direta de 2-4 frases.',
  },
  {
    question: '[PREENCHER] Pergunta frequente 3 sobre ${keyword}?',
    answer: '[PREENCHER] Resposta direta de 2-4 frases.',
  },
  {
    question: '[PREENCHER] Pergunta frequente 4 sobre ${keyword}?',
    answer: '[PREENCHER] Resposta direta de 2-4 frases.',
  },
]

export default function ${fnName}() {
  return (
    <>
      <Topbar />
      <Header />
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            ${breadcrumbItems}
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <main className="mx-auto max-w-[900px] px-4 md:px-8 py-10">

        <nav className="text-[13px] text-txt3 mb-6">
${breadcrumbLinks}
        </nav>

        <h1
          className="text-[42px] font-black text-txt leading-tight mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          [PREENCHER] H1 com "${keyword}" no inÃ­cio
        </h1>

        <p className="text-[17px] text-txt2 leading-relaxed mb-8">
          [PREENCHER] ParÃ¡grafo de abertura â€” "${keyword}" deve aparecer nos primeiros 100 chars. 2-3 frases.
        </p>

        <a
          href="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=pilar&utm_campaign=${slug}"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-az text-white font-bold px-6 py-3 rounded mb-10 hover:bg-az2 transition-colors"
        >
          Solicitar orÃ§amento â€” JG Bebedouros
        </a>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            [PREENCHER] O que Ã© ${keyword}
          </h2>
          <p className="text-[16px] text-txt2 leading-relaxed mb-3">
            [PREENCHER] DefiniÃ§Ã£o tÃ©cnica. Normas aplicÃ¡veis. Contexto de mercado.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            [PREENCHER] Tipos / Modelos / Como funciona
          </h2>
          <p className="text-[16px] text-txt2 leading-relaxed mb-3">
            [PREENCHER] Dados reais: L/h, R$, capacidades, modelos disponÃ­veis no mercado brasileiro.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            [PREENCHER] Como escolher
          </h2>
          <p className="text-[16px] text-txt2 leading-relaxed mb-3">
            [PREENCHER] CritÃ©rios: nÃºmero de usuÃ¡rios, normas ABNT NBR 13713, certificaÃ§Ã£o INMETRO.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            [PREENCHER] PreÃ§o e custo de manutenÃ§Ã£o
          </h2>
          <p className="text-[16px] text-txt2 leading-relaxed mb-3">
            [PREENCHER] Faixas de preÃ§o reais do mercado. Custo anual de manutenÃ§Ã£o.
          </p>
        </section>

        <section className="mb-10 bg-bg rounded p-6">
          <h2
            className="text-[22px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Continue lendo
          </h2>
          <ul className="space-y-2 text-[15px]">
${pilarLink}
            <li>â†’ <a href="/tipos-de-bebedouro" className="text-az hover:underline">Todos os tipos de bebedouro</a></li>
            <li>â†’ <a href="/bebedouro-para-empresa" className="text-az hover:underline">Bebedouro para empresa</a></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Perguntas frequentes sobre ${keyword}
          </h2>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="border border-borda rounded">
                <summary className="px-4 py-3 font-semibold text-txt cursor-pointer hover:bg-bg">
                  {question}
                </summary>
                <p className="px-4 py-3 text-[15px] text-txt2 border-t border-borda">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-az rounded p-6 text-center text-white">
          <p className="text-[20px] font-bold mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Precisa de ${keyword}?
          </p>
          <p className="text-[14px] mb-4 opacity-90">
            A JG Bebedouros oferece venda e manutenÃ§Ã£o com atendimento em todo o Brasil.
          </p>
          <a
            href="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=cta-fim&utm_campaign=${slug}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-acc text-az font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Falar com especialista
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
`
}

// â”€â”€ Main â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const kwOverride = parseArgs()
const keywords = readKeywords()
const selected = selectKeyword(keywords, kwOverride)

if (selected.tipo === 'local') {
  console.log(`â„¹ï¸  Keyword "${selected.keyword}" Ã© do tipo local â€” pÃ¡gina jÃ¡ existe em /local/${selected.slug}`)
  const updated = keywords.map((k) => k.id === selected.id ? { ...k, status: 'publicado' } : k)
  writeKeywords(updated)
  console.log('âœ…  Status atualizado para "publicado" no keywords.json.')
  process.exit(0)
}

const pageDir = path.join(ROOT, 'app', selected.slug)
const pagePath = path.join(pageDir, 'page.tsx')

if (fs.existsSync(pagePath)) {
  console.log(`âš ï¸  PÃ¡gina jÃ¡ existe: app/${selected.slug}/page.tsx`)
  console.log('   Delete a pasta manualmente antes de gerar novamente.')
  process.exit(0)
}

fs.mkdirSync(pageDir, { recursive: true })
fs.writeFileSync(pagePath, buildPageTsx(selected))

const updated = keywords.map((k) =>
  k.id === selected.id ? { ...k, status: 'em_producao' } : k
)
writeKeywords(updated)

console.log(`\nâœ…  PÃ¡gina criada: app/${selected.slug}/page.tsx`)
console.log(`ðŸŒ  URL pÃºblica:   https://portaldobebedouro.com.br/${selected.slug}`)
console.log(`ðŸ“Œ  Keyword: "${selected.keyword}" (prioridade ${selected.prioridade})`)
console.log(`\nðŸ“  Preencha os [PREENCHER] no arquivo, depois:`)
console.log(`    1. Altere o status para "publicado" no data/keywords.json`)
console.log(`    2. git add . && git commit -m "feat: /${selected.slug}" && git push\n`)
