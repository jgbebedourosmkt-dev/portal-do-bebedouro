import Image from 'next/image'
import Link from 'next/link'
import Badge from './Badge'
import type { Post } from '@/lib/posts'

interface CardNoticiaProps {
  post: Post
  size?: 'sm' | 'md' | 'lg'
}

const categoriaLabel: Record<string, string> = {
  mercado: 'Mercado',
  legislacao: 'Legislação',
  saude: 'Saúde',
  guias: 'Guias',
  reviews: 'Reviews',
  eventos: 'Eventos',
}

export default function CardNoticia({ post, size = 'md' }: CardNoticiaProps) {
  const label = categoriaLabel[post.categoria] ?? post.categoria

  return (
    <article className="group">
      <Link href={`/artigo/${post.slug}`}>
        <div
          className={`relative mb-2 rounded overflow-hidden ${size === 'lg' ? 'h-48' : size === 'sm' ? 'h-28' : 'h-36'} bg-gradient-to-br from-az2 to-az`}
        >
          {post.ogImage && (
            <Image src={post.ogImage} alt={post.title} fill className="object-cover" sizes="50vw" />
          )}
        </div>
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span
              className="text-[13px] font-extrabold uppercase tracking-widest text-az2"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {label}
            </span>
            {post.badge && <Badge label={post.badge} variant={post.badgeVariant} />}
          </div>
          <h3
            className={`font-bold text-txt leading-tight group-hover:text-az transition-colors ${
              size === 'lg' ? 'text-[24px]' : size === 'sm' ? 'text-[17px]' : 'text-[20px]'
            } line-clamp-2`}
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {post.title}
          </h3>
          <p className="mt-1 text-[14px] text-txt3">
            {new Date(post.date).toLocaleDateString('pt-BR')} · {post.readTime} min
          </p>
        </div>
      </Link>
    </article>
  )
}
