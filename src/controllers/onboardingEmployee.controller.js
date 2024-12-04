import OnboardingEmployee from "../models/onboardingEmployee.js";
import { isValidEmail } from "../util/emailValidation.js";

export const setEmployeeRating = async (req, res) => {
  const { email, title, question, rating, days } = req.body;
  try {
    if (!email || !title || !question || !rating || days) {
      const missingFields = [
        !email && "email",
        !title && "title",
        !question && "question",
        !rating && "rating",
        !days && "days",
      ].filter(Boolean);
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).send("Valid email address is required");
    }
    await OnboardingEmployee.updateOne(
      { email, days },
      {
        $set: {
          [`${title}.${question}`]: rating,
        },
      },
      { upsert: true }
    );

    res.status(200).send({ message: "document updated" });
  } catch (error) {
    res.status(400).send({ message: `Error ${error}` });
  }
};

export const getEmployeeRating = async (req, res) => {
  const { email, days } = req.body;
  try {
    if (!email || !days) {
      const missingFields = [
        !email && "email",
        !days && "days",
      ].filter(Boolean);
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).send("Valid email address is required");
    }
    const data = await OnboardingEmployee.find(
      { email, days},
      { email: 0, _id: 0 }
    );
    res.status(200).send(data[0]);
  } catch (error) {
    res.status(400).send({ message: `Error ${error}` });
  }
};
