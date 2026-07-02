import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ziad Tamer El-Zeiny | AI & Intelligent Systems Portfolio",
  description:
    "Professional portfolio for Ziad Tamer El-Zeiny, an Artificial Intelligence student focused on machine learning, computer vision, robotics, data science, and intelligent systems.",
  openGraph: {
    title: "Ziad Tamer El-Zeiny | AI & Intelligent Systems Portfolio",
    description:
      "AI student portfolio featuring applied machine learning, robotics, computer vision, and intelligent systems experience.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}