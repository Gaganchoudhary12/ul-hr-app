import Questions from '../models/question.js'

export const getQuestions = async (req, res) => {
  const questions = await Questions.find({},{_id:0});
  res.status(200).send(questions);
};
