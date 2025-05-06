const sequelize = require('../Config/database_config');
const Usuario = require('../Models/Usuario');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ alter: true });
        console.log('✅ Tabela USUARIO sincronizada com sucesso.');
    } catch (error) {
        console.error('❌ Erro ao conectar ou sincronizar:', error);
    } finally {
        await sequelize.close();
    }
})();
