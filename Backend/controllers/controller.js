import categories from "../data.js";

// Fetch all Categories
// GET /api/categories
const getCategories = async (req, res) => {
  // const list = categories.map((category) => category.name);
  res.json(categories);
};

// Fetch Products of specific Category
// GET /api/categories/:name
const getProductsOfCategory = async (req, res) => {
  const category = categories.find((c) => c._id === req.body.id);
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
  try {
    const { name, price, id } = req.body;
    const category = categories.find((c) => c._id == id);
    const product = {
      _id: Math.floor(Math.random() * 700 + 1),
      name: name,
      price: price,
    };
    category.products.push(product);
    categories.push(category);
    res.json(category.products);
  } catch (error) {
    res.json(error);
  }
};

// @desc    DELETE a category
// @route   DELETE /api/categories
const deleteCategory = async (req, res) => {
  try {
    let updatedCategories = categories.filter(
      (category) => category._id !== req.body.id
    );
    res.json(updatedCategories);

    // res.json({ message: "Category Removed" });
  } catch (error) {
    res.json(error);
  }
};

// @desc    DELETE a product
// @route   DELETE /api/categories/:name
const deleteProductFromCategory = async (req, res) => {
  try {
    const category = categories.find((c) => c.name == req.params.name);
    if (category) {
      const products = category.products;
      if (products) {
        const updatedProducts = products.filter(
          (product) => product._id == req.body.product_id
        );

        res.json(updatedProducts);
      }
    }
    res.send({ message: "Could not find required data" });
  } catch (error) {
    res.json(error);
  }
};

// @desc    UPDATE a Category
// @route   PUT /api/categories/
const updateCategory = async (req, res) => {
  try {
    const { name, id } = req.body;

    const objIndex = categories.findIndex((category) => category._id == id);

    categories[objIndex] = {
      ...categories[objIndex],

      name: name,
    };

    res.json(categories);
  } catch (error) {
    res.json(error);
  }
};

// @desc    UPDATE a product
// @route   PUT /api/categories/:name
const updateProductOfCategory = async (req, res) => {
  try {
    const { name, price, product_id } = req.body;
    const category = categories.find((c) => c.name == req.params.name);
    if (category) {
      const products = category.products;

      const objIndex = products.findIndex((obj) => obj._id == product_id);

      products[objIndex] = {
        ...products[objIndex],
        _id: product_id,
        name: name,
        price: price,
      };

      res.json(products);
    }
  } catch (error) {
    res.json(error);
  }
};

export {
  getCategories,
  getProductsOfCategory,
  createCategory,
  createProductForCategory,
  deleteCategory,
  deleteProductFromCategory,
  updateCategory,
  updateProductOfCategory,
};
