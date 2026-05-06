import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostsByCategoria } from '@/lib/posts'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CardNoticia from '@/components/ui/CardNoticia'
import { getAllPosts } from '@/lib/posts'
import Sidebar from '@/components/sidebar/Sidebar'

const categorias: Record<string, string> = {
  mercado: 'Mercado',
  legislacao: 'Legislação',
  saude: 'Saúde da Água',
  guias: 'Guias de Compra',
  reviews: 'Reviews',
  eventos: 'Eventos',
}

interface PageProps {
  params: Promise<{ categoria: string }>
}

export async function generateStaticParams() {
  return Object.keys(categorias).map((c) => ({ categoria: c }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria } = await params
  const label = categorias[categoria]
  if (!label) return {}
  return {
    title: label,
    description: `Artigos sobre ${label.toLowerCase()} no setor de bebedouros`,
    alternates: { canonical: `https://portalbebedouro.com.br/${categoria}` },
  }
}

export default async function CategoriaPage({ params }: PageProps) {
  const { categoria } = await params
  const label = categorias[categoria]
  if (!label) notFound()

  const posts = getPostsByCategoria(categoria)
  const allPosts = getAllPosts()

  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <div className="mx-auto flex max-w-[1280px]">
        <main className="flex-1 min-w-0 border-r border-borda px-8 py-8">
          <div className="mb-8 border-b-2 border-az pb-3">
            <h1
              className="text-[36px] font-black text-txt"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {label}
            </h1>
            <p className="text-[14px] text-txt3 mt-1">
              {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'} publicados
            </p>
          </div>
          {posts.length === 0 ? (
            <p className="text-txt3">Nenhum artigo nesta categoria ainda.</p>
          ) : (
            <div className="grid grid-cols-2 gap-8">
              {posts.map((post) => (
                <CardNoticia key={post.slug} post={post} size="md" />
              ))}
            </div>
          )}
        </main>
        <Sidebar posts={allPosts} />
      </div>
      <Footer />
    </>
  )
}
