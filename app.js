const express = require('express');
const dotenvFlow = require('dotenv-flow');

// Carrega o .env ou .env.{NODE_ENV}
dotenvFlow.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware e rotas (exemplo)
app.get('/', (req, res) => {
    res.send(`API rodando no ambiente: ${process.env.NODE_ENV || 'development'}`);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
