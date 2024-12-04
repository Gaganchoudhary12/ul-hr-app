import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false, versionKey: false }
);
const OnboardingManager = mongoose.model("bymanageronboardings", SchemaCommon, "bymanageronboardings");

export default OnboardingManager;