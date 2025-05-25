module.exports = (sequelize, DataTypes) => {
    const Certificado = sequelize.define('Certificado', {
        id_certificado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_emissao: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        codigo_validacao: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        tableName: 'CERTIFICADO',
        timestamps: false,
    });

    return Certificado;
};
