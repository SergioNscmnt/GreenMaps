const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipos_de_pins', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(63),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(127),
      allowNull: true
    },
    icone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'assets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tipos_de_pins',
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
      {
        name: "fk_tipos_de_pins_assets",
        using: "BTREE",
        fields: [
          { name: "icone" },
        ]
      },
    ]
  });
};
