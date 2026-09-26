const express = require("express");
const path = require("path");
const { getItems, createItem } = require("../controllers/items");

const router = express.Router();

// =========={ GET }==========

// api/items
router.get("/", getItems);

// api/items/:id
router.get("/:id", (req, res) => {
  res.send("get one item with id");
});

// =========={ POST }==========
// api/items
router.post("/", createItem);

module.exports = router;
