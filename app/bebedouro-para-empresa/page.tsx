import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

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
      'O custo médio anual de manutenção varia entre R$ 800 e R$ 3.200 por equipamento, incluindo higienização semestral e troca de filtros. Na modalidade de aluguel, o valor mensal costuma incluir toda a manutenção, entre R$ 80 e R$ 300 por mês.',
  },
  {
    question: 'Vale mais a pena comprar ou alugar bebedouro para empresa?',
    answer:
      'Para empresas com menos de 5 funcionários ou contrato temporário, o aluguel é mais vantajoso. Para empresas com mais de 10 colaboradores e uso permanente, a compra tende a ser mais econômica no longo prazo, especialmente com modelos industriais.',
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

      <main className="mx-auto max-w-[900px] px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-txt3 mb-6">
          <a href="/" className="hover:text-az">Home</a>
          <span className="mx-2">/</span>
          <span className="text-txt">Bebedouro para Empresa</span>
        </nav>

        <h1
          className="text-[42px] font-black text-txt leading-tight mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Bebedouro para Empresa: Como Escolher, Lei e Onde Comprar
        </h1>
        <p className="text-[17px] text-txt2 leading-relaxed mb-8">
          Fornecer água potável é obrigação legal de toda empresa brasileira. Mas escolher o bebedouro certo vai além
          de cumprir a NR-24 — envolve calcular capacidade, avaliar custo total e garantir a qualidade da água para
          seus colaboradores.
        </p>

        <a
          href="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-para-empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-az text-white font-bold px-6 py-3 rounded mb-10 hover:bg-az2 transition-colors"
        >
          Solicitar orçamento para sua empresa
        </a>

        {/* Seção Lei */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            O que diz a lei sobre bebedouro em empresas?
          </h2>
          <div className="border-l-4 border-az pl-4 mb-4">
            <p className="text-[15px] text-txt2 italic">
              &quot;Todo estabelecimento deve ter instalações adequadas para o fornecimento de água potável e fresca,
              em quantidade suficiente para atender às necessidades dos trabalhadores.&quot;
            </p>
            <p className="text-[13px] text-txt3 mt-1">— NR-24, item 24.7, Ministério do Trabalho e Emprego</p>
          </div>
          <p className="text-[16px] text-txt2 leading-relaxed">
            A norma não estabelece um número fixo de equipamentos, mas a prática de mercado consolidada é de
            <strong> 1 bebedouro para cada 50 trabalhadores</strong> em turno. Empresas fiscalizadas pelo MTE
            que não cumprem a obrigação estão sujeitas a autuação e multa.
          </p>
        </section>

        {/* Seção Tipos */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Qual tipo de bebedouro escolher para a sua empresa?
          </h2>
          <div className="space-y-4">
            {[
              {
                perfil: 'Escritório até 50 pessoas',
                recomendado: 'Purificador de bancada ou bebedouro de garrafão',
                motivo: 'Instalação simples, sem necessidade de obra hidráulica.',
              },
              {
                perfil: 'Escritório 50 a 200 pessoas',
                recomendado: 'Bebedouro industrial de pressão ou purificador de coluna',
                motivo: 'Ligação direta à rede, sem custo recorrente de galão.',
              },
              {
                perfil: 'Indústria ou galpão logístico',
                recomendado: 'Bebedouro industrial inox (20–200 L/h)',
                motivo: 'Alta capacidade, durabilidade e resistência ao ambiente industrial.',
              },
              {
                perfil: 'Obras e canteiros',
                recomendado: 'Bebedouro industrial portátil ou de garrafão',
                motivo: 'Facilidade de transporte e independência de rede hidráulica.',
              },
            ].map(({ perfil, recomendado, motivo }) => (
              <div key={perfil} className="border border-borda rounded p-4 flex gap-4">
                <div className="w-2 shrink-0 bg-az rounded-full" />
                <div>
                  <p className="font-bold text-txt">{perfil}</p>
                  <p className="text-[15px] text-az font-semibold">{recomendado}</p>
                  <p className="text-[13px] text-txt3">{motivo}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Custo */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Custo total: compra vs. aluguel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-borda rounded p-5">
              <h3 className="font-bold text-[18px] text-txt mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Compra
              </h3>
              <ul className="text-[14px] text-txt2 space-y-1 list-disc pl-4">
                <li>Investimento inicial: R$ 1.500 a R$ 8.000</li>
                <li>Manutenção anual: R$ 800 a R$ 3.200</li>
                <li>Melhor para uso permanente (+3 anos)</li>
                <li>Controle total do equipamento</li>
              </ul>
            </div>
            <div className="border border-az rounded p-5 bg-az/5">
              <h3 className="font-bold text-[18px] text-txt mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Aluguel
              </h3>
              <ul className="text-[14px] text-txt2 space-y-1 list-disc pl-4">
                <li>Mensalidade: R$ 80 a R$ 300</li>
                <li>Inclui manutenção e troca de filtros</li>
                <li>Ideal para contratos temporários</li>
                <li>Sem imobilização de capital</li>
              </ul>
            </div>
          </div>
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
            <li>→ <a href="/bebedouro-industrial" className="text-az hover:underline">Guia completo: bebedouro industrial</a></li>
            <li>→ <a href="/tipos-de-bebedouro" className="text-az hover:underline">Todos os tipos de bebedouro comparados</a></li>
            <li>→ <a href="/artigo/como-escolher-bebedouro-corporativo" className="text-az hover:underline">Como escolher bebedouro corporativo passo a passo</a></li>
            <li>→ <a href="/artigo/inmetro-certificacao-purificadores" className="text-az hover:underline">Certificação INMETRO para purificadores</a></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Perguntas frequentes
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
            Sua empresa precisa de bebedouro?
          </p>
          <p className="text-[14px] mb-4 opacity-90">
            A JG Bebedouros atende empresas de todos os portes com venda, aluguel, instalação e manutenção preventiva.
          </p>
          <a
            href="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=cta-fim&utm_campaign=bebedouro-para-empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-acc text-az font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Solicitar orçamento grátis
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
