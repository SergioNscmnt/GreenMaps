const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtm_tipos_de_lixo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_ponto_de_coleta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pontos_de_coleta',
        key: 'id'
      }
    },
    id_tipo_de_lixo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_de_lixo',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mtm_tipos_de_lixo',
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
        name: "fk_mtm_tipos_de_lixo_pontos_de_coleta",
        using: "BTREE",
        fields: [
          { name: "id_ponto_de_coleta" },
        ]
      },
      {
        name: "fk_mtm_tipos_de_lixo_tipos_de_lixo",
        using: "BTREE",
        fields: [
          { name: "id_tipo_de_lixo" },
        ]
      },
    ]
  });
};
