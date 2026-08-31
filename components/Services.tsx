const services = [
  {
    number: "01",
    eyebrow: "Producto digital",
    title: "Rutinas",
    price: "Desde $35.000",
    description:
      "Una estructura clara para entrenar por tu cuenta, con progresión, intensidad y criterios simples de aplicar.",
    bullets: [
      "3, 4 o 5 días",
      "RIR e intensidad",
      "Progresión",
      "PDF descargable",
    ],
    href: "#rutinas",
    button: "Ver rutinas",
  },
  {
    number: "02",
    eyebrow: "Servicio personalizado",
    title: "Asesoría Online",
    price: "$60.000 / mes",
    description:
      "Para quien quiere que su entrenamiento se adapte a su objetivo, progreso y contexto real.",
    bullets: [
      "Plan personalizado",
      "Seguimiento",
      "Ajustes",
      "Comunicación directa",
    ],
    href: "#asesoria",
    button: "Ver asesoría",
    featured: true,
  },
  {
    number: "03",
    eyebrow: "Entrenamiento 1 a 1",
    title: "Presencial",
    price: "Canning / Ezeiza",
    description:
      "Trabajo presencial con supervisión técnica, planificación y ejecución en vivo.",
    bullets: [
      "Evaluación inicial",
      "Técnica en vivo",
      "Planificación",
      "Gimnasios de la zona",
    ],
    href: "#presencial",
    button: "Consultar",
  },
];

export default function Services() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Cómo trabajar conmigo
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Elegí cuánto acompañamiento necesitás.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-zinc-400 lg:justify-self-end">
            No todos necesitan el mismo nivel de seguimiento. Podés arrancar
            con una rutina, pasar a una asesoría personalizada o entrenar
            conmigo presencialmente.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`relative flex min-h-[570px] flex-col rounded-[2rem] border p-8 md:p-10 ${
                service.featured
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-black text-white transition hover:border-white/25"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`text-xs ${
                    service.featured ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  {service.number}
                </span>

                {service.featured ? (
                  <span className="rounded-full bg-black px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    Servicio principal
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                    {service.eyebrow}
                  </span>
                )}
              </div>

              {service.featured && (
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  {service.eyebrow}
                </p>
              )}

              <div className="mt-16">
                <h3 className="text-4xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p
                  className={`mt-4 text-sm font-semibold uppercase tracking-[0.18em] ${
                    service.featured ? "text-zinc-600" : "text-zinc-500"
                  }`}
                >
                  {service.price}
                </p>

                <p
                  className={`mt-8 leading-7 ${
                    service.featured ? "text-zinc-600" : "text-zinc-400"
                  }`}
                >
                  {service.description}
                </p>

                <ul
                  className={`mt-8 space-y-4 text-sm ${
                    service.featured ? "text-zinc-700" : "text-zinc-400"
                  }`}
                >
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>— {bullet}</li>
                  ))}
                </ul>
              </div>

              <a
                href={service.href}
                className={`mt-auto flex items-center justify-between border-t pt-6 text-sm font-semibold transition ${
                  service.featured
                    ? "border-black/10 text-black hover:text-zinc-600"
                    : "border-white/10 text-white hover:text-zinc-400"
                }`}
              >
                <span>{service.button}</span>
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}