import type { Metadata } from "next";
import localFont from "next/font/local";

import Head from "next/head";
import "boxicons/css/boxicons.min.css";

import "./globals.css";
import "./globals.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bereket Mengaw Portfolio",
  description: "proffessional website showcasing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Boxicons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
