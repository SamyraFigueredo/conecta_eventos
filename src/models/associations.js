const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Usuario = require('./Usuario')(sequelize, DataTypes);
const Evento = require('./Evento')(sequelize, DataTypes);
const Inscricao = require('./Inscricao')(sequelize, DataTypes);
const Programacao = require('./Programacao')(sequelize, DataTypes);
const Certificado = require('./Certificado')(sequelize, DataTypes);

Usuario.hasMany(Inscricao, { foreignKey: 'id_usuario' });
Inscricao.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Evento.hasMany(Inscricao, { foreignKey: 'id_evento' });
Inscricao.belongsTo(Evento, { foreignKey: 'id_evento' });

Evento.hasMany(Programacao, { foreignKey: 'id_evento' });
Programacao.belongsTo(Evento, { foreignKey: 'id_evento' });

Usuario.hasMany(Programacao, { foreignKey: 'id_ministrante' });
Programacao.belongsTo(Usuario, { foreignKey: 'id_ministrante' });

Inscricao.hasOne(Certificado, { foreignKey: 'id_inscricao' });
Certificado.belongsTo(Inscricao, { foreignKey: 'id_inscricao' });

module.exports = {
    Usuario,
    Evento,
    Inscricao,
    Programacao,
    Certificado,
};
