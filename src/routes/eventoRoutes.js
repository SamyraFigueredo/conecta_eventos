const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/evento.controller');

router.post('/', EventoController.criar);
router.get('/', EventoController.listar);
router.get('/:id', EventoController.buscarPorId);
router.put('/:id', EventoController.atualizar);
router.delete('/:id', EventoController.deletar);

module.exports = router;