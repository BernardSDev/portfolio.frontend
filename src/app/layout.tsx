import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import ThemeProviderClient from "../components/ThemeProviderClient/ThemeProviderClient";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata =
        {
            title: "Bernard S. Apoh",
            icons: {
            icon: "/bernard.png",
        },
    };

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans grid place-items-center min-h-dvh bg-background text-foreground p-3 sm:p-6`}
        >
        <ThemeProviderClient>
            <main className={"bg-background w-full max-w-4xl overflow-hidden p-6 sm:p-1"}>
                {children}
            </main>
        </ThemeProviderClient>
        </body>
        </html>
    );
}
