import mongoose from "mongoose";
import { isValidEmail } from "../util/emailValidation.js";

const SchemaCommon = new mongoose.Schema({}, { strict: false });
const Employee = mongoose.model("employees", SchemaCommon, "employees");

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).send("email address is required");
    } else {
      if (!isValidEmail(email)) {
        return res.status(400).send("Valid email address is required");
      }
    }
    const employeeData = await Employee.find({ email });
    console.log(employeeData, "employeeData");
    if (!employeeData.length) {
      return res
        .status(200)
        .send({ message: "Your are not a employee of university living" });
    }
    res.status(200).send(employeeData[0]);
  } catch (error) {
    console.error("Error fetching employee data:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

