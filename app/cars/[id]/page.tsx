"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();

  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function FetchById() {
      try {
        setLoading(true);

        const res = await fetch(`/api/cars/${id}`);
        const data = await res.json();

        setCar(data.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    }

    FetchById();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-black text-white px-6 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        {/* IMAGE SECTION */}
        {car?.image && (
          <div className="relative overflow-hidden">
            <img
              src={car.image}
              alt={car.model}
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-md">
                {car.category || "Premium Vehicle"}
              </span>

              <h1 className="mt-4 text-5xl font-bold">{car?.model}</h1>
            </div>
          </div>
        )}

        {/* CONTENT */}
        <div className="p-8 lg:p-10">
          {loading && (
            <div className="mb-6 text-center">
              <p className="animate-pulse text-lg text-blue-400">
                Loading vehicle details...
              </p>
            </div>
          )}

          {car && (
            <>
              {/* STATS */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/50">Year</p>
                  <h3 className="mt-2 text-3xl font-bold">{car.year}</h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/50">Horsepower</p>
                  <h3 className="mt-2 text-3xl font-bold text-blue-400">
                    {car.horsepower}
                  </h3>
                  <p className="text-sm text-white/50">HP</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/50">Category</p>
                  <h3 className="mt-2 text-xl font-semibold text-cyan-400">
                    {car.category || "N/A"}
                  </h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/50">Vehicle ID</p>
                  <h3 className="mt-2 font-mono text-lg">
                    {car._id?.slice(-8)}
                  </h3>
                </div>
              </div>

              {/* PRICE CARD */}
              <div className="mt-8 rounded-[28px] border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 p-8 text-center">
                <p className="text-sm uppercase tracking-widest text-white/60">
                  Vehicle Price
                </p>

                <h2 className="mt-3 text-5xl font-extrabold text-blue-400">
                  ${Number(car.price).toLocaleString()}
                </h2>
              </div>

              {/* DETAILS */}
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h2 className="mb-6 text-2xl font-bold">Specifications</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Model</span>
                      <span>{car.model}</span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Year</span>
                      <span>{car.year}</span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Horsepower</span>
                      <span>{car.horsepower} HP</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-white/60">Category</span>
                      <span>{car.category || "N/A"}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h2 className="mb-6 text-2xl font-bold">
                    Performance Overview
                  </h2>

                  <div className="space-y-4 text-white/80">
                    <p>
                      🚀 Performance Level:
                      <span className="ml-2 font-semibold text-blue-400">
                        {car.horsepower > 500
                          ? "Supercar"
                          : car.horsepower > 300
                          ? "Sports Car"
                          : "Standard Vehicle"}
                      </span>
                    </p>

                    <p>
                      🏁 Vehicle Type:
                      <span className="ml-2 font-semibold text-cyan-400">
                        {car.category === "SUV"
                          ? "Family SUV"
                          : car.category === "Coupe"
                          ? "Sport Coupe"
                          : car.category === "Convertible"
                          ? "Luxury Convertible"
                          : "Passenger Vehicle"}
                      </span>
                    </p>

                    <p>
                      💰 Market Position:
                      <span className="ml-2 font-semibold text-green-400">
                        {car.price > 100000
                          ? "Luxury Segment"
                          : "Mainstream Segment"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="mt-10 flex justify-center">
                <Link
                  href="/cars"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium transition hover:bg-white/10">
                  ← Back to Garage
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
