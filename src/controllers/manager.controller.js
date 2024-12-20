import UserRating from "../models/managers.js";

import { isValidEmail } from "../util/emailValidation.js";

export const setUserRating = async (req, res) => {
  const { email, date, title, question, rating, managerEmail } = req.body;
  try {
    if (!email || !date || !title || !question || !rating || !managerEmail) {
      const missingFields = [
        !managerEmail && "managerEmail",
        !email && "email",
        !date && "date",
        !title && "title",
        !question && "question",
        !rating && "rating",
      ].filter(Boolean);
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).send("Valid email address is required");
    }
    await UserRating.updateOne(
      { email, date },
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
  const { email, date } = req.body;
  try {
    if (!email || !date) {
      const missingFields = [!email && "email", !date && "date"].filter(
        Boolean
      );
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).send("Valid email address is required");
    }
    const data = await UserRating.find(
      { email, date },
      { email: 0, date: 0, _id: 0, managerEmail:0 }
    );
    res.status(200).send(data[0]);
  } catch (error) {
    res.status(400).send({ message: `Error ${error}` });
  }
};
