const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const autenticar = require('../middlewares/autenticar');
// Rotas públicas (ex: criação de usuário)
router.post('/', usuarioController.criar);

// Rotas protegidas (usuário autenticado)
router.get('/', autenticar, usuarioController.listar);
router.get('/:id', autenticar, usuarioController.buscarPorId);
router.put('/:id', autenticar, usuarioController.atualizar);
router.delete('/:id', autenticar, usuarioController.deletar);

module.exports = router;
