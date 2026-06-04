"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type Car = {
  _id: string;
  model: string;
  year: number;
  horsepower: number;
  price: number;
  favorite: boolean;
  image: string;
};

export default function CarsClient() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    async function fetchCars() {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data.data);
      setLoading(false);
    }

    fetchCars();
  }, []);

  const displayedCars = showFavorites
    ? cars.filter((car) => car.favorite)
    : cars;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-black text-white">
      {/* HEADER */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
            Car Collection
          </h1>

          <p className="mt-2 text-white/50">
            Browse and manage your favorite vehicles
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* FILTER BUTTONS */}
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <Link
            href="/cars"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10">
            Home
          </Link>

          <button
            onClick={() => setShowFavorites(false)}
            className={`rounded-xl px-5 py-3 font-medium transition ${
              !showFavorites
                ? "bg-blue-600 text-white"
                : "border border-white/10 bg-white/5 hover:bg-white/10"
            }`}>
            🚗 All Cars
          </button>

          <button
            onClick={() => setShowFavorites(true)}
            className={`rounded-xl px-5 py-3 font-medium transition ${
              showFavorites
                ? "bg-red-600 text-white"
                : "border border-white/10 bg-white/5 hover:bg-white/10"
            }`}>
            ⭐ Favorites
          </button>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <p className="animate-pulse text-xl text-blue-400">
              Loading cars...
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedCars.map((car) => (
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
                    <h2 className="text-2xl font-bold">{car.model}</h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        car.favorite
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-zinc-800 text-zinc-400"
                      }`}>
                      {car.favorite ? "Favorite" : "Standard"}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-white/70">
                    <p>📅 Year: {car.year}</p>
                    <p>⚡ Power: {car.horsepower} HP</p>
                  </div>

                  <p className="mt-5 text-3xl font-bold text-green-400">
                    ${Number(car.price).toLocaleString()}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className={`font-medium ${
                        car.favorite ? "text-yellow-400" : "text-zinc-500"
                      }`}>
                      {car.favorite ? "🌟 Favorite Vehicle" : "☆ Not Favorite"}
                    </span>

                    <Link
                      href={`/cars/${car._id}`}
                      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-700">
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
