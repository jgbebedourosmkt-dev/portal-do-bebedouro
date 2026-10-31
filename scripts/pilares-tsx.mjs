// Compatibilidade com o pipeline de páginas pilar (seo-automation-pbr/paginas_pilar.py),
// que ainda entrega cada página como app/<slug>/page.tsx no formato do site Next.js antigo.
// Roda antes do `astro build`: renderiza cada page.tsx com React e grava content/pilares/<slug>.json.
//
// Uso: node scripts/pilares-tsx.mjs            (converte tudo que houver em app/)
//      node scripts/pilares-tsx.mjs --remover  (converte e apaga os .tsx convertidos)
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'

const ROOT = process.cwd()
const APP = path.join(ROOT, 'app')
const SAIDA = path.join(ROOT, 'content/pilares')

const paginas = fs.existsSync(APP)
  ? fs
      .readdirSync(APP)
      .filter((d) => fs.existsSync(path.join(APP, d, 'page.tsx')))
      .filter((d) => fs.readFileSync(path.join(APP, d, 'page.tsx'), 'utf8').includes('PilarLayout'))
  : []

if (paginas.length === 0) process.exit(0)

const esbuild = await import('esbuild')
const require = createRequire(path.join(ROOT, 'package.json'))
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
globalThis.__React = React
globalThis.__require = require

// Substitutos dos módulos do site antigo que as páginas importam
const MODULOS = {
  '@/components/pilar/PilarLayout': `export default function P(props){ globalThis.__pilar = props; return globalThis.__React.createElement('pilar-conteudo', null, props.children) }`,
  '@/lib/metadata': `export function buildMetadata(m){ return { title: m.title, description: m.description, robots: m.noIndex ? { index: false } : undefined } }`,
  '@/lib/schema': `
    const BASE = 'https://portaldobebedouro.com.br'
    export function faqSchema(items){ return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(({question, answer}) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) } }
    export function breadcrumbSchema(items){ return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map(({name, slug}, i) => ({ '@type': 'ListItem', position: i + 1, name, ...(slug !== undefined ? { item: BASE + '/' + slug } : {}) })) } }
    export function productSchema({ name, description, slug }){ return { '@context': 'https://schema.org', '@type': 'Product', name, description, url: BASE + '/' + slug, brand: { '@type': 'Brand', name: 'JG Bebedouros' } } }`,
}

const substitutos = {
  name: 'substitutos',
  setup(b) {
    b.onResolve({ filter: /^@\// }, (a) => ({ path: a.path, namespace: 'sub' }))
    b.onLoad({ filter: /.*/, namespace: 'sub' }, (a) => ({
      // Header, Nav, Footer, OrcamentoModal… são do layout do site e não fazem parte do conteúdo
      contents: MODULOS[a.path] ?? 'export default function Nada(){ return null }',
      loader: 'js',
    }))
    b.onResolve({ filter: /^react(\/.*)?$|^react-dom/ }, (a) => ({ path: a.path, namespace: 'ext' }))
    b.onLoad({ filter: /.*/, namespace: 'ext' }, (a) => ({
      contents: `const m = globalThis.__require(${JSON.stringify(a.path)}); export default m; export const { jsx, jsxs, Fragment, createElement } = m;`,
      loader: 'js',
    }))
  },
}

// Troca utilitários Tailwind do HTML por classes do design system (ver src/styles/global.css)
const limpar = (html) =>
  html
    .replace(/<img([^>]*?)style="float:left[^"]*"([^>]*)>/g, '<img$1class="flutua-esq"$2>')
    .replace(/<img([^>]*?)style="float:right[^"]*"([^>]*)>/g, '<img$1class="flutua-dir"$2>')
    .replace(/<div style="clear:both"><\/div>/g, '<div class="limpa"></div>')
    .replace(/<div class="[^"]*\boverflow-x-auto\b[^"]*">/g, '<div class="tabela-rolagem">')
    .replace(/<div class="[^"]*\bgrid\b[^"]*">/g, '<div class="grade-cards">')
    .replace(/<div class="[^"]*\bborder\b[^"]*\bp-5\b[^"]*">/g, '<div class="card-info">')
    .replace(/ class="(?!flutua-|limpa|tabela-rolagem|grade-cards|card-info)[^"]*"/g, '')
    .replace(/ style="[^"]*"/g, '')

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pilares-'))
fs.mkdirSync(SAIDA, { recursive: true })

try {
  for (const slug of paginas) {
    const entrada = path.join(APP, slug, 'page.tsx')
    const saida = path.join(tmp, `${slug}.mjs`)
    await esbuild.build({
      entryPoints: [entrada],
      bundle: true,
      format: 'esm',
      platform: 'node',
      jsx: 'automatic',
      outfile: saida,
      plugins: [substitutos],
      logLevel: 'error',
    })
    const mod = await import(pathToFileURL(saida).href)
    globalThis.__pilar = null
    const markup = renderToStaticMarkup(React.createElement(mod.default))
    const p = globalThis.__pilar
    if (!p) throw new Error(`app/${slug}/page.tsx: PilarLayout não foi renderizado`)

    const meta = mod.metadata ?? {}
    const dados = {
      slug,
      metaTitle: meta.title,
      metaDescription: meta.description,
      noIndex: meta.robots?.index === false || undefined,
      badge: p.badge ?? 'Guia Completo',
      title: p.title,
      excerpt: p.excerpt,
      breadcrumbLabel: p.breadcrumbLabel,
      finalCtaTitle: p.finalCtaTitle,
      finalCtaDesc: p.finalCtaDesc,
      tocItems: p.tocItems ?? [],
      stats: p.stats ?? [],
      faqs: p.faqs ?? [],
      internalLinks: p.internalLinks ?? [],
      schemas: [...markup.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1])),
      html: limpar(markup.match(/<pilar-conteudo>([\s\S]*)<\/pilar-conteudo>/)[1]),
    }
    fs.writeFileSync(path.join(SAIDA, `${slug}.json`), JSON.stringify(dados, null, 2) + '\n')
    console.log(`[pilares] app/${slug}/page.tsx → content/pilares/${slug}.json`)
    if (process.argv.includes('--remover')) fs.rmSync(path.join(APP, slug), { recursive: true })
  }
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}
