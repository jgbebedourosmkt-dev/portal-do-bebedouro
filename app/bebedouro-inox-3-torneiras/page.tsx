import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro Inox 3 Torneiras: Modelos e Especificações',
  description: 'Bebedouro Inox 3 Torneiras: ideal para ambientes com fluxo alto de usuários. Veja capacidades e dimensões.',
  slug: 'bebedouro-inox-3-torneiras',
})

const faqs = [
  {
    question: 'Qual é a capacidade de atendimento do bebedouro inox 3 torneiras?',
    answer: 'Um bebedouro inox com 3 torneiras possui reservatório de até 100 litros e permite que três usuários se sirvam simultaneamente. Em fluxo contínuo, o equipamento supre até 300 ou mais pessoas por hora, sendo indicado para fábricas, escolas e ambientes corporativos com grande circulação diária.',
  },
  {
    question: 'O bebedouro inox 3 torneiras precisa de filtro?',
    answer: 'A maioria dos modelos de bebedouro inox 3 torneiras conta com filtro interno ou externo incluso. O filtro remove impurezas, cloro e sedimentos, garantindo qualidade e sabor adequados à água. A troca do elemento filtrante deve ser feita a cada 6 meses ou conforme orientação do fabricante.',
  },
  {
    question: 'O bebedouro inox 3 torneiras atende à norma NR-24?',
    answer: 'Sim. A NR-24 exige que empresas com mais de 30 empregados disponibilizem bebedouros de pressão em boas condições de higiene. Modelos com corpo em aço inox, torneiras antivandálicas e sistema de filtragem atendem plenamente a essa exigência, além de estar em conformidade com o INMETRO e a NBR 13713.',
  },
  {
    question: 'Qual é a diferença entre bebedouro inox 2 torneiras e 3 torneiras?',
    answer: 'A principal diferença está na capacidade de atendimento simultâneo. O modelo com 3 torneiras permite que três pessoas se sirvam ao mesmo tempo, reduzindo filas em ambientes de alto fluxo. Para locais com menos de 50 pessoas, o modelo de 2 torneiras pode ser suficiente; acima disso, 3 torneiras é a recomendação técnica.',
  },
  {
    question: 'Como é feita a instalação do bebedouro inox 3 torneiras?',
    answer: 'A instalação deve ser realizada por encanador habilitado e leva em média 30 a 60 minutos. O equipamento se conecta à rede hidráulica por mangueira flexível com adaptador de ½ polegada e registro de fechamento, além de tomada elétrica de 10 A ou 20 A conforme o modelo. Antes do primeiro uso, é obrigatória a higienização interna do reservatório.',
  },
]

export default function BebedouroInox3TorneirasPage() {
  return (
    <>
      <Topbar /><Header /><Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', slug: '' },
              { name: 'Bebedouro Inox 3 Torneiras: Modelos e Especificações' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <PilarLayout
        badge="Guia Completo"
        title="Bebedouro Inox 3 Torneiras: Modelos e Especificações"
        excerpt="O bebedouro inox 3 torneiras é a solução industrial ideal para locais com grande circulação de pessoas, com três saídas simultâneas e reservatório de até 100 litros."
        breadcrumbLabel="Bebedouro Inox 3 Torneiras: Modelos e Especificações"
        breadcrumbSlug="bebedouro-inox-3-torneiras"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-inox-3-torneiras"
        ctaLabel="Solicitar orçamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=bebedouro-inox-3-torneiras"
        finalCtaTitle="Precisa de bebedouro inox 3 torneiras?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutenção em todo o Brasil."
        tocItems={[
          { href: '#o-que-e', label: 'O que é um Bebedouro Inox 3 Torneiras' },
          { href: '#especificacoes-tecnicas', label: 'Especificações Técnicas e Capacidade' },
          { href: '#modelos-populares', label: 'Modelos Populares' },
          { href: '#ambientes-ideais', label: 'Ambientes Ideais para Uso' },
          { href: '#instalacao-e-manutencao', label: 'Instalação e Manutenção' },
          { href: '#normas-e-certificacoes', label: 'Normas e Certificações' },
          { href: '#modelos-relacionados', label: 'Modelos Relacionados' },
          { href: '#como-obter-orcamento', label: 'Como Obter Orçamento' },
        ]}
        stats={[
          { valor: '100 L', label: 'Capacidade do reservatório' },
          { valor: '3', label: 'Torneiras simultâneas' },
          { valor: '300+', label: 'Usuários atendidos por hora' },
          { valor: 'INMETRO', label: 'Certificação obrigatória' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-inox', label: 'bebedouro inox' },
          { href: '/bebedouro-inox-2-torneiras', label: 'bebedouro inox 2 torneiras' },
          { href: '/bebedouro-inox-4-torneiras', label: 'bebedouro inox 4 torneiras' },
          { href: '/bebedouro-inox-25-litros', label: 'bebedouro inox 25 litros' },
          { href: '/bebedouro-para-empresa', label: 'bebedouro para empresa' },
          { href: '/blog/bebedouro-industrial-preco-2025', label: 'veja a faixa de preço' },
          { href: '/local/bebedouro-industrial-sao-paulo', label: 'em São Paulo' },
        ]}
      >

        <section id="o-que-e" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>O que é um Bebedouro Inox 3 Torneiras</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O bebedouro inox 3 torneiras é um equipamento industrial com três saídas de água simultâneas, projetado para ambientes com alto fluxo de usuários. Disponível como <a href="/bebedouro-inox" className="text-az hover:underline">bebedouro inox</a> de piso com reservatório de até 100 litros, atende fábricas, escolas, academias e empresas com segurança, higiene e durabilidade certificadas pelo INMETRO.
          </p>
        </section>

        <section id="especificacoes-tecnicas" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Especificações Técnicas e Capacidade</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O bebedouro inox 3 torneiras possui reservatório com capacidade de 100 litros, suficiente para manter o abastecimento contínuo em turnos longos. A potência do compressor hermético varia entre 350 W e 550 W dependendo do modelo, garantindo resfriamento eficiente da água até aproximadamente 5°C mesmo em ambientes com temperatura elevada.
          </p>
          <img
            src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20industrial%20inox%203%20torneiras%20robust%20100%20litros.png"
            alt="bebedouro industrial inox 3 torneiras robust 100 litros"
            className="rounded-lg object-cover w-2/5"
            style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
            loading="lazy"
          />
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            As dimensões padrão situam-se em torno de 57 cm de largura, 35 cm de profundidade e 121 cm de altura. O peso médio do equipamento é de 35 kg. Todos os componentes em contato direto com a água — cuba, dreno e torneiras — são fabricados em polipropileno de alto impacto ou aço inoxidável AISI 304, conforme exigido pela NBR 13713.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A tensão elétrica disponível é de 110 V ou 220 V, com consumo médio de 3,5 kWh por dia em uso contínuo. A maioria dos modelos inclui sistema de filtragem com elemento de carvão ativado que remove cloro, odores e sedimentos sem necessidade de ferramentas para substituição, simplificando a manutenção periódica.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O aparador de água frontal é fabricado em chapa de aço inox com dreno integrado, evitando acúmulo de umidade no piso ao redor do equipamento. A cobertura superior também é em inox, proporcionando um acabamento uniforme e resistente ao impacto físico e a produtos de limpeza de uso geral.
          </p>
          <div style={{ clear: 'both' }} />
        </section>

        <section id="modelos-populares" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Modelos Populares de Bebedouro Inox 3 Torneiras</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Entre os modelos mais comercializados no Brasil destacam-se o Robust 100L 3 Torneiras, o Acqua Gelata Inox 100L e o Lider LE 100L Inox Escovado. Cada linha tem características distintas de torneiras, filtro e acabamento, mas todas compartilham a mesma capacidade de reservatório de 100 litros e conformidade com o INMETRO.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O modelo Robust 100L é reconhecido pelo sistema de torneiras em polipropileno de alto impacto e cuba injetada resistente ao impacto físico. Esse conjunto reduz o risco de vazamentos e facilita a substituição de peças por técnicos de manutenção, mesmo em locais de difícil acesso como galpões industriais e áreas de produção.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O Acqua Gelata Inox 3 Torneiras é frequentemente escolhido por gestores de facilities para ambientes corporativos graças ao seu design slim e compatibilidade com tomadas 110 V e 220 V. O filtro externo de fácil instalação dispensa a abertura do gabinete para trocas periódicas, reduzindo o tempo de parada do equipamento.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O Lider LE Inox Escovado destaca-se pelo acabamento diferenciado em inox escovado, ideal para ambientes que exigem visual alinhado à arquitetura corporativa, como lobbies de escritórios, academias premium e espaços de saúde. Suas torneiras também em inox acompanham o mesmo padrão estético do gabinete, conferindo uniformidade ao conjunto.
          </p>
        </section>

        <section id="ambientes-ideais" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Ambientes Ideais para Uso</h2>
          <img
            src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20100%20litros%20inox%203%20torneiras%20robust%20angulo%20fontal.png"
            alt="bebedouro 100 litros inox 3 torneiras robust angulo fontal"
            className="rounded-lg object-cover w-2/5"
            style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
            loading="lazy"
          />
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O <a href="/bebedouro-para-empresa" className="text-az hover:underline">bebedouro para empresa</a> com 3 torneiras é obrigatório em indústrias e fábricas com mais de 30 colaboradores, conforme previsto pela NR-24. Nesses ambientes, o alto fluxo de pessoas exige equipamentos com capacidade de atendimento simultâneo sem interrupção da produção nos horários de pausa.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Em academias, centros esportivos e escolas, o modelo de 3 torneiras reduz filas nos horários de pico, como intervalos e trocas de turno. A facilidade de limpeza do aço inoxidável é um diferencial importante nesses locais, onde a higiene é monitorada com frequência por vigilância sanitária e gestores de facilities.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Hospitais, clínicas e unidades de saúde adotam amplamente o bebedouro inox 3 torneiras por atender à RDC 275, que exige superfícies lisas, não porosas e de fácil higienização em áreas com circulação de pacientes e visitantes. O inox AISI 304 cumpre todos esses requisitos sem necessidade de tratamentos adicionais.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Restaurantes, padarias, supermercados, igrejas e postos de combustível completam a lista dos ambientes mais indicados para esse equipamento. O modelo é encontrado facilmente para entrega <a href="/local/bebedouro-industrial-sao-paulo" className="text-az hover:underline">em São Paulo</a> e nas principais capitais do Brasil, com instalação disponível no mesmo dia em muitas regiões.
          </p>
          <div style={{ clear: 'both' }} />
        </section>

        <section id="instalacao-e-manutencao" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Instalação e Manutenção</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A instalação do bebedouro inox 3 torneiras é realizada por encanador habilitado e leva em média 30 a 60 minutos. O equipamento se conecta à rede hidráulica por mangueira flexível com adaptador de ½ polegada e registro de fechamento independente. A ligação elétrica utiliza tomada padrão ABNT NBR de 10 A ou 20 A conforme o modelo.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A manutenção preventiva recomendada inclui higienização interna do reservatório a cada 6 meses, limpeza semanal das torneiras e do aparador de água, e substituição do elemento filtrante conforme a vazão consumida. Em regiões com água de qualidade reduzida, a troca do filtro pode ser necessária a cada 4 meses para garantir eficiência adequada.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Sinais que indicam necessidade de manutenção corretiva incluem gotejamento constante das torneiras, redução perceptível na temperatura da água e ruído incomum no compressor. Nesses casos, recomenda-se acionar um técnico autorizado imediatamente para diagnóstico e evitar o agravamento do problema com possível perda total do compressor.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Peças de reposição como torneiras, juntas, filtros e componentes elétricos estão amplamente disponíveis no mercado nacional. A maioria dos fabricantes garante suporte técnico e estoque de peças por pelo menos 5 anos após o lançamento do modelo, reduzindo o risco de obsolescência precoce e garantindo continuidade operacional ao equipamento.
          </p>
        </section>

        <section id="normas-e-certificacoes" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Normas e Certificações</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Todo bebedouro inox 3 torneiras comercializado no Brasil deve ser certificado pelo INMETRO, conforme portaria específica para bebedouros de pressão. A certificação garante que o produto atende a requisitos mínimos de segurança elétrica, eficiência de resfriamento e ausência de contaminação química na água distribuída ao consumidor final.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NBR 13713 define os requisitos técnicos para bebedouros de pressão, incluindo dimensões mínimas do jato de água, temperatura máxima de saída e materiais permitidos em contato com água potável. Modelos fora dessa norma não podem ser registrados no INMETRO e não devem ser adquiridos por gestores preocupados com conformidade regulatória.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NR-24, do Ministério do Trabalho e Emprego, exige bebedouros de pressão em boas condições higiênicas para empresas com 30 ou mais empregados. Modelos em aço inox com superfície lisa e de fácil higienização são a escolha padrão para atender a auditorias trabalhistas sem necessidade de adequações adicionais no equipamento.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A RDC 275 da ANVISA estabelece padrões para superfícies em contato com alimentos e água para consumo humano. O aço inoxidável AISI 304 atende a essa resolução por ser não poroso, resistente à corrosão e compatível com produtos saneantes de uso alimentício, permitindo higienizações completas sem degradação do material ao longo do tempo.
          </p>
        </section>

        <section id="modelos-relacionados" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Modelos Relacionados</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Se o ambiente tiver fluxo de usuários menor, o <a href="/bebedouro-inox-2-torneiras" className="text-az hover:underline">bebedouro inox 2 torneiras</a> pode ser suficiente com custo de aquisição mais acessível. Para locais com fluxo muito intenso, como grandes indústrias ou centros comerciais, o <a href="/bebedouro-inox-4-torneiras" className="text-az hover:underline">bebedouro inox 4 torneiras</a> oferece ainda mais saídas simultâneas sem comprometer a vazão.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para ambientes que priorizam compacidade, o <a href="/bebedouro-inox-25-litros" className="text-az hover:underline">bebedouro inox 25 litros</a> é uma alternativa indicada para escritórios de pequeno e médio porte onde o espaço disponível é reduzido. Para uma visão completa dos modelos, capacidades e comparativos técnicos, acesse nossa página principal de <a href="/bebedouro-inox" className="text-az hover:underline">bebedouro inox</a>.
          </p>
        </section>

        <section id="como-obter-orcamento" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Como Obter Orçamento</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O preço do bebedouro inox 3 torneiras varia conforme marca, tensão elétrica, inclusão de filtro e acabamento das torneiras. Para comparar os valores praticados no mercado e escolher o modelo com melhor custo-benefício, <a href="/blog/bebedouro-industrial-preco-2025" className="text-az hover:underline">veja a faixa de preço</a> atualizada para 2025, com análise detalhada por categoria e capacidade de reservatório.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A JG Bebedouros realiza visitas técnicas para dimensionamento correto do equipamento, garantindo que o modelo escolhido atenda à demanda real do local sem superdimensionamento ou subdimensionamento de capacidade. O orçamento inclui o equipamento, instalação completa e contrato de manutenção preventiva anual com troca de filtros.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Empresas que preferem locação em vez de compra encontram opções com contrato de manutenção incluso, filtros trocados periodicamente e cobertura total para peças e mão de obra. Essa modalidade é especialmente vantajosa para negócios em crescimento que desejam evitar investimento em ativo fixo e manter o capital de giro disponível para a operação.
          </p>
        </section>

      </PilarLayout>
      <Footer />
    </>
  )
}
