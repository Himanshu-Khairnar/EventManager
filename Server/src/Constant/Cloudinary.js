import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (file) => {
  try {
    if (!localFilePath) return null;
    //upload on cloundinary
    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return response
  } catch (error) {
    console.log(error);
    return error;
  }
};
