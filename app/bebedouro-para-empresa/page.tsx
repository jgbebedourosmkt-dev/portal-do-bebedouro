import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro para Empresa: Como Escolher, Lei e Onde Comprar',
  description:
    'Saiba o que diz a lei sobre bebedouro em empresas, quantos equipamentos sÃ£o obrigatÃ³rios, quais tipos escolher e como calcular o custo total para o seu negÃ³cio.',
  slug: 'bebedouro-para-empresa',
})

const faqs = [
  {
    question: 'A lei obriga empresas a fornecer bebedouro?',
    answer:
      'Sim. A NR-24 do MinistÃ©rio do Trabalho e Emprego (item 24.7) obriga todo empregador a fornecer Ã¡gua potÃ¡vel, fresca e em quantidade suficiente para todos os trabalhadores. O descumprimento sujeita a empresa a autuaÃ§Ã£o fiscal.',
  },
  {
    question: 'Quantos bebedouros sÃ£o obrigatÃ³rios por lei?',
    answer:
      'A NR-24 nÃ£o especifica um nÃºmero exato, mas o entendimento consolidado Ã© de 1 bebedouro para cada 50 trabalhadores em turno. A Anvisa recomenda que o tempo de caminhada atÃ© o bebedouro nÃ£o exceda 2 minutos.',
  },
  {
    question: 'Qual o custo de manter um bebedouro na empresa?',
    answer:
      'O custo mÃ©dio anual de manutenÃ§Ã£o varia entre R$ 800 e R$ 3.200 por equipamento, incluindo higienizaÃ§Ã£o semestral e troca de filtros. O valor depende do modelo, da frequÃªncia de uso e da qualidade da Ã¡gua local.',
  },
  {
    question: 'Qual bebedouro escolher para escritÃ³rio?',
    answer:
      'Para escritÃ³rios de atÃ© 50 pessoas, o purificador de bancada ou o bebedouro de garrafÃ£o com refrigeraÃ§Ã£o atendem bem. Acima de 50 pessoas, considere modelos de pressÃ£o ou industriais ligados Ã  rede hidrÃ¡ulica.',
  },
]

export default function BebedouroParaEmpresaPage() {
  return (
    <>
      <Topbar />
      <Header />
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', slug: '' },
            { name: 'Bebedouro para Empresa' },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <PilarLayout
        badge="Guia Legal"
        title="Bebedouro para Empresa"
        excerpt="Fornecer Ã¡gua potÃ¡vel Ã© obrigaÃ§Ã£o legal de toda empresa brasileira. Saiba o que diz a lei, quantos bebedouros vocÃª precisa e como calcular o custo total."
        breadcrumbLabel="Bebedouro para Empresa"
        breadcrumbSlug="bebedouro-para-empresa"
        ctaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=pilar&utm_campaign=bebedouro-para-empresa"
        ctaLabel="Solicitar orÃ§amento para sua empresa"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=sidebar&utm_campaign=bebedouro-para-empresa"
        finalCtaTitle="Sua empresa precisa de bebedouro?"
        finalCtaDesc="Atendimento para empresas de todos os portes com venda, instalaÃ§Ã£o e manutenÃ§Ã£o preventiva."
        finalCtaLabel="Solicitar orÃ§amento grÃ¡tis"
        tocItems={[
          { href: '#lei', label: 'O que diz a lei' },
          { href: '#tipos', label: 'Qual tipo escolher' },
          { href: '#custo', label: 'Custo total' },
          { href: '#faq', label: 'Perguntas frequentes' },
        ]}
        stats={[
          { valor: 'NR-24', label: 'norma de obrigatoriedade' },
          { valor: '1 / 50', label: 'trabalhadores por bebedouro' },
          { valor: 'R$ 800â€“3.200', label: 'custo mÃ©dio anual de manutenÃ§Ã£o' },
          { valor: '6 meses', label: 'higienizaÃ§Ã£o obrigatÃ³ria (Anvisa)' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'Guia completo: bebedouro industrial' },
          { href: '/tipos-de-bebedouro', label: 'Todos os tipos de bebedouro comparados' },
          { href: '/artigo/como-escolher-bebedouro-corporativo', label: 'Como escolher bebedouro corporativo passo a passo' },
          { href: '/artigo/inmetro-certificacao-purificadores', label: 'CertificaÃ§Ã£o INMETRO para purificadores' },
        ]}
      >
        <section id="lei" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            O que diz a lei sobre bebedouro em empresas?
          </h2>
          <div className="border-l-4 border-az pl-5 mb-5 py-1">
            <p className="text-[16px] text-txt2 italic leading-relaxed">
              &quot;Todo estabelecimento deve ter instalaÃ§Ãµes adequadas para o fornecimento de Ã¡gua potÃ¡vel e fresca,
              em quantidade suficiente para atender Ã s necessidades dos trabalhadores.&quot;
            </p>
            <p className="text-[13px] text-txt3 mt-2 font-semibold">â€” NR-24, item 24.7, MinistÃ©rio do Trabalho e Emprego</p>
          </div>
          <p className="text-[17px] text-txt2 leading-relaxed">
            A norma nÃ£o estabelece um nÃºmero fixo de equipamentos, mas a prÃ¡tica de mercado consolidada Ã© de{' '}
            <strong>1 bebedouro para cada 50 trabalhadores</strong> em turno. Empresas fiscalizadas pelo MTE
            que nÃ£o cumprem a obrigaÃ§Ã£o estÃ£o sujeitas a autuaÃ§Ã£o e multa.
          </p>
        </section>

        <section id="tipos" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Qual tipo de bebedouro escolher para a sua empresa?
          </h2>
          <div className="space-y-3">
            {[
              { perfil: 'EscritÃ³rio atÃ© 50 pessoas', recomendado: 'Purificador de bancada ou bebedouro de garrafÃ£o', motivo: 'InstalaÃ§Ã£o simples, sem necessidade de obra hidrÃ¡ulica.' },
              { perfil: 'EscritÃ³rio 50 a 200 pessoas', recomendado: 'Bebedouro industrial de pressÃ£o ou purificador de coluna', motivo: 'LigaÃ§Ã£o direta Ã  rede, sem custo recorrente de galÃ£o.' },
              { perfil: 'IndÃºstria ou galpÃ£o logÃ­stico', recomendado: 'Bebedouro industrial inox (20â€“200 L/h)', motivo: 'Alta capacidade, durabilidade e resistÃªncia ao ambiente industrial.' },
              { perfil: 'Obras e canteiros', recomendado: 'Bebedouro industrial portÃ¡til ou de garrafÃ£o', motivo: 'Facilidade de transporte e independÃªncia de rede hidrÃ¡ulica.' },
            ].map(({ perfil, recomendado, motivo }) => (
              <div key={perfil} className="border border-borda rounded-lg p-5 flex gap-4 hover:border-az transition-colors">
                <div className="w-1 shrink-0 bg-az rounded-full" />
                <div>
                  <p className="font-black text-txt text-[15px]" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>{perfil}</p>
                  <p className="text-[15px] text-az font-bold mt-0.5">{recomendado}</p>
                  <p className="text-[13px] text-txt3 mt-1">{motivo}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="custo" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Custo total do bebedouro para empresa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-borda rounded-lg p-5">
              <h3
                className="font-black text-[20px] text-txt mb-3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Investimento inicial
              </h3>
              <ul className="text-[14px] text-txt2 space-y-2">
                {[
                  'Bebedouros de bancada: R$ 500 a R$ 1.500',
                  'Bebedouros de coluna: R$ 800 a R$ 2.500',
                  'Bebedouros industriais: R$ 1.500 a R$ 8.000',
                  'Controle total e patrimÃ´nio da empresa',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-az mt-0.5">â€¢</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-az rounded-lg p-5 bg-az/5">
              <h3
                className="font-black text-[20px] text-txt mb-3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                ManutenÃ§Ã£o anual
              </h3>
              <ul className="text-[14px] text-txt2 space-y-2">
                {[
                  'HigienizaÃ§Ã£o semestral (obrigatÃ³ria pela Anvisa)',
                  'Troca de filtros a cada 6â€“12 meses',
                  'Custo mÃ©dio: R$ 800 a R$ 3.200/ano',
                  'Planos de manutenÃ§Ã£o preventiva disponÃ­veis',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-az mt-0.5">â€¢</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </PilarLayout>

      <Footer />
    </>
  )
}
