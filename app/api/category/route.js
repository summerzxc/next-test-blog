import connectDB from "@/lib/db";
import category from "@/model/scheme";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectDB();
    const categories = await category.find();
    return NextResponse.json({ categories });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(req, res) {
  try {
    const { title, description } = await req.json();
    await connectDB();
    await category.create({ title, description });
    return NextResponse.json({ message: "success", category });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(req, res) {
  try {
    
    const { id } = req.query;
    const { title, description } = await req.json();
    await connectDB();
    await category.findByIdAndUpdate(id, { title, description }, { new: true });
    return NextResponse.json({ message: "success", category });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}