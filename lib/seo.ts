import type { Post } from './posts'

export function articleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      '@type': 'Organization',
      name: 'Portal do Bebedouro',
      url: 'https://portaldobebedouro.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Portal do Bebedouro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://portaldobebedouro.com.br/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://portaldobebedouro.com.br/artigo/${post.slug}`,
    },
    image: post.ogImage ?? 'https://portaldobebedouro.com.br/og-default.png',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portal do Bebedouro',
    url: 'https://portaldobebedouro.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://portaldobebedouro.com.br/busca?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}
