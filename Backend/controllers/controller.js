// import categories from "../data.js";

const db = require("../models");

// create main Model
const Product = db.products;
const Category = db.categories;

// CATEGORY CONTROLLERS
// ----------------------------------------------

// 1. create category

const addCategory = async (req, res) => {
  let info = {
    name: req.body.name,
    price: req.body.price,
  };
  const category = await Category.create(info);
  res.status(200).send(category);
  console.log(category);
};

// 2. get all categories

const getAllCategories = async (req, res) => {
  let categories = await Category.findAll({});
  res.status(200).send(categories);
};

const getOneCategory = async (req, res) => {
  const id = req.params.id;

  const category = await Category.findOne({
    where: { id: id },
  });

  res.status(200).send(category);
};

// 3. update Category

const updateCategory = async (req, res) => {
  let id = req.params.id;

  const category = await Category.update(req.body, { where: { id: id } });

  res.status(200).send(category);
};

// 4. delete category by id

const deleteCategory = async (req, res) => {
  let id = req.params.id;

  await Category.destroy({ where: { id: id } });

  res.status(200).send("Categroy is deleted !");
};

// PRODUCT CONTROLLERS

const addProduct = async (req, res) => {
  const id = req.params.id;

  let info = {
    category_id: id,
    name: req.body.name,
    price: req.body.price,
  };
  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

const getAllProducts = async (req, res) => {
  const id = req.params.id;

  const products = await Category.findAll({
    include: [
      {
        model: Product,
        as: "product",
      },
    ],
    where: { id: id },
  });

  res.status(200).send(products);
};

const getOneProduct = async (req, res) => {
  const id = req.params.productId;

  const product = await Product.findOne({
    where: { id: id },
  });

  res.status(200).send(product);
};

//    PUT /products/:productId

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, price } = req.body;

  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    product.name = name;
    product.price = price;

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

//     Delete a product
//     DELETE /products/:productId

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getOneProduct,
  addCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
};

// // Fetch all Categories
// // GET /api/categories
// const getCategories = async (req, res) => {
//   // const list = categories.map((category) => category.name);
//   res.json(categories);
// };

// // Fetch Products of specific Category
// // GET /api/categories/:name
// const getProductsOfCategory = async (req, res) => {
//   const pageSize = 10;
//   const page = Number(req.query.pageNumber) || 1;
//   const category = categories.find((c) => c.name === req.params.name);
//   if (category) {
//     res.json(category.products);
//   } else {
//     res.send({ message: "No category Found." });
//   }
// };

// // Create a new category
// // POST /api/categories/
// const createCategory = async (req, res) => {
//   const { name } = req.body;
//   const category = {
//     _id: Math.floor(Math.random() * 100 + 1),
//     name: name,
//     products: [],
//   };
//   categories.push(category);
//   const cats = categories.map((c) => c.name);
//   res.json(cats);
// };

// // Create a new product for a category
// // POST /api/categories/:name
// const createProductForCategory = async (req, res) => {
//   try {
//     const { name, price, id } = req.body;
//     const category = categories.find((c) => c.name == req.params.name);
//     const product = {
//       _id: Math.floor(Math.random() * 700 + 1),
//       name: name,
//       price: price,
//     };
//     category.products.push(product);
//     categories.push(category);
//     res.json(category.products);
//   } catch (error) {
//     res.json(error);
//   }
// };

// // @desc    DELETE a category
// // @route   DELETE /api/categories
// const deleteCategory = async (req, res) => {
//   try {
//     let updatedCategories = categories.filter(
//       (category) => category._id !== req.body.id
//     );
//     res.json(updatedCategories);

//     // res.json({ message: "Category Removed" });
//   } catch (error) {
//     res.json(error);
//   }
// };

// // @desc    DELETE a product
// // @route   DELETE /api/categories/:name
// const deleteProductFromCategory = async (req, res) => {
//   try {
//     const category = categories.find((c) => c.name == req.params.name);

//     const products = category.products;
//     const index = products.findIndex(
//       (product) => product._id == req.body.product_id
//     );

//     category.products.splice(index, 1);

//     res.json(products);

//     // res.send({ message: "Could not find required data" });
//   } catch (error) {
//     res.json(error);
//   }
// };

// // @desc    UPDATE a Category
// // @route   PUT /api/categories/
// const updateCategory = async (req, res) => {
//   try {
//     const { name, id } = req.body;

//     const objIndex = categories.findIndex((category) => category._id == id);

//     categories[objIndex] = {
//       ...categories[objIndex],

//       name: name,
//     };

//     res.json(categories);
//   } catch (error) {
//     res.json(error);
//   }
// };

// // @desc    UPDATE a product
// // @route   PUT /api/categories/:name
// const updateProductOfCategory = async (req, res) => {
//   try {
//     const { name, price, product_id } = req.body;
//     const category = categories.find((c) => c.name == req.params.name);
//     if (category) {
//       const products = category.products;

//       const objIndex = products.findIndex((obj) => obj._id == product_id);

//       products[objIndex] = {
//         ...products[objIndex],
//         _id: product_id,
//         name: name,
//         price: price,
//       };

//       res.json(products);
//     }
//   } catch (error) {
//     res.json(error);
//   }
// };

// export {
//   getCategories,
//   getProductsOfCategory,
//   createCategory,
//   createProductForCategory,
//   deleteCategory,
//   deleteProductFromCategory,
//   updateCategory,
//   updateProductOfCategory,
// };
