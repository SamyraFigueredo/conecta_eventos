const usuarioService = require('../services/usuarioService.js');

const usuarioController = {
    // Criar usuário via API ou formulário
    async criar(req, res) {
        try {
            const novoUsuario = await usuarioService.criarUsuario(req.body);

            // Se for requisição via formulário (HTML), redirecionar
            if (req.headers.accept && req.headers.accept.includes('text/html')) {
                return res.redirect('/usuarios');
            }

            res.status(201)
                .location(`/usuarios/${novoUsuario.id_usuario}`)
                .json(novoUsuario);
        } catch (error) {
            res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: error.message });
        }
    },

    // Listar todos os usuários (página HTML ou JSON)
    async listar(req, res) {
        try {
            const usuarios = await usuarioService.listarUsuarios();

            if (req.headers.accept && req.headers.accept.includes('text/html')) {
                return res.render('usuarios/listaUsuarios', { usuarios });
            }

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

            // Redireciona se for via formulário
            if (req.headers.accept && req.headers.accept.includes('text/html')) {
                return res.redirect('/usuarios');
            }

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
    },

    // ✅ NOVO: Renderizar formulário de cadastro
    renderizarCadastro(req, res) {
        res.render('usuarios/formUsuario', { usuario: null });
    },

    // ✅ NOVO: Renderizar formulário de edição
    async renderizarEdicao(req, res) {
        try {
            const usuario = await usuarioService.buscarUsuarioPorId(req.params.id);
            if (!usuario) return res.status(404).send('Usuário não encontrado');
            res.render('usuarios/formUsuario', { usuario });
        } catch (error) {
            res.status(500).send('Erro ao carregar edição do usuário');
        }
    },

    // ✅ NOVO: Excluir via formulário HTML (POST)
    async deletarViaPost(req, res) {
        try {
            const deletado = await usuarioService.deletarUsuario(req.params.id);
            if (!deletado) return res.status(404).send('Usuário não encontrado');
            res.redirect('/usuarios');
        } catch (error) {
            res.status(500).send('Erro ao excluir usuário');
        }
    }
};

module.exports = usuarioController;