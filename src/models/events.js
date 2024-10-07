import mongoose from "mongoose";

const SchemaCommon = new mongoose.Schema(
  {},
  { strict: false }
);
const Events = mongoose.model("events", SchemaCommon, "events");

export default Events;