module.exports = (sequelize, DataTypes) => {
    const Inscricao = sequelize.define('Inscricao', {
        id_inscricao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_inscricao: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('confirmada', 'pendente', 'cancelada'),
            allowNull: false,
        },
    }, {
        tableName: 'INSCRICAO',
        timestamps: false,
    });

    return Inscricao;
};
