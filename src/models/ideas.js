import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false, versionKey: false }
);
const Ideas = mongoose.model("ideas", SchemaCommon, "ideas");

export default Ideas;
