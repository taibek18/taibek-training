"use client";

import { useState } from "react";

type BuyButtonProps = {
  productId:
    | "hombre-3-dias"
    | "hombre-4-dias"
    | "hombre-5-dias"
    | "mujer-3-dias"
    | "mujer-4-dias"
    | "mujer-5-dias";
  featured?: boolean;
};

export default function BuyButton({
  productId,
  featured = false,
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "No se pudo iniciar el pago.");
        return;
      }

      window.location.href = data.checkoutUrl;
    } catch {
      alert("No se pudo conectar con Mercado Pago.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className={`w-full rounded-full px-6 py-4 text-sm font-semibold transition ${
        featured
          ? "bg-black text-white hover:bg-zinc-800"
          : "bg-white text-black hover:bg-zinc-200"
      } disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {loading ? "Abriendo Mercado Pago..." : "Comprar rutina"}
    </button>
  );
}