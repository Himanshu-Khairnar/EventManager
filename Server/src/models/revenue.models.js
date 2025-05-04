import mongoose, { Schema } from "mongoose";

const revenueSchema = new Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    source: {
      type: String,
      enum: ["ticket", "sponsorship", "merchandise", "other"],
      default: "ticket",
    },
    currency: {
      type: String,
      default: "USD",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Revenue =
  mongoose.models.Revenue || mongoose.model("Revenue", revenueSchema);
