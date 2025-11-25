import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeedsFine",
  description: "맛집 검증 플랫폼 니즈파인",
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
