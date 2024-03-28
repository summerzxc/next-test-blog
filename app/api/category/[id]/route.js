import connectDB from "@/lib/db";
import category from "@/model/scheme";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    try {
      
      const { id } = params;
      console.log(id)
      const { title, description } = await req.json();
      await connectDB();
      await category.findByIdAndUpdate(id, { title, description }, { new: true });
      return NextResponse.json({ message: "success", category });
    } catch (error) {
      return NextResponse.json({ message: error.message });
    }
  }
  
  export async function DELETE(req, {params}) {
    try {
      const { id } = params;
      await connectDB();
      await category.findByIdAndDelete(id);
      return NextResponse.json({ message: "success", category }); 
    } catch (error) {
      return NextResponse.json({ message: error.message });
    }
  }
  