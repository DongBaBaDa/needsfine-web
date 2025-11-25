import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NeedsFine",
    description: "ÁøÂ¥ ¸®ºä¸¸ ³²±â´Â °ËÁõ ÇÃ·§Æû",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className="overflow-hidden">
                {children}
            </body>
        </html>
    );
}
