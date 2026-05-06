import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { websiteSchema } from '@/lib/seo'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portalbebedouro.com.br'),
  title: { default: 'Portal do Bebedouro', template: '%s | Portal do Bebedouro' },
  description:
    'O portal de referência do setor de bebedouros no Brasil. Notícias, normas ABNT, saúde da água e mercado.',
  keywords: ['bebedouro', 'normas bebedouro', 'NBR 13713', 'bebedouro corporativo', 'INMETRO bebedouro'],
  authors: [{ name: 'Portal do Bebedouro' }],
  creator: 'Portal do Bebedouro',
  publisher: 'Portal do Bebedouro',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portalbebedouro.com.br',
    siteName: 'Portal do Bebedouro',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@portalbebedouro' },
  verification: { google: 'SEU_GOOGLE_SITE_VERIFICATION' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
