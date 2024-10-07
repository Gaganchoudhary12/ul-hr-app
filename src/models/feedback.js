import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false, versionKey: false }
);
const Feedback = mongoose.model("feedbacks", SchemaCommon, "feedbacks");

export default Feedback;
