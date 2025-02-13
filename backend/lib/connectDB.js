import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
