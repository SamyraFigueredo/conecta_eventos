const express = require('express');
require('dotenv').config();
const path = require('path');
const sequelize = require('./src/config/database.js');
const models = require('./src/models/associations.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src', 'public')));

// Rotas
const usuarioRoutes = require('./src/routes/usuarioRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');

app.use('/usuarios', usuarioRoutes);
app.use('/auth', authRoutes);

// Rota principal que renderiza a view index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;

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