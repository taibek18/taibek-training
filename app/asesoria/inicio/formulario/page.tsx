"use client";

import { FormEvent, useState } from "react";

export default function FormularioAsesoriaPage() {
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
        edad: formData.get("edad"),
        altura: formData.get("altura"),
        peso: formData.get("peso"),
        objetivo: formData.get("objetivo"),
        prioridades: formData.get("prioridades"),
        experiencia: formData.get("experiencia"),
        dias: formData.get("dias"),
        duracion: formData.get("duracion"),
        equipamiento: formData.get("equipamiento"),
        preferencias: formData.get("preferencias"),
        lesiones: formData.get("lesiones"),
        actividad: formData.get("actividad"),
        pasos: formData.get("pasos"),
        cardio: formData.get("cardio"),
        sueno: formData.get("sueno"),
        estres: formData.get("estres"),
        alimentacion: formData.get("alimentacion"),
        restricciones: formData.get("restricciones"),
        whatsapp: formData.get("whatsapp"),
        instagram: formData.get("instagram"),
        email: formData.get("email"),
        consentimiento: formData.get("consentimiento") === "on",
      };

      const response = await fetch("/api/asesoria", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "No se pudo enviar la evaluación."
        );
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
          : "Ocurrió un error enviando la evaluación."
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
              Evaluación recibida
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Listo. Ya tengo toda tu información.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Voy a revisar tu situación, tu objetivo y tu disponibilidad para
              preparar una planificación adaptada a vos.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-sm font-semibold text-white">
                ¿Qué sigue ahora?
              </p>

              <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                <p>01 · Reviso tu evaluación completa.</p>
                <p>02 · Defino la estructura de entrenamiento.</p>
                <p>03 · Preparo tu planificación personalizada.</p>
                <p>04 · Coordinamos el inicio del seguimiento.</p>
              </div>
            </div>

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
          Evaluación inicial
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Contame tu situación para poder armar un plan que tenga sentido para
          vos.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Cuanto más precisa sea la información, mejor voy a poder adaptar la
          planificación a tu objetivo, tu experiencia y tu día a día.
        </p>

        <form onSubmit={handleSubmit} className="mt-14 space-y-12">
          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              01 · Datos personales
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
                  autoComplete="name"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Edad
                </label>

                <input
                  type="number"
                  name="edad"
                  min="14"
                  max="100"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Altura
                </label>

                <input
                  type="text"
                  name="altura"
                  placeholder="Ej: 1,75 m"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Peso actual
                </label>

                <input
                  type="text"
                  name="peso"
                  placeholder="Ej: 78 kg"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              02 · Objetivo
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Cuál es tu objetivo principal?
                </label>

                <textarea
                  name="objetivo"
                  rows={4}
                  placeholder="Ej: ganar masa muscular, perder grasa, recomposición, mejorar rendimiento..."
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Hay alguna zona o grupo muscular que quieras priorizar?
                </label>

                <textarea
                  name="prioridades"
                  rows={3}
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              03 · Experiencia y entrenamiento
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Hace cuánto entrenás?
                </label>

                <input
                  type="text"
                  name="experiencia"
                  placeholder="Ej: 2 años"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    ¿Cuántos días podés entrenar?
                  </label>

                  <input
                    type="number"
                    name="dias"
                    min="1"
                    max="7"
                    className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    ¿Cuánto tiempo tenés por sesión?
                  </label>

                  <input
                    type="text"
                    name="duracion"
                    placeholder="Ej: 60 minutos"
                    className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Dónde entrenás y con qué equipamiento contás?
                </label>

                <textarea
                  name="equipamiento"
                  rows={3}
                  placeholder="Ej: gimnasio completo, máquinas, poleas, mancuernas..."
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Hay ejercicios que te gusten o que prefieras evitar?
                </label>

                <textarea
                  name="preferencias"
                  rows={3}
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              04 · Lesiones y limitaciones
            </p>

            <div className="mt-8">
              <label className="mb-2 block text-sm text-zinc-300">
                ¿Tenés lesiones, molestias, dolor o alguna limitación relevante?
              </label>

              <textarea
                name="lesiones"
                rows={4}
                placeholder="Si no tenés ninguna, escribí 'No'."
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
              />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              05 · Actividad diaria
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Cómo es tu nivel de movimiento fuera del gimnasio?
                </label>

                <textarea
                  name="actividad"
                  rows={3}
                  placeholder="Trabajo sentado, trabajo físico, caminás mucho, estudiás, etc."
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Pasos diarios aproximados
                  </label>

                  <input
                    type="text"
                    name="pasos"
                    placeholder="Ej: 8.000"
                    className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    ¿Hacés cardio o algún deporte?
                  </label>

                  <input
                    type="text"
                    name="cardio"
                    placeholder="Ej: fútbol 2 veces por semana"
                    className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              06 · Sueño y recuperación
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Horas de sueño por noche
                </label>

                <input
                  type="text"
                  name="sueno"
                  placeholder="Ej: 7 horas"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Estrés general del 1 al 10
                </label>

                <input
                  type="number"
                  name="estres"
                  min="1"
                  max="10"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              07 · Alimentación
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Contame cómo comés actualmente
                </label>

                <textarea
                  name="alimentacion"
                  rows={4}
                  placeholder="Cantidad de comidas, horarios, alimentos que suelen aparecer, etc."
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  ¿Tenés restricciones o preferencias alimentarias?
                </label>

                <textarea
                  name="restricciones"
                  rows={3}
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              08 · Contacto
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  WhatsApp *
                </label>

                <input
                  required
                  type="tel"
                  name="whatsapp"
                  autoComplete="tel"
                  placeholder="Ej: +54 9 11 1234 5678"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Instagram
                </label>

                <input
                  type="text"
                  name="instagram"
                  placeholder="@usuario"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-zinc-300">
                  Email *
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
                />
              </div>
            </div>
          </section>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <label className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
              <input
                required
                type="checkbox"
                name="consentimiento"
                className="mt-1 h-4 w-4"
              />

              <span>
                Confirmo que la información es correcta y entiendo que la
                asesoría de entrenamiento no reemplaza una evaluación o
                tratamiento médico.
              </span>
            </label>

            {error && (
              <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Enviando evaluación..." : "Enviar evaluación"}
            </button>

            <p className="mt-4 text-center text-xs text-zinc-600">
              Tus respuestas se utilizan para preparar y gestionar tu asesoría.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}