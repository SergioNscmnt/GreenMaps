const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentarios_pontos_de_coleta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comentario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ponto_coleta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Ponto de coleta que foi comentado.",
      references: {
        model: 'pontos_de_coleta',
        key: 'id'
      }
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comentarios_pontos_de_coleta',
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
        name: "fk_comentarios_pontos_de_coleta_pontos_de_coleta",
        using: "BTREE",
        fields: [
          { name: "ponto_coleta" },
        ]
      },
    ]
  });
};
