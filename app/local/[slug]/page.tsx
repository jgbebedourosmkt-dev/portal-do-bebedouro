import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { getLocalPageBySlug, getAllLocalPages, type LocalPage } from '@/lib/local'
import OrcamentoModal from '@/components/layout/OrcamentoModal'

// Páginas hardcoded (mantidas para compatibilidade)
interface CityData {
  name: string
  state: string
  stateAbbr: string
  region: string
}

const CITIES: Record<string, CityData> = {
  'bebedouro-industrial-sao-paulo': {
    name: 'São Paulo',
    state: 'São Paulo',
    stateAbbr: 'SP',
    region: 'maior polo industrial e comercial do Brasil, com mais de 150 mil indústrias registradas',
  },
  'bebedouro-industrial-belo-horizonte': {
    name: 'Belo Horizonte',
    state: 'Minas Gerais',
    stateAbbr: 'MG',
    region: 'principal hub industrial do interior brasileiro, referência em metalurgia e tecnologia',
  },
  'bebedouro-industrial-curitiba': {
    name: 'Curitiba',
    state: 'Paraná',
    stateAbbr: 'PR',
    region: 'polo automotivo e de tecnologia do Sul do Brasil, com forte setor de manufatura',
  },
  'bebedouro-industrial-porto-alegre': {
    name: 'Porto Alegre',
    state: 'Rio Grande do Sul',
    stateAbbr: 'RS',
    region: 'centro econômico do Rio Grande do Sul, forte em agronegócio e indústria',
  },
  'bebedouro-industrial-recife': {
    name: 'Recife',
    state: 'Pernambuco',
    stateAbbr: 'PE',
    region: 'maior polo econômico do Nordeste, com crescente setor de serviços e logística',
  },
  'bebedouro-industrial-fortaleza': {
    name: 'Fortaleza',
    state: 'Ceará',
    stateAbbr: 'CE',
    region: 'principal polo industrial do Nordeste, destaque em têxtil, calçados e tecnologia',
  },
  'bebedouro-industrial-manaus': {
    name: 'Manaus',
    state: 'Amazonas',
    stateAbbr: 'AM',
    region: 'sede da Zona Franca de Manaus, um dos maiores parques industriais do país',
  },
  'bebedouro-industrial-brasilia': {
    name: 'Brasília',
    state: 'Distrito Federal',
    stateAbbr: 'DF',
    region: 'capital federal com grande concentração de empresas de serviços e órgãos governamentais',
  },
  'bebedouro-industrial-salvador': {
    name: 'Salvador',
    state: 'Bahia',
    stateAbbr: 'BA',
    region: 'polo petroquímico e industrial da Bahia, com forte presença do setor de logística',
  },
  'bebedouro-industrial-vitoria': {
    name: 'Vitória',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    region: 'importante polo portuário e industrial do Sudeste, destaque em siderurgia e celulose',
  },
  'bebedouro-industrial-goiania': {
    name: 'Goiânia',
    state: 'Goiás',
    stateAbbr: 'GO',
    region: 'centro do agronegócio e logística do Centro-Oeste brasileiro',
  },
  'bebedouro-industrial-campinas': {
    name: 'Campinas',
    state: 'São Paulo',
    stateAbbr: 'SP',
    region: 'segundo maior polo tecnológico e industrial do estado de São Paulo',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const jsonSlugs = getAllLocalPages().map((p) => ({ slug: p.slug }))
  const hardcodedSlugs = Object.keys(CITIES).map((slug) => ({ slug }))
  const all = [...jsonSlugs, ...hardcodedSlugs]
  const seen = new Set<string>()
  return all.filter(({ slug }) => {
    if (seen.has(slug)) return false
    seen.add(slug)
    return true
  })
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const json = getLocalPageBySlug(slug)
  if (json) {
    return buildMetadata({
      title: json.h1 ?? `Bebedouro Industrial ${json.prep} ${json.name} — ${json.stateAbbr}`,
      description: json.metaDescription ?? '',
      slug: `local/${slug}`,
    })
  }
  const city = CITIES[slug]
  if (!city) return {}
  return buildMetadata({
    title: `Bebedouro Industrial em ${city.name} — ${city.stateAbbr}: Fornecedores e Preços`,
    description: `Bebedouro industrial em ${city.name}/${city.stateAbbr}. Venda e manutenção com atendimento local. Solicite orçamento grátis.`,
    slug: `local/${slug}`,
  })
}

export default async function LocalPage({ params }: PageProps) {
  const { slug } = await params
  const json = getLocalPageBySlug(slug)
  if (json) return <LocalPageFromJson data={json} slug={slug} />
  const city = CITIES[slug]
  if (!city) notFound()
  return <LocalPageHardcoded city={city} slug={slug} />
}

// ── Ícone seta ────────────────────────────────────────────────────────────────

function IconArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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

// ── Sidebar compartilhada ─────────────────────────────────────────────────────

const RELATED_LINKS = [
  { href: '/bebedouro-industrial', label: 'Guia: Bebedouro Industrial' },
  { href: '/tipos-de-bebedouro', label: 'Tipos de Bebedouro' },
  { href: '/bebedouro-para-empresa', label: 'Bebedouro para Empresa' },
  { href: '/manutencao-bebedouro', label: 'Manutenção de Bebedouro' },
]

const EQUIPMENT_STATS = [
  { valor: '4+', label: 'Modelos disponíveis' },
  { valor: '100 L/h', label: 'Capacidade máxima' },
  { valor: '3–7 dias', label: 'Prazo de entrega' },
  { valor: '12 meses', label: 'Garantia inclusa' },
]

function LocalSidebar({ cityName, stateAbbr, prep = 'em' }: { cityName: string; stateAbbr: string; prep?: string }) {
  return (
    <aside className="hidden lg:block w-[280px] shrink-0">
      <div className="sticky top-20 space-y-5">

        {/* CTA orçamento */}
        <div className="rounded-lg bg-az p-5 text-center">
          <p
            className="text-[18px] font-black text-white mb-1"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Precisa de orçamento?
          </p>
          <p className="text-[12px] text-white/70 mb-4">
            Atendimento {prep} {cityName}/{stateAbbr}
          </p>
          <OrcamentoModal
            triggerClassName="block w-full bg-acc text-az font-black text-[14px] py-2.5 rounded-lg hover:bg-white transition-colors"
          />
        </div>

        {/* Dados do equipamento */}
        <div className="border border-borda rounded-lg overflow-hidden">
          <div className="bg-bg px-4 py-3 border-b border-borda">
            <p
              className="text-[13px] font-black uppercase tracking-widest text-txt3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Dados do equipamento
            </p>
          </div>
          <div className="divide-y divide-borda">
            {EQUIPMENT_STATS.map(({ valor, label }) => (
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

        {/* Leia também */}
        <div className="border border-borda rounded-lg overflow-hidden">
          <div className="bg-bg px-4 py-3 border-b border-borda">
            <p
              className="text-[13px] font-black uppercase tracking-widest text-txt3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Leia também
            </p>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {RELATED_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-2 text-[13px] text-az hover:underline py-0.5">
                    <IconArrow />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </aside>
  )
}

// ── Página gerada a partir de JSON (SEO Local) ────────────────────────────────

function LocalPageFromJson({ data, slug }: { data: LocalPage; slug: string }) {
  const cityLabel = data.h1 ?? `Bebedouro Industrial ${data.prep} ${data.name}`
  const localRef = `${data.name}/${data.stateAbbr}`

  const faqs = data.faqs && data.faqs.length > 0
    ? data.faqs
    : [
        {
          question: `Onde comprar bebedouro industrial ${data.prep} ${data.name}?`,
          answer: `${data.prep.charAt(0).toUpperCase() + data.prep.slice(1)} ${data.name} você encontra bebedouros industriais na JG Bebedouros, com atendimento local, entrega e instalação na região.`,
        },
        {
          question: `Qual o prazo de entrega de bebedouro industrial ${data.prep} ${data.name}?`,
          answer: `Para ${data.name} e região, o prazo costuma ser de 3 a 7 dias úteis após a confirmação do pedido. Consulte disponibilidade do modelo desejado.`,
        },
      ]

  return (
    <>
      <Topbar />
      <Header />
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema({
            name: `JG Bebedouros — ${data.name}`,
            city: data.name,
            state: data.state,
            slug: `local/${slug}`,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', slug: '' },
            { name: 'Bebedouro Industrial', slug: 'bebedouro-industrial' },
            { name: data.name },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero band */}
      <div className="bg-az border-b-4 border-acc">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-10 md:py-12">
          <nav className="text-[13px] text-white/60 mb-4 flex items-center gap-1.5">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/bebedouro-industrial" className="hover:text-white transition-colors">Bebedouro Industrial</a>
            <span>/</span>
            <span className="text-white/90">{data.name}</span>
          </nav>
          <div className="max-w-[760px]">
            <span
              className="inline-block bg-acc text-az text-[12px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {data.stateAbbr}
            </span>
            <h1
              className="text-[38px] md:text-[52px] font-black text-white leading-tight mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {cityLabel}
            </h1>
            {data.contextoComercial && (
              <p className="text-[16px] md:text-[18px] text-white/85 leading-relaxed mb-5 max-w-[560px]">
                {data.contextoComercial}
              </p>
            )}
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

          {/* Conteúdo principal */}
          <main className="flex-1 min-w-0">

            {/* Conteúdo gerado pelo Gemini */}
            {data.content && (
              <div
                className="
                  [&_p]:mb-5 [&_p]:text-[18px] [&_p]:leading-relaxed [&_p]:text-txt2
                  [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc
                  [&_ol]:my-4 [&_ol]:pl-6 [&_ol]:list-decimal
                  [&_li]:mb-2 [&_li]:text-[18px]
                  [&_h2]:text-[28px] [&_h2]:font-black [&_h2]:text-txt [&_h2]:mt-10 [&_h2]:mb-4
                  [&_h3]:text-[22px] [&_h3]:font-black [&_h3]:text-txt [&_h3]:mt-7 [&_h3]:mb-3
                  [&_blockquote]:border-l-4 [&_blockquote]:border-acc [&_blockquote]:pl-5 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:bg-bg [&_blockquote]:rounded-r-md [&_blockquote]:text-txt3
                  [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:text-[15px]
                  [&_thead]:bg-az [&_thead]:text-white
                  [&_th]:border [&_th]:border-borda [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-bold
                  [&_td]:border [&_td]:border-borda [&_td]:px-4 [&_td]:py-3
                  [&_tr:nth-child(even)]:bg-bg
                  mb-10
                "
                style={{ fontFamily: 'var(--font-barlow)' }}
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            )}

            {/* FAQ */}
            <section id="faq" className="mb-12 scroll-mt-20">
              <h2
                className="text-[28px] font-black text-txt mb-6 pb-2 border-b-2 border-borda"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Dúvidas sobre bebedouro industrial {data.prep} {data.name}
              </h2>
              <div className="space-y-3">
                {faqs.map(({ question, answer }) => (
                  <details key={question} className="group border border-borda rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between px-5 py-4 font-bold text-[16px] text-txt cursor-pointer hover:bg-bg list-none">
                      {question}
                      <IconChevron />
                    </summary>
                    <p className="px-5 py-4 text-[15px] text-txt2 leading-relaxed border-t border-borda bg-bg">{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA final */}
            <div className="rounded-xl bg-az p-8 text-center">
              <p
                className="text-[26px] font-black text-white mb-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Bebedouro industrial {data.prep} {data.name} com entrega rápida
              </p>
              <p className="text-[15px] text-white/80 mb-6">
                JG Bebedouros oferece venda e manutenção com atendimento {data.prep} {localRef}.
              </p>
              <OrcamentoModal
                triggerClassName="inline-flex items-center gap-2 bg-acc text-az font-black text-[16px] px-8 py-3.5 rounded-lg hover:bg-white transition-colors"
                showArrow
              />
            </div>
          </main>

          {/* Sidebar */}
          <LocalSidebar cityName={data.name} stateAbbr={data.stateAbbr} prep={data.prep} />
        </div>
      </div>

      <Footer />
    </>
  )
}

// ── Página hardcoded (compatibilidade) ────────────────────────────────────────

function LocalPageHardcoded({ city, slug }: { city: CityData; slug: string }) {
  const faqs = [
    {
      question: `Onde comprar bebedouro industrial em ${city.name}?`,
      answer: `Em ${city.name} você encontra bebedouros industriais na JG Bebedouros, com atendimento local, entrega e instalação na região. Entre em contato para verificar disponibilidade e prazo.`,
    },
    {
      question: `Qual o prazo de entrega de bebedouro industrial em ${city.name}?`,
      answer: `Para ${city.name} e região metropolitana, o prazo costuma ser de 3 a 7 dias úteis após a confirmação do pedido. Consulte disponibilidade do modelo desejado.`,
    },
  ]

  return (
    <>
      <Topbar />
      <Header />
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema({
            name: `JG Bebedouros — ${city.name}`,
            city: city.name,
            state: city.state,
            slug: `local/${slug}`,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', slug: '' },
            { name: 'Bebedouro Industrial', slug: 'bebedouro-industrial' },
            { name: city.name },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero band */}
      <div className="bg-az border-b-4 border-acc">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-10 md:py-12">
          <nav className="text-[13px] text-white/60 mb-4 flex items-center gap-1.5">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/bebedouro-industrial" className="hover:text-white transition-colors">Bebedouro Industrial</a>
            <span>/</span>
            <span className="text-white/90">{city.name}</span>
          </nav>
          <div className="max-w-[760px]">
            <span
              className="inline-block bg-acc text-az text-[12px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {city.stateAbbr}
            </span>
            <h1
              className="text-[38px] md:text-[52px] font-black text-white leading-tight mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Bebedouro Industrial em {city.name} — {city.stateAbbr}
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/85 leading-relaxed mb-5 max-w-[560px]">
              {city.name} é {city.region}. Fornecedores especializados em bebedouros industriais para empresas e galpões de todos os tamanhos.
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

          {/* Conteúdo principal */}
          <main className="flex-1 min-w-0">

            {/* Vantagens */}
            <section className="mb-10">
              <h2
                className="text-[28px] font-black text-txt mb-5"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Vantagens de comprar bebedouro industrial em {city.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { titulo: 'Entrega local', desc: 'Prazo reduzido e frete mais acessível para {cidade} e região metropolitana.' },
                  { titulo: 'Assistência técnica', desc: 'Manutenção preventiva e corretiva com técnicos na sua cidade.' },
                  { titulo: 'Suporte ágil', desc: 'Atendimento presencial rápido em caso de emergência ou falha no equipamento.' },
                ].map(({ titulo, desc }) => (
                  <div key={titulo} className="border border-borda rounded-lg p-5 text-center bg-bg">
                    <h3
                      className="font-black text-txt mb-2 text-[17px]"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      {titulo}
                    </h3>
                    <p className="text-[13px] text-txt3 leading-relaxed">{desc.replace('{cidade}', city.name)}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Modelos */}
            <section className="mb-10">
              <h2
                className="text-[28px] font-black text-txt mb-5"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Modelos disponíveis para {city.name}
              </h2>
              <div className="overflow-x-auto rounded-lg border border-borda">
                <table className="w-full text-[14px]">
                  <thead className="bg-az text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold">Modelo</th>
                      <th className="px-4 py-3 text-left font-bold">Capacidade</th>
                      <th className="px-4 py-3 text-left font-bold">Indicado para</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Bebedouro industrial inox 30 L/h', '30 L/h', 'Até 100 colaboradores'],
                      ['Bebedouro industrial inox 50 L/h', '50 L/h', '100 a 200 colaboradores'],
                      ['Bebedouro industrial inox 100 L/h', '100 L/h', '200 a 400 colaboradores'],
                      ['Bebedouro industrial de pressão', '20–50 L/h', 'Áreas de produção e galpões'],
                    ].map(([modelo, cap, indicado]) => (
                      <tr key={modelo} className="border-t border-borda even:bg-bg">
                        <td className="px-4 py-3 font-semibold">{modelo}</td>
                        <td className="px-4 py-3 text-txt2">{cap}</td>
                        <td className="px-4 py-3 text-txt2">{indicado}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12 scroll-mt-20">
              <h2
                className="text-[28px] font-black text-txt mb-6 pb-2 border-b-2 border-borda"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Dúvidas sobre bebedouro industrial em {city.name}
              </h2>
              <div className="space-y-3">
                {faqs.map(({ question, answer }) => (
                  <details key={question} className="group border border-borda rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between px-5 py-4 font-bold text-[16px] text-txt cursor-pointer hover:bg-bg list-none">
                      {question}
                      <IconChevron />
                    </summary>
                    <p className="px-5 py-4 text-[15px] text-txt2 leading-relaxed border-t border-borda bg-bg">{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA final */}
            <div className="rounded-xl bg-az p-8 text-center">
              <p
                className="text-[26px] font-black text-white mb-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Bebedouro industrial em {city.name} com entrega rápida
              </p>
              <p className="text-[15px] text-white/80 mb-6">
                JG Bebedouros oferece venda e manutenção com atendimento em {city.name}/{city.stateAbbr}.
              </p>
              <OrcamentoModal
                triggerClassName="inline-flex items-center gap-2 bg-acc text-az font-black text-[16px] px-8 py-3.5 rounded-lg hover:bg-white transition-colors"
                showArrow
              />
            </div>
          </main>

          {/* Sidebar */}
          <LocalSidebar cityName={city.name} stateAbbr={city.stateAbbr} />
        </div>
      </div>

      <Footer />
    </>
  )
}
