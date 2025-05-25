const express = require('express');
const app = express();
const sequelize = require('./database.js');

app.use(express.json());

const models = require('./src/models');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Conecta Eventos API rodando 🚀');
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('🟢 Banco sincronizado com sucesso');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('🔴 Erro ao sincronizar o banco de dados:', err);
    });
