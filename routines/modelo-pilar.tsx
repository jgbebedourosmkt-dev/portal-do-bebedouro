import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro Industrial: Guia Completo para Indústrias e Empresas',
  description:
    'Tudo sobre bebedouro industrial: tipos, capacidades, normas ABNT NBR 13713, manutenção e como escolher o modelo ideal para sua indústria ou empresa.',
  slug: 'bebedouro-industrial',
})

const faqs = [
  {
    question: 'Qual a capacidade ideal de um bebedouro industrial?',
    answer:
      'A regra do setor é 1 bebedouro para cada 50 colaboradores em uso contínuo. Para galpões e indústrias de alta demanda, recomenda-se 1 para cada 30 pessoas. Modelos industriais partem de 20 L/h e chegam a mais de 200 L/h de produção de água gelada.',
  },
  {
    question: 'Bebedouro industrial precisa de certificação INMETRO?',
    answer:
      'Sim. A certificação INMETRO é obrigatória para bebedouros comercializados no Brasil, conforme a NBR 13713. Exija o laudo do fabricante antes de adquirir qualquer equipamento.',
  },
  {
    question: 'Qual a diferença entre bebedouro industrial e purificador?',
    answer:
      'O bebedouro industrial resfria e dispensa água da rede, geralmente sem sistema de filtragem avançado. O purificador adiciona um ou mais estágios de filtragem (carvão ativado, osmose reversa ou UV), sendo obrigatório em locais onde a qualidade da rede é duvidosa.',
  },
  {
    question: 'Com que frequência fazer a manutenção do bebedouro industrial?',
    answer:
      'A higienização deve ser feita a cada 6 meses, conforme a RDC 275/2005 da Anvisa. A troca de filtros varia por modelo: geralmente a cada 6 a 12 meses, dependendo do volume de uso e da qualidade da água local.',
  },
]

export default function BebedouroIndustrialPage() {
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
            { name: 'Bebedouro Industrial' },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <PilarLayout
        badge="Guia Completo"
        title="Bebedouro Industrial"
        excerpt="Guia completo para indústrias e empresas: tipos, capacidades, normas ABNT NBR 13713 e como escolher o modelo certo."
        breadcrumbLabel="Bebedouro Industrial"
        breadcrumbSlug="bebedouro-industrial"
        ctaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=pilar&utm_campaign=bebedouro-industrial"
        ctaLabel="Solicitar orçamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=sidebar&utm_campaign=bebedouro-industrial"
        finalCtaTitle="Precisa de bebedouro industrial?"
        finalCtaDesc="Venda e manutenção de bebedouros industriais com atendimento em todo o Brasil."
        tocItems={[
          { href: '#o-que-e', label: 'O que é bebedouro industrial' },
          { href: '#tipos', label: 'Tipos disponíveis' },
          { href: '#capacidade', label: 'Capacidade e dimensionamento' },
          { href: '#normas', label: 'Normas e certificações' },
          { href: '#faq', label: 'Perguntas frequentes' },
        ]}
        stats={[
          { valor: '1 / 50', label: 'colaboradores por bebedouro' },
          { valor: '20–200', label: 'litros por hora (capacidade)' },
          { valor: '6 meses', label: 'frequência de higienização' },
          { valor: 'NBR 13713', label: 'norma ABNT aplicável' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/tipos-de-bebedouro', label: 'Todos os tipos de bebedouro explicados' },
          { href: '/bebedouro-para-empresa', label: 'Como escolher bebedouro para sua empresa' },
          { href: '/artigo/como-escolher-bebedouro-corporativo', label: 'Guia: bebedouro corporativo passo a passo' },
          { href: '/artigo/nbr-13713-atualizada-2025', label: 'NBR 13713 atualizada 2025' },
        ]}
      >
        <section id="o-que-e" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            O que é um bebedouro industrial?
          </h2>
          <p className="text-[17px] text-txt2 leading-relaxed mb-4">
            Bebedouro industrial é um equipamento de grande porte projetado para atender dezenas ou centenas de pessoas
            simultaneamente. Diferente dos modelos residenciais, ele é construído em aço inox ou polietileno de alta
            densidade, possui compressor de alta performance e capacidade de produção de água gelada de{' '}
            <strong>20 L/h a 200 L/h</strong>.
          </p>
          <p className="text-[17px] text-txt2 leading-relaxed">
            A <strong>NBR 13713 da ABNT</strong> regulamenta os requisitos mínimos de fabricação, desempenho e
            segurança para esses equipamentos no mercado brasileiro.
          </p>
        </section>

        <section id="tipos" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Tipos de bebedouro industrial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tipo: 'Inox', icon: '🏭', desc: 'Corpo em aço inox 304. Alta durabilidade, fácil higienização e resistência à corrosão. Ideal para indústrias alimentícias e farmacêuticas.' },
              { tipo: 'Gelado de alta vazão', icon: '❄️', desc: 'Compressor dedicado que mantém a água entre 4 °C e 10 °C. Essencial para ambientes quentes como siderúrgicas e galpões logísticos.' },
              { tipo: 'Com filtro', icon: '🔬', desc: 'Combina resfriamento com filtração por carvão ativado ou osmose reversa. Recomendado quando a qualidade da rede é incerta.' },
              { tipo: 'De pressão (sem copo)', icon: '💧', desc: 'Sem copo, dispensa água por jato. Menor custo de manutenção e ideal para ambientes onde o uso de copos descartáveis precisa ser eliminado.' },
            ].map(({ tipo, icon, desc }) => (
              <div key={tipo} className="border border-borda rounded-lg p-5 hover:border-az transition-colors">
                <p className="text-[24px] mb-2">{icon}</p>
                <h3
                  className="font-black text-txt text-[16px] mb-1"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {tipo}
                </h3>
                <p className="text-[14px] text-txt3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="capacidade" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Capacidade: quantos bebedouros você precisa?
          </h2>
          <p className="text-[17px] text-txt2 leading-relaxed mb-5">
            A regra básica do setor é <strong>1 bebedouro para cada 50 colaboradores</strong> em uso contínuo.
            Em ambientes de alta demanda (galpões quentes, turnos noturnos), reduza para 1 a cada 30 pessoas.
          </p>
          <div className="overflow-x-auto rounded-lg border border-borda">
            <table className="w-full text-[14px] md:text-[15px]">
              <thead>
                <tr className="bg-az text-white">
                  <th className="px-5 py-3 text-left font-black" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Nº de colaboradores</th>
                  <th className="px-5 py-3 text-left font-black" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouros recomendados</th>
                  <th className="px-5 py-3 text-left font-black" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Capacidade sugerida</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Até 50', '1', '20–30 L/h'],
                  ['51 a 150', '2–3', '30–50 L/h cada'],
                  ['151 a 300', '4–6', '50–100 L/h cada'],
                  ['Acima de 300', 'Calcule 1 por 50', '100–200 L/h cada'],
                ].map(([col, bebedouros, cap], i) => (
                  <tr key={col} className={i % 2 === 1 ? 'bg-bg' : 'bg-white'}>
                    <td className="px-5 py-3 font-semibold text-txt">{col}</td>
                    <td className="px-5 py-3 text-txt2">{bebedouros}</td>
                    <td className="px-5 py-3 text-az font-bold">{cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="normas" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Normas e certificações obrigatórias
          </h2>
          <div className="space-y-3">
            {[
              { sigla: 'NBR 13713', desc: 'Define requisitos de fabricação, desempenho e segurança elétrica para bebedouros.' },
              { sigla: 'INMETRO', desc: 'Certificação compulsória para comercialização no Brasil. Exija o laudo do fabricante.' },
              { sigla: 'RDC 275/2005', desc: 'Determina higienização semestral e registro dos procedimentos (Anvisa).' },
              { sigla: 'NR-24 (MTE)', desc: 'Estabelece que todo local de trabalho deve fornecer água potável em quantidade suficiente.' },
            ].map(({ sigla, desc }) => (
              <div key={sigla} className="flex gap-4 p-4 rounded-lg border border-borda bg-bg">
                <span
                  className="shrink-0 inline-flex items-center justify-center bg-az text-white text-[11px] font-black px-2 rounded h-6 mt-0.5"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {sigla}
                </span>
                <p className="text-[15px] text-txt2">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </PilarLayout>

      <Footer />
    </>
  )
}
