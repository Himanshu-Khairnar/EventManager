import mongoose from "mongoose";
const EventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    category: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export const Event =
  mongoose.models.Events || mongoose.model("Events", EventSchema);
