import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziad Tamer El-Zeiny | AI & Intelligent Systems Portfolio",
  description:
    "Professional portfolio for Ziad Tamer El-Zeiny, an Artificial Intelligence student focused on machine learning, computer vision, robotics, data science, and intelligent systems.",
  openGraph: {
    title: "Ziad Tamer El-Zeiny | AI & Intelligent Systems Portfolio",
    description:
      "AI student portfolio featuring reinforcement learning, deep learning, robotics, computer vision, and responsible model evaluation projects.",
    type: "website",
    locale: "en_US"
  },
  keywords: ["Ziad Tamer El-Zeiny", "Artificial Intelligence", "Machine Learning", "Reinforcement Learning", "Computer Vision", "Robotics", "Data Science"],
  authors: [{ name: "Ziad Tamer El-Zeiny" }],
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
