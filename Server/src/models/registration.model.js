import mongoose, { Schema, models } from "mongoose";

const registrationSchema = new Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  applicant: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  registeredAt: { type: Date, default: Date.now },
});

export const Registration =
  models.Registration || mongoose.model("Registration", registrationSchema);
