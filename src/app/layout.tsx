import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

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
  title: "NextJs | Antd",
  description: "NextJs + Antd",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          {children}
          {modal}
        </AntdRegistry>
      </body>
    </html>
  );
}
