export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Taibek Training
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Entrená con un plan.
            <br />
            Progresá con intención.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Entrenamiento para personas que quieren dejar de improvisar en el
            gimnasio y empezar a entender lo que están haciendo.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#rutinas"
              className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              Ver rutinas
            </a>

            <a
              href="#asesoria"
              className="rounded-full border border-zinc-700 px-7 py-3 font-semibold text-white transition hover:border-white"
            >
              Asesoría Online
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}