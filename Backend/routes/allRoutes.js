import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getProductsOfCategory,
  createProductForCategory,
  deleteProductFromCategory,
  updateProductOfCategory,
  updateCategory,
} from "../controllers/controller.js";
const router = express.Router();
router
  .route("/:name")
  .get(getProductsOfCategory)
  .post(createProductForCategory)
  .put(updateProductOfCategory)
  .delete(deleteProductFromCategory);

router
  .route("/")
  .post(createCategory)
  .get(getCategories)
  .delete(deleteCategory)
  .put(updateCategory);

export default router;
