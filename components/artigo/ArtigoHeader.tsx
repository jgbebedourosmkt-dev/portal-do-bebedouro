import Badge from '@/components/ui/Badge'
import type { Post } from '@/lib/posts'

interface ArtigoHeaderProps {
  post: Post
}

const categoriaLabel: Record<string, string> = {
  mercado: 'Mercado',
  legislacao: 'Legislação',
  saude: 'Saúde',
  guias: 'Guias',
  reviews: 'Reviews',
  eventos: 'Eventos',
}

export default function ArtigoHeader({ post }: ArtigoHeaderProps) {
  return (
    <header className="mb-8">
      <div className="mb-3 flex items-center gap-2">
        <a
          href={`/${post.categoria}`}
          className="text-[14px] font-extrabold uppercase tracking-widest text-az2 hover:text-az transition-colors"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {categoriaLabel[post.categoria] ?? post.categoria}
        </a>
        {post.badge && <Badge label={post.badge} variant={post.badgeVariant} />}
      </div>
      <h1
        className="text-[46px] font-black text-txt leading-tight mb-4"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {post.title}
      </h1>
      <p className="text-[20px] text-txt3 leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-[16px] text-txt3 border-t border-b border-borda py-3">
        <span className="font-semibold text-txt2">{post.author}</span>
        <span>·</span>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>·</span>
        <span>{post.readTime} min de leitura</span>
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[13px] font-semibold bg-bg border border-borda text-txt3 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
