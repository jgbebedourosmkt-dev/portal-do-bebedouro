import { getCollection } from 'astro:content'
import type { Faq } from './schema'

/** Página local normalizada, venha de content/local/*.json ou das cidades fixas abaixo. */
export interface Local {
  slug: string
  name: string
  prep: string
  state: string
  stateAbbr: string
  h1: string
  metaTitle: string
  metaDescription: string
  intro?: string
  html: string
  faqs: Faq[]
}

// Cidades que existiam só no código do site anterior (sem JSON). Mantidas para não quebrar URLs indexadas.
const FIXAS: Record<string, { name: string; state: string; stateAbbr: string; region: string }> = {
  'bebedouro-industrial-sao-paulo': { name: 'São Paulo', state: 'São Paulo', stateAbbr: 'SP', region: 'maior polo industrial e comercial do Brasil, com mais de 150 mil indústrias registradas' },
  'bebedouro-industrial-belo-horizonte': { name: 'Belo Horizonte', state: 'Minas Gerais', stateAbbr: 'MG', region: 'principal hub industrial do interior brasileiro, referência em metalurgia e tecnologia' },
  'bebedouro-industrial-curitiba': { name: 'Curitiba', state: 'Paraná', stateAbbr: 'PR', region: 'polo automotivo e de tecnologia do Sul do Brasil, com forte setor de manufatura' },
  'bebedouro-industrial-porto-alegre': { name: 'Porto Alegre', state: 'Rio Grande do Sul', stateAbbr: 'RS', region: 'centro econômico do Rio Grande do Sul, forte em agronegócio e indústria' },
  'bebedouro-industrial-recife': { name: 'Recife', state: 'Pernambuco', stateAbbr: 'PE', region: 'maior polo econômico do Nordeste, com crescente setor de serviços e logística' },
  'bebedouro-industrial-fortaleza': { name: 'Fortaleza', state: 'Ceará', stateAbbr: 'CE', region: 'principal polo industrial do Nordeste, destaque em têxtil, calçados e tecnologia' },
  'bebedouro-industrial-manaus': { name: 'Manaus', state: 'Amazonas', stateAbbr: 'AM', region: 'sede da Zona Franca de Manaus, um dos maiores parques industriais do país' },
  'bebedouro-industrial-brasilia': { name: 'Brasília', state: 'Distrito Federal', stateAbbr: 'DF', region: 'capital federal com grande concentração de empresas de serviços e órgãos governamentais' },
  'bebedouro-industrial-salvador': { name: 'Salvador', state: 'Bahia', stateAbbr: 'BA', region: 'polo petroquímico e industrial da Bahia, com forte presença do setor de logística' },
  'bebedouro-industrial-vitoria': { name: 'Vitória', state: 'Espírito Santo', stateAbbr: 'ES', region: 'importante polo portuário e industrial do Sudeste, destaque em siderurgia e celulose' },
  'bebedouro-industrial-goiania': { name: 'Goiânia', state: 'Goiás', stateAbbr: 'GO', region: 'centro do agronegócio e logística do Centro-Oeste brasileiro' },
  'bebedouro-industrial-campinas': { name: 'Campinas', state: 'São Paulo', stateAbbr: 'SP', region: 'segundo maior polo tecnológico e industrial do estado de São Paulo' },
}

const capitalizar = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

function htmlFixo(name: string) {
  const vantagens = [
    ['Entrega local', `Prazo reduzido e frete mais acessível para ${name} e região metropolitana.`],
    ['Assistência técnica', 'Manutenção preventiva e corretiva com técnicos na sua cidade.'],
    ['Suporte ágil', 'Atendimento presencial rápido em caso de emergência ou falha no equipamento.'],
  ]
  const modelos = [
    ['Bebedouro industrial inox 30 L/h', '30 L/h', 'Até 100 colaboradores'],
    ['Bebedouro industrial inox 50 L/h', '50 L/h', '100 a 200 colaboradores'],
    ['Bebedouro industrial inox 100 L/h', '100 L/h', '200 a 400 colaboradores'],
    ['Bebedouro industrial de pressão', '20–50 L/h', 'Áreas de produção e galpões'],
  ]
  return (
    `<section><h2>Vantagens de comprar bebedouro industrial em ${name}</h2><div class="grade-cards">` +
    vantagens.map(([t, d]) => `<div class="card-info"><h3>${t}</h3><p>${d}</p></div>`).join('') +
    `</div></section><section><h2>Modelos disponíveis para ${name}</h2><div class="tabela-rolagem"><table>` +
    `<thead><tr><th>Modelo</th><th>Capacidade</th><th>Indicado para</th></tr></thead><tbody>` +
    modelos.map(([m, c, i]) => `<tr><td><strong>${m}</strong></td><td>${c}</td><td>${i}</td></tr>`).join('') +
    `</tbody></table></div></section>`
  )
}

export async function getLocais(): Promise<Local[]> {
  const json = await getCollection('locais')
  const locais: Local[] = json.map(({ id, data }) => {
    const titulo = data.h1 ?? `Bebedouro Industrial ${data.prep} ${data.name} — ${data.stateAbbr}`
    return {
      slug: id,
      name: data.name,
      prep: data.prep,
      state: data.state,
      stateAbbr: data.stateAbbr,
      h1: data.h1 ?? `Bebedouro Industrial ${data.prep} ${data.name}`,
      metaTitle: titulo,
      metaDescription: data.metaDescription ?? '',
      intro: data.contextoComercial,
      html: data.content ?? '',
      faqs: data.faqs?.length
        ? data.faqs
        : [
            {
              question: `Onde comprar bebedouro industrial ${data.prep} ${data.name}?`,
              answer: `${capitalizar(data.prep)} ${data.name} você encontra bebedouros industriais na JG Bebedouros, com atendimento local, entrega e instalação na região.`,
            },
            {
              question: `Qual o prazo de entrega de bebedouro industrial ${data.prep} ${data.name}?`,
              answer: `Para ${data.name} e região, o prazo costuma ser de 3 a 7 dias úteis após a confirmação do pedido. Consulte disponibilidade do modelo desejado.`,
            },
          ],
    }
  })

  const existentes = new Set(locais.map((l) => l.slug))
  for (const [slug, c] of Object.entries(FIXAS)) {
    if (existentes.has(slug)) continue
    locais.push({
      slug,
      name: c.name,
      prep: 'em',
      state: c.state,
      stateAbbr: c.stateAbbr,
      h1: `Bebedouro Industrial em ${c.name} — ${c.stateAbbr}`,
      metaTitle: `Bebedouro Industrial em ${c.name} — ${c.stateAbbr}: Fornecedores e Preços`,
      metaDescription: `Bebedouro industrial em ${c.name}/${c.stateAbbr}. Venda e manutenção com atendimento local. Solicite orçamento grátis.`,
      intro: `${c.name} é ${c.region}. Fornecedores especializados em bebedouros industriais para empresas e galpões de todos os tamanhos.`,
      html: htmlFixo(c.name),
      faqs: [
        {
          question: `Onde comprar bebedouro industrial em ${c.name}?`,
          answer: `Em ${c.name} você encontra bebedouros industriais na JG Bebedouros, com atendimento local, entrega e instalação na região. Entre em contato para verificar disponibilidade e prazo.`,
        },
        {
          question: `Qual o prazo de entrega de bebedouro industrial em ${c.name}?`,
          answer: `Para ${c.name} e região metropolitana, o prazo costuma ser de 3 a 7 dias úteis após a confirmação do pedido. Consulte disponibilidade do modelo desejado.`,
        },
      ],
    })
  }
  return locais.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
}
