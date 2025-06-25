const express = require('express');
const router = express.Router();
const controller = require('../controllers/inscricaoController.js');

router.post('/', controller.criar);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

// Rotas com filtros
router.get('/evento/:idEvento', controller.listarPorEvento);
router.get('/usuario/:idUsuario', controller.listarPorUsuario);

module.exports = router;
