import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema({}, { strict: false });
const OnboardingEmployee = mongoose.model("employeonboardings", SchemaCommon, "employeonboardings");

export default OnboardingEmployee;