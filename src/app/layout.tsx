import { inter, josefin_sans, roboto_mono } from "@/styles/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Layout } from "@/components/template/layout/layout";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${josefin_sans.variable}`}
    >
      <body>
        <ThemeProvider
          defaultTheme="light"
          enableSystem
          enableColorScheme
          themes={[
            "light-classic",
            "dark-classic",
            "light-professional",
            "dark-professional",
            "light-soft",
            "light-acid",
            "dark-midnight",
          ]}
        >
          <Layout>{children}</Layout>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
