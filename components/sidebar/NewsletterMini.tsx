export default function NewsletterMini() {
  return (
    <div className="rounded overflow-hidden bg-az p-4">
      <h3
        className="mb-1 text-[15px] font-black text-white"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Newsletter do Setor
      </h3>
      <p className="text-[12px] text-white/70 mb-3">
        Notícias e normas toda semana, direto no seu e-mail.
      </p>
      <form className="space-y-2">
        <input
          type="email"
          placeholder="seu@email.com"
          className="w-full px-3 py-2 text-[13px] bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-acc"
        />
        <button
          type="submit"
          className="w-full py-2 text-[12px] font-black uppercase tracking-wide bg-acc text-[#111] hover:bg-yellow-300 transition-colors"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Assinar grátis
        </button>
      </form>
    </div>
  )
}
