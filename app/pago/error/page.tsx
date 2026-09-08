export default function PagoErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-zinc-950 p-10 text-center md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Pago no completado
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
          No se pudo completar el pago.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
          La operación fue rechazada o cancelada.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/#rutinas"
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Intentar de nuevo
          </a>

          <a
            href="/"
            className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}