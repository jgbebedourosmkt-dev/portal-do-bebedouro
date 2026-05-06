import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface SaudeGridProps {
  posts: Post[]
}

export default function SaudeGrid({ posts }: SaudeGridProps) {
  return (
    <section className="border-t border-borda py-8 pr-8">
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-[22px] font-black text-txt"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Saúde da Água
        </h2>
        <Link
          href="/saude"
          className="text-[12px] font-bold text-az2 hover:underline"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Ver todos →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {posts.slice(0, 4).map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/artigo/${post.slug}`}>
              <div className="mb-2 h-36 rounded overflow-hidden bg-gradient-to-br from-az2 to-az3" />
              <span
                className="text-[10px] font-extrabold uppercase tracking-widest text-az3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Saúde
              </span>
              <h3
                className="mt-1 text-[19px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {post.title}
              </h3>
              <p className="mt-1 text-[14px] text-txt3">{post.readTime} min</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
