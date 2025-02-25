import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // config to read the .env file

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:  ${error.message}`);
    process.exit(1);
  }
};
