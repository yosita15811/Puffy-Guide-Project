import type { Metadata, Viewport } from "next";
import { Mitr, Noto_Sans_SC, Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-prompt-family",
  display: "swap",
});

const mitr = Mitr({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mitr-family",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sc-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puffy Companion",
  description: "Your cozy Lanna pocket guide in Chiang Mai",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#6d28d9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} ${mitr.variable} ${notoSansSC.variable} ${prompt.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
