import OnboardingQuestions from "../models/onboardingQuestion.js";

export const getQuestions = async (req, res) => {
  try {
    const { days, forRole } = req.body;
    const totalTitles = await OnboardingQuestions.distinct("title", {
      days,
      forRole,
    });
    const questions = [];
    for (const key of totalTitles) {
      const data = await OnboardingQuestions.find(
        {
          title: key,
          days,
          forRole,
        },
        { _id: 0 }
      );
      questions.push({ title: key, questions: data });
    }

    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};
