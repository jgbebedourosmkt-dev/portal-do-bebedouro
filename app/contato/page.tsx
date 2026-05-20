import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/pages'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContatoForm from '@/components/contato/ContatoForm'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe do Portal do Bebedouro.',
  alternates: { canonical: 'https://portaldobebedouro.com.br/contato' },
}

export default function ContatoPage() {
  const page = getPageBySlug('contato')

  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <div className="mx-auto max-w-[860px] px-4 md:px-8 py-12">
        <h1
          className="text-[40px] font-black text-txt mb-8 border-b-2 border-az pb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {page?.title ?? 'Contato'}
        </h1>
        {page && (
          <div
            className="prose prose-lg max-w-none text-txt2 leading-relaxed
              prose-headings:font-black prose-headings:text-txt
              prose-h2:text-[28px] prose-h2:mt-8 prose-h2:mb-3
              prose-h3:text-[22px] prose-h3:mt-6 prose-h3:mb-2
              prose-p:mb-4 prose-p:text-[18px]
              prose-a:text-az2 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-txt prose-strong:font-bold
              prose-ul:pl-5 prose-ol:pl-5
              prose-li:mb-1"
            style={{ fontFamily: 'var(--font-barlow)' }}
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        )}
        <ContatoForm />
      </div>
      <Footer />
    </>
  )
}
