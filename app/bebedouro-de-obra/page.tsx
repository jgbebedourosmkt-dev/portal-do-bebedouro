import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro de Obra: Guia Completo 2025',
  description: 'Bebedouro de Obra: tipos, características, normas e onde comprar. Guia completo para sua aplicação específica.',
  slug: 'bebedouro-de-obra',
})

const faqs = [
  {
    question: 'O bebedouro de obra é obrigatório pela NR-18?',
    answer: 'Sim. A Norma Regulamentadora NR-18 exige que todo canteiro de obras forneça água potável e gelada aos trabalhadores. O bebedouro coletivo é a forma mais segura e econômica de cumprir essa exigência, evitando multas e interdições do Ministério do Trabalho e Emprego.',
  },
  {
    question: 'Qual a capacidade mínima de bebedouro para canteiro de obras?',
    answer: 'A NR-18 não fixa um volume único, mas a referência prática é de 1,2 litro de água por trabalhador por hora de trabalho. Para equipes de 20 a 50 pessoas, modelos de 100 a 200 litros são os mais indicados, garantindo água gelada disponível durante toda a jornada, incluindo os períodos de pico de consumo.',
  },
  {
    question: 'Qual material é mais indicado para bebedouro de obra?',
    answer: 'O aço inox AISI 304 é o material padrão para canteiros de obras por sua resistência mecânica, facilidade de limpeza e conformidade com a RDC 275 da Anvisa. Modelos de plástico ABS perdem durabilidade rapidamente em ambientes externos expostos ao sol, à poeira e ao uso intenso.',
  },
  {
    question: 'Com que frequência deve-se limpar o bebedouro de obra?',
    answer: 'Recomenda-se higienização semanal do reservatório e das torneiras com solução de hipoclorito de sódio aprovada pela Anvisa, seguida de enxágue abundante. Em obras com muita poeira — como demolições e terraplanagem — a limpeza deve ser feita duas vezes por semana para evitar contaminação da água.',
  },
  {
    question: 'O bebedouro de obra precisa de certificação INMETRO?',
    answer: 'A certificação INMETRO (programa OCP-092) não é obrigatória para todos os modelos, mas é um indicador importante de qualidade e segurança. Priorize modelos que atendam à NBR 13713 e que tenham certificação de segurança elétrica, especialmente em obras alimentadas por geradores com variação de tensão.',
  },
]

export default function BebedouroDeObraPage() {
  return (
    <>
      <Topbar /><Header /><Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', slug: '' },
              { name: 'Bebedouro de Obra: Guia Completo 2025' },
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
        title="Bebedouro de Obra: Guia Completo 2025"
        excerpt="Bebedouro de Obra é o equipamento de hidratação coletiva obrigatório em canteiros de obras — veja tipos, normas NR-18 e como escolher o modelo ideal para sua equipe."
        breadcrumbLabel="Bebedouro de Obra: Guia Completo 2025"
        breadcrumbSlug="bebedouro-de-obra"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-de-obra"
        ctaLabel="Solicitar orçamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=bebedouro-de-obra"
        finalCtaTitle="Precisa de Bebedouro de Obra?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutenção em todo o Brasil."
        tocItems={[
          { href: '#o-que-e-bebedouro-de-obra', label: 'O que é bebedouro de obra' },
          { href: '#obrigatorio-na-construcao-civil', label: 'Obrigatoriedade na construção civil' },
          { href: '#tipos-de-bebedouro-para-obra', label: 'Tipos de bebedouro para obra' },
          { href: '#capacidade-ideal-para-canteiro', label: 'Capacidade ideal para o canteiro' },
          { href: '#materiais-e-durabilidade', label: 'Materiais e durabilidade' },
          { href: '#como-escolher-o-modelo-certo', label: 'Como escolher o modelo certo' },
          { href: '#normas-tecnicas-e-exigencias-legais', label: 'Normas técnicas e exigências legais' },
          { href: '#higiene-e-manutencao', label: 'Higiene e manutenção' },
          { href: '#modelos-relacionados', label: 'Modelos relacionados' },
          { href: '#onde-comprar-e-atendimento', label: 'Onde comprar e atendimento' },
        ]}
        stats={[
          { valor: '590', label: 'buscas mensais por "bebedouro de obra"' },
          { valor: '1,2 L/h', label: 'hidratação mínima por trabalhador exigida' },
          { valor: 'NR-18', label: 'norma que torna o bebedouro obrigatório' },
          { valor: '200 L', label: 'capacidade máxima dos modelos industriais' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'bebedouro industrial' },
          { href: '/tipos-de-bebedouro', label: 'tipos de bebedouro' },
          { href: '/bebedouro-escolar', label: 'bebedouro escolar' },
          { href: '/bebedouro-para-academia', label: 'bebedouro para academia' },
          { href: '/blog/bebedouro-coluna-ou-pressao', label: 'leia o guia completo' },
          { href: '/local/bebedouro-industrial-sao-paulo', label: 'atendimento em São Paulo' },
        ]}
      >

        <section id="o-que-e-bebedouro-de-obra" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>O que é bebedouro de obra</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Bebedouro de Obra é um equipamento coletivo de hidratação projetado para canteiros de obras e ambientes da construção civil. Com reservatório de aço inox, sistema de refrigeração potente e múltiplas torneiras, atende equipes de dezenas de trabalhadores em longas jornadas externas, mantendo água potável e gelada disponível o dia todo.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Diferente dos modelos domésticos, o <a href="/bebedouro-industrial" className="text-az hover:underline">bebedouro industrial</a> para obra é construído para resistir à poeira, ao calor intenso e ao uso contínuo por muitas horas. Sua estrutura reforçada garante estabilidade mesmo em pisos irregulares de canteiro, enquanto o isolamento térmico mantém a água na temperatura correta sem consumo excessivo de energia elétrica.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A hidratação adequada dos trabalhadores impacta diretamente a produtividade, a concentração e a segurança no trabalho. Em obras com temperaturas elevadas — frequentes no Brasil — o risco de desidratação e insolação aumenta significativamente. O bebedouro coletivo é a solução mais higiênica, econômica e legalmente exigida para garantir o suprimento de água fresca a toda a equipe.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O bebedouro para canteiro de obras também se distingue dos modelos de escritório pelo número de torneiras simultâneas, pela capacidade de reservatório e pela facilidade de limpeza. Modelos com 3 ou 4 torneiras eliminam filas nos intervalos e permitem que vários trabalhadores se sirvam ao mesmo tempo, otimizando as pausas e a retomada das atividades.
          </p>
        </section>

        <section id="obrigatorio-na-construcao-civil" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Obrigatoriedade na construção civil</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A Norma Regulamentadora NR-18 (Condições e Meio Ambiente de Trabalho na Indústria da Construção) torna obrigatório o fornecimento de água potável e gelada a todos os trabalhadores em canteiros de obras. O descumprimento dessa norma sujeita o empregador a multas administrativas e à interdição do canteiro por auditores fiscais do Ministério do Trabalho e Emprego.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NR-18 especifica que a água deve ser fresca, potável e disponível em quantidade suficiente ao longo de toda a jornada de trabalho. Com temperaturas que frequentemente ultrapassam 35°C nos canteiros brasileiros, o sistema de refrigeração do bebedouro deixa de ser um diferencial de conforto e passa a ser um requisito prático indispensável para atender a norma.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NR-24, que complementa as exigências sobre condições sanitárias e de conforto nos locais de trabalho, também determina o fornecimento de água potável em qualidade e quantidade adequadas. Atender simultaneamente à NR-18 e à NR-24 protege a empresa de passivos trabalhistas e demonstra compromisso com a saúde e o bem-estar dos trabalhadores durante toda a obra.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Obras de médio e grande porte passam regularmente por fiscalizações do Ministério do Trabalho. Ter o bebedouro de obra instalado corretamente, com manutenção documentada e localização de fácil acesso, é parte essencial do PPRA (Programa de Prevenção de Riscos Ambientais) e das auditorias de segurança do trabalho que podem ocorrer a qualquer momento.
          </p>
        </section>

        <section id="tipos-de-bebedouro-para-obra" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Tipos de bebedouro para obra</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20industrial%20inox%203%20torneiras%20robust%20100%20litros%20ambiente%20obra.png"
              alt="bebedouro industrial inox 3 torneiras robust 100 litros ambiente obra"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            Os modelos de coluna são os mais utilizados em canteiros de obras. Com pés antiderrapantes e reservatório elevado, facilitam o acesso de trabalhadores em diferentes alturas e evitam o acúmulo de sujeira na base. Estão disponíveis em capacidades de 25, 50, 100 e 200 litros, adequados a equipes de tamanhos variados e a diferentes etapas da construção.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Os bebedouros com 3 ou 4 torneiras são ideais para obras com muitos trabalhadores, pois eliminam filas e reduzem o tempo de espera nos intervalos. Cada saída atende um trabalhador simultaneamente, o que é fundamental em obras com dezenas de funcionários e pausas curtas de 15 a 20 minutos, onde o tempo disponível para hidratação é limitado.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para conhecer a gama completa de categorias e comparar opções por capacidade, material e sistema de refrigeração, confira o guia de <a href="/tipos-de-bebedouro" className="text-az hover:underline">tipos de bebedouro</a> disponível no portal. Cada aplicação exige características específicas que impactam o desempenho do equipamento e o custo de manutenção ao longo da obra.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Existem ainda modelos com rodízios (rodinhas), projetados para obras em que o bebedouro precisa ser deslocado entre diferentes áreas ou andares do canteiro. Essa mobilidade facilita a logística de hidratação em obras de grande extensão territorial, como rodovias, conjuntos habitacionais, condomínios e galpões industriais que atendem trabalhadores em múltiplos pontos.
          </p>
        </section>
        <div style={{ clear: 'both' }} />

        <section id="capacidade-ideal-para-canteiro" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Capacidade ideal para o canteiro</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O dimensionamento correto do bebedouro de obra é fundamental para garantir disponibilidade de água gelada ao longo de toda a jornada. A referência técnica mais utilizada é de 1,2 litro de água por trabalhador por hora de trabalho. Em uma obra de 8 horas com 30 trabalhadores, o consumo estimado supera 280 litros por dia, o que exige planejamento cuidadoso da capacidade instalada.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para equipes de até 20 pessoas, um modelo de 100 litros com 3 torneiras costuma ser suficiente para uma jornada de 8 horas com reabastecimento no intervalo. Obras com 30 a 60 trabalhadores se beneficiam de modelos de 200 litros ou de dois modelos de 100 litros posicionados em pontos estratégicos do canteiro, reduzindo o deslocamento até o bebedouro.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Em obras localizadas em regiões de clima quente e seco — como Centro-Oeste, Nordeste e partes do Sudeste — o consumo de água pode ser 30% a 50% maior do que a média nacional. Nesses casos, o superdimensionamento da capacidade é uma escolha inteligente que evita o risco de falta d'água e garante a conformidade com a NR-18 mesmo nos dias mais quentes do verão.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Obras com múltiplos turnos exigem atenção redobrada ao planejamento de reabastecimento. Se o bebedouro não é reabastecido entre turnos, o reservatório precisa ser grande o suficiente para atender a equipe do turno seguinte sem resfriamento adicional. Modelos com bom isolamento térmico mantêm a temperatura da água adequada por até 12 horas após o último reabastecimento.
          </p>
        </section>

        <section id="materiais-e-durabilidade" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Materiais e durabilidade</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20industrial%20inox%204%20torneiras%20robust%20200%20litros%20ambiente%20obra.png"
              alt="bebedouro industrial inox 4 torneiras robust 200 litros ambiente obra"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            O aço inox AISI 304 é o material padrão para bebedouros em obras. Ele resiste à corrosão causada pela umidade do canteiro, não retém odores e não interfere no sabor ou na cor da água potável. Sua durabilidade em ambientes externos expostos ao sol, à chuva e à poeira é muito superior à do plástico ABS ou do aço galvanizado convencional.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A tampa e o corpo externo em inox escovado dificultam a proliferação de bactérias e facilitam a inspeção visual do estado de conservação do equipamento. Em canteiros onde poeira, entulho e intempéries são constantes, essa característica é determinante para a vida útil do bebedouro e para a qualidade da água ofertada diariamente aos trabalhadores.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            As torneiras de latão cromado ou inox são preferíveis às de plástico em ambientes de obra, pois resistem melhor a impactos físicos e ao torque excessivo causado pelo uso intenso e repetido. Verifique também a qualidade da vedação interna das torneiras: boa vedação evita vazamentos que desperdiçam água e criam poças de lama na área de circulação dos trabalhadores.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O compressor do sistema de refrigeração é o componente mais crítico em ambientes de obra. Modelos com compressor hermético selado requerem menos manutenção preventiva e são mais tolerantes às variações de tensão elétrica, comuns em obras alimentadas por geradores. Dê preferência a compressores com proteção térmica automática contra superaquecimento, que desliga o equipamento antes de causar danos ao motor.
          </p>
        </section>
        <div style={{ clear: 'both' }} />

        <section id="como-escolher-o-modelo-certo" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Como escolher o modelo certo</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O primeiro critério de escolha é o número de trabalhadores atendidos simultaneamente. Defina o pico de uso — geralmente nos intervalos de almoço e no final da tarde — e escolha um modelo com capacidade de reservatório e número de torneiras suficientes para esse momento de maior demanda. Subdimensionar o bebedouro gera filas, insatisfação e descumprimento da NR-18.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O segundo critério é a disponibilidade e a estabilidade da energia elétrica no canteiro. Obras com rede elétrica estável podem utilizar qualquer modelo com compressor. Obras alimentadas por gerador devem optar por modelos bivolt (127/220V) com proteção de tensão integrada, ou por bebedouros de pressão que dispensam compressor elétrico para o resfriamento da água.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Considere também a facilidade de manutenção e reposição de peças. Modelos com bandeja coletora removível, grade de proteção do compressor e torneiras com vedações de fácil substituição reduzem o tempo de inatividade do equipamento. Em obras longas, um bebedouro parado aguardando peça pode comprometer o atendimento à NR-18 por vários dias seguidos.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Verifique se o fornecedor possui assistência técnica na região da obra. O custo de deslocamento de um técnico pode ser elevado em obras distantes dos grandes centros urbanos. Prefira fornecedores com rede de atendimento nacional, estoque de peças e suporte remoto para diagnóstico rápido de problemas no equipamento durante a obra.
          </p>
        </section>

        <section id="normas-tecnicas-e-exigencias-legais" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Normas técnicas e exigências legais</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NBR 13713 da ABNT estabelece os requisitos de desempenho, segurança e higiene para bebedouros. Ela define critérios para materiais em contato com a água, vedação dos reservatórios e capacidade mínima de resfriamento do sistema. Modelos aprovados por essa norma garantem conformidade técnica em processos de auditoria do trabalho e fiscalização sanitária dos canteiros.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A RDC 275 da Anvisa regulamenta as condições higiênico-sanitárias de equipamentos em contato com alimentos e água potável. Para bebedouros em obras, ela determina que os materiais não devem alterar as características organolépticas da água — cor, sabor e odor — e devem ser de fácil higienização com produtos sanitizantes aprovados para uso alimentar.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O INMETRO realiza avaliação de conformidade de bebedouros com compressor por meio do programa OCP-092. Embora não seja obrigatória para todos os segmentos, a certificação INMETRO é um forte indicador de qualidade e segurança do produto, especialmente em relação ao consumo de energia e à segurança elétrica do equipamento em ambientes de obra.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A NR-18, combinada com a NR-24, forma o conjunto normativo mais relevante para obras civis no Brasil. Enquanto a NR-18 foca na organização geral do canteiro e nas condições de trabalho, a NR-24 trata especificamente das condições sanitárias, incluindo o padrão mínimo de qualidade da água potável. A fiscalização conjunta dessas normas pode resultar em autos de infração de valores elevados para o empregador.
          </p>
        </section>

        <section id="higiene-e-manutencao" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Higiene e manutenção do bebedouro</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A manutenção correta do bebedouro de obra começa pela limpeza semanal do reservatório e das torneiras. O procedimento padrão envolve o esvaziamento completo do reservatório, a lavagem interna com solução de hipoclorito de sódio a 2,5% aprovada pela Anvisa, o enxágue abundante com água potável e a secagem antes do reabastecimento para o próximo turno.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Em canteiros com muita poeira — como obras de demolição, terraplanagem ou concretagem em período seco — a frequência de limpeza deve ser aumentada para duas vezes por semana. A poeira infiltrada no reservatório pode contaminar a água e causar problemas respiratórios e gastrointestinais nos trabalhadores, além de gerar responsabilidade legal e trabalhista para o empregador.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A manutenção preventiva do compressor e do sistema de refrigeração deve ser realizada semestralmente por técnico habilitado. Nessa revisão, verificam-se o nível do gás refrigerante, o estado das borrachas de vedação, o funcionamento do termostato, a limpeza do condensador e a integridade das conexões elétricas. Bebedouros bem mantidos têm vida útil superior a 10 anos mesmo em uso intenso.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Registre todas as intervenções de limpeza e manutenção em planilha ou aplicativo de controle de equipamentos. Esse histórico é exigido em auditorias de segurança do trabalho e serve como garantia junto ao fornecedor em casos cobertos pela garantia contratual. Para aprofundar-se no tema de sistemas de refrigeração e tipos de equipamento, <a href="/blog/bebedouro-coluna-ou-pressao" className="text-az hover:underline">leia o guia completo</a> disponível no nosso blog.
          </p>
        </section>

        <section id="modelos-relacionados" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Modelos relacionados para outros segmentos</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Se sua necessidade vai além do canteiro de obras, existem modelos projetados especificamente para cada ambiente de uso. O <a href="/bebedouro-escolar" className="text-az hover:underline">bebedouro escolar</a> atende crianças e adolescentes com torneiras em alturas adaptadas e sistemas de filtragem mais sofisticados, adequados ao uso contínuo e ao perfil de higiene exigido por instituições de ensino públicas e privadas.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para academias e centros esportivos, o <a href="/bebedouro-para-academia" className="text-az hover:underline">bebedouro para academia</a> combina hidratação rápida com design robusto, resistindo ao ambiente úmido e ao uso intenso de praticantes de atividade física. Esses modelos geralmente incluem torneiras de pressão adaptadas para garrafas esportivas e sistemas de filtragem por carvão ativado para melhorar o sabor da água.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Em ambientes industriais mais amplos — como fábricas, galpões logísticos e refinarias — os modelos de maior capacidade com 4 torneiras e compressor de alta potência são os mais indicados. A escolha correta do equipamento para cada segmento impacta diretamente a satisfação dos usuários, o custo operacional e a conformidade com as normas aplicáveis ao ambiente de trabalho.
          </p>
        </section>

        <section id="onde-comprar-e-atendimento" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Onde comprar e atendimento</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A JG Bebedouros comercializa e realiza manutenção de bebedouros para obra em todo o Brasil, com atendimento especializado para construtoras, empreiteiras e empresas da construção civil. O portfólio inclui modelos de 25 a 200 litros com 2, 3 e 4 torneiras, todos fabricados em aço inox e adequados às exigências da NR-18 e da NR-24 para canteiros de obras.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para obras na Grande São Paulo e interior do estado, contamos com equipe própria de instalação e manutenção com atendimento ágil e suporte técnico presencial. Acesse nossa página de <a href="/local/bebedouro-industrial-sao-paulo" className="text-az hover:underline">atendimento em São Paulo</a> e veja as opções de locação, venda e contratos de manutenção preventiva disponíveis para sua região e tipo de obra.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Entre em contato pelo formulário ou telefone para solicitar um orçamento personalizado sem compromisso. Nossa equipe avalia o número de trabalhadores, o tipo e a duração da obra e as condições elétricas do canteiro para recomendar o modelo mais adequado e econômico. Entrega rápida, instalação assistida e suporte técnico durante toda a vigência do contrato.
          </p>
        </section>

      </PilarLayout>
      <Footer />
    </>
  )
}
