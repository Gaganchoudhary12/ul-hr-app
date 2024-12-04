import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false, versionKey: false }
);
const Banner = mongoose.model("banners", SchemaCommon, "banners");

export default Banner;