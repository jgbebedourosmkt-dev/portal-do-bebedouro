import Image from 'next/image'
import Link from 'next/link'
import StarRating from '@/components/ui/StarRating'
import type { Post } from '@/lib/posts'

interface ReviewsGridProps {
  posts: Post[]
}

const ratings: Record<string, number> = {}

export default function ReviewsGrid({ posts }: ReviewsGridProps) {
  return (
    <section className="border-t border-borda py-8 md:pr-8">
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-[26px] font-black text-txt"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Reviews & Testes
        </h2>
        <Link
          href="/reviews"
          className="text-[14px] font-bold text-az2 hover:underline"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Ver todos →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.slice(0, 4).map((post, i) => (
          <article key={post.slug} className="group rounded border border-borda p-4 hover:border-az transition-colors">
            <Link href={`/artigo/${post.slug}`}>
              <div className="relative mb-3 h-28 rounded overflow-hidden bg-gradient-to-br from-txt3 to-txt2">
                {post.ogImage && (
                  <Image src={post.ogImage} alt={post.title} fill className="object-cover" sizes="50vw" />
                )}
              </div>
              <div className="mb-2">
                <StarRating rating={ratings[post.slug] ?? (5 - (i % 2))} />
              </div>
              <h3
                className="text-[23px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {post.title}
              </h3>
              <p className="mt-1 text-[17px] text-txt3">{post.readTime} min</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
