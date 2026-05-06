import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const categorias = ['mercado', 'legislacao', 'saude', 'guias', 'reviews', 'eventos']
  return [
    { url: 'https://portalbebedouro.com.br', lastModified: new Date(), priority: 1.0 },
    ...categorias.map((c) => ({
      url: `https://portalbebedouro.com.br/${c}`,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `https://portalbebedouro.com.br/artigo/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.7,
    })),
  ]
}
