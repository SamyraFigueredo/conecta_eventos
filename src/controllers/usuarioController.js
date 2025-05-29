const usuarioService = require('../services/usuarioService.js');

const usuarioController = {
    async criar(req, res) {
        try {
            const novoUsuario = await usuarioService.criarUsuario(req.body);
            res.status(201).location(`/usuarios/${novoUsuario.id}`).json(novoUsuario);
        } catch (error) {
            res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: error.message });
        }
    },

    async listar(req, res) {
        try {
            const usuarios = await usuarioService.listarUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao listar usuários', detalhes: error.message });
        }
    },

    async buscarPorId(req, res) {
        try {
            const usuario = await usuarioService.buscarUsuarioPorId(req.params.id);
            if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar usuário', detalhes: error.message });
        }
    },

    async atualizar(req, res) {
        try {
            const usuarioAtualizado = await usuarioService.atualizarUsuario(req.params.id, req.body);
            if (!usuarioAtualizado) return res.status(404).json({ erro: 'Usuário não encontrado' });
            res.json(usuarioAtualizado);
        } catch (error) {
            res.status(400).json({ erro: 'Erro ao atualizar usuário', detalhes: error.message });
        }
    },

    async deletar(req, res) {
        try {
            const deletado = await usuarioService.deletarUsuario(req.params.id);
            if (!deletado) return res.status(404).json({ erro: 'Usuário não encontrado' });
            res.json({ mensagem: 'Usuário deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao deletar usuário', detalhes: error.message });
        }
    }
};

module.exports = usuarioController;
