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

app.use(express.static(path.join(__dirname, 'src/public')));

// Rotas
const usuarioRoutes = require('./src/routes/usuarioRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
const eventoRoutes = require('./src/routes/eventoRoutes.js');
const programacaoRoutes = require('./src/routes/programacaoRoutes.js');

app.use('/usuarios', usuarioRoutes);
app.use('/auth', authRoutes);
app.use('/eventos', eventoRoutes);
app.use('/programacoes', programacaoRoutes);

// Importar controller para rota de view com dados
const EventoController = require('./src/controllers/eventoController.js');

// Rota principal que renderiza a view index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/auth/login', (req, res) => {
    res.render('login');
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

app.get('/recuperar', (req, res) => {
    res.render('recuperar'); // recuperar.ejs deve estar na pasta views/
});

app.get('/landingpaje', (_req, res) => {
    res.render('landingpaje');
});

app.get('/eventos', EventoController.listarView);

app.get('/eventos_inscritos', EventoController.eventosInscritos);

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