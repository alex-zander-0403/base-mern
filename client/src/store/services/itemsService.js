//

// services - это вынесенная логика для действий
const getItems = async () => {
  const data = await fetch.get("/api/items"); // GET http://localhost:8000/api/items
  const items = await data.json();

  return items;
};

const itemsService = {
  getItems,
};

export default itemsService;
