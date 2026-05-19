import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro Industrial 3 Torneiras: Modelos e Especificações',
  description: 'Bebedouro Industrial 3 Torneiras: ideal para ambientes com fluxo alto de usuários. Veja capacidades e dimensões.',
  slug: 'bebedouro-industrial-3-torneiras',
})

const faqs = [
  {
    question: 'Qual a diferença entre as torneiras de um bebedouro industrial de 3 torneiras?',
    answer:
      'Em modelos com 3 torneiras, as saídas são distribuídas em água gelada (4°C a 10°C), água natural (temperatura ambiente) e água em temperatura intermediária. Isso permite o atendimento simultâneo de vários usuários, reduzindo filas e aumentando a produtividade em ambientes de trabalho.',
  },
  {
    question: 'O bebedouro industrial de 3 torneiras atende à norma NR-24?',
    answer:
      'Sim. A NR-24 exige que empresas disponibilizem bebedouros em proporção ao número de funcionários, sendo 1 unidade para cada 50 trabalhadores. O modelo com 3 torneiras é especialmente indicado para refeitórios e canteiros de obras, pois permite o atendimento simultâneo, cumprindo os requisitos legais.',
  },
  {
    question: 'Qual a capacidade de resfriamento de um bebedouro industrial de 3 torneiras?',
    answer:
      'A capacidade de resfriamento varia conforme o modelo, mas bebedouros industriais de 3 torneiras geralmente oferecem entre 50 e 100 litros por hora. Modelos com reservatório de 100 litros são recomendados para ambientes com mais de 50 usuários simultâneos.',
  },
  {
    question: 'É necessária instalação especial para o bebedouro industrial de 3 torneiras?',
    answer:
      'Não é necessária instalação especial. O equipamento conecta-se à rede elétrica padrão (110V ou 220V) e à rede hidráulica convencional. Recomenda-se instalação por profissional habilitado para garantir o funcionamento correto e a validade da garantia.',
  },
  {
    question: 'Com que frequência o bebedouro industrial de 3 torneiras precisa de manutenção?',
    answer:
      'A manutenção preventiva deve ser realizada a cada 6 meses, incluindo higienização completa do reservatório e troca de filtros quando aplicável. A RDC 275 da ANVISA regulamenta a higienização de equipamentos de água em estabelecimentos produtivos e alimentícios.',
  },
]

export default function BebedouroIndustrial3TorneirasPage() {
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
              { name: 'Bebedouro Industrial 3 Torneiras: Modelos e Especificações' },
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
        title="Bebedouro Industrial 3 Torneiras: Modelos e Especificações"
        excerpt="O bebedouro industrial 3 torneiras oferece hidratação simultânea para múltiplos usuários com eficiência."
        breadcrumbLabel="Bebedouro Industrial 3 Torneiras: Modelos e Especificações"
        breadcrumbSlug="bebedouro-industrial-3-torneiras"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-industrial-3-torneiras"
        ctaLabel="Solicitar orçamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=bebedouro-industrial-3-torneiras"
        finalCtaTitle="Precisa de bebedouro industrial 3 torneiras?"
        finalCtaDesc="A JG Bebedouros, fábrica de bebedouros industriais, oferece venda em todo o Brasil."
        tocItems={[
          { href: '#o-que-e', label: 'O que é o Bebedouro Industrial 3 Torneiras' },
          { href: '#modelos-disponiveis', label: 'Modelos Disponíveis' },
          { href: '#capacidade-e-especificacoes', label: 'Capacidade e Especificações Técnicas' },
          { href: '#normas-e-certificacoes', label: 'Normas e Certificações' },
          { href: '#ambientes-indicados', label: 'Para Quais Ambientes é Indicado' },
          { href: '#modelos-relacionados', label: 'Modelos Relacionados' },
          { href: '#preco-e-orcamento', label: 'Preço e Orçamento' },
        ]}
        stats={[
          { label: 'Capacidade máx. de resfriamento', valor:'100 L/h' },
          { label: 'Torneiras por unidade', valor:'3' },
          { label: 'Capacidade do reservatório', valor:'25–100 L' },
          { label: 'Certificação', valor:'INMETRO / NBR 13713' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'bebedouro industrial' },
          { href: '/bebedouro-industrial-2-torneiras', label: 'bebedouro industrial 2 torneiras' },
          { href: '/bebedouro-industrial-4-torneiras', label: 'bebedouro industrial 4 torneiras' },
          { href: '/bebedouro-industrial-25-litros', label: 'bebedouro industrial 25 litros' },
          { href: '/bebedouro-para-empresa', label: 'bebedouro para empresa' },
          { href: '/blog/bebedouro-industrial-preco-2025', label: 'veja a faixa de preço' },
          { href: '/local/bebedouro-industrial-sao-paulo', label: 'em São Paulo' },
        ]}
      >
        <section id="o-que-e" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            O que é o Bebedouro Industrial 3 Torneiras
          </h2>
          <p className="mb-4">
            O{' '}
            <a href="/bebedouro-industrial" className="text-az hover:underline">
              bebedouro industrial
            </a>{' '}
            3 torneiras é um equipamento de hidratação coletiva com sistema de resfriamento elétrico,
            projetado para ambientes com alto fluxo de pessoas. Disponível em modelos com reservatórios
            de 25 a 100 litros, oferece três saídas simultâneas de água gelada, natural e ambiente,
            atendendo mais usuários ao mesmo tempo.
          </p>
        </section>

        <section id="modelos-disponiveis" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Modelos Disponíveis
          </h2>
          <p className="mb-4">
            O bebedouro industrial com 3 torneiras está disponível em diferentes capacidades de reservatório,
            cada uma adequada a um perfil de uso específico. Os principais modelos são fabricados em aço inox
            304 ou corpo em fibra de vidro com acabamento sanitário, garantindo durabilidade e facilidade de
            higienização conforme exigido pela RDC 275 da ANVISA.
          </p>

          <img
            src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%2025%20e%2030%20litros%20inox%202%20torneiras%20industrial.png"
            alt="bebedouro 25 e 30 litros inox 2 torneiras industrial"
            className="w-full rounded-lg mb-6 object-cover"
            loading="lazy"
          />

          <p className="mb-4">
            <strong>Modelo 25 litros:</strong> Indicado para ambientes menores, como pequenas empresas,
            escritórios ou academias com até 30 usuários por turno. Compacto e de fácil instalação, ocupa
            pouco espaço e consome menos energia. Apesar da menor capacidade de reservatório, as 3 torneiras
            permitem o atendimento simultâneo, reduzindo o tempo de espera mesmo nesses espaços.
          </p>

          <p className="mb-4">
            <strong>Modelo 30 litros:</strong> Versão intermediária muito procurada por empresas de médio
            porte. Equilibra capacidade de armazenamento e consumo energético, sendo adequado para
            refeitórios com fluxo moderado. Geralmente apresenta dimensões compactas, facilitando a
            instalação em locais com espaço reduzido e já conta com certificação INMETRO de série.
          </p>

          <p className="mb-4">
            <strong>Modelo 50 litros:</strong> Ideal para ambientes com fluxo intenso, como canteiros de
            obra, galpões industriais e escolas. A capacidade de resfriamento supera 60 litros por hora,
            garantindo fornecimento contínuo de água gelada mesmo nos horários de pico, como o horário de
            almoço em refeitórios industriais com muitos colaboradores.
          </p>

          <p className="mb-4">
            <strong>Modelo 100 litros:</strong> O modelo de maior capacidade, indicado para grandes
            instalações industriais, shopping centers, hospitais e ambientes com mais de 100 usuários por
            turno. Com capacidade de resfriamento de até 100 litros por hora, atende demandas intensas sem
            interrupção. Fabricado em inox 304 com gabinete reforçado, é o mais robusto da linha e o mais
            indicado para operações contínuas de longa duração.
          </p>
        </section>

        <section id="capacidade-e-especificacoes" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Capacidade e Especificações Técnicas
          </h2>

          <img
            src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20industrial%2025%2030%20litros%20inox%202%20torneiras%20ambiente%20de%20refeitorio%20de%20obra.png"
            alt="bebedouro industrial 25 30 litros inox 2 torneiras ambiente de refeitorio de obra"
            className="w-full rounded-lg mb-6 object-cover"
            loading="lazy"
          />

          <p className="mb-4">
            As especificações técnicas variam conforme o fabricante e o modelo, mas existem parâmetros
            comuns que orientam a escolha do equipamento adequado para cada ambiente. Entender esses dados
            é fundamental para garantir que o bebedouro atenda à demanda real do local de instalação e
            cumpra as normas vigentes.
          </p>

          <p className="mb-4">
            <strong>Capacidade de resfriamento:</strong> Medida em litros por hora (L/h), indica o volume
            de água que o equipamento consegue resfriar continuamente. Modelos de 25 e 30 litros
            geralmente atingem 30 a 50 L/h, enquanto os de 50 e 100 litros chegam a 60 e 100 L/h
            respectivamente, sendo esta última a mais adequada para ambientes industriais de grande porte.
          </p>

          <p className="mb-4">
            <strong>Temperatura da água gelada:</strong> Os bebedouros industriais de 3 torneiras mantêm
            a água gelada entre 4°C e 10°C, conforme especificação da NBR 13713. Alguns modelos permitem
            regulagem da temperatura por termostato, facilitando o ajuste conforme a estação do ano e as
            preferências dos usuários do ambiente.
          </p>

          <p className="mb-4">
            <strong>Alimentação elétrica:</strong> A maioria dos modelos é disponibilizada em versões 110V
            e 220V monofásico. A potência varia de 150W (modelos 25L) a 400W (modelos 100L). É importante
            verificar a tensão da rede elétrica local antes da aquisição para evitar a necessidade de
            transformadores, que aumentam o custo de instalação.
          </p>

          <p className="mb-4">
            <strong>Pressão de trabalho:</strong> Os bebedouros industriais operam com pressão de água
            entre 20 e 100 kPa (0,2 a 1,0 kgf/cm²), compatível com a maioria das instalações
            hidráulicas residenciais e industriais. Em locais com pressão elevada, recomenda-se a
            instalação de regulador de pressão para proteger o equipamento e prolongar a vida útil das
            vedações e torneiras.
          </p>

          <p className="mb-4">
            <strong>Dimensões típicas:</strong> Os modelos de coluna com 3 torneiras têm altura entre
            1,20 m e 1,50 m, largura de 40 a 60 cm e profundidade de 40 a 50 cm. Modelos de bancada são
            mais compactos, ideais para ambientes onde o espaço vertical é limitado, como cozinhas
            industriais e laboratórios.
          </p>
        </section>

        <section id="normas-e-certificacoes" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Normas e Certificações
          </h2>
          <p className="mb-4">
            A aquisição de um bebedouro industrial deve considerar as certificações e normas técnicas
            vigentes no Brasil. A conformidade com esses requisitos é fundamental não apenas para garantir
            a segurança dos usuários, mas também para evitar autuações em fiscalizações trabalhistas e
            sanitárias, especialmente em indústrias sujeitas a auditorias periódicas.
          </p>

          <p className="mb-4">
            <strong>NBR 13713:</strong> A norma ABNT NBR 13713 estabelece os requisitos de desempenho,
            segurança e ensaios para bebedouros domésticos e coletivos. Ela define, entre outros
            parâmetros, os limites de temperatura da água gelada, a resistência estrutural do equipamento
            e os requisitos para materiais em contato com água potável, garantindo que não haja
            contaminação química ou microbiológica.
          </p>

          <p className="mb-4">
            <strong>INMETRO:</strong> O selo INMETRO certifica que o equipamento foi submetido a ensaios
            de conformidade em laboratório acreditado, atestando que atende às normas técnicas aplicáveis.
            Ao adquirir um bebedouro industrial de 3 torneiras, verifique se o modelo possui o Registro
            de Avaliação da Conformidade (RAC) ativo no portal do INMETRO. Modelos sem certificação podem
            representar riscos à saúde dos usuários.
          </p>

          <p className="mb-4">
            <strong>NR-24:</strong> A Norma Regulamentadora nº 24 do Ministério do Trabalho e Previdência
            estabelece condições sanitárias e de conforto nos locais de trabalho, incluindo a
            obrigatoriedade de bebedouros em quantidade suficiente. A proporção exigida é de 1 bebedouro
            para cada 50 trabalhadores, devendo estar próximos ao local de trabalho e em condições
            higiênicas adequadas.
          </p>

          <p className="mb-4">
            <strong>RDC 275 (ANVISA):</strong> A Resolução da Diretoria Colegiada nº 275 da ANVISA dispõe
            sobre o Regulamento Técnico de Procedimentos Operacionais Padronizados aplicados a
            estabelecimentos produtores e industrializadores de alimentos. Ela regulamenta os
            procedimentos de higienização de equipamentos que entram em contato com água potável,
            incluindo bebedouros industriais, com frequência mínima semestral de limpeza e desinfecção.
          </p>
        </section>

        <section id="ambientes-indicados" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Para Quais Ambientes é Indicado
          </h2>
          <p className="mb-4">
            O bebedouro industrial de 3 torneiras é indicado para qualquer ambiente com fluxo de pessoas
            acima da média e necessidade de hidratação coletiva constante. A seguir, os principais
            contextos de uso e as recomendações para cada um.
          </p>

          <p className="mb-4">
            <strong>Refeitórios industriais:</strong> Ambientes com alta concentração de usuários em
            curtos períodos de tempo. O modelo com 3 torneiras reduz filas nos horários de pico,
            melhorando a experiência dos colaboradores. É comum instalar dois ou mais equipamentos em
            refeitórios com mais de 100 usuários por turno, posicionados em extremidades opostas do
            espaço para facilitar o acesso.
          </p>

          <p className="mb-4">
            <strong>Canteiros de obra:</strong> Ambientes externos, sujeitos a altas temperaturas e
            poeira. Nesses locais, a resistência do equipamento é fundamental. Modelos com gabinete em
            aço inox 304 ou fibra de vidro UV-resistente são mais adequados. A NR-24 exige que os
            bebedouros estejam acessíveis a todos os trabalhadores, com água potável em quantidade
            suficiente durante toda a jornada.
          </p>

          <p className="mb-4">
            <strong>Escolas e universidades:</strong> O alto fluxo de alunos nos intervalos exige
            equipamentos de grande capacidade. Os modelos de 50 ou 100 litros com 3 torneiras são os
            mais recomendados, pois garantem fornecimento contínuo mesmo com dezenas de usuários em
            sequência, sem redução perceptível da temperatura da água gelada.
          </p>

          <p className="mb-4">
            Para empresas de médio e grande porte, o{' '}
            <a href="/bebedouro-para-empresa" className="text-az hover:underline">
              bebedouro para empresa
            </a>{' '}
            com 3 torneiras é uma solução que combina produtividade e conformidade com a NR-24,
            atendendo às exigências trabalhistas sem comprometer o conforto dos colaboradores e
            facilitando a gestão de manutenção preventiva.
          </p>

          <p className="mb-4">
            <strong>Academias e centros esportivos:</strong> Usuários em atividade física demandam
            hidratação frequente. O modelo com 3 torneiras permite que vários atletas se hidratem
            simultaneamente, sem interromper o ritmo dos treinos. Prefira modelos com torneiras de
            acionamento por alavanca para facilitar o uso sem contato das mãos, reduzindo o risco de
            contaminação cruzada.
          </p>

          <p className="mb-4">
            <strong>Hospitais e clínicas:</strong> Nesses ambientes, a qualidade da água e a facilidade
            de higienização são prioridades absolutas. Bebedouros com filtro embutido e materiais
            certificados pela ANVISA são obrigatórios. O modelo com 3 torneiras atende corredores com
            grande circulação de pacientes e visitantes, mantendo a hidratação acessível sem gerar
            aglomerações.
          </p>
        </section>

        <section id="modelos-relacionados" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Modelos Relacionados
          </h2>
          <p className="mb-4">
            Se o bebedouro industrial de 3 torneiras não for o modelo ideal para o seu ambiente, conheça
            as alternativas disponíveis na linha de bebedouros industriais da JG Bebedouros:
          </p>

          <p className="mb-4">
            <strong>
              <a href="/bebedouro-industrial-2-torneiras" className="text-az hover:underline">
                Bebedouro industrial 2 torneiras
              </a>
              :
            </strong>{' '}
            Indicado para ambientes menores, com fluxo de usuários moderado. Ocupa menos espaço e tem
            custo de aquisição e manutenção menores. Ideal para escritórios com até 30 funcionários ou
            pequenos estabelecimentos comerciais onde o espaço é um fator limitante.
          </p>

          <p className="mb-4">
            <strong>
              <a href="/bebedouro-industrial-4-torneiras" className="text-az hover:underline">
                Bebedouro industrial 4 torneiras
              </a>
              :
            </strong>{' '}
            Para ambientes com demanda ainda maior, o modelo de 4 torneiras permite o atendimento
            simultâneo de mais usuários. Recomendado para grandes refeitórios, estádios, centros de
            convenções e terminais de transporte público com fluxo intenso e contínuo de pessoas.
          </p>

          <p className="mb-4">
            <strong>
              <a href="/bebedouro-industrial-25-litros" className="text-az hover:underline">
                Bebedouro industrial 25 litros
              </a>
              :
            </strong>{' '}
            Modelo compacto e econômico, adequado para ambientes com menos usuários ou espaço reduzido.
            Apesar da menor capacidade de reservatório, mantém a qualidade de resfriamento e a
            durabilidade característica da linha industrial, com certificação INMETRO e atendimento às
            normas NBR 13713 e NR-24.
          </p>
        </section>

        <section id="preco-e-orcamento" className="mb-12 scroll-mt-20">
          <h2
            className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Preço e Orçamento
          </h2>
          <p className="mb-4">
            O preço do bebedouro industrial de 3 torneiras varia conforme a capacidade do reservatório,
            o material do gabinete, a marca e os recursos adicionais como filtro embutido ou sistema de
            purificação ultravioleta. De forma geral, modelos de entrada com reservatório de 25 litros
            partem de valores acessíveis para pequenas empresas, enquanto os de 100 litros representam
            investimento maior, justificado pela durabilidade e pelo desempenho em operações contínuas.
          </p>

          <p className="mb-4">
            Para conhecer os valores atualizados e comparar as opções disponíveis,{' '}
            <a href="/blog/bebedouro-industrial-preco-2025" className="text-az hover:underline">
              veja a faixa de preço
            </a>{' '}
            dos principais modelos em 2025. O guia cobre desde modelos básicos até os mais sofisticados,
            com análise de custo-benefício para cada faixa de investimento e indicação dos modelos mais
            vendidos por segmento.
          </p>

          <p className="mb-4">
            Para empresas localizadas no estado de São Paulo, a JG Bebedouros atende com entrega e
            instalação{' '}
            <a href="/local/bebedouro-industrial-sao-paulo" className="text-az hover:underline">
              em São Paulo
            </a>{' '}
            e no interior, com suporte técnico especializado e peças de reposição disponíveis em estoque
            para garantir a continuidade operacional dos equipamentos.
          </p>

          <p className="mb-4">
            Além do preço de aquisição, considere os custos recorrentes de manutenção preventiva, troca
            de filtros e consumo de energia. Um bebedouro com maior eficiência energética pode ter custo
            inicial mais alto, mas representar economia significativa ao longo do tempo, especialmente
            em instalações com uso contínuo por dois ou mais turnos diários.
          </p>

          <p className="mb-4">
            Para obter um orçamento preciso e personalizado para a sua demanda, acesse o site da JG
            Bebedouros e preencha o formulário de contato. Nossa equipe analisará o perfil do ambiente —
            número de usuários, horas de funcionamento e requisitos de temperatura — e indicará o modelo
            mais adequado com o melhor custo-benefício para a sua operação.
          </p>
        </section>
      </PilarLayout>
      <Footer />
    </>
  )
}
