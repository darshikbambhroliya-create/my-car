"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type Car = {
  _id: string;
  model: string;
  year: string;
  horsepower: string;
  price: string;
  image: string;
  category: string;
};

export default function EditPage() {
  const { id } = useParams();

  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [horsepower, setHorsepower] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchCar() {
      const res = await fetch(`/api/cars/${id}`);
      const data = await res.json();

      const car: Car = data.data;

      setModel(car.model);
      setYear(car.year);
      setHorsepower(car.horsepower);
      setPrice(car.price);
      setImage(car.image);
      setCategory(car.category);
    }

    if (id) fetchCar();
  }, [id]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    await fetch(`/api/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        year,
        horsepower,
        price,
        image,
      }),
    });

    alert("Car updated successfully 🚗");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-black px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* HEADER */}
          <div className="border-b border-white/10 p-8 text-center">
            <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
              Edit Vehicle
            </h1>

            <p className="mt-2 text-white/50">Update your car information</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleUpdate} className="space-y-6 p-8">
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Car Model"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
            />

            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Manufacturing Year"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
            />

            <input
              type="number"
              value={horsepower}
              onChange={(e) => setHorsepower(e.target.value)}
              placeholder="Horsepower"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
            />

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
            />

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-blue-500">
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Roadster">Roadster</option>
              <option value="Electric">Electric</option>
              <option value="Supercar">Supercar</option>
            </select>

            <button
              type="submit"
              className="h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold transition hover:scale-[1.02]">
              Update Car
            </button>

            <Link
              href="/addCar"
              className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
              ← Back to Dashboard
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
