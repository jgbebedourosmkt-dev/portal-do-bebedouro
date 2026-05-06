import { getAllPosts, getFeaturedPost } from '@/lib/posts'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Ticker from '@/components/layout/Ticker'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Strip from '@/components/home/Strip'
import NoticiasList from '@/components/home/NoticiasList'
import GuiasGrid from '@/components/home/GuiasGrid'
import LegislacaoList from '@/components/home/LegislacaoList'
import SaudeGrid from '@/components/home/SaudeGrid'
import ReviewsGrid from '@/components/home/ReviewsGrid'
import EventosList from '@/components/home/EventosList'
import Sidebar from '@/components/sidebar/Sidebar'
import NewsletterBand from '@/components/newsletter/NewsletterBand'

export const revalidate = 3600

export default function HomePage() {
  const allPosts = getAllPosts()
  const featured = getFeaturedPost()

  if (!featured || allPosts.length === 0) {
    return (
      <>
        <Topbar />
        <Header />
        <Nav />
        <div className="mx-auto max-w-[1280px] px-8 py-24 text-center">
          <p className="text-txt3">Nenhum artigo publicado ainda.</p>
        </div>
        <Footer />
      </>
    )
  }

  const secondary = allPosts.filter((p) => p.slug !== featured.slug).slice(0, 4)
  const stripPosts = allPosts.filter((p) => p.slug !== featured.slug).slice(4, 8)
  const guiasPosts = allPosts.filter((p) => p.categoria === 'guias')
  const legislacaoPosts = allPosts.filter((p) => p.categoria === 'legislacao')
  const saudePosts = allPosts.filter((p) => p.categoria === 'saude')
  const reviewsPosts = allPosts.filter((p) => p.categoria === 'reviews')
  const eventosPosts = allPosts.filter((p) => p.categoria === 'eventos')

  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <Ticker />
      <Hero featured={featured} secondary={secondary} />
      <Strip posts={stripPosts} />

      <div className="mx-auto flex flex-col md:flex-row max-w-[1280px] md:border-r border-borda">
        {/* Coluna principal */}
        <main className="flex-1 min-w-0 md:border-r border-borda px-4 md:px-0 md:pl-8">
          <NoticiasList posts={allPosts} />
          {guiasPosts.length > 0 && <GuiasGrid posts={guiasPosts} />}
          {legislacaoPosts.length > 0 && <LegislacaoList posts={legislacaoPosts} />}
          {saudePosts.length > 0 && <SaudeGrid posts={saudePosts} />}
          {reviewsPosts.length > 0 && <ReviewsGrid posts={reviewsPosts} />}
          {eventosPosts.length > 0 && <EventosList posts={eventosPosts} />}
        </main>

        {/* Sidebar */}
        <Sidebar posts={allPosts} />
      </div>

      <NewsletterBand />
      <Footer />
    </>
  )
}
