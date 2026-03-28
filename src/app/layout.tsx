import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "ARWA Optics & Prosthetic Center | Ocular Prosthesis & Special Lenses Chennai",
  description: "ARWA Optics & Prosthetic Center in Chennai — specialists in custom ocular prosthesis, scleral lenses, Rose K, Ortho-K, facial prosthetics & low vision devices. Certified ocularist with 6+ years experience.",
  keywords: "ocular prosthesis chennai, artificial eye chennai, prosthetic eye chennai, scleral lens chennai, rose k lens, orthokeratology chennai, facial prosthetics chennai, low vision devices chennai, ARWA optics",
  authors: [{ name: "ARWA Optics & Prosthetic Center" }],
  creator: "ARWA Optics & Prosthetic Center",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ARWA Optics & Prosthetic Center",
    title: "ARWA Optics & Prosthetic Center | Ocular Prosthesis Chennai",
    description: "Chennai's premier center for custom ocular prosthesis, scleral lenses, facial prosthetics & low vision devices. Certified specialists with 6+ years of clinical excellence.",
    images: [{ url: "/ocularist_work_1773675138301.png", width: 1200, height: 630, alt: "ARWA Optics & Prosthetic Center Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARWA Optics & Prosthetic Center | Chennai",
    description: "Custom ocular prosthesis, scleral lenses, facial prosthetics & low vision devices in Chennai.",
    images: ["/ocularist_work_1773675138301.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
