import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false, versionKey: false }
);
const UserRating = mongoose.model("managers", SchemaCommon, "managers");

export default UserRating;
