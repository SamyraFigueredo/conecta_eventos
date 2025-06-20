
# 📅 Conecta Eventos

Uma aplicação web de gestão de eventos, desenvolvida com **Node.js**, **Express**, **Sequelize**, **EJS** e **MySQL/SQLite**.

## 📝 Descrição

O **Conecta Eventos** é uma plataforma onde os usuários podem:

- Cadastrar e visualizar eventos
- Se inscrever em eventos
- Visualizar os eventos nos quais estão inscritos
- Emitir certificados de participação
- Realizar o login para acessar recursos exclusivos

O projeto também inclui uma área administrativa com manutenção de dados (**CRUD**) para gestão de eventos.

---

## 🚀 Tecnologias Utilizadas
- **Node.js** (Servidor)
- **Express** (Framework Web)
- **EJS** (Motor de templates para views)
- **Sequelize** (ORM para banco de dados)
- **MySQL** (Banco de dados)
---

## 🎨 Estrutura de Pastas

```
conecta_eventos/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── views/
│   ├── partials/
│   └── *.ejs
├── public/
├── app.js
├── package.json
└── README.md
```
## 📷 Principais Telas

### ✅ Tela Inicial (Home)
- Página de boas-vindas
- Links para navegar entre as funções principais (eventos, criar evento, inscritos)

### ✅ Tela de Login
- Formulário de autenticação
- Campos: e-mail e senha
- Acesso restrito para CRUD de eventos

### ✅ Listagem de Eventos
- Mostra todos os eventos disponíveis
- Opção para inscrição

### ✅ CRUD de Eventos (Manutenção)
- Criar novo evento
- Editar eventos existentes
- Deletar eventos

### ✅ Eventos Inscritos
- Mostra todos os eventos que o usuário se inscreveu
- Opção para baixar certificado

### ✅ Emissão de Certificados
- Permite que o usuário gere um certificado de participação em PDF ou outro formato (exemplo visual apenas)

---

## 🛠️ Configuração do Banco de Dados

O projeto é compatível tanto com **MySQL** quanto com **SQLite**.

- **Configuração MySQL:**  
  No arquivo `/src/config/database.js`, configure host, usuário e senha do seu banco.

---

## ▶️ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu_usuario/conecta_eventos.git
cd conecta_eventos
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados (MySQL ou SQLite) em `/src/config/database.js`.

4. Execute as migrations (se houver):

```bash
npx sequelize-cli db:migrate
```

5. Inicie o servidor:

```bash
node app.js
```

6. Acesse via navegador:

```
http://localhost:3000
```

---

## 📌 Requisitos Obrigatórios Atendidos ✅

✔️ Uso de **EJS**  
✔️ Uso de **Partials** nas views  
✔️ Operações de **CRUD**  
✔️ Tela de **Login**  
✔️ Integração com **Sequelize**  
✔️ Banco de dados **MySQL** 
✔️ **Formulário de inclusão e alteração** de dados  

---

## 📅 Telas Incluídas

| Nome do Arquivo EJS             | Finalidade                        |
|---------------------------------|-----------------------------------|
| `Landingpaje.ejs`               | Tela inicial / Landing Page       |
| `login.ejs`                     | Tela de Login                     |
| `crud_inicial.ejs`              | Página inicial após login (Dashboard) |
| `landingpage_eventos.ejs`       | Listagem de eventos               |
| `eventos_inscritos.ejs`         | Eventos nos quais o usuário está inscrito |
| `emitir_ertificado.ejs`         | Tela de emissão de certificado    |

---

## 👨‍💻 Colaboradores
