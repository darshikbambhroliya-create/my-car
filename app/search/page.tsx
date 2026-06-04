"use client";

import Link from "next/link";
import React from "react";

type Car = {
  _id: string;
  model: string;
  year: number;
  horsepower: number;
  price: number;
  image: string;
};

function Page() {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<Car[]>([]);
  const [loading, setLoading] = React.useState(false);

  async function searchCars() {
    if (!search.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(`/api/cars/search/${search}`);
      const data = await res.json();

      setResults(data?.data ?? []);
    } catch (error) {
      console.log("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-black text-white">
      {/* HEADER */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
              Search Cars
            </h1>

            <p className="mt-2 text-white/50">
              Find your dream vehicle instantly
            </p>
          </div>

          <Link
            href="/cars"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10">
            Home
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* SEARCH BAR */}
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search BMW, Audi, Tesla..."
              className="h-14 flex-1 rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-white/40 outline-none transition focus:border-blue-500"
            />

            <button
              onClick={searchCars}
              className="h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 font-semibold transition hover:scale-[1.02]">
              Search
            </button>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center py-12">
            <p className="animate-pulse text-xl text-blue-400">
              Searching cars...
            </p>
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && results.length === 0 && search && (
          <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center backdrop-blur-xl">
            <div className="text-6xl">🚫</div>
            <h2 className="mt-4 text-2xl font-bold">No Cars Found</h2>
            <p className="mt-2 text-white/50">
              Try searching with a different keyword
            </p>
          </div>
        )}

        {/* RESULTS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {results.map((car) => (
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
                <h2 className="text-2xl font-bold">{car.model}</h2>

                <div className="mt-4 space-y-2 text-white/70">
                  <p>📅 Year: {car.year}</p>
                  <p>⚡ Horsepower: {car.horsepower} HP</p>
                </div>

                <p className="mt-5 text-3xl font-bold text-green-400">
                  ${Number(car.price).toLocaleString()}
                </p>

                <Link
                  href={`/cars/${car._id}`}
                  className="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-700">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
