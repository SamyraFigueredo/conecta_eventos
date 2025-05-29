const authService = require('../services/authService.js');

const authController = {
    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
        }

        try {
            const resultado = await authService.login(email, senha);
            return res.json(resultado);
        } catch (error) {
            // Se o erro for de autenticação, responde 401, senão 500 para outros erros
            if (error.message === 'Usuário não encontrado' || error.message === 'Senha inválida') {
                return res.status(401).json({ erro: error.message });
            }
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
    }
};

module.exports = authController;