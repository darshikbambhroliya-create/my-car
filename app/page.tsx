import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Premium Cars Collection
          </span>

          <h1 className="mt-8 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-7xl font-extrabold text-transparent">
            Cars Garage
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/60">
            Discover, manage, and explore iconic Cars vehicles. From legendary
            M-Series performance machines to cutting-edge Cars electric models.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/cars"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold shadow-lg transition hover:scale-105">
              🚗 Explore Cars
            </Link>

            <Link
              href="/addCar"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/10">
              ➕ Add Car
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold">Features</h2>
          <p className="mt-3 text-white/50">
            Everything you need to manage your garage
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/30">
            <div className="mb-4 text-5xl">🚘</div>

            <h3 className="mb-3 text-2xl font-bold">Browse Cars</h3>

            <p className="text-white/60">
              Explore Cars M Series, X Series SUVs, luxury sedans, and electric
              i-Series models.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/30">
            <div className="mb-4 text-5xl">🔍</div>

            <h3 className="mb-3 text-2xl font-bold">Search Cars</h3>

            <p className="text-white/60">
              Instantly find vehicles by model, category, or performance.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/30">
            <div className="mb-4 text-5xl">⚙️</div>

            <h3 className="mb-3 text-2xl font-bold">Manage Collection</h3>

            <p className="text-white/60">
              Add, edit, delete, and organize your premium Cars collection.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold text-blue-400">50+</h3>
              <p className="mt-2 text-white/50">Car Models</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">M</h3>
              <p className="mt-2 text-white/50">Performance Series</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-400">X</h3>
              <p className="mt-2 text-white/50">SUV Series</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">i</h3>
              <p className="mt-2 text-white/50">Electric Series</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold">Ready to Start?</h2>

          <p className="mt-3 text-white/50">
            Manage your garage with powerful tools.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/cars"
              className="rounded-2xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
              Browse Cars
            </Link>

            <Link
              href="/favorite"
              className="rounded-2xl bg-yellow-500 px-6 py-3 font-medium text-black transition hover:bg-yellow-400">
              Favorites
            </Link>

            <Link
              href="/search"
              className="rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400">
              Search
            </Link>

            <Link
              href="/addCar"
              className="rounded-2xl bg-green-600 px-6 py-3 font-medium transition hover:bg-green-700">
              Add Car
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-white/40">
        Cars Garage • Built with Next.js & MongoDB
      </footer>
    </main>
  );
}
