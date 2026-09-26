const express = require("express");
const path = require("path");
const router = express.Router();

// =========={ GET }==========

// api/items
router.get("/", (req, res) => {
  res.send("get all items");
});

// api/items/:id
router.get("/:id", (req, res) => {
  res.send("get one item with id");
});

// =========={ POST }==========
// api/items
router.post("/", (req, res) => {
  res.send("new item created");
});

module.exports = router;
