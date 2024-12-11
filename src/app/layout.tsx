import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Link from "next/link";

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
  team,
  analytics
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode

}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <div className="container mx-auto">
            <div className="flex justify-center text-blue-500 p-6 gap-6">
              <Link href="/">Home</Link>
              <Link href="visitors">visitors</Link>
            </div>
            <div className="flex gap-6">
              {team}
              {analytics}
            </div>
            <div>
              {children}
            </div>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
