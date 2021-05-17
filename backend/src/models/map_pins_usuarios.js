const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('map_pins_usuarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(63),
      allowNull: true
    },
    loc_geo_latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    loc_geo_longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tipo_de_pin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_de_pins',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'map_pins_usuarios',
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
        name: "fk_map_pins_usuarios_tipos_de_pins",
        using: "BTREE",
        fields: [
          { name: "tipo_de_pin" },
        ]
      },
    ]
  });
};
