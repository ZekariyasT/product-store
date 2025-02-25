import express from "express";

import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

const app = express();
app.use(express.json());
app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(404)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create Product", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Product not found" });
  }
});
// console.log(process.env.MONGO_URI);
app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});

// GeeQq8oaYYcfeyH7
