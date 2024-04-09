import connectDB from "@/lib/db";
import blogModel from "@/model/blogScheme";
import multer from "multer";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads"); // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now()); // Specify the file naming convention
  },
});

const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    return handleGET(req, res);
  } else if (req.method === "POST") {
    return handlePOST(req, res);
  }
}

async function handleGET(req, res) {
  try {
    await connectDB();
    const blogs = await blogModel.find();
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

async function handlePOST(req, res) {
  // const session = await getSession({ req });
  // console.log(session);
  // if (!session) {
  //   return NextResponse.error(401, "Unauthorized");
  // }
  console.log(req);
  try {
    await connectDB();

    // Upload the file and wait for completion
    upload.single("image")(req, res, async function (err) {
      if (err) {
        // Handle multer upload error
        return NextResponse.error(500, "File upload failed");
      }

      // File upload successful, now process other fields
      const { title, description, text } = req.body;
      const image = req.file ? req.file.path : null; // Check if file was uploaded
      console.log(title);
      // const userId = session.user.id;

      // Create new blog post
      await blogModel.create({ title, description, text, image });

      return NextResponse.json({ message: "success" });
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
