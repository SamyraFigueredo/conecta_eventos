# 📅 Conecta Eventos

Sistema completo para organização e gerenciamento de eventos, desenvolvido com Node.js, Express, MySQL e Sequelize.

## ✨ Funcionalidades

- Cadastro e gerenciamento de **eventos**
- Controle de **participantes** e **ministrantes**
- Definição da **programação dos eventos**
- Sistema de **inscrição** com verificação
- **Notificações** e **lembretes automáticos**
- Geração e **emissão de certificados** com autenticação eletrônica

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize ORM](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [JWT (para autenticação)](https://jwt.io/) *(opcional)*
- [nodemailer](https://nodemailer.com/) *(para envio de e-mails)*

## ⚙️ Como Executar Localmente

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/conecta-eventos.git
cd conecta-eventos
```

### 2. Instale as dependências:
```bash
npm install
```

### 3. Configure o banco de dados

Crie um banco de dados MySQL e configure o arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=conecta_eventos
DB_PORT=3306
````

### 4. Rode a aplicação:
```bash
npm start
```
