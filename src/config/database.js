const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,      // nome do banco de dados
    process.env.DB_USER,      // seu usuario/root
    process.env.DB_PASSWORD,  // sua senha
    {
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
    }
);
module.exports = sequelize;
