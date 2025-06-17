import mongoose, { Schema, models } from "mongoose";

const testimonialSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  message: { type: String, required: true },
  avatar: { type: String, required: true },
  designation: { type: String, required: true },
  isVisible: { type: String, required: true },
  review: { type: Number, required: true, min: 1, max: 5 },
});

export const Testimonial =
  models.Testimonial || mongoose.model("Testimonial ", testimonialSchema);
