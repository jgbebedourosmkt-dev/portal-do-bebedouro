const BASE_URL = 'https://portaldobebedouro.com.br'

export interface FaqItem {
  question: string
  answer: string
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; slug?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, slug }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(slug ? { item: `${BASE_URL}/${slug}` } : {}),
    })),
  }
}

export function localBusinessSchema({
  name,
  city,
  state,
  slug,
}: {
  name: string
  city: string
  state: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url: `${BASE_URL}/${slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'BR',
    },
    sameAs: [BASE_URL],
  }
}

export function productSchema({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: `${BASE_URL}/${slug}`,
    brand: { '@type': 'Brand', name: 'JG Bebedouros' },
  }
}
