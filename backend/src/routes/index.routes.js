const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "GreenMaps API",
    version: "v0.0.1",
  });
});

module.exports = router;
