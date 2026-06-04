"use client";

import { addToFavorite } from "@/action/car-action";
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

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("/api/cars");
        const data = await res.json();
        setCars(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  async function toggleFavorite(car: Car) {
    setCars((prev) =>
      prev.map((c) => (c._id === car._id ? { ...c, favorite: !c.favorite } : c))
    );

    try {
      await addToFavorite(car._id, car.favorite);
    } catch (error) {
      console.error(error);

      setCars((prev) =>
        prev.map((c) =>
          c._id === car._id ? { ...c, favorite: car.favorite } : c
        )
      );
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="animate-pulse text-2xl font-semibold">
          Loading Cars...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white">
      {/* HEADER */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
            My Garage
          </h1>

          <p className="mt-2 text-white/50">
            Manage your premium car collection
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/addCar"
            className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-3 font-medium shadow-lg transition-all hover:scale-105">
            ➕ Add Car
          </Link>

          <Link
            href="/favorite"
            className="rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 font-medium text-black shadow-lg transition-all hover:scale-105">
            ⭐ Favorites
          </Link>

          <Link
            href="/search"
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-medium shadow-lg transition-all hover:scale-105">
            🔍 Search
          </Link>
        </div>
      </div>

      {/* EMPTY STATE */}
      {cars.length === 0 && (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md">
          <h2 className="text-2xl font-semibold">No Cars Found</h2>
          <p className="mt-2 text-white/50">
            Add some cars to your collection.
          </p>
        </div>
      )}

      {/* CAR GRID */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car._id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={car.image}
                alt={car.model}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{car.model}</h2>

                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                  {car.year}
                </span>
              </div>

              <p className="mt-3 text-white/60">⚡ {car.horsepower} HP</p>

              <p className="mt-4 text-2xl font-bold text-green-400">
                ${Number(car.price).toLocaleString()}
              </p>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => toggleFavorite(car)}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition ${
                    car.favorite
                      ? "bg-yellow-500 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}>
                  {car.favorite ? "★ Favorited" : "☆ Favorite"}
                </button>

                <Link
                  href={`/cars/${car._id}`}
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium transition hover:bg-blue-700">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
