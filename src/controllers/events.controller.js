import Events from "../models/events.js";

export const getEvents = async (req, res) => {
  try {
    const data = await Events.find({}, { _id: 0 });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
