export default function NewsletterBand() {
  const temas = [
    'Normas & Legislação',
    'Mercado & Setor',
    'Saúde da Água',
    'Reviews & Guias',
  ]

  return (
    <section
      className="w-full py-16"
      style={{
        background: 'linear-gradient(135deg, #051C30 0%, #0B3D6B 50%, #0A3018 100%)',
      }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-16 px-8">
        {/* Esquerda */}
        <div>
          <h2
            className="mb-2 text-[50px] font-black text-white leading-tight"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Fique por dentro do{' '}
            <span className="text-acc">setor de bebedouros</span>
          </h2>
          <p className="text-[18px] text-white/70 mb-6">
            Receba toda semana as principais notícias, atualizações de normas e tendências do mercado diretamente no seu e-mail.
          </p>
          <ul className="space-y-2 mb-8">
            {temas.map((tema) => (
              <li key={tema} className="flex items-center gap-3 text-[17px] text-white/80">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-acc/20 flex items-center justify-center">
                  <span className="text-acc text-[12px] font-black">✓</span>
                </span>
                {tema}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 text-center">
            {[['12.400', 'assinantes'], ['96%', 'satisfeitos'], ['Semanal', 'frequência']].map(([num, label]) => (
              <div key={label}>
                <p
                  className="text-[34px] font-black text-acc leading-none"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {num}
                </p>
                <p className="text-[13px] text-white/50 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Direita — form */}
        <div className="flex flex-col justify-center">
          <form className="space-y-4 bg-white/5 rounded p-6 border border-white/10">
            <div>
              <label className="block text-[14px] font-bold text-white/60 mb-1 uppercase tracking-wide">
                Seu nome
              </label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/30 text-[17px] focus:outline-none focus:border-acc"
              />
            </div>
            <div>
              <label className="block text-[14px] font-bold text-white/60 mb-1 uppercase tracking-wide">
                Seu e-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/30 text-[17px] focus:outline-none focus:border-acc"
              />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white/60 mb-2 uppercase tracking-wide">
                Temas de interesse
              </p>
              <div className="grid grid-cols-2 gap-2">
                {temas.map((tema) => (
                  <label key={tema} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-acc" />
                    <span className="text-[14px] text-white/70">{tema}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 text-[17px] font-black uppercase tracking-wide bg-acc text-[#111] hover:bg-yellow-300 transition-colors"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Assinar newsletter gratuitamente →
            </button>
            <p className="text-center text-[13px] text-white/30">
              Sem spam. Cancele quando quiser.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
