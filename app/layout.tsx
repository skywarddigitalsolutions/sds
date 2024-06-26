import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "../styles/globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skyward Digital Solutions",
  description: "Creacion de paginas web ",
  icons: {
    icon: '/logonegro.png',
    shortcut: '/logonegro.png',
    apple: '/logonegro.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logonegro.png" />
      </head>
      <body className={jakarta.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
