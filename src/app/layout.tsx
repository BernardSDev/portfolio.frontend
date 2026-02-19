import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bernard S. Apoh"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen items-center justify-center font-sans bg-background`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
      >
          <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-4 sm:items-start">{children}</main>
      </ThemeProvider>
      </body>
    </html>
  );
}
