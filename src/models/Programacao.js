module.exports = (sequelize, DataTypes) => {
    const Programacao = sequelize.define('Programacao', {
        id_programacao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fim: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
        },
    }, {
        tableName: 'PROGRAMACAO',
        timestamps: false,
    });

    return Programacao;
};
