const jwt = require('jsonwebtoken');
const segredoJWT = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ erro: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ erro: 'Token inválido' });
    }

    jwt.verify(token, segredoJWT, (err, usuario) => {
        if (err) {
            return res.status(403).json({ erro: 'Token expirado ou inválido' });
        }

        req.usuario = usuario;
        next();
    });
};
