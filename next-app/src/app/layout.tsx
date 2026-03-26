import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ARWA Optics & Prosthetic Center | Specialized Ocular Care Chennai",
  description:
    "ARWA Optics & Prosthetic Center offers high-quality custom ocular prosthesis, digital iris prosthesis, and premium eyewear with 6 years of excellence in Chennai.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="beforeInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
