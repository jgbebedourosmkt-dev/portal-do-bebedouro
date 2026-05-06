import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface LegislacaoListProps {
  posts: Post[]
}

export default function LegislacaoList({ posts }: LegislacaoListProps) {
  return (
    <section className="border-t border-borda py-8 pr-8">
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-[22px] font-black text-txt"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Legislação & Normas
        </h2>
        <Link
          href="/legislacao"
          className="text-[12px] font-bold text-az2 hover:underline"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Ver todas →
        </Link>
      </div>
      <ol className="space-y-3">
        {posts.slice(0, 5).map((post, i) => (
          <li key={post.slug} className="flex items-start gap-4 border-b border-borda pb-3">
            <span
              className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-az text-white text-[13px] font-black"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {i + 1}
            </span>
            <Link href={`/artigo/${post.slug}`} className="group flex-1">
              <h3
                className="text-[15px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {post.title}
              </h3>
              <p className="mt-0.5 text-[12px] text-txt3">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
