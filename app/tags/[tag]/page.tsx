import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getAllTags, getPostsByTag } from '@/lib/posts'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CardNoticia from '@/components/ui/CardNoticia'
import Sidebar from '@/components/sidebar/Sidebar'

interface PageProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params
  const label = decodeURIComponent(tag)
  return {
    title: `Tag: ${label}`,
    description: `Artigos com a tag "${label}" no Portal do Bebedouro.`,
    alternates: { canonical: `https://portalbebedouro.com.br/tags/${tag}` },
  }
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params
  const label = decodeURIComponent(tag)
  const posts = getPostsByTag(label)

  if (posts.length === 0) notFound()

  const allPosts = getAllPosts()

  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <div className="mx-auto flex flex-col md:flex-row max-w-[1280px]">
        <main className="flex-1 min-w-0 md:border-r border-borda px-4 md:px-8 py-8">
          <div className="mb-8 border-b-2 border-az pb-3">
            <p className="text-[13px] text-txt3 uppercase tracking-widest mb-1">Tag</p>
            <h1
              className="text-[36px] font-black text-txt"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {label}
            </h1>
            <p className="text-[14px] text-txt3 mt-1">
              {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <CardNoticia key={post.slug} post={post} size="md" />
            ))}
          </div>
        </main>
        <Sidebar posts={allPosts} />
      </div>
      <Footer />
    </>
  )
}
