import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "(주)테크아이 - IT 인프라 전문 기업",
  description: "서버, 네트워크, 스토리지, DR, 보안까지 — IT 인프라 전문 기업 테크아이",
  icons: {
    icon: [
      { url: "/favicons-mark/favicon-mark-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons-mark/favicon-mark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons-mark/favicon-mark-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicons-mark/favicon-mark-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons-mark/favicon-mark-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons-mark/favicon-mark-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/favicons-mark/favicon-mark-180x180.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicons-mark/favicon-mark-32x32.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "(주)테크아이",
    title: "(주)테크아이 - IT 인프라 전문 기업",
    description: "서버, 네트워크, 스토리지, DR, 보안까지 — IT 인프라 전문 기업 테크아이",
    images: [
      {
        url: "/images/hero-datacenter.jpg",
        width: 1200,
        height: 800,
        alt: "테크아이 데이터센터 인프라",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "(주)테크아이 - IT 인프라 전문 기업",
    description: "서버, 네트워크, 스토리지, DR, 보안까지 — IT 인프라 전문 기업 테크아이",
    images: ["/images/hero-datacenter.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
