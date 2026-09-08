import { NextResponse } from "next/server";
import {
  MercadoPagoConfig,
  Payment,
  WebhookSignatureValidator,
  InvalidWebhookSignatureError,
} from "mercadopago";
import { routineFiles } from "@/lib/routines";

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);

    const xSignature = request.headers.get("x-signature");
    const xRequestId = request.headers.get("x-request-id");

    const dataId =
      url.searchParams.get("data.id") ||
      url.searchParams.get("data_id");

    const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;

    if (!secret) {
      console.error("Falta MERCADOPAGO_WEBHOOK_SECRET");

      return NextResponse.json(
        { error: "Webhook no configurado" },
        { status: 500 }
      );
    }

    if (!xSignature || !xRequestId || !dataId) {
      return NextResponse.json(
        { error: "Webhook inválido" },
        { status: 401 }
      );
    }

    try {
      WebhookSignatureValidator.validate({
        xSignature,
        xRequestId,
        dataId,
        secret,
      });
    } catch (error) {
      if (error instanceof InvalidWebhookSignatureError) {
        console.warn("Firma de webhook inválida");

        return NextResponse.json(
          { error: "Firma inválida" },
          { status: 401 }
        );
      }

      throw error;
    }

    const body = await request.json();

    const paymentId =
      body?.data?.id ||
      body?.id ||
      dataId;

    const isSimulation =
      body?.live_mode === false &&
      String(paymentId) === "123456";

    if (isSimulation) {
      console.log("Simulación firmada recibida correctamente");

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