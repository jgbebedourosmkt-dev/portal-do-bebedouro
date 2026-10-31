import { SITE } from './site'
import type { Post } from './posts'

export interface Faq {
  question: string
  answer: string
}

export const faqSchema = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
})

export const breadcrumbSchema = (items: { name: string; slug?: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, slug }, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    ...(slug !== undefined ? { item: `${SITE.url}/${slug}` } : {}),
  })),
})

export const localBusinessSchema = ({ name, city, state, slug }: { name: string; city: string; state: string; slug: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name,
  url: `${SITE.url}/${slug}`,
  address: { '@type': 'PostalAddress', addressLocality: city, addressRegion: state, addressCountry: 'BR' },
  sameAs: [SITE.url],
})

export const articleSchema = (post: Post) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: post.data.title,
  description: post.data.excerpt,
  datePublished: post.data.date.toISOString(),
  dateModified: (post.data.updatedAt ?? post.data.date).toISOString(),
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/artigo/${post.id}` },
  image: post.data.ogImage ? new URL(post.data.ogImage, SITE.url).href : `${SITE.url}/og-default.png`,
})

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
})
