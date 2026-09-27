const Item = require("../models/item");

// функции контроллеры
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
