export const metadata = {
  title: "Términos de Uso | Taibek Training",
  description:
    "Condiciones de uso de rutinas, asesorías y entrenamientos de Taibek Training.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Taibek Training
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
          Términos de uso
        </h1>

        <p className="mt-6 text-sm leading-7 text-zinc-400">
          Última actualización: septiembre de 2026.
        </p>

        <div className="mt-14 space-y-10 text-base leading-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Sobre los servicios
            </h2>

            <p className="mt-3">
              Taibek Training ofrece rutinas de entrenamiento, asesorías online
              y entrenamiento presencial orientados a mejorar la organización,
              ejecución y progresión del entrenamiento físico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Uso de las rutinas
            </h2>

            <p className="mt-3">
              Las rutinas digitales están destinadas exclusivamente al uso
              personal de quien las adquiere. No está permitido revenderlas,
              distribuirlas, publicarlas o compartirlas comercialmente sin
              autorización.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Asesoría online
            </h2>

            <p className="mt-3">
              La asesoría requiere participación activa del cliente. Para poder
              realizar ajustes adecuados es importante brindar información
              correcta y comunicar cambios relevantes en entrenamiento,
              rendimiento, molestias o disponibilidad.
            </p>

            <p className="mt-3">
              Los resultados dependen de múltiples factores personales,
              incluyendo constancia, alimentación, descanso, actividad diaria,
              experiencia previa y adherencia al programa. Por este motivo no
              se garantizan resultados físicos específicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Salud y seguridad
            </h2>

            <p className="mt-3">
              El contenido y los servicios de Taibek Training no reemplazan la
              evaluación, diagnóstico o tratamiento de profesionales médicos,
              kinesiólogos, nutricionistas u otros profesionales de la salud.
            </p>

            <p className="mt-3">
              Si tenés lesiones, enfermedades, dolor persistente, limitaciones
              físicas o cualquier condición que pueda afectar la práctica de
              ejercicio, es recomendable consultar previamente con el
              profesional correspondiente.
            </p>

            <p className="mt-3">
              Ante dolor intenso, mareos, dificultad respiratoria u otros
              síntomas inusuales durante el entrenamiento, se debe interrumpir
              la actividad y buscar atención profesional cuando corresponda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Información proporcionada
            </h2>

            <p className="mt-3">
              El usuario es responsable de proporcionar información verdadera y
              actualizada en los formularios de evaluación y seguimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Pagos y servicios digitales
            </h2>

            <p className="mt-3">
              Los precios y condiciones disponibles serán los informados en el
              sitio al momento de contratar. Los pagos podrán gestionarse
              mediante plataformas externas.
            </p>

            <p className="mt-3">
              Cualquier inconveniente relacionado con una compra o acceso al
              contenido podrá ser consultado directamente con Taibek Training
              para su revisión.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Modificaciones
            </h2>

            <p className="mt-3">
              Estos términos podrán actualizarse cuando cambien los servicios,
              herramientas utilizadas o funcionamiento de la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contacto</h2>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://instagram.com/taibek__"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-white underline underline-offset-4 transition hover:text-zinc-300"
              >
                Instagram @taibek__
              </a>

              <a
                href="https://wa.me/5491131872995"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-white underline underline-offset-4 transition hover:text-zinc-300"
              >
                WhatsApp
              </a>
            </div>
          </section>
        </div>

        <a
          href="/"
          className="mt-16 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}