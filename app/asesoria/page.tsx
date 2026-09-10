import Link from "next/link";

export default function AsesoriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Asesoría Online
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Entrenamiento personalizado, seguimiento y ajustes según tu progreso.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Un servicio pensado para quienes quieren dejar de improvisar y seguir
            un plan adaptado a su objetivo, experiencia, disponibilidad y evolución.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#incluye"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Ver qué incluye
            </a>

            <Link
              href="/"
              className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-white/30"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

     <section id="incluye" className="px-6 py-24">
  <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Qué incluye
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
        Un plan hecho para vos.
      </h2>

      <p className="mt-6 max-w-xl text-zinc-400">
        La asesoría parte de tu situación real. El objetivo es que entiendas qué
        estás haciendo, progreses con criterio y podamos ajustar el plan cuando
        sea necesario.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {[
        {
          number: "01",
          title: "Evaluación inicial",
          text: "Analizamos tu objetivo, experiencia, disponibilidad, contexto y punto de partida.",
        },
        {
          number: "02",
          title: "Planificación personalizada",
          text: "Rutina adaptada a tus días, con series, repeticiones, RIR, progresión e indicaciones claras.",
        },
        {
          number: "03",
          title: "Seguimiento semanal",
          text: "Revisamos rendimiento, adherencia y evolución para saber qué mantener y qué modificar.",
        },
        {
          number: "04",
          title: "Ajustes y acompañamiento",
          text: "Cambios según tu progreso, resolución de dudas y una guía de alimentación base.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="flex h-64 flex-col rounded-3xl border border-white/10 bg-zinc-950 p-7"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-zinc-600">
            {item.number}
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-24">
  <div className="mx-auto max-w-5xl">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
      Cómo funciona
    </p>

    <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
      Un proceso simple, con seguimiento de verdad.
    </h2>

    <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
      {[
        {
          number: "01",
          title: "Completás tu evaluación",
          text: "Me contás tu objetivo, experiencia, disponibilidad y contexto actual.",
        },
        {
          number: "02",
          title: "Analizo tu situación",
          text: "Reviso toda la información y defino cómo conviene estructurar tu plan.",
        },
        {
          number: "03",
          title: "Recibís tu planificación",
          text: "Te entrego una rutina personalizada con todo lo necesario para empezar.",
        },
        {
          number: "04",
          title: "Seguimos y ajustamos",
          text: "Revisamos tu progreso y modificamos el plan cuando sea necesario.",
        },
      ].map((item, index) => (
        <div key={item.number} className="relative">
          <div className="relative h-10">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-950 text-xs font-semibold text-zinc-400">
              {item.number}
            </div>

            {index < 3 && (
  <div className="absolute left-10 right-[-32px] top-1/2 hidden -translate-y-1/2 md:block">
    <div className="relative h-px w-full bg-white/20">
      <div className="absolute right-3 -top-[4px] h-2 w-2 rotate-45 border-r border-t border-white/40" />
    </div>
  </div>
)}
          </div>

          <div className="mt-7">
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="px-6 py-24">
  <div className="mx-auto max-w-5xl">
    <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 md:grid-cols-[1.2fr_0.8fr]">
      <div className="p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Asesoría mensual
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          Empezá con un plan hecho para vos.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-zinc-400">
          Evaluación inicial, planificación personalizada, seguimiento semanal y
          ajustes según tu evolución durante todo el mes.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {[
            "Rutina personalizada",
            "Seguimiento semanal",
            "Ajustes según progreso",
            "Guía de alimentación base",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-zinc-300"
            >
              <span className="text-zinc-600">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between border-t border-white/10 bg-black p-8 md:border-l md:border-t-0 md:p-12">
        <div>
          <p className="text-sm text-zinc-500">Inversión mensual</p>

          <p className="mt-3 text-5xl font-semibold tracking-tight">
            $60.000
          </p>

          <p className="mt-2 text-sm text-zinc-500">ARS / mes</p>
        </div>

        <div className="mt-12">
          <Link
            href="/asesoria/inicio"
            className="flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Quiero empezar
          </Link>

          <p className="mt-4 text-center text-xs leading-5 text-zinc-600">
            Próximamente este paso incluirá el pago antes de completar tu
            evaluación inicial.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}