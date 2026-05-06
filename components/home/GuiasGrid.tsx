import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface GuiasGridProps {
  posts: Post[]
}

export default function GuiasGrid({ posts }: GuiasGridProps) {
  return (
    <section className="border-t border-borda py-8 pr-8">
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-[22px] font-black text-txt"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Guias de Compra
        </h2>
        <Link
          href="/guias"
          className="text-[12px] font-bold text-az2 hover:underline"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Ver todos →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {posts.slice(0, 3).map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/artigo/${post.slug}`}>
              <div className="mb-2 h-32 rounded overflow-hidden bg-gradient-to-br from-vd to-vd2" />
              <span
                className="text-[10px] font-extrabold uppercase tracking-widest text-vd2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Guia
              </span>
              <h3
                className="mt-1 text-[15px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {post.title}
              </h3>
              <p className="mt-1 text-[12px] text-txt3">{post.readTime} min de leitura</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
