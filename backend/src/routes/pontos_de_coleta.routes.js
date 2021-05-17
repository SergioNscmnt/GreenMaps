const express = require("express");
const router = express.Router();

const controller = require("../controllers/PontosDeColetaController");

router.get("/", controller.buscarTodos);
router.post("/", controller.criar);

module.exports = router;
