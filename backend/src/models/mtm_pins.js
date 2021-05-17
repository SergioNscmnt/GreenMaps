const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtm_pins', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    id_pin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'map_pins_usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mtm_pins',
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
        name: "fk_mtm_pins_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "fk_mtm_pins_map_pins_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_pin" },
        ]
      },
    ]
  });
};
