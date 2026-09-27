const express = require("express");
const path = require("path");
const multer = require("multer");
const { getItems, getItem, createItem } = require("../controllers/items");
const router = express.Router();

// инструкции куда/как сохранять img
const storage = multer.diskStorage({
  destination: "./assets",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

// функция middleware загрузки файлов
const upload = multer({ storage });

// =========={ GET }==========

// api/items
router.get("/", getItems);

// =========={ GET :id }==========

// api/items/:id
router.get("/:id", getItem);

// =========={ POST }==========
// api/items
router.post("/", upload.single("itemImage"), createItem);

module.exports = router;
