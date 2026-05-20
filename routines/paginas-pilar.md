# Rotina â€” ProduÃ§Ã£o de PÃ¡gina Pilar

VocÃª Ã© um especialista em SEO e Next.js responsÃ¡vel por produzir **uma pÃ¡gina pilar por execuÃ§Ã£o** para o site `portaldobebedouro.com.br`. Execute os passos abaixo **na ordem exata**. Se qualquer passo falhar, PARE e reporte o erro â€” nunca pule etapas nem invente dados.

---

## PASSO 1 â€” Ler os trÃªs JSONs de entrada

Leia os seguintes arquivos:

- `C:\Users\Lenovo\seo_automation\saida\linha_dados.json`
- `C:\Users\Lenovo\seo_automation\saida\serp_urls.json`
- `C:\Users\Lenovo\seo_automation\saida\serp_content.json`

Se qualquer um nÃ£o existir, PARE e informe qual estÃ¡ faltando.

---

## PASSO 2 â€” Extrair variÃ¡veis fixas

De `linha_dados.json â†’ meta`, extraia:

| VariÃ¡vel | Campo |
|---|---|
| `keyword` | `keyword` |
| `titulo_h1` | `titulo_h1` |
| `meta_description` | `meta_description` |
| `slug` | `slug` â€” sem barra inicial (ex: `bebedouro-industrial-25-litros`) |
| `tipo_pilar` | `tipo_pilar` |
| `variacoes_semanticas` | `variacoes_semanticas` |
| `imagens` | `imagens` â€” array com `raw_url` e `alt_text` |
| `links_internos` | `links_internos` |

**Parsing de `links_internos`:** cada linha segue o padrÃ£o:
```
â€¢ Ã‚ncora: "texto da Ã¢ncora" â†’ portaldobebedouro.com.br/slug (contexto de inserÃ§Ã£o)
```
Extraia de cada linha: Ã¢ncora, URL relativa (`/slug`) e contexto onde inserir no corpo do texto.

---

## PASSO 3 â€” Analisar a SERP

De `serp_content.json â†’ concorrentes` (array com os 3 resultados), cada item tem:
- `titulo_pagina`, `intro`, `num_palavras`
- `headings` â€” array de `{ nivel, texto }` com todos os H2s e H3s da pÃ¡gina

Use para:

**A) TÃ³picos obrigatÃ³rios:** headings que aparecem em 2+ concorrentes â†’ seÃ§Ãµes que o artigo precisa ter.

**B) DiferenciaÃ§Ã£o:** tÃ³picos ausentes ou raros entre os concorrentes â†’ pelo menos 1 seÃ§Ã£o exclusiva.

**C) Tamanho mÃ­nimo:** use `serp_content.json â†’ minimo_palavras_recomendado` (jÃ¡ calculado como 20% acima do maior concorrente).

**D) H2s do artigo:** combine A + B + variaÃ§Ãµes semÃ¢nticas da planilha.

De `serp_urls.json â†’ resultados`, use `titulo_serp` e `descricao_serp` para captar a intenÃ§Ã£o de busca dominante.

---

## PASSO 4 â€” Gerar o `page.tsx`

Leia `app/bebedouro-industrial/page.tsx` como referÃªncia de estrutura, imports e estilo de classes.

Crie a pasta `app/{slug}/` se nÃ£o existir e salve o arquivo em `app/{slug}/page.tsx`.

**Nome da funÃ§Ã£o:** slug em PascalCase + `Page` (ex: slug `bebedouro-industrial-25-litros` â†’ `BebedouroIndustrial25LitrosPage`).

### Estrutura obrigatÃ³ria

```tsx
import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: '{titulo_h1}',            // valor literal da planilha â€” nÃ£o altere
  description: '{meta_description}', // valor literal da planilha â€” nÃ£o altere
  slug: '{slug}',
})

const faqs = [
  // mÃ­nimo 4 perguntas reais sobre a keyword
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
        ctaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=pilar&utm_campaign={slug}"
        ctaLabel="Solicitar orÃ§amento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=sidebar&utm_campaign={slug}"
        finalCtaTitle="Precisa de {keyword}?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutenÃ§Ã£o com atendimento em todo o Brasil."
        tocItems={[
          // { href: '#id-da-section', label: 'TÃ­tulo do H2' } â€” um por seÃ§Ã£o
        ]}
        stats={[
          // 3-4 dados numÃ©ricos reais do setor: L/h, R$, prazo, norma aplicÃ¡vel
        ]}
        faqs={faqs}
        internalLinks={[
          // todos os links de links_internos â†’ { href: '/slug', label: 'Ã¢ncora' }
        ]}
      >

        {/* â”€â”€ SEÃ‡Ã•ES DE CONTEÃšDO â”€â”€ */}
        {/* Cada H2 vira uma <section> com id em kebab-case */}

      </PilarLayout>

      <Footer />
    </>
  )
}
```

### PadrÃ£o de cada seÃ§Ã£o

```tsx
<section id="kebab-do-titulo" className="mb-12 scroll-mt-20">
  <h2
    className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
  >
    TÃ­tulo do H2
  </h2>
  {/* conteÃºdo: parÃ¡grafos, listas, tabela ou grid de cards â€” use o formato que a SERP premia */}
</section>
```

### Imagens

Insira as 2 imagens do array `imagens` dentro de seÃ§Ãµes relevantes (nunca na primeira seÃ§Ã£o):

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
<a href="/slug" className="text-az hover:underline">Ã¢ncora</a>
```

### Regras de conteÃºdo

- `titulo_h1` e `meta_description` sÃ£o literais da planilha â€” nÃ£o altere
- Keyword nos primeiros 100 chars do `excerpt` e em pelo menos 2 H2s
- Dados reais obrigatÃ³rios: especificaÃ§Ãµes tÃ©cnicas, normas (NBR 13713, INMETRO, NR-24, RDC 275/2005), faixas de preÃ§o
- Nunca invente dados â€” use apenas o que estÃ¡ nos JSONs ou em conhecimento tÃ©cnico verificÃ¡vel
- Atingir pelo menos `minimo_palavras_recomendado` palavras
- PortuguÃªs brasileiro, tom informativo e direto

---

## PASSO 5 â€” Salvar e encerrar

Salve o arquivo em `app/{slug}/page.tsx`.

**NÃ£o execute nenhum comando git.** O script Python estÃ¡ monitorando a pasta e farÃ¡ o commit e push automaticamente assim que o arquivo aparecer.

---

## PASSO 6 â€” RelatÃ³rio final

```
âœ… Arquivo gerado â€” Python farÃ¡ o push

Keyword:     {keyword}
Slug:        /{slug}
Arquivo:     app/{slug}/page.tsx
SeÃ§Ãµes H2:   {lista dos tÃ­tulos}
Imagens:     {alt_text das 2 imagens}
Links:        {X links internos inseridos}
Palavras:    ~{contagem} / mÃ­nimo {minimo_palavras_recomendado}
```

---

## TRATAMENTO DE ERROS

Se qualquer passo falhar, PARE imediatamente e reporte: em qual passo, mensagem de erro exata e o que nÃ£o foi feito.

Nunca: execute git, crie arquivos fora de `app/{slug}/page.tsx`, ou modifique outros arquivos do repo.
