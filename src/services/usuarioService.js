const { Usuario } = require('../models/associations');
const bcrypt = require('bcrypt');

const usuarioService = {
    // Cria um novo usuário
    async criarUsuario(dadosUsuario) {
        const { senha, ...outrosDados } = dadosUsuario;

        if (!senha) {
            throw new Error('Senha é obrigatória');
        }

        const senha_hash = await bcrypt.hash(senha, 10);

        return Usuario.create({
            ...outrosDados,
            senha_hash
        });
    },

    // Lista todos os usuários
    async listarUsuarios() {
        return Usuario.findAll({
            attributes: ['id_usuario', 'nome_usuario', 'email_usuario', 'tipo_usuario']
        });
    },

    // Busca por ID
    async buscarUsuarioPorId(id) {
        return Usuario.findByPk(id, {
            attributes: ['id_usuario', 'nome_usuario', 'email_usuario', 'tipo_usuario']
        });
    },

    // Busca por e-mail
    async buscarUsuarioPorEmail(email) {
        return Usuario.findOne({
            where: { email_usuario: email }
        });
    },

    // Atualiza um usuário
    async atualizarUsuario(id, dadosAtualizados) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;

        if (dadosAtualizados.senha) {
            dadosAtualizados.senha_hash = await bcrypt.hash(dadosAtualizados.senha, 10);
            delete dadosAtualizados.senha;
        }

        await usuario.update(dadosAtualizados);
        return usuario;
    },

    // Exclui um usuário
    async deletarUsuario(id) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;

        await usuario.destroy();
        return true;
    }
};

module.exports = usuarioService;