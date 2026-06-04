import { NextRequest, NextResponse } from "next/server";
import { connectionDB } from "@/lib/db";
import { Cars } from "@/models/Car";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ model: string }> }
) {
  try {
    await connectionDB();

    const { model } = await context.params;

    const search = decodeURIComponent(model);

    const cars = await Cars.find({
      model: {
        $regex: search,
        $options: "i",
      },
    });
    if (cars.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "No cars found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch cars" },
      { status: 500 }
    );
  }
}
