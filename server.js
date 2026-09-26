const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("hello from server");
});

mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(port, () => {
    console.log(`🐸 Сервер запущен! Порт: ${port}`);
  });
});
