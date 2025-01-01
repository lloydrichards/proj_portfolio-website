import type { Metadata } from "next";
import { inter, josefin_sans, roboto_mono } from "@/styles/fonts";

import "@/styles/globals.css";

import { Navbar } from "@/components/organism/navbar";
import { Footer } from "@/components/organism/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

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
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${josefin_sans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-dvh w-full lg:max-w-6xl",
          "mosaic-columns grid grid-flow-dense",
          "justify-self-center p-2",
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
