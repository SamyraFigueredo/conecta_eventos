const express = require('express');
const sequelize = require('./src/config/database.js');
const models = require('./src/models/associations.js');

const app = express();

app.use(express.json());

// Rotas
const usuarioRoutes = require('./src/routes/usuarioRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');

app.use('/usuarios', usuarioRoutes);
app.use('/auth', authRoutes);

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
