import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false }
);
const Employees = mongoose.model("employees", SchemaCommon, "employees");

export default Employees;