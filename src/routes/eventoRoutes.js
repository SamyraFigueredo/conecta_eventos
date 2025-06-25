const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/eventoController');
const multer = require('multer');
const path = require('path');

// Configuração do armazenamento multer para salvar na pasta upload_images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload_images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, 'evento-' + uniqueSuffix);
    }
});

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Apenas imagens são permitidas!'), false);
    }
};

const upload = multer({ storage, fileFilter });

// Rotas
router.get('/', EventoController.listarView);
router.get('/criarEvento', EventoController.criarView);

// Usando o multer para processar upload da imagem do evento
router.post('/criarEvento', upload.single('imagem_evento'), EventoController.criar);

router.get('/:id', EventoController.buscarPorId);
router.put('/:id', EventoController.atualizar);
router.delete('/:id', EventoController.deletar);

module.exports = router;
