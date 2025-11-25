import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NeedsFine",
    description: "¸ÀÁı °ËÁõ ÇÃ·§Æû ´ÏÁîÆÄÀÎ",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}