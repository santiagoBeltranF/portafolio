import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Portfolio | Santiago",
  description: "A video game themed portfolio for a programmer with pixel art style and pastel red color scheme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth"> 
      <head>
        <link rel="icon" href="/images/pixel-skill.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}