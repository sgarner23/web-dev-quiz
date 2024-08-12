import type { Metadata } from "next";
import Head from "next/head";
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
      <Head>
        <link rel="icon" href="/src/app/favicon.png" sizes="any" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
