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
        </div>

        <div className="text-sm text-zinc-500">
          <a
            href="https://instagram.com/taibek__"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Instagram @taibek__
          </a>
        </div>
      </div>
    </footer>
  );
}