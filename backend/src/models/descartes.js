const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('descartes', {
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
    id_ponto_de_coleta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pontos_de_coleta',
        key: 'id'
      }
    },
    id_tipo_lixo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_de_lixo',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'descartes',
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
        name: "fk_descartes_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "fk_descartes_pontos_de_coleta",
        using: "BTREE",
        fields: [
          { name: "id_ponto_de_coleta" },
        ]
      },
      {
        name: "fk_descartes_tipos_de_lixo",
        using: "BTREE",
        fields: [
          { name: "id_tipo_lixo" },
        ]
      },
    ]
  });
};
