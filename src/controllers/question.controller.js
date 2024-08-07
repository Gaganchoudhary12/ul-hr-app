const mongoose = require("mongoose");

const SchemaCommon = new mongoose.Schema({}, { strict: false });
const Questions = mongoose.model("questions", SchemaCommon, "questions");

const getQuestions = async (req, res) => {
  const questions = await Questions.find({},{_id:0});
  res.status(200).send(questions);
};
module.exports = { getQuestions };
