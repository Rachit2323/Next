import connectMongoDB from "@/libs/mongodb";
import form from "@/models/form.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const result = await request.json();
    console.log(result);
    await connectMongoDB();
    await form.create(result);
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error occurred while creating the topic" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const result = await form.find({});
    return NextResponse.json({ message: "Data Retrieved", result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error occurred while fetching data" }, { status: 500 });
  }
}


