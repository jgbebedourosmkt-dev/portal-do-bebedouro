import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import type { Post } from '@/lib/posts'

interface HeroProps {
  featured: Post
  secondary: Post[]
}

export default function Hero({ featured, secondary }: HeroProps) {
  return (
    <section className="w-full" aria-label="Destaque principal">
      <div
        className="grid"
        style={{ gridTemplateColumns: '62% 38%' }}
      >
        {/* Card principal */}
        <div
          className="relative min-h-[480px] flex flex-col justify-end overflow-hidden"
          style={!featured.ogImage ? { background: 'linear-gradient(135deg, #051C31 0%, #0B3D6B 50%, #103D1C 100%)' } : undefined}
        >
          {featured.ogImage && (
            <Image
              src={featured.ogImage}
              alt={featured.title}
              fill
              className="object-cover"
              priority
              sizes="62vw"
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)',
            }}
          />
          <div
            className="relative z-10 pb-8 pr-8"
            style={{
              paddingLeft: 'max(32px, calc((100vw - 1280px) / 2 + 32px))',
            }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className="text-[11px] font-extrabold uppercase tracking-widest text-az3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {featured.categoria}
              </span>
              {featured.badge && (
                <Badge label={featured.badge} variant={featured.badgeVariant} />
              )}
            </div>
            <Link href={`/artigo/${featured.slug}`}>
              <h2
                className="text-[34px] font-black text-white leading-tight hover:text-acc transition-colors line-clamp-3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {featured.title}
              </h2>
            </Link>
            <p className="mt-2 text-[14px] text-white/70 line-clamp-2 max-w-xl">
              {featured.excerpt}
            </p>
            <div className="mt-3 flex items-center gap-3 text-[12px] text-white/50">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{new Date(featured.date).toLocaleDateString('pt-BR')}</span>
              <span>·</span>
              <span>{featured.readTime} min de leitura</span>
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <div className="flex flex-col divide-y divide-white/10 border-l border-white/10 bg-black">
          {secondary.slice(0, 2).map((post) => (
            <div key={post.slug} className="relative flex flex-1 flex-col justify-end p-6 overflow-hidden">
              {post.ogImage && (
                <Image
                  src={post.ogImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="38vw"
                />
              )}
              <div className="relative z-10 mb-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-widest text-az3"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {post.categoria}
                </span>
              </div>
              <Link href={`/artigo/${post.slug}`} className="relative z-10">
                <h3
                  className="text-[18px] font-black text-white leading-tight hover:text-acc transition-colors line-clamp-3"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {post.title}
                </h3>
              </Link>
              <p className="relative z-10 mt-2 text-[12px] text-white/50 line-clamp-2">{post.excerpt}</p>
              <p className="relative z-10 mt-2 text-[11px] text-white/30">
                {new Date(post.date).toLocaleDateString('pt-BR')} · {post.readTime} min
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
