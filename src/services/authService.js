const { Usuario } = require('../models/associations');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const segredoJWT = process.env.JWT_SECRET;
const authService = {
    async login(email, senha) {
        const usuario = await Usuario.findOne({ where: { email_usuario: email } });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

        if (!senhaValida) {
            throw new Error('Senha inválida');
        }

        const token = jwt.sign(
            {
                id_usuario: usuario.id_usuario,
                tipo_usuario: usuario.tipo_usuario,
                nome_usuario: usuario.nome_usuario
            },
            segredoJWT,
            { expiresIn: '7d' }
        );

        return {
            token,
            usuario: {
                id_usuario: usuario.id_usuario,
                nome_usuario: usuario.nome_usuario,
                email_usuario: usuario.email_usuario,
                tipo_usuario: usuario.tipo_usuario
            }
        };
    }
};

module.exports = authService;
