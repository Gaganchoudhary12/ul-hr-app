import Questions from "../models/question.js";
import Feedback from "../models/feedback.js";

export const getFeedbackQuestion = async (req, res) => {
  try {
    const question = await Questions.find(
      { type: "question" },
      { _id: 0, type: 0 }
    );
    res.status(200).send(question[0]);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

export const submitFeedback = async (req, res) => {
  const { type, comment, stars } = req.body;
  try {
    if (!type) {
      res.status(400).send({ message: "type is required" });
      return
    }
    if (!comment) {
      res.status(400).send({ message: "comment is required" });
      return
    }

    const data = Feedback.create({ type, comment, stars });
    res.status(200).send({ message: "submitted" });
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};
