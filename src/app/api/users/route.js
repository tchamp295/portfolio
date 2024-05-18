import { NextResponse } from "next/server";
import { parse } from "url";


import { connectMongoDB } from "@/lib/mongoose";
import User from "@/models/user";

export async function GET() {
   connectMongoDB();
  return Response.json(await User.find());
}
export async function DELETE(req) {
  const { query } = parse(req.url, true);
  const id = query.id;
  console.log(id);

  try {
    // Assuming this is a MongoDB connection setup
   connectMongoDB();

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json({ message: "user not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to delete user." },
      { status: 500 }
    );
  }
}
