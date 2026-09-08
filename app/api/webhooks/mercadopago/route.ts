import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { routineFiles } from "@/lib/routines";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const paymentId =
      body?.data?.id ||
      body?.id ||
      new URL(request.url).searchParams.get("data.id");

    if (!paymentId) {
      return NextResponse.json(
        { received: true, ignored: true },
        { status: 200 }
      );
    }
const isSimulation =
  body?.live_mode === false &&
  String(paymentId) === "123456";

if (isSimulation) {
  console.log("Simulación de webhook recibida correctamente");

  return NextResponse.json(
    {
      received: true,
      simulation: true,
    },
    { status: 200 }
  );
}
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (!accessToken) {
      console.error("Falta MERCADOPAGO_ACCESS_TOKEN");

      return NextResponse.json(
        { error: "Mercado Pago no está configurado" },
        { status: 500 }
      );
    }

    const client = new MercadoPagoConfig({
      accessToken,
    });

    const payment = new Payment(client);

    const result = await payment.get({
      id: String(paymentId),
    });

    const productId = result.external_reference;

    if (!productId || !(productId in routineFiles)) {
      console.warn("Pago con producto desconocido:", {
        paymentId,
        productId,
      });

      return NextResponse.json(
        { received: true, ignored: true },
        { status: 200 }
      );
    }

    console.log("Webhook Mercado Pago:", {
      paymentId: result.id,
      status: result.status,
      productId,
    });

    if (result.status === "approved") {
      /*
        ACÁ después vamos a registrar la compra aprobada.

        Ejemplo futuro:
        - guardar paymentId
        - guardar productId
        - guardar email del comprador
        - marcar compra como aprobada
        - generar acceso seguro al PDF
      */

      console.log("Compra aprobada:", {
        paymentId: result.id,
        productId,
        file: routineFiles[productId as keyof typeof routineFiles],
      });
    }

    return NextResponse.json(
      { received: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en webhook Mercado Pago:", error);

    return NextResponse.json(
      { error: "Error procesando webhook" },
      { status: 500 }
    );
  }
}