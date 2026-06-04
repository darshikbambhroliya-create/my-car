import { connectionDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectionDB();
    return NextResponse.json({ message: "Connected to MongoDB" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to connect to MongoDB" }, { status: 500 });
  }
}