export default function FinalCTA() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white px-8 py-16 text-black md:px-14 md:py-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-black/[0.04] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Empezar
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                Dejá de improvisar.
                <span className="block text-zinc-500">
                  Elegí cómo querés entrenar.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                Podés arrancar con una rutina, pasar a una asesoría personalizada
                o consultar por entrenamiento presencial.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="#rutinas"
                className="w-full rounded-full bg-black px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 lg:w-auto"
              >
                Ver rutinas
              </a>

              <a
                href="#asesoria"
                className="w-full rounded-full border border-black/15 px-8 py-4 text-center text-sm font-semibold text-black transition hover:border-black/40 lg:w-auto"
              >
                Quiero asesoría
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}