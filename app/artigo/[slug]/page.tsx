import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { articleSchema } from '@/lib/seo'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ArtigoHeader from '@/components/artigo/ArtigoHeader'
import ArtigoBody from '@/components/artigo/ArtigoBody'
import ArtigoRelacionados from '@/components/artigo/ArtigoRelacionados'
import Sidebar from '@/components/sidebar/Sidebar'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.ogImage ?? '/og-default.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://portalbebedouro.com.br/artigo/${post.slug}` },
  }
}

export default async function ArtigoPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const relacionados = allPosts
    .filter((p) => p.slug !== post.slug && p.categoria === post.categoria)
    .slice(0, 3)

  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <div className="mx-auto flex max-w-[1280px]">
        <main className="flex-1 min-w-0 border-r border-borda px-8 py-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
          />
          <ArtigoHeader post={post} />
          <div className="mb-6 h-64 rounded overflow-hidden bg-gradient-to-br from-az to-az2" />
          <ArtigoBody content={post.content} />
          <ArtigoRelacionados posts={relacionados} />
        </main>
        <Sidebar posts={allPosts} />
      </div>
      <Footer />
    </>
  )
}
