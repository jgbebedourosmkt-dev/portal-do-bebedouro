import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { getAllLocalPages } from '@/lib/local'
import keywordsData from '@/data/keywords.json'

const BASE = 'https://portaldobebedouro.com.br'

const PILLAR_PAGES = [
  'bebedouro-industrial',
  'tipos-de-bebedouro',
  'bebedouro-para-empresa',
]

// Cidades hardcoded (fallback)
const HARDCODED_LOCAL_SLUGS = [
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

type Keyword = { status: string; tipo: string; slug: string }

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const categorias = ['mercado', 'legislacao', 'saude', 'guias', 'reviews', 'eventos']

  // Subpilares publicados viram páginas com URL limpa (/{slug})
  const publishedSubpilars = (keywordsData as Keyword[])
    .filter((k) => k.status === 'publicado' && (k.tipo === 'subpilar' || k.tipo === 'blog'))
    .map((k) => k.slug)

  // Páginas locais: combina JSON gerados + hardcoded, sem duplicatas
  const jsonLocalSlugs = getAllLocalPages().map((p) => p.slug)
  const allLocalSlugs = [...new Set([...jsonLocalSlugs, ...HARDCODED_LOCAL_SLUGS])]

  return [
    { url: BASE, lastModified: new Date(), priority: 1.0 },

    // Pilares
    ...PILLAR_PAGES.map((slug) => ({ url: `${BASE}/${slug}`, priority: 0.9 })),

    // Subpilares publicados (URL limpa)
    ...publishedSubpilars.map((slug) => ({ url: `${BASE}/${slug}`, priority: 0.85 })),

    // Páginas locais (JSON + hardcoded, deduplicadas)
    ...allLocalSlugs.map((slug) => ({ url: `${BASE}/local/${slug}`, priority: 0.8 })),

    // Categorias do portal
    ...categorias.map((c) => ({ url: `${BASE}/${c}`, priority: 0.7 })),

    // Artigos/notícias do portal
    ...posts.map((p) => ({
      url: `${BASE}/artigo/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.6,
    })),
  ]
}
