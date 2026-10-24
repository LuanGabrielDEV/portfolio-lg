import type { Marco } from './types'

// ─────────────────────────────────────────────────────────────
// SUA TRAJETÓRIA (a linha do tempo do site)
// ramo: 'main' para trabalhos e projetos · 'estudos' para formação e cursos.
// data: 'AAAA-MM'. Sem data ainda? Deixe '' (vai para o fim).
// futuro: true → aparece no topo com a etiqueta "Em breve".
// ─────────────────────────────────────────────────────────────

export const trajetoria: Marco[] = [
  {
    data: '',
    futuro: true,
    titulo: 'Bacharelado em Sistemas de Informação',
    tipo: 'formacao',
    ramo: 'estudos',
    instituicao: 'Uninassau',
  },
  {
    data: '2026-10',
    titulo: 'Projeto Romper',
    tipo: 'projeto',
    ramo: 'main',
    descricao: 'Página de inscrição de um evento, com pagamento online e confirmação automática por e-mail.',
    link: 'https://acoragempararomper.vercel.app/',
  },
  {
    data: '2026-10',
    titulo: 'Identidade visual e portfólio lg',
    tipo: 'projeto',
    ramo: 'main',
    descricao: 'Criei minha marca e este site, do desenho do logo até a publicação na internet.',
  },
  {
    data: '2026-04',
    titulo: 'Técnico de Inovações Acadêmicas',
    tipo: 'experiencia',
    ramo: 'main',
    instituicao: 'Uninassau EAD',
    descricao: 'Suporte de TI para a operação de ensino a distância.',
  },
  {
    data: '2026-03',
    titulo: 'Desafio de Emagrecimento – 7 Dias',
    tipo: 'projeto',
    ramo: 'main',
    descricao: 'Página de vendas para o desafio de um personal trainer, com inscrição pelo WhatsApp.',
    link: 'https://mentoriaals.vercel.app/',
  },
  {
    data: '2024-08',
    titulo: 'Análise e Desenvolvimento de Sistemas',
    tipo: 'formacao',
    ramo: 'estudos',
    instituicao: 'Senac · 3 períodos cursados',
    descricao: 'Base em lógica de programação, banco de dados e desenvolvimento web.',
  },
  {
    data: '',
    titulo: 'Java: aplicando a Orientação a Objetos',
    tipo: 'certificado',
    ramo: 'estudos',
  },
  {
    data: '',
    titulo: 'Java: primeira aplicação',
    tipo: 'certificado',
    ramo: 'estudos',
  },
  {
    data: '',
    titulo: 'Lógica de Programação',
    tipo: 'certificado',
    ramo: 'estudos',
  },
]
