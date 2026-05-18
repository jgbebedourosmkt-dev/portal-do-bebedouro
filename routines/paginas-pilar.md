# Rotina — Produção de Página Pilar

Você é um especialista em SEO e Next.js responsável por produzir **uma página pilar por execução** para o site `portaldobebedouro.com.br`. Execute os passos abaixo **na ordem exata**. Se qualquer passo falhar, PARE e reporte o erro — nunca pule etapas nem invente dados.

---

## PASSO 1 — Ler os três JSONs de entrada

Leia os seguintes arquivos:

- `C:\Users\Lenovo\seo_automation\saida\linha_dados.json`
- `C:\Users\Lenovo\seo_automation\saida\serp_urls.json`
- `C:\Users\Lenovo\seo_automation\saida\serp_content.json`

Se qualquer um não existir, PARE e informe qual está faltando.

---

## PASSO 2 — Extrair variáveis fixas

De `linha_dados.json → meta`, extraia:

| Variável | Campo |
|---|---|
| `keyword` | `keyword` |
| `titulo_h1` | `titulo_h1` |
| `meta_description` | `meta_description` |
| `slug` | `slug` — sem barra inicial (ex: `bebedouro-industrial-25-litros`) |
| `tipo_pilar` | `tipo_pilar` |
| `variacoes_semanticas` | `variacoes_semanticas` |
| `imagens` | `imagens` — array com `raw_url` e `alt_text` |
| `links_internos` | `links_internos` |

**Parsing de `links_internos`:** cada linha segue o padrão:
```
• Âncora: "texto da âncora" → portaldobebedouro.com.br/slug (contexto de inserção)
```
Extraia de cada linha: âncora, URL relativa (`/slug`) e contexto onde inserir no corpo do texto.

---

## PASSO 3 — Analisar a SERP

De `serp_content.json → concorrentes` (array com os 3 resultados), cada item tem:
- `titulo_pagina`, `intro`, `num_palavras`
- `headings` — array de `{ nivel, texto }` com todos os H2s e H3s da página

Use para:

**A) Tópicos obrigatórios:** headings que aparecem em 2+ concorrentes → seções que o artigo precisa ter.

**B) Diferenciação:** tópicos ausentes ou raros entre os concorrentes → pelo menos 1 seção exclusiva.

**C) Tamanho mínimo:** use `serp_content.json → minimo_palavras_recomendado` (já calculado como 20% acima do maior concorrente).

**D) H2s do artigo:** combine A + B + variações semânticas da planilha.

De `serp_urls.json → resultados`, use `titulo_serp` e `descricao_serp` para captar a intenção de busca dominante.

---

## PASSO 4 — Gerar o `page.tsx`

Leia `app/bebedouro-industrial/page.tsx` como referência de estrutura, imports e estilo de classes.

Crie a pasta `app/{slug}/` se não existir e salve o arquivo em `app/{slug}/page.tsx`.

**Nome da função:** slug em PascalCase + `Page` (ex: slug `bebedouro-industrial-25-litros` → `BebedouroIndustrial25LitrosPage`).

### Estrutura obrigatória

```tsx
import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: '{titulo_h1}',            // valor literal da planilha — não altere
  description: '{meta_description}', // valor literal da planilha — não altere
  slug: '{slug}',
})

const faqs = [
  // mínimo 4 perguntas reais sobre a keyword
  // respostas de 2-4 frases com dados concretos (L/h, R$, normas ABNT/INMETRO)
  { question: '...?', answer: '...' },
]

export default function {PascalCase}Page() {
  return (
    <>
      <Topbar />
      <Header />
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', slug: '' },
            { name: '{titulo_h1}' },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <PilarLayout
        badge="Guia Completo"
        title="{titulo_h1}"
        excerpt="{2-3 frases com a keyword nos primeiros 100 chars}"
        breadcrumbLabel="{titulo_h1}"
        breadcrumbSlug="{slug}"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign={slug}"
        ctaLabel="Solicitar orçamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign={slug}"
        finalCtaTitle="Precisa de {keyword}?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutenção com atendimento em todo o Brasil."
        tocItems={[
          // { href: '#id-da-section', label: 'Título do H2' } — um por seção
        ]}
        stats={[
          // 3-4 dados numéricos reais do setor: L/h, R$, prazo, norma aplicável
        ]}
        faqs={faqs}
        internalLinks={[
          // todos os links de links_internos → { href: '/slug', label: 'âncora' }
        ]}
      >

        {/* ── SEÇÕES DE CONTEÚDO ── */}
        {/* Cada H2 vira uma <section> com id em kebab-case */}

      </PilarLayout>

      <Footer />
    </>
  )
}
```

### Padrão de cada seção

```tsx
<section id="kebab-do-titulo" className="mb-12 scroll-mt-20">
  <h2
    className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
  >
    Título do H2
  </h2>
  {/* conteúdo: parágrafos, listas, tabela ou grid de cards — use o formato que a SERP premia */}
</section>
```

### Imagens

Insira as 2 imagens do array `imagens` dentro de seções relevantes (nunca na primeira seção):

```tsx
<img
  src="{raw_url}"
  alt="{alt_text}"
  className="w-full rounded-lg mb-6 object-cover"
  loading="lazy"
/>
```

### Links internos

Insira cada link no corpo do texto no contexto indicado:

```tsx
<a href="/slug" className="text-az hover:underline">âncora</a>
```

### Regras de conteúdo

- `titulo_h1` e `meta_description` são literais da planilha — não altere
- Keyword nos primeiros 100 chars do `excerpt` e em pelo menos 2 H2s
- Dados reais obrigatórios: especificações técnicas, normas (NBR 13713, INMETRO, NR-24, RDC 275/2005), faixas de preço
- Nunca invente dados — use apenas o que está nos JSONs ou em conhecimento técnico verificável
- Atingir pelo menos `minimo_palavras_recomendado` palavras
- Português brasileiro, tom informativo e direto

---

## PASSO 5 — Salvar e encerrar

Salve o arquivo em `app/{slug}/page.tsx`.

**Não execute nenhum comando git.** O script Python está monitorando a pasta e fará o commit e push automaticamente assim que o arquivo aparecer.

---

## PASSO 6 — Relatório final

```
✅ Arquivo gerado — Python fará o push

Keyword:     {keyword}
Slug:        /{slug}
Arquivo:     app/{slug}/page.tsx
Seções H2:   {lista dos títulos}
Imagens:     {alt_text das 2 imagens}
Links:        {X links internos inseridos}
Palavras:    ~{contagem} / mínimo {minimo_palavras_recomendado}
```

---

## TRATAMENTO DE ERROS

Se qualquer passo falhar, PARE imediatamente e reporte: em qual passo, mensagem de erro exata e o que não foi feito.

Nunca: execute git, crie arquivos fora de `app/{slug}/page.tsx`, ou modifique outros arquivos do repo.
