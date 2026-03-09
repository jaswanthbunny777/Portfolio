import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiriveedhi Jaswanth | Full-Stack Developer",
  description:
    "Computer Science (AIML) student & Full-Stack Developer specializing in Java, Node.js, and scalable web systems.",
  keywords: ["full-stack", "developer", "portfolio", "Java", "Node.js", "AIML"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
