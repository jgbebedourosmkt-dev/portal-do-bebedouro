# Tarefa Diaria - Producao de Post do Blog (Portal do Bebedouro)

Voce e responsavel por produzir 1 post do blog por execucao para o site portaldobebedouro.com.br. Execute os passos abaixo na ordem. Se qualquer passo falhar, PARE e reporte o erro - nao pule etapas nem invente dados.

IMPORTANTE: Nao execute nenhum git no repo portal-do-bebedouro. O Python cuida de toda a publicacao no site automaticamente - seu trabalho termina no PASSO 4. A rotacao da planilha tambem e feita pelo Python - nao tente rotacionar.

## CONFIGURACAO FIXA
- Repo de staging: https://github.com/jgbebedourosmkt-dev/seo-automation-pbr.git
- Branch alvo: main
- JSON da linha: saida_blog/linha_dados.json
- JSON da SERP (URLs): saida_blog/serp_urls.json
- JSON da SERP (conteudo): saida_blog/serp_content.json
- Destino do post gerado: saida_blog/post.json (mesmo repo de staging)
- NAO defina ogImage no JSON - o Python injeta a imagem do Pexels automaticamente apos detectar o post.json

## PASSO 1 - Clonar o repo de staging e ler os JSONs
1. git clone https://github.com/jgbebedourosmkt-dev/seo-automation-pbr.git /tmp/seo-pbr
2. Leia os 3 arquivos em /tmp/seo-pbr/saida_blog/: linha_dados.json, serp_urls.json, serp_content.json
3. Se qualquer um faltar ou estiver vazio: PARE - 'PASSO 1 FALHOU: arquivo nao encontrado'
4. Guarde meta.keyword de linha_dados.json

## PASSO 2 - Extrair variaveis

De linha_dados.json -> meta:
- keyword, titulo_h1, meta_title, meta_description, cta
- slug (sem /blog/ - somente o slug puro, ex: "como-escolher-bebedouro")
- categoria (mercado | legislacao | saude | guias | reviews | eventos)
- tipo (badge text, ex: "Guia Completo", "Analise de Mercado", "Review")
- angulo_editorial (tom e enfoque do artigo)
- h2s_sugeridos (H2s sugeridos pela planilha - use como base)
- tamanho_sugerido, read_time (inteiro estimado pelo Python)
- kws_secundarias, tags (lista de strings)
- links_internos (texto com ancora -> url a inserir no corpo)
- pilar_relacionado (slug do pilar para mencionar/linkar)

De serp_content.json:
- minimo_palavras_recomendado, media_palavras_top3
- concorrentes[].{titulo_pagina, num_palavras, intro, headings[]}

De serp_urls.json:
- resultados[].{posicao, url, titulo_serp, descricao_serp}

Analise SERP: intencao de busca, topicos cobertos por 2+ concorrentes (obrigatorios), diferenciacao possivel, tamanho minimo a superar.

## PASSO 3 - Escrever post.json

Crie /tmp/seo-pbr/saida_blog/post.json com esta estrutura exata (sem ogImage):

{
  "slug": "{slug}",
  "title": "{titulo_h1}",
  "excerpt": "{meta_description - literal da planilha, sem alteracao}",
  "categoria": "{categoria}",
  "badge": "{tipo}",
  "badgeVariant": "{vd|az|az3|acc|default}",
  "date": "{YYYY-MM-DD - data de hoje}",
  "author": "Redacao Portal do Bebedouro",
  "readTime": {read_time},
  "featured": false,
  "tags": ["tag1", "tag2"],
  "content": "<h2>Titulo</h2><p>Paragrafo.</p>..."
}

Regra badgeVariant por categoria:
- guias     -> "vd"
- saude     -> "vd"
- reviews   -> "acc"
- mercado   -> "az"
- legislacao -> "az3"
- eventos   -> "az"
- (outro)   -> "default"

### Campo "content" - HTML semantico puro

O content e uma string HTML renderizada com Tailwind Typography (classe prose). Use apenas elementos semanticos - NUNCA adicione classes Tailwind, estilos inline ou atributos desnecessarios nos elementos.

Elementos suportados:
  <h2>Titulo da secao</h2>
  <h3>Subtitulo</h3>
  <p>Paragrafo de texto.</p>
  <ul><li>Item de lista</li></ul>
  <ol><li>Item numerado</li></ol>
  <strong>negrito</strong>
  <a href="/slug-interno">texto ancora</a>
  <blockquote>citacao ou dado de destaque numerico</blockquote>

PROIBIDO no content: classes CSS, estilos inline, imagens, <img>, <div>, <section>, <figure>, qualquer atributo alem de href em <a>.

### Regras de escrita do content

Estrutura:
- 1a secao (featured-snippet): 40-60 palavras, responde diretamente a keyword, define o topico
- Demais secoes: baseadas em h2s_sugeridos (adapte titulos se necessario)
- Encerrar com secao de conclusao ou CTA editorial

Paragrafos:
- keyword no 1o paragrafo (primeiros 100 caracteres)
- Cada <p> tem maximo 3-4 frases. NUNCA agrupar todo o texto de uma secao em um unico bloco.
- Dividir sempre em multiplos <p> curtos - facilita leitura e espaco visual

Tamanho: total >= minimo_palavras_recomendado (se nao atingir, expanda secoes existentes)

Normas: mencionar NBR 13713, INMETRO, NR-24 ou RDC 275 quando relevante ao tema

Links internos:
- Inserir todos os links de links_internos naturalmente no corpo do texto
- Formato: <a href="/slug">ancora</a>
- Tambem linkar o pilar_relacionado se relevante

Tom: guiado por angulo_editorial. Adapte ao publico da categoria (ex: tecnico para legislacao, pratico para guias, persuasivo para reviews).

SEM imagens no corpo. O Python injeta a capa do Pexels como ogImage - o content so tem texto, titulos, listas, links e blockquotes.

### Checklist antes de salvar post.json

- [ ] Todos os campos presentes: slug, title, excerpt, categoria, badge, badgeVariant, date, author, readTime, featured, tags, content
- [ ] ogImage AUSENTE do JSON (Python injeta depois)
- [ ] excerpt = meta_description literal da planilha (sem alteracao)
- [ ] title = titulo_h1 literal da planilha (sem alteracao)
- [ ] keyword nos primeiros 100 caracteres do 1o paragrafo
- [ ] date = data de hoje no formato YYYY-MM-DD
- [ ] Todos os links de links_internos inseridos no content
- [ ] Palavras totais >= minimo_palavras_recomendado
- [ ] content sem classes CSS, sem imagens, sem tags <div>/<section>/<figure>
- [ ] content e uma string JSON valida (aspas internas escapadas como \", sem quebras de linha literais - use \n se necessario)

## PASSO 4 - Enviar para staging

Dentro de /tmp/seo-pbr:
  git config user.email "jgbebedourosmkt@gmail.com"
  git config user.name "SEO Automation"
  git config commit.gpgsign false
  git remote set-url origin https://<GITHUB_PAT>@github.com/jgbebedourosmkt-dev/seo-automation-pbr.git
  git add saida_blog/post.json
  git commit -m "post: {slug}"
  git push origin main

Confirme main -> main. Se falhar, PARE e reporte. NAO toque no repo portal-do-bebedouro.

## PASSO 5 - Relatorio final

post.json enviado para staging - Python detectara e fara a publicacao automaticamente (ogImage do Pexels sera injetado nesse momento).

Keyword: {keyword}
Slug: /artigo/{slug}
Palavras: ~{N} / minimo {minimo_palavras_recomendado}
Secoes H2: {lista dos titulos}
Tags: {lista}
Links internos: {X inseridos de Y disponiveis}
Badge: {tipo} ({badgeVariant})

ERROS: PARE, nao desfaca nada, reporte passo + erro exato + o que nao foi feito. Nunca invente dados nem toque no repo portal-do-bebedouro.
