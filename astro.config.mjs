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
  },
  server: { port: 4321, host: true },
  devToolbar: { enabled: false },
})
