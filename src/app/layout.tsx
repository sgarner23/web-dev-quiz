import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Development Quiz",
  description: "Quiz on web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
