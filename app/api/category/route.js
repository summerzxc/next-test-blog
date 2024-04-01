import connectDB from "@/lib/db";
import categoryModel from "@/model/categoryScheme";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectDB();
    const categories = await categoryModel.find();
    return NextResponse.json({ categories });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(req, res) {
  try {
    const { title, description } = await req.json();
    await connectDB();
    await categoryModel.create({ title, description });
    return NextResponse.json({ message: "success", category });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}