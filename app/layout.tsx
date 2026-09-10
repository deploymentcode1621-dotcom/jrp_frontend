import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swami Vivekanand Institute of Nursing | Latur",
  description:
    "Swami Vivekanand Institute of Nursing, run by Jeevan Rekha Pratishthan, Latur, offers GNM, ANM, and allied health nursing education focused on compassionate, practical, and professional care training in Maharashtra.",
  keywords: [
    "Swami Vivekanand Institute of Nursing",
    "Jeevan Rekha Pratishthan",
    "Nursing College Latur",
    "GNM Latur",
    "ANM Latur",
    "Nursing education Maharashtra",
  ],
  openGraph: {
    title: "Swami Vivekanand Institute of Nursing | Latur",
    description:
      "Building confident, compassionate and professionally prepared nurses through quality education and practical learning in Latur, Maharashtra.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
