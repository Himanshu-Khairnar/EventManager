import mongoose, { Schema, models } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: [8, "Title length is less than 8 letter"],
    max: [50, "Title length is more than 50 letter"],
  },
  description: {
    type: String,
    required: true,
    min: [8, "Title length is less than 8 letter"],
    max: [1000, "Title length is more than 50 letter"],
  },
  bannerUrl: {
    type: String,
    required: true,
  },
  location: { type: String, required: true },
  mapUrl: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdBy: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  capacity: { type: Number, required: true },
  isOnline: { type: Boolean, required: true },
  tags: [String],
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Event = models.Event || mongoose.model("Event", eventSchema);
