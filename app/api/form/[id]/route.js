import connectMongoDB from "@/libs/mongodb";
import form from "@/models/form.js";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const match = request.url.match(/\/api\/form\/(\w+)/);
    const id = match && match[1];

    const updatedData = await request.json();

    await connectMongoDB();

    const updatedRecord = await form.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedRecord) {
      return NextResponse.json(
        { message: "Record not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Record updated successfully", result: updatedRecord },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error occurred while updating the record" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const match = request.url.match(/\/api\/form\/(\w+)/);
    const id = match && match[1];

    await connectMongoDB();
    const deletedRecord = await form.findByIdAndDelete(id);

    if (!deletedRecord) {
      return NextResponse.json(
        { message: "Record not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Record deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error occurred while deleting the record" },
      { status: 500 }
    );
  }
}
