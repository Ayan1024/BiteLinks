// app/api/register/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  const { email, password } = await req.json();
  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword });

  return NextResponse.json({ message: "User registered", userId: newUser._id });
}
