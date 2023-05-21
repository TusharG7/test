const express = require("express");
// import {
//   createCategory,
//   deleteCategory,
//   getCategories,
//   getProductsOfCategory,
//   createProductForCategory,
//   deleteProductFromCategory,
//   updateProductOfCategory,
//   updateCategory,

// } from "../controllers/controller.js";

const controller = require("../controllers/controller.js");

const router = express.Router();

router.post("/addCategory", controller.addCategory);

router.get("/allCategories", controller.getAllCategories);

// router.get("/category/:id", controller.getOneCategory);
router.put("/:id", controller.updateCategory);

router.delete("/:id", controller.deleteCategory);

router.post("/:id", controller.addProduct);

router.get("/:id", controller.getAllProducts);

router.get("/products/:productId", controller.getOneProduct);

router.put("/products/:productId", controller.updateProduct);

router.delete("/products/:productId", controller.deleteProduct);

// router
//   .route("/:name")
//   .get(getProductsOfCategory)
//   .post(createProductForCategory)
//   .put(updateProductOfCategory)
//   .delete(deleteProductFromCategory);

// router
//   .route("/")
//   .post(createCategory)
//   .get(getCategories)
//   .delete(deleteCategory)
//   .put(updateCategory);

module.exports = router;
