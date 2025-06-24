const express = require('express');
const router = express.Router();
const ProgramacaoController = require('../controllers/programacaoController.js');

router.get('/', ProgramacaoController.listar);
router.get('/:id', ProgramacaoController.buscarPorId);
router.post('/', ProgramacaoController.criar);
router.put('/:id', ProgramacaoController.atualizar);
router.delete('/:id', ProgramacaoController.deletar);

module.exports = router;