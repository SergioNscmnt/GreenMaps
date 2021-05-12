// Configuração de ambiente

const env = {
  database: "greenmaps",
  username: "root",
  password: "admin",
  host: "localhost",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
