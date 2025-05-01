import mongoose, { Schema } from "mongoose";

const revenueSchema = new Schema({});

export const Revenue =
  mongoose.models.Revenue || mongoose.model("Revenue", revenueSchema);
