import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VisGorithm",
    description: "Algorithm visualizer",
    keywords: "algorithm visualistaion",
    creator: "sutaC",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
