import connectDB from "@/lib/db";
import category from "@/model/scheme";
import { NextResponse } from "next/server";
import Cors from 'cors';
import initMiddleware from '@/lib/initMiddleware';

// Initialize the CORS middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
    origin: '*' // Set the allowed origin (change this to restrict to specific origins)
  })
);

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
  await cors(req, res); // Apply CORS middleware
  try {
    const { title, description } = await req.json();
    await connectDB();
    await category.create({ title, description });
    return NextResponse.json({ message: "success", category });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}


