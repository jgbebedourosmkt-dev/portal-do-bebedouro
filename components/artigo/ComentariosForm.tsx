'use client'

import { useState } from 'react'

export default function ComentariosForm() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', comentario: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="mt-12 border-t border-borda pt-8">
      <h2
        className="mb-6 text-[29px] font-black text-txt"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Deixe seu comentário
      </h2>

      {enviado ? (
        <div className="rounded bg-vd/10 border border-vd2 px-6 py-5">
          <p
            className="text-[19px] font-black text-vd"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Comentário enviado!
          </p>
          <p className="mt-1 text-[15px] text-txt2">
            Obrigado pela sua participação. Seu comentário será publicado após moderação.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-[14px] font-bold text-txt2">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                className="w-full rounded border border-borda px-3 py-2 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-[14px] font-bold text-txt2">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                className="w-full rounded border border-borda px-3 py-2 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-bold text-txt2">
              Comentário <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={form.comentario}
              onChange={(e) => setForm({ ...form, comentario: e.target.value })}
              placeholder="Escreva seu comentário..."
              className="w-full rounded border border-borda px-3 py-2 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none resize-none"
            />
          </div>
          <p className="text-[13px] text-txt3">
            Seu e-mail não será publicado. Comentários passam por moderação antes de aparecer.
          </p>
          <button
            type="submit"
            className="px-8 py-2.5 bg-az text-white text-[15px] font-black uppercase tracking-wide hover:bg-az2 transition-colors rounded"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Enviar comentário
          </button>
        </form>
      )}
    </section>
  )
}
