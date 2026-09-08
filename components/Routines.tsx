"use client";

import { useState } from "react";
import BuyButton from "@/components/BuyButton";

const routines = {
  hombres: [
    {
      productId: "hombre-3-dias",
      days: "3 días",
      price: "$35.000",
      description:
        "Frecuencia eficiente con foco en torso, fuerza general y una base sólida de piernas.",
      featured: false,
    },
    {
      productId: "hombre-4-dias",
      days: "4 días",
      price: "$40.000",
      description:
        "Más volumen semanal y mejor distribución para progresar de forma consistente.",
      featured: true,
    },
    {
      productId: "hombre-5-dias",
      days: "5 días",
      price: "$45.000",
      description:
        "Mayor frecuencia para quienes pueden sostener más sesiones y volumen semanal.",
      featured: false,
    },
  ],

  mujeres: [
    {
      productId: "mujer-3-dias",
      days: "3 días",
      price: "$35.000",
      description:
        "Rutina equilibrada con énfasis en glúteos y piernas, sin descuidar torso y fuerza general.",
      featured: false,
    },
    {
      productId: "mujer-4-dias",
      days: "4 días",
      price: "$40.000",
      description:
        "Mayor frecuencia para distribuir mejor el trabajo de tren inferior y torso.",
      featured: true,
    },
    {
      productId: "mujer-5-dias",
      days: "5 días",
      price: "$45.000",
      description:
        "Más volumen y frecuencia para quienes quieren entrenar más días y sostenerlo.",
      featured: false,
    },
  ],
} as const;

export default function Routines() {
  const [category, setCategory] =
    useState<keyof typeof routines>("hombres");

  const selectedRoutines = routines[category];

  return (
    <section
      id="rutinas"
      className="border-t border-white/10 bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Producto digital
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Elegí tu rutina.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Programas estructurados para entrenar por tu cuenta con progresión,
              intensidad y criterio.
            </p>
          </div>

          <div className="flex rounded-full border border-white/10 bg-zinc-950 p-1">
            <button
              onClick={() => setCategory("hombres")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                category === "hombres"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Hombres
            </button>

            <button
              onClick={() => setCategory("mujeres")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                category === "mujeres"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Mujeres
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {selectedRoutines.map((routine, index) => (
            <article
              key={routine.productId}
              className={`flex min-h-[560px] flex-col rounded-[2rem] border p-8 md:p-10 ${
                routine.featured
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-zinc-950 text-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <p
                  className={`text-xs uppercase tracking-[0.3em] ${
                    routine.featured ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  0{index + 1}
                </p>

                {routine.featured && (
                  <span className="rounded-full bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Más elegido
                  </span>
                )}
              </div>

              <div className="mt-16">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                    routine.featured ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  Rutina
                </p>

                <h3 className="mt-4 text-4xl font-semibold tracking-tight">
                  {routine.days}
                </h3>

                <p className="mt-5 text-3xl font-semibold">
                  {routine.price}
                </p>

                <p
                  className={`mt-8 leading-7 ${
                    routine.featured ? "text-zinc-600" : "text-zinc-400"
                  }`}
                >
                  {routine.description}
                </p>
              </div>

              <div className="mt-10">
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${
                    routine.featured ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  Incluye
                </p>

                <ul
                  className={`mt-6 space-y-3 text-sm ${
                    routine.featured ? "text-zinc-700" : "text-zinc-400"
                  }`}
                >
                  <li>— Ejercicios, series y repeticiones</li>
                  <li>— RIR e intensidad</li>
                  <li>— Guía de progresión</li>
                  <li>— Tips básicos de alimentación</li>
                  <li>— PDF descargable</li>
                </ul>
              </div>

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
  );
}
