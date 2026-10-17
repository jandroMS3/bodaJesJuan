import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jes-y-juan.vercel.app"),
  title: "Juan & Jes · 17 de abril de 2027",
  description:
    "Nos casamos. Toda la información para celebrar con nosotros en Masía del Olivar, Bétera.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Juan & Jes · Nos casamos",
    description: "17 de abril de 2027 · Masía del Olivar · Bétera",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/images/bicisDadosLaMano.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
