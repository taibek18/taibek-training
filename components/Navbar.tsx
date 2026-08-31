import Image from "next/image";

const links = [
  { label: "Rutinas", href: "#rutinas" },
  { label: "Asesoría", href: "#asesoria" },
  { label: "Presencial", href: "#presencial" },
  { label: "Mi historia", href: "#historia" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center">
            <Image
              src="/brand/taibek-t-white.png"
              alt="Taibek Training"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
          </div>

          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            Taibek Training
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#rutinas"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Empezar
        </a>
      </div>
    </header>
  );
}