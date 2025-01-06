import type { Metadata } from "next";
import { inter, josefin_sans, roboto_mono } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

import { Navbar } from "@/components/organism/navbar";
import { Footer } from "@/components/organism/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { siteMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
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
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/api/rss`,
    },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteMetadata.language}
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
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
