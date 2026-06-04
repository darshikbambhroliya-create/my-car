"use server";

import { connectionDB } from "@/lib/db";
import { Cars } from "@/models/Car";
import { revalidatePath } from "next/cache";

export async function addToFavorite(id: string, favorite: boolean) {
  await connectionDB();

  await Cars.findByIdAndUpdate(id, {
    favorite: !favorite,
  });

  revalidatePath("/cars");
}
