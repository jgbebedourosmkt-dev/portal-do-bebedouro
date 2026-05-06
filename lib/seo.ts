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
      url: 'https://portalbebedouro.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Portal do Bebedouro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://portalbebedouro.com.br/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://portalbebedouro.com.br/artigo/${post.slug}`,
    },
    image: post.ogImage ?? 'https://portalbebedouro.com.br/og-default.png',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portal do Bebedouro',
    url: 'https://portalbebedouro.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://portalbebedouro.com.br/busca?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}
