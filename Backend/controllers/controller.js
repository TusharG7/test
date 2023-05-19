import categories from "../data.js";

// Fetch all Categories
// GET /api/categories
const getCategories = async (req, res) => {
  const list = categories.map((category) => category.name);
  res.json(categories);
};

// Fetch Products of specific Category
// GET /api/categories/:id
const getProductsOfCategory = async (req, res) => {
  const category = categories.find((c) => c.name === req.params.name);
  if (category) {
    res.json(category.products);
  } else {
    res.send({ message: "No category Found." });
  }
};

// Create a new category
// POST /api/categories/create
const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = {
    _id: Math.floor(Math.random() * 100 + 1),
    name: name,
    products: [],
  };
  categories.push(category);
  const cats = categories.map((c) => c.name);
  res.json(cats);
};

// Create a new product for a category
// POST /api/categories/:name
const createProductForCategory = async (req, res) => {
  const { name, price } = req.body;
  const category = categories.find((c) => c.name === req.params.name);
  const product = {
    _id: Math.floor(Math.random() * 700 + 1),
    name: name,
    price: price,
  };
  category.products.push(product);
  res.json(category.products);
};

export {
  getCategories,
  getProductsOfCategory,
  createCategory,
  createProductForCategory,
};
