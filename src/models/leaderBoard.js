import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false, versionKey: false }
);
const Leaders = mongoose.model("leaders", SchemaCommon, "leaders");

export default Leaders;