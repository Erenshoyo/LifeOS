import type { Metadata } from "next";

import { Inter, Manrope } from "next/font/google";
import "./globals.css";

// 1. Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Defines the CSS variable
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope", // Defines the CSS variable
});

export const metadata: Metadata = {
  title: "LifeOS",
  description: "Your mind, unified. Your goals, realized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the variables to the html or body tag
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
