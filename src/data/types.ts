// Tipos dos dados do portfólio. Você normalmente não precisa mexer aqui.

export type Perfil = {
  nome: string
  cargo: string
  headline: string
  /** Frase curta embaixo do título, explicando para quem você trabalha */
  subtitulo: string
  bio: string
  localizacao: string
  disponivel: boolean
  email: string
  /** Somente números, com DDI e DDD. Ex.: 5581999999999 */
  whatsapp: string
  github: string
  linkedin: string
  instagram: string
  /** Link para o seu currículo (PDF no Google Drive, por exemplo) */
  curriculo: string
}

export type Ferramenta = {
  nome: string
  /** Para que serve, em palavras simples */
  para: string
}

export type GrupoStack = {
  grupo: string
  explicacao: string
  itens: Ferramenta[]
}

export type IconeServico = 'site' | 'sistema' | 'integracao' | 'manutencao'

export type Servico = {
  icone: IconeServico
  titulo: string
  descricao: string
  exemplos: string[]
}

export type Passo = {
  titulo: string
  descricao: string
}

export type Pergunta = {
  pergunta: string
  resposta: string
}

export type Projeto = {
  /** Identificador único, sem espaços. Ex.: "app-de-tarefas" */
  id: string
  titulo: string
  resumo: string
  descricao: string
  stack: string[]
  /** Caminho da imagem dentro de /public. Ex.: "/projetos/app-tarefas.png" */
  imagem?: string
  repositorio?: string
  demo?: string
  /** AAAA-MM */
  data: string
  status: 'concluido' | 'em-andamento'
  destaque?: boolean
  /** Marca um item de exemplo. Apague a linha quando colocar o seu. */
  exemplo?: boolean
}

export type TipoMarco = 'projeto' | 'curso' | 'experiencia' | 'certificado' | 'formacao'

export type Marco = {
  /** AAAA-MM, ou '' se ainda não souber */
  data: string
  titulo: string
  tipo: TipoMarco
  /** "main" = trabalhos e projetos · "estudos" = formação, cursos e certificados */
  ramo: 'main' | 'estudos'
  instituicao?: string
  descricao?: string
  link?: string
  /** true = algo que ainda vai começar (aparece no topo com "Em breve") */
  futuro?: boolean
  exemplo?: boolean
}
