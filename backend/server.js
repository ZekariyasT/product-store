import express from "express";

import { connectDB } from "./config/db.js";

const app = express();

app.post("/products", (req, res) => {
  const product = req.body;
});

// console.log(process.env.MONGO_URI);
app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});

// GeeQq8oaYYcfeyH7
