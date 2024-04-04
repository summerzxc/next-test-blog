import connectDB from "@/lib/db";
import blogModel from "@/model/blogScheme";
import multer from "multer";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

// Multer configuration
const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false, // Disable body parser to handle multipart/form-data
  },
};

export async function GET(req, res) {
  try {
    await connectDB();
    const blogs = await blogModel.find();
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return NextResponse.error(401, "Unauthorized");
  }

  try {
    await connectDB();

    // Upload the file and wait for completion
    const uploadResult = await new Promise((resolve, reject) => {
      upload.single("image")(req, res, (err, file) => {
        if (err) {
          reject(err);
        } else {
          resolve(file);
        }
      });
    });

    const { title, description, text } = req.body;
    const image = uploadResult?.path || null; // Use optional chaining for nullish check
    const userId = session.user.id;

    await blogModel.create({ title, description, text, image, userId });

    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
