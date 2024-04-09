import { v2 as cloudinary } from "@cloudinary/uploader";

cloudinary.config({
  cloud_name: "doohmxv3e",
  api_key: "623587634963977",
  api_secret: "5iq7BLPxL-XXAJ7-43INq_xVqm8",
});

export const UploadToCloudinary = async (file) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: "test-blog",
      resource_type: "auto",
    });
    return uploadResponse.secure_url;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
