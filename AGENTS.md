# Astro 7

Este projeto usa Astro 7.x, mais novo que boa parte do material de treino. Antes de usar uma API, confira os tipos em `node_modules/astro/` e respeite os avisos de depreciação. Exemplo: `z` vem de `astro/zod`, não de `astro:content`.

- Conteúdo: Content Layer (`src/content.config.ts`, loader `glob`) sobre os JSON de `content/`.
- Estilo: CSS puro com tokens em `src/styles/tokens.css`. Use os tokens semânticos (`--c-*`, `--fs-*`, `--sp-*`), não cores ou tamanhos soltos.
- APIs em `src/pages/api/` precisam de `export const prerender = false`.
- Não mude URLs existentes: o site tem ~300 páginas indexadas. Rode o build e compare o sitemap antes de publicar.
- `app/<slug>/page.tsx` é formato de entrada do pipeline de pilares; `scripts/pilares-tsx.mjs` converte no build.
