const Item = require("../models/item");

// get all
const getItems = async (req, res) => {
  try {
    const allItems = await Item.find();

    res.status(200).json(allItems);
  } catch (error) {
    // console.log("❌ Ошибка getPlanes!");
    // console.log(error.message);

    res.status(500).json({ message: "❌ Ошибка контроллера: getItems!" });
  }
};

// post new
const createItem = async (req, res) => {
  const errors = {};

  if (!req.body.title) {
    errors.title = { message: "⚡ нет названия" };
  }
  if (!req.body.description) {
    errors.title = { message: "⚡ нет описания" };
  }
  if (req.body.description && req.body.description.length > 500) {
    errors.title = { message: "⚡ слишком длинное описание (>500)" };
  }
  if (!req.body.price) {
    errors.title = { message: "⚡ нет цены" };
  }
  if (!req.file) {
    errors.title = { message: "⚡ нет изображения" };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { title, description, price } = req.body;

    const properties = {
      title,
      description,
      price,
      itemImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    };

    const newItem = await Item.create(properties);

    res.status(201).json(newItem);
  } catch (error) {
    // console.log("❌ Ошибка postItem!");
    // console.log(error.message);

    res.status(500).json({ message: "❌ Ошибка контроллера: postItem!" });
  }
};

module.exports = { getItems, createItem };
