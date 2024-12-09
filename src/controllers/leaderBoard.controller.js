import Leaders from "../models/leaderBoard.js";

export const getLeaders = async (req, res) => {
  try {
    const data = await Leaders.find({}).sort({ position: 1 });
    res.status(200).send(data);
  } catch (error) {
    console.log(error, "error");
    res.status(500).send({ message: "server error" });
  }
};
