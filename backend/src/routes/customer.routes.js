const express = require("express");
const router = express.Router();

const customers = require("../controllers/CustomerController");

// Create a new Customer
router.post("/", customers.create);

// Retrieve all Customer
router.get("/", customers.findAll);

// Retrieve a single Customer by Id
router.get("/:id", customers.findById);

// Update a Customer with Id
router.put("/:id", customers.update);

// Delete a Customer with Id
router.delete("/:id", customers.delete);

module.exports = router;
