const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assets', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID do asset."
    },
    nome: {
      type: DataTypes.STRING(127),
      allowNull: false,
      comment: "Nome do asset."
    },
    path: {
      type: DataTypes.STRING(1023),
      allowNull: false,
      comment: "Caminho para o asset"
    }
  }, {
    sequelize,
    tableName: 'assets',
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
