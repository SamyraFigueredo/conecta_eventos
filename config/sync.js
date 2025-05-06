const sequelize = require('../Config/database_config');

const fs = require('fs');
const path = require('path');

const modelsPath = path.join(__dirname, '..', 'Models');

fs.readdirSync(modelsPath)
.filter(file => file.endsWith('.js'))
.forEach(file => {
    require(path.join(modelsPath, file));
});

(async () => {
    try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync({ alter: true });
    console.log('✅ Todas as tabelas foram sincronizadas com sucesso.');
} catch (error) {
    console.error('❌ Erro ao conectar ou sincronizar:', error);
} finally {
    await sequelize.close();
}
})();
