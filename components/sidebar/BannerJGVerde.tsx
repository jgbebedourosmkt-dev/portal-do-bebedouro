export default function BannerJGVerde() {
  return (
    <div
      className="rounded overflow-hidden p-5"
      style={{ background: 'linear-gradient(135deg, #0E3318 0%, #25A050 100%)' }}
    >
      <div className="mb-2">
        <span
          className="text-[26px] font-black text-white leading-none"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          JG Bebedouros
        </span>
        <p className="text-[13px] text-white/60 mt-0.5">Condomínios & Escolas</p>
      </div>
      <p className="text-[16px] text-white/80 mb-4 leading-relaxed">
        Solução completa para condomínios residenciais e instituições de ensino. Manutenção inclusa.
      </p>
      <a
        href="#"
        className="block w-full py-2.5 text-center text-[14px] font-black uppercase tracking-wide bg-white text-vd hover:bg-green-50 transition-colors"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Saiba mais →
      </a>
    </div>
  )
}
