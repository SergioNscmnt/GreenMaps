const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mtm_comentarios', {
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
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comentarios_pontos_de_coleta',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mtm_comentarios',
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
        name: "fk_mtm_comentarios_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "fk_mtm_comentarios_comentarios_pontos_de_coleta",
        using: "BTREE",
        fields: [
          { name: "id_comentario" },
        ]
      },
    ]
  });
};
