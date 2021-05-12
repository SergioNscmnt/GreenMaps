const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Address = sequelize.define("Address", {
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 500],
      },
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        not: ["[a-z]", "i"],
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    nameOfState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
  });

  return Address;
};
