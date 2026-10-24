import type { Projeto } from './types'

// ─────────────────────────────────────────────────────────────
// SEUS PROJETOS
// Para adicionar um projeto, copie um bloco { ... } e cole no
// início da lista. Imagens: coloque o arquivo em public/projetos/
// e use imagem: '/projetos/nome-do-arquivo.png'.
// Escreva resumo e descrição para um cliente leigo: qual problema
// o projeto resolve, para quem, e o resultado.
// Itens com exemplo: true não aparecem no site publicado.
// ─────────────────────────────────────────────────────────────

export const projetos: Projeto[] = [
  {
    id: 'projeto-romper',
    titulo: 'Projeto Romper',
    resumo: 'Página de vendas e inscrição de um evento presencial, com pagamento online e confirmação automática.',
    descricao:
      'Site do evento "Coragem para Romper e Recomeçar", uma experiência presencial para mulheres.\n\nA visitante conhece a proposta, a programação e as organizadoras, faz a inscrição e paga pelo Mercado Pago sem sair da página. A inscrição vai sozinha para uma planilha do Google e ela recebe um e-mail de confirmação na hora. Também tem perguntas frequentes e botão de WhatsApp para tirar dúvidas.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Mercado Pago', 'Google Planilhas', 'Vercel'],
    imagem: '/projetos/romper.jpg',
    repositorio: 'https://github.com/LuanGabrielDEV/acoragemderomper',
    demo: 'https://acoragempararomper.vercel.app/',
    data: '2026-10',
    status: 'concluido',
    destaque: true,
  },
  {
    id: 'desafio-7-dias',
    titulo: 'Desafio de Emagrecimento – 7 Dias',
    resumo: 'Página de vendas para o desafio de um personal trainer, com inscrição direto pelo WhatsApp.',
    descricao:
      'Site do desafio de 7 dias do personal trainer Alyson Rafael.\n\nA página apresenta o desafio, os benefícios, o personal e os depoimentos de alunos. Na inscrição, a pessoa preenche os dados, escolhe Pix ou cartão e é levada ao WhatsApp do personal com a mensagem pronta, facilitando o fechamento da venda. O site foi pensado primeiro para o celular, de onde vem a maioria dos acessos pelas redes sociais.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    imagem: '/projetos/mentoria-7-dias.jpg',
    repositorio: 'https://github.com/LuanGabrielDEV/mentoriaals',
    demo: 'https://mentoriaals.vercel.app/',
    data: '2026-03',
    status: 'concluido',
  },
  {
    id: 'portfolio-lg',
    titulo: 'Portfólio lg',
    resumo: 'Marca própria e este site, do desenho do logo até a publicação na internet.',
    descricao:
      'Criei a identidade visual lg: o símbolo desenha as letras l e g com as linhas usadas para mostrar o histórico de um software. Depois construí este site, que funciona bem no celular, carrega rápido e é fácil de atualizar sempre que tenho um projeto ou curso novo.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    repositorio: 'https://github.com/LuanGabrielDEV/portfolio-lg',
    demo: '',
    data: '2026-10',
    status: 'concluido',
  },
  {
    id: 'exemplo-api',
    titulo: '[Nome do projeto]',
    resumo: '[Uma frase dizendo o que o projeto resolve.]',
    descricao: '[Conte o problema, o que você construiu e o resultado.]',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    data: '2026-08',
    status: 'em-andamento',
    exemplo: true,
  },
]
