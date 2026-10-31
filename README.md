# Portal do Bebedouro

Site em [Astro](https://astro.build) com design system "Jornal da Água", publicado na Vercel (branch `main`).
Páginas são estáticas; as rotas de `src/pages/api/` rodam como funções serverless.

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build de produção (igual ao da Vercel)
npm run preview   # serve o build
```

Para testar formulários e o admin localmente, crie um `.env` com as mesmas variáveis da Vercel:
`RESEND_API_KEY`, `ADMIN_PASSWORD` e `BLOB_READ_WRITE_TOKEN`.

## Conteúdo

| Pasta | Vira | Observação |
|---|---|---|
| `content/posts/*.json` | `/artigo/<slug>` | HTML em `content`; o `slug` do JSON define a URL |
| `content/pilares/*.json` | `/<slug>` | páginas pilar/subpilar |
| `content/local/*.json` | `/local/<slug>` | SEO local (+ 10 cidades fixas em `src/lib/locais.ts`) |
| `content/pages/*.json` | `/sobre`, `/contato`, `/pagina/<slug>` | |
| `public/images/` | `/images/...` | |

### Páginas pilar no formato antigo (`app/<slug>/page.tsx`)

O pipeline `seo-automation-pbr/paginas_pilar.py` ainda entrega cada página como `app/<slug>/page.tsx`.
Não precisa mudar nada nele: `npm run build` (e `npm run dev`) roda antes `scripts/pilares-tsx.mjs`,
que converte esses arquivos em `content/pilares/<slug>.json`.

Para fixar a conversão no repositório (e apagar o `.tsx`): `npm run pilares:converter`.

## Estrutura

- `src/styles/tokens.css` — tokens do design system (cor, tipo, espaço, modo escuro)
- `src/styles/global.css` — base, utilitários e estilo de texto corrido (`.prosa`)
- `src/components/` — componentes (`Masthead`, `Pilar`, `CardPost`, `Orcamento`, `Faq`…)
- `src/pages/` — rotas
- `routines/` — rotinas de SEO (`daily-briefing`, `internal-linking`, `paginas-pilar.md`)
