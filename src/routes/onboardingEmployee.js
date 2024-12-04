import express from "express";
import { getEmployeeRating, setEmployeeRating } from "../controllers/onboardingEmployee.controller.js";

const onboardingEmployeeRouter = express.Router();

onboardingEmployeeRouter.post("/", getEmployeeRating);
onboardingEmployeeRouter.post("/rating", setEmployeeRating);

export default onboardingEmployeeRouter;