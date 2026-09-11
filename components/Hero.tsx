import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[120px]" />
        <div className="absolute right-[-120px] top-[18%] h-[520px] w-[520px] rounded-full bg-zinc-500/[0.08] blur-[140px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-zinc-600" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              Taibek Training
            </p>
          </div>

          <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.3rem)] font-semibold leading-[0.86] tracking-[-0.055em]">
            Entrená
            <br />
            con un plan.
            <span className="mt-3 block text-zinc-600">
              Progresá con
              <br />
              intención.
            </span>
          </h1>

          <div className="mt-10 max-w-xl border-l border-zinc-700 pl-6">
            <p className="text-base leading-7 text-zinc-400 md:text-lg">
              Entrenamiento para personas que quieren dejar de improvisar en el
              gimnasio y empezar a entender por qué hacen lo que hacen.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#rutinas"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Ver rutinas
            </a>

            <a
              href="#asesoria"
              className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-white/50"
            >
              Asesoría Online
            </a>
          </div>

          <div className="mt-16 flex gap-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-zinc-600">
            <span>Rutinas</span>
            <span>Asesoría</span>
            <span>Presencial</span>
          </div>
        </div>

        <div className="relative h-[680px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 lg:h-[760px]">
          <Image
  src="/images/hero-legs.jpg"
  alt="Taibek entrenando"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover object-center"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                  Filosofía
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-200">
                  Entrenar fuerte.
                  <br />
                  Entrenar con criterio.
                </p>
              </div>

              <p className="text-right text-[10px] uppercase leading-5 tracking-[0.25em] text-zinc-500">
                Canning
                <br />
                Ezeiza
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}