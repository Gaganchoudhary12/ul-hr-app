import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema({}, { strict: false });
const OnboardingQuestions = mongoose.model("onboardingquestions", SchemaCommon, "onboardingquestions");

export default OnboardingQuestions;