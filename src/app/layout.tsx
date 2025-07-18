import { inter, josefin_sans, plex_mono, roboto_mono } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import "@/styles/globals.css";

import { TooltipProvider } from "@/components/atom/tooltip";
import { Footer } from "@/components/organism/footer";
import { Navbar } from "@/components/organism/navbar";
import { siteMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  icons: { icon: siteMetadata.icon },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.social.socialBanner],
    locale: siteMetadata.language,
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: { "application/rss+xml": `${siteMetadata.siteUrl}/api/rss` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.social.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${inter.variable} ${roboto_mono.variable} ${josefin_sans.variable} ${plex_mono.variable}`}
      suppressHydrationWarning
    >
      <Script
        defer
        src="https://umami.lloydrichards.dev/script.js"
        data-website-id="0504d125-cb01-4703-8dd3-6ee51d56d3b1"
      />
      <body
        className={cn(
          "min-h-dvh w-full lg:max-w-6xl",
          "mosaic-columns grid grid-flow-dense",
          "justify-self-center p-2",
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
          <TooltipProvider>
            <Navbar />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
