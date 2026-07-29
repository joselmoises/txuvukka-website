/**
 * Todo o conteúdo editorial do site vive aqui.
 * Para actualizar textos, serviços ou dados de contacto, edita este ficheiro —
 * não é preciso mexer nos componentes.
 */

import anjeStand from "@/assets/trabalho/anje-stand.jpg";
import idonioIdentidade from "@/assets/trabalho/idonio-identidade.jpg";
import idonioInfografia from "@/assets/trabalho/idonio-infografia-avc.jpg";
import laforneriaIdentidade from "@/assets/trabalho/laforneria-identidade.jpg";
import morelifeMerch from "@/assets/trabalho/morelife-merchandising.jpg";
import nexaIdentidade from "@/assets/trabalho/nexa-identidade.jpg";
import prestigeDef from "@/assets/trabalho/prestige-def-hybrid.jpg";
import prestigeOutubroRosa from "@/assets/trabalho/prestige-outubro-rosa.jpg";

// Contactos retirados das peças de divulgação da própria TXUVUKKA
// (ver Downloads/photo_...748100 e ...748105). Confirmar antes de publicar.
export const site = {
  name: "TXUVUKKA",
  tagline: "Estúdio de Design e Publicidade",
  email: "geral@txuvukka.com",
  emailAlt: "txuvukka@gmail.com",
  phone: "+258 83 414 07 63",
  phoneHref: "+258834140763",
  whatsapp: "https://wa.me/258834140763",
  website: "www.txuvukka.com",
  street: "Av. Dom Alexandre, Mahotas, nº 1840",
  city: "Maputo",
  country: "Moçambique",
  address: "Av. Dom Alexandre, Mahotas, nº 1840, Maputo — Moçambique",
  // TODO: confirmar o ano de fundação — não consta em nenhuma das peças.
  founded: "2016",
  social: [
    { label: "Instagram", href: "https://instagram.com/txuvukka" },
    { label: "Facebook", href: "https://facebook.com/txuvukka" },
    { label: "LinkedIn", href: "https://linkedin.com/company/txuvukka" },
  ],
} as const;

/** Detentor do copyright — este site é uma demonstração da Konekto Software. */
export const owner = {
  name: "Konekto Software",
  href: "https://konekto.co.mz",
} as const;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalho", href: "#trabalho" },
  { label: "Processo", href: "#processo" },
  { label: "Estúdio", href: "#estudio" },
  { label: "Contacto", href: "#contacto" },
] as const;

/**
 * Os cinco serviços que a TXUVUKKA anuncia no destaque «SERVIÇOS» do Instagram
 * (ver a pasta WhatsApp). Os textos são adaptados dos originais — não foram
 * inventados serviços que a empresa não presta.
 *
 * `wide: true` faz o cartão ocupar duas colunas, para a grelha de 5 fechar sem
 * buracos no ecrã grande.
 */
export const services = [
  {
    number: "01",
    title: "Design Gráfico",
    description:
      "Unimos criatividade e estratégia para comunicar uma mensagem visualmente impactante. É aqui que ajudamos a moldar a percepção da sua marca — do logótipo aos materiais de marketing.",
    items: ["Logótipos", "Materiais de marketing", "Identidade"],
  },
  {
    number: "02",
    title: "Gestão de Redes Sociais",
    description:
      "Maximizamos a sua presença online. Criamos conteúdo estratégico, interagimos com o seu público e construímos uma comunidade fiel — mais visibilidade, engajamento e crescimento.",
    items: ["Conteúdo estratégico", "Gestão de comunidade", "Calendário"],
  },
  {
    number: "03",
    title: "Produção de Fotos e Vídeos",
    description:
      "Destaque-se dos concorrentes transformando a sua narrativa em imagens poderosas. A produção audiovisual cria ligações emocionais e impulsiona a visibilidade da marca.",
    items: ["Fotografia", "Vídeo", "Produção audiovisual"],
  },
  {
    number: "04",
    title: "Anúncios",
    description:
      "Com estratégias certeiras, conquistamos a atenção do seu público e levamos os seus produtos aos clientes — no digital, em eventos presenciais, em outdoors e na imprensa.",
    items: ["Digital", "Outdoors", "Rádio e TV", "Jornal", "Eventos"],
  },
  {
    number: "05",
    title: "Printing",
    description:
      "Uma variedade de serviços de impressão para a sua marca, do pequeno formato ao material de feira.",
    items: [
      "Estampagem",
      "Bordado",
      "Folhetos",
      "Cartões de visita",
      "Banners",
      "Livros e revistas",
      "Rollups",
      "Gazebos",
      "Teardrops",
      "Backdrops",
      "Bandeiras",
      "Stickers",
      "Vinil",
      "Brindes personalizados",
    ],
    wide: true,
  },
] as const;

/**
 * Trabalho real do estúdio. As imagens vivem em `src/assets/trabalho/`,
 * já redimensionadas (lado maior 1100px).
 *
 * ⚠️ OS ANOS SÃO TODOS ESTIMATIVAS MINHAS — CORRIGIR.
 * Nenhuma das oito peças usadas traz data visível. Os posts do Idónio que vi
 * na pasta Downloads tinham datas de 2026, mas não são estas duas peças (o
 * logótipo e a infografia do AVC não têm data). A secção é ordenada do mais
 * recente para o mais antigo a partir deste campo, por isso a ordem no site
 * só fica certa depois de estes anos estarem certos.
 */
export const work = [
  {
    title: "ANJE",
    category: "Stand & Ativação",
    year: "2025",
    note: "Stand de feira para a Associação Nacional de Jovens Empresários, do painel gráfico à sinalética do espaço.",
    image: anjeStand,
  },
  {
    title: "Idónio",
    category: "Identidade Visual",
    year: "2026",
    note: "Marca do Centro de Saúde Idónio — símbolo, tipografia e assinatura «O maior aliado da saúde».",
    image: idonioIdentidade,
  },
  {
    title: "Grupo Prestige Solutions",
    category: "Campanha",
    year: "2025",
    note: "Campanha de Outubro Rosa para o sector industrial, adaptada a redes sociais e materiais internos.",
    image: prestigeOutubroRosa,
  },
  {
    title: "Morelife Gym",
    category: "Marca & Merchandising",
    year: "2025",
    note: "Identidade do ginásio aplicada a vestuário e material de treino.",
    image: morelifeMerch,
  },
  {
    title: "Idónio",
    category: "Infografia",
    year: "2026",
    note: "Série de peças de literacia em saúde — fatores de risco do AVC explicados para leitura rápida.",
    image: idonioInfografia,
  },
  {
    title: "La Forneria",
    category: "Identidade Visual",
    year: "2025",
    note: "Marca para padaria e pastelaria, com símbolo da espiga e do forno integrados no logótipo.",
    image: laforneriaIdentidade,
  },
  {
    title: "Prestige Solutions",
    category: "Catálogo de Produto",
    year: "2025",
    note: "Fichas de produto para equipamento de protecção individual, num sistema aplicável a toda a gama.",
    image: prestigeDef,
  },
  {
    title: "nexa.",
    category: "Identidade Visual",
    year: "2026",
    note: "Logótipo geométrico de traço contínuo, desenhado para funcionar a qualquer escala.",
    image: nexaIdentidade,
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Escutar",
    description:
      "Começamos por perceber o negócio, o mercado e o que está realmente em jogo. Sem diagnóstico não há solução.",
  },
  {
    step: "02",
    title: "Definir",
    description:
      "Traduzimos o que ouvimos numa direcção clara: posicionamento, território criativo e critérios de sucesso.",
  },
  {
    step: "03",
    title: "Criar",
    description:
      "Desenhamos, testamos e refinamos. Apresentamos rotas fundamentadas, não colecções de opções aleatórias.",
  },
  {
    step: "04",
    title: "Entregar",
    description:
      "Preparamos todos os ficheiros, formatos e normas para que a marca funcione sem nós na sala.",
  },
] as const;

/**
 * ⚠️ NÚMEROS POR CONFIRMAR — NÃO PUBLICAR ASSIM.
 *
 * Estes valores foram inventados como marcadores de posição quando o site
 * ainda não tinha conteúdo real. Não há nada nos materiais fornecidos que os
 * sustente. Substituir pelos números verdadeiros ou apagar a secção inteira
 * (a grelha em `About.tsx` desaparece sozinha se este array ficar vazio).
 *
 * O mesmo se aplica a `site.founded`, usado no hero como «desde 2016».
 */
export const stats = [
  { value: "120+", label: "Projectos entregues" },
  { value: "48", label: "Marcas acompanhadas" },
  { value: "9", label: "Anos de estúdio" },
  { value: "4", label: "Países" },
] as const;

export const beliefs = [
  "O preto e o branco obrigam a resolver a ideia antes da decoração.",
  "Uma marca não é um logótipo — é tudo o que fica depois dele.",
  "Trabalho bom explica-se em duas frases. O resto é justificação.",
] as const;
