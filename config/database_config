const { Sequelize } = require('sequelize');
const dotenvFlow = require('dotenv-flow');

// Carrega .env ou .env.test automaticamente com base no NODE_ENV
dotenvFlow.config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    logging: process.env.NODE_ENV === 'test' ? false : console.log, // silencia logs em testes
});

module.exports = sequelize;
