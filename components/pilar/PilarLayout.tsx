import React from 'react'
import OrcamentoModal from '@/components/layout/OrcamentoModal'

export interface PilarFaq {
  question: string
  answer: string
}

export interface PilarStat {
  valor: string
  label: string
}

export interface PilarTocItem {
  href: string
  label: string
}

export interface PilarLink {
  href: string
  label: string
}

interface PilarLayoutProps {
  badge?: string
  title: string
  excerpt: string
  breadcrumbLabel: string
  breadcrumbSlug: string
  ctaHref: string
  ctaLabel?: string
  sidebarCtaHref: string
  sidebarCtaLabel?: string
  tocItems: PilarTocItem[]
  stats: PilarStat[]
  faqs: PilarFaq[]
  internalLinks: PilarLink[]
  finalCtaTitle?: string
  finalCtaDesc?: string
  finalCtaLabel?: string
  children: React.ReactNode
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function IconChevron() {
  return (
    <svg className="shrink-0 ml-3 transition-transform group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function PilarLayout({
  badge = 'Guia Completo',
  title,
  excerpt,
  breadcrumbLabel,
  breadcrumbSlug,
  ctaHref,
  ctaLabel = 'Solicitar orçamento',
  sidebarCtaHref,
  sidebarCtaLabel = 'Falar com especialista',
  tocItems,
  stats,
  faqs,
  internalLinks,
  finalCtaTitle = 'Precisa de bebedouro?',
  finalCtaDesc = 'A JG Bebedouros oferece venda e manutenção com atendimento em todo o Brasil.',
  finalCtaLabel = 'Falar com especialista',
  children,
}: PilarLayoutProps) {
  return (
    <>
      {/* Hero band */}
      <div className="bg-az border-b-4 border-acc">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-10 md:py-14">
          <nav className="text-[13px] text-white/60 mb-4 flex items-center gap-1.5">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href={`/${breadcrumbSlug}`} className="text-white/90">{breadcrumbLabel}</a>
          </nav>
          <div className="max-w-[760px]">
            <span
              className="inline-block bg-acc text-az text-[12px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {badge}
            </span>
            <h1
              className="text-[38px] md:text-[56px] font-black text-white leading-tight mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {title}
            </h1>
            <p className="text-[16px] md:text-[19px] text-white/85 leading-relaxed mb-6 max-w-[600px]">
              {excerpt}
            </p>
            <OrcamentoModal
              triggerClassName="inline-flex items-center gap-2 bg-acc text-az font-black text-[15px] px-6 py-3 rounded hover:bg-white transition-colors"
              showArrow
            />
          </div>
        </div>
      </div>

      {/* Corpo: 2 colunas no desktop */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Coluna principal */}
          <main className="flex-1 min-w-0">
            <div className="
              [&_p]:mb-5 [&_p]:text-[19px] [&_p]:leading-relaxed [&_p]:text-txt2
              [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc
              [&_ol]:my-4 [&_ol]:pl-6 [&_ol]:list-decimal
              [&_li]:mb-2 [&_li]:text-[19px]
              [&_blockquote]:border-l-4 [&_blockquote]:border-acc [&_blockquote]:pl-5 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:bg-bg [&_blockquote]:rounded-r-md [&_blockquote]:text-txt3
              [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:text-[17px]
              [&_thead]:bg-az [&_thead]:text-white
              [&_th]:border [&_th]:border-borda [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-bold
              [&_td]:border [&_td]:border-borda [&_td]:px-4 [&_td]:py-3
            ">
              {children}
            </div>

            {/* Leia também */}
            {internalLinks.length > 0 && (
              <section className="mb-12 bg-bg rounded-lg p-6 border border-borda">
                <h2
                  className="text-[22px] font-black text-txt mb-4"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Leia também
                </h2>
                <ul className="space-y-2">
                  {internalLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a href={href} className="flex items-center gap-2 text-[15px] text-az hover:underline">
                        <IconArrow />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ */}
            {faqs.length > 0 && (
              <section id="faq" className="mb-12 scroll-mt-20">
                <h2
                  className="text-[30px] font-black text-txt mb-6 pb-2 border-b-2 border-borda"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Perguntas frequentes
                </h2>
                <div className="space-y-3">
                  {faqs.map(({ question, answer }) => (
                    <details key={question} className="group border border-borda rounded-lg overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 font-bold text-[16px] text-txt cursor-pointer hover:bg-bg list-none">
                        {question}
                        <IconChevron />
                      </summary>
                      <p className="px-5 py-4 text-[15px] text-txt2 leading-relaxed border-t border-borda bg-bg">
                        {answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA final */}
            <div className="rounded-xl bg-az p-8 text-center">
              <p
                className="text-[26px] font-black text-white mb-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {finalCtaTitle}
              </p>
              <p className="text-[15px] text-white/80 mb-6">{finalCtaDesc}</p>
              <OrcamentoModal
                triggerClassName="inline-flex items-center gap-2 bg-acc text-az font-black text-[16px] px-8 py-3.5 rounded-lg hover:bg-white transition-colors"
                showArrow
              />
            </div>
          </main>

          {/* Sidebar desktop */}
          <aside className="hidden lg:block w-[300px] shrink-0">
            <div className="sticky top-20 space-y-6">

              {/* Índice */}
              {tocItems.length > 0 && (
                <div className="border border-borda rounded-lg overflow-hidden">
                  <div className="bg-az px-4 py-3">
                    <p
                      className="text-[13px] font-black uppercase tracking-widest text-white"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      Neste guia
                    </p>
                  </div>
                  <nav className="p-4">
                    <ol className="space-y-1">
                      {tocItems.map(({ href, label }, i) => (
                        <li key={href}>
                          <a
                            href={href}
                            className="flex items-center gap-2.5 text-[14px] text-txt3 hover:text-az transition-colors py-1 group"
                          >
                            <span className="shrink-0 w-5 h-5 rounded-full bg-bg border border-borda text-[11px] font-black text-txt3 flex items-center justify-center group-hover:bg-az group-hover:text-white group-hover:border-az transition-colors">
                              {i + 1}
                            </span>
                            {label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              )}

              {/* Stats */}
              {stats.length > 0 && (
                <div className="border border-borda rounded-lg overflow-hidden">
                  <div className="bg-bg px-4 py-3 border-b border-borda">
                    <p
                      className="text-[13px] font-black uppercase tracking-widest text-txt3"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      Dados do setor
                    </p>
                  </div>
                  <div className="divide-y divide-borda">
                    {stats.map(({ valor, label }) => (
                      <div key={label} className="px-4 py-3">
                        <p
                          className="text-[20px] font-black text-az leading-none mb-0.5"
                          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                        >
                          {valor}
                        </p>
                        <p className="text-[12px] text-txt3">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA sidebar */}
              <div className="rounded-lg bg-az p-5 text-center">
                <p
                  className="text-[18px] font-black text-white mb-1"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Precisa de orçamento?
                </p>
                <p className="text-[12px] text-white/70 mb-4">Atendimento em todo o Brasil</p>
                <OrcamentoModal
                  triggerClassName="block w-full bg-acc text-az font-black text-[14px] py-2.5 rounded-lg hover:bg-white transition-colors"
                />
              </div>

            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
