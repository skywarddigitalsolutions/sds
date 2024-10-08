import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import type { Metadata } from "next";

import "../styles/globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sds.com.ar"),
  title: "Skyward Digital Solutions - Creamos tu sitio web",
  description:
    "Potencia tu marca con un sitio web diseñado para captar la atención y optimizado para Google. Con un diseño personalizado y funcionalidad intuitiva, tendrás una plataforma que refleje tu esencia y te ayude a convertir visitas en clientes.",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "Skyward Digital Solutions - Creamos tu sitio web",
    description:
      "Potencia tu marca con un sitio web diseñado para captar la atención y optimizado para Google. Con un diseño personalizado y funcionalidad intuitiva, tendrás una plataforma que refleje tu esencia y te ayude a convertir visitas en clientes.",
    url: "https://sds.com.ar",
    siteName: "SDS",
    images: [
      {
        url: "/favicon.webp",
        width: 800,
        height: 600,
        alt: "SDS Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  keywords: [
    "diseño web",
    "desarrollo web",
    "agencia web",
    "creación de sitios web",
    "diseño de páginas web",
    "desarrollo de páginas web",
    "estrategia digital",
    "landing page",
    "sitio web personalizado",
    "programación web",
    "diseño web responsive",
    "optimización web",
    "desarrollo frontend",
    "desarrollo backend",
    "agencia de desarrollo web",
    "agencia de diseño web",
    "sitios web para empresas",
    "páginas web a medida",
    "web design",
    "web development",
    "custom websites",
    "website creation",
    "responsive design",
    "SEO web",
    "estrategia de marketing digital",
    "UX/UI design",
    "user experience",
    "interfaz de usuario",
    "experiencia de usuario",
    "programación frontend",
    "programación backend",
    "soluciones digitales",
    "branding web",
    "optimizacion SEO",
    "posicionamiento web",
    "diseño de interfaces",
    "desarrollo de aplicaciones web",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://sds.com.ar" />
        <link rel="icon" href="/favicon.webp" />
      </head>
      <body className={jakarta.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
