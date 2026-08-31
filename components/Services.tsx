const services = [
  {
    number: "01",
    title: "Rutinas",
    price: "Desde $35.000",
    description:
      "Un plan estructurado para entrenar por tu cuenta y dejar de improvisar.",
    href: "#rutinas",
    button: "Ver rutinas",
  },
  {
    number: "02",
    title: "Asesoría Online",
    price: "$60.000",
    description:
      "Entrenamiento personalizado, seguimiento y ajustes según tu progreso.",
    href: "#asesoria",
    button: "Ver asesoría",
  },
  {
    number: "03",
    title: "Presencial",
    price: "Canning / Ezeiza",
    description:
      "Entrenamiento 1 a 1 con supervisión técnica y planificación personalizada.",
    href: "#presencial",
    button: "Consultar",
  },
];

export default function Services() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Cómo trabajar conmigo
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Elegí el nivel de acompañamiento que necesitás.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[420px] flex-col bg-black p-8 md:p-10"
            >
              <span className="text-sm text-zinc-600">{service.number}</span>

              <div className="mt-16">
                <h3 className="text-3xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                  {service.price}
                </p>

                <p className="mt-6 max-w-sm leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>

              <a
                href={service.href}
                className="mt-auto border-t border-white/10 pt-6 text-sm font-semibold text-white transition hover:text-zinc-400"
              >
                {service.button} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}