import type { GrupoStack } from './types'

// ─────────────────────────────────────────────────────────────
// FERRAMENTAS QUE VOCÊ USA
// "para" é a explicação simples que o cliente lê.
// ─────────────────────────────────────────────────────────────

export const stack: GrupoStack[] = [
  {
    grupo: 'O que o cliente vê',
    explicacao: 'Telas, botões e páginas. Na área isso se chama front-end.',
    itens: [
      { nome: 'React', para: 'Telas rápidas e interativas' },
      { nome: 'TypeScript', para: 'Código mais seguro, com menos erros' },
      { nome: 'Vite', para: 'Sites que carregam rápido' },
      { nome: 'Tailwind CSS', para: 'Visual consistente em qualquer tela' },
    ],
  },
  {
    grupo: 'O que funciona por trás',
    explicacao: 'Regras, cálculos, login e segurança. Na área isso se chama back-end.',
    itens: [
      { nome: 'Java', para: 'Linguagem usada por bancos e grandes empresas' },
      { nome: 'Spring Boot', para: 'Sistemas robustos e seguros em Java' },
    ],
  },
  {
    grupo: 'Onde as informações ficam',
    explicacao: 'Bancos de dados guardam clientes, pedidos, agendamentos e tudo que o sistema precisa lembrar.',
    itens: [
      { nome: 'MySQL', para: 'Banco de dados confiável e muito usado' },
      { nome: 'Supabase', para: 'Dados e login prontos, ideal para projetos menores' },
    ],
  },
  {
    grupo: 'Para colocar no ar',
    explicacao: 'Publicação na internet e organização do trabalho.',
    itens: [
      { nome: 'Vercel', para: 'Publica sites rápidos na internet' },
      { nome: 'Git e GitHub', para: 'Histórico seguro de cada versão do projeto' },
      { nome: 'Docker', para: 'O sistema funciona igual em qualquer computador' },
      { nome: 'Figma', para: 'Desenho das telas antes de programar' },
    ],
  },
]

/** Mensagem exibida abaixo das ferramentas. Deixe '' para esconder. */
export const aprendizado =
  'Estou sempre evoluindo e aprendo novas ferramentas com facilidade. Se o seu projeto pede uma tecnologia diferente, eu estudo e aplico. Também uso inteligência artificial como apoio no desenvolvimento, o que agiliza as entregas.'
