import express from "express";
import {
  createCategory,
  createProductForCategory,
  getCategories,
  getProductsOfCategory,
} from "../controllers/controller.js";
const router = express.Router();

router.route("/").get(getCategories);
router.route("/create").post(createCategory);
router
  .route("/:name")
  .get(getProductsOfCategory)
  .post(createProductForCategory);

export default router;
