import mongoose from "mongoose";
export const loginSchema = new mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  { versionKey: false }
);
