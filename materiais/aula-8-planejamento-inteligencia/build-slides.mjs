export const meta = {
  name: 'trilha-fiscalizacao-slides',
  description: 'Constrói os 64 slides HTML da Trilha Técnica da Fiscalização (modelo SisPAT) e revisa cada um',
  phases: [
    { title: 'Construir', detail: 'um agente por slide gera o slide-NN.html seguindo o KIT' },
    { title: 'Revisar', detail: 'verifica conformidade com o KIT e corrige cada slide' },
  ],
}

const OUT = '/Users/phs/Documents/Git/ANTAQ/Apresentacoes/GPFTrilhaTecnico/apresentacao'
const KIT = OUT + '/KIT.md'
const REF = '/Users/phs/Documents/Git/ANTAQ/SisPAT API/workshop-sispat/sistema'
const pad = n => String(n).padStart(2, '0')

// ───────────────────────────── MANIFESTO (64 slides) ─────────────────────────────
const S = [
// ABERTURA
{n:1, kind:'cover', tag:'', icon:'fa-compass-drafting', title:'Trilha Técnica — Planejamento e Inteligência da Fiscalização',
 sub:'Superintendência de Fiscalização e Coordenação das Unidades Regionais (SFC) · Gerência de Planejamento e Inteligência da Fiscalização (GPF)',
 img:'logo-antaq-branca.png (logo), logo-antaq-azul.png (marca d\'água)',
 body:'CAPA institucional (fundo gradiente escuro, estilo slide-01 do SisPAT). Rótulo superior "TRILHA TÉCNICA · FISCALIZAÇÃO". Título grande em duas linhas com a palavra-chave em dourado. Subtítulo SFC/GPF. Faixa dourada. Ícone decorativo gigante de fundo (ex.: fa-ship ou fa-shield-halved, opacity .05). Rodapé com os canais oficiais ANTAQ (Facebook ANTAQ.oficial, Instagram @antaq_oficial, YouTube CanalANTAQ, LinkedIn company/antaq, Twitter/X @ANTAQ_oficial) e selo "Gestão Eficiente · Tecnologia & Inovação".'},

{n:2, kind:'bio', tag:'APRESENTADOR', icon:'fa-user-tie', title:'Apresentador', sub:'Gerência de Planejamento e Inteligência da Fiscalização — GPF',
 img:'nenhuma — recriar nativamente (avatar com iniciais "PS" em círculo azul/dourado)',
 body:'Slide de conteúdo (fundo branco). Cartão central de perfil: Nome "Pedro Henrique Soares". Cargo: "Gerente de Planejamento e Inteligência da Fiscalização (GPF)". Tag: "Especialista em Regulação desde 2017". Trajetória em mini-cards/linha do tempo com ícones: Bancário — Caixa e BB (fa-building-columns); Técnico em Regulação — ANTT (fa-id-badge); Especialista em Regulação — ANTAQ (fa-anchor); Programador (fa-code); Pai (fa-heart, em dourado/vermelho). Use avatar circular com iniciais "PS". Layout limpo e elegante.'},

{n:3, kind:'agenda', tag:'AGENDA', icon:'fa-list-check', title:'Sumário', sub:'O que veremos nesta trilha',
 img:'nenhuma — recriar nativamente',
 body:'Duas colunas, uma por módulo, cada uma um cartão. COLUNA A — "Módulo 1 · Planejamento da Fiscalização" (ícone fa-clipboard-list): Premissas do PPF 2025-2028; Estrutura Organizacional da SFC; Competências Regimentais; Perspectivas de Atuação (Responsiva, 3 Níveis, GEF); Modelo de Risco e IPR; Instrumentos PPF e PAF; Sistemas e Painéis (SFIS, PIF, Dados Públicos); Capacitação e Identidade Visual. COLUNA B — "Módulo 2 · Inteligência da Fiscalização" (ícone fa-satellite-dish): SISBIN e o Novo SISBIN (2023); Programa Brasil MAIS / RedeMAIS; SINESP / INFOSEG; Cooperação ANTAQ / PRF; Conportos; CEPAI/SP e o app OiBR. Numere os tópicos. Cada coluna com cabeçalho colorido (Módulo 1 azul #0066CC, Módulo 2 azul-petróleo #0E7490).'},

// DIVISOR MÓDULO 1
{n:4, kind:'divider', tag:'', icon:'fa-clipboard-list', title:'Planejamento da Fiscalização',
 sub:'Arcabouço estratégico: PPF, PAF, modelo de risco, sistemas e capacitação', img:'logo-antaq-branca.png',
 body:'DIVISOR de módulo (fundo gradiente escuro). "MÓDULO 1" grande em dourado. Título do módulo "Planejamento da Fiscalização". Subtítulo resumindo o que será visto. Selo "PPF 2025-2029". Ícone decorativo gigante (fa-clipboard-list ou fa-sitemap) ao fundo.'},

// MÓDULO 1 — PLANEJAMENTO
{n:5, kind:'content', tag:'PLANEJAMENTO', icon:'fa-list-ol', title:'Premissas Basilares do PPF 2025-2028', sub:'Plano Plurianual de Fiscalização',
 img:'nenhuma — recriar nativamente (5 cartões com borda lateral gradiente)',
 body:'5 cartões: 1) Redução de Custos de Fiscalização — simplificar e reduzir a complexidade dos métodos fiscalizatórios (fa-coins). 2) Promoção da Conformidade Normativa — ações preventivas para detectar infrações rapidamente (fa-shield-check). 3) Integração de Soluções Tecnológicas — sistemas automatizados para monitoramento em tempo real e cruzamento de dados (fa-microchip). 4) Foco no Risco e Proporcionalidade — fiscalização proporcional ao nível de risco identificado (fa-scale-balanced). 5) Transparência e Governança — transparência na execução fiscalizatória (fa-eye).'},

{n:6, kind:'content', tag:'PLANEJAMENTO', icon:'fa-sitemap', title:'Estrutura Organizacional da Fiscalização', sub:'Superintendência de Fiscalização e Coordenação das Unidades Regionais (SFC)',
 img:'nenhuma — recriar nativamente (organograma em HTML/CSS com caixas e conectores)',
 body:'Organograma: no topo, caixa SFC — "Superintendência de Fiscalização e Coordenação das Unidades Regionais". Abaixo, 4 caixas conectadas: GPF — Gerência de Planejamento e Inteligência da Fiscalização; GCOR — Gerência de Coordenação das Unidades Regionais; GRAT — Gerência de Recursos e de Apoio Técnico; GREs/UREs — Gerências e Unidades Regionais. Faixa de destaque (rodapé do conteúdo) sobre GREs/UREs: "Braço operacional da ANTAQ · Execução de inspeções e ações de campo · Verificações presenciais · Estrutura descentralizada em todo o território nacional". Destaque visual leve no GPF (dona do conteúdo).'},

{n:7, kind:'content', tag:'PLANEJAMENTO', icon:'fa-gavel', title:'Competências Regimentais', sub:'Atribuições da GPF',
 img:'nenhuma — recriar nativamente (5 cartões/ícones)',
 body:'5 competências: 1) Apoiar o desenvolvimento de recursos humanos, financeiros, tecnológicos e logísticos da Fiscalização (fa-hands-helping). 2) Diagnosticar a atuação dos regulados, para ações de inteligência (fa-magnifying-glass-chart). 3) Propor Planos de Fiscalização e suas Diretrizes (fa-file-signature). 4) Propor ações conjuntas com órgãos de inteligência (fa-handshake). 5) Supervisionar e atualizar sistemas (fa-gears).'},

{n:8, kind:'content', tag:'PLANEJAMENTO', icon:'fa-compass', title:'Perspectivas de Atuação', sub:'Três enfoques complementares do PPF',
 img:'nenhuma — recriar nativamente (3 colunas/cartões)',
 body:'3 cartões lado a lado: 1) Fiscalização Responsiva — ajusta a fiscalização ao risco das empresas, otimizando recursos e eficiência. Enfoque no MERCADO REGULADO (fa-scale-balanced). 2) Fiscalização em Três Níveis — classifica as obrigações em níveis de atuação: monitoramento, ação à distância e ação presencial. Enfoque nos NORMATIVOS (fa-layer-group). 3) Formação de Grupos Especializados (GEF) — cria grupos focados em áreas específicas para melhorar a precisão das fiscalizações. Enfoque nas EQUIPES (fa-users-gear). Realce o "enfoque" de cada um como badge.'},

{n:9, kind:'content', tag:'PLANEJAMENTO', icon:'fa-scale-balanced', title:'Fiscalização Responsiva', sub:'Inovações do modelo',
 img:'nenhuma — recriar nativamente (3 cartões)',
 body:'3 inovações: 1) Incorporação de Novos Indicadores — introdução de indicadores qualitativos que consideram aspectos comportamentais, socioeconômicos e ambientais dos regulados (fa-chart-line). 2) Integração de Dados no Data Lake — ampliação do uso de dados para garantir avaliação mais abrangente e precisa dos regulados (fa-database). 3) Desenvolvimento de Ferramentas Inovadoras — criação de roteiros fiscalizatórios e uso ampliado de dados comportamentais para adaptar o modelo às crescentes complexidades do ambiente regulatório (fa-wand-magic-sparkles).'},

{n:10, kind:'content', tag:'PLANEJAMENTO', icon:'fa-bullseye', title:'Fiscalização Responsiva — Objetivos', sub:'O que o modelo busca avaliar',
 img:'nenhuma — recriar nativamente (diagrama de objetivos × insumos)',
 body:'Apresente os OBJETIVOS do modelo e os fatores avaliados. Coluna/bloco "Objetivos": medir a Condição de Regularidade Normativa e a Disposição à Conformidade Regulatória, considerando o Padrão das Infrações. Bloco de fatores avaliados (2 pilares com ícones): Risco da Atividade (fa-triangle-exclamation) e Comportamento do Agente (fa-user-check). Mostre que a combinação Risco × Comportamento orienta a intensidade da fiscalização. Layout em diagrama equilibrado.'},

{n:11, kind:'content', tag:'PLANEJAMENTO', icon:'fa-layer-group', title:'Classificação de Risco', sub:'Empresas em 3 grupos e 8 subgrupos, conforme o IPR',
 img:'nenhuma — recriar nativamente (3 cartões de grupo + barra/percentual + total)',
 body:'As empresas são classificadas em 3 grupos e 8 subgrupos conforme o IPR (Índice de Probabilidade de Risco). GRUPO A — Baixo Risco: ~87% das empresas (2.051); subgrupos A1, A2; histórico consistente de conformidade; fiscalizações simplificadas (até 5 itens) — cor verde. GRUPO B — Médio Risco: ~11% (262); subgrupos B1, B2; histórico misto; fiscalizações documentais intermediárias a completas — cor âmbar. GRUPO C — Alto Risco: ~2% (56); subgrupos C1, C2, C3, C4; histórico significativo de irregularidades; fiscalização integral e intensiva — cor vermelha. Rodapé do conteúdo: "Total: 2.369 empresas classificadas (PAF 2025 — novembro/2024)". Use cartões com o percentual em destaque e barra de proporção.'},

{n:12, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — Fiscalização Responsiva', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "A Fiscalização Responsiva é um dos pilares do PPF 2025-2028 da ANTAQ e orienta onde os esforços fiscalizatórios devem ser concentrados. Sobre os fundamentos e objetivos dessa abordagem, assinale a alternativa correta:" ALTERNATIVAS — A) A Fiscalização Responsiva pressupõe que todas as empresas reguladas devem ser submetidas à mesma intensidade de fiscalização, garantindo isonomia no tratamento dos regulados. B) A abordagem responsiva reconhece que diferentes empresas apresentam diferentes níveis de conformidade, e que a fiscalização deve ser proporcional ao risco identificado, concentrando recursos onde são mais necessários. C) A adoção da Fiscalização Responsiva elimina a necessidade de inspeções presenciais, substituindo-as integralmente por monitoramento automatizado e verificação documental remota. D) O modelo responsivo prioriza a aplicação de sanções como principal mecanismo de indução à conformidade, independentemente do histórico de regularidade da empresa fiscalizada. E) A Fiscalização Responsiva é aplicável apenas às empresas classificadas como alto risco, não produzindo efeitos sobre a programação das fiscalizações destinadas a empresas com bom histórico de conformidade. CORRETA = B.'},

{n:13, kind:'content', tag:'PLANEJAMENTO', icon:'fa-layer-group', title:'Fiscalização em 3 Níveis (3n)', sub:'Classificação das obrigações normativas e contratuais',
 img:'nenhuma — recriar nativamente (3 níveis em escada/cartões)',
 body:'Classificação das obrigações em 3 abordagens (apresente como escada/progressão): NÍVEL 1 — Monitoramento: utiliza sistemas automatizados para identificar possíveis infrações em tempo real, permitindo ação rápida e eficiente (fa-satellite-dish). NÍVEL 2 — Ação à Distância: verificação por análise documental, por evidências audiovisuais (vídeos) ou qualquer meio de constatação de indícios infracionais de forma remota, evitando a necessidade de fiscalização presencial (fa-laptop-file). NÍVEL 3 — Ação Presencial: realização de inspeções presenciais e coleta de evidências de forma direcionada, focando em áreas de maior risco e complexidade (fa-person-walking). Indique aumento de custo/esforço do nível 1 ao 3.'},

{n:14, kind:'content', tag:'PLANEJAMENTO', icon:'fa-diagram-project', title:'Fiscalização em 3 Níveis — Eixos de Risco', sub:'Priorização das obrigações fiscalizáveis',
 img:'nenhuma — recriar nativamente (3 eixos)',
 body:'Priorização das obrigações fiscalizáveis em 3 eixos de risco: 1) Probabilidade de Ocorrência — frequência de descumprimento pelo conjunto dos regulados (fa-dice). 2) Impacto no Mercado — consequências potenciais: danos a usuários, meio ambiente, concorrência (fa-bolt). 3) Custo Fiscalizatório — recursos necessários para verificação (Monitorável, Remoto, Presencial) (fa-sack-dollar). Cada eixo um cartão com a explicação.'},

{n:15, kind:'content', tag:'PLANEJAMENTO', icon:'fa-person-walking', title:'Exemplo: Ação Presencial (Alto Custo Fiscalizatório)', sub:'Como as infrações são priorizadas',
 img:'nenhuma — recriar nativamente (lista de incisos + setas de priorização)',
 body:'Conceito: prioridade para a verificação de inconformidades normativas com MAIOR Probabilidade de Ocorrência e MAIOR Impacto no Mercado. Ilustre com uma "Resolução ANTAQ nº X — Art. X. São infrações:" e seis incisos genéricos (Inc. I a Inc. VI) com verbos: deixar de…, não encaminhar…, bloquear…, não cumprir…, não manter…, não informar… . Ao lado, mostre a reordenação "Infrações priorizadas em uma ação presencial": Inc. III, Inc. V, Inc. VI, Inc. II, Inc. I, Inc. IV (...). Use duas colunas (lista original → lista priorizada) com uma seta entre elas, deixando claro que nem todas são verificadas presencialmente.'},

{n:16, kind:'content', tag:'PLANEJAMENTO', icon:'fa-users-gear', title:'Grupos Especializados de Fiscalização (GEF)', sub:'Execução em temas estratégicos',
 img:'nenhuma — recriar nativamente',
 body:'Execução das atividades fiscalizatórias em temas estratégicos para a ANTAQ. 2 blocos principais: 1) Formação de Grupos Especializados — aprimorar o desempenho da Fiscalização da ANTAQ em áreas específicas, como investimentos portuários, logística de contêineres, transporte aquaviário de passageiros e cargas perigosas (fa-people-group). 2) Conhecimento Aprofundado — grupos compostos por especialistas com conhecimento detalhado em suas áreas, permitindo execução mais precisa das tarefas, reduzindo erros e aumentando a eficiência (fa-brain). Inclua chips com as áreas temáticas (Investimentos Portuários, Contêineres, Passageiros, Cargas Perigosas).'},

{n:17, kind:'content', tag:'PLANEJAMENTO', icon:'fa-heart-circle-check', title:'GEF — Benefícios', sub:'Ganhos para a fiscalização e para os servidores',
 img:'nenhuma — recriar nativamente (5 cartões/ícones)',
 body:'5 benefícios: 1) Autonomia e Confiança — autonomia para tomar decisões, aumentando confiabilidade e responsabilidade nas áreas de atuação (fa-key). 2) Redução de Custos — a longo prazo, minimizando retrabalho e desperdício de recursos (fa-piggy-bank). 3) Saúde Mental dos Servidores — promoção do reconhecimento e valor dos servidores, contribuindo para motivação e satisfação no trabalho (fa-heart-pulse). 4) Crescimento Profissional — oportunidades de desenvolvimento, incentivando engajamento e aquisição de novos conhecimentos (fa-arrow-trend-up). 5) Satisfação no Trabalho — o conhecimento aprofundado permite tarefas mais desafiadoras e interessantes (fa-face-smile).'},

{n:18, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — Fiscalização em 3 Níveis', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "A metodologia de Fiscalização em 3 Níveis classifica as obrigações regulatórias conforme a intensidade de verificação necessária. Sobre o Nível 2 (Ação à Distância), é correto afirmar que:" ALTERNATIVAS — A) Consiste na realização de inspeções presenciais direcionadas, com coleta de evidências in loco nas instalações do regulado. B) Utiliza exclusivamente sistemas automatizados de cruzamento de dados em tempo real, sem qualquer intervenção humana direta. C) É reservado às situações em que a verificação remota é insuficiente, em razão da natureza da obrigação ou da necessidade de constatar fatos presencialmente. D) Compreende a verificação documental, audiovisual ou por meio de sistemas de informação, sem necessidade de deslocamento físico da equipe de fiscalização. E) Aplica-se exclusivamente a empresas classificadas no Grupo C (Alto Risco) do Modelo Quantitativo de Risco. CORRETA = D.'},

{n:19, kind:'content', tag:'PLANEJAMENTO', icon:'fa-calendar-check', title:'Plano Anual de Fiscalização (PAF)', sub:'Instrumento de curto prazo que detalha as ações do exercício',
 img:'nenhuma — recriar nativamente (4 cartões)',
 body:'4 categorias do PAF: 1) Fiscalizações por Grupo de Risco — núcleo central do PAF; aplicação do IPR para definir empresas e intensidade; PAF 2025: 2.369 empresas classificadas (fa-layer-group). 2) Fiscalizações Operacionais — ações de rotina em regiões distantes; deslocamentos com pernoite, diárias e passagens (fa-route). 3) Fiscalizações de Rito Próprio — procedimentos específicos: Novas Outorgas, Embarcações em Construção, Investimentos Portuários e Concessões (fa-file-contract). 4) Fiscalizações Temáticas — ações coordenadas sobre temas específicos: Autoridades Portuárias, resíduos, contêineres, delegações, etc. (fa-diagram-project).'},

{n:20, kind:'table', tag:'PLANEJAMENTO', icon:'fa-table-cells', title:'Intensidade da Fiscalização por Subgrupo', sub:'Do A1 ao C4',
 img:'nenhuma — recriar nativamente (tabela estilizada)',
 body:'Tabela com colunas: Subgrupo | Risco | Tipo de Fiscalização | Intensidade. Linhas: A1 | Baixo | Documental simplificada | Até 5 itens. A2 | Baixo | Documental simplificada | Até 5 itens. B1 | Médio | Documental intermediária | 5 a 10 itens. B2 | Médio | Documental completa | Todos os itens não presenciais. C1–C3 | Alto | Padrão mista (documental + presencial) | Integral. C4 | Muito Alto | Fiscalização intensiva e acompanhamento | Máxima. Use cores por nível de risco (verde/âmbar/vermelho/vermelho-escuro) nas células de "Risco".'},

{n:21, kind:'content', tag:'PLANEJAMENTO', icon:'fa-diagram-project', title:'Fiscalizações Temáticas — PAF 2025', sub:'7 temas prioritários para ações coordenadas',
 img:'nenhuma — recriar nativamente (7 itens numerados em grade)',
 body:'7 temas prioritários (numerados, em grade de cartões): 1) Diagnóstico do desempenho das Autoridades Portuárias. 2) Estrutura de fiscalização das Autoridades Portuárias. 3) Tratamento de resíduos e produtos perigosos. 4) Diagnóstico dos Convênios de Delegação. 5) Oferta de janelas em terminais de contêineres. 6) Recolhimento de resíduos na navegação interior. 7) Gratuidade em serviços expressos/diferenciados. Ícones temáticos para cada (porto, resíduos, contêiner, convênio, etc.).'},

{n:22, kind:'content', tag:'PLANEJAMENTO', icon:'fa-list-check', title:'Gestão e Acompanhamento', sub:'Matriz de Responsabilidade (RACI) e Indicador EPAF',
 img:'nenhuma — recriar nativamente (matriz RACI + cartão de indicador)',
 body:'Duas partes. ESQUERDA — Matriz RACI: R (Responsible) — Unidade que executa — GPF / UREs; A (Accountable) — Aprova e responde — SFC; C (Consulted) — Consultada antes — GCOR / GRAT; I (Informed) — Informada após — Diretoria. DIREITA — Indicador EPAF (Execução do Plano Anual de Fiscalização): fórmula EPAF = (Processos Instaurados / Processos Previstos) × 100; Meta: ≥ 90%; Acompanhamento mensal; Reporte à SFC e à Diretoria Colegiada. Destaque a fórmula e a meta.'},

{n:23, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — Plano Anual de Fiscalização', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "O Plano Anual de Fiscalização (PAF) organiza as ações fiscalizatórias em diferentes categorias. Uma delas compreende ações coordenadas envolvendo múltiplas unidades regionais, destinadas a produzir diagnósticos abrangentes sobre questões específicas de relevância para o setor aquaviário. O PAF 2025 define sete prioridades nessa categoria, entre as quais o diagnóstico do desempenho das Autoridades Portuárias e a avaliação da oferta de janelas em terminais de contêineres. Essa categoria corresponde a:" ALTERNATIVAS — A) Fiscalizações de Rito Próprio. B) Fiscalizações Operacionais. C) Fiscalizações por Grupos de Risco. D) Fiscalizações Temáticas. E) Fiscalizações de Novas Outorgas. CORRETA = D.'},

{n:24, kind:'content', tag:'PLANEJAMENTO', icon:'fa-chart-pie', title:'Painel de Dados Públicos da Fiscalização', sub:'Transparência ativa para a sociedade',
 img:'painel-publico.png (captura do painel)',
 body:'Slide com a captura do painel à direita (figura com moldura/legenda) e texto à esquerda. Texto: disponível para o público em geral, os dados abertos de fiscalização englobam todas as infrações transitadas em julgado e processos sancionadores arquivados sem irregularidade disponíveis nas bases de dados da ANTAQ. Além de gráficos consolidados (resumo executivo) e tabelas gerais sobre processos e normas aplicadas, é possível baixar a base de dados para análises mais detalhadas. Caminho de acesso (chip/breadcrumb): Portal da ANTAQ > Central de Conteúdo > Painéis > Fiscalização.'},

{n:25, kind:'content', tag:'PLANEJAMENTO', icon:'fa-gauge-high', title:'Painel Interno da Fiscalização (PIF)', sub:'Business Intelligence para os gestores',
 img:'pif-resumo.png (captura do resumo executivo)',
 body:'Captura do PIF à direita (figura com moldura/legenda), texto à esquerda. Texto: ferramenta de business intelligence criada em 2015 para fornecer estatísticas sobre fiscalizações aos gestores da ANTAQ, abrangendo tempo, localização, infrações e indicadores de desempenho. Foi aprimorada ao longo dos anos com melhorias solicitadas pelos fiscais, incluindo indicadores de reincidência de infrações e pesquisa de processos sancionadores por razão social ou CNPJ. A nova versão está disponível para todo o público interno via Intranet SFC. Breadcrumb: Intranet ANTAQ > Setores > SFC > Assuntos da SFC > Painel Interno da Fiscalização.'},

{n:26, kind:'content', tag:'PLANEJAMENTO', icon:'fa-desktop', title:'Sistema de Fiscalização (SFIS)', sub:'Cadastro e controle dos processos de fiscalização',
 img:'sfis-tela.png (captura do SFIS — Consulta de Processos)',
 body:'Captura do SFIS à direita (figura), linha do tempo à esquerda. Linha do tempo/evolução: 2009 — sistema implementado para cadastro dos dados dos processos de fiscalização. 2014 — módulo Penalidades para cadastro dos processos sancionadores e, depois, módulo para Termos de Ajuste de Conduta (TAC). 2018 — integração ao Sistema de Arrecadação de Multas, que, a partir das fiscalizações cadastradas no SFIS, efetua a geração do boleto de pagamento e todo o controle da arrecadação. Chip de acesso: https://web3.antaq.gov.br/Fiscalizacao/.'},

{n:27, kind:'content', tag:'PLANEJAMENTO', icon:'fa-mobile-screen-button', title:'SFIS Mobile', sub:'A fiscalização na palma da mão',
 img:'sfis-mobile.mp4 (vídeo demonstração — autoplay loop muted playsinline)',
 body:'Slide com painel de vídeo à direita (estilo do slide-09 do SisPAT: moldura escura com cabeçalho "Demonstração — SFIS Mobile" e o vídeo Imagens/sfis-mobile.mp4 com autoplay loop muted playsinline) e texto à esquerda. Texto: requisito — dispositivo móvel com sistema operacional Android; disponível para download em https://web3.antaq.gov.br/sistemas/sfismobile/. Bloco "Itens suprimidos" (o app substitui): Máquina Fotográfica, Prancheta, Caneta, Impressões — apresente como chips/itens riscados. Bloco "Sistemas integrados" (chips): SFIS, Corporativo, Outorga, Arrendamento V2, SIGTAq, SEI, SARH.'},

{n:28, kind:'content', tag:'PLANEJAMENTO', icon:'fa-plug-circle-bolt', title:'SFIS Pro', sub:'Integração entre o SFIS e o SEI',
 img:'nenhuma — recriar nativamente (fluxo SFIS → SEI)',
 body:'Conceito: integração entre o SFIS e o SEI, a partir de complemento ao "ANTAQ Pro". Pontos (cartões): traz as principais informações do Processo Sancionador diretamente ao SEI (fa-right-left); gera documentos nativos automaticamente (fa-file-circle-check); reduz erro humano e agiliza a análise técnica (fa-bolt). Ilustre com um fluxo visual SFIS → (ANTAQ Pro) → SEI.'},

{n:29, kind:'content', tag:'PLANEJAMENTO', icon:'fa-grip', title:'Novos Aplicativos da Fiscalização', sub:'Ecossistema de ferramentas da SFC',
 img:'nenhuma — recriar nativamente (grade de 7 app-cards)',
 body:'Grade de 7 cartões de aplicativos (ícone + nome + descrição curta): CEF — Controle de Equipamentos de Fiscalização (fa-toolbox). AeroSFC — Controle de Aeronaves (fa-helicopter). A Gente SFC — Diretório de informações sobre unidades e colaboradores (fa-address-book). OuvidoriaSFC — Gestão de demandas de ouvidoria de fiscalização (fa-comments). ReportSFC — Relatórios gerenciais de processos e procedimentos de fiscalização (fa-file-lines). Situação dos Portos — Painel de situação de crise dos portos brasileiros (fa-triangle-exclamation). LogRotinas — Gerenciador de fiscalizações de rotinas (fa-clipboard-list).'},

{n:30, kind:'content', tag:'PLANEJAMENTO', icon:'fa-graduation-cap', title:'Curso de Fiscalização', sub:'Capacitação e padronização dos fiscais',
 img:'curso-visita.jpeg (visita técnica — foto de campo)',
 body:'Foto de campo à direita (figura com legenda "Visitas técnicas às instalações sob jurisdição da URESL/ANTAQ — Maranhão, 2024"), texto à esquerda. Motivação do Projeto: promover a atualização dos fiscais; padronizar os procedimentos de fiscalização. Novidades de 2026: Módulo Único (Teórico e Prático presenciais); 80 participantes, garantida a participação dos novos servidores da SFC; visita aos portos e instalações portuárias de Paranaguá (PR); previsto para Junho/2026.'},

{n:31, kind:'content', tag:'PLANEJAMENTO', icon:'fa-chalkboard-user', title:'Dia de Fiscal', sub:'Visão sistêmica da fiscalização para toda a ANTAQ',
 img:'nenhuma — recriar nativamente',
 body:'Descrição: curso de capacitação "Dia de Fiscal", voltado aos servidores lotados na sede da ANTAQ que não atuam na SFC e aos servidores administrativos lotados nas Unidades Regionais (URE), destinado a apresentar os conceitos introdutórios da fiscalização e a legislação aplicável, bem como a realidade da execução de uma ação fiscalizatória. Motivação do Projeto: aperfeiçoar a interface com as demais Superintendências; difundir o conhecimento fiscalizatório; proporcionar uma visão sistêmica das atividades da ANTAQ. Módulo Teórico: EAD síncrono de 4 horas. Novidades de 2026: destinação de vagas para os 30 novos servidores.'},

{n:32, kind:'content', tag:'PLANEJAMENTO', icon:'fa-helicopter', title:'Curso de Pilotagem de Drones', sub:'Tecnologia a serviço da fiscalização',
 img:'drones-equip.jpeg (equipamentos) e drones-campo.jpeg (campo)',
 body:'Duas fotos (equipamentos + atividade de campo) compondo uma faixa/figuras, texto à esquerda. Motivação do Projeto: ampliação do escopo fiscalizatório; agilidade nas inspeções de grandes áreas; acesso a áreas remotas ou de difícil acesso. Módulo Teórico e Prático presenciais: 15 participantes, sendo 4 convidados externos (Marinha do Brasil, ANTT e PRF). Novidades de 2026: Curso Intermediário de Pilotagem Avançada — apenas para pilotos veteranos.'},

{n:33, kind:'content', tag:'PLANEJAMENTO', icon:'fa-shirt', title:'Nova Identidade Visual — Vestuário', sub:'Uniformes da Fiscalização ANTAQ',
 img:'uniformes-vestuario.png e uniformes-tatico.png (pranchas de uniformes)',
 body:'Slide-vitrine: as pranchas de uniformes como figuras grandes (vestuário base + itens táticos refletivos). Texto curto/legenda: nova identidade visual da Fiscalização — vestuário e itens de campo. Liste em chips os itens: Camisa Social, Camisa Polo Fiscalização, Camiseta Básica, Segunda Pele, Calça Fiscalização, Colete Refletivo, Colete Fiscalização, Capa de Colete Balístico, Bota Tática, Corta Vento, Capa de Chuva, Boné, Mochila. Inclua o link do manual: https://bit.ly/ManualUniformesSFC.'},

{n:34, kind:'content', tag:'PLANEJAMENTO', icon:'fa-helmet-safety', title:'Nova Identidade Visual — EPIs e Equipamentos Táticos', sub:'Proteção e segurança do fiscal',
 img:'uniformes-epi.png (prancha de EPIs)',
 body:'Prancha de EPIs como figura grande, com a lista de itens em chips/grade: Respirador tipo concha, Luva de Segurança, Óculos de Proteção, Óculos de Proteção Amplo, Óculos de Segurança, Cinto Social, Cinto Tático, Porta Documento, Colete Balístico, Capacete com abafador, Protetor Auricular, Distintivo. Link do manual: https://bit.ly/ManualUniformesSFC.'},

// DIVISOR MÓDULO 2
{n:35, kind:'divider', tag:'', icon:'fa-satellite-dish', title:'Inteligência da Fiscalização',
 sub:'Parcerias e fontes de inteligência: SISBIN, RedeMAIS, SINESP/INFOSEG, ANTAQ/PRF, Conportos, CEPAI', img:'logo-antaq-branca.png',
 body:'DIVISOR de módulo (fundo gradiente escuro). "MÓDULO 2" grande em dourado. Título "Inteligência da Fiscalização". Subtítulo com as parcerias. Ícone decorativo gigante (fa-satellite-dish ou fa-shield-halved) ao fundo.'},

// MÓDULO 2 — INTELIGÊNCIA
{n:36, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-landmark', title:'Introdução ao SISBIN e Evolução Histórica', sub:'Sistema Brasileiro de Inteligência',
 img:'nenhuma — recriar nativamente (linha do tempo + cartões)',
 body:'3 blocos. 1) O que é o SISBIN — sistema de assessoramento estratégico; integra diversos órgãos públicos para a segurança do Estado (fa-diagram-project). 2) Criação e evolução (linha do tempo): instituído pela Lei nº 9.883/1999; regulamentado pelo Decreto nº 4.376/2002; Novo SISBIN pelo Decreto nº 11.693/2023 (fa-clock-rotate-left). 3) Objetivos principais — subsidiar decisões governamentais de alto nível; atuação em defesa externa, segurança interna e relações exteriores (fa-bullseye). Destaque a linha do tempo das normas.'},

{n:37, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-shield-halved', title:'Áreas de Atuação do SISBIN', sub:'Temas estratégicos monitorados pelo Novo SISBIN',
 img:'nenhuma — recriar nativamente (grade de chips/cartões em torno do emblema "NOVO SISBIN")',
 body:'Recrie a infografia do PPT: emblema central "NOVO SISBIN" e, ao redor, uma grade de cartões/chips com os temas: Proteção de fronteiras e integridade territorial; Instabilidade nuclear e armas de destruição em massa; Crime organizado e finanças ilegais; Segurança de infraestruturas críticas; Segurança cibernética e caos informacional; Mudanças climáticas e segurança humana; Contraespionagem e contrainterferência; Riscos decorrentes de crises internacionais; Terrorismo e extremismo violento; Crimes ambientais e de prejuízo disseminado; Proteção de conhecimentos sensíveis; Análise de riscos e vulnerabilidades; Segurança Global e Regional; Conflitos armados internacionais; Violência interpessoal e entre grupos sociais; Negociações internacionais que afetam o Brasil. Use ícones FontAwesome adequados a cada tema e cartões compactos (grade 4×4 ou similar) para caber tudo.'},

{n:38, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-arrows-rotate', title:'Reformas e Estrutura do Novo SISBIN', sub:'Decreto nº 11.693/2023',
 img:'nenhuma — recriar nativamente (3 blocos)',
 body:'3 blocos. 1) Motivações para a reforma — necessidade de modernização após 20 anos; falta de critérios claros, baixa integração e gestão deficiente (fa-triangle-exclamation). 2) Principais inovações do Novo SISBIN (2023) — reorganização do sistema da ABIN, com inclusão das Unidades da Federação; estratificação dos órgãos (permanentes, dedicados, associados, federados); criação de Câmaras Temáticas (ex.: Câmara Temática do Sistema Financeiro Nacional) (fa-star). 3) Governança e instrumentos de apoio — novo papel do Conselho Consultivo (Consisbin); planos de trabalho e integração digital (Plataforma SISBIN) (fa-sitemap).'},

{n:39, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-circle-nodes', title:'Estrutura do Novo SISBIN', sub:'Órgãos por nível de integração',
 img:'sisbin-estrutura.png (diagrama em arcos)',
 body:'Slide com o diagrama em arcos (figura grande à esquerda ou centro) e uma legenda explicativa à direita. Legenda dos níveis (do centro para fora): Órgão Central (ABIN); Órgãos Permanentes; Órgãos Dedicados (inclui ANTAQ/MPOR); Órgãos Associados; Unidades da Federação. Eixos transversais: Defesa Externa, Segurança Interna, Relações Exteriores, Governabilidade. Destaque que a ANTAQ figura entre os Órgãos Dedicados.'},

{n:40, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-anchor', title:'Participação da ANTAQ no SISBIN', sub:'O papel estratégico do setor aquaviário',
 img:'nenhuma — recriar nativamente (3 blocos)',
 body:'3 blocos. 1) Ingresso e papel da ANTAQ — desde 2018, por meio da Gerência de Planejamento e Inteligência da Fiscalização (GPF); oficializada pela Portaria GAB/DG/ABIN nº 926/2023 (fa-door-open). 2) Importância estratégica — o setor aquaviário como vetor crítico para a segurança nacional e a economia; a ANTAQ é responsável por coletar, integrar e compartilhar dados relevantes à inteligência (fa-star). 3) Contribuições específicas — fiscalização e monitoramento do transporte aquaviário (ex.: Painel Situação dos Portos); complementação da visão estratégica do SISBIN; participação em capacitações (ex.: curso Esint em 2025) (fa-list-check).'},

{n:41, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — Novo SISBIN', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "Qual das alternativas a seguir descreve corretamente uma inovação central trazida pelo Decreto nº 11.693/2023 no contexto do Novo SISBIN, em relação à composição e governança do Sistema?" ALTERNATIVAS — A) A exclusão da ABIN como órgão central do Sistema, com substituição por governança colegiada composta por representantes das Forças Armadas e do Ministério da Justiça. B) A eliminação da categoria de órgãos dedicados, com unificação de todos os membros como órgãos associados, visando à simplificação da estrutura. C) A criação da categoria de órgãos federados, permitindo a adesão formal das Unidades da Federação ao SISBIN, com previsão de acordos de adesão e planos de trabalho. D) A retirada do papel estratégico da ANTAQ, por não possuir unidade própria de inteligência, limitando sua atuação ao compartilhamento de dados econômicos. E) A substituição do Conselho Consultivo (Consisbin) por uma Câmara Deliberativa composta exclusivamente por membros do Poder Executivo Federal. CORRETA = C.'},

{n:42, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-satellite', title:'Programa Brasil MAIS — RedeMAIS', sub:'Adesão à Rede do Programa Brasil MAIS',
 img:'redemais-portal.gif (portal/serviços) e/ou brasilmais-banner.png (banner)',
 body:'Slide combinando visão geral + termos da adesão. Use o banner/portal como figura. Texto/cartões: Objeto — acesso a plataforma de imagens geoespaciais de todo o Brasil, com imagens diárias e alertas de alterações. Prazo — 60 meses, prorrogável no interesse mútuo dos partícipes. Recursos — não envolve transferência de recursos financeiros entre os órgãos cooperados. Processo SEI: 50300.014095/2021-75. Mencione os serviços do portal (Imagens Diárias e Mosaicos Planet, Dashboard de Alertas, Plataforma EAD, Geo Serviços e Plugin QGIS, Indicadores).'},

{n:43, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-images', title:'Comparativo de Imagens — Porto de Santos', sub:'Detecção de alterações por sensoriamento remoto',
 img:'santos-comparativo.gif (comparação de satélite)',
 body:'Slide-vitrine de imagem: a comparação de satélite (GIF) como figura grande e central, com moldura/legenda "Comparação de imagens de satélite — Porto de Santos". Texto curto explicando que a plataforma permite comparar imagens em datas distintas para identificar alterações (novas construções, movimentações, ocupações) em áreas portuárias.'},

{n:44, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-bell', title:'Dashboard de Alertas', sub:'Monitoramento contínuo via RedeMAIS',
 img:'redemais-portal.gif (portal com o Dashboard de Alertas)',
 body:'Slide com a captura do portal/dashboard como figura e texto explicativo: o Dashboard de Alertas centraliza a visualização e o acompanhamento dos alertas gerados pela plataforma (alterações detectadas por sensoriamento remoto), permitindo priorizar verificações. Relacione com os Relatórios Analíticos de Alertas (RAA) abordados a seguir.'},

{n:45, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-ship', title:'Benefícios do RedeMAIS — Alertas de Embarcações', sub:'Relatórios Analíticos de Alertas (RAA)',
 img:'nenhuma — recriar nativamente',
 body:'Cartões. Conceito: geração automatizada de relatórios analíticos de alertas (RAA) com base no cruzamento de dados espaciais para identificação de atividades ilícitas. Alerta de embarcações — relatórios diários sobre embarcações, dragas ou balsas detectadas em perímetro previamente delimitado (fa-ship). Possibilidades — utilização em áreas de restrição em portos e detecção de atividades não autorizadas (fa-triangle-exclamation). Processo SEI: 50300.014095/2021-75.'},

{n:46, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-building-circle-exclamation', title:'Benefícios do RedeMAIS — Alertas de Construções', sub:'Relatórios Analíticos de Alertas (RAA)',
 img:'nenhuma — recriar nativamente',
 body:'Cartões. Alerta de construções — relatórios diários sobre construções detectadas em perímetro previamente delimitado (fa-helmet-safety). Possibilidades — detecção de áreas construídas em arrendamentos com restrição (fa-map-location-dot). Reforce o ganho de capacidade de fiscalização remota e tempestiva sobre obras irregulares em áreas portuárias arrendadas.'},

{n:47, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — RedeMAIS / Brasil MAIS', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "A adesão da ANTAQ ao Programa Brasil MAIS, por meio da RedeMAIS, trouxe diversas melhorias na fiscalização do transporte aquaviário no Brasil. Entre as principais funcionalidades da plataforma, destaca-se:" ALTERNATIVAS — A) O monitoramento em tempo real das embarcações por meio de chips de rastreamento implantados nos cascos das embarcações fiscalizadas. B) A geração automatizada de relatórios analíticos de alertas (RAA) com base no cruzamento de dados espaciais para identificação de atividades ilícitas. C) A substituição completa da fiscalização presencial por um sistema 100% automatizado baseado em inteligência artificial. D) O uso exclusivo da tecnologia para monitoramento de áreas costeiras, sem cobertura de áreas terrestres. E) A restrição do uso das imagens de satélite apenas a instituições policiais e militares, sem compartilhamento com órgãos reguladores. CORRETA = B.'},

{n:48, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-magnifying-glass', title:'SINESP / INFOSEG', sub:'Sistema Nacional de Informações de Segurança Pública',
 img:'sinesp-logo.jpg (banner SINESP)',
 body:'Slide de abertura do tema SINESP/INFOSEG. Use o banner SINESP como figura. Texto introdutório: o SINESP/INFOSEG é a plataforma nacional de informações integradas de segurança pública, à qual a ANTAQ aderiu para apoiar suas atividades de fiscalização e inteligência. Antecipe os 3 eixos detalhados no próximo slide (consultas operacionais, investigativas e estratégicas).'},

{n:49, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-database', title:'Adesão ao SINESP / INFOSEG', sub:'Processo SEI 50300.021266/2018-17',
 img:'nenhuma — recriar nativamente (3 cartões)',
 body:'3 cartões: Objeto — acesso a plataforma de informações integradas, que possibilita consultas operacionais, investigativas e estratégicas sobre segurança pública (fa-layer-group). Inteligência — uso restrito aos profissionais de segurança pública, justiça, fiscalização e órgãos de controle (fa-user-shield). Dados e informações — referentes a indivíduos, empresas, veículos (terrestres e embarcações) e armas (fa-id-card). Mencione o processo SEI 50300.021266/2018-17.'},

{n:50, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-shield-halved', title:'Benefícios do SINESP / INFOSEG', sub:'Ganhos estratégicos, operacionais e de segurança',
 img:'parintins-ip4.jpeg (foto IP4 de Parintins)',
 body:'Foto à direita (legenda: "IP4 de Parintins — ponto de chegada e partida na terra do Festival"), 3 cartões à esquerda: Estratégico — planejamento aprimorado em ações conjuntas com órgãos de fiscalização e de inteligência (fa-chess). Operacional — assertividade nas intimações em processos sancionadores (fa-bullseye). Segurança — aumento da segurança física dos agentes em abordagens fiscais (fa-user-shield).'},

{n:51, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-display', title:'INFOSEG na Prática', sub:'Consulta integrada de bases de dados',
 img:'infoseg-tela.png (tela de pesquisa do Infoseg)',
 body:'Slide-vitrine: a captura da tela de pesquisa do SINESP/Infoseg como figura grande, com moldura/legenda. Texto curto: a partir de uma única consulta, o fiscal acessa diversas bases integradas (ex.: Receita Federal/PF, SENATRAN-RENACH, CNJ-BNMP, RAIS Trabalhador, CÓRTEX, Registro Civil, entre outras), apoiando notificações, intimações e a avaliação de riscos em campo. Acesso restrito por perfil/função.'},

{n:52, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — SINESP / INFOSEG', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "Qual das seguintes afirmações sobre o Sinesp Infoseg e sua integração com a ANTAQ está correta?" ALTERNATIVAS — A) O Sinesp Infoseg é um sistema exclusivo da Polícia Federal, restringindo o acesso a outras instituições governamentais. B) A adesão da ANTAQ ao Infoseg permite acesso irrestrito a qualquer tipo de informação disponível na plataforma, sem limitações de cargos ou funções. C) O principal benefício da integração da ANTAQ ao Infoseg é a possibilidade de monitorar em tempo real todas as embarcações em águas territoriais brasileiras. D) A adesão da ANTAQ ao Infoseg, formalizada em 2024, permite acesso a registros de veículos, dados de tripulantes e informações de empresas fiscalizadas, auxiliando nas atividades de fiscalização. E) O Infoseg substitui integralmente os outros sistemas de inteligência já utilizados pela ANTAQ, tornando desnecessária qualquer outra fonte de informação para fiscalização. CORRETA = D.'},

{n:53, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-handshake', title:'Acordo de Cooperação Técnica — ANTAQ / PRF', sub:'Polícia Rodoviária Federal',
 img:'prf-travessia.jpg (travessia de veículos Carolina/MA — Filadélfia/TO)',
 body:'Foto à direita (legenda: "Travessia de veículos entre Carolina (MA) e Filadélfia (TO)"), 3 cartões à esquerda: Objeto — desenvolver e aprimorar atividades de inteligência da ANTAQ (fa-lightbulb). Prazo — 12 meses, prorrogado por igual período até o total de 60 meses (fa-calendar). Recursos — não envolve transferência de recursos financeiros entre os órgãos cooperados (fa-ban).'},

{n:54, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-list-check', title:'ANTAQ / PRF — Objetivos Específicos', sub:'Cooperação em inteligência e operações',
 img:'parintins-equipe.png (equipe de fiscalização em Parintins)',
 body:'Foto à direita (legenda: "Servidores da ANTAQ e autoridades locais no planejamento de ações para o Festival de Parintins (AM)"), lista de objetivos à esquerda (cartões/itens): disponibilizar vagas em cursos e eventos de inteligência (fa-graduation-cap); compartilhar informações para avaliação de políticas de segurança pública (fa-share-nodes); intercambiar conhecimento técnico e operacional (fa-people-arrows); implementar operações integradas (fa-users-gear).'},

{n:55, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-helicopter', title:'AlertaBrasil e Capacitação em Drones', sub:'Cooperação operacional e tecnológica',
 img:'drones-recife.jpeg (ANTT/ANTAQ/PRF observando drone no Porto do Recife)',
 body:'Foto à direita (legenda: "Servidores da ANTT, ANTAQ e PRF em curso de pilotagem de drones promovido pela ANTAQ"), 2 blocos à esquerda: EXPECTATIVAS — acesso ao AlertaBrasil pelos fiscais da ANTAQ, para consulta da situação de pessoas e veículos, no cumprimento de notificações e interdições de serviços. INTERCÂMBIO/CAPACITAÇÃO — capacitar servidores fiscais em técnicas de abordagem e entrevista; acesso a dados de inteligência para avaliação de riscos; intercâmbio técnico sobre melhores práticas de fiscalização eletrônica. Use ícones (fa-bell, fa-user-graduate, fa-shield, fa-share-nodes).'},

{n:56, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-shield', title:'Conportos', sub:'Comissão Nacional de Segurança Pública nos Portos, Terminais e Vias Navegáveis',
 img:'conportos-logo.png (brasão da Conportos)',
 body:'Slide de abertura do tema Conportos, com o brasão como figura/destaque. 3 blocos: Apresentação — responsável por coordenar ações para a segurança portuária (fa-shield). Composição — representantes da Marinha, Polícia Federal, ANTAQ e outras entidades (fa-users). Objetivos — desenvolver políticas e diretrizes de segurança; garantir a proteção das infraestruturas portuárias; contribuir para o comércio e a segurança nacional (fa-bullseye).'},

{n:57, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-tower-observation', title:'Conportos e sua Atuação', sub:'Coordenação para a segurança portuária',
 img:'daniel-cco.jpeg (visita ao Centro de Operações — Terminal Ponta da Madeira)',
 body:'Foto à direita (legenda: "Daniel Santos (GRESP) em visita técnica ao Centro de Operações (CCO) do Terminal Ponta da Madeira — São Luís (MA)"), texto à esquerda reforçando o papel coordenador da Conportos: articula múltiplas entidades (Marinha, PF, ANTAQ, operadores) para coordenar ações de segurança pública em portos, terminais e vias navegáveis, padronizando diretrizes e fomentando a integração operacional.'},

{n:58, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-clipboard-check', title:'Principais Ações da Conportos', sub:'ISPS Code, certificações e capacitação',
 img:'daniel-salvador.jpg (instrução de Auditoria Portuária em Salvador)',
 body:'Foto à direita (legenda: "Daniel Santos (GRESP) em instrução teórica sobre Auditoria Portuária — Salvador (BA)"), 3 cartões à esquerda: Grupo de Trabalho ISPS Code — a ANTAQ participa para aprimorar a aplicação do código de segurança; foco na revisão de normas e na segurança em portos brasileiros (fa-book-section). Certificações de Segurança — emissão da Declaração de Cumprimento para terminais portuários (fa-certificate). Capacitação e Educação — Curso Nacional de Auditoria em Instalação Portuária; formação de agentes para auditorias de conformidade (fa-user-graduate).'},

{n:59, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-scale-unbalanced', title:'Conportos — Desafios e Resultados', sub:'Onde estamos e o que avançamos',
 img:'daniel-santos.jpeg (terminal de contêineres no Porto de Santos)',
 body:'Foto à direita (legenda: "Daniel Santos (GRESP) em visita a terminal de contêineres no Porto de Santos (SP)"), duas colunas à esquerda. DESAFIOS: ameaça do terrorismo e tráfico ilícito; modernização das infraestruturas; coordenação entre diferentes entidades (fa-triangle-exclamation). RESULTADOS POSITIVOS: implementação de controle de acesso e vigilância avançada; maior eficiência operacional e redução de incidentes; confiança de investidores e fortalecimento do comércio exterior (fa-circle-check).'},

{n:60, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — Conportos', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "A Comissão Nacional de Segurança Pública nos Portos, Terminais e Vias Navegáveis (Conportos) desempenha papel essencial na segurança portuária no Brasil. Dentre suas atribuições, destaca-se:" ALTERNATIVAS — A) A fiscalização direta das operações de carga e descarga nos portos brasileiros, garantindo o cumprimento das normas trabalhistas pelas operadoras portuárias. B) A elaboração de normas e regulamentos alfandegários para controle da entrada e saída de mercadorias nos portos nacionais. C) A coordenação de ações para mitigar riscos e prevenir ameaças em portos, terminais e vias navegáveis, atuando em parceria com diversas entidades governamentais. D) O licenciamento e a concessão de autorizações para funcionamento de terminais portuários privados, garantindo conformidade com padrões ambientais. E) A gestão exclusiva dos certificados de segurança emitidos para instalações portuárias, sem envolvimento de outras entidades reguladoras como a ANTAQ. CORRETA = C.'},

{n:61, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-mobile-screen', title:'CEPAI/SP e o Aplicativo OiBR', sub:'Segurança portuária em Santos e São Sebastião',
 img:'marimex-aerea.jpeg (vista aérea do Terminal Marimex — Porto de Santos)',
 body:'Foto à direita (legenda: "Vista aérea do Terminal da Marimex — Porto de Santos"), 2 blocos à esquerda. CEPAI/SP — Papel e Importância: Comissão Estadual para segurança portuária em Santos e São Sebastião; integração entre agentes portuários e órgãos reguladores; foco na prevenção de acidentes e incidentes (fa-people-roof). OiBR — Inovação na Segurança Portuária: aplicativo para registro e análise de ocorrências; canal eficiente de comunicação e compartilhamento de boas práticas; análise detalhada por localização, tipo de operação e vítimas; base para políticas públicas mais eficazes (fa-mobile-screen-button).'},

{n:62, kind:'content', tag:'INTELIGÊNCIA', icon:'fa-arrows-to-circle', title:'CEPAI/SP e OiBR — Expansão Nacional', sub:'De OI-CEPAI a OiBR',
 img:'nenhuma — recriar nativamente',
 body:'3 blocos. Convocação de Órgãos e Instituições — a ANTAQ incentiva a participação voluntária de operadores e órgãos anuentes; a CEPAI/SP atua como fórum técnico para troca de informações (fa-bullhorn). Projeto OiBR — Expansão Nacional — evolução do OI-CEPAI para abranger portos de todo o Brasil; desenvolvimento por estudantes da Fatec Rubens Lara (fa-arrows-to-circle). Safety e Security — centralização de informações para maior transparência e segurança; Módulo EROIP para registros rápidos conforme o Código ISPS, com prazo de até 24 horas; implementação desde 2023 nos portos paulistas, fortalecendo prevenção e resposta a emergências (fa-shield-halved).'},

{n:63, kind:'quiz', tag:'PRATICANDO', icon:'fa-circle-question', title:'Praticando — CEPAI/SP e OiBR', sub:'Selecione a alternativa correta', img:'nenhuma',
 body:'PERGUNTA: "A respeito da atuação da Comissão Estadual de Prevenção de Acidentes e Incidentes (CEPAI/SP) nos complexos portuários de Santos e São Sebastião, bem como do desenvolvimento e evolução do aplicativo OiBR, assinale a alternativa correta:" ALTERNATIVAS — A) O aplicativo OiBR substituiu integralmente os relatórios manuais exigidos pelo Código ISPS, dispensando registros formais como o ROIP. B) A criação do OiBR teve como principal motivação o atendimento à exigência legal imposta pela ANTAQ de registros digitais obrigatórios em todos os portos brasileiros. C) A central de controle prevista no projeto OiBR visa apenas o armazenamento de dados, sendo as análises de segurança realizadas exclusivamente pelos terminais portuários. D) O módulo EROIP, previsto para o OiBR, tem como função principal a emissão de registros de incidentes de proteção em até 24 horas, conforme diretrizes do Código ISPS. E) O OiBR é de uso exclusivo da CEPAI/SP e não contempla a participação de entidades como ANTAQ, ABTRA ou operadores portuários convidados. CORRETA = D.'},

// ENCERRAMENTO
{n:64, kind:'closing', tag:'', icon:'fa-anchor', title:'OBRIGADO', sub:'Pedro Henrique Soares · Gerência de Planejamento e Inteligência da Fiscalização — GPF',
 img:'logo-antaq-branca.png',
 body:'ENCERRAMENTO (fundo gradiente escuro, estilo slide-16 do SisPAT). "OBRIGADO" em destaque. Logo ANTAQ branca. Nome "Pedro Henrique Soares", cargo "Gerente de Planejamento e Inteligência da Fiscalização — GPF", e "Superintendência de Fiscalização e Coordenação das Unidades Regionais — SFC". Cartões de contato: Portal Oficial (https://www.gov.br/antaq) e e-mail institucional (fiscalizacao@antaq.gov.br — use este como contato direto). Rodapé com os canais oficiais ANTAQ (Facebook ANTAQ.oficial, Instagram @antaq_oficial, YouTube CanalANTAQ, LinkedIn company/antaq, Twitter/X @ANTAQ_oficial). Frase-tema opcional em dourado: "Inteligência e planejamento a serviço de um setor aquaviário eficiente, seguro e sustentável."'},
]

// ───────────────────────────── PROMPTS ─────────────────────────────
function buildPrompt(s){
  const file = OUT + '/slide-' + pad(s.n) + '.html'
  return [
'Você é designer de slides HTML. Construa UM slide da apresentação institucional',
'"Trilha Técnica — Planejamento e Inteligência da Fiscalização" (SFC/GPF · ANTAQ).',
'',
'ANTES DE COMEÇAR, leia o kit de design (regras OBRIGATÓRIAS) em:',
'  ' + KIT,
'E consulte, para fidelidade visual, estes slides de referência do modelo SisPAT:',
'  ' + REF + '/slide-01.html  (capa, fundo gradiente)',
'  ' + REF + '/slide-02.html  (conteúdo, fundo branco)',
'  ' + REF + '/slide-09.html  (conteúdo com vídeo e cartões)',
'  ' + REF + '/slide-16.html  (encerramento, fundo gradiente)',
'',
'REGRAS: siga o KIT à risca — boilerplate <head> com os 3 CDNs (Tailwind 2.2.19, FontAwesome 6.4.0,',
'Google Fonts Montserrat+Open Sans), html{font-size:26px}, barras de topo nos slides de conteúdo,',
'header com barra vertical + título + tag do módulo, rodapé "Trilha Técnica da Fiscalização · SFC / GPF — ANTAQ"',
'à esquerda e "' + s.n + ' / 64" à direita, e o SCRIPT DE NAVEGAÇÃO postMessage como ÚLTIMO elemento antes de </body>.',
'Layout pensado para 1920×1080 SEM scroll/overflow — todo o conteúdo deve caber com folga. Português do Brasil.',
'Não invente dados além do conteúdo fornecido. Capriche no visual: hierarquia clara, ícones FontAwesome pertinentes,',
'cartões/espaçamento equilibrados, cores da paleta institucional. Imagens ficam em Imagens/ (caminho relativo).',
'',
'ESPECIFICAÇÃO DESTE SLIDE',
'- Arquivo a criar (use a ferramenta Write, caminho absoluto): ' + file,
'- Página: ' + s.n + ' / 64',
'- Tipo: ' + s.kind,
'- Tag do módulo (canto sup. direito): ' + (s.tag || '(sem tag — slide de capa/divisor/encerramento)'),
'- Ícone do tópico (FontAwesome): ' + s.icon,
'- Título: ' + s.title,
'- Subtítulo: ' + (s.sub || '(sem subtítulo)'),
'- Imagem(ns) a embutir: ' + (s.img || 'nenhuma — recriar nativamente'),
'- Conteúdo e layout desejado:',
s.body,
'',
'Escolha os componentes do KIT mais adequados ao conteúdo. Em quizzes, use o padrão interativo do KIT',
'(clique revela alternativa correta em verde e a escolhida errada em vermelho; defina CORRECT com a letra certa;',
'inclua botão Reiniciar). Em slides com foto, use a moldura institucional com legenda. Em capa/divisor/encerramento,',
'use fundo gradiente escuro com acentos dourado/azul à esquerda.',
'',
'Ao terminar, ESCREVA o arquivo com a ferramenta Write e responda APENAS o JSON: {"n": ' + s.n + ', "ok": true}.',
  ].join('\n')
}

function reviewPrompt(s){
  const file = OUT + '/slide-' + pad(s.n) + '.html'
  return [
'Revise e, se necessário, CORRIJA (com Edit/Write) o slide HTML em:',
'  ' + file,
'Conforme o KIT de design em ' + KIT + '. Verifique item a item:',
'1. <head>: os 3 CDNs corretos (Tailwind 2.2.19, FontAwesome 6.4.0, Google Fonts Montserrat+Open Sans),',
'   favicon ANTAQ, e html{font-size:26px}.',
'2. Slides de conteúdo/quiz: barras de topo (#003366 12px + #0066CC 6px) e header com barra vertical + título.',
'3. Rodapé: "Trilha Técnica da Fiscalização · SFC / GPF — ANTAQ" à esquerda e "' + s.n + ' / 64" à direita',
'   (confira que o número é exatamente ' + s.n + ').',
'4. SCRIPT de navegação postMessage presente e como ÚLTIMO <script> antes de </body>, VERBATIM.',
'5. Sem risco de overflow: o conteúdo deve caber em 1920×1080. Se houver excesso de texto/altura, reduza tamanhos,',
'   espaçamentos ou enxugue para caber — sem cortar informação essencial.',
'6. Imagens: se o slide indicava embutir imagem, confira que o <img>/<video> referencia o arquivo correto em Imagens/',
'   (' + (s.img || 'nenhuma') + ') com caminho relativo. Se indicava recriar nativamente, NÃO deve haver <img> de conteúdo.',
'7. Quiz (se aplicável): a interatividade funciona e a letra CORRECT corresponde à alternativa correta do enunciado.',
'8. Português do Brasil correto e texto fiel ao conteúdo.',
'Faça as correções necessárias e responda APENAS o JSON: {"n": ' + s.n + ', "ok": true, "fixed": ["..."]}.',
  ].join('\n')
}

const VERDICT = {
  type:'object',
  properties:{ n:{type:'number'}, ok:{type:'boolean'}, fixed:{type:'array', items:{type:'string'}} },
  required:['n','ok']
}

// ───────────────────────────── EXECUÇÃO ─────────────────────────────
log('Construindo ' + S.length + ' slides da Trilha Técnica da Fiscalização…')

const results = await pipeline(
  S,
  s => agent(buildPrompt(s), { label: 'build:slide-' + pad(s.n) + ' ' + s.title.slice(0,32), phase: 'Construir' })
        .then(() => s),
  s => agent(reviewPrompt(s), { label: 'review:slide-' + pad(s.n), phase: 'Revisar', schema: VERDICT })
)

const ok = results.filter(Boolean)
const problems = ok.filter(r => r && r.ok === false)
log('Concluído: ' + ok.length + '/' + S.length + ' slides revisados. Com ressalvas: ' + problems.length)
return { total: S.length, revisados: ok.length, ressalvas: problems }
