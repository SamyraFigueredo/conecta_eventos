module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
        id_evento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_evento: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
        },
        data_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        data_fim: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        localizacao: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        tableName: 'EVENTO',
        timestamps: false,
    });

    return Evento;
};
