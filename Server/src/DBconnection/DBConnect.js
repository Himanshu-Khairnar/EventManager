import mongoose from "mongoose";
export const DBConnect = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error(error);
  }
};
