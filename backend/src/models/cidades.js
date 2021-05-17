const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidades', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cidade: {
      type: DataTypes.STRING(31),
      allowNull: false,
      comment: "Nome da cidade"
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Unidade federal a qual a cidade pertence",
      references: {
        model: 'estado',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cidades',
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
        name: "fk_cidades_estado",
        using: "BTREE",
        fields: [
          { name: "estado" },
        ]
      },
    ]
  });
};
