import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "好呀 HAOYA | 精致化妆品电商",
  description: "精选天然成分，为现代女性打造专属护肤方案。好呀美妆，让每一天都美好。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
