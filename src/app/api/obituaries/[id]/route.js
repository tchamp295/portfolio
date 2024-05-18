import { connectMongoDB } from "@/lib/mongoose";
import Obituary from "@/models/obituary";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  console.log(id);
  try {
    const updatedData = await request.json();

    await connectMongoDB();

    // Find the existing obituary by ID and update its fields
    const updatedObituary = await Obituary.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the modified document rather than the original
    });

    if (!updatedObituary) {
      return NextResponse.json(
        { message: "Obituary not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Obituary updated successfully", updatedObituary },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error occurred while updating Obituary" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();
  const obituary = await Obituary.findOne({ _id: id });
  // console.log(obituary);

  if (!obituary) {
    return NextResponse.json({ success: false }, { status: 404 });
  }

  return NextResponse.json(obituary, { status: 200 });
}
