const tickerItems = [
  'NBR 13713 atualizada entra em vigor em julho de 2025',
  'Mercado de bebedouros cresce 18% no primeiro trimestre',
  'INMETRO lança novo programa de certificação para purificadores',
  'Saúde da água: ANVISA publica nova resolução sobre padrões',
  'JG Bebedouros inaugura nova unidade em São Paulo',
  'Congresso Nacional de Bebedouros acontece em outubro em Brasília',
  'Vendas de bebedouros corporativos batem recorde histórico',
  'Nova norma ABNT define critérios para bebedouros escolares',
]

export default function Ticker() {
  const text = tickerItems.join('          •          ')

  return (
    <div
      className="bg-az overflow-hidden ticker-wrap"
      aria-label="Últimas notícias"
      aria-live="off"
    >
      <div className="flex items-stretch">
        <div className="flex-shrink-0 bg-acc px-4 py-2.5 flex items-center">
          <span
            className="text-[11px] font-black uppercase tracking-widest text-[#111]"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            URGENTE
          </span>
        </div>
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="flex whitespace-nowrap animate-ticker">
            <span className="text-white text-[13px] font-medium pr-16" style={{ fontFamily: 'var(--font-barlow)' }}>
              {text}
            </span>
            <span className="text-white text-[13px] font-medium pr-16" style={{ fontFamily: 'var(--font-barlow)' }}>
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
