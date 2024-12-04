import express from "express";
import { getQuestions } from "../controllers/onboardingQuestion.controller.js";

const onboardingQuestionRouter = express.Router();

onboardingQuestionRouter.post("/", getQuestions);

export default onboardingQuestionRouter;