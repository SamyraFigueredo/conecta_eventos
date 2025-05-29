const { Usuario } = require('../models/associations');
const bcrypt = require('bcrypt');

const usuarioService = {
    async criarUsuario(dadosUsuario) {
        const hash = await bcrypt.hash(dadosUsuario.senha_hash, 10);
        dadosUsuario.senha_hash = hash;
        return Usuario.create(dadosUsuario);
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

        if (dadosAtualizados.senha_hash) {
            dadosAtualizados.senha_hash = await bcrypt.hash(dadosAtualizados.senha_hash, 10);
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
