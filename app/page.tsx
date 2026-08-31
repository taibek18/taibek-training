import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const story = [
  {
    number: "01",
    title: "Volver a empezar",
    text: "Llegó un momento en el que no estaba conforme con mi vida ni con quién era.",
  },
  {
    number: "02",
    title: "Volver al gimnasio",
    text: "En noviembre de 2024 decidí volver a entrenar después de años sin sostener ningún deporte.",
  },
  {
    number: "03",
    title: "El golpe de realidad",
    text: "Quise progresar demasiado rápido. Una lesión de hombro me obligó a frenar.",
  },
  {
    number: "04",
    title: "Aprender de verdad",
    text: "Empecé a estudiar técnica, ejecución, programación y cómo responde el cuerpo al entrenamiento.",
  },
  {
    number: "05",
    title: "Empezar a enseñar",
    text: "Otros empezaron a acercarse a preguntarme sobre ejercicios y técnica. Ahí apareció el interés por enseñar.",
  },
  {
    number: "06",
    title: "Hoy",
    text: "Trabajo como entrenador y uso todo ese aprendizaje para ayudar a otros a entrenar con criterio.",
  },
];

const routines = [
  {
    days: "3 días",
    price: "$35.000",
    description: "Para progresar con una frecuencia eficiente y fácil de sostener.",
  },
  {
    days: "4 días",
    price: "$40.000",
    description:
      "Mayor frecuencia y distribución del volumen semanal.",
    featured: true,
  },
  {
    days: "5 días",
    price: "$45.000",
    description:
      "Para quienes disfrutan entrenar más días y pueden sostener la frecuencia.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl py-24">
          <div className="max-w-5xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              Taibek Training
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl">
              Entrená con un plan.
              <span className="block text-zinc-500">
                Progresá con intención.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
              Entrenamiento para personas que quieren dejar de improvisar en el
              gimnasio y empezar a entender lo que están haciendo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#rutinas"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Ver rutinas
              </a>

              <a
                href="#asesoria"
                className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold transition hover:border-white"
              >
                Asesoría Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section
        id="historia"
        className="border-t border-white/10 bg-black px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Mi historia
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                No empecé siendo entrenador.
                <span className="block text-zinc-600">
                  Empecé volviendo al gimnasio.
                </span>
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {story.map((item) => (
                <div key={item.number} className="bg-zinc-950 p-8">
                  <span className="text-xs text-zinc-600">{item.number}</span>

                  <h3 className="mt-10 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="rutinas"
        className="border-t border-white/10 bg-zinc-950 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Rutinas
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Entrená por tu cuenta.
              <span className="block text-zinc-600">Pero con estructura.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-zinc-400">
              Elegí según la cantidad de días que realmente podés sostener.
              Entrenar más días no significa necesariamente progresar más.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {routines.map((routine) => (
              <article
                key={routine.days}
                className={`relative flex min-h-[470px] flex-col rounded-3xl border p-8 ${
                  routine.featured
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-black"
                }`}
              >
                {routine.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Más elegido
                  </span>
                )}

                <p
                  className={`text-sm uppercase tracking-[0.25em] ${
                    routine.featured ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  Rutina
                </p>

                <h3 className="mt-12 text-4xl font-semibold">
                  {routine.days}
                </h3>

                <p className="mt-4 text-3xl font-semibold">{routine.price}</p>

                <p
                  className={`mt-8 leading-7 ${
                    routine.featured ? "text-zinc-600" : "text-zinc-400"
                  }`}
                >
                  {routine.description}
                </p>

                <ul
                  className={`mt-8 space-y-3 text-sm ${
                    routine.featured ? "text-zinc-700" : "text-zinc-400"
                  }`}
                >
                  <li>✓ Ejercicios, series y repeticiones</li>
                  <li>✓ RIR e intensidad</li>
                  <li>✓ Guía de progresión</li>
                  <li>✓ Tips de alimentación</li>
                  <li>✓ PDF descargable</li>
                </ul>

                <button
                  className={`mt-auto rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                    routine.featured
                      ? "bg-black text-white hover:bg-zinc-800"
                      : "bg-white text-black hover:bg-zinc-200"
                  }`}
                >
                  Comprar
                </button>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-zinc-600">
            Las rutinas no incluyen seguimiento personalizado.
          </p>
        </div>
      </section>

      <section
        id="asesoria"
        className="border-t border-white/10 bg-black px-6 py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Asesoría Online
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              ¿Querés que además adapte y supervise tu entrenamiento?
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              La asesoría es para quien busca un entrenamiento completamente
              personalizado, seguimiento y ajustes según su evolución.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Asesoría personalizada
            </p>

            <p className="mt-8 text-6xl font-semibold">$60.000</p>

            <p className="mt-2 text-zinc-500">por mes</p>

            <ul className="mt-10 space-y-4 text-zinc-300">
              <li>✓ Programa personalizado</li>
              <li>✓ Seguimiento</li>
              <li>✓ Ajustes según progreso</li>
              <li>✓ Correcciones técnicas</li>
              <li>✓ Comunicación directa</li>
            </ul>

            <button className="mt-12 w-full rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200">
              Quiero mi asesoría
            </button>
          </div>
        </div>
      </section>

      <section
        id="presencial"
        className="border-t border-white/10 bg-zinc-950 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Entrenamiento presencial
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Entrenamiento 1 a 1.
              <span className="block text-zinc-600">Canning / Ezeiza.</span>
            </h2>

            <div>
              <p className="max-w-xl text-lg leading-8 text-zinc-400">
                Entrenamiento presencial en gimnasios de la zona, adaptable a
                ubicación y disponibilidad.
              </p>

              <button className="mt-8 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition hover:border-white">
                Consultar disponibilidad
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}