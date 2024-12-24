import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false, versionKey: false }
);
const UserRating = mongoose.model("userRatings", SchemaCommon, "userRatings");

export default UserRating;
