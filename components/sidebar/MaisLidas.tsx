import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface MaisLidasProps {
  posts: Post[]
}

export default function MaisLidas({ posts }: MaisLidasProps) {
  return (
    <div className="rounded border border-borda p-4 bg-bg">
      <h3
        className="mb-3 text-[14px] font-black uppercase tracking-wider text-txt border-b-2 border-az pb-2"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Mais lidas
      </h3>
      <ol className="space-y-3">
        {posts.slice(0, 5).map((post, i) => (
          <li key={post.slug} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 text-[20px] font-black text-borda leading-none"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <Link href={`/artigo/${post.slug}`} className="group">
              <p
                className="text-[13px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {post.title}
              </p>
              <p className="mt-0.5 text-[11px] text-txt3">{post.readTime} min</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
