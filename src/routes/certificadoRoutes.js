const express = require('express');
const router = express.Router();
const controller = require('../controllers/certificadoController.js');

// CRUD padrão
router.post('/', controller.criar);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

// Busca por código de validação
router.get('/validar/:codigo', controller.buscarPorCodigo);

module.exports = router;