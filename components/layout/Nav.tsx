'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import OrcamentoModal from '@/components/layout/OrcamentoModal'

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

function IconSearch({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

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

        {/* Mobile: hamburger | logo | botão direita */}
        <div className="md:hidden flex items-center w-full py-1.5 gap-2">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex items-center justify-center w-9 h-9 text-az transition-colors shrink-0"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>

          <Link href="/" className="leading-none">
            <span
              className="text-[23px] font-black tracking-tight leading-none whitespace-nowrap"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              <span className="text-[#111]">Portal</span>
              <span className="text-gray-300 font-light mx-1">do</span>
              <span className="text-az font-black italic">Bebedouro</span>
            </span>
          </Link>

          <div className="ml-auto shrink-0">
            <OrcamentoModal size="sm" />
          </div>
        </div>

        {/* Desktop: busca + socials */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="/busca"
            aria-label="Buscar"
            className="flex items-center justify-center w-8 h-8 rounded bg-bg border border-borda text-txt3 hover:border-az hover:text-az transition-colors"
          >
            <IconSearch size={14} />
          </a>
          <div className="w-px h-5 bg-borda mx-1" />
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
