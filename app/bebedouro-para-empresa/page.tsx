import { buildMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PilarLayout from '@/components/pilar/PilarLayout'

export const metadata = buildMetadata({
  title: 'Tipos de Bebedouro: Guia Completo',
  description: 'Tipos de Bebedouro: tudo o que você precisa saber para escolher o modelo ideal para sua aplicação.',
  slug: 'tipos-de-bebedouro',
})

const faqs = [
  {
    question: 'Qual é a diferença entre bebedouro de coluna e de bancada?',
    answer:
      'O bebedouro de coluna é autossustentado, com base própria no chão, indicado para espaços amplos e maior capacidade de reservatório (até 200 litros). O bebedouro de bancada é compacto, apoiado sobre uma superfície, com capacidade menor (até 50 litros), ideal para escritórios e recepções.',
  },
  {
    question: 'Bebedouro industrial precisa de instalação especial?',
    answer:
      'Sim. Os modelos conectados à rede hidráulica precisam de ponto de água e energia elétrica. Já os modelos de garrafão dispensam obras, pois funcionam com galão de 20 litros. A instalação deve seguir as recomendações do fabricante e as normas NBR 13713 e NR-24.',
  },
  {
    question: 'O que é a NBR 13713 e por que ela é importante?',
    answer:
      'A NBR 13713 é a norma da ABNT que estabelece os requisitos técnicos de desempenho, segurança e higiene para bebedouros de água. Ela define critérios como temperatura máxima da água gelada (12°C), vedação das torneiras, materiais de contato e resistência estrutural. Adquirir um equipamento certificado garante qualidade e conformidade legal.',
  },
  {
    question: 'Qual tipo de bebedouro é obrigatório em canteiros de obra?',
    answer:
      'A NR-24 (Norma Regulamentadora do Ministério do Trabalho) exige o fornecimento de água potável em locais de trabalho, incluindo canteiros de obra. O bebedouro de obra industrial com reservatório de inox é o mais indicado, pois suporta uso intensivo, alta temperatura e exposição constante a poeira.',
  },
  {
    question: 'Bebedouro de garrafão ou bebedouro industrial: qual é melhor?',
    answer:
      'Depende do contexto. O bebedouro de garrafão é prático para locais sem rede hidráulica ou com poucos usuários. O bebedouro industrial conectado à rede é mais econômico em longo prazo, dispensa a compra de galões e possui maior capacidade de resfriamento, sendo ideal para ambientes com muitos usuários simultâneos.',
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
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', slug: '' },
              { name: 'Tipos de Bebedouro: Guia Completo' },
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
        title="Tipos de Bebedouro: Guia Completo"
        excerpt="Tipos de Bebedouro: conheça os modelos industriais, de coluna, bancada e garrafão para escolher o ideal para sua empresa."
        breadcrumbLabel="Tipos de Bebedouro: Guia Completo"
        breadcrumbSlug="tipos-de-bebedouro"
        ctaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=pilar&utm_campaign=tipos-de-bebedouro"
        ctaLabel="Solicitar orcamento"
        sidebarCtaHref="https://jgbebedouros.com.br?utm_source=portalbebedouro&utm_medium=sidebar&utm_campaign=tipos-de-bebedouro"
        finalCtaTitle="Precisa de Tipos de Bebedouro?"
        finalCtaDesc="A JG Bebedouros oferece venda e manutencao em todo o Brasil."
        tocItems={[
          { href: '#o-que-e-um-bebedouro', label: 'O que é um Bebedouro' },
          { href: '#bebedouro-industrial', label: 'Bebedouro Industrial' },
          { href: '#bebedouro-de-coluna', label: 'Bebedouro de Coluna' },
          { href: '#bebedouro-de-bancada', label: 'Bebedouro de Bancada' },
          { href: '#bebedouro-de-garrafao', label: 'Bebedouro de Garrafão' },
          { href: '#bebedouro-suspenso-e-com-sensor', label: 'Bebedouro Suspenso e com Sensor' },
          { href: '#como-escolher-o-tipo-ideal', label: 'Como Escolher o Tipo Ideal' },
          { href: '#normas-e-certificacoes', label: 'Normas e Certificações' },
          { href: '#bebedouro-por-tipo-de-aplicacao', label: 'Bebedouro por Tipo de Aplicação' },
        ]}
        stats={[
          { valor: '25 a 200 L', label: 'Capacidade dos reservatórios industriais' },
          { valor: 'NBR 13713', label: 'Norma ABNT para bebedouros' },
          { valor: 'NR-24', label: 'Norma que torna o bebedouro obrigatório' },
          { valor: '2.400', label: 'Buscas mensais para Tipos de Bebedouro' },
        ]}
        faqs={faqs}
        internalLinks={[
          { href: '/bebedouro-industrial', label: 'Bebedouro Industrial' },
          { href: '/bebedouro-inox', label: 'Bebedouro Inox' },
          { href: '/bebedouro', label: 'Bebedouro' },
          { href: '/filtro-industrial', label: 'Filtro Industrial' },
          { href: '/bebedouro-com-motor', label: 'bebedouro com motor' },
          { href: '/bebedouro-de-coluna', label: 'bebedouro de coluna' },
          { href: '/bebedouro-de-agua', label: 'bebedouro de água' },
          { href: '/bebedouro-de-obra', label: 'bebedouro de obra' },
        ]}
      >
        <section id="o-que-e-um-bebedouro" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>O que é um Bebedouro</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Tipos de Bebedouro são as diferentes versões de equipamentos para fornecimento de água potável filtrada ou gelada. Os principais modelos incluem bebedouro de coluna, de bancada, de garrafão e suspenso, cada um adequado a um ambiente específico — de canteiros de obra a escritórios e indústrias.</p>
        </section>

        <section id="bebedouro-industrial" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro Industrial: O Mais Completo do Mercado</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">O <a href="/bebedouro-industrial" className="text-az hover:underline">Bebedouro Industrial</a> é o modelo mais robusto e versátil disponível no mercado brasileiro. Ele possui reservatório próprio de inox, com capacidades que variam de 25 a 200 litros, e sistema de refrigeração por compressor ou placa eletrônica. É o tipo mais indicado para empresas, indústrias, obras e ambientes com grande circulação de pessoas.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Diferente do filtro ou purificador doméstico, o bebedouro industrial é projetado para uso intensivo e contínuo. O reservatório em aço inox 304 garante higiene e durabilidade, atendendo às exigências da NR-24 e da NBR 13713. Modelos com torneiras múltiplas — duas ou três saídas — reduzem filas e aumentam a eficiência no atendimento.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Dentro da categoria industrial, existem subtipos que se diferenciam pela estrutura física: coluna, bancada, suspenso e com sensor. Cada um tem vantagens específicas dependendo do espaço disponível, do número de usuários e da necessidade de mobilidade ou fixação permanente no ambiente.</p>
        </section>

        <section id="bebedouro-de-coluna" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro de Coluna</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%20100%20e%2050%20litros%20inox%203%20e%202%20torneiras%20lado%20a%20lado.png" alt="bebedouro 100 e 50 litros inox 3 e 2 torneiras lado a lado" className="rounded-lg object-cover w-2/5" style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }} loading="lazy" />
            O <a href="/bebedouro-de-coluna" className="text-az hover:underline">bebedouro de coluna</a> é autossustentado e possui base própria que apoia diretamente no chão, sem necessidade de bancada ou parede. É o modelo mais comum em canteiros de obra, refeitórios industriais, galpões e espaços amplos. Sua estrutura robusta em inox suporta uso intensivo e condições adversas de temperatura e poeira.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">As capacidades de reservatório variam entre 25, 50, 100 e 200 litros, permitindo escolher o tamanho exato para a demanda do ambiente. Modelos com 100 e 200 litros atendem facilmente grupos de 100 a 300 funcionários por turno, sem necessidade de recarga frequente. O sistema de refrigeração por compressor garante temperatura constante mesmo em locais sem climatização.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Uma vantagem importante do bebedouro de coluna é a possibilidade de deslocamento dentro do ambiente quando conectado a mangueira flexível ou quando se usa o modelo de garrafão acoplado. Isso torna o equipamento flexível para obras em diferentes fases de construção ou para empresas que reorganizam frequentemente o layout do espaço.</p>
        </section>
        <div style={{ clear: 'both' }} />

        <section id="bebedouro-de-bancada" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro de Bancada</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">O bebedouro de bancada é compacto e projetado para ser apoiado sobre uma superfície plana, como uma prateleira, balcão ou suporte específico. É ideal para escritórios, recepções, clínicas e pequenas empresas com menor circulação de pessoas. Seu design mais discreto se adapta melhor a ambientes corporativos com restrição de espaço no piso.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Com capacidades entre 25 e 50 litros, o bebedouro de bancada em inox atende confortavelmente até 50 usuários por turno. O reservatório em aço inox 304 e as torneiras cromadas facilitam a limpeza e garantem higiene conforme as exigências da Anvisa (RDC 275). Modelos com torneira de água gelada e natural são os mais procurados para o ambiente corporativo.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Muitos modelos de bancada já vêm com suporte de coluna opcional, permitindo transformar o equipamento em um bebedouro de piso quando necessário. Essa flexibilidade reduz o custo de aquisição para empresas que podem precisar de ambas as configurações ao longo do tempo.</p>
        </section>

        <section id="bebedouro-de-garrafao" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro de Garrafão</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">
            <img src="https://raw.githubusercontent.com/jgbebedourosmkt-dev/portal-do-bebedouro-imagens/main/bebedouro%2025%20e%2030%20litros%20inox%202%20torneiras%20industrial.png" alt="bebedouro 25 e 30 litros inox 2 torneiras industrial" className="rounded-lg object-cover w-2/5" style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }} loading="lazy" />
            O <a href="/bebedouro-de-agua" className="text-az hover:underline">bebedouro de água</a> do tipo garrafão utiliza galão de 20 litros e dispensa conexão à rede hidráulica. É a solução mais indicada para locais sem ponto de água disponível, como escritórios temporários, eventos e locais de difícil acesso hidráulico. A troca do galão é simples e pode ser feita por qualquer funcionário sem ferramentas.
          </p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Existem modelos de garrafão com refrigeração por compressor, que gelam a água de forma eficiente, e modelos sem refrigeração, chamados de purificadores por gravidade. A principal limitação é a necessidade de reposição frequente do galão e o custo contínuo com a compra de água. Para ambientes com mais de 30 usuários por turno, o bebedouro industrial conectado à rede é mais econômico a longo prazo.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">O bebedouro de garrafão também é popular em academias e pequenas clínicas por sua mobilidade. Ele pode ser deslocado de uma sala para outra sem necessidade de obra ou novo ponto hidráulico, o que facilita a adaptação do espaço sem custos adicionais de instalação.</p>
        </section>
        <div style={{ clear: 'both' }} />

        <section id="bebedouro-suspenso-e-com-sensor" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro Suspenso e com Sensor</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">O bebedouro suspenso é fixado diretamente na parede ou em estrutura elevada, sem contato com o chão. Esse modelo é especialmente indicado para locais onde a higiene do piso é crítica, como cozinhas industriais, hospitais, laboratórios e unidades de produção alimentar. A fixação elevada facilita a limpeza do ambiente ao redor sem obstáculos no piso.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Já o bebedouro com sensor sem contato é acionado pela aproximação da mão ou do copo, sem necessidade de tocar na torneira. Esse recurso reduz drasticamente a contaminação cruzada e é altamente recomendado para ambientes com grande fluxo de pessoas, como aeroportos, shoppings, hospitais e escolas. A tecnologia infravermelha garante precisão e economia de água.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Ambos os modelos — suspenso e com sensor — estão disponíveis em versões industriais com reservatório de inox, atendendo às normas NBR 13713 e INMETRO. Eles representam a evolução dos bebedouros tradicionais, combinando higiene, tecnologia e praticidade em um único equipamento de alta durabilidade.</p>
        </section>

        <section id="como-escolher-o-tipo-ideal" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Como Escolher o Tipo Ideal de Bebedouro</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">A escolha do tipo de <a href="/bebedouro" className="text-az hover:underline">Bebedouro</a> correto começa pela estimativa de usuários. A regra prática é dimensionar ao menos 1 litro de capacidade de reservatório para cada 10 usuários por turno. Assim, um ambiente com 200 funcionários precisa de, no mínimo, um bebedouro de 25 litros para cada grupo de 50 pessoas, ou um modelo de 100 litros centralizado.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">O tipo de ambiente define o modelo: escritórios preferem bebedouros de bancada ou coluna de até 50 litros; canteiros de obra exigem modelos robustos de 100 a 200 litros com certificação INMETRO; ambientes sem rede hidráulica precisam do modelo de garrafão. Para locais com exigência de alta higiene, priorize modelos com sensor e <a href="/bebedouro-inox" className="text-az hover:underline">Bebedouro Inox</a>.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Considere também o sistema de refrigeração: locais muito quentes ou sem climatização exigem compressor, que é mais potente e mantém a temperatura mesmo em dias de pico. O modelo com placa eletrônica é mais silencioso e econômico em energia, mas pode ter dificuldade em gelar grandes volumes em ambientes com temperatura acima de 35°C.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Para ambientes que exigem tratamento adicional da água — como fábricas, hospitais ou locais com rede de qualidade duvidosa — considere combinar o bebedouro com um <a href="/filtro-industrial" className="text-az hover:underline">Filtro Industrial</a>. Essa combinação garante a remoção de cloro, sedimentos e microrganismos antes do armazenamento no reservatório, elevando a qualidade da água servida.</p>
        </section>

        <section id="normas-e-certificacoes" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Normas e Certificações: NBR 13713, INMETRO e NR-24</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">A NBR 13713 é a norma técnica da ABNT que estabelece os requisitos mínimos de desempenho, segurança e higiene para bebedouros de água. Ela define critérios como temperatura máxima da água gelada (12°C), vedação das torneiras, resistência dos materiais e acabamento interno do reservatório. Todo bebedouro comercializado no Brasil deve atender a essa norma para garantir a segurança do consumidor.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">O selo INMETRO é obrigatório para bebedouros fabricados ou importados para o mercado nacional. Ele certifica que o equipamento passou por testes de laboratório e atende às normas de segurança elétrica e higiene alimentar. Ao adquirir um bebedouro, verifique sempre a presença do selo INMETRO e o número de certificação, que pode ser consultado diretamente no site da autarquia.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">A NR-24 (Norma Regulamentadora nº 24 do Ministério do Trabalho) torna obrigatório o fornecimento de água potável para todos os trabalhadores em locais de trabalho. Ela especifica que a água deve ser fresca, potável e fornecida de forma higiênica — o que na prática exige o uso de bebedouros industriais certificados. O descumprimento pode resultar em multas e até interdição do estabelecimento.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">A RDC 275 da Anvisa complementa as normas acima ao estabelecer procedimentos operacionais padronizados para a higienização de equipamentos em contato com água potável. A limpeza periódica do reservatório e das torneiras do bebedouro é obrigatória e deve ser registrada em fichas de controle de higiene para fins de fiscalização.</p>
        </section>

        <section id="bebedouro-por-tipo-de-aplicacao" className="mb-12 scroll-mt-20">
          <h2 className="text-[30px] font-black text-txt mb-4 pb-2 border-b-2 border-borda" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Bebedouro por Tipo de Aplicação</h2>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Em canteiros de obra, o <a href="/bebedouro-de-obra" className="text-az hover:underline">bebedouro de obra</a> industrial de coluna com 100 ou 200 litros é o modelo mais indicado. Ele suporta poeira, calor intenso, variações de temperatura e uso intensivo por centenas de trabalhadores. O reservatório em inox 304 resiste à corrosão e facilita a sanitização periódica exigida pela NR-24.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Para indústrias e galpões, o <a href="/bebedouro-com-motor" className="text-az hover:underline">bebedouro com motor</a> (compressor) de alta capacidade é essencial, especialmente em regiões de clima quente. A instalação próxima a pontos de descanso e refeitórios melhora a logística de hidratação dos trabalhadores e reduz o tempo de parada. Modelos com 2 a 3 torneiras atendem filas simultâneas com maior eficiência operacional.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Em escritórios corporativos, o bebedouro de bancada em inox ou o de coluna compacto (25 a 50 litros) é suficiente para equipes de até 30 pessoas por andar. Modelos com design premium e acabamento escovado se integram melhor ao ambiente corporativo sem comprometer a funcionalidade e a capacidade de resfriamento.</p>
          <p className="mb-4 text-[16px] text-txt2 leading-relaxed">Para academias e espaços de alta demanda pontual — onde muitas pessoas se hidratam em curtos intervalos — o modelo de coluna com compressor e torneira de água gelada é indispensável. A alta rotatividade exige resfriamento rápido e contínuo, que só o compressor garante com eficiência em dias de maior movimento. A higienização frequente das torneiras também é fundamental nesses ambientes de uso intensivo.</p>
        </section>
      </PilarLayout>
      <Footer />
    </>
  )
}
