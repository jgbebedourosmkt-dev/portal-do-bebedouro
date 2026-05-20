import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { getLocalPageBySlug, getAllLocalPages, type LocalPage } from '@/lib/local'

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
  // deduplica
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

  // tenta JSON primeiro
  const json = getLocalPageBySlug(slug)
  if (json) return <LocalPageFromJson data={json} slug={slug} />

  // fallback hardcoded
  const city = CITIES[slug]
  if (!city) notFound()
  return <LocalPageHardcoded city={city} slug={slug} />
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

  const utmCity = data.name.toLowerCase().replace(/\s+/g, '-')

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

      <main className="mx-auto max-w-[900px] px-4 md:px-8 py-10">
        <nav className="text-[13px] text-txt3 mb-6">
          <a href="/" className="hover:text-az">Home</a>
          <span className="mx-2">/</span>
          <a href="/bebedouro-industrial" className="hover:text-az">Bebedouro Industrial</a>
          <span className="mx-2">/</span>
          <span className="text-txt">{data.name}</span>
        </nav>

        <h1
          className="text-[42px] font-black text-txt leading-tight mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {cityLabel}
        </h1>

        {data.contextoComercial && (
          <p className="text-[17px] text-txt2 leading-relaxed mb-6">
            {data.contextoComercial}
          </p>
        )}

        <a
          href={`https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=local&utm_campaign=bebedouro-industrial-${utmCity}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-az text-white font-bold px-6 py-3 rounded mb-10 hover:bg-az2 transition-colors"
        >
          Solicitar orçamento {data.prep} {data.name}
        </a>

        {/* Conteúdo principal gerado pelo Gemini */}
        {data.content && (
          <div
            className="prose prose-lg max-w-none text-txt2 leading-relaxed mb-10
              prose-headings:font-black prose-headings:text-txt
              prose-h2:text-[28px] prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-[22px] prose-h3:mt-7 prose-h3:mb-3
              prose-p:mb-5 prose-p:text-[18px] prose-p:leading-relaxed
              prose-a:text-az2 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-txt prose-strong:font-bold
              prose-ul:my-4 prose-ul:pl-6 prose-ul:list-disc
              prose-ol:my-4 prose-ol:pl-6 prose-ol:list-decimal
              prose-li:mb-2 prose-li:text-[18px]
              prose-table:w-full prose-table:my-6 prose-table:border-collapse prose-table:text-[15px]
              prose-thead:bg-az prose-thead:text-white
              prose-th:border prose-th:border-borda prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold
              prose-td:border prose-td:border-borda prose-td:px-4 prose-td:py-3
              prose-tr:even:bg-bg"
            style={{ fontFamily: 'var(--font-barlow)' }}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        )}

        {/* FAQ */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Dúvidas sobre bebedouro industrial {data.prep} {data.name}
          </h2>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="border border-borda rounded">
                <summary className="px-4 py-3 font-semibold text-txt cursor-pointer hover:bg-bg">
                  {question}
                </summary>
                <p className="px-4 py-3 text-[15px] text-txt2 border-t border-borda">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-az rounded p-6 text-center text-white">
          <p className="text-[20px] font-bold mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Bebedouro industrial {data.prep} {data.name} com entrega rápida
          </p>
          <p className="text-[14px] mb-4 opacity-90">
            JG Bebedouros oferece venda e manutenção com atendimento {data.prep} {localRef}.
          </p>
          <a
            href={`https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=cta-fim&utm_campaign=bebedouro-industrial-${utmCity}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-acc text-az font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Pedir orçamento grátis
          </a>
        </div>
      </main>

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

      <main className="mx-auto max-w-[900px] px-4 md:px-8 py-10">
        <nav className="text-[13px] text-txt3 mb-6">
          <a href="/" className="hover:text-az">Home</a>
          <span className="mx-2">/</span>
          <a href="/bebedouro-industrial" className="hover:text-az">Bebedouro Industrial</a>
          <span className="mx-2">/</span>
          <span className="text-txt">{city.name}</span>
        </nav>

        <h1
          className="text-[42px] font-black text-txt leading-tight mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Bebedouro Industrial em {city.name} — {city.stateAbbr}
        </h1>
        <p className="text-[17px] text-txt2 leading-relaxed mb-8">
          {city.name} é {city.region}. Com alta demanda por equipamentos de hidratação industrial,
          a cidade conta com fornecedores especializados em bebedouros de grande porte para indústrias,
          galpões e empresas de todos os tamanhos.
        </p>

        <a
          href={`https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=local&utm_campaign=bebedouro-industrial-${city.name.toLowerCase().replace(/\s+/g, '-')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-az text-white font-bold px-6 py-3 rounded mb-10 hover:bg-az2 transition-colors"
        >
          Solicitar orçamento em {city.name}
        </a>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
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
              <div key={titulo} className="border border-borda rounded p-4 text-center">
                <h3 className="font-bold text-txt mb-1">{titulo}</h3>
                <p className="text-[13px] text-txt3">{desc.replace('{cidade}', city.name)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Modelos disponíveis para {city.name}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border border-borda rounded">
              <thead className="bg-az text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Modelo</th>
                  <th className="px-4 py-2 text-left">Capacidade</th>
                  <th className="px-4 py-2 text-left">Indicado para</th>
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
                    <td className="px-4 py-2 font-semibold">{modelo}</td>
                    <td className="px-4 py-2">{cap}</td>
                    <td className="px-4 py-2">{indicado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 bg-bg rounded p-6">
          <h2
            className="text-[22px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Saiba mais sobre bebedouros industriais
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>→ <a href="/bebedouro-industrial" className="text-az hover:underline">Guia completo: bebedouro industrial</a></li>
            <li>→ <a href="/tipos-de-bebedouro" className="text-az hover:underline">Comparativo de todos os tipos de bebedouro</a></li>
            <li>→ <a href="/bebedouro-para-empresa" className="text-az hover:underline">Como escolher bebedouro para sua empresa</a></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Dúvidas sobre bebedouro industrial em {city.name}
          </h2>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="border border-borda rounded">
                <summary className="px-4 py-3 font-semibold text-txt cursor-pointer hover:bg-bg">
                  {question}
                </summary>
                <p className="px-4 py-3 text-[15px] text-txt2 border-t border-borda">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-az rounded p-6 text-center text-white">
          <p className="text-[20px] font-bold mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Bebedouro industrial em {city.name} com entrega rápida
          </p>
          <p className="text-[14px] mb-4 opacity-90">
            JG Bebedouros oferece venda e manutenção com atendimento em {city.name}/{city.stateAbbr}.
          </p>
          <a
            href={`https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=cta-fim&utm_campaign=bebedouro-industrial-${city.name.toLowerCase().replace(/\s+/g, '-')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-acc text-az font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Pedir orçamento grátis
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
