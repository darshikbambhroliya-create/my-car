import { connectionDB } from "@/lib/db";
import { Cars } from "@/models/Car";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectionDB();
    const cars = await Cars.find();
    return NextResponse.json({ success: true, count: cars.length, data: cars });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch cars" },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const { model, year, horsepower, price, image, category } =
      await request.json();
    await connectionDB();
    const newCar = await Cars.create({
      model,
      year,
      horsepower,
      price,
      image,
      category,
    });
    return NextResponse.json({ success: true, data: newCar }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to create car" },
      { status: 500 }
    );
  }
}
