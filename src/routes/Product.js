const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router
  .route("/api/product")
  .get(productController.index)
  .post(productController.addProduct);
router
  .route("/api/product/:id")
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
