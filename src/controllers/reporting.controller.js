import mongoose from "mongoose";
import Employees from "../models/employees.js";

const SchemaCommon = new mongoose.Schema({}, { strict: false });

export const reporting = async (req, res) => {
  try {
    const { email } = req.body;
    const employeeData = await Employees.find({ reportingManagerID: email });
    res.status(200).send(employeeData);
  } catch (error) {
    console.error("Error fetching reporting data:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
