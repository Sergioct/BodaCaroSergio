import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boda de Carolina y Sergio",
  description: "¡Nos casamos! Acompáñanos en este día tan especial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${greatVibes.variable} ${cormorant.variable} h-full antialiased bg-[#fdfbf7] text-[#333333]`}
    >
      <body className="min-h-full flex flex-col font-cormorant">{children}</body>
    </html>
  );
}
