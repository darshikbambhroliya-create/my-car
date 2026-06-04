"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function page() {
  const [cars, setCars] = useState<any[]>([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [horsepower, setHorsepower] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    async function fetchCars() {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data.data);
    }
    fetchCars();
  }, []);
  async function addCar(e: React.FormEvent) {
    e.preventDefault();
    const newCar = {
      model,
      year,
      horsepower,
      price,
      image,
    };
    const res = await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    });
    const data = await res.json();
    //@ts-ignore
    setCars((prev) => [...prev, data.data]);
    setModel("");
    setYear("");
    setHorsepower("");
    setPrice("");
    setImage("");
  }
  async function deleteCar(id: string) {
    await fetch(`/api/cars/${id}`, {
      method: "DELETE",
    });
    setCars((prev: any) => prev.filter((car: any) => car._id !== id));
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-black text-white">
      {/* HEADER */}
      <div className="sticky top-0 z-20 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
              Car Admin
            </h1>
            <p className="mt-1 text-sm text-white/50">
              Manage your luxury collection
            </p>
          </div>

          <Link
            href="/cars"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10">
            Home
          </Link>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={addCar}
        className="mx-auto mt-10 mb-12 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-blue-400">
          Add New Car
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Car Model"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
          />

          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
          />

          <input
            type="number"
            value={horsepower}
            onChange={(e) => setHorsepower(e.target.value)}
            placeholder="Horsepower"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
          />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-6 h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-blue-500">
          <option value="">Select Category</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
          <option value="Convertible">Convertible</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Roadster">Roadster</option>
        </select>

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="mt-6 h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
        />

        <button
          type="submit"
          className="mt-6 h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold transition hover:scale-[1.02]">
          Add Car
        </button>
      </form>

      {/* CAR LIST */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car._id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="overflow-hidden">
              <img
                src={car.image}
                alt={car.model}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{car.model}</h2>

                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                  {car.category || "Car"}
                </span>
              </div>

              <p className="mt-2 text-white/60">
                {car.year} • {car.horsepower} HP
              </p>

              <p className="mt-4 text-2xl font-bold text-green-400">
                ${Number(car.price).toLocaleString()}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <Link
                  href={`/cars/${car._id}/edit`}
                  className="rounded-lg bg-blue-500/10 px-4 py-2 text-blue-400 transition hover:bg-blue-500/20">
                  Edit
                </Link>

                <button
                  onClick={() => deleteCar(car._id)}
                  className="rounded-lg bg-red-500/10 px-4 py-2 text-red-400 transition hover:bg-red-500/20">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
