// Mantém /sitemap.xml (mesmo endereço já enviado ao Google Search Console)
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE, CATEGORIAS } from '@/lib/site'
import { getPosts } from '@/lib/posts'
import { getLocais } from '@/lib/locais'

const PILARES_PRINCIPAIS = ['bebedouro-industrial', 'tipos-de-bebedouro', 'bebedouro-para-empresa']

export const GET: APIRoute = async () => {
  const [posts, locais, pilares] = await Promise.all([getPosts(), getLocais(), getCollection('pilares')])
  const hoje = new Date().toISOString()

  const urls: { loc: string; lastmod?: string; priority: number }[] = [
    { loc: SITE.url, lastmod: hoje, priority: 1.0 },
    ...pilares
      .filter((p) => !p.data.noIndex)
      .map((p) => ({ loc: `${SITE.url}/${p.id}`, priority: PILARES_PRINCIPAIS.includes(p.id) ? 0.9 : 0.85 })),
    ...locais.map((l) => ({ loc: `${SITE.url}/local/${l.slug}`, priority: 0.8 })),
    ...Object.keys(CATEGORIAS).map((c) => ({ loc: `${SITE.url}/${c}`, priority: 0.7 })),
    ...posts.map((p) => ({ loc: `${SITE.url}/artigo/${p.id}`, lastmod: p.data.date.toISOString(), priority: 0.6 })),
  ]

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map(
        (u) =>
          `<url>\n<loc>${u.loc}</loc>\n${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>\n` : ''}<priority>${u.priority}</priority>\n</url>`,
      )
      .join('\n') +
    '\n</urlset>\n'

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
