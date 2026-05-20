import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Tipos de Bebedouro: Qual Ã© o Ideal para VocÃª? Guia Completo 2025',
  description:
    'ConheÃ§a todos os tipos de bebedouro: industrial, de pressÃ£o, purificador, garrafÃ£o, escolar e corporativo. Saiba qual modelo se adapta melhor Ã  sua necessidade.',
  slug: 'tipos-de-bebedouro',
})

const tipos = [
  { nome: 'Bebedouro industrial', icon: 'ðŸ­', descricao: 'Projetado para ambientes de alta demanda como fÃ¡bricas, galpÃµes e obras. Alta capacidade de produÃ§Ã£o de Ã¡gua gelada (20 a 200 L/h). Corpo geralmente em aÃ§o inox ou polietileno.', indicado: 'IndÃºstrias, galpÃµes logÃ­sticos, canteiros de obra', href: '/bebedouro-industrial' },
  { nome: 'Bebedouro de pressÃ£o', icon: 'ðŸ’¦', descricao: 'Dispensa Ã¡gua por jato sem uso de copo. Muito comum em escolas e espaÃ§os pÃºblicos. Baixo custo de manutenÃ§Ã£o e alta higiene por eliminar contato com copos descartÃ¡veis.', indicado: 'Escolas, academias, parques, espaÃ§os pÃºblicos', href: null },
  { nome: 'Purificador de Ã¡gua', icon: 'ðŸ”¬', descricao: 'Combina filtragem (carvÃ£o ativado, UV ou osmose reversa) com refrigeraÃ§Ã£o. Indicado quando a qualidade da Ã¡gua da rede Ã© duvidosa. Dispensa garrafÃ£o.', indicado: 'EscritÃ³rios, clÃ­nicas, residÃªncias, empresas', href: null },
  { nome: 'Bebedouro de garrafÃ£o', icon: 'ðŸ«™', descricao: 'Utiliza galÃ£o de 20 litros. SoluÃ§Ã£o popular para ambientes sem ligaÃ§Ã£o direta Ã  rede. Custo fixo de recarga do galÃ£o. Modelos com e sem refrigeraÃ§Ã£o.', indicado: 'EscritÃ³rios pequenos, home office, locais sem rede', href: null },
  { nome: 'Bebedouro escolar', icon: 'ðŸ«', descricao: 'Projetado para o pÃºblico infantil com alturas de torneira adaptadas e proteÃ§Ãµes de seguranÃ§a. Modelos com jato de pressÃ£o e bica de inox.', indicado: 'Escolas de educaÃ§Ã£o infantil e fundamental', href: null },
  { nome: 'Bebedouro de bancada', icon: 'ðŸ–¥ï¸', descricao: 'Compacto, instalado sobre balcÃµes ou mesas. Ideal para pequenos escritÃ³rios onde o espaÃ§o Ã© limitado. Geralmente com filtragem e refrigeraÃ§Ã£o.', indicado: 'Pequenos escritÃ³rios, consultÃ³rios, recepÃ§Ãµes', href: null },
]

const faqs = [
  {
    question: 'Qual a diferenÃ§a entre bebedouro e purificador de Ã¡gua?',
    answer:
      'O bebedouro resfria e dispensa Ã¡gua sem necessariamente filtrÃ¡-la. O purificador inclui um ou mais estÃ¡gios de filtragem (carvÃ£o ativado, UV, osmose reversa), melhorando o sabor e eliminando contaminantes. Muitos equipamentos modernos combinam as duas funÃ§Ãµes.',
  },
  {
    question: 'Bebedouro de pressÃ£o filtra a Ã¡gua?',
    answer:
      'Os modelos bÃ¡sicos de bebedouro de pressÃ£o nÃ£o possuem sistema de filtragem â€” apenas refrigeram a Ã¡gua da rede. Existem versÃµes com filtro de carvÃ£o ativado embutido para melhorar o sabor e remover cloro.',
  },
  {
    question: 'Qual tipo de bebedouro consome menos energia?',
    answer:
      'Bebedouros de garrafÃ£o sem compressor consomem praticamente zero energia. Entre os modelos refrigerados, os de menor consumo sÃ£o os purificadores de bancada (em torno de 60â€“100 W). Os industriais de grande porte podem consumir 400 W ou mais.',
  },
  {
    question: 'Posso instalar qualquer tipo de bebedouro na minha empresa?',
    answer:
      'A NR-24 do MinistÃ©rio do Trabalho exige que empresas forneÃ§am Ã¡gua potÃ¡vel a todos os colaboradores. A escolha do tipo depende do espaÃ§o disponÃ­vel, do nÃºmero de usuÃ¡rios e da qualidade da rede local. Para mais de 50 pessoas, recomenda-se o modelo industrial.',
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
        excerpt="Bebedouro industrial, de pressÃ£o, purificador, garrafÃ£o ou escolar â€” cada modelo tem caracterÃ­sticas, capacidades e custos distintos. Encontre o ideal para vocÃª."
        breadcrumbLabel="Tipos de Bebedouro"
        breadcrumbSlug="tipos-de-bebedouro"
        ctaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=pilar&utm_campaign=tipos-de-bebedouro"
        ctaLabel="Ver catÃ¡logo completo"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portaldobebedouro&utm_medium=sidebar&utm_campaign=tipos-de-bebedouro"
        finalCtaTitle="Encontre o bebedouro certo"
        finalCtaDesc="Todos os tipos disponÃ­veis para venda, com suporte tÃ©cnico especializado."
        finalCtaLabel="Ver catÃ¡logo completo"
        tocItems={[
          { href: '#tipos', label: 'Todos os tipos' },
          { href: '#comparativo', label: 'Tabela comparativa' },
          { href: '#faq', label: 'DÃºvidas frequentes' },
        ]}
        stats={[
          { valor: '6', label: 'tipos principais de bebedouro' },
          { valor: '20â€“200', label: 'litros/hora (industriais)' },
          { valor: '60â€“400 W', label: 'consumo energÃ©tico mÃ©dio' },
          { valor: 'NR-24', label: 'norma que obriga fornecimento' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'Guia completo: bebedouro industrial' },
          { href: '/bebedouro-para-empresa', label: 'Como escolher bebedouro para empresa' },
          { href: '/artigo/como-escolher-bebedouro-corporativo', label: 'CritÃ©rios para escolha de bebedouro corporativo' },
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
                      Ver guia â†’
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
            Comparativo rÃ¡pido
          </h2>
          <div className="overflow-x-auto rounded-lg border border-borda">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-az text-white">
                  {['Tipo', 'Capacidade', 'Filtra?', 'Custo mÃ©dio'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-black" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Industrial', 'Alta (20â€“200 L/h)', 'Opcional', 'R$ 1.500â€“8.000'],
                  ['De pressÃ£o', 'MÃ©dia (5â€“20 L/h)', 'Opcional', 'R$ 300â€“1.200'],
                  ['Purificador', 'Baixa-mÃ©dia (1â€“5 L/h)', 'Sim', 'R$ 400â€“2.000'],
                  ['GarrafÃ£o', 'Baixa (galÃ£o 20 L)', 'NÃ£o', 'R$ 150â€“600'],
                  ['Escolar', 'MÃ©dia (5â€“15 L/h)', 'Opcional', 'R$ 350â€“900'],
                  ['Bancada', 'Baixa (1â€“3 L/h)', 'Sim', 'R$ 250â€“800'],
                ].map(([tipo, cap, filtra, custo], i) => (
                  <tr key={tipo} className={i % 2 === 1 ? 'bg-bg' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-txt">{tipo}</td>
                    <td className="px-4 py-3 text-txt2">{cap}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[12px] font-black ${filtra === 'Sim' ? 'bg-vd/10 text-vd' : filtra === 'NÃ£o' ? 'bg-bg text-txt3' : 'bg-az/10 text-az'}`}
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
