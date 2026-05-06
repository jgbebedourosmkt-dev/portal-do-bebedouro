export default function BannerJG() {
  return (
    <div
      className="rounded overflow-hidden p-5"
      style={{ background: 'linear-gradient(135deg, #061F38 0%, #0B3D6B 50%, #1A6B8A 100%)' }}
    >
      <div className="mb-3">
        <span
          className="text-[31px] font-black text-white leading-none"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          JG <span className="text-acc">Bebedouros</span>
        </span>
        <p className="text-[13px] text-white/60 mt-0.5">Fornecedor oficial do setor</p>
      </div>
      <p className="text-[16px] text-white/80 mb-4 leading-relaxed">
        Bebedouros industriais, corporativos e escolares. Qualidade INMETRO certificada há 20 anos.
      </p>
      <ul className="space-y-1.5 mb-4">
        {['Bebedouros industriais', 'Purificadores corporativos', 'Assistência técnica 24h'].map((item) => (
          <li key={item} className="flex items-center gap-2 text-[14px] text-white/70">
            <span className="text-acc text-[12px]">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="block w-full py-2.5 text-center text-[14px] font-black uppercase tracking-wide bg-acc text-[#111] hover:bg-yellow-300 transition-colors"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Solicite um orçamento →
      </a>
    </div>
  )
}
