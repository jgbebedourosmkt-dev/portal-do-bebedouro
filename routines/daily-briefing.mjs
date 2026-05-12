#!/usr/bin/env node
/**
 * Rotina diária — gera briefing do dia a partir do keywords.json
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
const CONTENT_DIR = path.join(ROOT, 'content', 'posts')

// ── Helpers ──────────────────────────────────────────────────────────────────

function readKeywords() {
  return JSON.parse(fs.readFileSync(KEYWORDS_PATH, 'utf8'))
}

function writeKeywords(data) {
  fs.writeFileSync(KEYWORDS_PATH, JSON.stringify(data, null, 2) + '\n')
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function parseArgs() {
  const idx = process.argv.indexOf('--kw')
  if (idx !== -1 && process.argv[idx + 1]) {
    return process.argv[idx + 1]
  }
  return null
}

// ── Seleciona keyword ─────────────────────────────────────────────────────────

function selectKeyword(keywords, kwOverride) {
  if (kwOverride) {
    const found = keywords.find((k) => k.keyword === kwOverride)
    if (!found) {
      console.error(`❌  Keyword "${kwOverride}" não encontrada no keywords.json`)
      process.exit(1)
    }
    return found
  }
  const pendentes = keywords
    .filter((k) => k.status === 'pendente')
    .sort((a, b) => a.prioridade - b.prioridade)
  if (pendentes.length === 0) {
    console.log('✅  Nenhuma keyword pendente. Adicione novas no data/keywords.json.')
    process.exit(0)
  }
  return pendentes[0]
}

// ── Gera briefing ─────────────────────────────────────────────────────────────

function buildBriefing(kw) {
  const date = today()
  const slug = kw.slug ?? slugify(kw.keyword)

  return `---
title: "[PREENCHER] Título otimizado para: ${kw.keyword}"
slug: "${slug}"
excerpt: "[PREENCHER] Descrição de 120–155 caracteres com a keyword nos primeiros 60 chars."
categoria: "${kw.tipo === 'blog' ? 'mercado' : 'guias'}"
badge: "Guia Completo"
badgeVariant: "vd"
date: "${date}"
author: "Redação Portal do Bebedouro"
readTime: 10
featured: false
tags: ["${kw.keyword}"]
keyword_id: ${kw.id}
---

<!-- ════════════════════════════════════════════════════════════
     BRIEFING — ${kw.keyword.toUpperCase()}
     Prioridade: ${kw.prioridade} | Volume: ~${kw.volume ?? '?'}/mês | Dificuldade: ${kw.dificuldade ?? '?'}
     Pilar: ${kw.pilar ?? 'nenhum'}
     ════════════════════════════════════════════════════════════ -->

<!-- ## ANÁLISE DE SERP (preencher antes de escrever)
Pesquise "${kw.keyword}" no Google em aba anônima e anote:
- Top 3 resultados: [URL / Tipo de página / Extensão do conteúdo]
- People Also Ask: [Liste as perguntas]
- Featured snippet existente? [Sim/Não — copie o trecho]
- Intenção dominante: [Informacional / Comercial / Transacional]
-->

## H1 sugerido
"${kw.keyword.charAt(0).toUpperCase() + kw.keyword.slice(1)}: [complemento que reforce a intenção]"

> ⚠️ A keyword "${kw.keyword}" deve aparecer no H1 e nos primeiros 100 caracteres do primeiro parágrafo.

## Estrutura de H2 sugerida

### O que é [${kw.keyword}]
<!-- Parágrafo de definição. 2–3 frases. Chance de featured snippet. -->

### [Subtema relevante 1]
<!-- Dados, normas, tabelas comparativas -->

### [Subtema relevante 2]
<!-- Casos de uso, exemplos práticos -->

### [Subtema relevante 3]
<!-- Custo, manutenção, onde comprar -->

### Perguntas frequentes sobre ${kw.keyword}
<!-- Mínimo 4 perguntas do People Also Ask -->

## Checklist antes de publicar
- [ ] H1 contém a keyword "${kw.keyword}"
- [ ] Keyword aparece nos primeiros 100 caracteres do 1º parágrafo
- [ ] Mínimo de 3 links internos (pelo menos 1 para o pilar${kw.pilar ? ` /${kw.pilar}` : ''})
- [ ] FAQ com as "Pessoas também perguntam" respondidas
- [ ] CTA para JG Bebedouros com UTM (?utm_source=portalbebedouro&utm_medium=artigo&utm_campaign=${slug})
- [ ] buildMetadata() com title e description otimizados
- [ ] JsonLd com Schema FAQ e Breadcrumb
- [ ] URL adicionada no app/sitemap.ts
- [ ] Status atualizado para "publicado" no keywords.json

## Links internos obrigatórios
${kw.pilar ? `- [/${kw.pilar}] — link para o pilar` : '- Adicione links para os pilares relevantes'}
- [/tipos-de-bebedouro] — se aplicável
- [/bebedouro-para-empresa] — se aplicável

## CTA padrão
\`\`\`
href="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=artigo&utm_campaign=${slug}"
\`\`\`

---
*Briefing gerado em ${date} pela rotina daily-briefing.mjs*
`
}

// ── Main ──────────────────────────────────────────────────────────────────────

const kwOverride = parseArgs()
const keywords = readKeywords()
const selected = selectKeyword(keywords, kwOverride)

const date = today()
const slug = selected.slug ?? slugify(selected.keyword)
const fileName = `${date}-${slug}.mdx`
const filePath = path.join(CONTENT_DIR, fileName)

if (fs.existsSync(filePath)) {
  console.log(`⚠️  Arquivo já existe: content/posts/${fileName}`)
  console.log('   Delete-o manualmente antes de gerar novamente.')
  process.exit(0)
}

// Marca como em_producao
const updated = keywords.map((k) =>
  k.id === selected.id ? { ...k, status: 'em_producao' } : k
)
writeKeywords(updated)

// Cria o briefing
fs.mkdirSync(CONTENT_DIR, { recursive: true })
fs.writeFileSync(filePath, buildBriefing(selected))

console.log(`\n✅  Briefing criado: content/posts/${fileName}`)
console.log(`📌  Keyword: "${selected.keyword}" (prioridade ${selected.prioridade})`)
console.log(`📁  Abra o arquivo, preencha a análise de SERP e escreva o artigo.\n`)
