const path = require('path');
const fs = require('fs');
const service = require('../services/certificadoService.js');

const criar = async (req, res) => {
    try {
        const certificado = await service.criarCertificado(req.body);
        return res.status(201).json(certificado);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao criar certificado.' });
    }
};

const listar = async (req, res) => {
    try {
        const certificados = await service.listarCertificados();
        return res.json(certificados);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao listar certificados.' });
    }
};

const buscarPorId = async (req, res) => {
    try {
        const certificado = await service.buscarPorId(req.params.id);
        if (!certificado) return res.status(404).json({ error: 'Certificado não encontrado.' });
        return res.json(certificado);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar certificado.' });
    }
};

const buscarPorCodigo = async (req, res) => {
    try {
        const certificado = await service.buscarPorCodigo(req.params.codigo);
        if (!certificado) return res.status(404).json({ error: 'Certificado não encontrado.' });
        return res.json(certificado);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar certificado por código.' });
    }
};

const atualizar = async (req, res) => {
    try {
        const certificado = await service.atualizarCertificado(req.params.id, req.body);
        if (!certificado) return res.status(404).json({ error: 'Certificado não encontrado.' });
        return res.json(certificado);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao atualizar certificado.' });
    }
};

const deletar = async (req, res) => {
    try {
        const sucesso = await service.deletarCertificado(req.params.id);
        if (!sucesso) return res.status(404).json({ error: 'Certificado não encontrado.' });
        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao deletar certificado.' });
    }
};

// NOVO MÉTODO - Download do certificado
const baixarCertificado = async (req, res) => {
    try {
        const { eventoId } = req.params;
        const usuarioId = req.user?.id_usuario || req.query.userId; // adaptável

        if (!usuarioId) {
            return res.status(400).json({ error: 'Usuário não identificado.' });
        }

        const nomeArquivo = `${usuarioId}_${eventoId}.pdf`;
        const caminho = path.join(__dirname, '..', 'certificados', nomeArquivo);

        if (!fs.existsSync(caminho)) {
            return res.status(404).json({ error: 'Certificado não encontrado.' });
        }

        res.download(caminho, `certificado_evento_${eventoId}.pdf`);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao baixar o certificado.' });
    }
};

module.exports = {
    criar,
    listar,
    buscarPorId,
    buscarPorCodigo,
    atualizar,
    deletar,
    baixarCertificado
};