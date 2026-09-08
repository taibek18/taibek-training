"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type PaymentData = {
  id?: number;
  status?: string;
  statusDetail?: string;
  externalReference?: string;
};

export default function PaymentResult() {
  const searchParams = useSearchParams();

  const paymentId =
    searchParams.get("payment_id") ||
    searchParams.get("collection_id");

  const [payment, setPayment] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!paymentId) {
      setLoading(false);
      setError(true);
      return;
    }

    async function checkPayment() {
      try {
        const response = await fetch(
          `/api/payment-status?payment_id=${paymentId}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error();
        }

        setPayment(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    checkPayment();
  }, [paymentId]);

  const approved = payment?.status === "approved";

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-zinc-950 p-10 text-center md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Estado del pago
        </p>

        {loading && (
          <>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Verificando tu pago...
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Estamos consultando la operación con Mercado Pago.
            </p>
          </>
        )}

        {!loading && error && (
          <>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              No pudimos verificar el pago.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              No encontramos una operación válida para comprobar.
            </p>
          </>
        )}

        {!loading && !error && approved && (
          <>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Listo.
              <span className="block text-zinc-600">
                Tu compra fue aprobada.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              El pago fue confirmado correctamente.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black p-6 text-left">
              <p className="text-sm font-semibold">
                Rutina comprada
              </p>

              <p className="mt-3 text-sm text-zinc-500">
                {payment?.externalReference || "Rutina Taibek Training"}
              </p>
            </div>
          </>
        )}

        {!loading && !error && !approved && (
          <>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              El pago todavía no está aprobado.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Estado actual: {payment?.status || "pendiente"}
            </p>
          </>
        )}

        <a
          href="/"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}