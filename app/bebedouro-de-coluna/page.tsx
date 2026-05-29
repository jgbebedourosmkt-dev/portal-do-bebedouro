import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro de Coluna: Guia Completo 2025',
  description: 'Bebedouro de Coluna: tipos, características, normas e onde comprar. Guia completo para sua aplicação específica.',
  slug: 'bebedouro-de-coluna',
})

const faqs = [
  {
    question: 'Qual é a diferença entre bebedouro de coluna e bebedouro de bancada?',
    answer:
      'O bebedouro de coluna é autossustentado, fixado no piso sobre um pedestal, ideal para áreas abertas e ambientes sem balcão disponível. O bebedouro de bancada precisa de uma superfície de apoio, sendo mais indicado para escritórios e cozinhas com espaço limitado. Em volume de atendimento, os modelos de coluna costumam ter maior capacidade de refrigeração.',
  },
  {
    question: 'O bebedouro de coluna precisa de instalação hidráulica?',
    answer:
      'Depende do modelo. Bebedouros de coluna que operam com galão de 20 litros não exigem instalação hidráulica — basta posicionar o galão no suporte. Já os modelos conectados à rede de abastecimento precisam de encanamento e, em alguns casos, de filtro de entrada conforme a NBR 13713.',
  },
  {
    question: 'Qual bebedouro de coluna é certificado pelo INMETRO?',
    answer:
      'Modelos das marcas Esmaltec, Ibbl, Latina e Consul possuem certificação INMETRO para bebedouros de coluna. Para uso em ambientes corporativos e industriais, exija o selo INMETRO e verifique se o equipamento atende à NBR 13713, norma da ABNT que regula bebedouros de pressão no Brasil.',
  },
  {
    question: 'Quantos litros por hora um bebedouro de coluna industrial produz?',
    answer:
      'Bebedouros de coluna industriais de grande porte, como os modelos de 100 litros com 3 a 4 torneiras, produzem entre 60 e 100 litros de água gelada por hora. Para dimensionar a capacidade necessária, calcule entre 0,5 e 1 litro por colaborador por turno de trabalho, conforme a NR-24.',
  },
  {
    question: 'Bebedouro de coluna inox é obrigatório para empresas?',
    answer:
      'A NR-24 exige fornecimento de água potável aos trabalhadores, mas não especifica obrigatoriamente o material inox. Entretanto, a RDC 275 recomenda superfícies lisas e resistentes à corrosão em ambientes de alimentos e saúde, tornando o inox a escolha mais indicada para cozinhas industriais e hospitais.',
  },
]

export default function BebedouroDeColunaPage() {
  return (
    <>
      <Topbar />
      <Header />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', slug: '' },
              { name: 'Bebedouro de Coluna: Guia Completo 2025' },
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
        title="Bebedouro de Coluna: Guia Completo 2025"
        excerpt="Bebedouro de Coluna é o equipamento de hidratação coletiva instalado sobre pedestal fixo, ideal para fábricas, escolas e escritórios de alto fluxo."
        breadcrumbLabel="Bebedouro de Coluna: Guia Completo 2025"
        breadcrumbSlug="bebedouro-de-coluna"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-de-coluna"
        ctaLabel="Solicitar orçamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=bebedouro-de-coluna"
        finalCtaTitle="Precisa de Bebedouro de Coluna?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutenção em todo o Brasil."
        tocItems={[
          { href: '#o-que-e', label: 'O que é Bebedouro de Coluna' },
          { href: '#tipos', label: 'Tipos de Bebedouro de Coluna' },
          { href: '#bebedouro-de-coluna-inox', label: 'Bebedouro de Coluna Inox' },
          { href: '#bebedouro-de-coluna-industrial', label: 'Bebedouro de Coluna Industrial' },
          { href: '#normas-e-certificacoes', label: 'Normas e Certificações' },
          { href: '#como-escolher', label: 'Como Escolher o Modelo Ideal' },
          { href: '#modelos-relacionados', label: 'Modelos Relacionados' },
          { href: '#onde-comprar', label: 'Onde Comprar e Atendimento' },
        ]}
        stats={[
          { valor: '2.900', label: 'buscas mensais no Brasil' },
          { valor: '100L/h', label: 'vazão máxima industrial' },
          { valor: '2 a 4', label: 'torneiras por modelo' },
          { valor: 'NBR 13713', label: 'norma ABNT aplicável' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'bebedouro industrial' },
          { href: '/tipos-de-bebedouro', label: 'tipos de bebedouro' },
          { href: '/bebedouro-de-bancada', label: 'bebedouro de bancada' },
          { href: '/bebedouro-industrial-suspenso', label: 'bebedouro industrial suspenso' },
          { href: '/blog/bebedouro-coluna-ou-pressao', label: 'leia o guia completo' },
          { href: '/local/bebedouro-industrial-sao-paulo', label: 'atendimento em São Paulo' },
        ]}
      >

        {/* SEÇÃO 1 — O que é Bebedouro de Coluna */}
        <section id="o-que-e" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>O que é Bebedouro de Coluna</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O <strong>Bebedouro de Coluna</strong> é um equipamento de hidratação coletiva instalado sobre um pedestal fixo no piso, dispensando bancadas ou móveis de apoio. Equipado com torneira de pressão, boia ou sistema eletrônico, atende ambientes com alto fluxo de pessoas como fábricas, escolas, hospitais e condomínios. Disponível em aço inox e plástico, com capacidade de refrigeração entre 25 e 100 litros por hora.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A principal vantagem do bebedouro de coluna é a autonomia de instalação: o equipamento não depende de móveis ou balcões para funcionar, podendo ser posicionado em qualquer área com acesso à rede elétrica e hidráulica — ou simplesmente abastecido por um galão de 20 litros. Isso o torna a solução mais versátil para empresas que precisam distribuir pontos de hidratação por todo o espaço.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            No mercado brasileiro, os modelos variam de equipamentos domésticos compactos até sistemas industriais com múltiplas torneiras. A escolha correta depende do volume de usuários, do tipo de ambiente e das normas aplicáveis, como a NBR 13713 da ABNT e a NR-24 do Ministério do Trabalho. Conhecer as diferenças entre os modelos é o primeiro passo para uma compra assertiva.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Diferente dos purificadores de bancada, o bebedouro de coluna não exige superfície de apoio e suporta o uso contínuo de dezenas de pessoas por hora. Modelos industriais possuem estrutura reforçada, serpentina de maior capacidade e torneiras em número suficiente para evitar filas nos intervalos e trocas de turno.
          </p>
        </section>

        {/* SEÇÃO 2 — Tipos de Bebedouro de Coluna */}
        <section id="tipos" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Tipos de Bebedouro de Coluna</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O mercado oferece três categorias principais de bebedouro de coluna, cada uma projetada para um conjunto específico de requisitos de ambiente, volume de consumo e qualidade da água disponível. Entender as diferenças evita compras equivocadas e garante conformidade com as normas técnicas. Para uma comparação completa entre todos os formatos, consulte nosso guia sobre <a href="/tipos-de-bebedouro" className="text-az hover:underline">tipos de bebedouro</a>.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O <strong>bebedouro de coluna refrigerado por compressor</strong> utiliza um sistema de compressão semelhante ao de geladeiras domésticas para resfriar a água entre 4°C e 12°C. É o modelo mais comum em escritórios, academias e indústrias, pois garante água gelada mesmo em ambientes quentes. O consumo elétrico médio fica entre 100 e 180 W, dependendo da capacidade do reservatório.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O <strong>bebedouro de coluna de pressão</strong>, sem sistema de refrigeração, é indicado para ambientes com temperatura controlada ou onde não é necessária água gelada. Tem manutenção mais simples, menor custo de aquisição e menor consumo de energia elétrica. É muito utilizado em unidades de saúde e em locais onde a qualidade bacteriológica da água é rigorosamente monitorada e filtrada na entrada.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O <strong>bebedouro de coluna filtrante com purificação integrada</strong> combina as funções de filtro e bebedouro em um único equipamento. É indicado para locais com água de qualidade variável ou onde a RDC 275 exige controle microbiológico rigoroso, como cozinhas industriais e serviços de alimentação. Alguns modelos oferecem ainda função de refrigeração, unificando três funções em um só aparelho.
          </p>
        </section>

        {/* SEÇÃO 3 — Bebedouro de Coluna Inox */}
        <section id="bebedouro-de-coluna-inox" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro de Coluna Inox: Higiene e Durabilidade</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20100%20e%2050%20litros%20inox%203%20e%202%20torneiras%20lado%20a%20lado.png"
              alt="bebedouro 100 e 50 litros inox 3 e 2 torneiras lado a lado"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            O <strong>bebedouro de coluna inox</strong> é a escolha prioritária para ambientes industriais, hospitalares e de alimentação coletiva. O aço inox grau 304 não enferruja, não absorve odores e suporta a higienização com produtos químicos aprovados pela ANVISA, facilitando o cumprimento da RDC 275 em cozinhas industriais e unidades de saúde.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Modelos com corpo e reservatório em inox também apresentam vida útil significativamente superior aos de plástico: enquanto um bebedouro plástico pode exigir substituição em 5 a 8 anos, o equivalente em inox dura mais de 15 anos com manutenção preventiva regular. Isso torna o investimento inicial maior, mas o custo total de propriedade menor ao longo do tempo, especialmente em instalações de grande porte.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Na prática, o inox resiste melhor a impactos físicos, o que é determinante em ambientes de fábrica e armazéns onde equipamentos são movimentados com frequência. Fabricantes como Esmaltec, Ibbl e marcas nacionais especializadas oferecem modelos com certificação INMETRO, garantindo conformidade com a NBR 13713 e os requisitos de segurança elétrica vigentes no Brasil.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O bebedouro coluna inox com 2 torneiras atende ambientes de até 100 colaboradores por turno. Para volumes maiores, os modelos com 3 ou 4 torneiras reduzem filas nos horários de pico. A combinação de corpo em inox com isolamento térmico interno garante que a água permaneça gelada mesmo em ambientes com temperatura elevada, como galpões industriais no verão.
          </p>
          <div style={{ clear: 'both' }} />
        </section>

        {/* SEÇÃO 4 — Bebedouro de Coluna Industrial */}
        <section id="bebedouro-de-coluna-industrial" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro de Coluna Industrial: Capacidade e Aplicações</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%2025%20e%2030%20litros%20inox%202%20torneiras%20industrial.png"
              alt="bebedouro 25 e 30 litros inox 2 torneiras industrial"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            O <strong>bebedouro de coluna industrial</strong> é projetado para atender um grande volume de usuários simultâneos, com capacidade de refrigeração entre 60 e 100 litros de água gelada por hora. Modelos com 3 ou 4 torneiras permitem que múltiplos colaboradores usem o equipamento ao mesmo tempo, reduzindo filas e aumentando a produtividade nos intervalos de turno. Para um panorama completo das soluções de grande porte, consulte também nosso guia sobre <a href="/bebedouro-industrial" className="text-az hover:underline">bebedouro industrial</a>.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NR-24 (Norma Regulamentadora 24 do Ministério do Trabalho) determina que toda empresa deve disponibilizar água potável em quantidade suficiente para os trabalhadores, distribuída em pontos de fácil acesso. O bebedouro coluna industrial com múltiplas torneiras é uma das soluções mais eficientes para cumprir essa exigência em linhas de produção, depósitos e refeitórios, especialmente em ambientes com calor intenso.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para calcular a quantidade de equipamentos necessários, utilize a referência de 1 bebedouro para cada 50 trabalhadores por turno. Um bebedouro industrial de 100 litros por hora com 4 torneiras consegue atender até 150 usuários por turno de 8 horas, considerando um consumo médio de 500 ml por pessoa a cada hora de trabalho disponível.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Ambientes como fundições, cerâmicas e indústrias têxteis, onde a temperatura ultrapassa 30°C, exigem maior capacidade de refrigeração e reposição de água. Nesses casos, modelos conectados diretamente à rede hidráulica — sem dependência de galões — garantem abastecimento contínuo e eliminam o custo operacional da troca manual de garrafões.
          </p>
          <div style={{ clear: 'both' }} />
        </section>

        {/* SEÇÃO 5 — Normas e Certificações */}
        <section id="normas-e-certificacoes" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Normas e Certificações Aplicáveis</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A conformidade com normas técnicas é requisito indispensável para qualquer bebedouro de coluna utilizado em ambiente profissional. A <strong>NBR 13713</strong> da ABNT estabelece os requisitos de desempenho, segurança elétrica e qualidade de material para bebedouros de pressão produzidos e comercializados no Brasil. O certificado INMETRO atesta que o produto foi testado e aprovado conforme essa norma.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A <strong>NR-24</strong> (Condições Sanitárias e de Conforto nos Locais de Trabalho) define as obrigações do empregador quanto ao fornecimento de água potável, exigindo recipientes individuais ou equipamentos coletivos com proteção contra contaminação. O bebedouro de coluna com boia e sistema de fechamento automático, conectado à rede ou a galão selado, atende plenamente a essa exigência regulatória.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A <strong>RDC 275</strong> da ANVISA regulamenta os requisitos higiênico-sanitários para serviços de alimentação, exigindo equipamentos com superfícies lisas, impermeáveis e laváveis — critério plenamente atendido pelos modelos em aço inox grau 304. Para unidades hospitalares e de saúde, verificar as resoluções específicas da ANVISA aplicáveis ao tipo de serviço é obrigatório antes da aquisição.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Ao adquirir um bebedouro de coluna para uso comercial ou industrial, sempre solicite ao fornecedor a documentação técnica completa: certificado INMETRO, ficha técnica com vazão e consumo elétrico, e declaração de conformidade com a NBR 13713. Esses documentos podem ser exigidos em fiscalizações trabalhistas e sanitárias, protegendo a empresa de autuações e multas.
          </p>
        </section>

        {/* SEÇÃO 6 — Como Escolher */}
        <section id="como-escolher" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Como Escolher o Bebedouro de Coluna Ideal</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A escolha do bebedouro de coluna correto começa pela definição do número de usuários por turno. Um equipamento subdimensionado gera filas, desperdiça tempo produtivo e pode levar à desidratação dos trabalhadores em ambientes quentes. A regra geral do mercado é dimensionar 1 torneira para cada 50 colaboradores por turno de 8 horas.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O segundo critério é o ambiente de instalação. Ambientes externos, úmidos ou sujeitos a agentes corrosivos exigem modelos em inox ou com acabamento anticorrosão certificado. Indústrias alimentícias e unidades de saúde devem priorizar modelos que atendem à RDC 275. Escritórios com temperatura controlada podem optar por modelos de pressão ou refrigerados compactos, com custo de aquisição e manutenção menores.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Avalie também a fonte de abastecimento: se o local possui rede de água tratada com qualidade comprovada, um modelo simples de coluna pode ser suficiente. Caso a qualidade da água seja incerta ou variável, opte por modelos com sistema de filtração integrado ou instale um filtro de entrada conforme os parâmetros da NBR 13713.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Por fim, considere o custo total de propriedade ao longo de 10 anos, incluindo energia elétrica, manutenção preventiva, troca de peças e eventual substituição do equipamento. Em muitos casos, um bebedouro de coluna inox industrial de maior valor inicial representa economia real quando comparado a vários equipamentos domésticos instalados em série com manutenção frequente.
          </p>
        </section>

        {/* SEÇÃO 7 — Modelos Relacionados */}
        <section id="modelos-relacionados" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Modelos Relacionados e Alternativas</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Dependendo do espaço disponível e do volume de usuários, outros formatos podem complementar ou substituir o bebedouro de coluna na sua instalação. O <a href="/bebedouro-de-bancada" className="text-az hover:underline">bebedouro de bancada</a> é uma alternativa compacta para escritórios e salas de reunião com balcão ou superficie de apoio disponíveis, ocupando menos espaço e facilitando a manutenção por não exigir fixação no piso.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para ambientes onde o piso não pode ser ocupado ou o corredor de circulação precisa ficar livre, o <a href="/bebedouro-industrial-suspenso" className="text-az hover:underline">bebedouro industrial suspenso</a> é a solução ideal: instalado diretamente na parede, libera o espaço do piso para movimentação de pessoas e equipamentos. Essa opção é amplamente utilizada em vestiários, áreas de produção com corredor estreito e refeitórios hospitalares.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Em projetos de grande porte, a combinação de bebedouros de coluna em pontos estratégicos da produção com bebedouros suspensos em vestiários e corredores é a configuração mais eficiente. Esse modelo distribui o fluxo de usuários, evita concentração em um único ponto e garante cobertura total do espaço sem sobrecarregar nenhum equipamento individualmente.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Se você ainda tem dúvidas sobre qual formato escolher entre o modelo de coluna e os bebedouros de pressão convencionais, preparamos uma análise comparativa detalhada: <a href="/blog/bebedouro-coluna-ou-pressao" className="text-az hover:underline">leia o guia completo</a> sobre as diferenças técnicas, custos e aplicações de cada tipo.
          </p>
        </section>

        {/* SEÇÃO 8 — Onde Comprar e Atendimento */}
        <section id="onde-comprar" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Onde Comprar e Atendimento Especializado</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A JG Bebedouros atende empresas e indústrias em todo o Brasil com venda, instalação e manutenção de bebedouros de coluna industriais e domésticos. A empresa oferece consultoria técnica para dimensionamento e seleção do modelo mais adequado para cada aplicação, levando em conta o número de usuários, o ambiente de instalação e as normas técnicas aplicáveis. Para o nosso <a href="/local/bebedouro-industrial-sao-paulo" className="text-az hover:underline">atendimento em São Paulo</a>, temos equipes disponíveis com prazo de visita em até 24 horas úteis.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Ao solicitar um orçamento, informe o número de colaboradores por turno, o tipo de ambiente (escritório, fábrica, hospital, escola), a fonte de abastecimento (rede ou galão) e se há exigências normativas específicas. Com essas informações, nossa equipe técnica indica o modelo correto, elabora a proposta de instalação e garante o cumprimento das normas NBR 13713, NR-24 e RDC 275 aplicáveis ao seu projeto.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Além da venda, oferecemos contratos de manutenção preventiva com visitas periódicas, troca de peças desgastadas e higienização completa do sistema de refrigeração. A manutenção regular prolonga a vida útil do equipamento, mantém a qualidade bacteriológica da água dentro dos parâmetros exigidos pela ANVISA e evita paradas não programadas que prejudicam a operação da empresa.
          </p>
        </section>

      </PilarLayout>
      <Footer />
    </>
  )
}
