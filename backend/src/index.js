const express = require("express");
const app = express();
const db = require("./config/db.config");

const indexRoute = require("./routes/index.routes");
const customerRoute = require("./routes/customer.routes");
const pontosDeColetaRoute = require("./routes/pontos_de_coleta.routes");

// Este bloco de código faz com que force dropar todas as tabelas e recriá-las para fins de desenvolvimento

/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});
*/

app.use(express.json());

// Carrega as rotas
app.use("/customer", customerRoute);
app.use("/pontos_de_coleta", pontosDeColetaRoute);
app.use("/", indexRoute);

// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
