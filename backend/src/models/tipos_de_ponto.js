const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipos_de_ponto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: "SET('LIXEIRA','LIXEIRA DE RECICLAVEIS','EMPRESA DE RECICLAGEM','PONTO DE COLETA DE RECICLAVEIS','DESCARTE DE BATERIAS','DESCARTE DE ELETRONICOS','FERRO VELHO')",
      allowNull: false,
      defaultValue: "lixeira",
      comment: "Os tipos serão predefinidos por nós"
    },
    descricao: {
      type: DataTypes.STRING(127),
      allowNull: true,
      comment: "Descrição do tipo de ponto."
    },
    icone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Icone do tipo de lixeira",
      references: {
        model: 'assets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tipos_de_ponto',
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
        name: "fk_tipos_de_ponto_assets",
        using: "BTREE",
        fields: [
          { name: "icone" },
        ]
      },
    ]
  });
};
