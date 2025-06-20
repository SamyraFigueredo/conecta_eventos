const { Usuario } = require('../models/associations');
const bcrypt = require('bcrypt');

const usuarioService = {
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

    async listarUsuarios() {
        return Usuario.findAll();
    },

    async buscarUsuarioPorId(id) {
        return Usuario.findByPk(id);
    },

    async buscarUsuarioPorEmail(email) {
        return Usuario.findOne({ where: { email_usuario: email } });
    },

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

    async deletarUsuario(id) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;

        await usuario.destroy();
        return true;
    }
};

module.exports = usuarioService;