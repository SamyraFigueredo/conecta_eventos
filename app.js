const express = require('express');
require('dotenv').config();
const path = require('path');
const sequelize = require('./src/config/database.js');
const models = require('./src/models/associations.js');

const app = express();

// Middlewares para lidar com dados do corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/upload_images', express.static(path.join(__dirname, 'upload_images')));

// Configuração do mecanismo de visualização (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Arquivos estáticos (ex: CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'src/public/images')));

// Importação das rotas
const usuarioRoutes = require('./src/routes/usuarioRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
const eventoRoutes = require('./src/routes/eventoRoutes.js');
const programacaoRoutes = require('./src/routes/programacaoRoutes.js');
const inscricaoRoutes = require('./src/routes/inscricaoRoutes.js');
const certificadoRoutes = require('./src/routes/certificadoRoutes.js');

// Importação de controladores
const EventoController = require('./src/controllers/eventoController.js');

app.use('/usuarios', usuarioRoutes);
app.use('/auth', authRoutes);
app.use('/eventos', eventoRoutes);
app.use('/programacoes', programacaoRoutes);
app.use('/inscricoes', inscricaoRoutes);
app.use('/certificados', certificadoRoutes);

// Rotas de renderização de views
app.get('/', (req, res) => res.render('index'));

app.get('/auth/login', (req, res) => res.render('login'));
app.get('/cadastro', (req, res) => res.render('cadastro'));
app.get('/recuperar', (req, res) => res.render('recuperar'));
app.get('/emitir_certificados', (_req, res) => res.render('emitir_certificados'));

app.get('/eventos/criarEvento', EventoController.criarView);
app.get('/eventos_inscritos', EventoController.eventosInscritos);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
    .then(() => {
        console.log('🟢 Banco sincronizado com sucesso');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('🔴 Erro ao sincronizar o banco de dados:', err);
    });

module.exports = app;
