import type { Passo, Pergunta, Servico } from './types'

// ─────────────────────────────────────────────────────────────
// O QUE VOCÊ OFERECE, COMO FUNCIONA E PERGUNTAS FREQUENTES
// Escreva como você explicaria para um cliente que não é da área.
// icone: 'site' | 'sistema' | 'integracao' | 'manutencao'
// ─────────────────────────────────────────────────────────────

export const servicos: Servico[] = [
  {
    icone: 'site',
    titulo: 'Sites e páginas de venda',
    descricao: 'Um site bonito, rápido e que funciona bem no celular, para apresentar seu trabalho e trazer clientes.',
    exemplos: ['Site institucional', 'Página de evento ou lançamento', 'Portfólio profissional'],
  },
  {
    icone: 'sistema',
    titulo: 'Sistemas sob medida',
    descricao: 'Ferramentas feitas para a rotina do seu negócio, no lugar de planilhas e anotações soltas.',
    exemplos: ['Agendamentos', 'Cadastro de clientes', 'Controle de estoque', 'Painel de vendas'],
  },
  {
    icone: 'integracao',
    titulo: 'Integrações e automações',
    descricao: 'Faço seus sistemas conversarem entre si e automatizo tarefas repetitivas, para você ganhar tempo.',
    exemplos: ['Pagamento online', 'E-mails automáticos', 'Inscrições direto na planilha'],
  },
  {
    icone: 'manutencao',
    titulo: 'Melhorias e manutenção',
    descricao: 'Ajustes, correções e novas funções em um site ou sistema que você já tem.',
    exemplos: ['Correção de erros', 'Site mais rápido', 'Novas páginas e funções'],
  },
]

export const passos: Passo[] = [
  {
    titulo: 'Conversa',
    descricao: 'Você me conta sua ideia ou problema, do seu jeito. Eu faço as perguntas certas para entender o objetivo.',
  },
  {
    titulo: 'Proposta',
    descricao: 'Envio o que será feito, o prazo e o valor, por escrito e sem termos técnicos.',
  },
  {
    titulo: 'Desenvolvimento',
    descricao: 'Construo o projeto e mostro o andamento em etapas, para você opinar antes de ficar pronto.',
  },
  {
    titulo: 'Entrega e suporte',
    descricao: 'Coloco no ar, explico como usar e continuo disponível para ajustes.',
  },
]

export const perguntas: Pergunta[] = [
  {
    pergunta: 'Quanto custa um projeto?',
    resposta: 'Depende do tamanho e do que ele precisa fazer. Depois de uma conversa rápida, envio uma proposta com o valor fechado.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta: 'O prazo entra na proposta. Páginas simples costumam ser mais rápidas que sistemas com várias funções.',
  },
  {
    pergunta: 'Preciso entender de tecnologia?',
    resposta: 'Não. Você explica o que precisa com suas palavras e eu traduzo isso para a parte técnica.',
  },
  {
    pergunta: 'Preciso ter domínio e hospedagem?',
    resposta: 'Não precisa ter nada antes. Eu explico as opções e ajudo a contratar o que for necessário para colocar o projeto no ar.',
  },
  {
    pergunta: 'E depois que ficar pronto?',
    resposta: 'Explico como usar e fico disponível para dúvidas, ajustes e novas funções.',
  },
]
