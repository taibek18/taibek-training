import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { readFile } from "fs/promises";
import path from "path";
import {
  routineFiles,
  RoutineProductId,
} from "@/lib/routines";

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

    if (result.status !== "approved") {
      return NextResponse.json(
        { error: "El pago no está aprobado" },
        { status: 403 }
      );
    }

    const productId = result.external_reference as RoutineProductId;

    if (!productId || !(productId in routineFiles)) {
      return NextResponse.json(
        { error: "Producto inválido" },
        { status: 400 }
      );
    }

    const filename = routineFiles[productId];

    const filePath = path.join(
      process.cwd(),
      "private",
      "routines",
      filename
    );

    const file = await readFile(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("Error entregando rutina:", error);

    return NextResponse.json(
      { error: "No se pudo entregar la rutina" },
      { status: 500 }
    );
  }
}