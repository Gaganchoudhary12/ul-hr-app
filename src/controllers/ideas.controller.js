import Ideas from "../models/ideas.js";

export const handleIdeas = async (req, res) => {
  const { email, department, idea } = req.body;
  try {
    if (!email) {
      res.status(400).send({ message: "email is required" });
      return;
    }
    if (!department) {
      res.status(400).send({ message: "department is required" });
      return;
    }
    if (!idea) {
      res.status(400).send({ message: "idea is required" });
      return;
    }
    const data = await Ideas.create({ email, department, idea, date: new Date() });
    console.log(data,'data');
    res.status(200).send({ message: "submitted" });
  } catch (error) {
    console.log(error,'error');
    res.status(500).send({ message: "server error" });
  }
};
