# Cubos Movies

Uma aplicação web para gerenciamento de filmes, onde você pode cadastrar, editar, excluir e visualizar detalhes de filmes.

## 🚀 Tecnologias

- React
- TypeScript
- Tailwind CSS
- React Query
- Formik
- Yup
- Radix UI
- AWS S3 (para upload de imagens)

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Backend da aplicação rodando (link do repositório do backend)

## 🔧 Instalação

1. Clone o repositório

```bash
git clone https://github.com/lucasmoraessouza/cubos-frontend
cd cubos-frontend
```

2. Instale as dependências

```bash
npm install
# ou
yarn
```

3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Preencha as variáveis no arquivo `.env`:

```bash
VITE_API_URL=http://localhost:3000
```

4. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

## 🌟 Funcionalidades

### Autenticação

- Login com email e senha
- Logout
- Proteção de rotas

### Filmes

- Listagem de filmes com paginação
- Busca por título
- Filtros por:
  - Duração
  - Data de lançamento
  - Gênero
  - Idioma original
- Criação de filme com:
  - Upload de poster (armazenado no AWS S3)
  - Informações detalhadas (título, sinopse, data de lançamento, etc)
  - Informações financeiras em formato BRL
- Edição de filme
- Exclusão de filme
- Visualização detalhada com:
  - Informações completas
  - Poster
  - Trailer (quando disponível)

## 🔒 Variáveis de Ambiente

| Variável            | Descrição                               |
| ------------------- | --------------------------------------- |
| VITE_API_URL        | URL base da API                         |

## 📦 Build

Para gerar uma build de produção:

```bash
npm run build
# ou
yarn build
```

## 📸 Screenshots

###  Listagem de filmes (web)
![Listagem de Filmes (Web)](https://my-cubos-bucket.s3.amazonaws.com/movies/1748638688885-1pczji.png)
###  Listagem de filmes (Mobile)
![Listagem de Filmes (Mobile)](https://my-cubos-bucket.s3.amazonaws.com/movies/1748638847552-ijvhlf.png)

### Cadastrar novo filme (web)
![Cadastrar novo filme (web)](https://my-cubos-bucket.s3.amazonaws.com/movies/1748638886047-xbahb9.png)

### Cadastrar novo filme (Mobile)
![Cadastrar novo filme (Mobile)](https://my-cubos-bucket.s3.amazonaws.com/movies/1748638872253-ia69rq.png)

### Detalhes do filme (web)
![Detalhes do filme (web)](https://my-cubos-bucket.s3.amazonaws.com/movies/1748639112716-oj6sr7.png)

### Detalhes do filme (Mobile)
![Detalhes do filme (Mobile)](https://my-cubos-bucket.s3.amazonaws.com/movies/1748639156319-vzxur.png)


## 🤝 Agradecimentos

Agradeço à Cubos Tecnologias pela oportunidade de apresentar meu trabalho e pela confiança depositada em mim.

Att,
Lucas de Moraes Souza