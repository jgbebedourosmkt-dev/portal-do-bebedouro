// Formulários do site: newsletter (faixa e lateral) e modal de orçamento.

async function enviar(endpoint: string, dados: unknown) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  })
  if (!res.ok) throw new Error(String(res.status))
}

function travar(form: HTMLFormElement, enviando: boolean) {
  const botao = form.querySelector<HTMLButtonElement>('button[type="submit"]')
  if (!botao) return
  botao.disabled = enviando
  botao.dataset.rotulo ??= botao.textContent ?? ''
  botao.textContent = enviando ? 'Enviando…' : botao.dataset.rotulo
}

function mostrarErro(form: HTMLFormElement, msg: string) {
  let erro = form.querySelector<HTMLElement>('.form-erro')
  if (!erro) {
    erro = document.createElement('p')
    erro.className = 'form-erro'
    erro.setAttribute('role', 'alert')
    form.append(erro)
  }
  erro.textContent = msg
}

// ---------- Newsletter ----------
document.querySelectorAll<HTMLFormElement>('[data-newsletter]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const fd = new FormData(form)
    travar(form, true)
    try {
      await enviar('/api/newsletter', {
        nome: fd.get('nome') ?? '',
        email: fd.get('email'),
        temas: fd.getAll('temas'),
      })
      form.innerHTML = '<p class="form-ok">Inscrição confirmada. Até a próxima edição!</p>'
    } catch {
      travar(form, false)
      mostrarErro(form, 'Não foi possível concluir a inscrição. Tente novamente em instantes.')
    }
  })
})

// ---------- Orçamento (modal) ----------
const dialogo = document.querySelector<HTMLDialogElement>('#orcamento')
const formOrc = dialogo?.querySelector<HTMLFormElement>('form')
const okOrc = dialogo?.querySelector<HTMLElement>('[data-ok]')

document.addEventListener('click', (e) => {
  const alvo = (e.target as HTMLElement).closest('[data-orcamento]')
  if (!alvo || !dialogo) return
  e.preventDefault()
  dialogo.showModal()
})

dialogo?.addEventListener('click', (e) => {
  // clique no fundo fecha
  if (e.target === dialogo) dialogo.close()
})

dialogo?.addEventListener('close', () => {
  if (okOrc && !okOrc.hidden && formOrc) {
    formOrc.reset()
    formOrc.hidden = false
    okOrc.hidden = true
  }
})

formOrc?.addEventListener('submit', async (e) => {
  e.preventDefault()
  const fd = new FormData(formOrc)
  travar(formOrc, true)
  try {
    await enviar('/api/orcamento', Object.fromEntries(fd))
    formOrc.hidden = true
    if (okOrc) okOrc.hidden = false
  } catch {
    mostrarErro(formOrc, 'Erro ao enviar. Tente por e-mail: jgbebedourosmkt@gmail.com')
  } finally {
    travar(formOrc, false)
  }
})
