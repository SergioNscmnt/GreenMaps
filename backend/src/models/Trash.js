const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Trash = sequelize.define("Trash", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Trash;
};
