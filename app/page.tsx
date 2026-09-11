import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Routines from "@/components/Routines";





export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <Hero />

      <Services />

     <Story />
      <Routines />

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

            <a
  href="/asesoria"
  className="mt-12 flex w-full items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
>
  Quiero mi asesoría
</a>
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
  href="https://wa.me/5491131872995?text=Hola%20Taibek%2C%20quer%C3%ADa%20consultarte%20por%20disponibilidad%20para%20entrenamiento%20presencial."
  target="_blank"
  rel="noopener noreferrer"
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
  sizes="(max-width: 1024px) 100vw, 50vw"
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