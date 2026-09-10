import Link from "next/link";

export default function AsesoriaInicioPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Asesoría Online
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Empecemos por entender dónde estás y hacia dónde querés ir.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Esta evaluación inicial me permite conocer tu contexto, tu experiencia,
          tus objetivos y las condiciones reales con las que vamos a trabajar.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-950 p-8 md:p-10">
          <p className="text-sm font-semibold text-white">
            Antes de empezar
          </p>

          <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-400">
            <p>
              Completá la información con la mayor precisión posible. No hace falta
              que tengas todo perfecto: lo importante es que refleje tu situación real.
            </p>

            <p>
              Si tenés molestias, lesiones o limitaciones, indicalas en el formulario
              para poder adaptar la planificación.
            </p>

            <p>
              La información se usa únicamente para preparar tu asesoría y hacer el
              seguimiento correspondiente.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/asesoria/inicio/formulario"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Completar evaluación
          </Link>

          <Link
            href="/asesoria"
            className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-white/30"
          >
            Volver a la asesoría
          </Link>
        </div>
      </div>
    </main>
  );
}