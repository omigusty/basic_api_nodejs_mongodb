const Product = require("../models/Product");

module.exports = {
  index: async (req, res) => {
    try {
      const getProduct = await Product.find({});
      if (getProduct.length > 0) {
        res.json({ message: "Get all products successfuly", data: getProduct });
      } else {
        res.json({ message: "No data available" });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json({ message: "Product product successfuly", data: product });
    } catch (error) {
      console.error("Error fetching data by ID:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  addProduct: async (req, res) => {
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
    });
    try {
      const data = await product.save();
      res.json({ message: "Add new product successfuly", data: data });
    } catch (error) {
      console.error("Error add data:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
          title: req.body.title,
          price: req.body.price,
        },
        { new: true, runValidators: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedProduct = await Product.findByIdAndDelete(id);

      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};
