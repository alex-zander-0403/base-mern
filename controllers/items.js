const Item = require("../models/item");

// =========={ GET }==========
const getItems = async (req, res) => {
  try {
    const allItems = await Item.find();

    res.status(200).json(allItems);
  } catch (error) {
    // console.log("❌ Ошибка getItems!");
    // console.log(error.message);

    res.status(500).json({ message: "❌ Ошибка контроллера: getItems!" });
  }
};

// =========={ GET :id }==========
const getItem = async (req, res) => {
  try {
    const { id } = req.params;

    // const item = await Item.find({ _id: id });
    const item = await Item.findById(id);

    res.status(200).json(item);
  } catch (error) {
    // console.log("❌ Ошибка getItem!");
    // console.log(error.message);

    res.status(400).json({ message: "❌ Ошибка контроллера: getItem!" });
  }
};

// =========={ POST }==========
const createItem = async (req, res) => {
  const errors = {};

  if (!req.body.title) {
    errors.title = { message: "⚡ нет названия" };
  }
  if (!req.body.desc) {
    errors.desc = { message: "⚡ нет описания" };
  }
  if (req.body.desc && req.body.desc.length > 500) {
    errors.desc = { message: "⚡ слишком длинное описание (>500)" };
  }
  if (!req.body.price) {
    errors.price = { message: "⚡ нет цены" };
  }
  if (!req.file) {
    errors.file = { message: "⚡ нет изображения" };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { title, desc, price } = req.body;

    const properties = {
      title,
      desc,
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

module.exports = { getItems, getItem, createItem };
