import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taibek-training.vercel.app"),

  title: {
    default: "Taibek Training | Rutinas y asesorías personalizadas",
    template: "%s | Taibek Training",
  },

  description:
    "Rutinas de entrenamiento, asesorías online y entrenamiento presencial en Canning y Ezeiza. Entrená con estructura, intención y criterio.",

  keywords: [
    "Taibek Training",
    "entrenamiento personalizado",
    "rutinas de gimnasio",
    "asesoría online fitness",
    "personal trainer",
    "entrenamiento en Canning",
    "entrenamiento en Ezeiza",
  ],

  authors: [{ name: "Taibek Training" }],

  creator: "Taibek Training",

  openGraph: {
    title: "Taibek Training | Rutinas y asesorías personalizadas",
    description:
      "Rutinas, asesorías online y entrenamiento presencial con estructura, intención y criterio.",
    url: "https://taibek-training.vercel.app",
    siteName: "Taibek Training",
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Taibek Training | Rutinas y asesorías personalizadas",
    description:
      "Rutinas, asesorías online y entrenamiento presencial con estructura, intención y criterio.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}