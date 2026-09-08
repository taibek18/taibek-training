import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get("payment_id");

    if (!paymentId) {
      return NextResponse.json(
        { error: "Falta payment_id" },
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

    const payment = new Payment(client);

    const result = await payment.get({
      id: paymentId,
    });

    return NextResponse.json({
      id: result.id,
      status: result.status,
      statusDetail: result.status_detail,
      externalReference: result.external_reference,
    });
  } catch (error) {
    console.error("Error consultando pago:", error);

    return NextResponse.json(
      { error: "No se pudo consultar el pago" },
      { status: 500 }
    );
  }
}