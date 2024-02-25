import { inter, josefin_sans, roboto_mono } from "@/styles/font";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./theme-provider";
import { Layout } from "@/components/template/layout/layout";
import "../styles/globals.css";

export const metadata = {
  title: "Lloyd Richards Design",
  description:
    "Digital playground of Lloyd Richards, a designer and developer.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    locale: "en_US",
    url: "https://lloydrichardsdesign.com",
    title: "Lloyd Richards Design",
    description:
      "Digital playground of Lloyd Richards, a designer and developer.",
    images: [
      {
        url: "/images/lloyd_richards_portrait.png",
        width: 400,
        height: 600,
        alt: "Lloyd Richards Portrait",
      },
    ],
    siteName: "Lloyd Richards Design",
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
      <body suppressHydrationWarning={true}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
