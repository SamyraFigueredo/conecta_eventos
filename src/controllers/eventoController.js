const EventoService = require('../services/evento.service');

const EventoController = {
    async listar(req, res) {
        try {
            const eventos = await EventoService.listarTodos();
            res.status(200).json(eventos);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const evento = await EventoService.buscarPorId(id);
            res.status(200).json(evento);
        } catch (error) {
            res.status(404).json({ mensagem: error.message });
        }
    },

    async criar(req, res) {
        try {
            const novoEvento = await EventoService.criar(req.body);
            res.status(201).json(novoEvento);
        } catch (error) {
            res.status(400).json({ mensagem: error.message });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const eventoAtualizado = await EventoService.atualizar(id, req.body);
            res.status(200).json(eventoAtualizado);
        } catch (error) {
            res.status(400).json({ mensagem: error.message });
        }
    },

    async deletar(req, res) {
        try {
            const { id } = req.params;
            await EventoService.deletar(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ mensagem: error.message });
        }
    }
};

module.exports = EventoController;