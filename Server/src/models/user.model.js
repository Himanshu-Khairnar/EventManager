import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: [4, "Name must be more than 4 letters."],
    max: 100,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    min: [6, "Password must be more than 6 letters"],
    max: [30, "Password must be less than 30 letters"],
  },
  avatar: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  refreshToken: String,
});

export const User = models.User || mongoose.model("User", userSchema);
