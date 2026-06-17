# KIT DE DESIGN — Trilha Técnica da Fiscalização (modelo SisPAT)

Este kit define o sistema visual EXATO para todos os slides HTML da apresentação
"Trilha Técnica — Planejamento e Inteligência da Fiscalização" (SFC/GPF · ANTAQ).
Replica o modelo da apresentação SisPAT. **Siga-o à risca.** Total de slides: **64**.

Cada slide é um arquivo independente `slide-NN.html` (1920×1080, 16:9), carregado
dentro de um `<iframe>` pelo `index.html` e escalado para caber na tela.

---

## 1. REGRAS DURAS (não negociáveis)

1. Arquivo HTML completo e autossuficiente (`<!DOCTYPE html>` … `</html>`).
2. Base de layout pensada para **1920×1080**. Use `html { font-size: 26px; }`.
3. CDNs (use EXATAMENTE estes, no `<head>`):
   - Tailwind 2.2.19: `https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css`
   - Font Awesome 6.4.0: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
   - Google Fonts: Montserrat (400;500;600;700;800;900) + Open Sans (400;500;600;700)
   - favicon: `https://prd-apex.antaq.gov.br/ords/r/sfc/120/files/static/v119/icons/app-icon-32.png`
4. Fontes: **Montserrat** para títulos/headers; **Open Sans** para corpo.
5. **NUNCA** use `overflow` que gere barra de rolagem. Todo conteúdo cabe na tela.
   O conteúdo NÃO pode estourar 1080px de altura. Prefira menos texto e bem espaçado.
6. O **último elemento antes de `</body>`** é SEMPRE o script de navegação (seção 7).
7. Imagens em `Imagens/…` (caminho relativo). Veja a lista de assets na seção 8.
8. Idioma pt-BR. Texto institucional, claro e conciso. Sem inventar dados — use o
   conteúdo fornecido no spec do slide.
9. Rodapé de slides de conteúdo: à esquerda o texto-base, à direita `N / 64`.

---

## 2. PALETA

| Token | Hex | Uso |
|---|---|---|
| Azul Institucional (primary) | `#003366` | Headers, títulos, barras |
| Azul Vibrante (secondary) | `#0066CC` | Acentos, ícones, destaques |
| Dourado (gold) | `#FFD700` | Acento em capa/divisores/encerramento |
| Fundo claro | `#ffffff` / `#f3f4f6` | Fundo de slides de conteúdo |
| Card claro | `#F8FAFC` | Cartões |
| Card azul claro | `#F0F9FF` / borda `#BAE6FD` | Caixas de destaque |
| Texto corpo | `#374151` / `#4B5563` | Parágrafos |
| Texto suave | `#6B7280` / `#9CA3AF` | Legendas/rodapé |

Gradiente de fundo (capa/divisor/encerramento):
`linear-gradient(135deg, #002244 0%, #003366 50%, #004488 100%)`

Classes utilitárias que você deve declarar no `<style>` de cada slide:
```css
.font-montserrat { font-family: 'Montserrat', sans-serif; }
.text-brand-primary { color: #003366; }
.bg-brand-primary { background-color: #003366; }
.text-brand-secondary { color: #0066CC; }
.bg-brand-secondary { background-color: #0066CC; }
```

---

## 3. BOILERPLATE `<head>` (use em TODO slide)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>TÍTULO DO SLIDE</title>
<link rel="icon" type="image/png" href="https://prd-apex.antaq.gov.br/ords/r/sfc/120/files/static/v119/icons/app-icon-32.png"/>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
<style>
  html { font-size: 26px; }
  body { margin:0; padding:0; background-color:#f3f4f6; overflow:hidden; font-family:'Open Sans', sans-serif; }
  .slide-container { width:100vw; height:100vh; position:relative; display:flex; flex-direction:column; background-color:#ffffff; overflow:hidden; }
  .font-montserrat { font-family:'Montserrat', sans-serif; }
  .text-brand-primary { color:#003366; } .bg-brand-primary { background-color:#003366; }
  .text-brand-secondary { color:#0066CC; } .bg-brand-secondary { background-color:#0066CC; }
  /* … estilos específicos do slide … */
</style>
</head>
```

---

## 4. SLIDE DE CONTEÚDO (fundo branco) — estrutura padrão

Topo: duas barras de acento. Header: barra vertical + título + subtítulo, e à direita
um "tag" do módulo/tópico. Conteúdo central flexível. Rodapé com base + nº da página.

```html
<body>
<div class="slide-container">
  <!-- Barras de topo -->
  <div style="height:12px;background:#003366;width:100%;"></div>
  <div style="height:6px;background:#0066CC;width:100%;"></div>

  <!-- Header -->
  <div class="flex items-center justify-between px-16 pt-10 pb-4 z-10">
    <div>
      <div class="flex items-center gap-3 mb-1">
        <div class="w-1.5 h-9 bg-brand-secondary"></div>
        <h1 class="text-3xl font-montserrat font-bold text-brand-primary uppercase tracking-tight">TÍTULO DO SLIDE</h1>
      </div>
      <p class="text-gray-500 font-medium ml-4 text-lg">Subtítulo opcional</p>
    </div>
    <div class="flex items-center gap-2 opacity-80 text-brand-secondary">
      <i class="fas fa-ICONE text-xl"></i>
      <p class="font-montserrat font-bold text-gray-400 text-sm tracking-widest">TAG DO MÓDULO</p>
    </div>
  </div>

  <!-- Conteúdo (flex-1) -->
  <div class="flex-1 flex flex-col justify-center px-16 pb-8 z-10 min-h-0">
    <!-- … cartões / tabelas / texto / imagens … -->
  </div>

  <!-- Rodapé -->
  <div class="px-16 pb-6 flex justify-between items-center z-10">
    <p class="text-gray-400 text-xs font-montserrat">Trilha Técnica da Fiscalização · SFC / GPF — ANTAQ</p>
    <p class="text-gray-300 text-xs font-mono">NN / 64</p>
  </div>
</div>
<!-- script de navegação (seção 7) -->
</body>
```

A "TAG DO MÓDULO" no canto superior direito:
- Módulo 1 → `PLANEJAMENTO` com ícone (ex.: `fa-clipboard-list`, `fa-sitemap`, `fa-gauge-high`).
- Módulo 2 → `INTELIGÊNCIA` com ícone (ex.: `fa-satellite-dish`, `fa-shield-halved`, `fa-magnifying-glass-chart`).
- Quizzes → `PRATICANDO`.

### Componentes de conteúdo reutilizáveis

**Cartão com borda lateral (lista de itens):**
```html
<div style="background:#F8FAFC;border-left:5px solid #0066CC;border-radius:12px;
            padding:18px 22px;box-shadow:0 2px 6px rgba(0,0,0,.06);">
  <p class="font-montserrat font-bold text-brand-primary text-xl mb-1 flex items-center gap-3">
    <i class="fas fa-ICONE text-brand-secondary"></i> Título do item</p>
  <p class="text-gray-600 text-base leading-relaxed">Descrição…</p>
</div>
```
Para gradação de cor por ordem use bordas: `#94A3B8, #60A5FA, #3B82F6, #2563EB, #1D4ED8, #003366`.

**Caixa de destaque azul-clara** (definição/conceito central):
```html
<div style="background:#F0F9FF;border:2px solid #BAE6FD;border-radius:16px;
            box-shadow:0 10px 25px -5px rgba(0,102,204,.15);padding:28px 36px;">…</div>
```

**Numeração de etapas / "pill":**
```html
<span style="font-family:'Montserrat';font-weight:700;font-size:14px;color:#1E3A8A;
   padding:3px 12px;border-radius:999px;background:#DBEAFE;text-transform:uppercase;
   letter-spacing:.06em;">Passo 1</span>
```

**Tabela** (use cabeçalho `#003366` branco, linhas zebradas `#F8FAFC`, bordas `#E5E7EB`,
cantos arredondados via wrapper `overflow:hidden;border-radius:12px`).

**Foto / imagem real** (moldura institucional):
```html
<figure style="border-radius:14px;overflow:hidden;box-shadow:0 12px 24px -8px rgba(0,0,0,.25);
        border:1px solid #E5E7EB;">
  <img src="Imagens/ARQUIVO" alt="DESCR" style="width:100%;height:100%;object-fit:cover;display:block;"/>
  <figcaption style="background:#0F172A;color:#E2E8F0;font-size:13px;padding:8px 14px;
          font-family:'Montserrat';">Legenda da imagem</figcaption>
</figure>
```

---

## 5. CAPA / DIVISOR / ENCERRAMENTO (fundo gradiente escuro)

Fundo: `background:linear-gradient(135deg,#002244 0%,#003366 50%,#004488 100%); color:white;`
Acentos à esquerda: barra dourada de 12px + barra azul de 4px (z-20).
Logo ANTAQ branca: `Imagens/logo-antaq-branca.png`.
Marca d'água: logo azul com filtro `brightness(0) invert(1)` e `opacity:.08`.
Use ícone decorativo gigante (FontAwesome) em `opacity:.05` no canto.

- **Capa (slide-01):** rótulo "TRILHA TÉCNICA", título grande, subtítulo SFC/GPF, faixa
  dourada, rodapé com canais oficiais ANTAQ (Facebook, Instagram, YouTube, LinkedIn, Twitter/X).
- **Divisores de módulo:** número do módulo grande em dourado ("MÓDULO 1"), título do módulo,
  uma linha-resumo do que será visto. Centralizado.
- **Encerramento (slide-64):** "OBRIGADO", nome do apresentador, cargo, cartões de contato
  (portal gov.br/antaq e e-mail), canais oficiais.

Acentos à esquerda (cole no início do `.slide-container`):
```html
<div class="absolute left-0 top-0 h-full w-3 z-20" style="background:#FFD700;"></div>
<div class="absolute left-3 top-0 h-full w-1 z-20" style="background:#0066CC;"></div>
```
Canais oficiais (ícones FA brands): `fa-facebook` ANTAQ.oficial · `fa-instagram` @antaq_oficial ·
`fa-youtube` CanalANTAQ · `fa-linkedin` company/antaq · `fa-twitter` @ANTAQ_oficial.

---

## 6. SLIDE DE QUIZ ("Praticando…")

Fundo branco com header padrão (tag `PRATICANDO`, ícone `fa-circle-question`).
Enunciado em caixa de destaque. Alternativas A–E como cartões clicáveis.
**Interatividade:** ao clicar numa alternativa, revela se é correta (verde) ou incorreta
(vermelho), e destaca a correta. Inclua um selo "Resposta" e um botão "Reiniciar".

Padrão JS (adapte `data-correct` para a letra certa):
```html
<div class="quiz-opt" data-letter="A" onclick="answer(this)"> … </div>
<script>
  const CORRECT = 'C'; // letra correta deste slide
  function answer(el){
    document.querySelectorAll('.quiz-opt').forEach(o=>o.classList.add('locked'));
    const L = el.dataset.letter;
    document.querySelectorAll('.quiz-opt').forEach(o=>{
      if(o.dataset.letter===CORRECT) o.classList.add('correct');
    });
    if(L!==CORRECT) el.classList.add('wrong');
    document.getElementById('quizFeedback').style.display='flex';
  }
  function resetQuiz(){
    document.querySelectorAll('.quiz-opt').forEach(o=>o.classList.remove('locked','correct','wrong'));
    document.getElementById('quizFeedback').style.display='none';
  }
</script>
```
Estilos: `.quiz-opt{cursor:pointer;transition:.2s}` `.quiz-opt.correct{background:#DCFCE7;border-color:#16A34A}`
`.quiz-opt.wrong{background:#FEE2E2;border-color:#DC2626}` `.quiz-opt.locked{pointer-events:none}`.
Letra em badge circular azul. Mantenha tudo dentro de 1080px (texto compacto).

---

## 7. SCRIPT DE NAVEGAÇÃO (último elemento do body, em TODOS os slides, VERBATIM)

```html
<script>document.addEventListener("keydown",function(e){if(["ArrowRight","ArrowLeft","PageDown","PageUp","Home","End"," ","f","F"].indexOf(e.key)!==-1){e.preventDefault();window.parent.postMessage({type:"slide-nav",key:e.key},"*");}});</script>
```
(Se o slide tiver JS próprio — quiz, vídeo —, este script vem por último, em `<script>` separado.)

---

## 8. ASSETS DISPONÍVEIS (`Imagens/`)

Logos:
- `logo-antaq-branca.png` — logo ANTAQ horizontal branca (para fundos escuros).
- `logo-antaq-azul.png` — logo ANTAQ horizontal azul (marca d'água / fundos claros).
- `sinesp-logo.jpg` — banner azul SINESP.
- `conportos-logo.png` — brasão CONPORTOS (círculo azul, mapa do Brasil, navio).

Fotos de campo (reais):
- `parintins-equipe.png` — equipe de fiscalização à beira do rio em Parintins (AM).
- `parintins-ip4.jpeg` — IP4 de Parintins.
- `prf-travessia.jpg` — travessia de veículos (ANTAQ/PRF), Carolina(MA)/Filadélfia(TO).
- `drones-recife.jpeg` — fiscais ANTT/ANTAQ/PRF observando drone no Porto do Recife.
- `drones-equip.jpeg` — equipamentos do curso de drones (DJI Mavic, iPads).
- `drones-campo.jpeg` — atividade de campo com drones.
- `daniel-cco.jpeg` — visita ao Centro de Controle (CCO) — Terminal Ponta da Madeira (MA).
- `daniel-salvador.jpg` — instrução de Auditoria Portuária em Salvador (BA).
- `daniel-santos.jpeg` — fiscal junto a placas de classe de risco, terminal de contêineres (Santos).
- `marimex-aerea.jpeg` — vista aérea do Terminal Marimex, Porto de Santos.
- `curso-visita.jpeg` — visita técnica do Curso de Fiscalização (URESL/MA).

Telas de sistema / dashboards (capturas reais):
- `painel-publico.png` — Painel de Dados Públicos da Fiscalização (ANTAQ).
- `pif-resumo.png` — Painel Interno da Fiscalização (Resumo Executivo).
- `sfis-tela.png` — Sistema de Fiscalização (SFIS) — Consulta de Processos.
- `sfis-mobile.mp4` — vídeo demonstração do SFIS Mobile (use `autoplay loop muted playsinline`).
- `infoseg-tela.png` — tela de pesquisa do SINESP/Infoseg (bases integradas).
- `redemais-portal.gif` — portal do Programa Brasil MAIS / serviços RedeMAIS.
- `brasilmais-banner.png` — banner do Programa Brasil MAIS.
- `santos-comparativo.gif` — comparação de imagens de satélite (Porto de Santos).
- `sisbin-estrutura.png` — diagrama em arcos da estrutura do Novo SISBIN (órgãos por nível).

Uniformes / identidade visual:
- `uniformes-vestuario.png` — camisa social, polo, camisetas, calça (vestuário base).
- `uniformes-tatico.png` — colete refletivo, mochila, capa de colete balístico, bota.
- `uniformes-epi.png` — EPIs e equipamentos táticos (respirador, luvas, óculos, capacete, etc.).

> Para slides cujo conteúdo é conceitual (diagramas feitos de formas/ícones no PPT original),
> **recrie nativamente em HTML** com cards + ícones FontAwesome (não embuta imagem).
> Use imagem embutida APENAS quando o asset acima for indicado no spec do slide.
