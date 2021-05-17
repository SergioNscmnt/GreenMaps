const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id do usuario"
    },
    alias_usuario: {
      type: DataTypes.STRING(63),
      allowNull: false,
      comment: "Nickname do usuario."
    },
    nome_usuario: {
      type: DataTypes.STRING(750),
      allowNull: true,
      comment: "Nome real do usuario. Ex: Viniciu da Rosa silva.\n(deveriamos separar o primeiro do segundo nome?)\n\nO maior nome do mundo tem 747 caracteres."
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "Fixo nao vale :D"
    },
    email: {
      type: DataTypes.STRING(325),
      allowNull: true,
      comment: "Email do usuario.\n\nO e-mail sera obrigatorio para cadastro.\nO e-mail sera unico(?) e identificara o usuario. Mesmo assim, a coluna ID sera mantida.\n\nO maximo de caracteres de um email é 320(64 antes do @ e 256 depois do @)"
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Senha de login.\n\nNão esquecer de usar algum metodo de criptografia no futuro, alem de aplicar constraints pra senha não ter menos que 8 caracteres e alguns caracteres estranhos."
    },
    avatar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'assets',
        key: 'id'
      }
    },
    cidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Cidade cadastrada do individuo.",
      references: {
        model: 'cidades',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Unidade federativa cadastrada do individuo.\n\nCampo prescindivel, uma vez que o estado é conectado a cidade.",
      references: {
        model: 'estado',
        key: 'id'
      }
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Checa se a conta esta ativa ou nao.\n\nPara casos de exclusão, banimento, bloqueio ou coisas do tipo."
    }
  }, {
    sequelize,
    tableName: 'usuario',
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
        name: "fk_usuario_cidades",
        using: "BTREE",
        fields: [
          { name: "cidade" },
        ]
      },
      {
        name: "fk_usuario_estado",
        using: "BTREE",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "fk_usuario_assets",
        using: "BTREE",
        fields: [
          { name: "avatar" },
        ]
      },
    ]
  });
};
