import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro Inox 2 Torneiras: Modelos e Especificações',
  description: 'Bebedouro Inox 2 Torneiras: ideal para ambientes com fluxo moderado de usuários. Veja capacidades e dimensões.',
  slug: 'bebedouro-inox-2-torneiras',
})

const faqs = [
  {
    question: 'Qual a diferença entre o bebedouro inox 2 torneiras e o modelo de 3 torneiras?',
    answer: 'O modelo de 2 torneiras atende dois usuários ao mesmo tempo, sendo adequado para ambientes com fluxo moderado a médio de pessoas. O modelo de 3 torneiras oferece uma saída extra, recomendado para locais com mais de 100 funcionários por turno ou onde o tempo de espera precisa ser reduzido ao máximo.',
  },
  {
    question: 'O bebedouro inox 2 torneiras precisa de instalação elétrica específica?',
    answer: 'Sim. O equipamento deve ser conectado a uma tomada com aterramento (SPDA), conforme recomendação dos fabricantes e exigência da NBR 13713. A tensão mais comum é 110V ou 220V bivolt. Recomenda-se o uso de estabilizador de tensão para proteger o compressor de oscilações na rede elétrica.',
  },
  {
    question: 'Com que frequência deve ser feita a limpeza do bebedouro inox 2 torneiras?',
    answer: 'A higienização completa, incluindo lavagem interna do reservatório e troca do filtro, deve ocorrer a cada 6 meses conforme a RDC 275 da ANVISA. Em ambientes com alta utilização — como fábricas ou academias —, reduzir esse intervalo para 3 meses é uma prática recomendada para garantir a qualidade da água.',
  },
  {
    question: 'O bebedouro inox 2 torneiras tem certificação INMETRO?',
    answer: 'Bebedouros destinados ao uso coletivo estão sujeitos à certificação compulsória do INMETRO, conforme portaria vigente. Ao adquirir o equipamento, verifique se o modelo possui o selo de certificação e a etiqueta de eficiência energética. Isso garante que o aparelho atende aos requisitos de segurança e higiene exigidos pela legislação brasileira.',
  },
  {
    question: 'Qual a capacidade recomendada de bebedouro inox 2 torneiras para 50 funcionários?',
    answer: 'Para 50 funcionários, um modelo de 30 a 50 litros com 2 torneiras é suficiente para atender à demanda nos horários de pico. A NR-24 do Ministério do Trabalho determina o fornecimento de água potável fresca para todos os trabalhadores, e o modelo de 2 torneiras já supera o requisito mínimo de 1 torneira por 50 pessoas.',
  },
]

export default function BebedouroInox2TorneirasPage() {
  return (
    <>
      <Topbar /><Header /><Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', slug: '' },
              { name: 'Bebedouro Inox 2 Torneiras: Modelos e Especificações' },
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
        title="Bebedouro Inox 2 Torneiras: Modelos e Especificações"
        excerpt="bebedouro inox 2 torneiras para atendimento simultâneo em ambientes corporativos e industriais. Guia completo de modelos, capacidades e normas técnicas."
        breadcrumbLabel="Bebedouro Inox 2 Torneiras: Modelos e Especificações"
        breadcrumbSlug="bebedouro-inox-2-torneiras"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-inox-2-torneiras"
        ctaLabel="Solicitar orcamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=bebedouro-inox-2-torneiras"
        finalCtaTitle="Precisa de bebedouro inox 2 torneiras?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutencao em todo o Brasil."
        tocItems={[
          { href: '#o-que-e', label: 'O Que É o Bebedouro Inox com 2 Torneiras' },
          { href: '#vantagens-do-inox', label: 'Vantagens do Aço Inox' },
          { href: '#capacidades-e-modelos', label: 'Capacidades e Modelos Disponíveis' },
          { href: '#especificacoes-tecnicas', label: 'Especificações Técnicas e Normas' },
          { href: '#como-funciona', label: 'Como Funciona o Sistema de Duas Torneiras' },
          { href: '#ambientes-e-aplicacoes', label: 'Onde Instalar: Ambientes e Aplicações' },
          { href: '#modelos-relacionados', label: 'Modelos Relacionados' },
          { href: '#preco-e-orcamento', label: 'Preço e Orçamento' },
        ]}
        stats={[
          { valor: '50L', label: 'Capacidade mais popular no segmento' },
          { valor: '2', label: 'Usuários atendidos simultaneamente' },
          { valor: 'NBR 13713', label: 'Norma técnica de referência' },
          { valor: 'NR-24', label: 'Norma de higiene no trabalho' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-inox', label: 'bebedouro inox' },
          { href: '/bebedouro-inox-3-torneiras', label: 'bebedouro inox 3 torneiras' },
          { href: '/bebedouro-inox-4-torneiras', label: 'bebedouro inox 4 torneiras' },
          { href: '/bebedouro-inox-25-litros', label: 'bebedouro inox 25 litros' },
          { href: '/bebedouro-para-empresa', label: 'bebedouro para empresa' },
          { href: '/blog/bebedouro-industrial-preco-2025', label: 'veja a faixa de preço' },
          { href: '/local/bebedouro-industrial-sao-paulo', label: 'em São Paulo' },
        ]}
      >

        <section id="o-que-e" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>O Que É o Bebedouro Inox com 2 Torneiras</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O bebedouro inox 2 torneiras é um equipamento de médio porte fabricado em aço inoxidável que permite o atendimento simultâneo de dois usuários. Disponível em capacidades de 25 a 100 litros, é amplamente utilizado em escritórios, escolas e indústrias. Saiba mais sobre o <a href="/bebedouro-inox" className="text-az hover:underline">bebedouro inox</a> e suas variações de torneiras.
          </p>
        </section>

        <section id="vantagens-do-inox" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Vantagens do Aço Inox</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O aço inoxidável — geralmente AISI 304 ou AISI 430 — é o material preferido para bebedouros industriais por sua alta resistência à corrosão e facilidade de higienização. Diferente do plástico comum, o inox não absorve odores nem facilita a proliferação de bactérias, garantindo padrão superior de qualidade na água dispensada.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A durabilidade é outro fator determinante. Bebedouros fabricados em inox suportam ambientes úmidos, variações de temperatura e uso intenso diário sem perda de desempenho estrutural. Isso reduz consideravelmente os custos de manutenção corretiva ao longo dos anos e prolonga a vida útil do equipamento.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Do ponto de vista estético, o acabamento escovado ou polido do inox confere aspecto profissional ao ambiente, o que é valorizado em recepções de empresas, clínicas e escritórios corporativos. O material também é mais resistente a arranhões superficiais do que plástico ABS, mantendo a aparência ao longo do tempo.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Do ponto de vista regulatório, o uso do aço inoxidável está alinhado com as exigências da RDC 275 da ANVISA, que regula boas práticas de manipulação de alimentos e água. Equipamentos certificados pelo INMETRO garantem que todos os materiais em contato com a água são seguros e atendem às normas sanitárias brasileiras.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Por fim, o inox é um material 100% reciclável, o que torna os bebedouros fabricados com ele uma escolha ambientalmente responsável. Para empresas com políticas de sustentabilidade, essa característica agrega valor à aquisição e facilita a conformidade com certificações ambientais corporativas.
          </p>
        </section>

        <section id="capacidades-e-modelos" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Capacidades e Modelos Disponíveis</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20100%20e%2050%20litros%20inox%203%20e%202%20torneiras%20lado%20a%20lado.png"
              alt="bebedouro 100 e 50 litros inox 3 e 2 torneiras lado a lado"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            O bebedouro inox 2 torneiras é fabricado em diferentes capacidades para atender ambientes de variados portes. Os modelos de 25 e 30 litros são indicados para pequenos escritórios e salas de reunião, enquanto as versões de 50 litros representam a escolha mais popular para empresas de médio porte com fluxo constante de funcionários.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para ambientes com alto fluxo de pessoas — como fábricas, galpões logísticos e refeitórios industriais — os modelos de 100 litros oferecem maior reservatório e menor necessidade de recarga hídrica. Nesses casos, a combinação de grande reservatório com 2 torneiras garante atendimento ágil sem filas durante os intervalos.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Conheça também o <a href="/bebedouro-inox-25-litros" className="text-az hover:underline">bebedouro inox 25 litros</a> se o espaço físico disponível for reduzido ou se a demanda for menor. Esse modelo compacto mantém a qualidade do inox em um formato mais enxuto, ideal para salas menores ou pontos de hidratação secundários dentro de uma mesma instalação.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A escolha da capacidade ideal depende diretamente do número de usuários diários e dos horários de pico. Uma referência prática é calcular entre 1,5L e 2L por pessoa por turno de trabalho; com esse dado em mãos, é possível dimensionar corretamente o reservatório e evitar tanto o desperdício quanto a falta de água.
          </p>
          <div style={{ clear: 'both' }} />
        </section>

        <section id="especificacoes-tecnicas" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Especificações Técnicas e Normas</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%2025%20e%2030%20litros%20inox%202%20torneiras%20industrial.png"
              alt="bebedouro 25 e 30 litros inox 2 torneiras industrial"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            As especificações técnicas do bebedouro inox 2 torneiras variam conforme o fabricante, mas seguem os padrões estabelecidos pela NBR 13713 da ABNT. Para o modelo de 50 litros, as dimensões mais comuns são aproximadamente 55 cm de largura, 42 cm de profundidade e 107 cm de altura, com peso em torno de 24 kg.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O consumo elétrico típico varia entre 150W e 250W, dependendo da potência do compressor e do isolamento térmico do reservatório. A tensão disponível é geralmente 110V ou 220V — muitos modelos são bivolt — e a temperatura de saída da água fria fica entre 4°C e 12°C, conforme regulagem do termostato interno.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NBR 13713 estabelece requisitos de desempenho, segurança elétrica e higiene para bebedouros. O INMETRO exige certificação compulsória para equipamentos destinados ao uso coletivo, avaliando eficiência energética, qualidade dos materiais em contato com água e ausência de substâncias tóxicas nos componentes internos.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NR-24 do Ministério do Trabalho e Emprego determina que locais de trabalho com mais de 30 funcionários devem fornecer bebedouros com água fresca e em número suficiente para o quadro de pessoal. O descumprimento dessa norma pode resultar em autuações durante fiscalizações da Vigilância Sanitária e do Ministério do Trabalho.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A RDC 275 da ANVISA complementa essas exigências ao regulamentar as boas práticas para serviços de alimentação e abastecimento de água. Ela determina que equipamentos utilizados na distribuição de água potável devem ser higienizados periodicamente com produtos aprovados e que o controle deve ser documentado em registros acessíveis à fiscalização.
          </p>
          <div style={{ clear: 'both' }} />
        </section>

        <section id="como-funciona" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Como Funciona o Sistema de Duas Torneiras</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O sistema de 2 torneiras permite que um usuário retire água gelada enquanto outro acessa água em temperatura natural, sem refrigeração. Esse arranjo é mais econômico do que modelos com duas saídas frias, pois o compressor trabalha apenas para refrigerar uma das linhas, reduzindo o consumo de energia elétrica.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Internamente, o bebedouro conta com um reservatório isolado termicamente, um compressor hermético e serpentinas de refrigeração que resfriam a água antes de chegar à torneira fria. A torneira de água natural conduz a água diretamente da entrada para a saída, sem passar pelo sistema de refrigeração, mantendo a temperatura ambiente.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O fluxo simultâneo nas duas torneiras é possível porque cada saída possui circuito hidráulico independente. Isso evita que a abertura de uma torneira reduza a pressão da outra, garantindo conforto e praticidade no uso coletivo, especialmente durante os horários de pico de consumo.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Alguns modelos mais avançados oferecem torneira com água gelada, torneira com água natural e até torneira com água quente ou morna, mas nesses casos a classificação passa a ser bebedouro e purificador combinado. O bebedouro inox 2 torneiras convencional foca em simplicidade, durabilidade e alto volume de distribuição diária.
          </p>
        </section>

        <section id="ambientes-e-aplicacoes" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Onde Instalar: Ambientes e Aplicações</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O bebedouro inox 2 torneiras é ideal para ambientes corporativos de médio porte, como escritórios com 50 a 150 funcionários, academias e centros de saúde. Para uma análise detalhada de equipamentos voltados ao uso empresarial, consulte nossa página sobre <a href="/bebedouro-para-empresa" className="text-az hover:underline">bebedouro para empresa</a>, com critérios de dimensionamento e comparativo de modelos.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Em ambientes industriais, o modelo é frequentemente instalado próximo a refeitórios e vestiários, respeitando as exigências da NR-24. Nesses locais, recomenda-se posicionar o equipamento em local ventilado, protegido de poeiras abrasivas e vapores químicos que possam comprometer a higiene das superfícies e dos componentes internos.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Escolas, creches e postos de saúde também são grandes usuários desse tipo de bebedouro. Nesses espaços, a RDC 275 da ANVISA e as normativas municipais de vigilância sanitária exigem higienização periódica documentada, com registros de data, responsável pela limpeza e troca regular do elemento filtrante.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Condomínios residenciais e áreas de lazer coletivo também utilizam bebedouros inox 2 torneiras em áreas comuns, como salões de festas, quadras esportivas e playgrounds cobertos. Nesses casos, o material inox é especialmente valorizado pela resistência ao vandalismo e pela facilidade de limpeza com produtos de uso comum.
          </p>
        </section>

        <section id="modelos-relacionados" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Modelos Relacionados</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Se o seu ambiente demanda maior capacidade de atendimento simultâneo, o <a href="/bebedouro-inox-3-torneiras" className="text-az hover:underline">bebedouro inox 3 torneiras</a> oferece uma saída adicional sem ocupar muito mais espaço físico. Já o <a href="/bebedouro-inox-4-torneiras" className="text-az hover:underline">bebedouro inox 4 torneiras</a> é a melhor escolha para fábricas, galpões e ambientes com grande fluxo simultâneo de trabalhadores.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para ambientes menores que precisam de um modelo mais compacto e econômico, o <a href="/bebedouro-inox-25-litros" className="text-az hover:underline">bebedouro inox 25 litros</a> atende pequenas equipes com eficiência e ocupa menos espaço no ponto de instalação. A escolha do número de torneiras deve sempre considerar o pico de uso diário, o número de usuários por turno e o espaço físico disponível.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Uma estratégia comum em grandes instalações é combinar modelos de diferentes capacidades em pontos estratégicos do ambiente: um bebedouro de maior porte próximo ao refeitório e unidades menores nos andares ou setores com menor concentração de pessoas. Essa abordagem otimiza o investimento e garante acesso à água em toda a planta.
          </p>
        </section>

        <section id="preco-e-orcamento" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Preço e Como Solicitar Orçamento</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O preço do bebedouro inox 2 torneiras varia conforme a capacidade, fabricante e tecnologia embarcada. Para entender os valores de mercado com mais detalhes, <a href="/blog/bebedouro-industrial-preco-2025" className="text-az hover:underline">veja a faixa de preço</a> atualizada para 2025, com comparativo entre os principais modelos e fabricantes disponíveis no Brasil.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para empresas localizadas no estado de São Paulo, a JG Bebedouros atende com agilidade e oferece serviços de instalação, manutenção preventiva e contratos de higienização periódica. Se você está buscando fornecedores <a href="/local/bebedouro-industrial-sao-paulo" className="text-az hover:underline">em São Paulo</a>, confira nosso guia regional de disponibilidade e assistência técnica autorizada.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Ao solicitar um orçamento, informe a capacidade desejada (em litros), a tensão elétrica disponível no local (110V ou 220V), o número médio de usuários por turno e se há necessidade de filtro embutido. Com esses dados, o fornecedor consegue indicar o modelo mais eficiente para a sua necessidade específica, evitando superdimensionamento ou subaproveitamento do equipamento.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Além do preço de aquisição, considere o custo total de propriedade: consumo de energia, peças de reposição (filtros, torneiras, termostatos) e frequência de manutenção. Bebedouros inox de qualidade têm vida útil superior a 10 anos quando bem mantidos, tornando o investimento inicial mais rentável a longo prazo do que modelos de plástico com menor durabilidade.
          </p>
        </section>

      </PilarLayout>
      <Footer />
    </>
  )
}
