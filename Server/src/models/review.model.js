import mongoose, { Schema, models } from "mongoose";

const testimonialSchema = new Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: {
    type: Number,
    required: true,
    min: [1, "Rating must be above or equal to 1"],
    max: [5, "Rating must be below or equal to 5"],
  },
  comment: {
    type: String,
    required: false,
    max: [200, "length of comment must be under 500 letters"],
  },
});

export const Testimonial =
  models.Testimonial || mongoose.model("Testimonial ", testimonialSchema);
