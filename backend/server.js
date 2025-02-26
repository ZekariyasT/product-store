import express from "express";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
// console.log(process.env.MONGO_URI);
app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});

// GeeQq8oaYYcfeyH7

// bojUG8SOZduChI7Z
