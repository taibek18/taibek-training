const faqs = [
  {
    question: "¿Las rutinas incluyen seguimiento?",
    answer:
      "No. Las rutinas son un producto digital pensado para que entrenes por tu cuenta. Incluyen ejercicios, series, repeticiones, intensidad, progresión y una guía básica de alimentación.",
  },
  {
    question: "¿Qué diferencia hay entre una rutina y la asesoría online?",
    answer:
      "La rutina es un plan cerrado. La asesoría online incluye planificación personalizada, seguimiento, correcciones y ajustes según tu progreso.",
  },
  {
    question: "¿Cómo recibo la rutina después de comprar?",
    answer:
      "La vas a recibir en formato digital. Estamos preparando la entrega automática para que puedas acceder al PDF apenas se confirme el pago.",
  },
  {
    question: "¿Qué rutina debería elegir?",
    answer:
      "Elegí según la cantidad de días que realmente puedas sostener. Entrenar más días no garantiza mejores resultados si no podés mantener la frecuencia.",
  },
  {
    question: "¿La asesoría online sirve si recién empiezo?",
    answer:
      "Sí. Justamente al ser personalizada, se adapta a tu experiencia, objetivo, disponibilidad y nivel actual.",
  },
  {
    question: "¿Dónde das clases presenciales?",
    answer:
      "Principalmente en Canning y Ezeiza, dependiendo del gimnasio, disponibilidad y posibilidades de ingreso.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-white/10 bg-black px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Preguntas frecuentes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Lo importante,
              <span className="block text-zinc-600">antes de arrancar.</span>
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                  <span>{faq.question}</span>
                  <span className="text-zinc-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl pr-10 leading-7 text-zinc-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}