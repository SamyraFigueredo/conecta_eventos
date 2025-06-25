const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/eventoController');

router.get('/', EventoController.listarView);
router.get('/criarEvento', EventoController.criarView);
router.post('/criarEvento', EventoController.criar);
router.get('/:id', EventoController.buscarPorId);
router.put('/:id', EventoController.atualizar);
router.delete('/:id', EventoController.deletar);

module.exports = router;