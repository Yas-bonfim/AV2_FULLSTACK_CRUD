# 📚 API de Lista de Livros - Node.js + Express + MongoDB

Este projeto é uma API RESTful desenvolvida com Node.js, Express e MongoDB, que permite o gerenciamento de uma **lista de livros protegida por autenticação JWT**. Usuários podem se registrar, fazer login e gerenciar seus próprios livros.

---

## 🚀 Funcionalidades

### 🔐 Autenticação
- Cadastro de usuário (`POST /auth/register`)
- Login com geração de token JWT (`POST /auth/login`)

### 📚 CRUD de Livros (protegido por JWT)
- Criar novo livro (`POST /books`)
- Listar livros do usuário autenticado (`GET /books`)
- Ver detalhes de um livro (`GET /books/:id`)
- Atualizar todos os campos de um livro (`PUT /books/:id`)
- Atualizar parcialmente (`PATCH /books/:id`)
- Deletar livro (`DELETE /books/:id`)

---

## 🧱 Estrutura do Projeto
```
project/
│
├── controllers/ # Lógica das rotas
├── services/ # Lógica de negócio e acesso ao banco
├── routes/ # Endpoints da API
├── models/ # Modelos do Mongoose (User, Book)
├── middlewares/ # Autenticação e tratamento de erros
├── database/ # Conexão com MongoDB
├── app.js # Arquivo principal da aplicação
├── .env # Variáveis de ambiente (não subir para o Git)
└── README.md

```

---

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js >= 14
- MongoDB Atlas ou local

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# 2. Instalar as dependências
npm install

# 3. Criar o arquivo .env
touch .env


📬 Contato
Projeto desenvolvido para fins acadêmicos. Em caso de dúvidas, sugestões ou colaborações, entre em contato.
