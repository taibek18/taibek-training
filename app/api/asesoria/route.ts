import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const token = process.env.NOTION_TOKEN;
    const dataSourceId = process.env.NOTION_DATA_SOURCE_ID;

    if (!token || !dataSourceId) {
      console.error("Falta configuración de Notion");

      return NextResponse.json(
        { error: "Notion no está configurado" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      nombre,
      edad,
      altura,
      peso,
      objetivo,
      prioridades,
      experiencia,
      dias,
      duracion,
      equipamiento,
      preferencias,
      lesiones,
      actividad,
      pasos,
      cardio,
      sueno,
      estres,
      alimentacion,
      restricciones,
      whatsapp,
      instagram,
      email,
      consentimiento,
    } = body;

    if (!nombre || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    if (!consentimiento) {
      return NextResponse.json(
        { error: "Tenés que aceptar el consentimiento" },
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

          Edad: {
            number: edad ? Number(edad) : null,
          },

          Altura: {
            rich_text: [
              {
                text: {
                  content: String(altura || ""),
                },
              },
            ],
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

          Objetivo: {
            rich_text: [
              {
                text: {
                  content: String(objetivo || ""),
                },
              },
            ],
          },

          Prioridades: {
            rich_text: [
              {
                text: {
                  content: String(prioridades || ""),
                },
              },
            ],
          },

          Experiencia: {
            rich_text: [
              {
                text: {
                  content: String(experiencia || ""),
                },
              },
            ],
          },

          "Días disponibles": {
            number: dias ? Number(dias) : null,
          },

          "Duración sesión": {
            rich_text: [
              {
                text: {
                  content: String(duracion || ""),
                },
              },
            ],
          },

          Equipamiento: {
            rich_text: [
              {
                text: {
                  content: String(equipamiento || ""),
                },
              },
            ],
          },

          "Preferencias ejercicios": {
            rich_text: [
              {
                text: {
                  content: String(preferencias || ""),
                },
              },
            ],
          },

          "Lesiones o limitaciones": {
            rich_text: [
              {
                text: {
                  content: String(lesiones || ""),
                },
              },
            ],
          },

          "Actividad diaria": {
            rich_text: [
              {
                text: {
                  content: String(actividad || ""),
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

          "Cardio o deporte": {
            rich_text: [
              {
                text: {
                  content: String(cardio || ""),
                },
              },
            ],
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

          Estrés: {
            number: estres ? Number(estres) : null,
          },

          "Alimentación actual": {
            rich_text: [
              {
                text: {
                  content: String(alimentacion || ""),
                },
              },
            ],
          },

          "Restricciones alimentarias": {
            rich_text: [
              {
                text: {
                  content: String(restricciones || ""),
                },
              },
            ],
          },

          WhatsApp: {
            phone_number: String(whatsapp),
          },

          Instagram: {
            rich_text: [
              {
                text: {
                  content: String(instagram || ""),
                },
              },
            ],
          },

          Email: {
            email: String(email),
          },

          Consentimiento: {
            checkbox: Boolean(consentimiento),
          },

          Estado: {
            select: {
              name: "Nuevo",
            },
          },
        },
      }),
    });

    const notionData = await response.json();

    if (!response.ok) {
      console.error("Error de Notion:", notionData);

      return NextResponse.json(
        { error: "No se pudo guardar la evaluación" },
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
    console.error("Error guardando asesoría:", error);

    return NextResponse.json(
      { error: "Error procesando la evaluación" },
      { status: 500 }
    );
  }
}