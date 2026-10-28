import type { Metadata } from "next";
import { texts } from "@/content/texts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jes-y-juan.vercel.app"),
  title: texts.metadata.title,
  description: texts.metadata.description,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: texts.metadata.openGraphTitle,
    description: texts.metadata.openGraphDescription,
    type: "website",
    locale: "es_ES",
    images: [{ url: "/images/bicisDadosLaMano.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
