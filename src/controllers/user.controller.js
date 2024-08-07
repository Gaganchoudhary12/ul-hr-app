const mongoose = require("mongoose");

const getUserRating = async (req, res) => {
  const { email, date } = req.body;
  try {
    console.log({ email, date });
    res.status(200).send({ message: 'good work' });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = { getUserRating };
