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
      <div className="grid grid-cols-1 md:grid-cols-[62%_38%]">
        {/* Card principal */}
        <div
          className="relative min-h-[300px] md:min-h-[480px] flex flex-col justify-end overflow-hidden"
          style={!featured.ogImage ? { background: 'linear-gradient(135deg, #051C31 0%, #0B3D6B 50%, #103D1C 100%)' } : undefined}
        >
          {featured.ogImage && (
            <Image
              src={featured.ogImage}
              alt={featured.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 62vw"
            />
          )}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)' }}
          />
          <div className="relative z-10 px-4 pb-6 md:pb-8 md:pr-8 md:pl-8">
            <div className="mb-3 flex items-center gap-2">
              <span
                className="text-[13px] font-extrabold uppercase tracking-widest text-az3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {featured.categoria}
              </span>
              {featured.badge && <Badge label={featured.badge} variant={featured.badgeVariant} />}
            </div>
            <Link href={`/artigo/${featured.slug}`}>
              <h2
                className="text-[28px] md:text-[41px] font-black text-white leading-tight hover:text-acc transition-colors line-clamp-3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {featured.title}
              </h2>
            </Link>
            <p className="mt-2 text-[15px] md:text-[17px] text-white/70 line-clamp-2 max-w-xl">
              {featured.excerpt}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 md:gap-3 text-[13px] md:text-[14px] text-white/50">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{new Date(featured.date).toLocaleDateString('pt-BR')}</span>
              <span>·</span>
              <span>{featured.readTime} min de leitura</span>
            </div>
          </div>
        </div>

        {/* Mini cards — grade 2x2 */}
        <div className="grid grid-cols-2 md:border-l border-white/10 bg-black" style={{ gridTemplateRows: '1fr 1fr' }}>
          {secondary.slice(0, 4).map((post) => (
            <div key={post.slug} className="relative flex flex-col justify-end p-3 md:p-4 overflow-hidden border-b border-r border-white/10 min-h-[140px] md:min-h-0">
              {post.ogImage ? (
                <Image src={post.ogImage} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 19vw" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-az to-az2" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="relative z-10">
                <span
                  className="text-[11px] font-extrabold uppercase tracking-widest text-az3"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {post.categoria}
                </span>
                <Link href={`/artigo/${post.slug}`}>
                  <h3
                    className="mt-1 text-[15px] md:text-[18px] font-black text-white leading-tight hover:text-acc transition-colors line-clamp-3"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-1 text-[12px] text-white/40">
                  {new Date(post.date).toLocaleDateString('pt-BR')} · {post.readTime} min
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
