import connectDB from "@/lib/db";
import blogModel from "@/model/blogScheme";
import { NextResponse } from "next/server";

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
  try {
    const { title, description, text } = await req.json();
    await connectDB();
    await blogModel.create({ title, description, text });
    return NextResponse.json({ message: "success", category });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}


