# Avanti - Projeto 02 - Busca de Perfil no GitHub

Uma aplicação desenvolvida em **React** que permite buscar perfis no GitHub e exibir informações do usuário de forma simples e intuitiva, seguindo um layout fornecido via Figma.

## 📝 Objetivo

O objetivo deste projeto é consumir a API pública do GitHub e renderizar os dados do perfil buscado pelo usuário, como nome, bio e foto de perfil, respeitando o layout proposto no Figma.

## Observações

- Para garantir uma melhor experiência do usuário, a aplicação implementa duas formas de busca por perfis do GitHub, proporcionando uma pesquisa mais ampla e flexível:

1. Primeiramente, tenta-se encontrar o usuário diretamente pelo login (`/users/{username}`).
2. Caso o perfil não seja encontrado, a aplicação utiliza o endpoint de busca (`/search/users?q=`) com o nome completo informado pelo usuário.

Essa abordagem permite que a aplicação encontre perfis mesmo quando o usuário digita o nome completo ao invés do login exato. No entanto, como o endpoint de busca retorna apenas dados resumidos, uma segunda requisição é feita ao endpoint de usuário completo para obter todas as informações necessárias, como avatar e bio.

Essa lógica segue a estrutura e limitações descritas na:
1. [Documentação 1 – Get a user](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)
2. [Documentação 2 – Searching users](https://docs.github.com/en/search-github/searching-on-github/searching-users#search-by-name-email-or-login)

Essa lógica pode ser encontrada no arquivo [`./src/services/githubAPI.js`](./src/services/githubAPI.js).

- Foi-se implementado um tempo mínimo de exibição do componente de carregamento (Loader) utilizando setTimeout. Para garantir que o feedback visual de carregamento seja sempre perceptível ao usuário, as vezes a requisição de busca da API do Github é muito rápida, evitando uma transição brusca entre os estados da interface. Isso ajuda a comunicar de forma mais clara que uma busca está sendo realizada, além de mostrar a presença da funcionalidade do Loader.

## 🔗 Layout no Figma

Você pode conferir o layout utilizado como referência no link abaixo:

[🔗 Acessar Layout no Figma](https://www.figma.com/proto/DqtFxC6312M32mLt8FpJjq/inovation-class?page-id=22%3A2864&node-id=22-4293&viewport=359%2C115%2C0.25&t=SHsEqEgaMrXGMKwv-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=22%3A4293&show-proto-sidebar=1)

---

## ✅ Funcionalidades

- 🔍 Campo de busca para digitar o nome de um perfil do GitHub
- 📡 Consumo da API pública do GitHub para buscar os dados do usuário;
- 👤 Exibição dos seguintes dados:
  - Nome do usuário;
  - Foto de perfil;
  - Bio (biografia);
- ❌ Mensagem de erro caso o perfil não seja encontrado;
- ❌ Mensagem do react-toastify para feedback do usuário caso ele tente buscar um perfil com o input vazio;
- 🎨 Estilização fiel ao layout do Figma;
- ⏳ Feedback visual com **loading** durante a requisição;
- ✨ Efeitos visuais para melhor experiência do usuário (UX);
- 📱 Aplicação desenvolvida respeitando mobile-first;

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [GitHub API](https://api.github.com/)
- Hooks e Services;

## Estrutura do projeto

```bash
avantiGithubAPI/
│
├── public/
│   ├── favicon/
│   └── images/               
│
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── AppBackground/
│   │   ├── Card/
│   │   ├── ErrorMessage/
│   │   ├── GithubProfileTitle/
│   │   ├── Input/
│   │   └── Loader/
│   │
│   ├── hooks/         
│   │   └── useGithubSearch.js  # Vai conter a lógica de negócio da busca do API do Github
│   │ 
│   ├── pages/         
│   │   └── GithubSearch.jsx    # Contém os componentes necessários para a nossa aplicação
│   │ 
│   ├── services/
│   │   ├── githubAPI.js
│   │   └── toastifyService.js
│   │
│   ├── styles/                 # Estilos gerais da página
│   │   └── App.css
│   │
│   ├── App.jsx                 # Componente raiz
│   └── main.jsx                # Ponto de entrada da aplicação (Vite)
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## ▶️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/iagooteles/avantiGithubAPI.git
```

2. Acesse a pasta do projeto e Instale as dependências:
- Acesse a pasta do projeto:
```bash
cd avantiGithubAPI
```

- Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse o navegador
Abra http://localhost:5173 para visualizar a aplicação rodando.
