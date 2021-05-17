const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pontos_de_coleta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID do ponto de coleta"
    },
    nome: {
      type: DataTypes.STRING(127),
      allowNull: false,
      defaultValue: "Lixeira",
      comment: "Nome do ponto de coleta."
    },
    loc_geo_latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "Localização geografica latitudinal para o mapa."
    },
    loc_geo_longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "Localização geografica longitudinal para o mapa."
    },
    tipo_de_ponto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_de_ponto',
        key: 'id'
      }
    },
    descricao: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "Descrição do ponto de coleta."
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    criadop_por: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pontos_de_coleta',
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
        name: "fk_pontos_de_coleta_usuario",
        using: "BTREE",
        fields: [
          { name: "criadop_por" },
        ]
      },
      {
        name: "fk_pontos_de_coleta_tipos_de_ponto",
        using: "BTREE",
        fields: [
          { name: "tipo_de_ponto" },
        ]
      },
    ]
  });
};
