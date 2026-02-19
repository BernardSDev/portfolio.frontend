import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import ThemeProviderClient from "../components/ThemeProviderClient";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {title: "Bernard S. Apoh"};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen items-center justify-center font-sans bg-background text-foreground transition-colors duration-300`}
        >
        <ThemeProviderClient>
            <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-4">
                {children}
            </main>
        </ThemeProviderClient>
        </body>
        </html>
    );
}
