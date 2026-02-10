import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Thịnh Thế Vinh Hoa - Tân Niên 2026",
  description: "Sự kiện Tân Niên 2026 - Thịnh Thế Vinh Hoa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${lexend.variable} antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
