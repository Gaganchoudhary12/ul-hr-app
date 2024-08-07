const express = require("express");
const { getQuestions } = require("../controllers/question.controller");

const questionRouter = express.Router();

questionRouter.get("/", getQuestions);

module.exports = questionRouter;
