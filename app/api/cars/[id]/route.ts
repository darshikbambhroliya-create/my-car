import { NextRequest, NextResponse } from "next/server";
import { connectionDB } from "@/lib/db";
import { Cars } from "@/models/Car";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: NextRequest, { params }: Params) {
  try {
    await connectionDB();

    const { id } = await params;

    console.log("id:", id);

    const car = await Cars.findById(id);

    if (!car) {
      return NextResponse.json(
        {
          success: false,
          error: "Car not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: car,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch car",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    await connectionDB();

    const { id } = await params;
    const body = await request.json();

    const updatedCar = await Cars.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedCar) {
      return NextResponse.json(
        {
          success: false,
          error: "Car not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedCar,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update car",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    await connectionDB();
    const { id } = await params;
    const body = await request.json();
    const updatedCar = await Cars.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json({
      success: true,
      data: updatedCar,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update car",
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    await connectionDB();
    const { id } = await params;

    const deleteCar = await Cars.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      data: deleteCar,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update car",
      },
      { status: 500 }
    );
  }
}
