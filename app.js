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

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

app.get('/recuperar', (req, res) => {
    res.render('recuperar'); // recuperar.ejs deve estar na pasta views/
});

app.get('/landingpaje_eventos', (_req, res) => {
    res.render('landingpaje_eventos');
});

app.get('/landingpaje', (_req, res) => {
    res.render('landingpaje');
});

app.get('/eventos_inscritos', (_req, res) => {
    res.render('leventos_inscritos');
});

app.get('/emitir_certificados', (_req, res) => {
    res.render('emitir_certificados');
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