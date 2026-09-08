export default function PagoPendientePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-zinc-950 p-10 text-center md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Pago pendiente
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
          Todavía no está confirmado.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
          Mercado Pago todavía está procesando la operación.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500">
          No hace falta volver a pagar. Cuando se confirme, el sistema podrá habilitar tu compra.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}