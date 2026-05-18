import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Tipos de Bebedouro: Qual é o Ideal para Você? Guia Completo 2025',
  description:
    'Conheça todos os tipos de bebedouro: industrial, de pressão, purificador, garrafão, escolar e corporativo. Saiba qual modelo se adapta melhor à sua necessidade.',
  slug: 'tipos-de-bebedouro',
})

const tipos = [
  { nome: 'Bebedouro industrial', icon: '🏭', descricao: 'Projetado para ambientes de alta demanda como fábricas, galpões e obras. Alta capacidade de produção de água gelada (20 a 200 L/h). Corpo geralmente em aço inox ou polietileno.', indicado: 'Indústrias, galpões logísticos, canteiros de obra', href: '/bebedouro-industrial' },
  { nome: 'Bebedouro de pressão', icon: '💦', descricao: 'Dispensa água por jato sem uso de copo. Muito comum em escolas e espaços públicos. Baixo custo de manutenção e alta higiene por eliminar contato com copos descartáveis.', indicado: 'Escolas, academias, parques, espaços públicos', href: null },
  { nome: 'Purificador de água', icon: '🔬', descricao: 'Combina filtragem (carvão ativado, UV ou osmose reversa) com refrigeração. Indicado quando a qualidade da água da rede é duvidosa. Dispensa garrafão.', indicado: 'Escritórios, clínicas, residências, empresas', href: null },
  { nome: 'Bebedouro de garrafão', icon: '🫙', descricao: 'Utiliza galão de 20 litros. Solução popular para ambientes sem ligação direta à rede. Custo fixo de recarga do galão. Modelos com e sem refrigeração.', indicado: 'Escritórios pequenos, home office, locais sem rede', href: null },
  { nome: 'Bebedouro escolar', icon: '🏫', descricao: 'Projetado para o público infantil com alturas de torneira adaptadas e proteções de segurança. Modelos com jato de pressão e bica de inox.', indicado: 'Escolas de educação infantil e fundamental', href: null },
  { nome: 'Bebedouro de bancada', icon: '🖥️', descricao: 'Compacto, instalado sobre balcões ou mesas. Ideal para pequenos escritórios onde o espaço é limitado. Geralmente com filtragem e refrigeração.', indicado: 'Pequenos escritórios, consultórios, recepções', href: null },
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

      <PilarLayout
        badge="Comparativo"
        title="Tipos de Bebedouro"
        excerpt="Bebedouro industrial, de pressão, purificador, garrafão ou escolar — cada modelo tem características, capacidades e custos distintos. Encontre o ideal para você."
        breadcrumbLabel="Tipos de Bebedouro"
        breadcrumbSlug="tipos-de-bebedouro"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=tipos-de-bebedouro"
        ctaLabel="Ver catálogo completo"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=tipos-de-bebedouro"
        finalCtaTitle="Encontre o bebedouro certo"
        finalCtaDesc="Todos os tipos disponíveis para venda, com suporte técnico especializado."
        finalCtaLabel="Ver catálogo completo"
        tocItems={[
          { href: '#tipos', label: 'Todos os tipos' },
          { href: '#comparativo', label: 'Tabela comparativa' },
          { href: '#faq', label: 'Dúvidas frequentes' },
        ]}
        stats={[
          { valor: '6', label: 'tipos principais de bebedouro' },
          { valor: '20–200', label: 'litros/hora (industriais)' },
          { valor: '60–400 W', label: 'consumo energético médio' },
          { valor: 'NR-24', label: 'norma que obriga fornecimento' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'Guia completo: bebedouro industrial' },
          { href: '/bebedouro-para-empresa', label: 'Como escolher bebedouro para empresa' },
          { href: '/artigo/como-escolher-bebedouro-corporativo', label: 'Critérios para escolha de bebedouro corporativo' },
        ]}
      >
        <section id="tipos" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-6 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Todos os tipos de bebedouro
          </h2>
          <div className="space-y-4">
            {tipos.map(({ nome, icon, descricao, indicado, href }) => (
              <div key={nome} className="border border-borda rounded-lg p-5 hover:border-az transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[20px]">{icon}</span>
                      <h3
                        className="text-[20px] font-black text-txt"
                        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                      >
                        {href ? <a href={href} className="hover:text-az transition-colors">{nome}</a> : nome}
                      </h3>
                    </div>
                    <p className="text-[15px] text-txt2 leading-relaxed mb-2">{descricao}</p>
                    <p className="text-[13px] text-txt3">
                      <span className="font-semibold">Indicado para:</span> {indicado}
                    </p>
                  </div>
                  {href && (
                    <a
                      href={href}
                      className="shrink-0 text-[13px] font-black text-az border border-az rounded-lg px-3 py-1.5 hover:bg-az hover:text-white transition-colors"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      Ver guia →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="comparativo" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Comparativo rápido
          </h2>
          <div className="overflow-x-auto rounded-lg border border-borda">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-az text-white">
                  {['Tipo', 'Capacidade', 'Filtra?', 'Custo médio'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-black" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Industrial', 'Alta (20–200 L/h)', 'Opcional', 'R$ 1.500–8.000'],
                  ['De pressão', 'Média (5–20 L/h)', 'Opcional', 'R$ 300–1.200'],
                  ['Purificador', 'Baixa-média (1–5 L/h)', 'Sim', 'R$ 400–2.000'],
                  ['Garrafão', 'Baixa (galão 20 L)', 'Não', 'R$ 150–600'],
                  ['Escolar', 'Média (5–15 L/h)', 'Opcional', 'R$ 350–900'],
                  ['Bancada', 'Baixa (1–3 L/h)', 'Sim', 'R$ 250–800'],
                ].map(([tipo, cap, filtra, custo], i) => (
                  <tr key={tipo} className={i % 2 === 1 ? 'bg-bg' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-txt">{tipo}</td>
                    <td className="px-4 py-3 text-txt2">{cap}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[12px] font-black ${filtra === 'Sim' ? 'bg-vd/10 text-vd' : filtra === 'Não' ? 'bg-bg text-txt3' : 'bg-az/10 text-az'}`}
                        style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                        {filtra}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-az font-bold">{custo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </PilarLayout>

      <Footer />
    </>
  )
}
