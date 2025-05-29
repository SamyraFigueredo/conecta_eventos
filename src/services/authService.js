const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models/associations');

const chaveSecreta = process.env.JWT_SECRET || 'root';

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

        const payload = {
            id: usuario.id_usuario,
            email: usuario.email_usuario,
            tipo: usuario.tipo_usuario,
        };

        const token = jwt.sign(payload, chaveSecreta, { expiresIn: '1h' });

        return { token, usuario: payload };
    },
};

module.exports = authService;
