/**
 * Todo o conteúdo editorial do site vive aqui.
 * Para actualizar textos, serviços ou dados de contacto, edita este ficheiro —
 * não é preciso mexer nos componentes.
 */

export const site = {
  name: "TXUVUKKA",
  tagline: "Estúdio de Design e Publicidade",
  // TODO: substituir pelos dados reais antes de publicar
  email: "ola@txuvukka.co.mz",
  phone: "+258 84 000 0000",
  phoneHref: "+258840000000",
  whatsapp: "https://wa.me/258840000000",
  street: "Av. Julius Nyerere, 1234",
  city: "Maputo",
  country: "Moçambique",
  address: "Av. Julius Nyerere, 1234, Maputo — Moçambique",
  founded: "2016",
  social: [
    { label: "Instagram", href: "https://instagram.com/txuvukka" },
    { label: "Behance", href: "https://behance.net/txuvukka" },
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

export const services = [
  {
    number: "01",
    title: "Identidade Visual",
    description:
      "Construímos marcas do símbolo ao sistema completo: logótipo, tipografia, paleta, aplicações e manual de normas.",
    items: ["Naming", "Logótipo", "Manual de marca", "Papelaria"],
  },
  {
    number: "02",
    title: "Publicidade",
    description:
      "Campanhas que ocupam espaço e ficam na memória — do conceito à peça final, para exterior, imprensa e digital.",
    items: ["Conceito criativo", "Outdoor", "Rádio e TV", "Imprensa"],
  },
  {
    number: "03",
    title: "Design Gráfico",
    description:
      "Peças impressas e digitais com hierarquia clara e execução precisa. O detalhe é o que separa o bom do esquecível.",
    items: ["Editorial", "Embalagem", "Catálogos", "Sinalética"],
  },
  {
    number: "04",
    title: "Conteúdo Digital",
    description:
      "Presença consistente nas redes: linha visual, calendário editorial e produção contínua de conteúdo.",
    items: ["Social media", "Motion", "Fotografia", "Copywriting"],
  },
  {
    number: "05",
    title: "Web & Interfaces",
    description:
      "Websites e interfaces rápidas, acessíveis e alinhadas com a marca — desenhadas e construídas pela mesma equipa.",
    items: ["Websites", "Landing pages", "UI/UX", "Manutenção"],
  },
  {
    number: "06",
    title: "Estratégia de Marca",
    description:
      "Antes da forma vem a decisão. Posicionamento, arquitectura de marca e tom de voz para orientar tudo o resto.",
    items: ["Posicionamento", "Tom de voz", "Arquitectura", "Auditoria"],
  },
] as const;

export const work = [
  {
    title: "Mafalala Records",
    category: "Identidade Visual",
    year: "2025",
    note: "Sistema de marca para editora discográfica independente.",
  },
  {
    title: "Costa do Sol",
    category: "Campanha",
    year: "2025",
    note: "Campanha de exterior e imprensa para rede de restauração.",
  },
  {
    title: "Ncoana",
    category: "Embalagem",
    year: "2024",
    note: "Linha de embalagem para produtos alimentares locais.",
  },
  {
    title: "Banco Meridiano",
    category: "Editorial",
    year: "2024",
    note: "Relatório anual e sistema de infografia institucional.",
  },
  {
    title: "Festival Xitende",
    category: "Publicidade",
    year: "2023",
    note: "Identidade e comunicação integrada de festival de música.",
  },
  {
    title: "Zambeze Log",
    category: "Web & Marca",
    year: "2023",
    note: "Reposicionamento e website para operador logístico.",
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
