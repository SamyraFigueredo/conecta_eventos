const jwt = require('jsonwebtoken');
const chaveSecreta = process.env.JWT_SECRET || 'segredo';

function autenticar(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ erro: 'Token não fornecido' });
    }

    const tokenLimpo = token.replace('Bearer ', '');

    jwt.verify(tokenLimpo, chaveSecreta, (err, decoded) => {
        if (err) {
            return res.status(403).json({ erro: 'Token inválido' });
        }

        req.usuario = decoded;
        next();
    });
}

module.exports = autenticar;
