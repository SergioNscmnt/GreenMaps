const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipos_de_lixo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(127),
      allowNull: false,
      comment: "Descrição do tipo de lixo"
    },
    nome: {
      type: DataTypes.STRING(63),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipos_de_lixo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
