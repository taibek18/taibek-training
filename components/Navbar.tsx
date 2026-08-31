import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-white"
        >
          Taibek Training
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <Link href="#rutinas" className="transition hover:text-white">
            Rutinas
          </Link>

          <Link href="#asesoria" className="transition hover:text-white">
            Asesoría
          </Link>

          <Link href="#presencial" className="transition hover:text-white">
            Presencial
          </Link>

          <Link href="#historia" className="transition hover:text-white">
            Mi historia
          </Link>
        </nav>

        <Link
          href="#rutinas"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Empezar
        </Link>
      </div>
    </header>
  );
}