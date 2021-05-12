const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Trash = require("../models/Trash")(sequelize, Sequelize);
db.CollectPoint = require("../models/CollectPoint")(sequelize, Sequelize);
db.Address = require("../models/Address")(sequelize, Sequelize);
db.Person = require("../models/Person")(sequelize, Sequelize);
db.User = require("../models/User")(sequelize, Sequelize);

//Relationships
db.CollectPoint.belongsToMany(db.Trash, {
  through: "CollectPoint_Trash",
});
db.Trash.belongsToMany(db.CollectPoint, {
  through: "CollectPoint_Trash",
});

db.Address.hasMany(db.Person, { foreignKey: { allowNull: false } });
db.User.belongsTo(db.Person, { foreignKey: { allowNull: false } });

module.exports = db;
