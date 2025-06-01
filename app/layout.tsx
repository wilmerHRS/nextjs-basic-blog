import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevBlog",
  description: "Tu fuente de conocimiento sobre desarrollo web moderno. Artículos, tutoriales y las últimas tendencias en tecnología.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
