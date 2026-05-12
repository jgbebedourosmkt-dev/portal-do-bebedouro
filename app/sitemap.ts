import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

const BASE = 'https://portalbebedouro.com.br'

const PILLAR_PAGES = [
  'bebedouro-industrial',
  'tipos-de-bebedouro',
  'bebedouro-para-empresa',
]

const LOCAL_SLUGS = [
  'bebedouro-industrial-sao-paulo',
  'bebedouro-industrial-belo-horizonte',
  'bebedouro-industrial-curitiba',
  'bebedouro-industrial-porto-alegre',
  'bebedouro-industrial-recife',
  'bebedouro-industrial-fortaleza',
  'bebedouro-industrial-manaus',
  'bebedouro-industrial-brasilia',
  'bebedouro-industrial-salvador',
  'bebedouro-industrial-vitoria',
  'bebedouro-industrial-goiania',
  'bebedouro-industrial-campinas',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const categorias = ['mercado', 'legislacao', 'saude', 'guias', 'reviews', 'eventos']

  return [
    { url: BASE, lastModified: new Date(), priority: 1.0 },

    // Páginas pilar — alta prioridade
    ...PILLAR_PAGES.map((slug) => ({
      url: `${BASE}/${slug}`,
      priority: 0.9,
    })),

    // Páginas locais
    ...LOCAL_SLUGS.map((slug) => ({
      url: `${BASE}/local/${slug}`,
      priority: 0.8,
    })),

    // Categorias do portal
    ...categorias.map((c) => ({
      url: `${BASE}/${c}`,
      priority: 0.7,
    })),

    // Posts/artigos
    ...posts.map((p) => ({
      url: `${BASE}/artigo/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.6,
    })),
  ]
}
