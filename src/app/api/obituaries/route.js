import { connectMongoDB } from "@/lib/mongoose";
import Obituary from "@/models/obituary";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      dateOfDeath,
      dateOfBirth,
      deceasedName,
      description,
      burialDate,
      tributes,
      hymns,
      programs,
      eulogies,
      condolences,
      imageUrls,
      avatarUrl,
    } = await req.json();

    await connectMongoDB();

    if (!dateOfDeath || !dateOfBirth || !deceasedName) {
      return NextResponse.json(
        {
          message:
            "Missing required fields: dateOfDeath, dateOfBirth, deceasedName",
        },
        { status: 400 }
      );
    }

    await Obituary.create({
      dateOfDeath,
      dateOfBirth,
      deceasedName,
      description,
      burialDate,
      tributes,
      hymns,
      condolences,
      programs,
      eulogies,
      imageUrls,
      avatarUrl,
    });

    return NextResponse.json(
      { message: "Obituary created successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error occurred while creating Obituary!" },
      { status: 500 }
    );
  }
}
export async function GET() {
  connectMongoDB();
  return Response.json(await Obituary.find());
}

export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  console.log(id);

  try {
    // Assuming this is a MongoDB connection setup
    connectMongoDB();

    const obituary = await Obituary.findByIdAndDelete(id);

    if (!obituary) {
      return NextResponse.json(
        { message: "Obituary not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Obituary deleted successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to delete Obituary." },
      { status: 500 }
    );
  }
}
