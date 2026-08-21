import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陳詠歆 / Sydney Chen — Portfolio",
  description:
    "陳詠歆（Sydney Chen）的個人作品集網站，國立陽明交通大學資訊工程學系，全端開發專案作品集。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className="h-full">
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
