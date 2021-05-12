const express = require("express");
const app = express();
const indexRoute = require("./routes/customer.routes");
const db = require("./config/db.config");
const customerRoute = require("./routes/customer.routes");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

app.use(express.json());

// Carrega as rotas
app.use("/customer", customerRoute);

// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
