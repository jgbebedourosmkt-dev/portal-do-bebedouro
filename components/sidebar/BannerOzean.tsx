export default function BannerOzean() {
  return (
    <div
      className="rounded overflow-hidden p-5 relative"
      style={{ background: '#070B13' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-4 right-4 w-28 h-28 rounded-full"
        style={{ background: 'rgba(36,144,184,.14)' }}
      />
      <div
        className="absolute bottom-8 right-0 w-20 h-20 rounded-full"
        style={{ background: 'rgba(36,144,184,.10)' }}
      />
      <div className="relative z-10">
        <div className="mb-2">
          <span
            className="text-[41px] font-black tracking-tight leading-none"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            <span className="text-white">OZE</span>
            <span className="text-az3">AN</span>
          </span>
          <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold">Purificadores</p>
        </div>
        <p className="text-[14px] text-white/60 mb-4 leading-relaxed italic">
          &ldquo;O único purificador feito para escritórios corporativos de alto tráfego&rdquo;
        </p>
        <div className="flex items-center gap-2 mb-4">
          {['ISO 9001', 'INMETRO', 'ANVISA'].map((cert) => (
            <span
              key={cert}
              className="px-2 py-0.5 text-[11px] font-bold border border-white/20 text-white/50 uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {cert}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="block w-full py-2.5 text-center text-[14px] font-black uppercase tracking-wide border border-white/30 text-white/85 hover:bg-white/5 transition-colors"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Conheça a linha Ozean →
        </a>
      </div>
    </div>
  )
}
