'use client'

import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Menu principal" className="sticky top-0 z-50 bg-white border-b-[3px] border-az shadow-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 md:px-8">

        {/* Desktop links */}
        <ul className="hidden md:flex items-stretch">
          {links.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center px-4 py-3.5 text-[17px] font-extrabold uppercase tracking-wide transition-colors ${
                    isActive ? 'text-az border-b-[3px] border-acc -mb-[3px]' : 'text-txt2 hover:text-az'
                  }`}
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile: logo compacto + hamburger */}
        <div className="flex md:hidden items-center justify-between w-full py-2">
          <Link href="/" className="leading-none">
            <span
              className="text-[28px] font-black tracking-tight leading-none text-az italic"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Portal do Bebedouro
            </span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            className="flex flex-col justify-center gap-[5px] p-2"
          >
            <span className={`block h-[2px] w-6 bg-az transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] w-6 bg-az transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-6 bg-az transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Desktop socials */}
        <div className="hidden md:flex items-center gap-1">
          {socials.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-8 h-8 rounded bg-bg border border-borda text-[13px] font-black text-txt3 hover:border-az hover:text-az transition-colors"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-borda">
          <ul>
            {links.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href} className="border-b border-borda">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center px-6 py-4 text-[19px] font-extrabold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-az bg-bg' : 'text-txt2'
                    }`}
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex gap-3 px-6 py-4 border-t border-borda">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded bg-bg border border-borda text-[14px] font-black text-txt3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
