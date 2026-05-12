import type { Metadata } from 'next'

interface MetadataInput {
  title: string
  description: string
  slug: string
  ogImage?: string
  noIndex?: boolean
}

const BASE_URL = 'https://portalbebedouro.com.br'

export function buildMetadata({ title, description, slug, ogImage, noIndex }: MetadataInput): Metadata {
  const url = `${BASE_URL}/${slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'Portal do Bebedouro',
      locale: 'pt_BR',
      images: [{ url: ogImage ?? '/og-default.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}
