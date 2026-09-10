import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const token = process.env.NOTION_TOKEN;
    const dataSourceId = process.env.NOTION_CHECKINS_DATA_SOURCE_ID;

    if (!token || !dataSourceId) {
      console.error("Falta configuración de Notion para check-ins");

      return NextResponse.json(
        { error: "Notion no está configurado" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      nombre,
      email,
      peso,
      adherencia,
      rendimiento,
      energia,
      hambre,
      sueno,
      pasos,
      cardio,
      molestias,
      observaciones,
    } = body;

    if (!nombre || !email) {
      return NextResponse.json(
        { error: "Nombre y email son obligatorios" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Notion-Version": "2025-09-03",
      },
      body: JSON.stringify({
        parent: {
          type: "data_source_id",
          data_source_id: dataSourceId,
        },

        properties: {
          Nombre: {
            title: [
              {
                text: {
                  content: String(nombre),
                },
              },
            ],
          },

          Email: {
            email: String(email),
          },

          Peso: {
            rich_text: [
              {
                text: {
                  content: String(peso || ""),
                },
              },
            ],
          },

          Adherencia: {
            number: adherencia ? Number(adherencia) : null,
          },

          Rendimiento: {
            rich_text: [
              {
                text: {
                  content: String(rendimiento || ""),
                },
              },
            ],
          },

          Energía: {
            number: energia ? Number(energia) : null,
          },

          Hambre: {
            number: hambre ? Number(hambre) : null,
          },

          Sueño: {
            rich_text: [
              {
                text: {
                  content: String(sueno || ""),
                },
              },
            ],
          },

          "Pasos diarios": {
            rich_text: [
              {
                text: {
                  content: String(pasos || ""),
                },
              },
            ],
          },

          Cardio: {
            rich_text: [
              {
                text: {
                  content: String(cardio || ""),
                },
              },
            ],
          },

          Molestias: {
            rich_text: [
              {
                text: {
                  content: String(molestias || ""),
                },
              },
            ],
          },

          Observaciones: {
            rich_text: [
              {
                text: {
                  content: String(observaciones || ""),
                },
              },
            ],
          },
        },
      }),
    });

    const notionData = await response.json();

    if (!response.ok) {
      console.error("Error de Notion en check-in:", notionData);

      return NextResponse.json(
        { error: "No se pudo guardar el check-in" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        pageId: notionData.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error guardando check-in:", error);

    return NextResponse.json(
      { error: "Error procesando el check-in" },
      { status: 500 }
    );
  }
}