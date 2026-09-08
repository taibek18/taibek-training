import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const products = {
  "hombre-3-dias": {
    title: "Rutina Hombre Taibek Training - 3 días",
    price: 35000,
  },
  "hombre-4-dias": {
    title: "Rutina Hombre Taibek Training - 4 días",
    price: 40000,
  },
  "hombre-5-dias": {
    title: "Rutina Hombre Taibek Training - 5 días",
    price: 45000,
  },
  "mujer-3-dias": {
    title: "Rutina Mujer Taibek Training - 3 días",
    price: 35000,
  },
  "mujer-4-dias": {
    title: "Rutina Mujer Taibek Training - 4 días",
    price: 40000,
  },
  "mujer-5-dias": {
    title: "Rutina Mujer Taibek Training - 5 días",
    price: 45000,
  },
};

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

    const product = products[productId as keyof typeof products];

    if (!product) {
      return NextResponse.json(
        { error: "Producto inválido" },
        { status: 400 }
      );
    }

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { error: "Mercado Pago no está configurado" },
        { status: 503 }
      );
    }

    const client = new MercadoPagoConfig({
      accessToken,
    });

    const preference = new Preference(client);

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const result = await preference.create({
      body: {
        items: [
          {
            id: productId,
            title: product.title,
            quantity: 1,
            unit_price: product.price,
            currency_id: "ARS",
          },
        ],

        external_reference: productId,

        back_urls: {
          success: `${baseUrl}/pago/exito`,
          failure: `${baseUrl}/pago/error`,
          pending: `${baseUrl}/pago/pendiente`,
        },

        auto_return: "approved",
      },
    });

    return NextResponse.json({
      checkoutUrl: result.init_point,
      preferenceId: result.id,
    });
  } catch (error) {
    console.error("Error creando preference:", error);

    return NextResponse.json(
      { error: "No se pudo crear el checkout" },
      { status: 500 }
    );
  }
}