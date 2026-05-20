import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CardNoticia from '@/components/ui/CardNoticia'
import Sidebar from '@/components/sidebar/Sidebar'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Todos os artigos do Portal do Bebedouro â€” notÃ­cias, guias, legislaÃ§Ã£o, saÃºde da Ã¡gua e muito mais.',
  alternates: { canonical: 'https://portaldobebedouro.com.br/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <div className="mx-auto flex flex-col md:flex-row max-w-[1280px]">
        <main className="flex-1 min-w-0 md:border-r border-borda px-4 md:px-8 py-8">
          <div className="mb-8 border-b-2 border-az pb-3">
            <h1
              className="text-[36px] font-black text-txt"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Todos os Artigos
            </h1>
            <p className="text-[14px] text-txt3 mt-1">
              {posts.length} {posts.length === 1 ? 'artigo publicado' : 'artigos publicados'}
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-txt3">Nenhum artigo publicado ainda.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <CardNoticia key={post.slug} post={post} size="md" />
              ))}
            </div>
          )}
        </main>
        <Sidebar posts={posts} />
      </div>
      <Footer />
    </>
  )
}
