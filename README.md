# Trilha de Formação Inicial (CPNU) — ANTAQ

Página da **grade horária** (agenda cronológica) da **Trilha de Formação Inicial** destinada aos servidores nomeados no cargo de **Técnico em Regulação de Serviços de Transportes Aquaviários**, provenientes do Concurso Público Nacional Unificado (CPNU).

🔗 **Página publicada:** https://antaq.github.io/trilha-cpnu/

## Sobre

- **Período:** 08 a 19 de junho de 2026 — 13 disciplinas, 40 horas-aula, 10 dias de aula
- Página única, estática e responsiva (HTML + CSS + JavaScript, sem dependências de build), com a identidade visual da ANTAQ
- **Recursos:** busca por disciplina/instrutor, filtro por turno (Manhã/Vespertino), navegação por dia, linha do tempo agrupada por semana e botão **"Entrar na aula"** (Microsoft Teams) em cada dia

## Como atualizar o conteúdo

Edite o array `DISCIPLINAS` no [`index.html`](index.html). Cada disciplina tem os campos:

| Campo | Descrição |
|-------|-----------|
| `n` | Número da disciplina (referência interna) |
| `nome` | Nome da disciplina |
| `ch` | Carga horária (hora-aula) |
| `data` | Data no formato ISO `AAAA-MM-DD` |
| `inicio` / `fim` | Horário (`HH:MM`) |
| `turno` | `Manhã` ou `Vespertino` |
| `instrutor` | Nome(s) do(s) instrutor(es) |
| `icon` | Ícone Font Awesome (ex.: `fa-anchor`) |

As estatísticas, os dias, as semanas, a numeração das aulas e os links do Teams (`https://bit.ly/TrilhaCPNU_Aula{N}`, com N = posição cronológica do dia) são calculados automaticamente.

## Publicação (GitHub Pages)

A página é servida pela branch `main` (raiz do repositório). Em **Settings → Pages**, defina *Source* como **Deploy from a branch** → `main` → `/ (root)`.

---

Referência: Processo SEI nº 50300.007135/2026-37 · Documento SEI nº 2922562
