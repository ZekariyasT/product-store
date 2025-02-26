import express from "express";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);
// console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});

// GeeQq8oaYYcfeyH7

// bojUG8SOZduChI7Z
