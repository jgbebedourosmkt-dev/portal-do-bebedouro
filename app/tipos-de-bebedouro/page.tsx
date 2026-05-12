import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata = buildMetadata({
  title: 'Tipos de Bebedouro: Qual é o Ideal para Você? Guia Completo 2025',
  description:
    'Conheça todos os tipos de bebedouro: industrial, de pressão, purificador, garrafão, escolar e corporativo. Saiba qual modelo se adapta melhor à sua necessidade.',
  slug: 'tipos-de-bebedouro',
})

const tipos = [
  {
    nome: 'Bebedouro industrial',
    descricao:
      'Projetado para ambientes de alta demanda como fábricas, galpões e obras. Alta capacidade de produção de água gelada (20 a 200 L/h). Corpo geralmente em aço inox ou polietileno.',
    indicado: 'Indústrias, galpões logísticos, canteiros de obra',
    href: '/bebedouro-industrial',
  },
  {
    nome: 'Bebedouro de pressão',
    descricao:
      'Dispensa água por jato sem uso de copo. Muito comum em escolas e espaços públicos. Baixo custo de manutenção e alta higiene por eliminar contato com copos descartáveis.',
    indicado: 'Escolas, academias, parques, espaços públicos',
    href: null,
  },
  {
    nome: 'Purificador de água',
    descricao:
      'Combina filtragem (carvão ativado, UV ou osmose reversa) com refrigeração. Indicado quando a qualidade da água da rede é duvidosa. Dispensa garrafão.',
    indicado: 'Escritórios, clínicas, residências, empresas',
    href: null,
  },
  {
    nome: 'Bebedouro de garrafão',
    descricao:
      'Utiliza galão de 20 litros. Solução popular para ambientes sem ligação direta à rede. Custo fixo de recarga do galão. Modelos com e sem refrigeração.',
    indicado: 'Escritórios pequenos, home office, locais sem rede',
    href: null,
  },
  {
    nome: 'Bebedouro escolar',
    descricao:
      'Projetado para o público infantil com alturas de torneira adaptadas e proteções de segurança. Modelos com jato de pressão e bica de inox.',
    indicado: 'Escolas de educação infantil e fundamental',
    href: null,
  },
  {
    nome: 'Bebedouro de bancada',
    descricao:
      'Compacto, instalado sobre balcões ou mesas. Ideal para pequenos escritórios onde o espaço é limitado. Geralmente com filtragem e refrigeração.',
    indicado: 'Pequenos escritórios, consultórios, recepções',
    href: null,
  },
]

const faqs = [
  {
    question: 'Qual a diferença entre bebedouro e purificador de água?',
    answer:
      'O bebedouro resfria e dispensa água sem necessariamente filtrá-la. O purificador inclui um ou mais estágios de filtragem (carvão ativado, UV, osmose reversa), melhorando o sabor e eliminando contaminantes. Muitos equipamentos modernos combinam as duas funções.',
  },
  {
    question: 'Bebedouro de pressão filtra a água?',
    answer:
      'Os modelos básicos de bebedouro de pressão não possuem sistema de filtragem — apenas refrigeram a água da rede. Existem versões com filtro de carvão ativado embutido para melhorar o sabor e remover cloro.',
  },
  {
    question: 'Qual tipo de bebedouro consome menos energia?',
    answer:
      'Bebedouros de garrafão sem compressor consomem praticamente zero energia. Entre os modelos refrigerados, os de menor consumo são os purificadores de bancada (em torno de 60–100 W). Os industriais de grande porte podem consumir 400 W ou mais.',
  },
  {
    question: 'Posso instalar qualquer tipo de bebedouro na minha empresa?',
    answer:
      'A NR-24 do Ministério do Trabalho exige que empresas forneçam água potável a todos os colaboradores. A escolha do tipo depende do espaço disponível, do número de usuários e da qualidade da rede local. Para mais de 50 pessoas, recomenda-se o modelo industrial.',
  },
]

export default function TiposDeBebedouroPage() {
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
            { name: 'Tipos de Bebedouro' },
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
          <span className="text-txt">Tipos de Bebedouro</span>
        </nav>

        <h1
          className="text-[42px] font-black text-txt leading-tight mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Tipos de Bebedouro: Qual é o Ideal para Você?
        </h1>
        <p className="text-[17px] text-txt2 leading-relaxed mb-10">
          Bebedouro industrial, de pressão, purificador, garrafão ou escolar — cada modelo tem características,
          capacidades e custos distintos. Este guia explica cada tipo para você tomar a melhor decisão.
        </p>

        {/* Grid de tipos */}
        <section className="mb-12">
          <div className="space-y-5">
            {tipos.map(({ nome, descricao, indicado, href }) => (
              <div key={nome} className="border border-borda rounded p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2
                      className="text-[22px] font-bold text-txt mb-1"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      {href ? <a href={href} className="hover:text-az">{nome}</a> : nome}
                    </h2>
                    <p className="text-[15px] text-txt2 mb-2">{descricao}</p>
                    <p className="text-[13px] text-txt3">
                      <span className="font-semibold">Indicado para:</span> {indicado}
                    </p>
                  </div>
                  {href && (
                    <a
                      href={href}
                      className="shrink-0 text-[13px] font-bold text-az border border-az rounded px-3 py-1 hover:bg-az hover:text-white transition-colors"
                    >
                      Ver guia →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabela comparativa */}
        <section className="mb-12">
          <h2
            className="text-[28px] font-bold text-txt mb-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Comparativo rápido
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] border border-borda rounded">
              <thead className="bg-az text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Tipo</th>
                  <th className="px-3 py-2 text-left">Capacidade</th>
                  <th className="px-3 py-2 text-left">Filtra?</th>
                  <th className="px-3 py-2 text-left">Custo médio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Industrial', 'Alta (20–200 L/h)', 'Opcional', 'R$ 1.500–8.000'],
                  ['De pressão', 'Média (5–20 L/h)', 'Opcional', 'R$ 300–1.200'],
                  ['Purificador', 'Baixa-média (1–5 L/h)', 'Sim', 'R$ 400–2.000'],
                  ['Garrafão', 'Baixa (garrafão 20 L)', 'Não', 'R$ 150–600'],
                  ['Escolar', 'Média (5–15 L/h)', 'Opcional', 'R$ 350–900'],
                  ['Bancada', 'Baixa (1–3 L/h)', 'Sim', 'R$ 250–800'],
                ].map(([tipo, cap, filtra, custo]) => (
                  <tr key={tipo} className="border-t border-borda even:bg-bg">
                    <td className="px-3 py-2 font-semibold">{tipo}</td>
                    <td className="px-3 py-2">{cap}</td>
                    <td className="px-3 py-2">{filtra}</td>
                    <td className="px-3 py-2">{custo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Links internos */}
        <section className="mb-10 bg-bg rounded p-6">
          <h2
            className="text-[22px] font-bold text-txt mb-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Aprofunde o tema
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>→ <a href="/bebedouro-industrial" className="text-az hover:underline">Guia completo: bebedouro industrial</a></li>
            <li>→ <a href="/bebedouro-para-empresa" className="text-az hover:underline">Como escolher bebedouro para empresa</a></li>
            <li>→ <a href="/artigo/como-escolher-bebedouro-corporativo" className="text-az hover:underline">Critérios para escolha de bebedouro corporativo</a></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2
            className="text-[28px] font-bold text-txt mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Dúvidas frequentes
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
            Encontre o bebedouro certo para o seu negócio
          </p>
          <p className="text-[14px] mb-4 opacity-90">
            A JG Bebedouros tem todos os tipos disponíveis para venda, com suporte técnico especializado.
          </p>
          <a
            href="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=cta-fim&utm_campaign=tipos-de-bebedouro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-acc text-az font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Ver catálogo completo
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
