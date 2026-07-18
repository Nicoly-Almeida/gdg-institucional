# Handoff: Site Institucional GDG João Pessoa

## Overview
Site institucional da comunidade **Google Developer Groups João Pessoa** — tema **claro (light)**. Apresenta a comunidade e funciona como **vitrine de eventos**: destaca o **próximo evento** (DevFest 2026) e lista as **edições passadas** com filtro por tipo. Faz parte do **mesmo app Next.js** da landing do DevFest (ver seção *Relação com a landing do DevFest*).

Arquivo de referência: `GDG JP Institucional.dc.html`.

## About the Design Files
Os arquivos `.dc.html` são **referências de design em HTML** (protótipos de aparência e comportamento), **não** código de produção. Usam um runtime interno de componentes que **não deve ser portado**.

Recriar em **Next.js 14+ (App Router) + TypeScript**, com **Tailwind CSS**, **Framer Motion** (revelações ao rolar), **next/font** (Sora, Figtree, IBM Plex Mono) e **next/image** para as logos.

> **Nota importante sobre estado/reatividade:** no protótipo, o realce do filtro ativo teve que ser feito com nós condicionais por uma limitação do runtime de preview (holes de `style` não repintavam em re-render). **Isso é irrelevante no Next/React** — use `useState` normalmente e estilos condicionais (`className`/`style`) que o React reconcilia sem problema. Não replique o workaround.

Estrutura sugerida (compartilhada com a landing):
```
app/
  layout.tsx              # fontes, metadata, <html lang="pt-BR">
  page.tsx                # SITE INSTITUCIONAL (esta entrega)
  devfest-2026/page.tsx   # landing do DevFest (handoff separado)
components/institucional/
  Nav.tsx  Hero.tsx  StatsStrip.tsx  ProximoEvento.tsx
  Eventos.tsx  Sobre.tsx  ComunidadeCTA.tsx  Footer.tsx
  Reveal.tsx  Ambient.tsx  # camada de blobs esfumaçados
lib/institucional-data.ts # eventos passados, stats, formatos
public/assets/            # logos (copiar deste bundle)
```

## Fidelity
**High-fidelity (hifi).** Cores, tipografia, espaçamentos, animações e interações são finais. Capas de eventos são placeholders (gradientes listrados com rótulo) → virar slots de imagem reais.

---

## Design Tokens

### Cores — base (tema light)
| Token | Valor | Uso |
|---|---|---|
| `bg` | `#f5f4f0` | fundo do site (off-white quente) |
| `surface` | `#fff` / `#fbfaf7` | cards, faixa de stats, footer |
| `text` | `#16161b` | texto principal, botões escuros |
| `text-muted` | `rgba(22,22,27,.66)` | parágrafos |
| `text-dim` | `rgba(22,22,27,.45–.55)` | legendas/labels |
| `hairline` | `rgba(0,0,0,.07–.08)` | bordas e divisórias |
| link/hover | `#1a73e8` | links e "Retrospectiva →" |

### Cores — marca GDG / Google (acentos)
Azul `#4285F4` · Vermelho `#EA4335` · Amarelo `#FBBC04` · Verde `#34A853`.
Variantes "escuras" p/ chips de tipo de evento sobre fundo claro: azul `#1a73e8`, verde `#1e8e3e`, amarelo `#f9ab00`, vermelho `#d93025`.

### Tipografia (Google Fonts)
- **Sora** — títulos e números (700/800). H1 hero `800 54px/1.02`, `-2px`. H2 seções `800 42–44px/1.05`, `-1.5px`. Números de stat `800 40px`.
- **Figtree** — corpo, nav, botões (400–800). Corpo 16–19px, line-height 1.6–1.7.
- **IBM Plex Mono** — eyebrows/labels/datas (500/600), 11–13px, letter-spacing 1–2px, uppercase. Eyebrow de seção no formato `// Nome` na cor `#1a73e8`.

### Raio / sombra / layout
- Raio: pills `999px`; cards `18–26px`.
- Sombra do card de destaque: `0 30px 70px -28px rgba(11,11,22,.55)`.
- Container: `max-width:1180px; margin:0 auto; padding:0 44px` (o hero usa o MESMO — padding lateral interno de 44px; não deixar o hero mais largo que as seções).
- `scroll-margin-top:80px` nas âncoras (nav sticky).

### Keyframes (globais)
```css
@keyframes floaty   {0%,100%{transform:translateY(0)}   50%{transform:translateY(-14px)}}
@keyframes spin     {to{transform:rotate(360deg)}}
@keyframes logopop  {0%{opacity:0;transform:scale(.82)} 60%{transform:scale(1.04)} 100%{opacity:1;transform:scale(1)}}
@keyframes aurapulse{0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.6;transform:scale(1.08)}}
```

---

## Camada ambiente "esfumaçada" (assinatura visual)
Atrás de todo o conteúdo há blobs coloridos GDG bem desfocados (efeito fumaça) que percorrem a página. Implementar como camada absoluta atrás do conteúdo:
- Wrapper: `position:absolute; inset:0; z-index:-1; overflow:hidden; pointer-events:none` (dentro de um container `position:relative`; conteúdo em fluxo normal fica por cima).
- ~6 blobs `border-radius:50%`, `width/height 480–580px`, `filter:blur(44–50px)`, `background:radial-gradient(circle, rgba(<cor GDG>,.20–.30), transparent 62%)`, distribuídos verticalmente (alternando cantos esq/dir) ao longo da página, animados com `floaty` (15±s) ou `aurapulse` (9–11s).
- No Next, um componente `Ambient.tsx` com posições calculadas ou fixas por seção. Respeitar `prefers-reduced-motion` (pausar animações).

---

## Screens / Views

### 1. Nav (sticky)
`position:sticky; top:0; z-index:60`, fundo `rgba(245,244,240,.8)` + `backdrop-filter:blur(16px)`, borda inferior `1px rgba(0,0,0,.07)`, padding `15px 44px`.
- **Esquerda:** logo `gdg-jp-logo-black.png` (h 34px) com **hover** `transform:scale(1.07)` (transição .25s).
- **Direita:** links (Figtree 600 13.5px, `rgba(22,22,27,.7)`, hover `#1a73e8`): Sobre, Próximo evento, Eventos, Comunidade + botão **Participar** (pill preto `#16161b`, texto branco).

### 2. Hero — grid 2 colunas `1fr auto`
Header `padding:96px 0 84px`. Dois blobs decorativos à direita (azul/verde) com `floaty`.
- **Coluna esquerda (texto, `min-width:0`):**
  1. Pill eyebrow com 4 dots (cores GDG) + "Comunidade oficial · João Pessoa — PB" (mono).
  2. **H1** Sora 800 54px: "Tecnologia que nasce **na** **comu**​**ni**​**dade.**" — as palavras `na`(azul) `comu`(vermelho) `ni`(amarelo) `dade.`(verde) coloridas com as cores GDG.
  3. Parágrafo (max 540px, 19px, muted).
  4. Botões: **"Ver próximo evento →"** (preto) + **"Explorar edições"** (outline).
- **Coluna direita (logo em destaque, `auto`):** a logo `gdg-jp-logo-black.png` (h ~92px) com **aura animada**: dois `conic-gradient` circulares nas cores GDG por trás — um maior/difuso (`blur 52px`, `spin 12s` + `aurapulse 5s`) e um menor/vibrante (`blur 26px`, `spin 8s reverse`), opacidades .4–.5; a logo com entrada `logopop 1s`, `floaty 6s` contínuo e `drop-shadow` suave. Em telas estreitas, empilhar (grid → 1 coluna via media query).

### 3. Stats strip
Grid de 4 colunas com hairlines (borda + `gap:1px` sobre `rgba(0,0,0,.08)`, cards `#fbfaf7`), raio 20px. Número Sora 800 40px na cor GDG + label:
**8** Anos de comunidade (azul) · **60+** Eventos realizados (vermelho) · **4.500** Membros na comunidade (amarelo) · **300+** Palestras & talks (verde).

### 4. Próximo evento — DESTAQUE (`#proximo`)
- Cabeçalho: pill verde **"Próximo evento"** (dot com glow) + `// inscrições abertas` (mono).
- **Card escuro** (contraste no site claro) `border-radius:26px`, fundo `radial-gradient(120% 130% at 15% 0%,#171728,#0b0b16 60%)`, sombra forte, com blobs azul/verde internos. **O card inteiro é um link para a rota da landing do DevFest** (`/devfest-2026`).
- Grid interno `1.1fr .9fr`:
  - Esquerda: logo `devfest-2026-w3.png` (h 60px, branca) + wordmark "JOÃO PESSOA" (Sora 700, letter-spacing 7px, gradiente GDG) + H2 branca "A comunidade de tecnologia e inovação se encontra aqui." + parágrafo + CTA pill gradiente **"Ver a página do evento →"** + nota "Lote 1 · a partir de R$ 99,99".
  - Direita (borda esquerda hairline clara): 3 linhas ícone+texto — 📅 **20 & 21 Nov 2026** / Quinta e sexta · 📍 **Uniesp** / João Pessoa · PB · 🎟️ **1.200 vagas** / 5ª edição.

### 5. Eventos — vitrine (`#eventos`)
- Cabeçalho: eyebrow `// Nossas edições` + H2 "Eventos que já aconteceram" + **filtros** (pills): **Todos, DevFest, I/O Extended, Build with AI, Study Jams**. Pill ativo = preto `#16161b`/texto branco; inativos = outline claro. (No Next: `useState('Todos')`.)
- **Grid 3 colunas** de cards (filtrados). Card `#fff`, borda hairline, raio 20px:
  - Capa `aspect-ratio:16/10` com gradiente listrado (placeholder) + chip do tipo (cor do evento) no topo-esq + rótulo `[ foto · <título> ]`.
  - Corpo: título (Sora 700 20px) + data (mono) + blurb + rodapé com público (`ex.: 900+ participantes`) e link **"Retrospectiva →"** (`#1a73e8`).
- Dados dos 6 eventos passados em *State Management*.

### 6. Sobre + Formatos (`#sobre`)
Grid 2 colunas. Esquerda: eyebrow `// Sobre a comunidade`, H2 "Aprender fazendo, / junto com gente real.", 2 parágrafos sobre a rede GDG e inclusão de todos os níveis. Direita: grid 2×2 de cards de formato (emoji + título + descrição): 🎤 **Meetups**, 🧑‍💻 **Study Jams**, 🤖 **Build with AI**, 🎉 **DevFest**.

### 7. Comunidade / CTA (`#comunidade`)
Card `#fff` centralizado, raio 26px, com **faixa superior de 5px** em gradiente das 4 cores GDG (`linear-gradient(90deg,#4285F4,#EA4335 33%,#FBBC04 66%,#34A853)`). H2 "Faça parte da maior comunidade dev da Paraíba" + parágrafo + botões **"Entrar na comunidade"** (preto) e **"Seguir no Instagram"** (outline).

### 8. Footer
Fundo `#fbfaf7`, borda superior. Logo `gdg-jp-logo-black.png` (h 38px) + descrição (incluir o disclaimer de comunidade independente). Duas colunas de links (Navegar / Social). Barra inferior mono: "© 2026 GDG João Pessoa" · "Feito com ☕ em João Pessoa — PB".

---

## Interactions & Behavior
- **Scroll reveal:** cada seção (`[data-reveal]`) entra com `opacity 0→1` + `translateY(26px)→0`, `.7s cubic-bezier(.2,.7,.2,1)`, via IntersectionObserver (threshold .1), uma vez. No Next: Framer Motion `whileInView`/`useInView`.
- **Filtro de eventos:** `useState`; filtra a lista e realça o pill ativo. Trivial em React.
- **Aura da logo:** ver keyframes; duas camadas conic girando em sentidos opostos + pulse.
- **Blobs ambiente:** `floaty`/`aurapulse` contínuos, atrás do conteúdo.
- **Hover:** links → `#1a73e8`; logo da nav → scale 1.07; cards de evento podem ganhar leve elevação (opcional).
- **prefers-reduced-motion:** desabilitar/atenuar animações contínuas.

## State Management
`lib/institucional-data.ts`:
- `stats`: 4 × `{ value, label, color }`.
- `events` (passados): array `{ title, type, date, blurb, attendees, color, c1, c2 }` (c1/c2 = gradiente da capa placeholder). Tipos: `DevFest | I/O Extended | Build with AI | Study Jams`.
  - **DevFest 2025** · Nov 2025 · 900+ · "A 4ª edição reuniu a comunidade com trilhas de IA, Web e Mobile e recorde de público."
  - **Build with AI 2025** · Ago 2025 · 180 · "Workshop hands-on de IA generativa com Gemini e casos práticos de aplicação."
  - **Google I/O Extended 2025** · Mai 2025 · 320 · "As novidades do Google I/O revividas localmente, com watch party e debates."
  - **DevFest 2024** · Nov 2024 · 750 · "Dois palcos, codelabs e a energia de sempre — nossa maior edição até então."
  - **Android Study Jams 2024** · Set 2024 · 140 · "Trilha de estudos guiados de Android com Kotlin, do zero ao primeiro app."
  - **Google I/O Extended 2024** · Mai 2024 · 260 · "Comunidade reunida para acompanhar e destrinchar os anúncios do I/O."
- `filter`: estado (`'Todos'` default). `'Todos'` mostra todos; senão filtra por `type`.
- `próximo evento`: dados fixos do DevFest 2026 (20–21 Nov, Uniesp, 1.200 vagas, lote a partir de R$ 99,99) + link para `/devfest-2026`.

## Relação com a landing do DevFest
Este site e a **landing do DevFest 2026** (handoff separado) formam **um único app Next**. O card de destaque em *Próximo evento* deve linkar para a rota da landing (`/devfest-2026`). Compartilhar `layout.tsx`, fontes e a pasta `public/assets/`. O **banner de divulgação** (1280×575, também no outro handoff) pode virar rota `/banner` e/ou a OG image do site via `next/og`.

## Assets (neste bundle → `public/assets/`)
- `gdg-jp-logo-black.png` — lockup GDG João Pessoa colorido/texto preto (nav, hero, footer) — para fundo claro.
- `devfest-2026-w3.png` — logo DevFest 2026 branca (usada no card escuro de destaque).
Placeholders a substituir: capas/fotos dos eventos passados (hoje gradientes listrados). Ícones são emoji (📅📍🎟️🎤🧑‍💻🤖🎉) — trocar por lucide-react se preferir.

## Files (referência neste bundle)
- `GDG JP Institucional.dc.html` — site institucional completo.
- `assets/*.png` — logos.

> Marca: logos da comunidade **GDG João Pessoa** (organizadora). Manter proporções e áreas de respiro; não distorcer nem recolorir o mark. Incluir o disclaimer de comunidade independente no footer.
