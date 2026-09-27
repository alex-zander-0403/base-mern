const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
