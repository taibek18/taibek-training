"use client";

import { FormEvent, useState } from "react";

export default function CheckInPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const data = {
        nombre: formData.get("nombre"),
        email: formData.get("email"),
        peso: formData.get("peso"),
        adherencia: formData.get("adherencia"),
        rendimiento: formData.get("rendimiento"),
        energia: formData.get("energia"),
        hambre: formData.get("hambre"),
        sueno: formData.get("sueno"),
        pasos: formData.get("pasos"),
        cardio: formData.get("cardio"),
        molestias: formData.get("molestias"),
        observaciones: formData.get("observaciones"),
      };

      const response = await fetch("/api/check-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "No se pudo enviar el check-in.");
      }

      setSuccess(true);
      form.reset();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error enviando el check-in."
      );
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <main className="flex min-h-screen items-center bg-black px-6 py-20 text-white">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Check-in enviado
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Listo. Ya tengo tu actualización semanal.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Voy a revisar tu progreso, rendimiento, recuperación y adherencia
              para definir si hace falta ajustar algo en la planificación.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Check-in semanal
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Contame cómo fue tu semana.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Esta actualización me permite ver cómo estás respondiendo al plan y
          decidir si hace falta mantener, ajustar o modificar algo.
        </p>

        <form onSubmit={handleSubmit} className="mt-14 space-y-12">
          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              01 · Identificación
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Nombre y apellido *
                </label>

                <input
                  required
                  type="text"
                  name="nombre"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Email *
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              02 · Progreso
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Peso actual
                </label>

                <input
                  type="text"
                  name="peso"
                  placeholder="Ej: 78,2 kg"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Adherencia al plan del 1 al 10
                </label>

                <input
                  type="number"
                  name="adherencia"
                  min="1"
                  max="10"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              03 · Entrenamiento
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Cómo estuvo tu rendimiento esta semana?
                </label>

                <textarea
                  name="rendimiento"
                  rows={4}
                  placeholder="Fuerza, repeticiones, cargas, sensaciones, progreso..."
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Tuviste molestias, dolor o alguna limitación?
                </label>

                <textarea
                  name="molestias"
                  rows={3}
                  placeholder="Si no tuviste ninguna, escribí 'No'."
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              04 · Recuperación
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Energía 1–10
                </label>

                <input
                  type="number"
                  name="energia"
                  min="1"
                  max="10"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Hambre 1–10
                </label>

                <input
                  type="number"
                  name="hambre"
                  min="1"
                  max="10"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Sueño promedio
                </label>

                <input
                  type="text"
                  name="sueno"
                  placeholder="Ej: 7 horas"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              05 · Actividad
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Pasos diarios aproximados
                </label>

                <input
                  type="text"
                  name="pasos"
                  placeholder="Ej: 10.000"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Cardio realizado
                </label>

                <input
                  type="text"
                  name="cardio"
                  placeholder="Ej: 3 x 20 minutos"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              06 · Comentarios
            </p>

            <div className="mt-8">
              <label className="mb-2 block text-sm text-zinc-300">
                ¿Hay algo más que quieras contarme de esta semana?
              </label>

              <textarea
                name="observaciones"
                rows={5}
                placeholder="Cambios de rutina, estrés, alimentación, horarios, sensaciones, dudas..."
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
              />
            </div>
          </section>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            {error && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Enviando check-in..." : "Enviar check-in"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}