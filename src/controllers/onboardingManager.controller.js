import OnboardingManager from "../models/onboardingManager.js";

import { isValidEmail } from "../util/emailValidation.js";

export const setUserRating = async (req, res) => {
  const { email, title, question, rating, managerEmail, days } = req.body;
  try {
    if (!email || !title || !question || !rating || !managerEmail || !days) {
      const missingFields = [
        !managerEmail && "managerEmail",
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
    await OnboardingManager.updateOne(
      { email, days },
      {
        $set: {
          [`${title}.${question}`]: rating,
          managerEmail: managerEmail,
        },
      },
      { upsert: true }
    );

    res.status(200).send({ message: "document updated" });
  } catch (error) {
    res.status(400).send({ message: `Error ${error}` });
  }
};

export const getUserRating = async (req, res) => {
  const { email, days } = req.body;
  try {
    if (!email || !days) {
      const missingFields = [!email && "email", !days && "days"].filter(
        Boolean
      );
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).send("Valid email address is required");
    }
    const data = await OnboardingManager.find(
      { email,  days },
      { email: 0, _id: 0, managerEmail:0 }
    );
    res.status(200).send(data[0]);
  } catch (error) {
    res.status(400).send({ message: `Error ${error}` });
  }
};
