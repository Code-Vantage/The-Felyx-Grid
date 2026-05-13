import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const tanMonCheri = localFont({
  src: "../../public/fonts/tan-mon-cheri.woff2",
  variable: "--font-tan-mon-cheri",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Felyx Grid | Web Design and Development Studio",
  description:
    "The Felyx Grid designs and builds websites, product interfaces, and brand systems for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${tanMonCheri.variable} scroll-smooth bg-background antialiased`}
    >
      <body className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(195,0,2,0.16),transparent_34rem),#060001] font-sans text-cream selection:bg-brand selection:text-cream">
        {children}
      </body>
    </html>
  );
}
