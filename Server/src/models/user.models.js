import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: [true, "FullName is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

export const User = await Schema.model("User", userSchema);
