const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estado', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nome da unidade federativa."
    },
    estado: {
      type: DataTypes.STRING(31),
      allowNull: false,
      comment: "Nome da unidade federativa."
    }
  }, {
    sequelize,
    tableName: 'estado',
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
