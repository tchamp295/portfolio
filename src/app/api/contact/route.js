import { connectMongoDB } from "@/lib/mongoose";

import { NextResponse } from "next/server";

import Contact from "@/models/contact";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    //  console.log({name, email, message});

    await connectMongoDB();
    await Contact.create({ name, email, message });
    return NextResponse.json(
      { message: "Message sent successfully !" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to send message ! " },
      { status: 500 }
    );
  }
}
