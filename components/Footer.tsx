export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">
            Taibek Training
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
            Entrenamiento con estructura, intención y criterio.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-600">
            <a
              href="/privacidad"
              className="transition hover:text-white"
            >
              Privacidad
            </a>

            <a
              href="/terminos"
              className="transition hover:text-white"
            >
              Términos
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-zinc-500 md:items-end">
          <a
            href="https://instagram.com/taibek__"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Instagram @taibek__
          </a>

          <a
            href="https://wa.me/5491131872995?text=Hola%20Taibek%2C%20quer%C3%ADa%20hacerte%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}