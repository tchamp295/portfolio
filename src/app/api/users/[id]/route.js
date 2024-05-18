import { connectMongoDB } from "@/lib/mongoose";
import User from "@/models/user";


import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newEmail: email,
    newPassword: password,
  } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, {
    name,
    email,
    password,
  });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  console.log(user);
  return NextResponse.json({ user }, { status: 200 });
}
