import { Suspense } from "react";
import PaymentResult from "./PaymentResult";

export default function PagoExitoPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-zinc-950 p-10 text-center md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Estado del pago
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Verificando tu pago...
            </h1>
          </div>
        </main>
      }
    >
      <PaymentResult />
    </Suspense>
  );
}