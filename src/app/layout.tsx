import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: "Portfolio | Santiago",
  description: "A video game themed portfolio for a programmer with pixel art style and pastel red color scheme.",
  icons: {
    icon: `${basePath}/images/pixel-skill.png`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <head>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}