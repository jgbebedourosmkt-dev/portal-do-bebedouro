import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Bebedouro de Bancada: Guia Completo 2025',
  description: 'Bebedouro de Bancada: tipos, características, normas e onde comprar. Guia completo para sua aplicação específica.',
  slug: 'bebedouro-de-bancada',
})

const faqs = [
  {
    question: 'O bebedouro de bancada serve para uso industrial?',
    answer: 'Sim. Modelos de bancada industrial com capacidade de 25 a 100 litros são certificados pelo INMETRO e atendem às normas NBR 13713 e NR-24, sendo adequados para refeitórios, laboratórios e linhas de produção.',
  },
  {
    question: 'Qual a diferença entre bebedouro de bancada e de coluna?',
    answer: 'O bebedouro de bancada é apoiado sobre superfícies planas (mesas, balcões) e ocupa menos espaço vertical. O bebedouro de coluna é autossustentado e indicado para áreas abertas com maior fluxo de pessoas.',
  },
  {
    question: 'O bebedouro de bancada precisa de instalação hidráulica?',
    answer: 'Depende do modelo. Bebedouros com reservatório interno ou garrafão não precisam de instalação hidráulica. Modelos com ligação direta à rede exigem um ponto de água e dreno previamente instalados.',
  },
  {
    question: 'Qual a capacidade ideal de um bebedouro de bancada?',
    answer: 'Para até 20 pessoas por turno, modelos de 5 a 10 litros são suficientes. Para ambientes maiores ou industriais, capacidades de 25 a 100 litros garantem abastecimento contínuo sem reabastecimento frequente.',
  },
  {
    question: 'O bebedouro de bancada precisa de certificação INMETRO?',
    answer: 'Sim. Modelos destinados a uso coletivo devem ter o selo INMETRO conforme a portaria vigente. Essa certificação é exigida em licitações públicas e auditorias de saúde ocupacional.',
  },
]

export default function BebedouroDeBancadaPage() {
  return (
    <>
      <Topbar /><Header /><Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', slug: '' },
              { name: 'Bebedouro de Bancada: Guia Completo 2025' },
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
        title="Bebedouro de Bancada: Guia Completo 2025"
        excerpt="Bebedouro de Bancada compacto, eficiente e certificado: conheça tipos, normas técnicas e como escolher o modelo certo para cada ambiente."
        breadcrumbLabel="Bebedouro de Bancada: Guia Completo 2025"
        breadcrumbSlug="bebedouro-de-bancada"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=bebedouro-de-bancada"
        ctaLabel="Solicitar orcamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=bebedouro-de-bancada"
        finalCtaTitle="Precisa de Bebedouro de Bancada?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutencao em todo o Brasil."
        tocItems={[
          { href: '#o-que-e-bebedouro-de-bancada', label: 'O que é Bebedouro de Bancada?' },
          { href: '#como-funciona', label: 'Como Funciona' },
          { href: '#tipos-e-modelos', label: 'Tipos e Modelos' },
          { href: '#aplicacoes-e-ambientes', label: 'Aplicações e Ambientes' },
          { href: '#normas-e-certificacoes', label: 'Normas e Certificações' },
          { href: '#como-escolher', label: 'Como Escolher o Modelo Ideal' },
          { href: '#modelos-relacionados', label: 'Modelos Relacionados' },
          { href: '#onde-comprar', label: 'Onde Comprar' },
        ]}
        stats={[
          { valor: '5 a 100 L', label: 'Capacidades disponíveis' },
          { valor: '±4 °C', label: 'Temperatura de resfriamento' },
          { valor: 'NBR 13713', label: 'Norma técnica aplicável' },
          { valor: '110/220 V', label: 'Voltagem compatível' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'bebedouro industrial' },
          { href: '/tipos-de-bebedouro', label: 'tipos de bebedouro' },
          { href: '/bebedouro-de-coluna', label: 'bebedouro de coluna' },
          { href: '/bebedouro-industrial-suspenso', label: 'bebedouro industrial suspenso' },
          { href: '/blog/bebedouro-coluna-ou-pressao', label: 'leia o guia completo' },
          { href: '/local/bebedouro-industrial-sao-paulo', label: 'atendimento em São Paulo' },
        ]}
      >
        <section id="o-que-e-bebedouro-de-bancada" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>O que é Bebedouro de Bancada?</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O <strong>Bebedouro de Bancada</strong> é um equipamento de refrigeração de água projetado para ser apoiado sobre superfícies planas — balcões, mesas ou suportes — em ambientes com espaço reduzido. Combina capacidade de resfriamento eficiente com dimensões compactas, atendendo escritórios, consultórios, refeitórios e linhas industriais de todos os portes.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Diferente dos modelos de chão, o bebedouro de bancada não exige obra de fixação e pode ser reposicionado conforme a necessidade do layout. É a escolha mais prática para quem precisa de hidratação contínua sem abrir mão de espaço útil no ambiente.
          </p>
        </section>

        <section id="como-funciona" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Como Funciona um Bebedouro de Bancada</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O princípio de funcionamento segue o ciclo de refrigeração por compressor: o equipamento retira calor do reservatório interno e mantém a água entre 4 °C e 10 °C. O compressor hermético reduz ruído e aumenta a vida útil, sendo o componente mais importante para avaliar a qualidade do modelo.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Modelos conectados à rede hidráulica recebem água continuamente, enquanto versões com reservatório próprio são abastecidas via garrafão de 20 litros ou manualmente. Em ambos os casos, o sistema de drenagem de condensação precisa ser previsto na instalação — requisito exigido pelas normas NR-24 e RDC 275 para ambientes de uso coletivo.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Modelos industriais de bancada costumam ter 2 ou 3 torneiras inox de acionamento frontal para atender diferentes pontos de retirada ao mesmo tempo. Essa configuração é especialmente útil em refeitórios com filas no horário de almoço e em linhas de produção com múltiplos postos de trabalho.
          </p>
        </section>

        <section id="tipos-e-modelos" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Tipos e Modelos Disponíveis</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20100%20e%2050%20litros%20inox%203%20e%202%20torneiras%20lado%20a%20lado.png"
              alt="bebedouro 100 e 50 litros inox 3 e 2 torneiras lado a lado"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            As capacidades variam de 5 litros (uso residencial leve) até 100 litros (industrial pesado). Modelos de 25 e 50 litros são os mais comuns em refeitórios corporativos e fábricas de médio porte. Modelos de 100 litros com 3 torneiras atendem turnos contínuos com alto volume de pessoas sem interrupções para reabastecimento.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Quanto ao material, bebedouros de bancada podem ser em aço inox AISI 304 — recomendado para ambientes industriais e alimentícios —, polipropileno de grau alimentar ou combinação de ambos. O inox é mais resistente à corrosão, mais fácil de higienizar e atende à RDC 275 da ANVISA para instalações em cozinhas industriais e refeitórios.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Há ainda modelos sem filtro, com filtro de sedimentos e com filtragem avançada (carvão ativado + UV). Para ambientes onde a qualidade da água da rede é incerta, a versão com filtragem completa é a mais indicada e pode ser exigida pela vigilância sanitária local em estabelecimentos de alimentação coletiva.
          </p>
        </section>
        <div style={{ clear: 'both' }} />

        <section id="aplicacoes-e-ambientes" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Aplicações e Ambientes Indicados</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img
              src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%2025%20e%2030%20litros%20inox%202%20torneiras%20industrial.png"
              alt="bebedouro 25 e 30 litros inox 2 torneiras industrial"
              className="rounded-lg object-cover w-2/5"
              style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
              loading="lazy"
            />
            O bebedouro bancada industrial é o modelo mais versátil do segmento. Pode ser instalado em refeitórios de fábricas, canteiros de obra, laboratórios, clínicas, escolas e supermercados. Sua forma compacta permite posicionamento em qualquer superfície nivelada sem necessidade de obra civil ou fixação permanente.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Em canteiros de obra e galpões logísticos, modelos robustos de 50 a 100 litros com corpo em inox são preferíveis por suportarem ambientes úmidos, poeira e variações de temperatura. Nesses locais, a NR-24 exige que o fornecimento de água potável seja garantido e que o equipamento esteja em conformidade com normas de saúde ocupacional.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para consultórios, escritórios e recepções, modelos menores de 5 a 15 litros com acabamento em inox polido ou branco se integram melhor ao ambiente. Esses modelos costumam ter painel frontal minimalista e operação silenciosa — características valorizadas em ambientes que exigem discrição e baixo nível de ruído.
          </p>
        </section>
        <div style={{ clear: 'both' }} />

        <section id="normas-e-certificacoes" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Normas e Certificações Obrigatórias</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A norma técnica <strong>NBR 13713</strong> da ABNT define os requisitos de segurança, desempenho e higiene para bebedouros de água, incluindo os modelos de bancada. Todo equipamento destinado a uso coletivo deve ser certificado conforme essa norma, que abrange testes de resistência elétrica, vedação e qualidade dos materiais em contato com a água.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O <strong>INMETRO</strong> certifica os bebedouros conforme a portaria vigente, garantindo que o modelo passou por avaliação de conformidade em laboratório credenciado. Ao adquirir um bebedouro de bancada, verifique sempre o selo INMETRO — ele é exigido em processos licitatórios públicos e em auditorias de saúde e segurança do trabalho.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A <strong>RDC 275</strong> da ANVISA estabelece procedimentos de higienização para equipamentos em contato com água potável e alimentos. Para cozinhas industriais e refeitórios, a higienização semestral deve ser documentada. A <strong>NR-24</strong> complementa essa exigência no contexto de saúde e conforto dos trabalhadores em ambientes industriais e canteiros de obra.
          </p>
        </section>

        <section id="como-escolher" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Como Escolher o Modelo Ideal</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O primeiro critério é a quantidade de usuários diários. Uma referência prática: para cada 20 pessoas em turno de 8 horas, reserve ao menos 10 litros de capacidade. Um refeitório com 80 funcionários em dois turnos demanda um modelo de 50 litros com 2 ou 3 torneiras para garantir abastecimento contínuo sem filas.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            O segundo critério é o tipo de abastecimento disponível. Se o local tem ponto de água e dreno instalados, prefira modelos com ligação direta à rede — eles eliminam o reabastecimento manual. Se não há infraestrutura hidráulica, modelos com reservatório e garrafão são a alternativa mais prática e de menor custo de instalação.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Por fim, avalie o material do gabinete. Aço inox AISI 304 é obrigatório em ambientes alimentícios e industriais. Para escritórios e ambientes controlados, modelos com gabinete em ABS de alta resistência são adequados e têm menor custo. Consulte o comparativo de <a href="/tipos-de-bebedouro" className="text-az hover:underline">tipos de bebedouro</a> para encontrar o formato mais adequado ao seu projeto.
          </p>
        </section>

        <section id="modelos-relacionados" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Modelos Relacionados</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Se o espaço disponível permite instalação no chão, o <a href="/bebedouro-de-coluna" className="text-az hover:underline">bebedouro de coluna</a> oferece maior capacidade e melhor ergonomia sem precisar de superfície de apoio. Para locais com restrição tanto no chão quanto no balcão, o <a href="/bebedouro-industrial-suspenso" className="text-az hover:underline">bebedouro industrial suspenso</a> é fixado na parede e libera totalmente o espaço abaixo.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Para aplicações de maior escala — plantas industriais, canteiros grandes, condomínios logísticos — o <a href="/bebedouro-industrial" className="text-az hover:underline">bebedouro industrial</a> de piso apresenta capacidades superiores a 100 litros e sistemas de refrigeração mais robustos. Ainda em dúvida entre os formatos? <a href="/blog/bebedouro-coluna-ou-pressao" className="text-az hover:underline">Leia o guia completo</a> com comparativo técnico e critérios de decisão para cada tipo de ambiente.
          </p>
        </section>

        <section id="onde-comprar" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Onde Comprar Bebedouro de Bancada</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            Ao comprar bebedouro de bancada, priorize fornecedores especializados que ofereçam assistência técnica, peças de reposição e higienização periódica. Além do preço de aquisição, avalie o custo total de propriedade: consumo energético (W/hora), frequência de manutenção recomendada e disponibilidade de técnicos na sua região.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            A JG Bebedouros atende todo o Brasil com venda, instalação e manutenção preventiva e corretiva de bebedouros compactos de bancada. Para projetos em São Paulo e região, consulte o <a href="/local/bebedouro-industrial-sao-paulo" className="text-az hover:underline">atendimento em São Paulo</a> com prazo de resposta em até 24 horas úteis.
          </p>
        </section>
      </PilarLayout>
      <Footer />
    </>
  )
}
