'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Início' },
  { href: '/mercado', label: 'Mercado' },
  { href: '/legislacao', label: 'Legislação' },
  { href: '/saude', label: 'Saúde' },
  { href: '/guias', label: 'Guias' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/eventos', label: 'Eventos' },
]

const socials = [
  { href: '#', label: 'Facebook', icon: 'f' },
  { href: '#', label: 'Instagram', icon: 'ig' },
  { href: '#', label: 'YouTube', icon: 'yt' },
  { href: '#', label: 'LinkedIn', icon: 'in' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Menu principal"
      className="sticky top-0 z-50 bg-white border-b-[3px] border-az shadow-sm"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8">
        <ul className="flex items-stretch">
          {links.map(({ href, label }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center px-4 py-3.5 text-[14px] font-extrabold uppercase tracking-wide transition-colors ${
                    isActive
                      ? 'text-az border-b-[3px] border-acc -mb-[3px]'
                      : 'text-txt2 hover:text-az'
                  }`}
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-1">
          {socials.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-8 h-8 rounded bg-bg border border-borda text-[11px] font-black text-txt3 hover:border-az hover:text-az transition-colors"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
