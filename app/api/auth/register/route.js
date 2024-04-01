import connectDB from "@/lib/db";
import userModel from "@/model/userScheme";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({ username, email, password: hashedPassword });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
