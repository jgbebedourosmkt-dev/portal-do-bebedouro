import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface StripProps {
  posts: Post[]
}

const categoriaLabel: Record<string, string> = {
  mercado: 'Mercado',
  legislacao: 'Legislação',
  saude: 'Saúde',
  guias: 'Guias',
  reviews: 'Reviews',
  eventos: 'Eventos',
}

export default function Strip({ posts }: StripProps) {
  return (
    <section className="border-b border-borda bg-white" aria-label="Notícias rápidas">
      <div className="mx-auto grid max-w-[1280px] divide-y md:divide-y-0 md:divide-x divide-borda grid-cols-1 md:grid-cols-4">
        {posts.slice(0, 4).map((post, i) => (
          <article key={post.slug} className={`py-4 px-4 md:py-4 ${i === 0 ? 'md:pl-8 md:pr-6' : 'md:px-6'}`}>
            <Link href={`/artigo/${post.slug}`} className="group">
              <div className="mb-1.5">
                <span
                  className="text-[13px] font-extrabold uppercase tracking-widest text-az2"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {categoriaLabel[post.categoria] ?? post.categoria}
                </span>
              </div>
              <h3
                className="text-[20px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
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
