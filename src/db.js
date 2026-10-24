import mongoose from "mongoose";

// Connects to MongoDB using MONGO_URI from your .env file.
// You do NOT need to edit this file.
export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not set. Copy .env.example to .env and fill it in.");
  }
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}
