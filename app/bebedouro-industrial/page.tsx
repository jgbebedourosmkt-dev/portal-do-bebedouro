import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

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

      <main className="mx-auto max-w-[900px] px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-txt3 mb-6">
          <a href="/" className="hover:text-az">Home</a>
          <span className="mx-2">/</span>
          <span className="text-txt">Bebedouro Industrial</span>
        </nav>

        {/* Hero */}
        <h1
          className="text-[42px] font-black text-txt leading-tight mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Bebedouro Industrial: Guia Completo para Indústrias e Empresas
        </h1>
        <p className="text-[17px] text-txt2 leading-relaxed mb-8">
          O bebedouro industrial é equipamento obrigatório em galpões, fábricas e empresas com grande fluxo de pessoas.
          Neste guia você aprende a escolher o modelo certo, entende as normas ABNT aplicáveis e sabe quando é hora de manter ou substituir.
        </p>

        {/* CTA principal */}
        <a
          href="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-industrial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-az text-white font-bold px-6 py-3 rounded mb-10 hover:bg-az2 transition-colors"
        >
          Solicitar orçamento — JG Bebedouros
        </a>

        {/* Seção 1 */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            O que é um bebedouro industrial?
          </h2>
          <p className="text-[16px] text-txt2 leading-relaxed mb-3">
            Bebedouro industrial é um equipamento de grande porte projetado para atender dezenas ou centenas de pessoas
            simultaneamente. Diferente dos modelos residenciais, ele é construído em aço inox ou polietileno de alta
            densidade, possui compressor de alta performance e capacidade de produção de água gelada de 20 L/h a 200 L/h.
          </p>
          <p className="text-[16px] text-txt2 leading-relaxed">
            A NBR 13713 da ABNT regulamenta os requisitos mínimos de fabricação, desempenho e segurança para esses
            equipamentos no mercado brasileiro.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Tipos de bebedouro industrial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tipo: 'Bebedouro industrial inox', desc: 'Corpo em aço inox 304. Alta durabilidade, fácil higienização e resistência à corrosão. Ideal para indústrias alimentícias e farmacêuticas.' },
              { tipo: 'Bebedouro industrial gelado', desc: 'Compressor dedicado que mantém a água entre 4 °C e 10 °C. Essencial para ambientes quentes como siderúrgicas e galpões logísticos.' },
              { tipo: 'Bebedouro industrial com filtro', desc: 'Combina resfriamento com filtração por carvão ativado ou osmose reversa. Recomendado quando a qualidade da rede é incerta.' },
              { tipo: 'Bebedouro industrial de pressão', desc: 'Sem copo, dispensa água por jato. Menor custo de manutenção e ideal para ambientes onde o uso de copos descartáveis precisa ser eliminado.' },
            ].map(({ tipo, desc }) => (
              <div key={tipo} className="border border-borda rounded p-4">
                <h3 className="font-bold text-txt mb-1">{tipo}</h3>
                <p className="text-[14px] text-txt3">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção 3 */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Capacidade: quantos bebedouros você precisa?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border border-borda rounded">
              <thead className="bg-az text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Nº de colaboradores</th>
                  <th className="px-4 py-2 text-left">Bebedouros recomendados</th>
                  <th className="px-4 py-2 text-left">Capacidade sugerida</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Até 50', '1', '20–30 L/h'],
                  ['51 a 150', '2–3', '30–50 L/h cada'],
                  ['151 a 300', '4–6', '50–100 L/h cada'],
                  ['Acima de 300', 'Calcule 1 por 50', '100–200 L/h cada'],
                ].map(([col, bebedouros, cap]) => (
                  <tr key={col} className="border-t border-borda even:bg-bg">
                    <td className="px-4 py-2">{col}</td>
                    <td className="px-4 py-2">{bebedouros}</td>
                    <td className="px-4 py-2">{cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seção 4 */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Normas e certificações obrigatórias
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[16px] text-txt2">
            <li><strong>NBR 13713 (ABNT)</strong> — define requisitos de fabricação, desempenho e segurança elétrica.</li>
            <li><strong>Certificação INMETRO</strong> — compulsória para comercialização no Brasil.</li>
            <li><strong>RDC 275/2005 (Anvisa)</strong> — determina higienização semestral e registro dos procedimentos.</li>
            <li><strong>NR-24 (MTE)</strong> — estabelece que todo local de trabalho deve fornecer água potável em quantidade suficiente.</li>
          </ul>
        </section>

        {/* Links internos */}
        <section className="mb-10 bg-bg rounded p-6">
          <h2
            className="text-[22px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Continue lendo
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>→ <a href="/tipos-de-bebedouro" className="text-az hover:underline">Todos os tipos de bebedouro explicados</a></li>
            <li>→ <a href="/bebedouro-para-empresa" className="text-az hover:underline">Como escolher bebedouro para sua empresa</a></li>
            <li>→ <a href="/artigo/como-escolher-bebedouro-corporativo" className="text-az hover:underline">Guia: bebedouro corporativo passo a passo</a></li>
            <li>→ <a href="/artigo/nbr-13713-atualizada-2025" className="text-az hover:underline">NBR 13713 atualizada 2025</a></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Perguntas frequentes sobre bebedouro industrial
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

        {/* CTA final */}
        <div className="bg-az rounded p-6 text-center text-white">
          <p className="text-[20px] font-bold mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Precisa de bebedouro industrial?
          </p>
          <p className="text-[14px] mb-4 opacity-90">
            A JG Bebedouros oferece venda e manutenção de bebedouros industriais com atendimento em todo o Brasil.
          </p>
          <a
            href="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=cta-fim&utm_campaign=bebedouro-industrial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-acc text-az font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Falar com especialista
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
