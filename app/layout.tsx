import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaiderIO API Fun",
  description: "A simple web app to practice NextJs and APIs with the World of Warcraft RaiderIO free API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className}`}>
        <Provider>
          {children}
        </Provider>
    </body>
    </html>
  );
}
