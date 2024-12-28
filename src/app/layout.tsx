import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/template/navbar";
import { Footer } from "@/components/template/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lloyd Richards Design",
  description:
    "Digital playground of Lloyd Richards, a designer and developer.",
  icons: {
    icon: `/favicon.svg`,
  },
  openGraph: {
    title: "Lloyd Richards Design",
    description:
      "Digital playground of Lloyd Richards, a designer and developer.",
    images: [
      {
        url: `/images/lloyd_richards_portrait.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lloyd Richards Design",
    description:
      "Digital playground of Lloyd Richards, a designer and developer.",
    images: [`/images/lloyd_richards_portrait.png`],
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid w-full grid-cols-12 gap-2 justify-self-center lg:max-w-6xl`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
