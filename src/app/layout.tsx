import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-headline",
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    display: "swap",
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
                {/* Material Symbols */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
                {/* Noto Serif KR — 세리프 헤드라인 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                {/* Pretendard — 본문·UI */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
                />
            </head>
            <body className={`${manrope.variable} ${jetbrainsMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
