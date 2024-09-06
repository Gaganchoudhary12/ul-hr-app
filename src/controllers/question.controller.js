import Questions from "../models/question.js";
 
export const getQuestions = async (req, res) => {
  const totalTitles = await Questions.distinct("title");
  const questions = [];
  for (const key of totalTitles) {
    const data = await Questions.find({
      title:key,
    }, { _id: 0 });
    questions.push({ title: key, questions: data });
  }
 
  res.status(200).send(questions.reverse());
};
