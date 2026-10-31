// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://portaldobebedouro.com.br',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'never',
  redirects: {
    // Links antigos apontavam para /blog/<slug>; os artigos vivem em /artigo/<slug>
    '/blog/[slug]': '/artigo/[slug]',
    // No site anterior esta URL exibia o case da escola (arquivos com slug trocado)
    '/artigo/case-hospital-inox-anvisa': '/artigo/case-escola-publica-800-alunos-bebedouros',
  },
  server: { port: 4321, host: true },
  devToolbar: { enabled: false },
})
