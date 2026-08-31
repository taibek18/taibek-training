import Image from "next/image";

export default function Story() {
  return (
    <section
      id="historia"
      className="border-t border-white/10 bg-zinc-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[720px]">
            <div className="absolute left-0 top-0 h-[620px] w-[78%] overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              <Image
                src="/images/story-back.jpg"
                alt="Taibek Training - progreso"
                fill
                className="object-cover object-center"
              />
            </div>

          <div className="absolute bottom-0 right-0 h-[390px] w-[42%] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
  <Image
    src="/images/story-side.jpg"
    alt="Taibek Training"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
    className="object-cover object-[50%_42%] scale-[1.18]"
  />
</div>

            <div className="absolute bottom-10 left-6 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                El proceso
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-200">
                Volver.
                <br />
                Equivocarme.
                <br />
                Aprender.
                <br />
                Enseñar.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Mi historia
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              No empecé siendo entrenador.
              <span className="block text-zinc-600">
                Empecé volviendo al gimnasio.
              </span>
            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                En noviembre de 2024 decidí volver a entrenar después de años
                sin sostener ningún deporte. Venía de una etapa de muchos
                cambios y sentía que estaba desperdiciando mi tiempo.
              </p>

              <p>
                Volver significó empezar prácticamente desde cero. Pesos
                chicos, técnica olvidada y bastante ego que acomodar. Pero el
                progreso llegó rápido y con él también apareció otro problema:
                querer avanzar demasiado rápido.
              </p>

              <p>
                Una lesión de hombro me dejó un mes afuera y cambió mi forma de
                ver el entrenamiento. Dejé de pensar solamente en mover más
                peso y empecé a estudiar técnica, ejecución, programación y
                progresión.
              </p>

              <p>
                Con el tiempo, otros chicos del gimnasio empezaron a acercarse
                para preguntarme sobre ejercicios y técnica. Ahí descubrí que
                enseñar me gustaba tanto como entrenar.
              </p>

              <p>
                Ese proceso terminó llevándome a trabajar como entrenador,
                empezar con personalizados y crear Taibek Training.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              <div className="bg-black p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  Inicio
                </p>
                <p className="mt-3 font-semibold">Nov. 2024</p>
              </div>

              <div className="bg-black p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  Cambio
                </p>
                <p className="mt-3 font-semibold">Aprender de verdad</p>
              </div>

              <div className="bg-black p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  Hoy
                </p>
                <p className="mt-3 font-semibold">Entrenador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}