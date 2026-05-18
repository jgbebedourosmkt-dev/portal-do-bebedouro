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
    'Saiba o que diz a lei sobre bebedouro em empresas, quantos equipamentos são obrigatórios, quais tipos escolher e como calcular o custo total para o seu negócio.',
  slug: 'bebedouro-para-empresa',
})

const faqs = [
  {
    question: 'A lei obriga empresas a fornecer bebedouro?',
    answer:
      'Sim. A NR-24 do Ministério do Trabalho e Emprego (item 24.7) obriga todo empregador a fornecer água potável, fresca e em quantidade suficiente para todos os trabalhadores. O descumprimento sujeita a empresa a autuação fiscal.',
  },
  {
    question: 'Quantos bebedouros são obrigatórios por lei?',
    answer:
      'A NR-24 não especifica um número exato, mas o entendimento consolidado é de 1 bebedouro para cada 50 trabalhadores em turno. A Anvisa recomenda que o tempo de caminhada até o bebedouro não exceda 2 minutos.',
  },
  {
    question: 'Qual o custo de manter um bebedouro na empresa?',
    answer:
      'O custo médio anual de manutenção varia entre R$ 800 e R$ 3.200 por equipamento, incluindo higienização semestral e troca de filtros. O valor depende do modelo, da frequência de uso e da qualidade da água local.',
  },
  {
    question: 'Qual bebedouro escolher para escritório?',
    answer:
      'Para escritórios de até 50 pessoas, o purificador de bancada ou o bebedouro de garrafão com refrigeração atendem bem. Acima de 50 pessoas, considere modelos de pressão ou industriais ligados à rede hidráulica.',
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
        excerpt="Fornecer água potável é obrigação legal de toda empresa brasileira. Saiba o que diz a lei, quantos bebedouros você precisa e como calcular o custo total."
        breadcrumbLabel="Bebedouro para Empresa"
        breadcrumbSlug="bebedouro-para-empresa"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-para-empresa"
        ctaLabel="Solicitar orçamento para sua empresa"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=bebedouro-para-empresa"
        finalCtaTitle="Sua empresa precisa de bebedouro?"
        finalCtaDesc="Atendimento para empresas de todos os portes com venda, instalação e manutenção preventiva."
        finalCtaLabel="Solicitar orçamento grátis"
        tocItems={[
          { href: '#lei', label: 'O que diz a lei' },
          { href: '#tipos', label: 'Qual tipo escolher' },
          { href: '#custo', label: 'Custo total' },
          { href: '#faq', label: 'Perguntas frequentes' },
        ]}
        stats={[
          { valor: 'NR-24', label: 'norma de obrigatoriedade' },
          { valor: '1 / 50', label: 'trabalhadores por bebedouro' },
          { valor: 'R$ 800–3.200', label: 'custo médio anual de manutenção' },
          { valor: '6 meses', label: 'higienização obrigatória (Anvisa)' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'Guia completo: bebedouro industrial' },
          { href: '/tipos-de-bebedouro', label: 'Todos os tipos de bebedouro comparados' },
          { href: '/artigo/como-escolher-bebedouro-corporativo', label: 'Como escolher bebedouro corporativo passo a passo' },
          { href: '/artigo/inmetro-certificacao-purificadores', label: 'Certificação INMETRO para purificadores' },
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
              &quot;Todo estabelecimento deve ter instalações adequadas para o fornecimento de água potável e fresca,
              em quantidade suficiente para atender às necessidades dos trabalhadores.&quot;
            </p>
            <p className="text-[13px] text-txt3 mt-2 font-semibold">— NR-24, item 24.7, Ministério do Trabalho e Emprego</p>
          </div>
          <p className="text-[17px] text-txt2 leading-relaxed">
            A norma não estabelece um número fixo de equipamentos, mas a prática de mercado consolidada é de{' '}
            <strong>1 bebedouro para cada 50 trabalhadores</strong> em turno. Empresas fiscalizadas pelo MTE
            que não cumprem a obrigação estão sujeitas a autuação e multa.
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
              { perfil: 'Escritório até 50 pessoas', recomendado: 'Purificador de bancada ou bebedouro de garrafão', motivo: 'Instalação simples, sem necessidade de obra hidráulica.' },
              { perfil: 'Escritório 50 a 200 pessoas', recomendado: 'Bebedouro industrial de pressão ou purificador de coluna', motivo: 'Ligação direta à rede, sem custo recorrente de galão.' },
              { perfil: 'Indústria ou galpão logístico', recomendado: 'Bebedouro industrial inox (20–200 L/h)', motivo: 'Alta capacidade, durabilidade e resistência ao ambiente industrial.' },
              { perfil: 'Obras e canteiros', recomendado: 'Bebedouro industrial portátil ou de garrafão', motivo: 'Facilidade de transporte e independência de rede hidráulica.' },
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
                  'Controle total e patrimônio da empresa',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-az mt-0.5">•</span>
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
                Manutenção anual
              </h3>
              <ul className="text-[14px] text-txt2 space-y-2">
                {[
                  'Higienização semestral (obrigatória pela Anvisa)',
                  'Troca de filtros a cada 6–12 meses',
                  'Custo médio: R$ 800 a R$ 3.200/ano',
                  'Planos de manutenção preventiva disponíveis',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-az mt-0.5">•</span>
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
