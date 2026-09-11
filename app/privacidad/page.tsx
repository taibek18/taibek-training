export const metadata = {
  title: "Política de Privacidad | Taibek Training",
  description:
    "Información sobre el tratamiento de datos personales en Taibek Training.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Taibek Training
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
          Política de privacidad
        </h1>

        <p className="mt-6 text-sm leading-7 text-zinc-400">
          Última actualización: septiembre de 2026.
        </p>

        <div className="mt-14 space-y-10 text-base leading-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Información que recopilamos
            </h2>

            <p className="mt-3">
              Cuando completás un formulario de Taibek Training podemos
              solicitar información como nombre, edad, peso, altura, correo
              electrónico, número de WhatsApp, experiencia de entrenamiento,
              objetivos, hábitos, actividad física y otros datos necesarios
              para brindar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Para qué usamos tus datos
            </h2>

            <p className="mt-3">
              La información se utiliza para evaluar tu situación, preparar y
              ajustar planes de entrenamiento, realizar seguimientos,
              comunicarnos con vos y administrar los servicios contratados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Almacenamiento de la información
            </h2>

            <p className="mt-3">
              Los datos enviados mediante los formularios pueden almacenarse en
              herramientas utilizadas para la gestión de clientes y
              seguimiento, como Notion.
            </p>

            <p className="mt-3">
              Taibek Training toma medidas razonables para limitar el acceso a
              esta información y utilizarla únicamente para la prestación del
              servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Pagos</h2>

            <p className="mt-3">
              Cuando se utilicen plataformas externas de pago, la información
              financiera será procesada por el proveedor correspondiente.
              Taibek Training no almacena directamente los datos completos de
              tarjetas de crédito o débito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Compartir información
            </h2>

            <p className="mt-3">
              No vendemos ni comercializamos tus datos personales. La
              información podrá ser utilizada por servicios tecnológicos
              necesarios para operar la plataforma y brindar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Acceso, modificación o eliminación
            </h2>

            <p className="mt-3">
              Podés solicitar acceso, corrección o eliminación de tus datos
              personales contactándote directamente con Taibek Training.
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