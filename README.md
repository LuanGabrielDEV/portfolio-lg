# Portfólio lg

Portfólio de uma página feito com **React + TypeScript + Tailwind CSS + Vite**, pronto para publicar na **Vercel**.

## Como rodar no seu computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:5173
```

## Como alimentar o site

Todo o conteúdo fica em `src/data/`. Você não precisa mexer nos componentes.

| Arquivo | O que tem |
| --- | --- |
| `src/data/perfil.ts` | nome, cargo, bio, cidade, e-mail, WhatsApp, GitHub, LinkedIn, Instagram, currículo |
| `src/data/trajetoria.ts` | o "git graph": cursos, certificados, projetos e trabalhos |
| `src/data/projetos.ts` | cards de projetos (com imagem, stack, links) |
| `src/data/stack.ts` | suas tecnologias, por grupo, e o que está estudando |

Regras simples:

- Campos com `[colchetes]` ou vazios aparecem no site como "a preencher".
- Itens com `exemplo: true` aparecem apagados com a etiqueta "exemplo". Apague a linha `exemplo: true` (ou o item inteiro) quando colocar o seu.
- Datas no formato `AAAA-MM` (ex.: `'2026-10'`). O site ordena tudo sozinho.
- Na trajetória, use `ramo: 'main'` para projetos e trabalhos e `ramo: 'estudos'` para cursos e certificados.
- Imagens de projetos: coloque o arquivo em `public/projetos/` e use `imagem: '/projetos/nome.png'`.
- WhatsApp: só números, com 55 + DDD. Ex.: `'5581999999999'`.
- Troque também o `[Seu nome]` do `<title>` em `index.html`.

### Adicionar um projeto

Copie este bloco para o início da lista em `src/data/projetos.ts`:

```ts
{
  id: 'nome-do-projeto',
  titulo: 'Nome do projeto',
  resumo: 'Uma frase dizendo o que resolve.',
  descricao: 'Problema, solução, decisões técnicas e resultado.',
  stack: ['React', 'Java', 'PostgreSQL'],
  imagem: '/projetos/nome-do-projeto.png',
  repositorio: 'https://github.com/voce/projeto',
  demo: 'https://projeto.vercel.app',
  data: '2026-11',
  status: 'concluido', // ou 'em-andamento'
  destaque: true,      // opcional: fica primeiro na lista
},
```

### Adicionar um curso

Em `src/data/trajetoria.ts`:

```ts
{
  data: '2026-11',
  titulo: 'Nome do curso',
  tipo: 'curso',        // 'curso' | 'certificado' | 'formacao' | 'projeto' | 'experiencia'
  ramo: 'estudos',
  instituicao: 'Alura',
  descricao: 'O que você aprendeu.',
  link: 'https://link-do-certificado',
},
```

## Publicar na Vercel

1. Crie um repositório no GitHub e envie esta pasta (`git init`, `git add .`, `git commit -m "portfolio"`, `git push`).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel reconhece o Vite sozinha (build `npm run build`, saída `dist`). Clique em **Deploy**.

Depois disso, cada `git push` atualiza o site automaticamente.

## Estrutura

```
src/
  data/         ← seus conteúdos (edite aqui)
  components/   ← seções do site
  lib/util.ts   ← funções auxiliares
public/
  favicon.svg   ← símbolo lg
  og-image.png  ← imagem de compartilhamento
  projetos/     ← imagens dos projetos
```
