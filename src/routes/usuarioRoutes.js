const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const autenticar = require('../middlewares/autenticar');

// Rota para exibir formulário de novo usuário
router.get('/novo', autenticar, usuarioController.renderizarCadastro);

// Rota para exibir formulário de edição de usuário
router.get('/editar/:id', autenticar, usuarioController.renderizarEdicao);

// Rota para deletar via POST (usada nos formulários HTML)
router.post('/deletar/:id', autenticar, usuarioController.deletarViaPost);

// Rota para criar novo usuário (envio do formulário)
router.post('/', usuarioController.criar);

// Rotas principais protegidas
router.get('/', autenticar, usuarioController.listar);
router.get('/:id', autenticar, usuarioController.buscarPorId);
router.put('/:id', autenticar, usuarioController.atualizar);
router.delete('/:id', autenticar, usuarioController.deletar);

module.exports = router;