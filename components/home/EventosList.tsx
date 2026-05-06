import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface EventosListProps {
  posts: Post[]
}

export default function EventosList({ posts }: EventosListProps) {
  return (
    <section className="border-t border-borda py-8 md:pr-8">
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-[26px] font-black text-txt"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Eventos do Setor
        </h2>
        <Link
          href="/eventos"
          className="text-[14px] font-bold text-az2 hover:underline"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Ver todos →
        </Link>
      </div>
      <ul className="space-y-4">
        {posts.slice(0, 4).map((post) => {
          const d = new Date(post.date)
          return (
            <li key={post.slug} className="flex items-start gap-4 border-b border-borda pb-4">
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded bg-az text-white">
                <span
                  className="text-[26px] font-black leading-none"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {d.getDate()}
                </span>
                <span
                  className="text-[12px] font-bold uppercase"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {d.toLocaleString('pt-BR', { month: 'short' })}
                </span>
              </div>
              <Link href={`/artigo/${post.slug}`} className="group flex-1">
                <h3
                  className="text-[24px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {post.title}
                </h3>
                <p className="mt-1 text-[17px] text-txt3 line-clamp-1">{post.excerpt}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
