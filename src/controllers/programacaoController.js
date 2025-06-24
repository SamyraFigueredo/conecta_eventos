const ProgramacaoService = require('../services/programacao.service');

const ProgramacaoController = {
    async listar(req, res) {
        try {
            const lista = await ProgramacaoService.listarTodos();
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const programacao = await ProgramacaoService.buscarPorId(id);
            res.status(200).json(programacao);
        } catch (error) {
            res.status(404).json({ mensagem: error.message });
        }
    },

    async criar(req, res) {
        try {
            const novaProgramacao = await ProgramacaoService.criar(req.body);
            res.status(201).json(novaProgramacao);
        } catch (error) {
            res.status(400).json({ mensagem: error.message });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const atualizada = await ProgramacaoService.atualizar(id, req.body);
            res.status(200).json(atualizada);
        } catch (error) {
            res.status(400).json({ mensagem: error.message });
        }
    },

    async deletar(req, res) {
        try {
            const { id } = req.params;
            await ProgramacaoService.deletar(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ mensagem: error.message });
        }
    }
};

module.exports = ProgramacaoController;