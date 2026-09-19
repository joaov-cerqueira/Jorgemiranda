JORGE MIRANDA — LANDING PAGE ESTÁTICA PARA VERCEL

ARQUIVOS
- index.html
- styles.css
- script.js
- vercel.json
- robots.txt
- sitemap.xml
- assets/jorge-original.jpg
- assets/favicon.svg

ANTES DE PUBLICAR
1. Abra script.js e troque:
   whatsapp: "55SEUNUMERO"
   Exemplo: 5521999999999

2. Em index.html, robots.txt e sitemap.xml troque:
   https://SEU-DOMINIO.vercel.app/
   pelo endereço real depois que a Vercel gerar o domínio.

3. FOTO SEM FUNDO (recomendado):
   salve a PNG profissional em assets/jorge-sem-fundo.png
   e em index.html troque:
   src="/assets/jorge-original.jpg"
   por:
   src="/assets/jorge-sem-fundo.png"

4. Depoimentos:
   troque Cliente 1, 2 e 3 pelos depoimentos REAIS.

COMO PUBLICAR NA VERCEL
- Suba TODOS estes arquivos para a RAIZ do repositório no GitHub.
- O arquivo index.html precisa ficar na raiz, ao lado de styles.css.
- Na Vercel: Add New > Project > importe o repositório.
- Framework Preset: Other.
- Root Directory: deixe em branco se estes arquivos estão na raiz.
- Build Command: deixe vazio.
- Output Directory: deixe vazio.
- Deploy.

A página não usa React, npm, build ou dependências externas.
