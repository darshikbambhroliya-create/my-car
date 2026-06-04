import mongoose from "mongoose";

const conn = process.env.MONGODB_URI!;

if (!conn) {
  throw new Error("MONGODB_URI is not defined");
}

export async function connectionDB() {
  try {
    await mongoose.connect(conn);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
