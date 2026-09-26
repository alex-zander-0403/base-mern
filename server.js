const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json()); // для автопарсинга тела JSON запроса ('Content-Type': 'application/json')
app.use(express.urlencoded({ extended: true })); // для парсинга form-data ('Content-Type': 'application/x-www-form')
app.use("/static", express.static(__dirname + "/assets")); // путь к изображениям

// ========== { items API } ==========
app.use("/api/items", require("./routes/items")); // items роутер

// ========== { main API } ==========
app.get("/", (req, res) => {
  res.send("hello from server");
});

// ========== { server + db } ==========
mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(port, () => {
    console.log(`🐸 Сервер запущен! Порт: ${port}`);
  });
});
