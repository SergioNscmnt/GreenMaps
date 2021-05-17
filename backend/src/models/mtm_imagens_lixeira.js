const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtm_imagens_lixeira', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_lixeira: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pontos_de_coleta',
        key: 'id'
      }
    },
    id_asset: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'assets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mtm_imagens_lixeira',
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
        name: "fk_mtm_imagens_lixeira_pontos_de_coleta",
        using: "BTREE",
        fields: [
          { name: "id_lixeira" },
        ]
      },
      {
        name: "fk_mtm_imagens_lixeira_assets",
        using: "BTREE",
        fields: [
          { name: "id_asset" },
        ]
      },
    ]
  });
};
