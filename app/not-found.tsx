import Link from 'next/link'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <div className="mx-auto max-w-[1280px] px-8 py-32 text-center">
        <p
          className="text-[144px] font-black text-borda leading-none"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          404
        </p>
        <h1
          className="text-[38px] font-black text-txt mt-2"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Página não encontrada
        </h1>
        <p className="text-txt3 mt-2 mb-8">
          O conteúdo que você procura não existe ou foi removido.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-az text-white text-[17px] font-black uppercase tracking-wide hover:bg-az2 transition-colors"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Voltar para a página inicial
        </Link>
      </div>
      <Footer />
    </>
  )
}
