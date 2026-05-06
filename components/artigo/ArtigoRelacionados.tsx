import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface ArtigoRelacionadosProps {
  posts: Post[]
}

export default function ArtigoRelacionados({ posts }: ArtigoRelacionadosProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-12 border-t border-borda pt-8">
      <h2
        className="mb-6 text-[29px] font-black text-txt"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Artigos relacionados
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/artigo/${post.slug}`}>
              <div className="mb-2 h-32 rounded overflow-hidden bg-gradient-to-br from-az to-az2" />
              <h3
                className="text-[18px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {post.title}
              </h3>
              <p className="mt-1 text-[14px] text-txt3">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
