const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CollectPoint = sequelize.define(
    "CollectPoint",
    {
      latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      validate: {
        bothCoordsOrNone() {
          if ((this.latitude === null) !== (this.longitude === null)) {
            throw new Error(
              "Require either both latitude and longitude or neither"
            );
          }
        },
      },
    }
  );

  return CollectPoint;
};
