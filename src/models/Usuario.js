module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    email_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    senha_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tipo_usuario: {
      type: DataTypes.ENUM('organizador', 'participante', 'ministrante', 'admin'),
      allowNull: false,
    },
  }, {
    tableName: 'USUARIO',
    timestamps: false,
  });

  return Usuario;
};