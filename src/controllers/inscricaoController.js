const inscricaoService = require('../services/inscricaoService.js');

const criar = async (req, res) => {
    try {
        const inscricao = await inscricaoService.criarInscricao(req.body);
        return res.status(201).json(inscricao);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao criar inscrição.' });
    }
};

const listar = async (req, res) => {
    try {
        const inscricoes = await inscricaoService.listarInscricoes();
        return res.json(inscricoes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao listar inscrições.' });
    }
};

const buscarPorId = async (req, res) => {
    try {
        const inscricao = await inscricaoService.buscarInscricaoPorId(req.params.id);
        if (!inscricao) return res.status(404).json({ error: 'Inscrição não encontrada.' });
        return res.json(inscricao);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar inscrição.' });
    }
};

const atualizar = async (req, res) => {
    try {
        const inscricao = await inscricaoService.atualizarInscricao(req.params.id, req.body);
        if (!inscricao) return res.status(404).json({ error: 'Inscrição não encontrada.' });
        return res.json(inscricao);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao atualizar inscrição.' });
    }
};

const deletar = async (req, res) => {
    try {
        const sucesso = await inscricaoService.deletarInscricao(req.params.id);
        if (!sucesso) return res.status(404).json({ error: 'Inscrição não encontrada.' });
        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao deletar inscrição.' });
    }
};

const listarPorEvento = async (req, res) => {
    try {
        const lista = await inscricaoService.listarPorEvento(req.params.idEvento);
        return res.json(lista);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao listar por evento.' });
    }
};

const listarPorUsuario = async (req, res) => {
    try {
        const lista = await inscricaoService.listarPorUsuario(req.params.idUsuario);
        return res.json(lista);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao listar por usuário.' });
    }
};

module.exports = {
    criar,
    listar,
    buscarPorId,
    atualizar,
    deletar,
    listarPorEvento,
    listarPorUsuario,
};