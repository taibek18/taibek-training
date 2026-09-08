import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import BuyButton from "@/components/BuyButton";

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
    productId: "3-dias",
    days: "3 días",
    price: "$35.000",
    description:
      "Para progresar con una frecuencia eficiente y fácil de sostener.",
   featured: false,
      
  },
  {
    productId: "4-dias",
    days: "4 días",
    price: "$40.000",
    description:
      "Mayor frecuencia y distribución del volumen semanal.",
    featured: true,
  },
  {
    productId: "5-dias",
    days: "5 días",
    price: "$45.000",
    description:
      "Para quienes disfrutan entrenar más días y pueden sostener la frecuencia.",
      featured: false,
  },
] as const;

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <Hero />

      <Services />

     <Story />
      <section
  id="rutinas"
  className="border-t border-white/10 bg-black px-6 py-28"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Rutinas
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
          Entrená por tu cuenta.
          <span className="block text-zinc-600">Pero con estructura.</span>
        </h2>
      </div>

      <div className="lg:justify-self-end">
        <p className="max-w-xl text-lg leading-8 text-zinc-400">
          Elegí según la cantidad de días que realmente podés sostener. No hay
          una frecuencia “mágica”: lo importante es que puedas progresar y
          mantenerla.
        </p>
      </div>
    </div>

    <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
  {routines.map((routine, index) => (
    <article
      key={routine.days}
      className={`relative flex min-h-[640px] flex-col rounded-[2rem] border p-8 md:p-10 ${
        routine.featured
          ? "border-white bg-white text-black shadow-[0_0_50px_rgba(255,255,255,0.08)]"
          : "border-white/10 bg-zinc-950 text-white transition duration-300 hover:border-white/25"
      }`}
    >
      {/* Encabezado */}
      <div className="flex min-h-8 items-center justify-between gap-4">
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.25em] ${
            routine.featured ? "text-zinc-500" : "text-zinc-600"
          }`}
        >
          Opción 0{index + 1}
        </span>

        {routine.featured && (
          <span className="shrink-0 rounded-full bg-black px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
            Más elegido
          </span>
        )}
      </div>

      {/* Producto */}
      <div className="mt-16">
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${
            routine.featured ? "text-zinc-500" : "text-zinc-600"
          }`}
        >
          Rutina
        </p>

        <h3 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
          {routine.days}
        </h3>

        <p className="mt-5 text-4xl font-semibold tracking-tight">
          {routine.price}
        </p>

        <p
          className={`mt-8 min-h-[84px] max-w-sm leading-7 ${
            routine.featured ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          {routine.description}
        </p>
      </div>

      {/* Incluye */}
      <div className="mt-10">
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${
            routine.featured ? "text-zinc-500" : "text-zinc-600"
          }`}
        >
          Incluye
        </p>

        <ul
          className={`mt-6 space-y-4 text-sm ${
            routine.featured ? "text-zinc-700" : "text-zinc-400"
          }`}
        >
          <li className="flex items-start gap-3">
            <span>—</span>
            <span>Ejercicios, series y repeticiones</span>
          </li>

          <li className="flex items-start gap-3">
            <span>—</span>
            <span>RIR e intensidad</span>
          </li>

          <li className="flex items-start gap-3">
            <span>—</span>
            <span>Guía de progresión</span>
          </li>

          <li className="flex items-start gap-3">
            <span>—</span>
            <span>Tips básicos de alimentación</span>
          </li>

          <li className="flex items-start gap-3">
            <span>—</span>
            <span>PDF descargable</span>
          </li>
        </ul>
      </div>

     {/* Botón */}
<div className="mt-auto pt-12">
  <BuyButton
    productId={routine.productId}
    featured={routine.featured}
  />
</div>
    </article>
  ))}
</div>

    <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
      <p>Las rutinas no incluyen seguimiento personalizado.</p>

      <a
        href="#asesoria"
        className="font-semibold text-zinc-300 transition hover:text-white"
      >
        ¿Querés seguimiento? Ver Asesoría Online →
      </a>
    </div>
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
    <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Entrenamiento presencial
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
          Entrenamiento 1 a 1.
          <span className="block text-zinc-600">
            Canning / Ezeiza.
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
          Sesiones presenciales para quienes quieren entrenar con supervisión,
          mejorar ejecución y tener una planificación adaptada a su objetivo.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black p-6">
            <p className="text-sm font-semibold">Supervisión técnica</p>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Correcciones en vivo durante todo el entrenamiento.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-6">
            <p className="text-sm font-semibold">Plan personalizado</p>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Adaptado a tu nivel, objetivo y disponibilidad.
            </p>
          </div>
        </div>

        <a
          href="#contacto"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Consultar disponibilidad
        </a>
      </div>

      <div className="relative h-[650px] overflow-hidden rounded-[2rem] border border-white/10 bg-black">
        <Image
          src="/images/hero-legs.jpg"
          alt="Entrenamiento presencial Taibek Training"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="border-t border-white/10 pt-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-400">
              Zona
            </p>
            <p className="mt-2 text-lg font-semibold">
              Canning · Ezeiza
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <FAQ />

<FinalCTA />

<Footer />
    </main>
  );
}