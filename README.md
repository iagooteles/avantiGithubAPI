# Avanti - Projeto 02 - Busca de Perfil no GitHub

Uma aplicação desenvolvida em **React** que permite buscar perfis no GitHub e exibir informações do usuário de forma simples e intuitiva, seguindo um layout fornecido via Figma.

## 📝 Objetivo

O objetivo deste projeto é consumir a API pública do GitHub e renderizar os dados do perfil buscado pelo usuário, como nome, bio e foto de perfil, respeitando o layout proposto no Figma.

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
- 🎨 Estilização fiel ao layout do Figma;
- ⏳ Feedback visual com **loading** durante a requisição;
- ✨ Efeitos visuais para melhor experiência do usuário (UX);

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [GitHub API](https://api.github.com/)

## Estrutura do projeto

busca-perfil-github/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── /Card
│   │   ├── /GithubProfileTitle
│   │   ├── /Input
│   │   ├── /ErrorMessage     # TODO
│   │   └── /Loader
│   │
│   ├── services/             # TODO: Módulo para chamadas à API
│   │   └── githubAPI.js
│   │
│   ├── styles/               # Estilos globais ou customizados
│   │   └── App.css
│   │
│   ├── App.jsx               # Componente principal da aplicação
│   └── main.jsx              # Ponto de entrada do React
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js 



## ▶️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/iagooteles/avantiGithubAPI.git
```

### TODOS:

Video: Continuar do 5º
Colocar a logo no title

Fazer notificação quando input vazio?
FAzer card retorno de usuario n encontrado;
fazer loading;
separar funções;
colocar catch